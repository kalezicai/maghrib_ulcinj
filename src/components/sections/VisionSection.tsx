import { Award, Check } from "lucide-react";

export function VisionSection() {
  return (
    <section id="about" className="py-24 bg-[#FAF9F6] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6 grid grid-cols-12 gap-4">
            <div className="col-span-8 relative rounded-3xl overflow-hidden shadow-md group">
              <img
                src="/images/gallery/hotel-maghrib-gallery-10.webp"
                alt="Crystal clear waters of Adriatic Sea, Ulcinj near Hotel Maghrib"
                className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-stone-900/10"></div>
            </div>
            <div className="col-span-4 flex flex-col justify-end">
              <div className="rounded-3xl overflow-hidden shadow-md mb-4 group">
                <img
                  src="/images/gallery/hotel-maghrib-gallery-04.webp"
                  alt="Fresh rich breakfast serving coffee - Halal certified hotel"
                  className="w-full h-[180px] object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="bg-[#C5A880] text-stone-950 p-6 rounded-3xl text-center shadow-sm">
                <Award className="w-8 h-8 mx-auto mb-3" />
                <span className="block font-serif text-lg font-bold">10/10</span>
                <span className="text-[9px] uppercase tracking-wider font-semibold block">Cleanliness Score</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-semibold tracking-[0.2em] text-[#C5A880] uppercase block">
                A New Paradigm of Hospitality
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-stone-900 leading-tight">
                Where Your Faith & Comfort <br />
                Are Revered in Harmony
              </h2>
            </div>

            <div className="text-stone-600 text-sm md:text-base space-y-4 leading-relaxed font-light">
              <p>
                Built high on a serene hill overlooking the glowing Adriatic Sea, <strong>Hotel Maghrib</strong> is the crown jewel 
                of conservative family hospitality in Ulcinj. Flanked by the iconic, oxygen-rich 
                Mediterranean <strong>pine trees (Borici)</strong> and located just moments from the soft sands of the
                <strong> Small Beach (Mala Plaža)</strong>, we offer an environment of absolute peace, pristine hygiene, and warm hospitality.
              </p>
              <p>
                As experienced global travelers, we understand how challenging it can be to find luxury accommodations 
                that seamlessly honor your religious lifestyle. At Hotel Maghrib, everything is curated to fulfill your needs: 
                from a <strong>100% Halal-certified breakfast buffet</strong>, an entirely
                <strong> alcohol-free environment</strong>, to an onsite <strong>Masjid (Prayer Room)</strong>, and clear Qibla indicators in every guest room.
              </p>
              <p>
                Our hotel stands out for its high-tech cleanliness, exceptional hospitality from our hosts 
                (Abdullah, Jahja, Arjan, and the manager), and a beautiful, spacious dining terrace that is open to guests 24 hours a day 
                to sit and absorb the cooling breeze and breathtaking sea views.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-stone-200">
              <div className="flex items-start gap-3">
                <div className="p-1.5 rounded-full bg-emerald-50 text-emerald-600 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-stone-800 uppercase tracking-wider block">100% Halal Certified</span>
                  <span className="text-[11px] text-stone-500">Delicious and rich fresh breakfast variety</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-1.5 rounded-full bg-emerald-50 text-emerald-600 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-stone-800 uppercase tracking-wider block">Privacy Balconies</span>
                  <span className="text-[11px] text-stone-500">Hidden from sight for carefree sunbathing</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-1.5 rounded-full bg-emerald-50 text-emerald-600 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-stone-800 uppercase tracking-wider block">Onsite Masjid & Qibla</span>
                  <span className="text-[11px] text-stone-500">Prayer room and direction markings in suites</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-1.5 rounded-full bg-emerald-50 text-emerald-600 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-stone-800 uppercase tracking-wider block">Private Spa Bookings</span>
                  <span className="text-[11px] text-stone-500">Reserve pool, sauna & jacuzzi exclusively</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
