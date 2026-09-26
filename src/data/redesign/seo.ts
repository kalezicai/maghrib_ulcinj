/**
 * SEO / AEO / GEO page registry for Hotel Maghrib (hotelmaghrib.me).
 *
 * Every indexable page has an exact-match primary keyword, an optimized title
 * (≤ 60 chars ideal), a meta description (140–160 chars), target keywords,
 * and the structured-data types deployed on that page. Titles follow the
 * 2026 best-practice pattern: {Highest-intent keyword} | {Brand, Location}.
 */

import { SITE_URL } from './hotel';

export interface PageSeo {
  path: string;
  title: string;
  description: string;
  keywords: string[];
  ogImage: string;
  schema: string[];
}

export const PAGE_SEO: Record<string, PageSeo> = {
  '/': {
    path: '/',
    title: 'Hotel Maghrib | 100% Halal Hotel in Ulcinj, Montenegro',
    description:
      'Ulcinj’s premier 100% halal hotel. Alcohol-free sea-view suites on the Adriatic, halal breakfast buffet, private family spa, onsite Masjid & free parking. Book direct.',
    keywords: [
      'halal hotel ulcinj',
      'hotel maghrib ulcinj',
      'halal hotel montenegro',
      'muslim friendly hotel montenegro',
      'alcohol free hotel ulcinj',
      'halal resort adriatic',
      'ulcinj halal accommodation',
      'private spa hotel ulcinj',
      'family halal hotel montenegro',
      'book halal hotel ulcinj',
    ],
    ogImage: '/images/og/og-home.webp',
    schema: ['Hotel', 'FAQPage', 'BreadcrumbList', 'WebSite', 'Organization'],
  },
  '/rooms': {
    path: '/rooms',
    title: 'Rooms & Suites with Sea View | Hotel Maghrib, Ulcinj',
    description:
      'Four sea-view room types at Ulcinj’s 100% halal Hotel Maghrib — from the 38 m² Deluxe Double (€169) to the 55 m² Junior Family Suite (€229). Halal breakfast included in every rate.',
    keywords: [
      'ulcinj hotel rooms',
      'sea view room ulcinj',
      'halal hotel rooms montenegro',
      'family room ulcinj',
      'hotel maghrib rooms',
      'ulcinj hotel prices 2026',
    ],
    ogImage: '/images/og/og-deluxe-double-room.webp',
    schema: ['Hotel', 'FAQPage', 'BreadcrumbList'],
  },
  '/hotel': {
    path: '/hotel',
    title: 'The Hotel | Hotel Maghrib — Family-Run 100% Halal Hotel in Ulcinj',
    description:
      'Inside Ulcinj’s family-run 100% halal hotel: 16 sea-view rooms, private-bookable spa, onsite Masjid, halal-certified kitchen and an alcohol-free house above the Adriatic.',
    keywords: [
      'hotel maghrib ulcinj',
      '100% halal hotel montenegro',
      'family run hotel ulcinj',
      'boutique hotel ulcinj',
      'alcohol free hotel adriatic',
      'muslim family hotel montenegro',
    ],
    ogImage: '/images/og/og-home.webp',
    schema: ['Hotel', 'FAQPage', 'BreadcrumbList'],
  },
  '/halal-hotel-ulcinj': {
    path: '/halal-hotel-ulcinj',
    title: 'Halal Hotel Ulcinj | 100% Halal Stay at Hotel Maghrib',
    description:
      'Book the best halal hotel in Ulcinj: 100% halal-certified food, alcohol-free premises, private family spa, onsite Masjid & sea-view suites from €169. Direct booking.',
    keywords: [
      'halal hotel ulcinj',
      'halal accommodation montenegro',
      'alcohol free hotel ulcinj',
      'muslim friendly hotel ulcinj',
      'halal resort adriatic coast',
      'ulcinj halal hotel booking',
    ],
    ogImage: '/images/og/og-halal-hotel-ulcinj.webp',
    schema: ['Hotel', 'FAQPage', 'BreadcrumbList'],
  },
  '/rooms/deluxe-double-room': {
    path: '/rooms/deluxe-double-room',
    title: 'Deluxe Double Room with Sea View | Hotel Maghrib Ulcinj',
    description:
      'Light-filled 38 m² Deluxe Double Room with a panoramic Adriatic-view balcony at Ulcinj’s 100% halal Hotel Maghrib. From €169/night. Halal breakfast included.',
    keywords: [
      'deluxe double room ulcinj',
      'sea view double room ulcinj',
      'halal double room montenegro',
      'hotel maghrib deluxe room',
      'adriatic view room ulcinj',
    ],
    ogImage: '/images/og/og-deluxe-double-room.webp',
    schema: ['Hotel', 'FAQPage', 'BreadcrumbList', 'ImageObject'],
  },
  '/rooms/junior-family-suite': {
    path: '/rooms/junior-family-suite',
    title: 'Junior Family Suite | Halal Family Rooms in Ulcinj',
    description:
      'Spacious 55 m² Junior Family Suite for up to 5 guests with a private sea-view balcony at Ulcinj’s 100% halal Hotel Maghrib. From €229/night, halal breakfast included.',
    keywords: [
      'family suite ulcinj',
      'halal family room montenegro',
      'junior family suite adriatic',
      'family hotel ulcinj montenegro',
      'hotel maghrib family suite',
    ],
    ogImage: '/images/og/og-junior-family-suite.webp',
    schema: ['Hotel', 'FAQPage', 'BreadcrumbList', 'ImageObject'],
  },
  '/rooms/premium-king-room': {
    path: '/rooms/premium-king-room',
    title: 'Premium King Room with Sea View | Hotel Maghrib Ulcinj',
    description:
      'Beautifully appointed 42 m² king room with a private Adriatic-view balcony at Ulcinj’s 100% halal Hotel Maghrib. From €189/night, halal breakfast included.',
    keywords: [
      'king room ulcinj',
      'premium king room montenegro',
      'halal king bed room adriatic',
      'hotel maghrib king room',
      'balcony sea view king room ulcinj',
    ],
    ogImage: '/images/og/og-premium-king-room.webp',
    schema: ['Hotel', 'FAQPage', 'BreadcrumbList', 'ImageObject'],
  },
  '/rooms/superior-triple-room': {
    path: '/rooms/superior-triple-room',
    title: 'Superior Triple Room with Sea View | Hotel Maghrib',
    description:
      'Generous 48 m² triple room for 3 guests with a private Adriatic-view balcony at Ulcinj’s 100% halal Hotel Maghrib. From €209/night. Halal breakfast included.',
    keywords: [
      'triple room ulcinj',
      'superior triple room montenegro',
      'halal triple room adriatic',
      'hotel maghrib triple room',
      '3 person halal hotel room ulcinj',
    ],
    ogImage: '/images/og/og-superior-triple-room.webp',
    schema: ['Hotel', 'FAQPage', 'BreadcrumbList', 'ImageObject'],
  },
  '/gallery': {
    path: '/gallery',
    title: 'Photo Gallery | Hotel Maghrib, Halal Hotel Ulcinj',
    description:
      'Explore 58 real photos of Ulcinj’s 100% halal Hotel Maghrib: sea-view suites, halal breakfast, the private family spa, and Adriatic views. No stock photography.',
    keywords: [
      'halal hotel photos ulcinj',
      'hotel maghrib gallery',
      'ulcinj hotel photo gallery',
      'adriatic hotel images montenegro',
    ],
    ogImage: '/images/og/og-gallery.webp',
    schema: ['ImageGallery', 'BreadcrumbList'],
  },
  '/experience': {
    path: '/experience',
    title: 'The 100% Halal Experience | Hotel Maghrib, Ulcinj',
    description:
      'Certified halal dining, an onsite Masjid with Qibla-marked rooms, alcohol-free premises, and 24-hour sea-view terraces. The halal hotel experience on Montenegro’s Adriatic coast.',
    keywords: [
      'halal breakfast buffet ulcinj',
      'halal dining montenegro',
      'muslim hotel prayer room ulcinj',
      'alcohol free hotel experience',
      'qibla room hotel ulcinj',
    ],
    ogImage: '/images/og/og-experience.webp',
    schema: ['Hotel', 'FAQPage', 'BreadcrumbList', 'ImageGallery'],
  },
  '/spa': {
    path: '/spa',
    title: 'Private Family Spa & Wellness | Hotel Maghrib, Ulcinj',
    description:
      'Book the entire indoor pool, jacuzzi, and cedar sauna of Ulcinj’s halal Hotel Maghrib exclusively for your family. Women-only & men-only wellness hours on the Adriatic.',
    keywords: [
      'halal spa ulcinj',
      'private spa montenegro',
      'women only pool hours montenegro',
      'family spa hotel ulcinj',
      'alcohol free spa hotel adriatic',
      'indoor pool hotel ulcinj',
    ],
    ogImage: '/images/og/og-spa.webp',
    schema: ['Hotel', 'FAQPage', 'BreadcrumbList', 'ImageGallery', 'Offer'],
  },
  '/ulcinj': {
    path: '/ulcinj',
    title: 'Where Is Ulcinj | Halal Travel Guide, Montenegro',
    description:
      'Where is Ulcinj? Beaches, Old Town, Ada Bojana, airports and halal-friendly travel around Montenegro’s Adriatic coast — the local guide from Hotel Maghrib.',
    keywords: [
      'where is ulcinj',
      'ulcinj montenegro travel guide',
      'ulcinj beaches',
      'velika plaza long beach',
      'malaplaza small beach ulcinj',
      'ada bojana montenegro',
      'ulcinj airport transfers',
      'montenegro halal travel',
    ],
    ogImage: '/images/og/og-ulcinj.webp',
    schema: ['FAQPage', 'BreadcrumbList', 'TouristDestination'],
  },
  '/ramadan': {
    path: '/ramadan',
    title: 'Ramadan 2027 in Ulcinj | Iftar & Suhoor at Hotel Maghrib',
    description:
      'Spend Ramadan 2027 on the Adriatic. Iftar & suhoor packages, extended Masjid hours, Taraweeh, private family spa slots and sea-view suites at Hotel Maghrib, Ulcinj.',
    keywords: [
      'ramadan package ulcinj',
      'ramadan hotel montenegro',
      'iftar suhoor hotel adriatic',
      'ramadan 2027 travel montenegro',
      'halal ramadan holiday balkans',
    ],
    ogImage: '/images/og/og-ramadan.webp',
    schema: ['Hotel', 'FAQPage', 'BreadcrumbList', 'SpecialAnnouncement'],
  },
  '/story': {
    path: '/story',
    title: 'Our Story | A Halal Family Sanctuary in Ulcinj',
    description:
      'Why "Maghrib" means sunset. How a family sanctuary of halal hospitality, warm hosts and sea-view stillness came to life on a pine-scented hill in Ulcinj, Montenegro.',
    keywords: [
      'hotel maghrib story',
      'boutique halal hotel founders',
      'adriatic hospitality montenegro story',
      'meaning maghrib sunset hotel',
    ],
    ogImage: '/images/og/og-story.webp',
    schema: ['Hotel', 'BreadcrumbList', 'AboutPage'],
  },
  '/contact': {
    path: '/contact',
    title: 'Contact & Direct Booking | Hotel Maghrib, Ulcinj',
    description:
      'Reserve directly with our reservations team at Ulcinj’s 100% halal Hotel Maghrib. WhatsApp, email, phone and spa concierge — answered within 2 hours.',
    keywords: [
      'book hotel maghrib ulcinj',
      'hotel maghrib contact',
      'direct booking halal hotel',
      'reserve halal hotel montenegro',
      'hotel maghrib whatsapp',
    ],
    ogImage: '/images/og/og-contact.webp',
    schema: ['ContactPage', 'Organization', 'BreadcrumbList'],
  },
  '/blog': {
    path: '/blog',
    title: 'Halal Travel Journal | Ulcinj Guides — Hotel Maghrib',
    description:
      'Guides to halal travel on the Adriatic: family holidays, Ulcinj vs Budva for Muslim travelers, and what a truly halal hotel really looks like in 2026.',
    keywords: [
      'halal travel blog',
      'ulcinj travel tips',
      'halal holiday montenegro',
      'muslim travel adriatic',
    ],
    ogImage: '/images/og/og-blog.webp',
    schema: ['Blog', 'BreadcrumbList'],
  },
  '/blog/halal-hotel-montenegro': {
    path: '/blog/halal-hotel-montenegro',
    title: 'What Makes a Truly 100% Halal Hotel? 2026 Montenegro Guide',
    description:
      'Halal certification, alcohol-free rooms, prayer facilities, private spa hours: the complete 2026 checklist for Muslim travelers comparing halal hotels in Montenegro.',
    keywords: [
      'halal hotel montenegro',
      'what is halal hotel',
      'uslim friendly hotel checklist',
      'halal hotel montenegro 2026',
      'halal certified hotel food',
    ],
    ogImage: '/images/og/og-experience.webp',
    schema: ['BlogPosting', 'BreadcrumbList', 'FAQPage'],
  },
  '/blog/family-holiday-ulcinj': {
    path: '/blog/family-holiday-ulcinj',
    title: 'The Ultimate Halal Family Holiday in Ulcinj (2026)',
    description:
      'Planning a halal family holiday in Ulcinj? Beaches with privacy, halal dining, prayer times, family suites and a day-by-day guide from the team at Hotel Maghrib.',
    keywords: [
      'family holiday ulcinj',
      'ulcinj family holiday 2026',
      'halal family vacation montenegro',
      'things to do in ulcinj with kids',
      'prayer times ulcinj',
    ],
    ogImage: '/images/og/og-blog-family-holiday-ulcinj.webp',
    schema: ['BlogPosting', 'BreadcrumbList', 'FAQPage'],
  },
  '/blog/ulcinj-vs-budva': {
    path: '/blog/ulcinj-vs-budva',
    title: 'Ulcinj vs Budva for Muslim Travelers: 2026 Verdict',
    description:
      'An honest comparison for halal-conscious travelers: beaches, halal dining, prayer facilities, family vibe and value — Ulcinj vs Budva on Montenegro’s Adriatic coast.',
    keywords: [
      'ulcinj vs budva',
      'ulcinj vs budva muslim',
      'best halal beach town montenegro',
      'budva vs ulcinj family',
      'montenegro halal destination',
    ],
    ogImage: '/images/og/og-blog-ulcinj-vs-budva.webp',
    schema: ['BlogPosting', 'BreadcrumbList'],
  },
  '/privacy': {
    path: '/privacy',
    title: 'Privacy Policy | Hotel Maghrib, Ulcinj',
    description:
      'How Hotel Maghrib handles guest inquiries, traffic data and privacy on hotelmaghrib.me.',
    keywords: ['hotel maghrib privacy policy'],
    ogImage: '/images/og/og-home.webp',
    schema: ['BreadcrumbList'],
  },
  '/terms': {
    path: '/terms',
    title: 'Stay Information & Reservation Terms | Hotel Maghrib, Ulcinj',
    description:
      'Rates, check-in and check-out times, cancellation policy and spa reservation terms at Hotel Maghrib, Ulcinj.',
    keywords: ['hotel maghrib cancellation policy', 'ulcinj hotel terms'],
    ogImage: '/images/og/og-home.webp',
    schema: ['BreadcrumbList'],
  },
};

