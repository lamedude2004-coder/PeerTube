function register ({ registerHook, peertubeHelpers }) {
  registerHook({
    target: 'action:video-watch.player.loaded',
    handler: async ({ player, video }) => {
      try {
        const base = peertubeHelpers.getBaseRouterRoute()
        const res = await fetch(`${base}/playback/${video.uuid}`)
        if (!res.ok) return
        const data = await res.json()
        if (!data.playbackId) return

        // Replace the PeerTube player source with the Mux HLS stream
        player.src({
          src: `https://stream.mux.com/${data.playbackId}.m3u8`,
          type: 'application/x-mpegURL'
        })
      } catch (err) {
        console.error('Mux plugin: failed to load playback', err)
      }
    }
  })
}

export { register }
