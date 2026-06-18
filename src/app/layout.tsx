import type { ReactNode } from "react";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL("https://hotelmaghrib.me"),
  title: {
    default: "Hotel Maghrib | Premium 100% Halal Hotel in Ulcinj, Montenegro",
    template: "%s"
  },
  description: "Experience premium, 100% halal certified family luxury at Hotel Maghrib in Ulcinj, Montenegro. Alcohol-free, sea-view suites, private spa reservations, and an onsite Masjid.",
  keywords: [
    "Hotel Maghrib Ulcinj", "Halal Hotel Montenegro", "halal hotel Ulcinj",
    "Islamic oriented hotel Montenegro", "alcohol free hotel Ulcinj",
    "private spa hotel Montenegro", "Muslim friendly hotel Montenegro",
    "family halal hotel Ulcinj", "Montenegro halal accommodation"
  ],
  alternates: {
    canonical: "https://hotelmaghrib.me",
    languages: {
      "en": "https://hotelmaghrib.me",
      "bs": "https://hotelmaghrib.me/bs",
      "sq": "https://hotelmaghrib.me/sq",
      "de": "https://hotelmaghrib.me/de",
    },
  },
  openGraph: {
    title: "Hotel Maghrib | Premium Halal Luxury in Ulcinj, Montenegro",
    description: "Nestled next to iconic pine trees, offering spacious sea-view suites, delicious 100% halal breakfast, and private-use spa and pool. Perfect for conservative families.",
    url: "https://hotelmaghrib.me",
    siteName: "Hotel Maghrib Ulcinj",
    images: [{ url: "/images/gallery/hotel-maghrib-gallery-03.webp", width: 1200, height: 630, alt: "Hotel Maghrib halal hotel Ulcinj Montenegro" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hotel Maghrib | Premium Halal Luxury in Montenegro",
    description: "Discover a truly alcohol-free, 100% halal family resort overlooking the Adriatic Sea. Free private parking, onsite Masjid, and conflict-free private spa booking.",
    images: ["/images/gallery/hotel-maghrib-gallery-03.webp"],
  },
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is Hotel Maghrib a fully halal hotel?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes, Hotel Maghrib is a 100% halal hotel. All food served is halal certified, the premises are completely alcohol-free, and the environment respects Islamic values with a dedicated prayer room and Qibla direction markers in every room." }
    },
    {
      "@type": "Question",
      "name": "Does Hotel Maghrib have a private spa?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes, Hotel Maghrib features a private wellness center with an indoor swimming pool, sauna, and jacuzzi. Guests can book exclusive private family slots to have the entire facility to themselves, ensuring complete privacy and modesty." }
    },
    {
      "@type": "Question",
      "name": "Is there a prayer room at Hotel Maghrib?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes, Hotel Maghrib has a dedicated air-conditioned Masjid (prayer room) on site. All guest rooms also feature clear Qibla direction markers for convenient daily prayers." }
    },
    {
      "@type": "Question",
      "name": "What are the check-in and check-out times at Hotel Maghrib?",
      "acceptedAnswer": { "@type": "Answer", "text": "Check-in is at 2:00 PM and check-out is at 11:00 AM. Early check-in and late check-out may be available upon request." }
    },
    {
      "@type": "Question",
      "name": "Is breakfast included at Hotel Maghrib?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes, a rich 100% halal-certified breakfast buffet is included with your stay, featuring fresh pastries, traditional dishes, fresh fruits, and gourmet egg dishes." }
    },
    {
      "@type": "Question",
      "name": "Does Hotel Maghrib offer airport transfers?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes, airport transfers from Podgorica (TGD) and Tivat (TIV) airports can be arranged. Please contact the hotel directly to schedule your transfer." }
    },
    {
      "@type": "Question",
      "name": "Where is Hotel Maghrib located in Ulcinj?",
      "acceptedAnswer": { "@type": "Answer", "text": "Hotel Maghrib is located at 1 Kosovska, Ulcinj 85360, Montenegro, on a quiet hill next to the iconic pine trees (Borici) and a short walk from Small Beach (Mala Plaža) and the Old Town." }
    },
    {
      "@type": "Question",
      "name": "Does Hotel Maghrib serve alcohol?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. Hotel Maghrib maintains a completely alcohol-free premises. No alcohol is served anywhere in the hotel, ensuring a peaceful, family-friendly environment for all guests." }
    }
  ]
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://hotelmaghrib.me" },
    { "@type": "ListItem", "position": 2, "name": "Gallery", "item": "https://hotelmaghrib.me/gallery" },
    { "@type": "ListItem", "position": 3, "name": "Halal Hotel Ulcinj", "item": "https://hotelmaghrib.me/halal-hotel-ulcinj" },
    { "@type": "ListItem", "position": 4, "name": "Brand Brief", "item": "https://hotelmaghrib.me/brand-brief" },
  ]
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#FAF9F6" />
        <meta name="robots" content="index, follow" />
        <link rel="alternate" hrefLang="en" href="https://hotelmaghrib.me" />
        <link rel="alternate" hrefLang="bs" href="https://hotelmaghrib.me/bs" />
        <link rel="alternate" hrefLang="sq" href="https://hotelmaghrib.me/sq" />
        <link rel="alternate" hrefLang="de" href="https://hotelmaghrib.me/de" />
        <link rel="alternate" hrefLang="x-default" href="https://hotelmaghrib.me" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      </head>
      <body className={`${playfair.variable} ${inter.variable} font-sans bg-[#FAF9F6] text-stone-800 antialiased`}>
        {children}
      </body>
    </html>
  );
}
