import Link from "next/link";

export const metadata = {
  title: "The Ultimate Halal Family Holiday in Ulcinj, Montenegro | Blog",
  description: "Plan the perfect halal family vacation in Ulcinj, Montenegro. Family-friendly beaches, halal dining, private spa hotels, and activities for kids.",
  alternates: { canonical: "https://hotelmaghrib.me/blog/family-holiday-ulcinj" },
  openGraph: {
    title: "The Ultimate Halal Family Holiday in Ulcinj, Montenegro",
    description: "Planning a halal family vacation? Ulcinj offers stunning beaches, rich culture, and family-friendly halal accommodation.",
    url: "https://hotelmaghrib.me/blog/family-holiday-ulcinj",
    siteName: "Hotel Maghrib Ulcinj",
    images: [{ url: "/images/gallery/hotel-maghrib-gallery-10.webp", width: 1200, height: 630 }],
    type: "article",
  },
};

export default function FamilyHolidayPost() {
  return (
    <article className="min-h-screen bg-[#FAF9F6] text-stone-800">
      <div className="max-w-2xl mx-auto px-6 py-12">
        <Link href="/blog" className="text-[10px] uppercase tracking-[0.2em] text-[#C5A880] font-semibold hover:underline">&larr; Back to Blog</Link>
        <header className="mt-8 mb-10">
          <h1 className="font-serif text-3xl md:text-4xl leading-tight mb-4">The Ultimate Halal Family Holiday in Ulcinj, Montenegro</h1>
          <time className="text-xs text-stone-400 uppercase tracking-wider">June 10, 2026</time>
        </header>
        <div className="prose prose-stone prose-sm max-w-none space-y-5 text-stone-600 leading-relaxed">
          <p>Finding a family holiday destination that respects Islamic values while offering genuine fun for children and relaxation for parents is no small task. Ulcinj, Montenegro&rsquo;s southernmost coastal town, ticks every box.</p>

          <h2 className="font-serif text-xl text-stone-900 mt-8 mb-3">Why Ulcinj for a Halal Family Holiday?</h2>
          <p>Ulcinj stands apart from other Mediterranean destinations. With a significant Muslim population and a proud Ottoman heritage, halal-conscious families feel immediately at home. The town is welcoming, safe, and accustomed to catering to conservative travelers.</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Ladies&rsquo; Beach (Ženska Plaza)</strong> — A beautiful sandy beach traditionally reserved for women, perfect for mothers and daughters to enjoy freely.</li>
            <li><strong>Small Beach (Mala Plaza)</strong> — Family-friendly with shallow waters and gentle waves.</li>
            <li><strong>Halal Dining Everywhere</strong> — Numerous restaurants serve halal meat, and the Old Town is filled with family-run eateries.</li>
            <li><strong>The Pine Tree Promenade</strong> — A beautiful shaded walk along the coast, perfect for evening strolls with children.</li>
          </ul>

          <h2 className="font-serif text-xl text-stone-900 mt-8 mb-3">Family-Friendly Accommodation: Hotel Maghrib</h2>
          <p>Your choice of accommodation makes or breaks a family holiday. Hotel Maghrib offers:</p>
          <p><strong>Spacious Family Suites.</strong> Our Junior Family Suite (55 m²) sleeps up to 5 guests with a king bed and three single beds, plus a private balcony with sea views. The suite&rsquo;s layout ensures parents have privacy while children have their own space.</p>
          <p><strong>Private Pool Booking.</strong> Our indoor pool, sauna, and jacuzzi can be reserved exclusively for your family. No mixed swimming, no crowds — just quality family time in the water.</p>
          <p><strong>Kids&rsquo; Pool Area.</strong> A dedicated children&rsquo;s wading pool with warm water and colorful lighting makes bath time fun for little ones.</p>
          <p><strong>Halal Breakfast Buffet.</strong> Included in your stay, our breakfast features fresh pastries, traditional dishes, fresh fruits, and made-to-order omelets — all 100% halal.</p>
          <p><strong>Free Private Parking.</strong> No need to worry about parking fees or street parking with children.</p>

          <h2 className="font-serif text-xl text-stone-900 mt-8 mb-3">Family Activities in Ulcinj</h2>
          <p>Beyond the hotel, Ulcinj offers plenty for families:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Ulcinj Old Town</strong> — Explore the historic castle, narrow streets, and panoramic views.</li>
            <li><strong>Ada Bojana</strong> — A river island with beautiful beaches and water sports.</li>
            <li><strong>Valdanos Bay</strong> — A quiet olive-tree-lined bay perfect for peaceful family days.</li>
            <li><strong>Sveti Nikola Island</strong> — Take a short boat trip to this uninhabited island with pristine beaches.</li>
          </ul>
          <p>With its unique blend of Islamic heritage, Mediterranean beauty, and family-friendly atmosphere, Ulcinj is the perfect destination for your next halal family holiday.</p>
        </div>
        <div className="mt-12 pt-8 border-t border-stone-200">
          <Link href="/" className="inline-block bg-stone-900 hover:bg-[#C5A880] text-[#FAF9F6] hover:text-stone-950 font-semibold text-xs tracking-[0.15em] uppercase py-3 px-6 rounded-full transition-all">Check Availability</Link>
        </div>
      </div>
    </article>
  );
}
