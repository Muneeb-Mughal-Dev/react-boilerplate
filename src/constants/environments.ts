/**
 * Global environment variable
 */

export const Env = Object.freeze({
  apiUrl: import.meta.env.VITE_API_URL ?? "",
  apiPrefix: import.meta.env.VITE_API_PREFIX ?? "",
  appTitle: import.meta.env.VITE_APP_TITLE ?? "",
});
