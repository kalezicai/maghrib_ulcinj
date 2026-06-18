import Link from "next/link";

export const metadata = {
  title: "Page Not Found | Hotel Maghrib Ulcinj",
  description: "The page you are looking for does not exist. Return to Hotel Maghrib — Ulcinj's premium halal hotel.",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#FAF9F6] text-stone-800 flex items-center justify-center px-6">
      <div className="max-w-md text-center">
        <span className="font-serif text-8xl text-[#C5A880] block mb-4">404</span>
        <h1 className="font-serif text-3xl text-stone-900 mb-3">Page Not Found</h1>
        <p className="text-stone-500 text-sm mb-8 leading-relaxed">
          The page you&rsquo;re looking for doesn&rsquo;t exist or has been moved. 
          Return to our homepage to explore Ulcinj&rsquo;s premier halal hotel.
        </p>
        <Link
          href="/"
          className="inline-block bg-stone-900 hover:bg-[#C5A880] text-[#FAF9F6] hover:text-stone-950 font-semibold text-xs tracking-[0.15em] uppercase py-4 px-8 rounded-full transition-all duration-300"
        >
          Return Home
        </Link>
      </div>
    </main>
  );
}
