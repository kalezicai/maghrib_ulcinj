import GalleryPage from "./GalleryPage";

export const metadata = {
  title: "Photo Gallery | Hotel Maghrib Ulcinj, Montenegro",
  description: "Browse authentic photos of Hotel Maghrib — sea-view suites, halal breakfast buffet, private spa & pool, prayer room, and stunning Adriatic views in Ulcinj, Montenegro.",
  keywords: [
    "Hotel Maghrib photos",
    "Halal hotel Ulcinj pictures",
    "Montenegro halal hotel gallery",
    "Hotel Maghrib sea view",
    "Ulcinj hotel pool",
    "Hotel Maghrib breakfast",
    "Hotel Maghrib prayer room",
  ],
  openGraph: {
    title: "Photo Gallery | Hotel Maghrib — Halal Hotel Ulcinj",
    description: "Real photos from Hotel Maghrib: sea-view rooms, halal dining, private spa, and family-friendly spaces on the Adriatic coast.",
    url: "https://hotelmaghrib.me/gallery",
    siteName: "Hotel Maghrib Ulcinj",
    images: [
      {
        url: "/images/gallery/hotel-maghrib-gallery-03.webp",
        width: 1200,
        height: 630,
        alt: "Hotel Maghrib sunset over Adriatic Sea",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Photo Gallery | Hotel Maghrib — Halal Hotel Ulcinj",
    description: "Real photos from Hotel Maghrib: sea-view rooms, halal dining, private spa, and family-friendly spaces on the Adriatic coast.",
    images: ["/images/gallery/hotel-maghrib-gallery-03.webp"],
  },
  alternates: { canonical: "https://hotelmaghrib.me/gallery" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  "name": "Hotel Maghrib Photo Gallery",
  "description": "Photos of Hotel Maghrib — premium halal hotel in Ulcinj, Montenegro.",
  "url": "https://hotelmaghrib.me/gallery",
};

export default function Gallery() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <GalleryPage />
    </>
  );
}
