import { IMAGE_WIDTHS } from "./lib/image-slug.mjs";

/**
 * Static export for GitHub Pages: `npm run build:pages` writes plain
 * HTML/CSS/JS to out/, served under /jetourglobal. There is no server, so
 * API routes and custom headers are not available.
 */
const basePath = process.env.PAGES_BASE_PATH || "";

const nextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  poweredByHeader: false,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  images: {
    // Images are pre-resized to WebP by scripts/images.mjs; the loader picks the right file.
    loader: "custom",
    loaderFile: "./image-loader.mjs",
    deviceSizes: IMAGE_WIDTHS,
    imageSizes: [],
  },
};

export default nextConfig;
