/**
 * Central hotel data + SEO keyword map for the Maghrib multipage redesign.
 * Every image URL, alt text, and entity reference is centralized here so
 * pages stay consistent for search engines and AI answer engines.
 */

export const SITE_URL = 'https://hotelmaghrib.me';
export const HOTEL_EMAIL = 'info@hotelmaghrib.me';
export const HOTEL_PHONE = '+382 68 007 720';
export const PHONE_LINK = 'tel:+38268007720';
export const MAP_LINK =
  'https://www.google.com/maps/search/?api=1&query=Hotel+Maghrib+Ulcinj+Montenegro';

/** Local, self-hosted images (no external origin for indexing signal). */
export function photo(number: number) {
  return `/images/gallery/hotel-maghrib-gallery-${String(number).padStart(2, '0')}.webp`;
}

export const heroPhoto = '/images/gallery/hotel-maghrib-hero.webp';

export function whatsappLink(message: string) {
  return `https://wa.me/38268007720?text=${encodeURIComponent(message)}`;
}

export function emailLink(subject: string, message: string) {
  return `mailto:${HOTEL_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
}

export interface Suite {
  id: string;
  shortName: string;
  name: string;
  subtitle: string;
  description: string;
  image: number;
  images: number[];
  price: number;
  size: number;
  guests: number;
  /** SEO: exact-match room-type keyword cluster for Programmatic/AEO extraction. */
  seoSlug: string;
}

export const suites: Suite[] = [
  {
    id: 'deluxe',
    shortName: 'Deluxe Double',
    name: 'Deluxe Double Room',
    subtitle: 'An intimate escape, with an endless view.',
    description:
      'A gorgeous, light-filled sanctuary with a panoramic private balcony looking out to the Adriatic Sea. Warm sand tones, clean lines, and a peaceful ambiance make it a place to truly unwind.',
    image: 32,
    images: [32, 35, 58],
    price: 169,
    size: 38,
    guests: 2,
    seoSlug: 'deluxe-double-room',
  },
  {
    id: 'family',
    shortName: 'Junior Family Suite',
    name: 'Junior Family Suite',
    subtitle: 'More room for the moments that matter.',
    description:
      'Spacious comfort for the whole family. Bright interiors, thoughtful conveniences, and your own sea-view balcony create a restful home base for slow mornings and days together in Ulcinj.',
    image: 37,
    images: [37, 36, 58],
    price: 229,
    size: 55,
    guests: 5,
    seoSlug: 'junior-family-suite',
  },
  {
    id: 'king',
    shortName: 'Premium King',
    name: 'Premium King Room',
    subtitle: 'A little more space. A little more luxury.',
    description:
      'Your private retreat above the Adriatic. Relax in a beautifully appointed king room, enjoy the quiet of your own balcony, and wake to a view that never gets old.',
    image: 35,
    images: [35, 32, 58],
    price: 189,
    size: 42,
    guests: 2,
    seoSlug: 'premium-king-room',
  },
  {
    id: 'triple',
    shortName: 'Superior Triple',
    name: 'Superior Triple Room',
    subtitle: 'Shared memories, in exceptional comfort.',
    description:
      'A generous, light-filled room for three, with a private balcony and beautiful sea views. Thoughtfully equipped with the everyday comforts that make a holiday feel effortless.',
    image: 54,
    images: [54, 37, 58],
    price: 209,
    size: 48,
    guests: 3,
    seoSlug: 'superior-triple-room',
  },
];

export const roomAmenities = [
  'Private sea-view balcony',
  'Air conditioning',
  'Silent mini-fridge',
  'Qibla direction marker',
  'In-room safe',
  'Tea & coffee facilities',
  'Complimentary Wi-Fi',
  'Private bathroom',
];

export const experiences = [
  {
    title: 'Halal, without compromise',
    image: 50,
    caption: 'GOOD MORNINGS. MEANINGFUL MOMENTS.',
    alt: 'The 100% halal-certified breakfast buffet at Hotel Maghrib in Ulcinj, Montenegro',
    description:
      'Every ingredient in our breakfast buffet is 100% halal certified. Fresh pastries, traditional roasted peppers, seasonal fruits, and beautifully prepared egg dishes. Abundant, thoughtful, and always alcohol-free.',
  },
  {
    title: 'A space for your faith',
    image: 29,
    caption: 'YOUR FAITH, PERFECTLY AT HOME.',
    alt: 'The peaceful, light-filled prayer room (Masjid) inside Hotel Maghrib, Ulcinj',
    description:
      'Our dedicated, air-conditioned Masjid offers a peaceful place for daily prayer. Clear Qibla direction markings in every suite mean that your faith feels at home, wherever your travels take you.',
  },
  {
    title: 'Together, in complete privacy',
    image: 58,
    caption: 'THE COMFORT OF COMPLETE PRIVACY.',
    alt: 'A private sea-view balcony with seating overlooking the Adriatic Sea in Ulcinj',
    description:
      'An entirely alcohol-free environment, discreet private balconies, and exclusive family spa sessions. Here, conservative family values and a genuinely luxurious holiday exist in perfect harmony.',
  },
  {
    title: 'A terrace, without a timetable',
    image: 10,
    caption: 'THE VIEW IS YOURS, ALL DAY LONG.',
    alt: 'The open-air sea-view dining terrace at Hotel Maghrib in Ulcinj',
    description:
      "Our panoramic dining terrace is yours, 24 hours a day. Read in the sea breeze, share a coffee, or linger over a family conversation, surrounded by the blue Adriatic and Ulcinj's iconic pine trees.",
  },
];

export const reviews = [
  {
    name: 'Mujahidah UmmCoffee',
    group: 'Vacation',
    excerpt: 'From the welcoming reception staff and the high standards, we had a truly luxurious experience. Our room was spacious, modern, with everything we needed and a private balcony with breathtaking sea views.',
    full: "As frequent travellers worldwide and more importantly as Muslims, it is rare to find a hotel that truly caters to our needs. From the welcoming reception staff and the high standards, we had a truly luxurious experience. Our room was spacious, modern, with everything we needed and a private balcony with breathtaking sea views. TabarakAllah, the buffet breakfast was large with delicious options. Highly recommended and we hope to return next summer Insha'Allah.",
  },
  {
    name: 'Sanela Muhic',
    group: 'Family',
    excerpt:
      "Reserving the pool was very easy and hassle-free, which was the absolute highlight of our family vacation. The children's area and whirlpool with colorful lights were perfect.",
    full: "We spent three nights and were completely satisfied. Our room was spotlessly clean, modern, spacious, and bright with a beautiful sea view and clear Qibla markings. Reserving the pool was very easy and hassle-free, which was the absolute highlight of our family vacation. The children's area and whirlpool with colorful lights were perfect. The breakfast buffet was excellent, especially the roasted peppers! The hotel has a HALAL concept, which exceeded our expectations. Beautiful nasheed songs playing in the background. Excellent aroma in the lobby!",
  },
  {
    name: 'Gresa Kukaj',
    group: 'Vacation',
    excerpt: 'The hotel is beautiful, very clean, modern, and perfectly maintained. The service truly made us feel comfortable and appreciated as guests.',
    full: 'We had a wonderful 4-day stay at Maghrib Hotel in Ulcinj and honestly enjoyed every moment of it. The hotel is beautiful, very clean, modern, and perfectly maintained. The rooms were spacious, bright, and extremely comfortable, with a lovely balcony and a beautiful view that made the stay even more relaxing. The food was absolutely delicious, especially the breakfast which had a great variety and always felt fresh. The service truly made us feel comfortable and appreciated as guests. We really appreciated the private parking.',
  },
  {
    name: 'Dzenita T.',
    group: 'Family',
    excerpt:
      'Our private balcony was hidden from view, so we could sunbathe without any problems. Fresh, delicious halal food. Masjid is available in the hotel, qibla direction in rooms.',
    full: '5 stars for everyone, and above all for a halal environment. The opportunity to come to Ulcinj in July and protect our view, while having the option of using the indoor pool, whirlpool and sauna separately as a family. Our private balcony was hidden from view, so we could sunbathe without any problems. Fresh, delicious halal food. Masjid is available in the hotel, qibla direction in rooms, air-conditioned spaces, prayers without music.',
  },
  {
    name: 'Ermin Tarahija',
    group: 'Couple',
    excerpt: 'Highly recommend Hotel Maghrib 10/10. Extremely clean, modernly decorated. The staff is incredibly friendly. Wellness center with pool, sauna, and jacuzzi is ideal.',
    full: 'Highly recommend Hotel Maghrib 10/10. Extremely clean, modernly decorated rooms. The staff is incredibly friendly and always smiling. The location is quiet, close to the iconic pine trees and not too far from Small Beach. The wellness center with pool, sauna, and jacuzzi is ideal for deep relaxation. One of the best hotels in Montenegro!',
  },
  {
    name: 'Ema Dervović',
    group: 'Friends',
    excerpt: 'Beautiful and clean hotel, delicious breakfast. Spacious, sunny terrace with a sea view. Excellent spa service: pool, jacuzzi, sauna.',
    full: 'Beautiful and clean hotel, delicious breakfast. Spacious, sunny terrace with a sea view. Excellent spa service: pool, jacuzzi, sauna. Beautiful shared restaurant terrace is open 24/7. Staff friendly and kind, plenty of parking. I will definitely come back!',
  },
  {
    name: 'Muk i',
    group: 'Couple',
    excerpt: 'Best Halal Hotel in Ulcinj! Spa for private use is top-tier. Breakfast was delicious, fresh, and plentiful.',
    full: 'Best Halal Hotel in Ulcinj! Spa for private use is top-tier. Breakfast was delicious, fresh, and plentiful. Walkability is great and everything is easily accessible. Extremely safe and peaceful atmosphere. We loved it!',
  },
  {
    name: 'Azra Djogic',
    group: 'Vacation',
    excerpt: 'A luxurious halal hotel! Top-notch service and friendly staff, ensuring that your privacy and religious lifestyle are not compromised in any way.',
    full: 'A luxurious halal hotel! A combination of top-notch service and friendly staff, ensuring that your privacy and religious lifestyle are not compromised in any way. Cleanliness is perfect.',
  },
];

export type GalleryCategory = 'The hotel' | 'Rooms & suites' | 'Dining' | 'Wellness' | 'Sea views';
export interface GalleryPhoto {
  id: number;
  src: string;
  title: string;
  alt: string;
  category: GalleryCategory;
}

const photoDetails: Record<number, [string, GalleryCategory, string]> = {
  1: ['A moment of warmth', 'Wellness', 'Warm relaxation area of the Hotel Maghrib private spa in Ulcinj'],
  2: ['Natural wood, quiet spaces', 'Wellness', 'Natural wood sauna interior at the Hotel Maghrib wellness center, Ulcinj'],
  3: ['Inside the spa', 'Wellness', 'Private indoor pool and spa area at Hotel Maghrib in Ulcinj, Montenegro'],
  4: ['Thoughtful spa details', 'Wellness', 'Detailed view of the private cedar sauna at Hotel Maghrib, Ulcinj'],
  5: ['The wellness interiors', 'Wellness', 'Elegant wellness interiors of the Hotel Maghrib spa in Ulcinj'],
  6: ['The cedar sauna', 'Wellness', 'Cedar wood sauna at the halal-friendly spa of Hotel Maghrib'],
  7: ['Time to unwind', 'Wellness', 'Guests unwinding at the private wellness suite of Hotel Maghrib Ulcinj'],
  8: ['Sauna rituals', 'Wellness', 'Calm sauna moment in the family spa of Hotel Maghrib, Montenegro'],
  9: ['A personal welcome', 'The hotel', 'Front desk reception welcoming guests at Hotel Maghrib in Ulcinj'],
  10: ['Slow days on the terrace', 'Dining', 'Open-air sea-view dining terrace at Hotel Maghrib in Ulcinj at golden hour'],
  11: ['Our open-air terrace', 'Dining', 'The panoramic Adriatic-view breakfast terrace of Hotel Maghrib, Ulcinj'],
  12: ['Welcome to Maghrib', 'The hotel', 'Warm welcome at the entrance of the halal Hotel Maghrib in Ulcinj'],
  13: ['Your morning coffee', 'Dining', 'Fresh morning tea and coffee served on the Hotel Maghrib sea-view terrace'],
  14: ['Warm hospitality', 'Dining', 'Warm halal hospitality at the dining terrace of Hotel Maghrib Ulcinj'],
  15: ['A sweeter kind of morning', 'Dining', 'Fresh pastries and sweets served at a Hotel Maghrib halal breakfast'],
  16: ['Breakfast, freshly prepared', 'Dining', 'Freshly prepared halal breakfast dishes at Hotel Maghrib, Ulcinj'],
  17: ['The Maghrib welcome', 'The hotel', 'A guest being welcomed to the 100% alcohol-free Hotel Maghrib Ulcinj'],
  18: ['A pool for the whole family', 'Wellness', 'Renovated indoor swimming pool with children area at Hotel Maghrib'],
  19: ['Poolside serenity', 'Wellness', 'Serene poolside setting inside the private spa of Hotel Maghrib, Ulcinj'],
  20: ['Enter the sauna', 'Wellness', 'Entrance to the family sauna at Hotel Maghrib private spa'],
  21: ['Warmth and wellbeing', 'Wellness', 'Warm, private family wellness corner at Hotel Maghrib Ulcinj'],
  22: ['The details of relaxation', 'Wellness', 'Relaxation details at the halal-friendly spa of Hotel Maghrib'],
  23: ['Gather around the table', 'Dining', 'Family table set for a halal meal at Hotel Maghrib in Ulcinj'],
  24: ['A place to come together', 'Dining', 'Halal breakfast table with the Adriatic Sea view at Hotel Maghrib'],
  25: ['Considered interiors', 'The hotel', 'Thoughtfully designed interiors of the lobby of Hotel Maghrib Ulcinj'],
  26: ['Maghrib after dark', 'The hotel', 'Hotel Maghrib in Ulcinj glowing after dark, surrounded by pine trees'],
  29: ['The light-filled lobby', 'The hotel', 'The light-filled, serene lobby of the halal Hotel Maghrib in Ulcinj'],
  31: ['Thoughtful room details', 'Rooms & suites', 'Elegant room details inside a sea-view suite at Hotel Maghrib'],
  32: ['Your room to retreat', 'Rooms & suites', 'Deluxe Double Room with private sea-view balcony at Hotel Maghrib Ulcinj'],
  35: ['Rest, beautifully', 'Rooms & suites', 'Premium King Room with Adriatic sea view at Hotel Maghrib, Ulcinj'],
  36: ['Soft tones and natural textures', 'Rooms & suites', 'Junior Family Suite in soft natural tones at Hotel Maghrib Ulcinj'],
  37: ['The comfort of your own space', 'Rooms & suites', 'Comfortable Junior Family Suite with sea view at Hotel Maghrib'],
  39: ['The pool, in a different light', 'Wellness', 'Indoor pool in intimate lighting at the Hotel Maghrib wellness spa'],
  40: ['Freshly prepared for you', 'Dining', 'Fresh eggs and halal breakfast dishes at Hotel Maghrib Ulcinj'],
  42: ['Make yourself at home', 'Rooms & suites', 'Homely suite interior with natural light at Hotel Maghrib Ulcinj'],
  43: ['The warmth of a private retreat', 'Rooms & suites', 'Warm, private suite corner of Hotel Maghrib in Ulcinj'],
  46: ['Room for everything', 'Rooms & suites', 'Spacious triple room with views and comfort at Hotel Maghrib'],
  48: ['Considered bathroom details', 'Rooms & suites', 'Elegant en-suite bathroom details in Hotel Maghrib Ulcinj'],
  50: ['Our halal breakfast buffet', 'Dining', 'Generous 100% halal-certified breakfast buffet at Hotel Maghrib Ulcinj'],
  51: ['Fruit, pastries, and slow mornings', 'Dining', 'Fresh fruit and pastries at the halal breakfast of Hotel Maghrib'],
  52: ['Freshen up, wind down', 'Rooms & suites', 'Refreshing bathroom of a sea-view suite at Hotel Maghrib Ulcinj'],
  53: ['A poolside moment', 'Wellness', 'A quiet poolside moment in the family spa at Hotel Maghrib Ulcinj'],
  54: ['Unhurried mornings', 'Rooms & suites', 'Superior Triple Room with soft morning light at Hotel Maghrib Ulcinj'],
  55: ['The indoor pool sanctuary', 'Wellness', 'The private indoor pool sanctuary at Hotel Maghrib wellness center'],
  56: ['Our home above the Adriatic', 'The hotel', 'Hotel Maghrib hillside home overlooking the Adriatic Sea in Ulcinj'],
  57: ['A place to rest your head', 'Rooms & suites', 'Beautifully made sea-view bed in a Hotel Maghrib room, Ulcinj'],
  58: ['Your own Adriatic view', 'Sea views', 'Private balcony overlooking the Adriatic Sea from Hotel Maghrib Ulcinj'],
};

export const galleryPhotos: GalleryPhoto[] = Array.from({ length: 58 }, (_, index) => {
  const id = index + 1;
  const details = photoDetails[id];
  const title = details?.[0] ?? `A moment at Maghrib ${String(id).padStart(2, '0')}`;
  const category = details?.[1] ?? 'The hotel';
  const alt = details?.[2] ?? `${title} at the halal Hotel Maghrib in Ulcinj, Montenegro`;
  return { id, src: photo(id), title, alt, category };
});

/** Navigation entries for the shared header/footer across all pages. */
export const pageNav = [
  { label: 'The Hotel', href: '/hotel' },
  { label: 'Rooms & Suites', href: '/rooms' },
  { label: 'The Experience', href: '/experience' },
  { label: 'Private Spa', href: '/spa' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Ulcinj', href: '/ulcinj' },
];

export function dateAfter(days: number, from = new Date()) {
  const date = new Date(from);
  date.setDate(date.getDate() + days);
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
}

export function formatDate(date: string) {
  return new Date(`${date}T12:00:00`).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

/** Reference to the previous live deployment, used for the perseverance of image URLs. */
export const LEGACY_ORIGIN = 'https://maghrib-ulcinj.onrender.com';
