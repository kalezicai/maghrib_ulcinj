import type { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope, Amiri } from "next/font/google";
import localFont from "next/font/local";
import "./globals-redesign.css";
import { SITE_URL } from "@/data/redesign/hotel";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const amiri = Amiri({
  subsets: ["arabic", "latin"],
  variable: "--font-arabic",
  display: "swap",
  weight: ["400", "700"],
});

/** Brand display face for the logo wordmark and the hero MAGHRIB title. */
const darky = localFont({
  src: "./fonts/darky-semibold.ttf",
  variable: "--font-display",
  display: "swap",
  weight: "600",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Hotel Maghrib | 100% Halal Hotel Ulcinj, Montenegro — Sea-View Suites & Private Spa",
    template: "%s",
  },
  description:
    "Ulcinj’s premier 100% halal hotel. Alcohol-free sea-view suites on the Adriatic, halal breakfast buffet, private family spa, onsite Masjid & free parking. Book direct.",
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  alternates: {
    canonical: SITE_URL,
    languages: { en: SITE_URL, "x-default": SITE_URL },
  },
  openGraph: {
    type: "website",
    siteName: "Hotel Maghrib Ulcinj",
    locale: "en_US",
    url: SITE_URL,
  },
};

export const viewport: Viewport = {
  themeColor: "#faf8f2",
  width: "device-width",
  initialScale: 1,
};

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "Hotel Maghrib",
  url: SITE_URL,
  logo: `${SITE_URL}/images/hotel-maghrib-logo.png`,
  sameAs: [
    "https://www.booking.com/hotel/me/maghrib.html",
    "https://www.google.com/maps/place/Hotel+Maghrib/@41.9226,19.2161,17z",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "1 Kosovska",
    addressLocality: "Ulcinj",
    postalCode: "85360",
    addressCountry: "ME",
  },
  telephone: "+382 68 007 720",
  email: "info@hotelmaghrib.me",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${cormorant.variable} ${manrope.variable} ${amiri.variable} ${darky.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
        />
      </head>
      <body className="redesign-body">{children}</body>
    </html>
  );
}
