/**
 * Shared JSON-LD builders for the multipage redesign.
 *
 * Structured-data strategy (AEO/GEO 2026):
 *  - One canonical `Hotel` @id entity with stable anchor URLs, referenced
 *    from every page so AI engines merge facts instead of inventing them.
 *  - FAQPage on every commercial page with question-format headings that
 *    match real traveler prompts ("does hotel maghrib serve alcohol").
 *  - BreadcrumbList on every subpage for crawl hierarchy clarity.
 *  - BlogPosting with author+dateModified for E-E-A-T.
 */

import { SITE_URL, suites } from "./hotel";
import { hotelStats, hotelFacts } from "./seo";

const ORIGIN = `${SITE_URL}/#organization`;

export function hotelLd(path = "/") {
  return {
    "@context": "https://schema.org",
    "@type": "Hotel",
    "@id": `${SITE_URL}/#hotel`,
    name: "Hotel Maghrib",
    alternateName: "Maghrib Hotel Ulcinj",
    description:
      "A 100% halal, alcohol-free family hotel in Ulcinj, Montenegro, with sea-view suites, a private family spa, an onsite Masjid, and halal-certified dining on the Adriatic coast.",
    url: `${SITE_URL}${path}`,
    telephone: hotelFacts.telephone,
    email: hotelFacts.email,
    priceRange: `EUR ${hotelStats.priceMin} - ${hotelStats.priceMax}`,
    currenciesAccepted: "EUR",
    paymentAccepted: "Cash, Bank transfer",
    checkinTime: hotelFacts.checkIn,
    checkoutTime: hotelFacts.checkOut,
    image: [
      `${SITE_URL}/images/gallery/hotel-maghrib-hero.webp`,
      `${SITE_URL}/images/gallery/hotel-maghrib-gallery-32.webp`,
      `${SITE_URL}/images/gallery/hotel-maghrib-gallery-55.webp`,
      `${SITE_URL}/images/gallery/hotel-maghrib-gallery-10.webp`,
    ],
    photo: `${SITE_URL}/images/gallery/hotel-maghrib-hero.webp`,
    address: {
      "@type": "PostalAddress",
      streetAddress: hotelFacts.streetAddress,
      addressLocality: hotelFacts.addressLocality,
      postalCode: hotelFacts.postalCode,
      addressRegion: "Ulcinj Municipality",
      addressCountry: "ME",
    },
    geo: { "@type": "GeoCoordinates", latitude: hotelFacts.latitude, longitude: hotelFacts.longitude },
    geoWithin: undefined,
    containedInPlace: { "@type": "TouristDestination", name: "Ulcinj, Montenegro" },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: hotelStats.rating,
      reviewCount: hotelStats.reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "100% halal-certified gastronomy", value: true },
      { "@type": "LocationFeatureSpecification", name: "Alcohol-free premises", value: true },
      { "@type": "LocationFeatureSpecification", name: "Onsite Masjid (prayer room)", value: true },
      { "@type": "LocationFeatureSpecification", name: "Qibla direction marker in every room", value: true },
      { "@type": "LocationFeatureSpecification", name: "Private bookable indoor pool, sauna and jacuzzi", value: true },
      { "@type": "LocationFeatureSpecification", name: "Sea-view private balcony in every room", value: true },
      { "@type": "LocationFeatureSpecification", name: "Free private parking", value: true },
      { "@type": "LocationFeatureSpecification", name: "Complimentary Wi-Fi", value: true },
      { "@type": "LocationFeatureSpecification", name: "Airport shuttle (Podgorica and Tivat)", value: true },
      { "@type": "LocationFeatureSpecification", name: "Family rooms", value: true },
    ],
    petsAllowed: false,
    smokingAllowed: false,
    numberOfRooms: suites.length,
    makesOffer: suites.map((suite) => ({
      "@type": "Offer",
      name: suite.name,
      description: suite.description,
      price: suite.price,
      priceCurrency: "EUR",
      url: `${SITE_URL}/rooms/${suite.seoSlug}`,
      availability: "https://schema.org/InStock",
      ImageObject: undefined,
    })),
    starRating: { "@type": "Rating", ratingValue: "4" },
    parentOrganization: { "@id": ORIGIN },
  };
}

export function faqLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path === "/" ? "" : item.path}`,
    })),
  };
}

export function roomLd(suite: (typeof suites)[number], path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "HotelRoom",
    name: `${suite.name} with Sea View`,
    description: suite.description,
    url: `${SITE_URL}${path}`,
    occupancy: { "@type": "QuantitativeValue", maxValue: suite.guests, unitCode: "C62" },
    floorSize: { "@type": "QuantitativeValue", value: suite.size, unitCode: "MTK" },
    bed: { "@type": "BedDetails", typeOfBed: suite.id === "family" ? "King and twin beds" : "Premium orthopedic king bed" },
    offers: {
      "@type": "Offer",
      price: suite.price,
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      url: `${SITE_URL}${path}`,
      seller: { "@id": ORIGIN },
    },
    amenityFeature: [
      "Private sea-view balcony",
      "Air conditioning",
      "Qibla direction marker",
      "In-room safe",
      "Tea and coffee facilities",
      "Silent mini-fridge",
      "Private bathroom",
    ].map((name) => ({ "@type": "LocationFeatureSpecification", name, value: true })),
    photo: `${SITE_URL}/images/gallery/hotel-maghrib-gallery-${String(suite.image).padStart(2, "0")}.webp`,
    containedInPlace: { "@id": `${SITE_URL}/#hotel` },
  };
}

export function imageGalleryLd(origin = "/gallery") {
  return {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: "Hotel Maghrib Photo Gallery — Halal Hotel Ulcinj",
    url: `${SITE_URL}${origin}`,
    about: { "@id": `${SITE_URL}/#hotel` },
    associatedMedia: [],
  };
}

