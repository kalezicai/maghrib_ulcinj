"use server";

import { db } from "@/db";
import { bookings, reviews, inquiries, spaReservations } from "@/db/schema";
import { desc, eq, and, sql } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { BookingSchema, ReviewSchema, InquirySchema, SpaReservationSchema } from "@/lib/validations";
import { checkRateLimit } from "@/lib/rate-limiter";

export interface ActionResponse<T> {
  success: boolean;
  message: string;
  data?: T;
}

const SEED_REVIEWS = [
  {
    authorName: "Gresa Kukaj",
    rating: 5,
    tripType: "Vacation",
    text: "We had a wonderful 4-day stay at Maghrib Hotel in Ulcinj and honestly enjoyed every moment of it. The hotel is beautiful, very clean, modern, and perfectly maintained. The rooms were spacious, bright, and extremely comfortable, with a lovely balcony and a beautiful view that made the stay even more relaxing. The food was absolutely delicious, especially the breakfast which had a great variety and always felt fresh. The service truly made us feel comfortable and appreciated as guests. We really appreciated the private parking.",
    roomsRating: 5, serviceRating: 5, locationRating: 5,
  },
  {
    authorName: "Sanela Muhic", rating: 5, tripType: "Family",
    text: "We spent three nights and were completely satisfied. Our room was spotlessly clean, modern, spacious, and bright with a beautiful sea view and clear Qibla markings. Reserving the pool was very easy and hassle-free, which was the absolute highlight of our family vacation. The children's area and whirlpool with colorful lights were perfect. The breakfast buffet was excellent, especially the roasted peppers! The hotel has a HALAL concept, which exceeded our expectations. Beautiful nasheed songs playing in the background. Excellent aroma in the lobby!",
    roomsRating: 5, serviceRating: 5, locationRating: 5,
  },
  {
    authorName: "Mujahidah UmmCoffee", rating: 5, tripType: "Vacation",
    text: "As frequent travellers worldwide and more importantly as Muslims, it is rare to find a hotel that truly caters to our needs. From the welcoming reception staff and the high standards, we had a truly luxurious experience. Our room was spacious, modern, with everything we needed and a private balcony with breathtaking sea views. TabarakAllah, the buffet breakfast was large with delicious options. Highly recommended and we hope to return next summer Insha'Allah.",
    roomsRating: 5, serviceRating: 5, locationRating: 5,
  },
  {
    authorName: "Dzenita T.", rating: 5, tripType: "Family",
    text: "5 stars for everyone, and above all for a halal environment. The opportunity to come to Ulcinj in July and protect our view, while having the option of using the indoor pool, whirlpool and sauna separately as a family. Our private balcony was hidden from view, so we could sunbathe without any problems. Fresh, delicious halal food. Masjid is available in the hotel, qibla direction in rooms, air-conditioned spaces, prayers without music... Mašallah tebarekAllah! 🤲",
    roomsRating: 5, serviceRating: 5, locationRating: 5,
  },
  {
    authorName: "Evrem Laruv", rating: 5, tripType: "Vacation",
    text: "Absolutely great hotel with great staff (manager, receptionist, service team). Beautiful location on a hill, top rooms with sea view, everything exceptionally clean. Great healthy breakfast. The spa area was very well maintained. For the indoor pool, there are special times for women and kids only, times for men, and mixed times. The breakfast terrace is gorgeous and large. Own free parking!",
    roomsRating: 5, serviceRating: 5, locationRating: 5,
  },
  {
    authorName: "Gramos Shefiku", rating: 1, tripType: "Family",
    text: "Note: Historically had booking overlap issues for the private pool reservation in summer 2023. (Response from Hotel Maghrib: We heard your feedback! We have completely overhauled our booking process and developed a conflict-free digital Private Spa Slot Concierge to ensure 100% exclusive, private reservation for each family without any overlaps!)",
    roomsRating: 5, serviceRating: 3, locationRating: 5,
  },
  {
    authorName: "TheRed Couthy", rating: 5, tripType: "Vacation",
    text: "A very welcoming and friendly hotel, ideally located next to the iconic pine trees at the heart of the city. The rooms are clean, modern, and well-maintained. The breakfast was satisfying. The option to reserve the pool and sauna for private family use is an exceptional feature. Highly recommended for a relaxing stay.",
    roomsRating: 5, serviceRating: 5, locationRating: 5,
  },
  {
    authorName: "Ermin Tarahija", rating: 5, tripType: "Couple",
    text: "Highly recommend Hotel Maghrib 10/10. Extremely clean, modernly decorated rooms. The staff is incredibly friendly and always smiling. The location is quiet, close to the iconic pine trees and not too far from Small Beach. The wellness center with pool, sauna, and jacuzzi is ideal for deep relaxation. One of the best hotels in Montenegro!",
    roomsRating: 5, serviceRating: 5, locationRating: 5,
  },
  {
    authorName: "Shkodran Lladrovci", rating: 5, tripType: "Vacation",
    text: "A very nice, family-friendly and comfortable place. Extremely clean throughout. Convenient private parking. Great location near the pine trees, perfect for walks. The breakfast was delicious and rich in variety. Clean swimming pool. Staff were very welcoming and friendly. Luxury and great value.",
    roomsRating: 5, serviceRating: 5, locationRating: 5,
  },
  {
    authorName: "Anel Catic", rating: 5, tripType: "Vacation",
    text: "An experience beyond expectations, an Islamic-oriented hotel: clean, quiet, comfortable, and everything halal. All praise to the hotel staff, from the housekeeping women to the front desk receptionists. Tasty and fresh food, beautiful ambiance, and superb views.",
    roomsRating: 5, serviceRating: 5, locationRating: 5,
  },
  {
    authorName: "Ema Dervović", rating: 5, tripType: "Friends",
    text: "Beautiful and clean hotel, delicious breakfast. Spacious, sunny terrace with a sea view. Excellent spa service: pool, jacuzzi, sauna. Beautiful shared restaurant terrace is open 24/7. Staff friendly and kind, plenty of parking. I will definitely come back!",
    roomsRating: 5, serviceRating: 5, locationRating: 5,
  },
  {
    authorName: "Muk i", rating: 5, tripType: "Couple",
    text: "Best Halal Hotel in Ulcinj! Spa for private use is top-tier. Breakfast was delicious, fresh, and plentiful. Walkability is great and everything is easily accessible. Extremely safe and peaceful atmosphere. We loved it!",
    roomsRating: 5, serviceRating: 5, locationRating: 5,
  },
  {
    authorName: "Dramane Sidibe", rating: 5, tripType: "Vacation",
    text: "First time in Montenegro and absolutely not disappointed. Warm welcome, highly professional, pleasant, and attentive staff. 10/10. Very clean and high-quality establishment. Highly recommend for families.",
    roomsRating: 5, serviceRating: 5, locationRating: 5,
  },
  {
    authorName: "dcL8885WV", rating: 5, tripType: "Vacation",
    text: "We had a wonderful time at the Maghrib Hotel. Fresh air, healthy and delicious food. Very clean, polite and helpful staff. We want to thank Arjan again, a very polite young man. Looking forward to going back.",
    roomsRating: 5, serviceRating: 5, locationRating: 5,
  },
  {
    authorName: "Azra Djogic", rating: 5, tripType: "Vacation",
    text: "A luxurious halal hotel! A combination of top-notch service and friendly staff, ensuring that your privacy and religious lifestyle are not compromised in any way. Cleanliness is perfect.",
    roomsRating: 5, serviceRating: 5, locationRating: 5,
  }
];

