/** Blog content registry — dates are ISO strings for JSON-LD. */

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  updated?: string;
  image: number;
  heroAlt: string;
  heroCaption?: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "halal-hotel-montenegro",
    title: "What Makes a Truly 100% Halal Hotel in Montenegro? (2026 Guide)",
    excerpt:
      "Halal certification, alcohol-free rooms, prayer facilities, private spa hours: the complete checklist for Muslim travelers comparing halal hotels on the Adriatic.",
    date: "2026-06-15",
    updated: "2026-09-01",
    image: 50,
    heroAlt: "The 100% halal-certified breakfast buffet at Hotel Maghrib in Ulcinj, Montenegro",
    heroCaption: "Halal, checked at every step.",
  },
  {
    slug: "family-holiday-ulcinj",
    title: "The Ultimate Halal Family Holiday in Ulcinj, Montenegro (2026)",
    excerpt:
      "Planning a halal family holiday in Ulcinj? Beaches with privacy, halal dining, prayer times, family suites and a day-by-day guide from our front desk team.",
    date: "2026-06-10",
    updated: "2026-08-20",
    image: 10,
    heroAlt: "The open-air sea-view breakfast terrace of Hotel Maghrib in Ulcinj, Montenegro",
    heroCaption: "Mornings that refuse to be rushed.",
  },
  {
    slug: "ulcinj-vs-budva",
    title: "Ulcinj vs Budva for Muslim Travelers: Which Is Better in 2026?",
    excerpt:
      "An honest comparison for halal-conscious travelers: beaches, halal dining, prayer facilities, family vibe and value — Ulcinj vs Budva on Montenegro's coast.",
    date: "2026-06-05",
    updated: "2026-08-05",
    image: 11,
    heroAlt: "The Adriatic coastline of Ulcinj, Montenegro near Hotel Maghrib",
    heroCaption: "South coast calm vs Budva's bustle.",
  },
];

export function getPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
