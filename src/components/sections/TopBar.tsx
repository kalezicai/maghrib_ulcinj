export function TopBar() {
  return (
    <div className="bg-stone-900 text-[#FAF9F6] px-4 py-2.5 text-xs font-medium tracking-[0.15em] uppercase flex flex-col md:flex-row justify-between items-center gap-2">
      <div className="flex items-center gap-2">
        <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
        <span>100% Halal Concept & Alcohol-Free Luxury Sanctuary</span>
      </div>
      <div className="flex items-center gap-4">
        <span>★ 4.9 on Google (136 Authentic Reviews)</span>
        <span className="hidden md:inline">|</span>
        <span className="hidden md:inline">Ulcinj, Montenegro</span>
      </div>
    </div>
  );
}
