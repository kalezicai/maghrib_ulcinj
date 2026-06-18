"use client";

import { Lock, Check, AlertTriangle, Award } from "lucide-react";
import { SPA_SLOTS } from "@/lib/constants";
import type { SpaFormData } from "@/lib/types";

interface SpaConciergeProps {
  form: SpaFormData;
  setForm: (fn: (prev: SpaFormData) => SpaFormData) => void;
  handleSubmit: (e: React.FormEvent) => void;
  isPending: boolean;
  success: string;
  error: string;
  isSlotBooked: (date: string, slot: string) => boolean;
  getSlotBookedBy: (date: string, slot: string) => string;
}

export function SpaConcierge({ form, setForm, handleSubmit, isPending, success, error, isSlotBooked, getSlotBookedBy }: SpaConciergeProps) {
  return (
    <section id="spa" className="py-24 bg-white border-b border-stone-200/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs font-semibold tracking-[0.2em] text-[#C5A880] uppercase block mb-3">
                Wellness & Absolute Privacy
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-stone-900">
                The Spa Sanctuary
              </h2>
              <p className="text-stone-600 text-sm mt-4 font-light leading-relaxed">
                Indulge in deep relaxation at our spotlessly maintained wellness center. Featuring a beautiful 
                indoor swimming pool, a children&rsquo;s wading area, a warming cedar sauna, and an ultra-relaxing 
                whirlpool jacuzzi with therapeutic colors.
              </p>
            </div>

            <div className="space-y-4 bg-[#FAF9F6] p-6 rounded-3xl border border-stone-200/60">
              <h4 className="font-serif text-stone-800 text-base flex items-center gap-2">
                <Lock className="w-4 h-4 text-[#C5A880]" /> Structured & Private Hours
              </h4>
              <p className="text-xs text-stone-500 leading-relaxed font-light">
                To honor our guests&rsquo; privacy and religious lifestyles, we operate the wellness center with structured hours and a conflict-free private booking system:
              </p>
              <ul className="space-y-2 text-xs">
                <li className="flex justify-between border-b border-stone-200/40 pb-1.5">
                  <span className="text-stone-700 font-medium">✨ Private Family Booking</span>
                  <span className="text-[#C5A880] font-bold">100% Exclusive slots available daily</span>
                </li>
                <li className="flex justify-between border-b border-stone-200/40 pb-1.5">
                  <span className="text-stone-700 font-medium">🌸 Women & Kids Only Hours</span>
                  <span className="text-stone-600 font-mono">11:00 - 12:00 & 15:00 - 16:00</span>
                </li>
                <li className="flex justify-between border-b border-stone-200/40 pb-1.5">
                  <span className="text-stone-700 font-medium">🧔 Men Only Hours</span>
                  <span className="text-stone-600 font-mono">14:00 - 15:00</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-stone-700 font-medium">🌍 Mixed General Use</span>
                  <span className="text-stone-600 font-mono">All other operational hours</span>
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-3xl bg-emerald-50/50 border border-emerald-100 flex items-start gap-3">
              <Award className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
              <div className="text-xs text-emerald-900 leading-relaxed">
                <strong>Zero-Conflict Assurance:</strong> We listened to feedback! In past seasons, manual scheduling occasionally caused spa time overlaps. We developed this digital <strong>Private Spa Slot Concierge</strong>. When a guest reserves a private slot below, it immediately locks out the system, guaranteeing your family absolute, uninterrupted privacy.
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-[#FAF9F6] border border-stone-200/60 p-8 rounded-3xl shadow-md space-y-6">
            <div className="border-b border-stone-200 pb-4">
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-xl text-stone-950 font-semibold">
                  Private Spa Slot Concierge
                </h3>
                <span className="bg-[#C5A880]/10 text-[#C5A880] text-[9px] uppercase tracking-widest font-bold px-2.5 py-1 rounded-full">
                  Real-time Simulator
                </span>
              </div>
              <p className="text-xs text-stone-500 mt-1.5 font-light">
                Reserve an exclusive 1-hour session of the entire pool, jacuzzi, and sauna for your family.
              </p>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                1. Select Reservation Date
              </label>
              <div className="grid grid-cols-3 gap-2">
                {["2026-09-25", "2026-09-26", "2026-09-27"].map((dt) => {
                  const display = new Date(dt).toLocaleDateString("en-US", {
                    weekday: "short",
                    month: "short",
                    day: "numeric"
                  });
                  return (
                    <button
                      key={dt}
                      type="button"
                      onClick={() => setForm((prev) => ({ ...prev, reservationDate: dt }))}
                      className={`py-2.5 px-2 rounded-xl text-xs font-medium border text-center transition-all ${
                        form.reservationDate === dt
                          ? "bg-stone-900 text-white border-stone-900 shadow-sm"
                          : "bg-white text-stone-600 border-stone-200 hover:border-stone-300"
                      }`}
                    >
                      {display}
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                2. Choose Available Private Slot
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {SPA_SLOTS.map((slot) => {
                  const booked = isSlotBooked(form.reservationDate, slot);
                  const bookedBy = getSlotBookedBy(form.reservationDate, slot);
                  const selected = form.timeSlot === slot;
                  return (
                    <button
                      key={slot}
                      type="button"
                      disabled={booked}
                      onClick={() => setForm((prev) => ({ ...prev, timeSlot: slot }))}
                      className={`p-2 rounded-xl text-[11px] border text-left transition-all flex flex-col justify-between h-16 ${
                        booked
                          ? "bg-stone-200/60 text-stone-400 border-stone-200 cursor-not-allowed"
                          : selected
                          ? "bg-[#C5A880] text-stone-950 border-[#C5A880] shadow-sm font-medium"
                          : "bg-white text-stone-700 border-stone-200 hover:border-stone-300"
                      }`}
                    >
                      <span className="font-mono">{slot}</span>
                      {booked ? (
                        <span className="text-[9px] text-stone-500 font-semibold flex items-center gap-1">
                          <Lock className="w-2.5 h-2.5" /> Booked ({bookedBy.split(" ")[0]})
                        </span>
                      ) : selected ? (
                        <span className="text-[9px] text-stone-900 font-bold uppercase tracking-wider flex items-center gap-0.5">
                          <Check className="w-3 h-3" /> Selected
                        </span>
                      ) : (
                        <span className="text-[9px] text-emerald-600 font-semibold uppercase tracking-wider">
                          Available
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 pt-4 border-t border-stone-200/60">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-stone-600 mb-1.5">
                    Guest Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., Brother Adnan"
                    value={form.guestName}
                    onChange={(e) => setForm((prev) => ({ ...prev, guestName: e.target.value }))}
                    className="w-full bg-white border border-stone-200 rounded-xl px-3.5 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-[#C5A880] focus:border-[#C5A880]"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-stone-600 mb-1.5">
                    Room / Suite Number
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Suite 204"
                    value={form.roomNumber}
                    onChange={(e) => setForm((prev) => ({ ...prev, roomNumber: e.target.value }))}
                    className="w-full bg-white border border-stone-200 rounded-xl px-3.5 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-[#C5A880] focus:border-[#C5A880]"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isPending}
                className="w-full bg-stone-900 hover:bg-stone-800 text-white py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-widest transition-all shadow-sm flex items-center justify-center gap-2"
              >
                {isPending ? "Securing Slot..." : "Secure Private Spa Slot"}
              </button>

              {success && (
                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-medium flex items-start gap-2 animate-fade-in">
                  <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>{success}</span>
                </div>
              )}
              {error && (
                <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs font-medium flex items-start gap-2 animate-fade-in">
                  <AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>{error}</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