export function websiteLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: "Hotel Maghrib Ulcinj",
    publisher: { "@id": ORIGIN },
    inLanguage: "en",
  };
}

export function blogPostingLd(post: {
  title: string;
  description: string;
  date: string;
  modified?: string;
  path: string;
  image: string;
  authorName: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.modified ?? post.date,
    image: `${SITE_URL}${post.image}`,
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}${post.path}` },
    author: { "@type": "Organization", name: post.authorName },
    publisher: { "@id": ORIGIN },
    inLanguage: "en",
    isPartOf: { "@id": `${SITE_URL}/blog#blog` },
  };
}

export function roomFaqs(suite: (typeof suites)[number]) {
  return [
    {
      question: `Is breakfast included with the ${suite.name}?`,
      answer:
        "Yes. A 100% halal-certified breakfast buffet is included for every guest: fresh pastries, traditional roasted peppers, seasonal fruits and freshly prepared egg dishes.",
    },
    {
      question: `How many guests stay comfortably in the ${suite.name}?`,
      answer: `The ${suite.name} accommodates up to ${suite.guests} guests in ${suite.size} m², with a private sea-view balcony over the Adriatic.`,
    },
    {
      question: `What does the ${suite.name} cost per night?`,
      answer:
        `Starting rates are from EUR${suite.price} per night. Seasonal pricing and final rates are confirmed directly by the hotel when you inquire.`,
    },
  ];
}

export function touristDestinationLd() {
  return {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    name: "Ulcinj, Montenegro",
    description:
      "Montenegro's southernmost Adriatic town: a 2,500-year-old Old Town, Mala Plaza and the 12-km Velika Plaza, the Valdanos olive cove, and the Ada Bojana delta - a halal-friendly beach destination.",
    touristType: ["Halal-conscious travelers", "Family", "Sunset", "Bird watching"],
    includesAttraction: [
      { "@type": "Beach", name: "Mala Plaza (Small Beach), Ulcinj" },
      { "@type": "Beach", name: "Velika Plaza (Long Beach), Ulcinj" },
      { "@type": "LandmarksOrHistoricalBuildings", name: "Ulcinj Old Town" },
      { "@type": "Beach", name: "Ada Bojana" },
      { "@type": "Park", name: "Ulcinj Salina bird reserve" },
    ],
    geo: { "@type": "GeoCoordinates", latitude: hotelFacts.latitude, longitude: hotelFacts.longitude },
  };
}

/** Full media list for the gallery page (ImageObject promotes image SEO). */
export function galleryLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: "Hotel Maghrib Photo Gallery - Halal Hotel Ulcinj",
    url: `${SITE_URL}/gallery`,
    about: { "@id": `${SITE_URL}/#hotel` },
  };
}

export function contactPageLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Contact & Direct Booking - Hotel Maghrib, Ulcinj",
    about: { "@id": `${SITE_URL}/#hotel` },
    potentialAction: {
      "@type": "CommunicateAction",
      name: "Reserve a stay at Hotel Maghrib",
      target: { "@type": "EntryPoint", urlTemplate: `${SITE_URL}/contact` },
    },
  };
}

export function hotelFaqs(path = "/") {
  return centralFaqs;
}

/** Canonical FAQ set for the hotel (AEO extraction targets). */
export const centralFaqs = [
  {
    question: "Is Hotel Maghrib a fully halal hotel?",
    answer:
      "Yes. Hotel Maghrib in Ulcinj is a 100% halal hotel: all food is halal certified, the entire premises are alcohol-free, and every room includes Qibla direction markers. There is an onsite, air-conditioned Masjid (prayer room).",
  },
  {
    question: "Does Hotel Maghrib serve alcohol?",
    answer:
      "No. Hotel Maghrib is completely alcohol-free — nothing alcoholic is served or consumed anywhere on the premises, which is one of the reasons halal-conscious families choose it.",
  },
  {
    question: "Does Hotel Maghrib have a private spa?",
    answer:
      "Yes. The wellness center has an indoor pool, children's area, jacuzzi and cedar sauna, and families can book the whole facility exclusively for private one-hour slots. Women-and-children and men-only hours are scheduled daily.",
  },
  {
    question: "How much do rooms cost at Hotel Maghrib Ulcinj?",
    answer:
      "Starting rates in the 2026 season are from EUR169 per night for the Deluxe Double Room, EUR189 for the Premium King Room, EUR209 for the Superior Triple Room and EUR229 for the Junior Family Suite. Final seasonal rates are confirmed directly by the hotel.",
  },
  {
    question: "Is halal breakfast included at Hotel Maghrib?",
    answer:
      "Yes. A rich 100% halal-certified breakfast buffet is included with every stay: fresh pastries, traditional roasted peppers, seasonal fruits and freshly prepared egg dishes.",
  },
  {
    question: "Where exactly is Hotel Maghrib in Ulcinj?",
    answer:
      "Hotel Maghrib is at 1 Kosovska, 85360 Ulcinj, Montenegro — on a quiet hill beside the iconic Borići pine trees, roughly a 14-minute walk from Mala Plaža (Small Beach) and the Old Town.",
  },
  {
    question: "What are the check-in and check-out times?",
    answer:
      "Check-in is from 2:00 PM and check-out is by 11:00 AM. Early check-in and late check-out can be requested directly with the hotel.",
  },
  {
    question: "Does Hotel Maghrib offer airport transfers?",
    answer:
      "Yes. Transfers from Podgorica (TGD, ~71 km) and Tivat (TIV) airports can be arranged through the reservations team. Mention your arrival details when you inquire.",
  },
];






