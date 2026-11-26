# JETOUR — Premium Single-Page Website

Next.js 15 (App Router) · React 19 · TypeScript · no CMS, no accounts, no database.

## Run
```
npm install
npm run dev            # http://localhost:3000
npm run build && npm start
```

## Administrators: where to edit
**Everything editable is in [`config/site.ts`](config/site.ts)**:

| Object | Controls |
|---|---|
| `theme` | colours, the single metallic gradient stroke, font |
| `site` | domain, SEO title/description |
| `navigation` | header links (Gallery deliberately excluded) |
| `hero` | headline, supporting text, image, CTAs |
| `vehicles` | models, captions, 3 verified specs, cutouts, gallery photos, tech features, `enabled` flag |
| `world`, `technology`, `media` | editorial content (media shows max 3 items) |
| `contact` | enquiry types, consent text |
| `gallery` | hover delay / interval, extra brand images |
| `footer` | company info, social links, legal links, copyright |

Optional models (DASHING, X70, X70 PLUS, X90 PLUS, G700 TOPFIRE) are in `vehicles` with `enabled: false`.
They appear only once they have 3 verified specs, a cutout and `enabled: true`.

Access control: the public site has no editing surface. Content changes go through this private
repository and a deployment, so only people with repository/hosting access can change the site.

## Enquiry form backend (required before launch)
Copy `.env.example` to `.env.local` (or set in your host) and set `ENQUIRY_WEBHOOK_URL` to the client's approved
CRM / email / secure-database HTTPS endpoint (optional `ENQUIRY_WEBHOOK_TOKEN`, `ALLOWED_ORIGIN`).
Without it the API returns 503 and the form shows an error — it never fakes success.
Spam protection: honeypot, minimum fill time, same-origin check, per-IP rate limit (server-side validation repeated).
For high-traffic production, add Cloudflare Turnstile or reCAPTCHA and a shared rate-limit store.

## Images
Images are referenced from the official JETOUR asset host and served through `next/image`
(AVIF/WebP, responsive sizes, lazy loading). For production, place authorized assets in `/public`
or the client's CDN and update the URLs in `config/site.ts` (and `remotePatterns` in `next.config.mjs`).
