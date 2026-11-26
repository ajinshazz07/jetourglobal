/**
 * Static export for GitHub Pages: `npm run build:pages` writes plain
 * HTML/CSS/JS to out/, served under /jetourglobal. There is no server, so
 * API routes, image optimization and custom headers are not available.
 */
const basePath = process.env.PAGES_BASE_PATH || "";

const nextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  poweredByHeader: false,
  images: {
    // No server to resize images; remote images load at their original size.
    unoptimized: true,
  },
};

export default nextConfig;
