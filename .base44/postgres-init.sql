-- Extensions PeerTube requires (usually created by PeerTube itself at boot,
-- done here at volume creation time so the first start cannot fail on it).
\c peertube_dev

CREATE EXTENSION IF NOT EXISTS pg_trgm;
CREATE EXTENSION IF NOT EXISTS unaccent;
