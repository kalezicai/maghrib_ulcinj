import { BookingSchema, ReviewSchema, InquirySchema, SpaReservationSchema } from "@/lib/validations";
import type { BookingFormData, ReviewFormData, SpaFormData } from "@/lib/types";

export function submitBookingRequest(data: BookingFormData): { success: true; message: string } | { success: false; message: string } {
  const parsed = BookingSchema.safeParse(data);
  if (!parsed.success) {
    return { success: false, message: parsed.error.issues[0]?.message || "Invalid booking data" };
  }
  return { success: true, message: "Booking request received! Our team will confirm your reservation shortly at the provided contact details." };
}

export function submitReview(data: ReviewFormData) {
  const parsed = ReviewSchema.safeParse(data);
  if (!parsed.success) {
    return { success: false, message: parsed.error.issues[0]?.message || "Invalid review data" };
  }
  return { success: true, message: "Thank you for your review! Your feedback helps other families discover our halal haven." };
}

export function submitInquiry(data: { name: string; email: string; subject: string; message: string }) {
  const parsed = InquirySchema.safeParse(data);
  if (!parsed.success) {
    return { success: false, message: parsed.error.issues[0]?.message || "Invalid inquiry data" };
  }
  return { success: true, message: "Your inquiry has been sent! Our guest relations team will respond within 24 hours Insha'Allah." };
}

export function reserveSpaSlot(data: SpaFormData) {
  const parsed = SpaReservationSchema.safeParse(data);
  if (!parsed.success) {
    return { success: false, message: parsed.error.issues[0]?.message || "Invalid spa reservation data" };
  }
  return { success: true, message: `Your private spa session on ${data.reservationDate} at ${data.timeSlot} is reserved. Enjoy your exclusive wellness time!` };
}
