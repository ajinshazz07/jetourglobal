import type { MetadataRoute } from "next";
import { site } from "@/config/site";

export const dynamic = "force-static";

// Search engines only read robots.txt at the root of a domain, so this file takes
// effect once the site moves to its own domain. The sitemap works either way.
export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", allow: "/" }, sitemap: `${site.url}/sitemap.xml` };
}
