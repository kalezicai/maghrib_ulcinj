/**
 * /experience page data — lives OUTSIDE the client component so the server
 * page can import plain data without crossing the RSC boundary with a
 * React component inside (pure text only).
 */

import type { LucideIcon } from "lucide-react";

export interface Pillar {
  iconKey: "utensils" | "star" | "moon" | "waves" | "sun" | "clock";
  title: string;
  text: string;
}

export const pillars: Pillar[] = [
  {
    iconKey: "utensils",
    title: "100% Halal Gastronomy",
    text: "Every ingredient of our breakfast buffet is halal certified — fresh pastries, traditional roasted peppers, seasonal fruits, gourmet egg dishes. Nothing on the table leaves room for doubt.",
  },
  {
    iconKey: "star",
    title: "Alcohol-Free Sanctuary",
    text: "No alcohol is served, consumed or invited anywhere on the premises. In its place, soft nasheed instrumentals, an immaculate aroma in the lobby, and a calm you can feel within minutes of arriving.",
  },
  {
    iconKey: "moon",
    title: "Onsite Masjid & Qibla",
    text: "A dedicated, air-conditioned Masjid with wudu facilities sits at the heart of the hotel. Every room carries a clear Qibla direction marker, so the five daily prayers fit the day rather than interrupting it.",
  },
  {
    iconKey: "waves",
    title: "Private Family Wellness",
    text: "The indoor pool, whirlpool and cedar sauna operate with structured hours — private family bookings, women-and-children hours, and men-only hours — honouring the modesty of every guest.",
  },
  {
    iconKey: "sun",
    title: "Privacy by Architecture",
    text: "Balconies are hidden from neighbouring sightlines, sunbathing or sipping coffee stays private, and our hillside location keeps the bustle of the town pleasantly below you.",
  },
  {
    iconKey: "clock",
    title: "24-Hour Sea-View Terrace",
    text: "Our spacious, sun-drenched dining terrace is open around the clock for siestas, sunrise coffees, and family conversations that outlast the sea breeze.",
  },
];

export const experienceFaqs = [
  {
    question: "Is the breakfast at Hotel Maghrib really 100% halal?",
    answer:
      "Yes. Every ingredient in the breakfast buffet is 100% halal certified, and the kitchen is entirely alcohol-free. Reviewers single out the roasted peppers, fresh pastries and the abundance of the spread.",
  },
  {
    question: "Is there a prayer room and Qibla direction in the rooms?",
    answer:
      "Yes. Hotel Maghrib has a dedicated air-conditioned Masjid with wudu facilities, and clear Qibla direction markers in every guest room. During Ramadan, Masjid hours extend for Taraweeh prayers.",
  },
  {
    question: "Is Hotel Maghrib really alcohol-free?",
    answer:
      "Completely. No alcohol is served, stored, or consumed anywhere on the premises, and the minibars are stocked only with halal refreshments.",
  },
  {
    question: "Can non-Muslim families stay at Hotel Maghrib?",
    answer:
      "Yes — everyone is welcome and many international guests return for the quiet, the views and the breakfast. Guests are simply asked to respect the alcohol-free, modest family environment.",
  },
  {
    question: "Is there a dress code?",
    answer:
      "The hotel maintains a modest, family-friendly atmosphere. Conservative dress is appreciated in shared spaces; swimwear belongs in the private spa and beach areas.",
  },
  {
    question: "What languages does the reception speak?",
    answer:
      "The team welcomes guests in English, Albanian, Bosnian, German, Turkish and Arabic — you will hear 'Mirë se vini' and 'Ahlan wa sahlan' in the same welcome.",
  },
];
