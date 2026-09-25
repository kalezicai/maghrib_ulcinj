import type { Metadata } from "next";
import { PAGE_SEO, NOINDEX_PAGES } from "@/data/redesign/seo";
import { SITE_URL } from "@/data/redesign/hotel";

const BASE_URL = SITE_URL;

/**
 * Builds Next.js Metadata from the PAGE_SEO registry — one source of truth
 * for every page's title, description, keywords and canonical URL.
 */
export function pageMetadata(path: string): Metadata {
  const seo = PAGE_SEO[path];
  if (!seo) return {};
  const canonical = path === "/" ? SITE_URL : `${SITE_URL}${path}`;
  const noindex = path in NOINDEX_PAGES;
  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: { canonical },
    robots: noindex
      ? { index: false, follow: true }
      : {
          index: true,
          follow: true,
          googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
        },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: canonical,
      siteName: "Hotel Maghrib Ulcinj",
      images: [
        {
          url: seo.ogImage,
          width: 1200,
          height: 630,
          alt: seo.keywords[0] ? `${seo.keywords[0]} — Hotel Maghrib, Ulcinj, Montenegro` : "Hotel Maghrib Ulcinj",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [seo.ogImage],
    },
  };
}

export { BASE_URL };
