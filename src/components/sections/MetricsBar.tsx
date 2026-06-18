import { Star } from "lucide-react";

export function MetricsBar() {
  return (
    <section className="bg-white border-b border-stone-200/80 py-8 relative z-25">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div className="border-r border-stone-100 last:border-0">
          <span className="block font-serif text-3xl md:text-4xl text-stone-900 font-semibold">4.9</span>
          <span className="text-[10px] text-stone-500 uppercase tracking-widest block mt-1 font-medium">Google Rating</span>
          <div className="flex justify-center gap-0.5 mt-1.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-[#C5A880] text-[#C5A880]" />
            ))}
          </div>
        </div>
        <div className="border-r border-stone-100 last:border-0">
          <span className="block font-serif text-3xl md:text-4xl text-stone-900 font-semibold">136</span>
          <span className="text-[10px] text-stone-500 uppercase tracking-widest block mt-1 font-medium">Verified Guest Reviews</span>
        </div>
        <div className="border-r border-stone-100 last:border-0">
          <span className="block font-serif text-3xl md:text-4xl text-stone-900 font-semibold">100%</span>
          <span className="text-[10px] text-stone-500 uppercase tracking-widest block mt-1 font-medium">Halal Gastronomy</span>
        </div>
        <div>
          <span className="block font-serif text-3xl md:text-4xl text-stone-900 font-semibold">0%</span>
          <span className="text-[10px] text-stone-500 uppercase tracking-widest block mt-1 font-medium">Alcohol Environment</span>
        </div>
      </div>
    </section>
  );
}
