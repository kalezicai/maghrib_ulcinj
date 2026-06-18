import Link from "next/link";

export const metadata = {
  title: "Hotel Maghrib Blog | Halal Travel & Family Holidays in Ulcinj",
  description: "Expert guides on halal travel in Montenegro, family holidays in Ulcinj, and why halal-conscious families choose the Adriatic coast.",
  alternates: { canonical: "https://hotelmaghrib.me/blog" },
};

const posts = [
  {
    slug: "halal-hotel-montenegro",
    title: "Why Hotel Maghrib Is Ulcinj's Premier Halal Hotel",
    excerpt: "Discover what makes a truly halal hotel — from alcohol-free premises and certified kitchens to private family spa hours and an onsite Masjid.",
    date: "2026-06-15",
    image: "/images/gallery/hotel-maghrib-gallery-03.webp",
  },
  {
    slug: "family-holiday-ulcinj",
    title: "The Ultimate Halal Family Holiday in Ulcinj, Montenegro",
    excerpt: "Planning a halal family vacation? Ulcinj offers stunning beaches, rich culture, and family-friendly halal accommodation at Hotel Maghrib.",
    date: "2026-06-10",
    image: "/images/gallery/hotel-maghrib-gallery-10.webp",
  },
  {
    slug: "ulcinj-vs-budva",
    title: "Ulcinj vs Budva: Which Montenegrin Resort Is Best for Halal Travelers?",
    excerpt: "We compare Montenegro's two most popular coastal towns for halal-conscious travelers — from accommodation to dining and family activities.",
    date: "2026-06-05",
    image: "/images/gallery/hotel-maghrib-gallery-02.webp",
  },
];

export default function BlogIndex() {
  return (
    <main className="min-h-screen bg-[#FAF9F6] text-stone-800">
      <header className="max-w-3xl mx-auto px-6 pt-16 pb-10 text-center">
        <Link href="/" className="text-[10px] uppercase tracking-[0.2em] text-[#C5A880] font-semibold hover:underline">Hotel Maghrib</Link>
        <h1 className="font-serif text-4xl mt-4 mb-3">Blog & Guides</h1>
        <p className="text-stone-500 text-sm">Halal travel insights for your Montenegro vacation.</p>
      </header>
      <section className="max-w-3xl mx-auto px-6 pb-20 space-y-8">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
            <article className="bg-white rounded-2xl border border-stone-200/60 overflow-hidden shadow-sm hover:shadow-md transition-all">
              <div className="p-6 md:p-8">
                <time className="text-[10px] uppercase tracking-wider text-stone-400 font-medium">{post.date}</time>
                <h2 className="font-serif text-xl mt-2 group-hover:text-[#C5A880] transition-colors">{post.title}</h2>
                <p className="text-sm text-stone-500 mt-2 leading-relaxed">{post.excerpt}</p>
                <span className="inline-block mt-4 text-xs font-semibold text-[#C5A880]">Read More &rarr;</span>
              </div>
            </article>
          </Link>
        ))}
      </section>
      <footer className="text-center pb-12">
        <Link href="/" className="text-xs text-stone-400 hover:text-stone-600 underline">&larr; Back to Home</Link>
      </footer>
    </main>
  );
}
