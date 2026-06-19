import { getReviews } from "@/data/reviews";
import HotelPortal from "./components/HotelPortal";

// High-end, custom SEO metadata for Hotel Maghrib
export const metadata = {
  title: "Hotel Maghrib | Premium 100% Halal Hotel in Ulcinj, Montenegro",
  description: "Experience luxury 100% halal hospitality at Hotel Maghrib in Ulcinj, Montenegro. Clean, alcohol-free, sea-view suites, private family spa hours, and a dedicated prayer room.",
  keywords: [
    "Hotel Maghrib Ulcinj",
    "Halal Hotel Montenegro",
    "Islamic oriented hotel Montenegro",
    "Alcohol free hotel Ulcinj",
    "Private spa hotel Montenegro",
    "Luxury family hotel Ulcinj",
    "Montenegro halal accommodation",
    "Ulcinj sea view hotel",
    "Mala Plaza family hotel"
  ],
  openGraph: {
    title: "Hotel Maghrib | Premium Halal Luxury in Ulcinj, Montenegro",
    description: "Nestled next to iconic pine trees, offering spacious sea-view suites, delicious 100% halal breakfast, and private-use spa and pool. Perfect for conservative families.",
    url: "https://hotelmaghrib.me",
    siteName: "Hotel Maghrib Ulcinj",
    images: [
      {
        url: "/images/gallery/hotel-maghrib-gallery-03.webp",
        width: 1200,
        height: 630,
        alt: "Beautiful sunset view from Hotel Maghrib in Ulcinj, Montenegro",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hotel Maghrib | Premium Halal Luxury in Montenegro",
    description: "Discover a truly alcohol-free, 100% halal family resort overlooking the Adriatic Sea. Free private parking, onsite Masjid, and conflict-free private spa booking.",
    images: ["/images/gallery/hotel-maghrib-gallery-03.webp"],
  },
  alternates: {
    canonical: "https://hotelmaghrib.me",
  },
};

export default function HomePage() {
  const guestReviews = getReviews();

  // JSON-LD Structured Data Schema for rich Google snippets
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    "name": "Hotel Maghrib",
    "image": [
      "https://hotelmaghrib.me/images/gallery/hotel-maghrib-gallery-03.webp",
      "https://hotelmaghrib.me/images/gallery/hotel-maghrib-gallery-10.webp",
      "https://hotelmaghrib.me/images/gallery/hotel-maghrib-gallery-04.webp"
    ],
    "@id": "https://www.google.com/maps/place/Hotel+Maghrib/@41.9226016,19.211229,17z",
    "url": "https://hotelmaghrib.me",
    "telephone": "+382 68 007 720",
    "priceRange": "€169 - €250",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1 Kosovska",
      "addressLocality": "Ulcinj",
      "postalCode": "85360",
      "addressCountry": "ME"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 41.9225977,
      "longitude": 19.2160999
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "136",
      "bestRating": "5",
      "worstRating": "1"
    },
    "amenityFeature": [
      {
        "@type": "LocationFeatureSpecification",
        "name": "100% Halal Gastronomy",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Alcohol-Free Premises",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Private Pool & Spa Booking Simulator",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Onsite Masjid (Prayer Room)",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Free Private Parking",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Qibla Direction markings",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Scenic Sea View Balconies",
        "value": true
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HotelPortal
        initialReviews={guestReviews}
        initialSpaReservations={[]}
      />
    </>
  );
}
