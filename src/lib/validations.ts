import { z } from "zod";

export const BookingSchema = z.object({
  guestName: z.string().min(2, "Name must be at least 2 characters").max(100),
  guestEmail: z.string().email("Invalid email address"),
  guestPhone: z.string().min(5, "Phone number is required").max(30),
  checkIn: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid check-in date"),
  checkOut: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid check-out date"),
  guestsCount: z.number().int().min(1).max(10),
  roomType: z.enum(["deluxe_sea_view", "junior_family", "premium_king", "superior_triple"]),
  privateSpaRequested: z.boolean(),
  spaSlotPreference: z.string().optional(),
  specialRequests: z.string().max(500).optional(),
});

export const ReviewSchema = z.object({
  authorName: z.string().min(2, "Name must be at least 2 characters").max(60),
  rating: z.number().int().min(1).max(5),
  tripType: z.enum(["Vacation", "Family", "Couple", "Friends", "Business"]),
  text: z.string().min(10, "Review must be at least 10 characters").max(2000),
  roomsRating: z.number().int().min(1).max(5).optional(),
  serviceRating: z.number().int().min(1).max(5).optional(),
  locationRating: z.number().int().min(1).max(5).optional(),
});

export const InquirySchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters").max(2000),
});

export const SpaReservationSchema = z.object({
  guestName: z.string().min(2, "Name must be at least 2 characters").max(100),
  roomNumber: z.string().max(50).optional(),
  reservationDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date"),
  timeSlot: z.string().min(1, "Time slot is required"),
  spaArea: z.string().min(1, "Spa area is required"),
});
