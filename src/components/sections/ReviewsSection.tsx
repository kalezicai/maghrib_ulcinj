"use client";

import { Search, Filter, Star, X, MessageSquare } from "lucide-react";

interface ReviewsSectionProps {
  reviewsList: { authorName: string; rating: number; tripType: string; text: string; roomsRating: number; serviceRating: number; locationRating: number; createdAt: string }[];
  filteredReviews: any[];
  searchQuery: string;
  setSearchQuery: (v: string) => void;
  ratingFilter: number | null;
  setRatingFilter: (v: number | null) => void;
  tripTypeFilter: string;
  setTripTypeFilter: (v: string) => void;
  setReviewModalOpen: (v: boolean) => void;
  averageRating: string;
  averageRooms: string;
  averageService: string;
  averageLocation: string;
}

export function ReviewsSection({
  reviewsList, filteredReviews, searchQuery, setSearchQuery,
  ratingFilter, setRatingFilter, tripTypeFilter, setTripTypeFilter,
  setReviewModalOpen, averageRating, averageRooms, averageService, averageLocation
}: ReviewsSectionProps) {
  return (
    <section id="reviews" className="py-24 bg-[#FAF9F6] border-b border-stone-200/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-semibold tracking-[0.2em] text-[#C5A880] uppercase block">
            Guest Testimonials
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-stone-950">
            The Google Review Summary
          </h2>
          <div className="flex justify-center items-center gap-4 mt-4">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#C5A880] text-[#C5A880]" />
              ))}
            </div>
            <span className="text-lg font-bold text-stone-900">{averageRating} / 5.0</span>
            <span className="text-stone-400">|</span>
            <span className="text-stone-600 text-sm font-medium">{reviewsList.length} Verified Guest Reviews</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 mb-12">
          <div className="lg:col-span-4 bg-white p-6 rounded-3xl border border-stone-200/60 shadow-sm flex flex-col justify-between">
            <h3 className="font-serif text-lg text-stone-900 font-semibold mb-4">Rating Breakdown</h3>
            <div className="space-y-2.5">
              {[
                { stars: 5, pct: 95 },
                { stars: 4, pct: 3 },
                { stars: 3, pct: 1 },
                { stars: 2, pct: 0.5 },
                { stars: 1, pct: 0.5 },
              ].map(({ stars, pct }) => (
                <div key={stars} className="flex items-center gap-3 text-xs">
                  <span className="w-3 font-semibold text-stone-700">{stars}</span>
                  <div className="flex-1 h-2 bg-stone-100 rounded-full overflow-hidden">
                    <div className="h-full bg-[#C5A880] rounded-full" style={{ width: `${pct}%` }}></div>
                  </div>
                  <span className="text-stone-500 w-8 text-right">{pct}%</span>
                </div>
              ))}
            </div>
            <div className="pt-6 border-t border-stone-200/60 mt-6 grid grid-cols-3 gap-2 text-center">
              <div>
                <span className="block text-xs font-bold text-stone-800">{averageRooms}</span>
                <span className="text-[9px] text-stone-500 uppercase tracking-wider block mt-0.5">Rooms</span>
              </div>
              <div>
                <span className="block text-xs font-bold text-stone-800">{averageService}</span>
                <span className="text-[9px] text-stone-500 uppercase tracking-wider block mt-0.5">Service</span>
              </div>
              <div>
                <span className="block text-xs font-bold text-stone-800">{averageLocation}</span>
                <span className="text-[9px] text-stone-500 uppercase tracking-wider block mt-0.5">Location</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 bg-white p-6 rounded-3xl border border-stone-200/60 shadow-sm flex flex-col justify-between gap-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="relative">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                <input
                  type="text"
                  placeholder="Search reviews (e.g., 'halal', 'spa', 'breakfast')..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-[#FAF9F6] border border-stone-200/80 rounded-xl pl-10 pr-4 py-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-[#C5A880] focus:border-[#C5A880]"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              <div className="flex items-center gap-2">
                <Filter className="w-3.5 h-3.5 text-stone-400 flex-shrink-0" />
                <span className="text-[10px] uppercase font-bold text-stone-500 tracking-wider">Group:</span>
                <div className="flex flex-wrap gap-1 flex-1">
                  {["All", "Family", "Couple", "Vacation", "Friends"].map((tp) => (
                    <button
                      key={tp}
                      onClick={() => setTripTypeFilter(tp)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                        tripTypeFilter === tp
                          ? "bg-stone-900 text-white border-stone-900"
                          : "bg-stone-50 text-stone-600 border-stone-200/80 hover:border-stone-300"
                      }`}
                    >
                      {tp}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 border-t border-stone-100 pt-4">
              <span className="text-[10px] uppercase font-bold text-stone-500 tracking-wider">Filter Rating:</span>
              <div className="flex gap-1.5">
                <button
                  onClick={() => setRatingFilter(null)}
                  className={`px-3 py-1 rounded-lg text-xs font-medium border transition-all ${
                    ratingFilter === null
                      ? "bg-[#C5A880]/10 text-[#C5A880] border-[#C5A880]/40"
                      : "bg-white text-stone-600 border-stone-200 hover:border-stone-300"
                  }`}
                >
                  All Stars
                </button>
                {[5, 4, 1].map((star) => (
                  <button
                    key={star}
                    onClick={() => setRatingFilter(star)}
                    className={`px-3 py-1 rounded-lg text-xs font-medium border transition-all flex items-center gap-1 ${
                      ratingFilter === star
                        ? "bg-[#C5A880]/10 text-[#C5A880] border-[#C5A880]/40"
                        : "bg-white text-stone-600 border-stone-200 hover:border-stone-300"
                    }`}
                  >
                    {star} ★
                  </button>
                ))}
              </div>
              <div className="sm:ml-auto">
                <button
                  onClick={() => setReviewModalOpen(true)}
                  className="bg-[#C5A880] hover:bg-stone-900 text-stone-950 hover:text-[#FAF9F6] text-xs font-bold uppercase tracking-widest py-2 px-4 rounded-xl transition-all shadow-sm"
                >
                  Write a Review
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-h-[700px] overflow-y-auto pr-2 border border-stone-200/50 p-4 rounded-3xl bg-white/60">
          {filteredReviews.length > 0 ? (
            filteredReviews.map((review: any) => (
              <div
                key={review.id}
                className={`p-6 rounded-2xl border bg-white flex flex-col justify-between shadow-sm transition-all hover:-translate-y-0.5 ${
                  review.rating === 1 ? "border-amber-200 bg-amber-50/10" : "border-stone-200/70"
                }`}
              >
                <div>
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <span className="font-semibold text-stone-900 block text-sm">{review.authorName}</span>
                      {review.tripType && (
                        <span className="text-[10px] text-stone-500 font-mono">Group: {review.tripType}</span>
                      )}
                    </div>
                    <div className="flex gap-0.5">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#C5A880] text-[#C5A880]" />
                      ))}
                      {[...Array(5 - review.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 text-stone-200" />
                      ))}
                    </div>
                  </div>
                  <p className="text-stone-600 text-xs leading-relaxed font-light italic">
                    &ldquo;{review.text}&rdquo;
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-[10px] text-stone-400">
                  <span>Google Review Summary</span>
                  <span>Verified Stay</span>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-16 text-center space-y-3">
              <MessageSquare className="w-12 h-12 text-stone-300 mx-auto" />
              <h3 className="font-serif text-lg text-stone-700 font-semibold">No Matching Reviews Found</h3>
              <p className="text-xs text-stone-400 max-w-xs mx-auto leading-relaxed">
                Try adjusting your search keywords or removing filters to read more of our 136 verified guest reviews.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
