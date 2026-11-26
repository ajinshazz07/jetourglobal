/** @type {import('next').NextConfig} */
const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
];

const nextConfig = {
  poweredByHeader: false,
  images: {
    // Next.js converts every image to AVIF/WebP at the requested responsive size.
    formats: ["image/avif", "image/webp"],
    deviceSizes: [360, 480, 640, 768, 1024, 1280, 1600, 1920, 2560],
    // Official JETOUR asset host. Replace with the client's own CDN once assets are self-hosted.
    remotePatterns: [
      { protocol: "https", hostname: "jetourglobal.com", pathname: "/new-static/**" },
      { protocol: "https", hostname: "jetourglobal.com", pathname: "/data/cms/**" },
    ],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
