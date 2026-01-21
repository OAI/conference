/**
 * Configuration and Helper Functions
 *
 * Provides base path handling for assets
 */

// Asset version for cache busting - set to current date during build (YYYYMMDD format)
const ASSET_VERSION = import.meta.env.ASSET_VERSION || Date.now();

// BASE_PATH kept for backwards compatibility if used elsewhere
const BASE_PATH = import.meta.env.BASE_PATH || "";

/**
 * Asset path helper - returns relative paths for portability
 *
 * @param {string} path - Asset path (e.g., /images/logo.svg)
 * @returns {string} - Relative asset path (e.g., ./images/logo.svg?v=1687699200000)
 *
 * @example
 * asset('/images/logo.svg') // Returns './images/logo.svg?v=1687699200000'
 */
export function asset(path) {
  // Convert to relative path for portability
  if (path.startsWith("/")) {
    path = "." + path;
  } else if (!path.startsWith("./") && !path.startsWith("../")) {
    path = "./" + path;
  }
  return `${path}?v=${ASSET_VERSION}`;
}

/**
 * Configuration object
 */
export const config = {
  BASE_PATH,
  EVENT_DATE: "2026-02-20T09:00:00",
  EVENT_LOCATION:
    "San Jose Convention Center, 150 W San Carlos St, San Jose, CA 95113, USA",
  SOCIAL_LINKS: {
    linkedin: "https://www.linkedin.com/company/openapis-org",
    youtube: "https://www.youtube.com/@OpenAPIsOrg",
    openapis: "https://openapis.org",
  },
};
