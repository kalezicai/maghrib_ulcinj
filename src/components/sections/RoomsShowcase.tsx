"use client";

import { Users, Check } from "lucide-react";
import { ROOMS } from "@/lib/constants";
import type { BookingFormData } from "@/lib/types";

interface RoomsShowcaseProps {
  activeRoomIndex: number;
  setActiveRoomIndex: (i: number) => void;
  setBookingForm: (fn: (prev: BookingFormData) => BookingFormData) => void;
}

export function RoomsShowcase({ activeRoomIndex, setActiveRoomIndex, setBookingForm }: RoomsShowcaseProps) {
  return (
    <section id="rooms" className="py-24 bg-white border-t border-b border-stone-200/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-semibold tracking-[0.2em] text-[#C5A880] uppercase block mb-3">
              Sleek Haven & Spacious Luxury
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-stone-950">
              Premium Sea-View Suites
            </h2>
          </div>
          <p className="text-stone-500 text-sm max-w-md font-light">
            Each room is exceptionally large, spotlessly clean, and bathed in natural light. 
            Equipped with silent refrigerators, safes, kettles, and generous balcony seating.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 flex flex-col gap-3">
            {ROOMS.map((room, idx) => (
              <button
                key={room.id}
                onClick={() => setActiveRoomIndex(idx)}
                className={`text-left p-6 rounded-2xl border transition-all ${
                  activeRoomIndex === idx
                    ? "bg-[#FAF9F6] border-[#C5A880] shadow-sm"
                    : "bg-white border-stone-200/60 hover:border-stone-300"
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#C5A880]">
                    From €{room.price} / Night
                  </span>
                  <span className="text-xs text-stone-400 font-mono">{room.size}</span>
                </div>
                <h3 className="font-serif text-lg text-stone-900 font-semibold group-hover:text-[#C5A880] transition-colors">
                  {room.name}
                </h3>
                <div className="flex items-center gap-3 mt-3 text-xs text-stone-500">
                  <span className="flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-[#C5A880]" />
                    {room.capacity}
                  </span>
                  <span>•</span>
                  <span>{room.highlights[0]}</span>
                </div>
              </button>
            ))}

            <div className="bg-[#F4F1EA] p-6 rounded-2xl border border-stone-200/50 text-center mt-4">
              <span className="block text-xs font-semibold text-stone-800 uppercase tracking-wider mb-2">
                All Rooms Feature Sea Views
              </span>
              <p className="text-xs text-stone-600 leading-relaxed">
                No disappointments. Every suite at Hotel Maghrib includes a private balcony with a stunning panoramic vista of the Adriatic.
              </p>
            </div>
          </div>

          <div className="lg:col-span-8 bg-[#FAF9F6] rounded-3xl overflow-hidden border border-stone-200/60 shadow-lg flex flex-col justify-between group">
            <div className="relative h-[360px] overflow-hidden">
              <img
                src={ROOMS[activeRoomIndex].image}
                alt={ROOMS[activeRoomIndex].name}
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
              />
              <div className="absolute top-4 right-4 flex gap-2">
                {ROOMS[activeRoomIndex].highlights.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-white/90 backdrop-blur-md text-stone-900 px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider shadow-sm border border-stone-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-stone-950/60 to-transparent p-6 text-white">
                <span className="text-xs text-[#C5A880] font-mono tracking-widest block uppercase mb-1">Active Preview</span>
                <h3 className="font-serif text-2xl font-bold">{ROOMS[activeRoomIndex].name}</h3>
              </div>
            </div>

            <div className="p-8 space-y-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#C5A880] mb-2">Room Narrative</h4>
                <p className="text-stone-600 text-sm leading-relaxed">
                  {ROOMS[activeRoomIndex].description}
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 pt-4 border-t border-stone-200/60">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-stone-800 block mb-2">Suite Highlights</span>
                  <ul className="space-y-1.5 text-xs text-stone-600">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#C5A880] rounded-full"></span>
                      <strong>Bed configuration:</strong> {ROOMS[activeRoomIndex].bed}
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#C5A880] rounded-full"></span>
                      <strong>Room Size:</strong> {ROOMS[activeRoomIndex].size}
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#C5A880] rounded-full"></span>
                      <strong>Capacity:</strong> {ROOMS[activeRoomIndex].capacity}
                    </li>
                  </ul>
                </div>

                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-stone-800 block mb-2">Premium Amenities</span>
                  <div className="grid grid-cols-2 gap-x-2 gap-y-1.5 text-[11px] text-stone-600">
                    {ROOMS[activeRoomIndex].amenities.slice(0, 6).map((am, idx) => (
                      <span key={idx} className="flex items-center gap-1">
                        <Check className="w-3 h-3 text-emerald-600 flex-shrink-0" />
                        {am}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-stone-200/60 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-stone-400 uppercase block tracking-wider">Estimated Rate</span>
                  <span className="text-xl font-bold text-stone-900 font-serif">€{ROOMS[activeRoomIndex].price} <span className="text-xs font-sans text-stone-500 font-normal">/ night</span></span>
                </div>
                <a
                  href="#booking-suite"
                  onClick={() => {
                    setBookingForm((prev) => ({ ...prev, roomType: ROOMS[activeRoomIndex].id }));
                  }}
                  className="bg-stone-900 hover:bg-[#C5A880] text-white hover:text-stone-900 text-xs font-bold uppercase tracking-widest py-3 px-6 rounded-full transition-all"
                >
                  Select & Book Room
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