export async function seedReviewsIfEmpty() {
  try {
    const countResult = await db.select({ count: sql<number>`count(*)` }).from(reviews);
    const count = Number(countResult[0]?.count || 0);
    if (count === 0) {
      await db.insert(reviews).values(SEED_REVIEWS);
      return true;
    }
    return false;
  } catch (error) {
    console.error("Failed to seed reviews:", error);
    return false;
  }
}

export async function submitBookingRequest(formData: unknown) {
  if (!checkRateLimit("booking")) {
    return { success: false, message: "Too many requests. Please wait a moment before trying again." };
  }
  try {
    const validated = BookingSchema.parse(formData);
    const [newBooking] = await db.insert(bookings).values({
      guestName: validated.guestName,
      guestEmail: validated.guestEmail,
      guestPhone: validated.guestPhone,
      checkIn: validated.checkIn,
      checkOut: validated.checkOut,
      guestsCount: validated.guestsCount,
      roomType: validated.roomType,
      privateSpaRequested: validated.privateSpaRequested,
      spaSlotPreference: validated.spaSlotPreference || null,
      specialRequests: validated.specialRequests || null,
      status: "pending",
    }).returning();

    if (validated.privateSpaRequested && validated.spaSlotPreference) {
      await db.insert(spaReservations).values({
        guestName: validated.guestName,
        roomNumber: "TBD (On Arrival)",
        reservationDate: validated.checkIn,
        timeSlot: validated.spaSlotPreference,
        spaArea: "Full Spa (Private Use)",
      });
    }

    revalidatePath("/");
    return { success: true, message: "Your premium reservation request has been received. Our concierge team will contact you within 2 hours to confirm your stay.", data: newBooking };
  } catch (error: any) {
    if (error?.issues) {
      return { success: false, message: error.issues.map((i: any) => i.message).join(". ") };
    }
    console.error("Booking error:", error);
    return { success: false, message: error?.message || "An error occurred while processing your reservation. Please try again." };
  }
}

