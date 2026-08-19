import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

/**
 * Required by `output: "export"`: without it Next treats the route as dynamic
 * and refuses to emit a file. `new Date()` below is therefore evaluated once,
 * at build time. (静的エクスポートでは必須。lastModified はビルド時刻になる)
 */
export const dynamic = "force-static";

/**
 * `/thanks/` is deliberately absent: it is the post-checkout landing page and
 * carries its own `robots: noindex`. Listing it here would ask crawlers to
 * index a page we explicitly told them not to.
 * (/thanks/ は決済後の着地ページで noindex なので、意図的に載せない)
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: `${site.url}/`, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${site.url}/privacy/`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${site.url}/terms/`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${site.url}/legal/tokushoho/`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];
}
