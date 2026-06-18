import Link from "next/link";

export const metadata = {
  title: "Why Hotel Maghrib Is Ulcinj's Premier Halal Hotel | Blog",
  description: "Discover what makes a truly halal hotel in Montenegro — 100% alcohol-free premises, certified halal kitchen, private family spa reservations, and an onsite Masjid with daily prayers.",
  alternates: { canonical: "https://hotelmaghrib.me/blog/halal-hotel-montenegro" },
  openGraph: {
    title: "Why Hotel Maghrib Is Ulcinj's Premier Halal Hotel",
    description: "From alcohol-free premises to private family spa hours — explore what sets Hotel Maghrib apart as Montenegro's leading halal hotel.",
    url: "https://hotelmaghrib.me/blog/halal-hotel-montenegro",
    siteName: "Hotel Maghrib Ulcinj",
    images: [{ url: "/images/gallery/hotel-maghrib-gallery-03.webp", width: 1200, height: 630 }],
    type: "article",
  },
};

export default function HalalHotelPost() {
  return (
    <article className="min-h-screen bg-[#FAF9F6] text-stone-800">
      <div className="max-w-2xl mx-auto px-6 py-12">
        <Link href="/blog" className="text-[10px] uppercase tracking-[0.2em] text-[#C5A880] font-semibold hover:underline">&larr; Back to Blog</Link>
        <header className="mt-8 mb-10">
          <h1 className="font-serif text-3xl md:text-4xl leading-tight mb-4">Why Hotel Maghrib Is Ulcinj&rsquo;s Premier Halal Hotel</h1>
          <time className="text-xs text-stone-400 uppercase tracking-wider">June 15, 2026</time>
        </header>
        <div className="prose prose-stone prose-sm max-w-none space-y-5 text-stone-600 leading-relaxed">
          <p>Montenegro has emerged as one of Europe&rsquo;s most exciting destinations for halal-conscious travelers. Its stunning Adriatic coastline, rich Ottoman heritage, and warm hospitality make it a natural choice. But finding truly halal accommodation — not just &ldquo;Muslim-friendly&rdquo; but genuinely halal-certified — has historically been a challenge.</p>
          <p>Hotel Maghrib was created to solve this. Here&rsquo;s what makes us different.</p>

          <h2 className="font-serif text-xl text-stone-900 mt-8 mb-3">What Defines a Halal Hotel?</h2>
          <p>A truly halal hotel goes beyond serving halal food. It encompasses the entire guest experience:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Alcohol-free premises</strong> — No alcohol is served or available anywhere in the hotel.</li>
            <li><strong>Halal-certified kitchen</strong> — All ingredients are sourced from certified halal suppliers, and preparation follows Islamic dietary guidelines.</li>
            <li><strong>Prayer facilities</strong> — A dedicated, clean prayer room with wudu facilities, plus Qibla direction markers in every guest room.</li>
            <li><strong>Modest environment</strong> — Family-oriented atmosphere with conservative values respected.</li>
            <li><strong>Privacy-focused amenities</strong> — Private-use spa and pool booking to maintain family modesty.</li>
          </ul>

          <h2 className="font-serif text-xl text-stone-900 mt-8 mb-3">The Hotel Maghrib Difference</h2>
          <p>At Hotel Maghrib, every aspect of the guest experience has been designed with halal principles in mind:</p>
          <p><strong>Our Kitchen.</strong> Our breakfast buffet is 100% halal-certified, featuring fresh pastries, traditional Balkan and Turkish dishes, organic eggs, fresh fruits, and gourmet coffee. No alcohol is used in any preparation.</p>
          <p><strong>Our Spa.</strong> Unlike conventional hotels where pool and spa access is shared and mixed, Hotel Maghrib offers exclusive private family booking. You reserve the entire pool, sauna, and jacuzzi for your family&rsquo;s exclusive use. We also offer women-only and men-only time slots.</p>
          <p><strong>Our Prayer Room.</strong> Our air-conditioned Masjid is available 24/7, with separate wudu facilities. Every room also features a clear Qibla direction marker.</p>
          <p><strong>Our Atmosphere.</strong> Instead of loud music or inappropriate entertainment, you&rsquo;ll hear gentle nasheed in the lobby, experience calming aromatherapy, and enjoy a peaceful, family-friendly environment.</p>

          <h2 className="font-serif text-xl text-stone-900 mt-8 mb-3">Beyond the Hotel: Halal Ulcinj</h2>
          <p>Ulcinj itself is uniquely suited for halal travelers. With its large Muslim population, you&rsquo;ll find numerous halal restaurants, the historic Ottoman Old Town, and the stunning Ladies&rsquo; Beach — a beach traditionally reserved for women. The famous pine tree promenade (Borici) offers beautiful walks, and Small Beach (Mala Plaza) is family-friendly.</p>
          <p>Whether you&rsquo;re visiting for a weekend getaway or a week-long family vacation, Hotel Maghrib offers the perfect base for exploring everything this beautiful region has to offer.</p>
        </div>
        <div className="mt-12 pt-8 border-t border-stone-200">
          <Link href="/" className="inline-block bg-stone-900 hover:bg-[#C5A880] text-[#FAF9F6] hover:text-stone-950 font-semibold text-xs tracking-[0.15em] uppercase py-3 px-6 rounded-full transition-all">Book Your Stay</Link>
        </div>
      </div>
    </article>
  );
}
