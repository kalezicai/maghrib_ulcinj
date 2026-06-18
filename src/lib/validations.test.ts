import { describe, it, expect } from "vitest";
import { BookingSchema, ReviewSchema, InquirySchema, SpaReservationSchema } from "./validations";

describe("BookingSchema", () => {
  const validBooking = {
    guestName: "John Doe",
    guestEmail: "john@example.com",
    guestPhone: "+382 68 123 456",
    checkIn: "2026-09-25",
    checkOut: "2026-09-27",
    guestsCount: 2,
    roomType: "deluxe_sea_view" as const,
    privateSpaRequested: false,
  };

  it("accepts valid booking", () => {
    expect(BookingSchema.parse(validBooking)).toMatchObject(validBooking);
  });

  it("rejects short name", () => {
    expect(() => BookingSchema.parse({ ...validBooking, guestName: "J" })).toThrow();
  });

  it("rejects invalid email", () => {
    expect(() => BookingSchema.parse({ ...validBooking, guestEmail: "not-email" })).toThrow();
  });

  it("rejects invalid room type", () => {
    expect(() => BookingSchema.parse({ ...validBooking, roomType: "invalid" })).toThrow();
  });

  it("rejects guests count out of range", () => {
    expect(() => BookingSchema.parse({ ...validBooking, guestsCount: 0 })).toThrow();
    expect(() => BookingSchema.parse({ ...validBooking, guestsCount: 11 })).toThrow();
  });

  it("rejects invalid date format", () => {
    expect(() => BookingSchema.parse({ ...validBooking, checkIn: "25-09-2026" })).toThrow();
  });

  it("accepts optional spa preference", () => {
    const withSpa = { ...validBooking, privateSpaRequested: true, spaSlotPreference: "09:00 - 10:00" };
    expect(BookingSchema.parse(withSpa).spaSlotPreference).toBe("09:00 - 10:00");
  });

  it("rejects special requests over 500 chars", () => {
    const longRequests = "x".repeat(501);
    expect(() => BookingSchema.parse({ ...validBooking, specialRequests: longRequests })).toThrow();
  });
});

describe("ReviewSchema", () => {
  const validReview = {
    authorName: "Guest",
    rating: 5,
    tripType: "Vacation" as const,
    text: "Amazing halal hotel with great service and beautiful sea views.",
  };

  it("accepts valid review", () => {
    expect(ReviewSchema.parse(validReview)).toMatchObject(validReview);
  });

  it("rejects rating below 1", () => {
    expect(() => ReviewSchema.parse({ ...validReview, rating: 0 })).toThrow();
  });

  it("rejects rating above 5", () => {
    expect(() => ReviewSchema.parse({ ...validReview, rating: 6 })).toThrow();
  });

  it("rejects short review text", () => {
    expect(() => ReviewSchema.parse({ ...validReview, text: "Too short" })).toThrow();
  });

  it("rejects invalid trip type", () => {
    expect(() => ReviewSchema.parse({ ...validReview, tripType: "Solo" })).toThrow();
  });

  it("rejects empty author name", () => {
    expect(() => ReviewSchema.parse({ ...validReview, authorName: "" })).toThrow();
  });

  it("accepts optional rating fields", () => {
    const withRatings = { ...validReview, roomsRating: 4, serviceRating: 5, locationRating: 4 };
    expect(ReviewSchema.parse(withRatings).roomsRating).toBe(4);
  });

  it("rejects room rating out of range", () => {
    expect(() => ReviewSchema.parse({ ...validReview, roomsRating: 6 })).toThrow();
  });
});

describe("InquirySchema", () => {
  const validInquiry = {
    name: "Samir",
    email: "samir@example.com",
    subject: "Halal Diet Questions",
    message: "I would like to know more about your halal certification and breakfast options.",
  };

  it("accepts valid inquiry", () => {
    expect(InquirySchema.parse(validInquiry)).toMatchObject(validInquiry);
  });

  it("rejects short name", () => {
    expect(() => InquirySchema.parse({ ...validInquiry, name: "A" })).toThrow();
  });

  it("rejects invalid email", () => {
    expect(() => InquirySchema.parse({ ...validInquiry, email: "bad" })).toThrow();
  });

  it("rejects empty subject", () => {
    expect(() => InquirySchema.parse({ ...validInquiry, subject: "" })).toThrow();
  });

  it("rejects short message", () => {
    expect(() => InquirySchema.parse({ ...validInquiry, message: "Hi" })).toThrow();
  });
});

describe("SpaReservationSchema", () => {
  const validSpa = {
    guestName: "Amina H.",
    roomNumber: "208",
    reservationDate: "2026-09-25",
    timeSlot: "09:00 - 10:00",
    spaArea: "Full Spa (Private Use)",
  };

  it("accepts valid spa reservation", () => {
    expect(SpaReservationSchema.parse(validSpa)).toMatchObject(validSpa);
  });

  it("rejects invalid date", () => {
    expect(() => SpaReservationSchema.parse({ ...validSpa, reservationDate: "not-a-date" })).toThrow();
  });

  it("rejects empty time slot", () => {
    expect(() => SpaReservationSchema.parse({ ...validSpa, timeSlot: "" })).toThrow();
  });

  it("accepts optional room number", () => {
    const { roomNumber, ...withoutRoom } = validSpa;
    expect(SpaReservationSchema.parse(withoutRoom)).toBeDefined();
  });
});
