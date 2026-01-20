/**
 * Configuration and Helper Functions
 *
 * Provides base path handling for assets
 */

// Asset version for cache busting - increment when deploying changes
const ASSET_VERSION = "1";

// Determine base path based on environment
// Uses BASE_PATH environment variable from build process
// Development (localhost): empty string (for local dev server)
// Production: set via BASE_PATH env var in build
const BASE_PATH = (() => {
  if (typeof window !== "undefined") {
    const hostname = window.location.hostname;
    const isDevelopment = hostname === "localhost" || hostname === "127.0.0.1";
    return isDevelopment ? "" : import.meta.env.BASE_PATH;
  }
  return import.meta.env.BASE_PATH;
})();

/**
 * Asset path helper
 *
 * @param {string} path - Asset path (must start with /)
 * @returns {string} - Full asset path with base
 *
 * @example
 * asset('/images/logo.svg') // Returns '/images/logo.svg' in production
 * asset('/images/logo.svg') // Returns '/images/logo.svg' in development
 */
export function asset(path) {
  if (!path.startsWith("/")) {
    console.warn(`Asset path should start with /: ${path}`);
    return `${BASE_PATH}/${path}?v=${ASSET_VERSION}`;
  }
  return `${BASE_PATH}${path}?v=${ASSET_VERSION}`;
}

/**
 * Configuration object
 */
export const config = {
  BASE_PATH,
  EVENT_DATE: "2026-02-18T09:15:00",
  EVENT_LOCATION:
    "San Jose Convention Center, 150 W San Carlos St, San Jose, CA 95113, USA",
  SOCIAL_LINKS: {
    linkedin: "https://www.linkedin.com/company/openapis-org",
    youtube: "https://www.youtube.com/@OpenAPIsOrg",
    openapis: "https://openapis.org",
  },
};
