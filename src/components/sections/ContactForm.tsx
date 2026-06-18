"use client";

import { useState, useTransition } from "react";
import { Send, Check, AlertTriangle } from "lucide-react";
import { submitInquiry } from "@/app/actions";

export function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: ""
  });
  const [isPending, startTransition] = useTransition();
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    startTransition(async () => {
      const res = await submitInquiry(form);
      if (res.success) {
        setSuccess(res.message);
        setForm({ name: "", email: "", subject: "General Inquiry", message: "" });
      } else {
        setError(res.message);
      }
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-left">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-[10px] font-bold uppercase tracking-wider text-stone-600 mb-1.5">
            Your Name
          </label>
          <input type="text" required placeholder="e.g. Brother Samir"
            value={form.name}
            onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
            className="w-full bg-[#FAF9F6] border border-stone-200 rounded-xl px-3.5 py-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-[#C5A880]" />
        </div>
        <div>
          <label className="block text-[10px] font-bold uppercase tracking-wider text-stone-600 mb-1.5">
            Email Address
          </label>
          <input type="email" required placeholder="e.g. samir@example.com"
            value={form.email}
            onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
            className="w-full bg-[#FAF9F6] border border-stone-200 rounded-xl px-3.5 py-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-[#C5A880]" />
        </div>
      </div>

      <div>
        <label className="block text-[10px] font-bold uppercase tracking-wider text-stone-600 mb-1.5">
          Topic of Inquiry
        </label>
        <select value={form.subject}
          onChange={(e) => setForm((prev) => ({ ...prev, subject: e.target.value }))}
          className="w-full bg-[#FAF9F6] border border-stone-200 rounded-xl px-3.5 py-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-[#C5A880]">
          <option value="General Inquiry">General Inquiry</option>
          <option value="Halal Diet Questions">Halal Gastronomy & Diet</option>
          <option value="Private Spa Bookings">Private Spa & Pool scheduling</option>
          <option value="Airport Shuttle Booking">Airport shuttle transfer</option>
          <option value="Group Reservation">Group reservation request</option>
        </select>
      </div>

      <div>
        <label className="block text-[10px] font-bold uppercase tracking-wider text-stone-600 mb-1.5">
          Your Message
        </label>
        <textarea required rows={4}
          placeholder="Please write your questions here in detail. Our concierge will respond shortly..."
          value={form.message}
          onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
          className="w-full bg-[#FAF9F6] border border-stone-200 rounded-xl px-3.5 py-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-[#C5A880]"></textarea>
      </div>

      <button type="submit" disabled={isPending}
        className="w-full bg-stone-900 hover:bg-[#C5A880] text-[#FAF9F6] hover:text-stone-950 py-3 rounded-xl text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-sm flex items-center justify-center gap-2">
        <Send className="w-3.5 h-3.5" />
        {isPending ? "Sending message..." : "Send Inquiry"}
      </button>

      {success && (
        <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-medium flex items-center gap-2">
          <Check className="w-4 h-4" />
          <span>{success}</span>
        </div>
      )}
      {error && (
        <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs font-medium flex items-center gap-2">
          <AlertTriangle className="w-4 h-4" />
          <span>{error}</span>
        </div>
      )}
    </form>
  );
}