/** Pages excluded from the sitemap (noindex): utility-only content. */
export const NOINDEX_PAGES: Record<string, string> = {
  '/privacy': 'Site privacy policy — utility content, excluded from search indexes.',
  '/terms': 'Stay information page — utility content, excluded from search synthesis.',
};

/** AI answer engines: allow-list plus llms.txt handoff. */
export const AI_CRAWLERS = [
  'GPTBot',
  'ChatGPT-User',
  'OAI-SearchBot',
  'PerplexityBot',
  'Perplexity-User',
  'ClaudeBot',
  'Claude-Web',
  'anthropic-ai',
  'Google-Extended',
  'CCBot',
  'Amazonbot',
  'meta-externalagent',
  'Applebot-Extended',
];

/** Structured-data fragments shared by every page in the multipage redesign. */

export const hotelStats = {
  rating: 4.9,
  reviewCount: 136,
  priceMin: 169,
  priceMax: 229,
};

export const hotelFacts = {
  name: 'Hotel Maghrib',
  telephone: '+382 68 007 720',
  email: 'info@hotelmaghrib.me',
  streetAddress: '1 Kosovska',
  addressLocality: 'Ulcinj',
  postalCode: '85360',
  addressCountry: 'ME',
  latitude: 41.9226,
  longitude: 19.2161,
  checkIn: '14:00',
  checkOut: '11:00',
  url: SITE_URL,
};
