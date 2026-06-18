"use client";

import { Star, Check, AlertTriangle, X } from "lucide-react";
import type { ReviewFormData } from "@/lib/types";

interface ReviewModalProps {
  form: ReviewFormData;
  setForm: (fn: (prev: ReviewFormData) => ReviewFormData) => void;
  handleSubmit: (e: React.FormEvent) => void;
  isPending: boolean;
  success: string;
  error: string;
  setModalOpen: (v: boolean) => void;
}

export function ReviewModal({ form, setForm, handleSubmit, isPending, success, error, setModalOpen }: ReviewModalProps) {
  return (
    <div className="fixed inset-0 z-50 bg-stone-950/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-white rounded-3xl max-w-lg w-full p-8 border border-stone-200 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={() => setModalOpen(false)}
          className="absolute top-6 right-6 text-stone-400 hover:text-stone-800"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <h3 className="font-serif text-2xl text-stone-950 font-semibold">Share Your Experience</h3>
          <p className="text-xs text-stone-500 mt-1">
            Your feedback helps us continuously improve the premium, family-friendly halal hospitality at Hotel Maghrib.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-stone-600 mb-1.5">
                Your Name
              </label>
              <input
                type="text"
                required
                placeholder="e.g., Sister Amina"
                value={form.authorName}
                onChange={(e) => setForm((prev) => ({ ...prev, authorName: e.target.value }))}
                className="w-full bg-[#FAF9F6] border border-stone-200 rounded-xl px-3.5 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-[#C5A880] focus:border-[#C5A880]"
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-stone-600 mb-1.5">
                Travel Group
              </label>
              <select
                value={form.tripType}
                onChange={(e) => setForm((prev) => ({ ...prev, tripType: e.target.value }))}
                className="w-full bg-[#FAF9F6] border border-stone-200 rounded-xl px-3.5 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-[#C5A880] focus:border-[#C5A880]"
              >
                <option value="Vacation">Vacation</option>
                <option value="Family">Family</option>
                <option value="Couple">Couple</option>
                <option value="Friends">Friends</option>
                <option value="Business">Business</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-[10px] font-bold uppercase tracking-wider text-stone-600 mb-1.5">
              Overall Star Rating
            </label>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((val) => (
                <button
                  key={val}
                  type="button"
                  onClick={() => setForm((prev) => ({ ...prev, rating: val }))}
                  className="p-1 text-stone-300 hover:scale-110 transition-transform"
                >
                  <Star
                    className={`w-8 h-8 ${
                      form.rating >= val ? "fill-[#C5A880] text-[#C5A880]" : "text-stone-200"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 bg-[#FAF9F6] p-4 rounded-xl border border-stone-200/50">
            {([
              { label: "Rooms", key: "roomsRating" },
              { label: "Service", key: "serviceRating" },
              { label: "Location", key: "locationRating" },
            ] as const).map(({ label, key }) => (
              <div key={key}>
                <span className="block text-[9px] font-bold text-stone-600 uppercase mb-1">{label}</span>
                <select
                  value={form[key]}
                  onChange={(e) => setForm((prev) => ({ ...prev, [key]: Number(e.target.value) }))}
                  className="w-full bg-white border border-stone-200 rounded-lg py-1 px-2 text-[11px]"
                >
                  {[5, 4, 3, 2, 1].map((v) => (
                    <option key={v} value={v}>{v}/5</option>
                  ))}
                </select>
              </div>
            ))}
          </div>

          <div>
            <label className="block text-[10px] font-bold uppercase tracking-wider text-stone-600 mb-1.5">
              Your Review
            </label>
            <textarea
              required
              rows={4}
              placeholder="Share details about the cleanliness, food, private pool booking, staff service, or peaceful environment..."
              value={form.text}
              onChange={(e) => setForm((prev) => ({ ...prev, text: e.target.value }))}
              className="w-full bg-[#FAF9F6] border border-stone-200 rounded-xl px-3.5 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-[#C5A880] focus:border-[#C5A880]"
            ></textarea>
          </div>

          <div className="pt-2 flex gap-3">
            <button
              type="button"
              onClick={() => setModalOpen(false)}
              className="flex-1 border border-stone-200 hover:bg-stone-50 text-stone-600 py-3 rounded-xl text-xs font-bold uppercase tracking-widest"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isPending}
              className="flex-1 bg-stone-950 hover:bg-stone-800 text-white py-3 rounded-xl text-xs font-bold uppercase tracking-widest"
            >
              {isPending ? "Publishing..." : "Publish Review"}
            </button>
          </div>

          {success && (
            <div className="p-3 rounded-xl bg-emerald-50 text-emerald-800 text-xs font-medium flex items-center gap-2">
              <Check className="w-4 h-4" />
              <span>{success}</span>
            </div>
          )}
          {error && (
            <div className="p-3 rounded-xl bg-rose-50 text-rose-800 text-xs font-medium flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" />
              <span>{error}</span>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
