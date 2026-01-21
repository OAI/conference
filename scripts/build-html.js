import { readFileSync, writeFileSync, mkdirSync } from 'fs';

const baseUrl = process.env.BASE_URL || 'https://conference.openapis.org';
const assetVersion = new Date().toISOString().slice(0, 10).replace(/-/g, '');

// Ensure dist directory exists
mkdirSync('dist', { recursive: true });

// Read, replace, and write
let html = readFileSync('src/index.html', 'utf-8');
html = html.replace(/__BASE_URL__/g, baseUrl);
html = html.replace(/__ASSET_VERSION__/g, assetVersion);
writeFileSync('dist/index.html', html);

console.log(`✅ HTML built with BASE_URL=${baseUrl}, ASSET_VERSION=${assetVersion}`);