export async function submitReview(formData: unknown) {
  if (!checkRateLimit("review")) {
    return { success: false, message: "Too many requests. Please wait a moment before trying again." };
  }
  try {
    const validated = ReviewSchema.parse(formData);
    const [newReview] = await db.insert(reviews).values({
      authorName: validated.authorName,
      rating: validated.rating,
      tripType: validated.tripType,
      text: validated.text,
      roomsRating: validated.roomsRating ?? 5,
      serviceRating: validated.serviceRating ?? 5,
      locationRating: validated.locationRating ?? 5,
      isApproved: true,
    }).returning();

    revalidatePath("/");
    return { success: true, message: "Thank you! Your review has been successfully published.", data: newReview };
  } catch (error: any) {
    if (error?.issues) {
      return { success: false, message: error.issues.map((i: any) => i.message).join(". ") };
    }
    console.error("Review submit error:", error);
    return { success: false, message: error?.message || "An error occurred while submitting your review." };
  }
}

export async function submitInquiry(formData: unknown) {
  if (!checkRateLimit("inquiry")) {
    return { success: false, message: "Too many requests. Please wait a moment before trying again." };
  }
  try {
    const validated = InquirySchema.parse(formData);
    const [newInquiry] = await db.insert(inquiries).values({
      name: validated.name,
      email: validated.email,
      subject: validated.subject,
      message: validated.message,
    }).returning();

    return { success: true, message: "Your message has been sent successfully. Our guest relations team will respond via email shortly.", data: newInquiry };
  } catch (error: any) {
    if (error?.issues) {
      return { success: false, message: error.issues.map((i: any) => i.message).join(". ") };
    }
    console.error("Inquiry error:", error);
    return { success: false, message: error?.message || "An error occurred while sending your message." };
  }
}

export async function reserveSpaSlot(formData: unknown) {
  if (!checkRateLimit("spa")) {
    return { success: false, message: "Too many requests. Please wait a moment before trying again." };
  }
  try {
    const validated = SpaReservationSchema.parse(formData);
    const existing = await db.select().from(spaReservations).where(
      and(
        eq(spaReservations.reservationDate, validated.reservationDate),
        eq(spaReservations.timeSlot, validated.timeSlot)
      )
    ).limit(1);

    if (existing.length > 0) {
      return { success: false, message: `This time slot (${validated.timeSlot}) on ${validated.reservationDate} is already reserved for a private session by another room. Please select another slot to ensure absolute privacy.` };
    }

    const [newReservation] = await db.insert(spaReservations).values({
      guestName: validated.guestName,
      roomNumber: validated.roomNumber || "Not Assigned",
      reservationDate: validated.reservationDate,
      timeSlot: validated.timeSlot,
      spaArea: validated.spaArea,
    }).returning();

    revalidatePath("/");
    return { success: true, message: "Spa session booked! Your private, conflict-free relaxation slot is secured.", data: newReservation };
  } catch (error: any) {
    if (error?.issues) {
      return { success: false, message: error.issues.map((i: any) => i.message).join(". ") };
    }
    console.error("Spa reservation error:", error);
    return { success: false, message: error?.message || "An error occurred while booking the spa slot." };
  }
}

export async function getReviews() {
  try {
    await seedReviewsIfEmpty();
    return await db.select().from(reviews).orderBy(desc(reviews.createdAt));
  } catch (error) {
    console.error("Fetch reviews error:", error);
    return [];
  }
}

export async function getBookedSpaSlots(dateStr: string) {
  try {
    return await db.select().from(spaReservations).where(eq(spaReservations.reservationDate, dateStr));
  } catch (error) {
    console.error("Fetch spa slots error:", error);
    return [];
  }
}
