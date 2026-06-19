import { getReviews } from "../actions";
import HotelPortal from "../components/HotelPortal";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Hotel Maghrib | 100% Halal Hotel u Ulcinju, Crna Gora",
  description: "Doživite premium 100% halal luksuz u Hotel Maghrib u Ulcinju, Crna Gora. Bez alkohola, apartmani s morskim pogledom, privatni spa, mjesto za molitvu i tradicionalni halal doručak.",
  keywords: ["Hotel Maghrib Ulcinj", "halal hotel Crna Gora", "bezalkoholni hotel Ulcinj", "halal odmor Jadran", "porodični hotel halal"],
  alternates: {
    canonical: "https://hotelmaghrib.me/bs",
    languages: {
      "en": "https://hotelmaghrib.me",
      "sq": "https://hotelmaghrib.me/sq",
      "de": "https://hotelmaghrib.me/de",
    },
  },
  openGraph: {
    title: "Hotel Maghrib | 100% Halal Hotel u Ulcinju",
    description: "Premium halal smještaj u Ulcinju. Apartmani s pogledom na more, halal doručak, privatni spa i prostorija za namaz.",
    url: "https://hotelmaghrib.me/bs",
    siteName: "Hotel Maghrib Ulcinj",
    images: [{ url: "/images/gallery/hotel-maghrib-gallery-03.webp", width: 1200, height: 630, alt: "Hotel Maghrib halal hotel Ulcinj" }],
    locale: "bs_BA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hotel Maghrib | 100% Halal Hotel u Ulcinju",
    description: "Premium halal smještaj u Ulcinju. Bez alkohola, privatni spa, mjesto za molitvu.",
    images: ["/images/gallery/hotel-maghrib-gallery-03.webp"],
  },
};

export default async function BsPage() {
  const guestReviews = await getReviews();
  return <HotelPortal initialReviews={guestReviews} initialSpaReservations={[]} />;
}
