import Link from "next/link";

export const metadata = {
  title: "Ramadan 2027 at Hotel Maghrib | Iftar & Suhoor in Ulcinj",
  description: "Experience Ramadan at Hotel Maghrib in Ulcinj, Montenegro. Special iftar and suhoor packages, late-night prayers, and private family-friendly Ramadan atmosphere.",
  alternates: { canonical: "https://hotelmaghrib.me/ramadan" },
  openGraph: {
    title: "Ramadan 2027 at Hotel Maghrib | Iftar & Suhoor in Ulcinj",
    description: "Special Ramadan packages with iftar and suhoor, extended prayer facilities, and a peaceful family atmosphere on Montenegro's coast.",
    url: "https://hotelmaghrib.me/ramadan",
    siteName: "Hotel Maghrib Ulcinj",
    images: [{ url: "/images/gallery/hotel-maghrib-gallery-03.webp", width: 1200, height: 630 }],
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "Ramadan at Hotel Maghrib 2027",
  "description": "Special Ramadan packages including iftar buffet, suhoor, and extended prayer facilities at Hotel Maghrib, Ulcinj.",
  "location": { "@type": "Place", "name": "Hotel Maghrib", "address": "1 Kosovska, Ulcinj 85360, Montenegro" },
};

export default function RamadanPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="min-h-screen bg-[#FAF9F6] text-stone-800">
        <section className="relative bg-stone-950 py-20 text-center text-white">
          <div className="absolute inset-0 bg-gradient-to-b from-stone-950 via-stone-900 to-stone-950 opacity-80"></div>
          <div className="relative z-10 max-w-3xl mx-auto px-6">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A880] font-semibold">Ramadan 2027</span>
            <h1 className="font-serif text-4xl md:text-5xl mt-4 mb-4">Ramadan at Hotel Maghrib</h1>
            <p className="text-stone-300 text-sm max-w-xl mx-auto">Spend the blessed month on Montenegro&rsquo;s beautiful coast with special iftar and suhoor packages, extended prayer facilities, and a peaceful family atmosphere.</p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Daily Iftar Buffet", desc: "Break your fast with a lavish halal-certified buffet featuring traditional Balkan, Turkish, and international dishes. Fresh dates, soups, grilled specialties, and traditional desserts." },
              { title: "Pre-Dawn Suhoor", desc: "Early morning suhoor service with light, nutritious options including fresh pastries, fruits, yogurt, and traditional energy-boosting dishes." },
              { title: "Prayer Facilities", desc: "Extended Masjid hours with Taraweeh prayers. Separate prayer spaces for brothers and sisters. Qibla direction in every room." },
              { title: "Private Family Spa", desc: "Reserve the pool and sauna exclusively for your family after iftar. Evening relaxation in a peaceful, alcohol-free environment." },
              { title: "Sea-View Suites", desc: "Spacious suites with private balconies overlooking the Adriatic. Perfect for quiet Qur&rsquo;an reading and reflection after prayers." },
              { title: "Special Ramadan Rate", desc: "Exclusive Ramadan package pricing with extended checkout hours. Contact us for details on our blessed-month special." },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-white rounded-2xl border border-stone-200/60 p-6 shadow-sm">
                <h3 className="font-serif text-lg text-stone-900 mb-2">{title}</h3>
                <p className="text-xs text-stone-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="pb-20 text-center">
          <Link
            href="/"
            className="inline-block bg-stone-900 hover:bg-[#C5A880] text-[#FAF9F6] hover:text-stone-950 font-semibold text-xs tracking-[0.15em] uppercase py-4 px-8 rounded-full transition-all"
          >
            Inquire About Ramadan Packages
          </Link>
          <p className="text-xs text-stone-400 mt-4">Contact us at <a href="tel:+38268007720" className="text-[#C5A880] hover:underline">+382 68 007 720</a> or <a href="mailto:info@hotelmaghrib.me" className="text-[#C5A880] hover:underline">info@hotelmaghrib.me</a></p>
        </section>
      </main>
    </>
  );
}
