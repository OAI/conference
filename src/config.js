/**
 * Configuration and Helper Functions
 *
 * Provides base path handling for assets
 */

// Asset version for cache busting - increment when deploying changes
const ASSET_VERSION = "1";

// BASE_PATH kept for backwards compatibility if used elsewhere
const BASE_PATH = import.meta.env.BASE_PATH || "";

/**
 * Asset path helper - returns relative paths for portability
 *
 * @param {string} path - Asset path (e.g., /images/logo.svg)
 * @returns {string} - Relative asset path (e.g., ./images/logo.svg?v=1)
 *
 * @example
 * asset('/images/logo.svg') // Returns './images/logo.svg?v=1'
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
  EVENT_DATE: "2025-12-11T09:15:00",
  EVENT_LOCATION: "CNIT Forest, 2 Pl. de la Defense, 92092 Puteaux, France",
  SOCIAL_LINKS: {
    linkedin: "https://www.linkedin.com/company/openapis-org",
    youtube: "https://www.youtube.com/@OpenAPIsOrg",
    openapis: "https://openapis.org",
  },
};
