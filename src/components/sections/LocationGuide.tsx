import { Compass, Waves, Map, MapPin, Phone, Clock } from "lucide-react";

export function LocationGuide() {
  return (
    <section id="location" className="py-24 bg-white border-b border-stone-200/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6 space-y-8">
            <div>
              <span className="text-xs font-semibold tracking-[0.2em] text-[#C5A880] uppercase block mb-3">
                Discover Montenegro&rsquo;s South Coast
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-stone-900">
                Ideal Location In Ulcinj
              </h2>
              <p className="text-stone-600 text-sm mt-4 font-light leading-relaxed">
                Ulcinj is a breathtaking coastal city renowned for its rich olive groves, ancient fortresses, 
                sand dunes, and deeply spiritual history. <strong>Hotel Maghrib</strong> sits in a quiet, elevated, 
                and secure neighborhood, perfectly positioned to access the best local experiences:
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#FAF9F6] border border-stone-200/60 flex items-center justify-center text-[#C5A880] flex-shrink-0">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-semibold text-stone-900">The Iconic Pine Trees (Borići)</h4>
                  <p className="text-stone-600 text-xs mt-1 font-light leading-relaxed">
                    Right adjacent to the hotel, the majestic pine forest stretches along the cliffs. Known for its clean, saline, 
                    and therapeutic oxygen-rich air, it provides the perfect backdrop for tranquil morning strolls.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#FAF9F6] border border-stone-200/60 flex items-center justify-center text-[#C5A880] flex-shrink-0">
                  <Waves className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-semibold text-stone-900">Small Beach (Mala Plaža) & Old Town</h4>
                  <p className="text-stone-600 text-xs mt-1 font-light leading-relaxed">
                    A comfortable short walk brings you to the soft golden sands of the Small Beach and the historic 2,500-year-old 
                    Ulcinj Old Town fortress. Explore quaint alleys and panoramic seafood dining without alcohol.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#FAF9F6] border border-stone-200/60 flex items-center justify-center text-[#C5A880] flex-shrink-0">
                  <Map className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-semibold text-stone-900">Valdanos Cove & Long Beach (Velika Plaža)</h4>
                  <p className="text-stone-600 text-xs mt-1 font-light leading-relaxed">
                    Just a brief drive away, discover Valdanos, a stunning pebble beach nestled inside an olive grove with trees 
                    dating back to ancient Rome, or Velika Plaža, a 12km stretch of healing, fine volcanic sand.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#FAF9F6] p-5 rounded-2xl border border-stone-200/60 flex justify-between items-center gap-4 text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#C5A880] animate-pulse"></span>
                <span className="text-stone-600">Local supermarket right around the corner</span>
              </div>
              <span className="text-stone-400">|</span>
              <span className="text-stone-600 font-medium">Free private secured parking onsite</span>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="bg-[#FAF9F6] border border-stone-200/60 rounded-3xl p-8 space-y-6 shadow-sm">
              <h3 className="font-serif text-xl text-stone-950 font-semibold">
                Location & Contact Details
              </h3>
              <div className="space-y-4 text-xs">
                <div className="flex items-center gap-3 text-stone-600">
                  <MapPin className="w-4 h-4 text-[#C5A880] flex-shrink-0" />
                  <span>1 Kosovska, Ulcinj 85360, Montenegro</span>
                </div>
                <div className="flex items-center gap-3 text-stone-600">
                  <Phone className="w-4 h-4 text-[#C5A880] flex-shrink-0" />
                  <span>+382 68 007 720 (Viber & WhatsApp friendly)</span>
                </div>
                <div className="flex items-center gap-3 text-stone-600">
                  <Clock className="w-4 h-4 text-[#C5A880] flex-shrink-0" />
                  <span>Check-in: 2:00 PM &bull; Check-out: 11:00 AM</span>
                </div>
              </div>

              <div className="relative h-[240px] bg-stone-100 rounded-2xl overflow-hidden border border-stone-200 flex flex-col justify-center items-center text-center p-6">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#C5A880_1px,transparent_1px)] [background-size:16px_16px]"></div>
                <div className="relative z-10 space-y-3">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#C5A880] shadow-md mx-auto">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="block font-semibold text-stone-800 text-sm">
                    Hotel Maghrib (Google Plus Code: W6F8+2C)
                  </span>
                  <p className="text-[10px] text-stone-500 max-w-xs mx-auto">
                    Perfectly located near Small Beach, next to iconic pine trees, high on a quiet panoramic hill.
                  </p>
                  <a
                    href="https://www.google.com/maps/place/Hotel+Maghrib/@41.9226016,19.211229,17z"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-white hover:bg-stone-900 text-stone-900 hover:text-white border border-stone-200 text-[10px] font-bold uppercase tracking-wider px-4 py-2 rounded-lg transition-all shadow-sm"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
