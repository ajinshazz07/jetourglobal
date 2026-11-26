"use client";

import { imageSlug, isSelfHosted, pickWidth } from "./lib/image-slug.mjs";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** next/image loader: serves the pre-generated WebP made by scripts/images.mjs. */
export default function imageLoader({ src, width }) {
  if (!isSelfHosted(src)) return src;
  return `${basePath}/_img/${imageSlug(src)}-${pickWidth(width)}.webp`;
}
