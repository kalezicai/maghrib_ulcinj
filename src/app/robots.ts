import type { MetadataRoute } from "next";
import { SITE_URL } from "@/data/redesign/hotel";

export const dynamic = "force-static";

/**
 * robots.txt — explicit crawl policy for search and AI answer engines.
 * AI crawlers (GPTBot, PerplexityBot, ClaudeBot, OAI-SearchBot, etc.) are
 * deliberately ALLOWED: being cited by answer engines is a core goal.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      {
        // Google's AI-training crawler — allowed for citation in AI Overviews.
        userAgent: "Google-Extended",
        allow: "/",
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
