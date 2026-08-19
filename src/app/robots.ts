import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

/**
 * Required by `output: "export"`: without it Next treats the route as dynamic
 * and refuses to emit a file. (静的エクスポートでは必須)
 */
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // The post-checkout page is per-customer noise, not content. (決済後ページは検索対象外)
      disallow: "/thanks/",
    },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
