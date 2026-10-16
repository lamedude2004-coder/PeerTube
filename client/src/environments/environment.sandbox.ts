// Sandbox dev environment: identical to environment.hmr.ts, except the backend
// URLs are left empty so every client-side URL falls back to window.location.origin.
//
// environment.hmr.ts hardcodes http://localhost:9000, which only works when the
// browser runs on the same machine as the backend. In the Base44 sandbox the
// browser is remote and reaches the app through the Angular dev server proxy, so
// absolute URLs must use the current origin instead (see docker-compose.base44.yml).
export const environment = {
  production: false,
  hmr: true,
  apiUrl: '',
  originServerUrl: '',
  embedUrl: ''
}
