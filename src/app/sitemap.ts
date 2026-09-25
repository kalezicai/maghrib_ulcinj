import type { MetadataRoute } from "next";
import { PAGE_SEO, NOINDEX_PAGES } from "@/data/redesign/seo";

const SITE_URL = "https://hotelmaghrib.me";

export const dynamic = "force-static";

/**
 * Sitemap for the redesigned multipage site — lastmod pins content freshness
 * dates new pages genuinely reflect; noindex pages are excluded.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-09-25");
  return Object.values(PAGE_SEO)
    .filter((page) => !(page.path in NOINDEX_PAGES))
    .map((page) => ({
      url: page.path === "/" ? SITE_URL : `${SITE_URL}${page.path}`,
      lastModified,
      changeFrequency: "weekly",
      priority: page.path === "/" ? 1 : 0.8,
    }));
}
