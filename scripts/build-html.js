import { readFileSync, writeFileSync, mkdirSync } from 'fs';

const baseUrl = process.env.BASE_URL || 'https://conference.openapis.org';

// Ensure dist directory exists
mkdirSync('dist', { recursive: true });

// Read, replace, and write
let html = readFileSync('src/index.html', 'utf-8');
html = html.replace(/__BASE_URL__/g, baseUrl);
writeFileSync('dist/index.html', html);

console.log(`✅ HTML built with BASE_URL=${baseUrl}`);
