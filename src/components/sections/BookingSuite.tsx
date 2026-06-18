"use client";

import { Check } from "lucide-react";
import { ROOMS, SPA_SLOTS } from "@/lib/constants";
import type { BookingFormData } from "@/lib/types";

interface BookingSuiteProps {
  form: BookingFormData;
  setForm: (fn: (prev: BookingFormData) => BookingFormData) => void;
  handleSubmit: (e: React.FormEvent) => void;
  isPending: boolean;
  success: any;
  error: string;
  setSuccess: (v: any) => void;
}

export function BookingSuite({ form, setForm, handleSubmit, isPending, success, error, setSuccess }: BookingSuiteProps) {
  const selectedRoom = ROOMS.find((r) => r.id === form.roomType);

  return (
    <section id="booking-suite" className="py-24 bg-[#F4F1EA] border-t border-stone-200/60 relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white rounded-3xl border border-stone-200/80 shadow-2xl overflow-hidden grid md:grid-cols-12">
          <div className="md:col-span-5 bg-stone-900 text-white p-8 flex flex-col justify-between relative">
            <div className="space-y-6 z-10">
              <span className="text-[10px] tracking-widest text-[#C5A880] uppercase font-bold block">
                Interactive Concierge
              </span>
              <h3 className="font-serif text-2xl md:text-3xl font-semibold leading-tight">
                Your Montenegro <br />
                Getaway
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed font-light">
                Complete this form to submit a premium booking request. Our guest relations team will verify room availability, compile your halal preferences, and email your official confirmation within 2 hours.
              </p>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 space-y-3">
                <span className="text-[9px] uppercase tracking-widest text-stone-400 block">Selected Suite</span>
                <span className="font-serif text-sm font-bold block">{selectedRoom?.name}</span>
                <div className="flex justify-between text-xs text-stone-300">
                  <span>Rate:</span>
                  <span className="font-semibold text-white">&euro;{selectedRoom?.price} / night</span>
                </div>
              </div>

              <div className="space-y-2 text-[11px] text-stone-400 pt-4 border-t border-white/10">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Free cancellation until 48h prior</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                  <span>100% Halal buffet breakfast included</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                  <span>No deposit required today</span>
                </div>
              </div>
            </div>
            <div className="text-[9px] text-stone-500 font-mono mt-8 z-10">
              1 Kosovska, Ulcinj &bull; +382 68 007 720
            </div>
            <div className="absolute -right-24 -bottom-24 w-48 h-48 bg-[#C5A880]/10 rounded-full blur-2xl"></div>
          </div>

          <div className="md:col-span-7 p-8 space-y-6">
            <h4 className="font-serif text-xl text-stone-900 font-semibold border-b border-stone-100 pb-3">
              Reservation Details
            </h4>

            {success ? (
              <div className="space-y-6 py-6 text-center animate-fade-in">
                <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
                  <Check className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif text-2xl text-stone-900 font-bold">Request Received!</h3>
                  <p className="text-xs text-stone-500 max-w-sm mx-auto leading-relaxed">
                    Thank you, <strong className="text-stone-800">{success.guestName}</strong>. Your reservation request for the <strong className="text-stone-800">{ROOMS.find((r) => r.id === form.roomType)?.name}</strong> is safely registered.
                  </p>
                </div>

                <div className="bg-[#FAF9F6] border border-stone-200/80 rounded-2xl p-5 text-left text-xs space-y-2.5 max-w-sm mx-auto">
                  <div className="flex justify-between">
                    <span className="text-stone-500">Guest Name:</span>
                    <span className="font-semibold text-stone-800">{success.guestName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-500">Check-in Date:</span>
                    <span className="font-semibold text-stone-800">{success.checkIn}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-500">Check-out Date:</span>
                    <span className="font-semibold text-stone-800">{success.checkOut}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-500">Guests Count:</span>
                    <span className="font-semibold text-stone-800">{success.guestsCount} Guests</span>
                  </div>
                  {success.privateSpaRequested && (
                    <div className="flex justify-between text-emerald-700 font-medium bg-emerald-50 p-1.5 rounded">
                      <span>Private Spa Booking:</span>
                      <span>Reserved ({success.spaSlotPreference || "09:00 - 10:00"})</span>
                    </div>
                  )}
                </div>

                <p className="text-[11px] text-stone-400">
                  A confirmation voucher and check-in instructions have been dispatched to <span className="font-mono text-stone-600">{success.guestEmail}</span>.
                </p>

                <button
                  onClick={() => setSuccess(null)}
                  className="w-full bg-stone-950 hover:bg-stone-850 text-white py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-widest transition-all"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-stone-600 mb-1.5">Full Name *</label>
                    <input type="text" required placeholder="e.g. Abdullah bin Ali"
                      value={form.guestName}
                      onChange={(e) => setForm((prev) => ({ ...prev, guestName: e.target.value }))}
                      className="w-full bg-[#FAF9F6] border border-stone-200 rounded-xl px-3.5 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-[#C5A880]" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-stone-600 mb-1.5">Email Address *</label>
                    <input type="email" required placeholder="e.g. abdullah@example.com"
                      value={form.guestEmail}
                      onChange={(e) => setForm((prev) => ({ ...prev, guestEmail: e.target.value }))}
                      className="w-full bg-[#FAF9F6] border border-stone-200 rounded-xl px-3.5 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-[#C5A880]" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-stone-600 mb-1.5">Phone Number *</label>
                    <input type="tel" required placeholder="e.g. +382 68 000 000"
                      value={form.guestPhone}
                      onChange={(e) => setForm((prev) => ({ ...prev, guestPhone: e.target.value }))}
                      className="w-full bg-[#FAF9F6] border border-stone-200 rounded-xl px-3.5 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-[#C5A880]" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-stone-600 mb-1.5">Total Guests *</label>
                    <select value={form.guestsCount}
                      onChange={(e) => setForm((prev) => ({ ...prev, guestsCount: Number(e.target.value) }))}
                      className="w-full bg-[#FAF9F6] border border-stone-200 rounded-xl px-3.5 py-2 text-xs focus:outline-none">
                      {[1, 2, 3, 4, 5].map((n) => (
                        <option key={n} value={n}>{n} Guest{(n > 1) ? "s" : ""}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-stone-600 mb-1.5">Select Suite Category</label>
                  <select value={form.roomType}
                    onChange={(e) => setForm((prev) => ({ ...prev, roomType: e.target.value }))}
                    className="w-full bg-[#FAF9F6] border border-stone-200 rounded-xl px-3.5 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-[#C5A880]">
                    {ROOMS.map((r) => (
                      <option key={r.id} value={r.id}>{r.name} &mdash; &euro;{r.price}/night</option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-stone-600 mb-1.5">Check-In Date *</label>
                    <input type="date" required value={form.checkIn}
                      onChange={(e) => setForm((prev) => ({ ...prev, checkIn: e.target.value }))}
                      className="w-full bg-[#FAF9F6] border border-stone-200 rounded-xl px-3.5 py-2 text-xs focus:outline-none" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-stone-600 mb-1.5">Check-Out Date *</label>
                    <input type="date" required value={form.checkOut}
                      onChange={(e) => setForm((prev) => ({ ...prev, checkOut: e.target.value }))}
                      className="w-full bg-[#FAF9F6] border border-stone-200 rounded-xl px-3.5 py-2 text-xs focus:outline-none" />
                  </div>
                </div>

                <div className="bg-[#FAF9F6] p-4 rounded-xl border border-stone-200/60 space-y-3">
                  <label className="flex items-center gap-2.5 cursor-pointer">
                    <input type="checkbox" checked={form.privateSpaRequested}
                      onChange={(e) => setForm((prev) => ({ ...prev, privateSpaRequested: e.target.checked }))}
                      className="rounded text-[#C5A880] focus:ring-[#C5A880] w-4 h-4" />
                    <span className="text-xs font-semibold text-stone-800 uppercase tracking-wide">
                      Request Private Spa Session (Free of Charge)
                    </span>
                  </label>
                  {form.privateSpaRequested && (
                    <div className="pt-2 border-t border-stone-200/60 animate-fade-in">
                      <label className="block text-[9px] font-bold uppercase tracking-wider text-stone-500 mb-1.5">
                        Preferred 1-Hour Exclusive Slot
                      </label>
                      <select value={form.spaSlotPreference}
                        onChange={(e) => setForm((prev) => ({ ...prev, spaSlotPreference: e.target.value }))}
                        className="w-full bg-white border border-stone-200 rounded-lg px-2.5 py-1.5 text-xs focus:outline-none">
                        {SPA_SLOTS.map((slot) => (
                          <option key={slot} value={slot}>{slot}</option>
                        ))}
                      </select>
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-stone-600 mb-1.5">
                    Special Requests / Dietary Needs
                  </label>
                  <textarea rows={2} placeholder="e.g. Crib for toddler, Qibla compass assistance, strictly organic meals..."
                    value={form.specialRequests}
                    onChange={(e) => setForm((prev) => ({ ...prev, specialRequests: e.target.value }))}
                    className="w-full bg-[#FAF9F6] border border-stone-200 rounded-xl px-3.5 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-[#C5A880]"></textarea>
                </div>

                <button type="submit" disabled={isPending}
                  className="w-full bg-stone-900 hover:bg-[#C5A880] text-[#FAF9F6] hover:text-stone-950 py-4 px-6 rounded-xl text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-md hover:shadow-lg">
                  {isPending ? "Transmitting Request..." : "Request Premium Reservation"}
                </button>

                {error && (
                  <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs font-medium">
                    {error}
                  </div>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
