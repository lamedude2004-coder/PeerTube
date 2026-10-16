# Base44 sandbox dev image for PeerTube.
#
# A plain Node runtime plus the system tools PeerTube needs. The repository is
# bind-mounted at /app and dependencies are installed at container startup (see
# docker-compose.base44.yml), so source edits are reflected without a rebuild.
# This image is for the sandbox only: production uses support/docker/production.

FROM node:22-bookworm

# Let corepack download pnpm without waiting for an interactive answer
ENV COREPACK_ENABLE_DOWNLOAD_PROMPT=0
ENV PNPM_HOME=/pnpm
ENV PATH=$PNPM_HOME:$PATH

# ffmpeg       transcoding, thumbnails, storyboards (checked at server boot)
# curl         compose healthcheck
# python3/gcc  native modules without a prebuilt binary
RUN apt-get update \
  && apt-get install -y --no-install-recommends \
    ffmpeg \
    curl \
    python3 \
    build-essential \
    ca-certificates \
    openssl \
  && rm -rf /var/lib/apt/lists/*

# Same pnpm version as the repository's packageManager field
RUN corepack enable \
  && corepack install --global pnpm@10.15.1

WORKDIR /app
