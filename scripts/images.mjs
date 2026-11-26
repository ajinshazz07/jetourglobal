/**
 * Self-hosts and resizes every JETOUR image referenced in config/site.ts.
 *
 * 1. Downloads each original once into images-src/ (committed, so builds do not
 *    depend on jetourglobal.com being reachable).
 * 2. Writes WebP versions at IMAGE_WIDTHS into public/_img/ (generated, ignored
 *    by git). Unchanged images are skipped, so repeat runs are fast.
 *
 * Runs automatically before `npm run dev`, `npm run build` and `npm run build:pages`.
 */
import { existsSync, mkdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import path from "node:path";
import sharp from "sharp";
import { IMAGE_HOST, IMAGE_WIDTHS, imageSlug, isSelfHosted } from "../lib/image-slug.mjs";

const root = path.resolve(import.meta.dirname, "..");
const srcDir = path.join(root, "images-src");
const outDir = path.join(root, "public", "_img");
mkdirSync(srcDir, { recursive: true });
mkdirSync(outDir, { recursive: true });

// Collect image URLs from the config, expanding the `${CDN}` shorthand.
const config = readFileSync(path.join(root, "config", "site.ts"), "utf8");
const cdn = config.match(/const CDN = "([^"]+)"/)?.[1] ?? "";
const urls = new Set();
for (const [, raw] of config.matchAll(/["`]((?:\$\{CDN\}|https:\/\/)[^"`]+)["`]/g)) {
  const url = raw.replace("${CDN}", cdn);
  if (isSelfHosted(url)) urls.add(url);
}

let downloaded = 0;
let written = 0;
for (const url of urls) {
  const slug = imageSlug(url);
  const original = path.join(srcDir, slug + path.extname(url).toLowerCase());

  if (!existsSync(original)) {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Download failed (${res.status}): ${url}`);
    writeFileSync(original, Buffer.from(await res.arrayBuffer()));
    downloaded++;
  }

  const srcTime = statSync(original).mtimeMs;
  for (const width of IMAGE_WIDTHS) {
    const out = path.join(outDir, `${slug}-${width}.webp`);
    if (existsSync(out) && statSync(out).mtimeMs >= srcTime) continue;
    await sharp(original)
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 78, alphaQuality: 90, effort: 5 })
      .toFile(out);
    written++;
  }
}

console.log(`images: ${urls.size} sources from ${IMAGE_HOST}, ${downloaded} downloaded, ${written} WebP files written`);
