import Link from "next/link";
import { Check, Star, MapPin, Phone, Compass, Utensils, Waves, Moon, Sun, Car, Users } from "lucide-react";

export const metadata = {
  title: "Halal Hotel Ulcinj | 100% Halal Accommodation Montenegro",
  description: "Book the best halal hotel in Ulcinj, Montenegro. 100% alcohol-free luxury, halal breakfast, private family spa, prayer room & sea-view suites. Direct booking best rates.",
  keywords: [
    "halal hotel Ulcinj", "halal accommodation Montenegro", "alcohol free hotel Ulcinj",
    "Muslim friendly hotel Montenegro", "halal resort Adriatic", "family halal hotel",
    "ulcinj halal breakfast", "private spa halal hotel", "hotel maghrib ulcinj booking"
  ],
  openGraph: {
    title: "Halal Hotel Ulcinj | 100% Halal Accommodation in Montenegro",
    description: "Book directly at Hotel Maghrib - Ulcinj's premier halal hotel. Alcohol-free, sea-view suites, halal breakfast, private spa, prayer room.",
    url: "https://hotelmaghrib.me/halal-hotel-ulcinj",
    siteName: "Hotel Maghrib Ulcinj",
    images: [{ url: "/images/gallery/hotel-maghrib-gallery-03.webp", width: 1200, height: 630, alt: "Hotel Maghrib halal hotel Ulcinj Montenegro sea view" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Halal Hotel Ulcinj | 100% Halal Accommodation Montenegro",
    description: "Book directly at Hotel Maghrib - Ulcinj's premier halal hotel. Alcohol-free, sea-view suites, halal breakfast, private spa, prayer room.",
    images: ["/images/gallery/hotel-maghrib-gallery-03.webp"],
  },
  alternates: { canonical: "https://hotelmaghrib.me/halal-hotel-ulcinj" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Hotel",
  "name": "Hotel Maghrib",
  "description": "Ulcinj's premier 100% halal hotel. Alcohol-free, sea-view suites, halal breakfast buffet, private spa, prayer room.",
  "url": "https://hotelmaghrib.me/halal-hotel-ulcinj",
  "telephone": "+382 68 007 720",
  "address": { "@type": "PostalAddress", "streetAddress": "1 Kosovska", "addressLocality": "Ulcinj", "addressCountry": "ME" },
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "136", "bestRating": "5" },
};

export default function HalalHotelUlcinjPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="min-h-screen bg-[#FAF9F6] text-stone-800 font-sans selection:bg-stone-200 selection:text-stone-900">
        <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-stone-200/50">
          <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link href="/" className="flex flex-col">
              <span className="font-serif text-xl tracking-[0.15em] font-semibold text-stone-900 leading-none">MAGHRIB</span>
              <span className="text-[9px] tracking-[0.3em] uppercase text-[#C5A880] font-medium">Hotel • Ulcinj</span>
            </Link>
            <a href="#booking" className="bg-stone-950 hover:bg-[#C5A880] text-white hover:text-stone-950 font-semibold text-xs tracking-[0.15em] uppercase py-3 px-6 rounded-full transition-all duration-300">Book Now</a>
          </div>
        </header>

        <section className="relative min-h-[80vh] flex items-center bg-stone-950 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src="/images/gallery/hotel-maghrib-gallery-03.webp" alt="Hotel Maghrib halal hotel Ulcinj Montenegro sunset Adriatic view" className="w-full h-full object-cover object-center opacity-70" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/50 to-stone-950/30"></div>
          </div>
          <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-center text-white">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[11px] uppercase tracking-[0.2em] mb-6">
              <Compass className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>Ulcinj&rsquo;s Premier Halal Hotel</span>
            </div>
            <h1 className="font-serif text-5xl md:text-7xl tracking-tight leading-[1.05] mb-6">
              100% Halal Hotel <br />
              <span className="text-[#C5A880] italic font-normal">in Ulcinj, Montenegro</span>
            </h1>
            <p className="text-base md:text-lg text-stone-200 max-w-2xl mx-auto leading-relaxed mb-10 font-light">
              Experience the perfect halal family vacation at Hotel Maghrib. Alcohol-free premises, 
              certified halal breakfast buffet, private family spa with pool & sauna, onsite prayer room, 
              and premium sea-view suites on Montenegro&rsquo;s beautiful Adriatic coast.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#booking" className="bg-white hover:bg-[#C5A880] text-stone-950 font-bold text-xs tracking-widest uppercase py-4 px-8 rounded-full shadow-lg transition-all">Check Availability & Rates</a>
              <a href="#features" className="bg-transparent hover:bg-white/10 text-white border border-white/30 font-bold text-xs tracking-widest uppercase py-4 px-8 rounded-full transition-all">Why We&rsquo;re Different</a>
            </div>
          </div>
        </section>

        <section className="bg-white border-b border-stone-200/80 py-8">
          <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "4.9", label: "Google Rating" },
              { value: "136", label: "Verified Reviews" },
              { value: "100%", label: "Halal Certified" },
              { value: "0%", label: "Alcohol Policy" },
            ].map(({ value, label }) => (
              <div key={label}>
                <span className="block font-serif text-3xl text-stone-900 font-semibold">{value}</span>
                <span className="text-[10px] text-stone-500 uppercase tracking-widest block mt-1 font-medium">{label}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="features" className="py-20 max-w-5xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl text-stone-900 text-center mb-14">Why Hotel Maghrib Is Ulcinj&rsquo;s Best Halal Hotel</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Utensils className="w-5 h-5 text-stone-600" />, title: "100% Halal Breakfast", desc: "Certified halal gastronomy with fresh pastries, traditional dishes, and organic options. No alcohol served anywhere on premises." },
              { icon: <Waves className="w-5 h-5 text-stone-600" />, title: "Private Family Spa", desc: "Reserve the entire pool, sauna & jacuzzi exclusively for your family. Women & kids only hours, men only hours, and mixed hours available." },
              { icon: <Moon className="w-5 h-5 text-stone-600" />, title: "Onsite Prayer Room", desc: "Dedicated air-conditioned Masjid with wudu facilities. Qibla direction markers in every room for convenient daily prayers." },
              { icon: <Sun className="w-5 h-5 text-stone-600" />, title: "Sea-View Suites", desc: "Every room features a private balcony with panoramic Adriatic sea views. Spacious, modern, and spotlessly clean." },
              { icon: <Car className="w-5 h-5 text-stone-600" />, title: "Free Private Parking", desc: "Secure, complimentary parking for all guests. Located in a quiet, elevated neighborhood near Small Beach and pine forests." },
              { icon: <Users className="w-5 h-5 text-stone-600" />, title: "Family Privacy First", desc: "Hidden-view balconies, family-exclusive spa slots, conservative dress code respected. No loud music or inappropriate entertainment." },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="bg-white p-6 rounded-2xl border border-stone-200/60 shadow-sm space-y-3 hover:shadow-md transition-shadow">
                <div className="mb-1">{icon}</div>
                <h3 className="font-serif text-lg text-stone-900 font-semibold">{title}</h3>
                <p className="text-stone-600 text-xs leading-relaxed font-light">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="booking" className="py-20 bg-[#F4F1EA] border-t border-stone-200/60">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-4">Book Your Halal Stay in Ulcinj</h2>
            <p className="text-stone-600 text-sm mb-8 max-w-xl mx-auto font-light">
              Reserve directly for the best rates. Our team will confirm your booking within 2 hours.
            </p>
            <div className="bg-white rounded-2xl border border-stone-200/80 shadow-md p-8 text-left space-y-4">
              {[
                { label: "Check-in", value: "2:00 PM" },
                { label: "Check-out", value: "11:00 AM" },
                { label: "Breakfast", value: "Included (100% Halal Buffet)" },
                { label: "Parking", value: "Free Private Parking" },
                { label: "Spa Access", value: "Book private slots free of charge" },
              ].map(({ label, value }) => (
                <div key={label} className="flex justify-between items-center border-b border-stone-100 pb-2 last:border-0">
                  <span className="text-xs font-semibold text-stone-700">{label}</span>
                  <span className="text-xs text-stone-500">{value}</span>
                </div>
              ))}
              <a href="/#booking-suite" className="block mt-6 bg-stone-900 hover:bg-[#C5A880] text-[#FAF9F6] hover:text-stone-950 text-center py-4 rounded-xl text-xs font-bold uppercase tracking-widest transition-all">Request Reservation</a>
            </div>
          </div>
        </section>

        <section className="py-20 max-w-5xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl text-stone-900 text-center mb-6">Guest Reviews</h2>
          <div className="flex justify-center gap-1 mb-8">
            {[...Array(5)].map((_, i) => (<Star key={i} className="w-5 h-5 fill-[#C5A880] text-[#C5A880]" />))}
            <span className="text-sm text-stone-500 ml-2">4.9 / 5.0 from 136 verified guests</span>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Sanela M.", text: "The hotel has a HALAL concept, which exceeded our expectations. Reserving the pool was very easy. Beautiful nasheed songs playing in the background. Excellent aroma in the lobby!" },
              { name: "Mujahidah U.", text: "As Muslims, it is rare to find a hotel that truly caters to our needs. Our room was spacious, modern, with a private balcony with breathtaking sea views." },
              { name: "Ermin T.", text: "Highly recommend 10/10. Extremely clean, modernly decorated. Staff is incredibly friendly. Wellness center with pool, sauna, and jacuzzi is ideal." },
            ].map(({ name, text }) => (
              <div key={name} className="bg-white p-6 rounded-2xl border border-stone-200/70 shadow-sm">
                <div className="flex gap-0.5 mb-2">
                  {[...Array(5)].map((_, i) => (<Star key={i} className="w-3.5 h-3.5 fill-[#C5A880] text-[#C5A880]" />))}
                </div>
                <p className="text-stone-600 text-xs leading-relaxed font-light italic">&ldquo;{text}&rdquo;</p>
                <span className="text-[10px] text-stone-400 mt-2 block font-medium">{name}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/#reviews" className="inline-flex items-center gap-1 text-xs text-[#C5A880] font-semibold hover:underline">
              Read all 136 reviews &rarr;
            </Link>
          </div>
        </section>

        <section className="py-16 bg-stone-900 text-white text-center">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="font-serif text-3xl text-white mb-4">Ready for the Ultimate Halal Vacation?</h2>
            <p className="text-stone-300 text-sm mb-8 font-light">Contact us directly for group bookings, airport transfers, or special requests.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-xs">
              <a href="tel:+38268007720" className="flex items-center gap-2 bg-[#C5A880] text-stone-950 font-bold px-6 py-3 rounded-full hover:bg-white transition-all">
                <Phone className="w-4 h-4" /> +382 68 007 720
              </a>
              <span className="text-stone-500 font-mono">info@hotelmaghrib.me</span>
              <span className="flex items-center gap-1 text-stone-400">
                <MapPin className="w-3.5 h-3.5" /> 1 Kosovska, Ulcinj
              </span>
            </div>
          </div>
        </section>

        <footer className="bg-stone-950 text-stone-400 py-8 text-center text-xs">
          <div className="max-w-5xl mx-auto px-6">
            <p>&copy; {new Date().getFullYear()} Hotel Maghrib, Ulcinj, Montenegro. Premium Halal Hospitality.</p>
            <div className="flex justify-center gap-4 mt-3">
              <Link href="/" className="hover:text-[#C5A880] transition-colors">Home</Link>
              <Link href="/gallery" className="hover:text-[#C5A880] transition-colors">Gallery</Link>
              <Link href="/brand-brief" className="hover:text-[#C5A880] transition-colors">About</Link>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
