# OpenAPI Conference website

## Prerequisites

- Node.js 24+
- npm or yarn

## Quick Start

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

The site will be available at `http://localhost:3000`

The dev server runs three processes concurrently:

- **JS Bundler** - Watches and rebuilds JavaScript with esbuild
- **CSS Compiler** - Watches and rebuilds Tailwind CSS
- **HTTP Server** - Serves the `dist/` directory

### Build for Production

```bash
npm run build
```

## Deployment

The `dist/` directory contains everything needed for deployment:

```
dist/
├── index.html     # Main HTML
├── main.js        # Bundled JavaScript
├── output.css     # Compiled CSS
└── images         # Copied from public/images
```

## Available Scripts

- `npm run dev` - Start development server with watch mode
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run clean` - Remove dist directory
