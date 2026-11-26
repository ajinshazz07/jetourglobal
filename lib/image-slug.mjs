/**
 * Shared by the image loader (runs in the browser) and scripts/images.mjs (runs
 * at build time). Remote JETOUR image URLs are self-hosted as resized WebP files:
 *   https://jetourglobal.com/new-static/images/home/culture1.jpg
 *   -> /_img/new-static-images-home-culture1-828.webp
 */
export const IMAGE_WIDTHS = [480, 828, 1200, 1920];
export const IMAGE_HOST = "https://jetourglobal.com/";

export const isSelfHosted = (src) =>
  src.startsWith(IMAGE_HOST) && /\.(png|jpe?g|webp)$/i.test(src);

export const imageSlug = (src) =>
  src
    .slice(IMAGE_HOST.length)
    .replace(/\.[a-z0-9]+$/i, "")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

/** Smallest generated width that covers the requested width. */
export const pickWidth = (width) =>
  IMAGE_WIDTHS.find((w) => w >= width) ?? IMAGE_WIDTHS[IMAGE_WIDTHS.length - 1];
