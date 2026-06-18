import { db } from "@/db";
import { reviews, spaReservations } from "@/db/schema";
import { getReviews, seedReviewsIfEmpty } from "../actions";
import HotelPortal from "../components/HotelPortal";
import { desc } from "drizzle-orm";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Hotel Maghrib | 100% Hotel Hallall në Ulqin, Mal i Zi",
  description: "Përjetoni luksin premium 100% hallall në Hotel Maghrib në Ulqin, Mal i Zi. Pa alkool, suite me pamje nga deti, spa privat, dhomë lutjesh dhe mëngjes hallall.",
  keywords: ["Hotel Maghrib Ulqin", "hotel hallall Mal i Zi", "hotel pa alkool Ulqin", "pushim hallall Adriatik", "hotel familjar hallall"],
  alternates: {
    canonical: "https://hotelmaghrib.me/sq",
    languages: {
      "en": "https://hotelmaghrib.me",
      "bs": "https://hotelmaghrib.me/bs",
      "de": "https://hotelmaghrib.me/de",
    },
  },
  openGraph: {
    title: "Hotel Maghrib | 100% Hotel Hallall në Ulqin",
    description: "Akomodim premium hallall në Ulqin. Suite me pamje nga deti, mëngjes hallall, spa privat dhe dhomë lutjesh.",
    url: "https://hotelmaghrib.me/sq",
    siteName: "Hotel Maghrib Ulqin",
    images: [{ url: "/images/gallery/hotel-maghrib-gallery-03.webp", width: 1200, height: 630, alt: "Hotel Maghrib hotel hallall Ulqin" }],
    locale: "sq_AL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hotel Maghrib | 100% Hotel Hallall në Ulqin",
    description: "Akomodim premium hallall në Ulqin. Pa alkool, spa privat, dhomë lutjesh.",
    images: ["/images/gallery/hotel-maghrib-gallery-03.webp"],
  },
};

export default async function SqPage() {
  await seedReviewsIfEmpty();

  const guestReviews = await getReviews();
  const activeSpaReservations = await db
    .select()
    .from(spaReservations)
    .orderBy(desc(spaReservations.createdAt));

  return <HotelPortal initialReviews={guestReviews} initialSpaReservations={activeSpaReservations} />;
}
