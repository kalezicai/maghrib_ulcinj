import { Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-stone-950 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/gallery/hotel-maghrib-hero.webp"
          alt="Hotel Maghrib lobby and reception area with warm lighting"
          className="w-full h-full object-cover object-center opacity-75 scale-105 animate-[subtle-zoom_20s_infinite_alternate]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-stone-950/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/70 via-transparent to-stone-950/20"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center text-white flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[11px] uppercase tracking-[0.2em] mb-8 animate-fade-in-up">
          <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
          <span>Discover Montenegro&rsquo;s Premier Halal Sanctuary</span>
        </div>

        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[1.05] mb-8 animate-fade-in-up">
          Where Coastal Peace <br />
          <span className="text-[#C5A880] italic font-normal">Meets Pure Devotion</span>
        </h1>

        <p className="text-base md:text-lg text-stone-200 max-w-2xl leading-relaxed mb-12 font-light">
          Perched elegantly on the pine-scented hills of Ulcinj, Montenegro. 
          Experience pristine 100% Halal gastronomy, absolute family privacy, and premium sea-view suites 
          designed for deep, luxurious relaxation.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md">
          <a
            href="#booking-suite"
            className="w-full sm:w-auto bg-white hover:bg-[#C5A880] text-stone-950 font-bold text-xs tracking-widest uppercase py-4.5 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-center"
          >
            Check Availability
          </a>
          <a
            href="#spa"
            className="w-full sm:w-auto bg-transparent hover:bg-white/10 text-white border border-white/30 font-bold text-xs tracking-widest uppercase py-4.5 px-8 rounded-full transition-all text-center"
          >
            Explore Private Spa
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:block">
        <a href="#about" className="flex flex-col items-center gap-2 text-stone-400 hover:text-white transition-colors">
          <span className="text-[9px] uppercase tracking-[0.25em]">Scroll to Discover</span>
          <div className="w-5 h-10 border border-stone-600 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-[#C5A880] rounded-full animate-bounce"></div>
          </div>
        </a>
      </div>
    </section>
  );
}
