import { db } from "@/db";
import { reviews, spaReservations } from "@/db/schema";
import { getReviews, seedReviewsIfEmpty } from "../actions";
import HotelPortal from "../components/HotelPortal";
import { desc } from "drizzle-orm";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Hotel Maghrib | 100% Halal Hotel in Ulcinj, Montenegro",
  description: "Erleben Sie premium 100% Halal-Luxus im Hotel Maghrib in Ulcinj, Montenegro. Alkoholfrei, Suiten mit Meerblick, privater Spa, Gebetsraum und Halal-Frühstück.",
  keywords: ["Hotel Maghrib Ulcinj", "Halal Hotel Montenegro", "alkoholfreies Hotel Ulcinj", "Halal Urlaub Adria", "Familienhotel Halal"],
  alternates: {
    canonical: "https://hotelmaghrib.me/de",
    languages: {
      "en": "https://hotelmaghrib.me",
      "bs": "https://hotelmaghrib.me/bs",
      "sq": "https://hotelmaghrib.me/sq",
    },
  },
  openGraph: {
    title: "Hotel Maghrib | 100% Halal Hotel in Ulcinj",
    description: "Premium Halal-Unterkunft in Ulcinj. Suiten mit Meerblick, Halal-Frühstück, privater Spa und Gebetsraum.",
    url: "https://hotelmaghrib.me/de",
    siteName: "Hotel Maghrib Ulcinj",
    images: [{ url: "/images/gallery/hotel-maghrib-gallery-03.webp", width: 1200, height: 630, alt: "Hotel Maghrib Halal Hotel Ulcinj" }],
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hotel Maghrib | 100% Halal Hotel in Ulcinj",
    description: "Premium Halal-Unterkunft in Ulcinj. Alkoholfrei, privater Spa, Gebetsraum.",
    images: ["/images/gallery/hotel-maghrib-gallery-03.webp"],
  },
};

export default async function DePage() {
  await seedReviewsIfEmpty();

  const guestReviews = await getReviews();
  const activeSpaReservations = await db
    .select()
    .from(spaReservations)
    .orderBy(desc(spaReservations.createdAt));

  return <HotelPortal initialReviews={guestReviews} initialSpaReservations={activeSpaReservations} />;
}
