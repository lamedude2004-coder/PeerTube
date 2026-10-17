const { createReadStream } = require('fs')
const { stat } = require('fs/promises')

const MUX_API = 'https://api.mux.com'

function authHeader () {
  const id = process.env.MUX_TOKEN_ID
  const secret = process.env.MUX_TOKEN_SECRET
  if (!id || !secret) throw new Error('MUX_TOKEN_ID or MUX_TOKEN_SECRET not set')
  return 'Basic ' + Buffer.from(`${id}:${secret}`).toString('base64')
}

async function muxFetch (path, options = {}) {
  const res = await fetch(`${MUX_API}${path}`, {
    ...options,
    headers: {
      Authorization: authHeader(),
      'Content-Type': 'application/json',
      ...options.headers
    }
  })
  if (!res.ok) {
    const body = await res.text().catch(() => '')
    throw new Error(`Mux API ${path} failed: ${res.status} ${body}`)
  }

  const body = await res.text()
  return body ? JSON.parse(body) : undefined
}

async function createDirectUpload () {
  const data = await muxFetch('/video/v1/uploads', {
    method: 'POST',
    body: JSON.stringify({
      cors_origin: '*',
      new_asset_settings: { playback_policy: 'public' }
    })
  })
  return data.data
}

async function uploadFileToMux (uploadUrl, filePath, fileSize) {
  const stream = createReadStream(filePath)
  const res = await fetch(uploadUrl, {
    method: 'PUT',
    headers: { 'Content-Length': String(fileSize) },
    body: stream,
    duplex: 'half'
  })
  if (!res.ok) {
    const body = await res.text().catch(() => '')
    throw new Error(`Mux file upload failed: ${res.status} ${body}`)
  }
}

async function waitForAsset (uploadId, logger) {
  for (let i = 0; i < 120; i++) {
    await new Promise(r => setTimeout(r, 5000))
    const data = await muxFetch(`/video/v1/uploads/${uploadId}`)
    if (data.data.asset_id) return data.data.asset_id
    logger.debug(`Mux: waiting for asset (attempt ${i + 1})`)
  }
  throw new Error('Mux: timed out waiting for asset')
}

async function getPlaybackId (assetId) {
  const data = await muxFetch(`/video/v1/assets/${assetId}`)
  const playback = data.data.playback_ids && data.data.playback_ids[0]
  if (!playback) throw new Error('Mux: no playback ID on asset')
  return { playbackId: playback.id, assetId }
}

async function deleteMuxAsset (assetId) {
  await muxFetch(`/video/v1/assets/${assetId}`, { method: 'DELETE' })
}

async function register ({
  registerHook,
  storageManager,
  peertubeHelpers,
  getRouter
}) {
  const logger = peertubeHelpers.logger

  // ---- Upload to Mux when a video is uploaded ----
  registerHook({
    target: 'action:api.video.uploaded',
    handler: async ({ video }) => {
      if (!process.env.MUX_TOKEN_ID) {
        logger.warn('Mux: MUX_TOKEN_ID not set, skipping upload')
        return
      }

      try {
        // Small delay — the video file may still be settling on disk
        await new Promise(r => setTimeout(r, 3000))

        const files = await peertubeHelpers.videos.getFiles(video.id)
        if (!files) {
          logger.warn('Mux: getFiles returned no result for video ' + video.uuid + ', skipping')
          return
        }

        const webFiles = (files.webVideo && files.webVideo.videoFiles) || []
        const hlsFiles = (files.hls && files.hls.videoFiles) || []
        const allFiles = webFiles.concat(hlsFiles)
        const file = allFiles.find(f => f && f.path)

        if (!file) {
          logger.warn('Mux: no local file for video ' + video.uuid + ', skipping')
          return
        }

        logger.info('Mux: uploading video ' + video.uuid + ' (file: ' + file.path + ')')

        const upload = await createDirectUpload()
        const fileStat = await stat(file.path)
        await uploadFileToMux(upload.url, file.path, fileStat.size)

        logger.info('Mux: file uploaded for ' + video.uuid + ', waiting for asset...')
        const assetId = await waitForAsset(upload.id, logger)
        const result = await getPlaybackId(assetId)

        await storageManager.storeData('mux-playback-' + video.uuid, result.playbackId)
        await storageManager.storeData('mux-asset-' + video.uuid, result.assetId)

        logger.info('Mux: video ' + video.uuid + ' ready — playback ID: ' + result.playbackId)
      } catch (err) {
        logger.error('Mux: failed to process video ' + video.uuid, { err: err.message, stack: err.stack })
      }
    }
  })

  // ---- Delete Mux asset when video is deleted ----
  registerHook({
    target: 'action:api.video.deleted',
    handler: async ({ video }) => {
      try {
        const assetId = await storageManager.getData('mux-asset-' + video.uuid)
        if (!assetId) return

        await deleteMuxAsset(assetId)
        logger.info('Mux: deleted asset ' + assetId + ' for video ' + video.uuid)
      } catch (err) {
        logger.error('Mux: failed to delete asset for ' + video.uuid, { err: err.message })
      }

      await storageManager.deleteData('mux-playback-' + video.uuid)
      await storageManager.deleteData('mux-asset-' + video.uuid)
    }
  })

  // ---- Custom route: client fetches the Mux playback ID ----
  const router = getRouter()
  router.get('/playback/:videoUUID', async (req, res) => {
    try {
      const playbackId = await storageManager.getData('mux-playback-' + req.params.videoUUID)
      res.json({ playbackId: playbackId || null })
    } catch {
      res.json({ playbackId: null })
    }
  })

  logger.info('Mux plugin registered')
}

async function unregister () {
  // Hooks are automatically unregistered by PeerTube on plugin uninstall
}

module.exports = { register, unregister }
