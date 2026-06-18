import { BrandBriefClient } from "./BrandBriefClient";

export const metadata = {
  title: "Brand Brief & Design Narrative | Hotel Maghrib Ulcinj",
  description: "Explore the architectural design systems, light-theme token palettes, and SEO optimization strategies for Hotel Maghrib, Ulcinj, Montenegro.",
  keywords: [
    "Hotel Maghrib brand", "Ulcinj hotel design", "halal hotel branding",
    "Montenegro hotel architecture", "luxury halal hospitality",
    "Hotel Maghrib design system", "Ulcinj Montenegro hotel"
  ],
  openGraph: {
    title: "Brand Brief & Design Narrative | Hotel Maghrib Ulcinj",
    description: "Explore the architectural design systems, light-theme token palettes, and SEO optimization strategies for Hotel Maghrib, Ulcinj, Montenegro.",
    url: "https://hotelmaghrib.me/brand-brief",
    siteName: "Hotel Maghrib Ulcinj",
    images: [{ url: "/images/gallery/hotel-maghrib-gallery-03.webp", width: 1200, height: 630, alt: "Hotel Maghrib design and brand narrative" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brand Brief & Design Narrative | Hotel Maghrib Ulcinj",
    description: "Design systems, token palettes, and SEO strategy for Hotel Maghrib, Ulcinj, Montenegro.",
    images: ["/images/gallery/hotel-maghrib-gallery-03.webp"],
  },
  alternates: { canonical: "https://hotelmaghrib.me/brand-brief" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Hotel",
  "name": "Hotel Maghrib",
  "description": "Premium 100% halal hotel in Ulcinj, Montenegro — architectural design and brand narrative.",
  "url": "https://hotelmaghrib.me/brand-brief",
  "telephone": "+382 68 007 720",
  "address": { "@type": "PostalAddress", "streetAddress": "1 Kosovska", "addressLocality": "Ulcinj", "addressCountry": "ME" },
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "136", "bestRating": "5" },
};

export default function BrandBriefPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <BrandBriefClient />
    </>
  );
}
