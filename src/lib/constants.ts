import type { RoomType } from "./types";

export const ROOMS: RoomType[] = [
  {
    id: "deluxe_sea_view",
    name: "Deluxe Double Room with Sea View",
    price: 169,
    size: "38 m²",
    capacity: "2 Guests",
    bed: "1 King Bed (Premium Orthopedic)",
    image: "https://images.pexels.com/photos/7546281/pexels-photo-7546281.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    description: "A gorgeous, light-filled sanctuary featuring a panoramic private balcony looking out to the Adriatic Sea. Thoughtfully appointed with warm sand tones, clean lines, and a peaceful ambiance.",
    amenities: ["Private Balcony", "Sea View", "100% Halal Minibar", "Qibla Direction Marker", "Silent Mini-Fridge", "Rain Shower", "Espresso Machine", "In-room Safe"],
    highlights: ["Quiet", "Romantic", "Sea View", "High-Tech"]
  },
  {
    id: "junior_family",
    name: "Junior Family Suite (Spacious Comfort)",
    price: 229,
    size: "55 m²",
    capacity: "Up to 5 Guests",
    bed: "1 King Bed + 3 Single Beds",
    image: "https://images.pexels.com/photos/8082217/pexels-photo-8082217.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    description: "Perfect for families. A spacious layout featuring a hidden-from-view private balcony (ideal for sunbathing in total privacy).",
    amenities: ["Spacious Lounge", "Privacy Balcony", "Extra Storage", "Qibla Direction Marker", "Child-friendly design", "HALAL snacks", "2 Bathrooms", "Smart TV"],
    highlights: ["Kid-friendly", "Spacious", "Privacy-focused", "Great Value"]
  },
  {
    id: "premium_king",
    name: "Premium King Room with Balcony & Sea View",
    price: 189,
    size: "42 m²",
    capacity: "2 Guests",
    bed: "1 Ultra-Plush King Bed",
    image: "https://images.pexels.com/photos/7546638/pexels-photo-7546638.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    description: "Designed for couples seeking a romantic, quiet and luxury experience. Perched high on the hill next to the pine trees.",
    amenities: ["Sunset Sea View", "High-Tech Comforts", "Qibla Direction Marker", "Premium Organic Spa Toiletries", "Fresh Robes & Slippers", "Teatime Kettle", "Writing Desk"],
    highlights: ["Luxury", "Romantic", "Great View", "Quiet"]
  },
  {
    id: "superior_triple",
    name: "Superior Triple Room with Sea View",
    price: 209,
    size: "48 m²",
    capacity: "3 Guests",
    bed: "1 King Bed + 1 Single Bed",
    image: "https://images.pexels.com/photos/2725675/pexels-photo-2725675.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    description: "Bright and modern room offering a gorgeous view over the Adriatic and the iconic pine trees.",
    amenities: ["Panoramic Balcony", "Sea View", "100% Halal Concept", "Qibla Marker", "Silent Mini-Fridge", "Luxury Bathrobes", "High-speed Wi-Fi"],
    highlights: ["Great View", "Modern", "Quiet", "Clean"]
  }
];

export const SPA_SLOTS = [
  "08:00 - 09:00",
  "09:00 - 10:00",
  "10:00 - 11:00",
  "11:00 - 12:00 (Women & Kids Only)",
  "13:00 - 14:00",
  "14:00 - 15:00 (Men Only)",
  "15:00 - 16:00 (Women Only)",
  "16:00 - 17:00",
  "17:00 - 18:00 (Sunset Magic)",
  "19:00 - 20:00 (Family Private Use)",
  "20:00 - 21:00 (Family Private Use)"
];

export const NAP = {
  name: "Hotel Maghrib",
  address: "1 Kosovska, Ulcinj 85360, Montenegro",
  phone: "+382 68 007 720",
  email: "info@hotelmaghrib.me",
  coordinates: { lat: 41.9225977, lng: 19.2160999 },
  plusCode: "W6F8+2C Ulcinj",
  mapUrl: "https://www.google.com/maps/place/Hotel+Maghrib/@41.9226016,19.211229,17z",
  checkIn: "2:00 PM",
  checkOut: "11:00 AM"
} as const;
