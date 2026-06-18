"use client";

import Link from "next/link";
import { ArrowLeft, Sparkles, Compass, BookOpen, Layers, CheckCircle2, Shield, Eye } from "lucide-react";

export function BrandBriefClient() {
  return (
    <main className="min-h-screen bg-[#FAF9F6] text-stone-900 selection:bg-stone-200 selection:text-stone-900">
      <div className="bg-stone-900 text-[#FAF9F6] text-xs py-2.5 text-center tracking-[0.2em] uppercase font-medium">
        Premium Design Documentation • Hotel Maghrib
      </div>

      <header className="border-b border-stone-200/60 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-serif text-xl tracking-wider font-semibold text-stone-800">
              MAGHRIB <span className="text-[#C5A880] font-sans text-xs uppercase tracking-widest ml-1">Design MD</span>
            </span>
          </div>
          <Link
            href="/"
            className="group flex items-center gap-2 text-sm text-stone-600 hover:text-stone-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Return to Experience</span>
          </Link>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-16 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF9F6] border border-stone-200 text-stone-600 text-xs uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>Sleek Light Theme & Pure Craftsmanship</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-stone-900 tracking-tight leading-tight">
            Brand Narrative & <br />
            <span className="text-[#C5A880] italic">Design Architecture</span>
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed max-w-2xl">
            A comprehensive design document detailing the aesthetic guidelines, light-theme palette choices, 
            conservative halal-hospitality focus, and custom-engineered technical strategies developed for
            <strong> Hotel Maghrib</strong> in Ulcinj, Montenegro.
          </p>
        </div>

        <section className="mb-16 border-t border-stone-200/80 pt-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <span className="text-xs font-semibold tracking-widest text-[#C5A880] uppercase flex items-center gap-2">
                <Compass className="w-4 h-4" /> 01 / BRAND IDENTITY
              </span>
              <h2 className="font-serif text-2xl text-stone-800 mt-2">The Islamic-Oriented Luxury Sanctuary</h2>
            </div>
            <div className="md:col-span-2 space-y-4 text-stone-600 text-sm leading-relaxed">
              <p>
                <strong>Hotel Maghrib</strong> occupies a prestigious niche in Ulcinj, Montenegro. Situated next to the 
                historic pine trees (Borici) and overlooking the glowing Adriatic Sea near Small Beach (Mala Plaža), it represents 
                a perfect marriage of Mediterranean coastal leisure and high-end, 100% alcohol-free, family-oriented 
                halal hospitality.
              </p>
              <p>
                The word <span className="font-serif italic text-stone-800">&ldquo;Maghrib&rdquo;</span> translates to &ldquo;the sunset&rdquo; or &ldquo;the West&rdquo; 
                in Arabic, mirroring the breathtaking evening vistas of the Ulcinj coast, where the sun melts into the Adriatic. 
                Our design represents this warm, sunset glow using a premium light palette, avoiding visual &ldquo;slop&rdquo; and noise 
                in favor of spacious minimalism, structural balance, and fine typography.
              </p>
              <div className="bg-white p-5 rounded-2xl border border-stone-200/60 shadow-sm mt-4">
                <h4 className="font-serif text-stone-800 text-base mb-2">Core Brand Pillars</h4>
                <ul className="grid grid-cols-2 gap-3 text-xs">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> 100% Halal Gastronomy</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Alcohol-Free & Serene</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Private Spa Booking (Conflict-Free)</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Family & Conservative Dignity</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Sea-view Spacious Suites</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Quiet & Healthy Atmosphere</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16 border-t border-stone-200/80 pt-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <span className="text-xs font-semibold tracking-widest text-[#C5A880] uppercase flex items-center gap-2">
                <Layers className="w-4 h-4" /> 02 / DESIGN SYSTEM
              </span>
              <h2 className="font-serif text-2xl text-stone-800 mt-2">Light Theme Token Palette</h2>
            </div>
            <div className="md:col-span-2 space-y-6">
              <p className="text-stone-600 text-sm leading-relaxed">
                The visual system relies entirely on a crisp, light, warm color scheme that communicates peace, purity, and luxury. 
                It evokes the sand dunes of Velika Plaža, the calcareous stone of Ulcinj&rsquo;s Old Town, and the warm morning light.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="bg-[#FAF9F6] p-4 rounded-xl border border-stone-200 shadow-sm text-center">
                  <div className="w-full h-12 rounded-lg bg-[#FAF9F6] border border-stone-200 mb-2"></div>
                  <span className="block text-xs font-semibold text-stone-800">Alabaster</span>
                  <span className="text-[10px] text-stone-500 font-mono">#FAF9F6</span>
                  <span className="block text-[10px] text-stone-400 mt-1 uppercase tracking-widest">Base BG</span>
                </div>
                <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-sm text-center">
                  <div className="w-full h-12 rounded-lg bg-white border border-stone-100 mb-2"></div>
                  <span className="block text-xs font-semibold text-stone-800">Pure Ivory</span>
                  <span className="text-[10px] text-stone-500 font-mono">#FFFFFF</span>
                  <span className="block text-[10px] text-stone-400 mt-1 uppercase tracking-widest">Card & Nav</span>
                </div>
                <div className="bg-[#F4F1EA] p-4 rounded-xl border border-stone-200 shadow-sm text-center">
                  <div className="w-full h-12 rounded-lg bg-[#F4F1EA] mb-2"></div>
                  <span className="block text-xs font-semibold text-stone-800">Warm Sand</span>
                  <span className="text-[10px] text-stone-500 font-mono">#F4F1EA</span>
                  <span className="block text-[10px] text-stone-400 mt-1 uppercase tracking-widest">Accent BG</span>
                </div>
                <div className="bg-[#C5A880] p-4 rounded-xl border border-stone-200 shadow-sm text-center text-white">
                  <div className="w-full h-12 rounded-lg bg-[#C5A880] mb-2"></div>
                  <span className="block text-xs font-semibold text-stone-900">Satin Gold</span>
                  <span className="text-[10px] text-stone-900 font-mono">#C5A880</span>
                  <span className="block text-[10px] text-stone-900/75 mt-1 uppercase tracking-widest">Luxury Accent</span>
                </div>
              </div>
              <div className="space-y-3 pt-4">
                <h4 className="font-serif text-stone-800 text-base">Sophisticated Typography Pairing</h4>
                <div className="grid grid-cols-2 gap-4 border border-stone-200/60 p-4 rounded-xl bg-white text-sm">
                  <div>
                    <span className="text-[10px] text-[#C5A880] uppercase tracking-widest font-semibold block mb-1">Headings & Luxury</span>
                    <span className="font-serif text-lg text-stone-800 block">Playfair Display</span>
                    <p className="text-[11px] text-stone-500 mt-1">Conveys heritage, elegance, premium architecture, and sunset serenity.</p>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#C5A880] uppercase tracking-widest font-semibold block mb-1">Body & Navigation</span>
                    <span className="font-sans font-medium text-lg text-stone-800 block">Inter / System Sans</span>
                    <p className="text-[11px] text-stone-500 mt-1">Ensures maximum legibility, sleek modern usability, and fast page loads.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16 border-t border-stone-200/80 pt-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <span className="text-xs font-semibold tracking-widest text-[#C5A880] uppercase flex items-center gap-2">
                <BookOpen className="w-4 h-4" /> 03 / SEO ARCHITECTURE
              </span>
              <h2 className="font-serif text-2xl text-stone-800 mt-2">Organic Search Dominance</h2>
            </div>
            <div className="md:col-span-2 space-y-4 text-stone-600 text-sm leading-relaxed">
              <p>To secure prime positioning on Google search result pages, our frontend implements several local SEO tactics:</p>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-[#C5A880] font-mono font-bold">01.</span>
                  <div>
                    <strong className="text-stone-800 block text-xs uppercase tracking-wider">Semantic Header Hierarchies</strong>
                    <span>Targeting major high-intent keywords like <em>&ldquo;Halal Hotel Ulcinj&rdquo;</em>, <em>&ldquo;Private Spa Accommodation Montenegro&rdquo;</em>, and <em>&ldquo;Alcohol-Free Luxury Resort Montenegro&rdquo;</em> using structural, semantic tags and rich metadata.</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#C5A880] font-mono font-bold">02.</span>
                  <div>
                    <strong className="text-stone-800 block text-xs uppercase tracking-wider">Schema.org JSON-LD Microdata</strong>
                    <span>Embedded structured data for a <code>Hotel</code> containing the name, exact geographic coordinates, address, booking rates, 4.9-star reviews aggregate (136 reviews), telephone number, and halal-specific amenities to facilitate rich-snippet rendering on Google search.</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#C5A880] font-mono font-bold">03.</span>
                  <div>
                    <strong className="text-stone-800 block text-xs uppercase tracking-wider">Hyper-Local Content Optimization</strong>
                    <span>The integration of geographically contextual terms like &ldquo;Mala Plaža (Small Beach)&rdquo;, &ldquo;Borici pine trees&rdquo;, &ldquo;Ada Bojana&rdquo;, and &ldquo;Valdanos olive groves&rdquo; highlights the hotel&rsquo;s geographic prominence, boosting local pack visibility.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16 border-t border-stone-200/80 pt-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <span className="text-xs font-semibold tracking-widest text-[#C5A880] uppercase flex items-center gap-2">
                <Shield className="w-4 h-4" /> 04 / EXCLUSIVE TECH SOLUTIONS
              </span>
              <h2 className="font-serif text-2xl text-stone-800 mt-2">Solving the Private Spa Paradox</h2>
            </div>
            <div className="md:col-span-2 space-y-4 text-stone-600 text-sm leading-relaxed">
              <p>In standard hotel operations, managing a private-use spa for guests can lead to scheduling conflicts. Our website solves this by introducing a sleek <strong>Digital Private Spa Concierge</strong>.</p>
              <p>This interactive feature checks existing reservation slots in our PostgreSQL database before permitting a booking, eliminating the risk of double-booking. When a family books the pool and spa between 09:00 and 10:00, that slot is locked out.</p>
              <p>This resolves the issue noted in historic reviews, restoring absolute confidence for conservative travellers seeking 100% private wellness.</p>
            </div>
          </div>
        </section>

        <div className="mt-16 bg-[#F4F1EA] rounded-3xl p-8 text-center border border-stone-200/80">
          <h3 className="font-serif text-2xl text-stone-800 mb-2">Experience the Live Implementation</h3>
          <p className="text-stone-600 text-sm max-w-lg mx-auto mb-6">
            The concepts, palette, and SEO strategies outlined in this brief are fully implemented in the main portal. 
            Enjoy a highly responsive, modern, light-theme experience.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-stone-900 hover:bg-stone-800 text-white font-medium text-xs tracking-widest uppercase py-3.5 px-8 rounded-full shadow-md transition-all hover:-translate-y-0.5"
          >
            <span>Enter Hotel Maghrib Portal</span>
            <ArrowLeft className="w-4 h-4 rotate-180" />
          </Link>
        </div>
      </div>

      <footer className="border-t border-stone-200/60 py-8 bg-white text-center text-xs text-stone-500">
        &copy; {new Date().getFullYear()} Hotel Maghrib, Ulcinj, Montenegro. Engineered with Next.js, PostgreSQL & Drizzle.
      </footer>
    </main>
  );
}
