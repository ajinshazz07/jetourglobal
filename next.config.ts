import type { NextConfig } from "next";

const isProduction =
  process.env.GITHUB_ACTIONS === "true" || process.env.NODE_ENV === "production";
const repoName = "jetourglobal";
const basePath = isProduction ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
