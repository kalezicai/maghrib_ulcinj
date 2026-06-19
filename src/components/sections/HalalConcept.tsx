import { Utensils, Shield, Compass, Clock, Coffee } from "lucide-react";

export function HalalConcept() {
  return (
    <section id="halal" className="py-24 bg-[#F4F1EA]/50 border-b border-stone-200/40 relative overflow-hidden">
      <div className="absolute right-0 top-0 w-64 h-64 bg-[#C5A880]/5 rounded-full blur-3xl"></div>
      <div className="absolute left-0 bottom-0 w-64 h-64 bg-[#C5A880]/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-[0.2em] text-[#C5A880] uppercase block mb-3">
            Tailored for Family Peace & Devotion
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-stone-900">
            The 100% Halal Concept
          </h2>
          <p className="text-stone-600 text-sm mt-4 font-light leading-relaxed">
            We pride ourselves on offering a truly premium, conservative atmosphere where Muslim and family values 
            are celebrated with dignity, luxury, and absolute attention to detail.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-3xl border border-stone-200/60 shadow-sm space-y-4 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full bg-[#FAF9F6] flex items-center justify-center text-[#C5A880]">
              <Utensils className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl text-stone-900 font-semibold">100% Halal Gastronomy</h3>
            <p className="text-stone-600 text-xs leading-relaxed font-light">
              Enjoy complete peace of mind. Every single ingredient served in our beautiful breakfast buffet is 100% Halal certified. 
              Savor fresh, rich pastries, perfectly roasted traditional peppers, fresh fruits, and gourmet egg dishes. 
              Our kitchen is completely alcohol-free.
            </p>
            <span className="inline-block text-[10px] font-bold text-[#C5A880] tracking-widest uppercase">Tasty & Plentiful Breakfast</span>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-stone-200/60 shadow-sm space-y-4 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full bg-[#FAF9F6] flex items-center justify-center text-[#C5A880]">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl text-stone-900 font-semibold">Alcohol-Free Sanctuary</h3>
            <p className="text-stone-600 text-xs leading-relaxed font-light">
              We maintain an entirely alcohol-free premises. No alcohol is served, and immodest conduct is prohibited. 
              In-room mini-fridges are quiet, clean, and stocked only with halal, healthy refreshments. 
              Relax with soft, uplifting nasheed instrumentals playing in the background.
            </p>
            <span className="inline-block text-[10px] font-bold text-[#C5A880] tracking-widest uppercase">Safe & Respectful Environment</span>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-stone-200/60 shadow-sm space-y-4 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full bg-[#FAF9F6] flex items-center justify-center text-[#C5A880]">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl text-stone-900 font-semibold">Prayer Room & Qibla</h3>
            <p className="text-stone-600 text-xs leading-relaxed font-light">
              No need to search for direction. Every room features clear, elegant Qibla direction markings. 
              We also offer a dedicated, air-conditioned <strong>Masjid (Prayer Room)</strong> within the hotel, 
              allowing you to fulfill your daily prayers in a quiet, serene, and dedicated space.
            </p>
            <span className="inline-block text-[10px] font-bold text-[#C5A880] tracking-widest uppercase">Faith-Friendly Amenities</span>
          </div>
        </div>

        <div className="mt-12 bg-white rounded-3xl border border-stone-200/60 overflow-hidden shadow-md grid md:grid-cols-2">
          <div className="p-8 md:p-12 flex flex-col justify-center space-y-6">
            <span className="text-[10px] font-bold tracking-widest text-[#C5A880] uppercase block">Shared Panoramic Terrace</span>
            <h3 className="font-serif text-2xl md:text-3xl text-stone-900">Available 24/7 For Breathtaking Adriatic Vistas</h3>
            <p className="text-stone-600 text-xs md:text-sm leading-relaxed font-light">
              Our spacious, sun-drenched restaurant terrace overlooks the beautiful blue sea and the iconic pines. 
              Guests are welcome to use this gorgeous space at any time of the day or night to read, sip coffee, 
              enjoy family conversations, or simply bask in the refreshing sea breezes of Ulcinj.
            </p>
            <div className="flex items-center gap-4 text-xs text-stone-500 font-medium">
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4 text-[#C5A880]" /> Open 24 Hours
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Coffee className="w-4 h-4 text-[#C5A880]" /> Free Coffee & Tea Sets in Rooms
              </span>
            </div>
          </div>
          <div className="h-[280px] md:h-auto min-h-[240px]">
            <img
              src="/images/gallery/hotel-maghrib-gallery-07.webp"
              alt="Beautiful terrace with sea view at sunset, Ulcinj Montenegro"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
