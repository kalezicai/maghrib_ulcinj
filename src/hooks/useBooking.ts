"use client";

import { useState } from "react";
import type { BookingFormData, SpaReservationType } from "@/lib/types";

export function useBooking() {
  const [form, setForm] = useState<BookingFormData>({
    guestName: "",
    guestEmail: "",
    guestPhone: "",
    checkIn: "2026-09-25",
    checkOut: "2026-09-26",
    guestsCount: 2,
    roomType: "deluxe_sea_view",
    privateSpaRequested: false,
    spaSlotPreference: "09:00 - 10:00",
    specialRequests: "",
  });
  const [success, setSuccess] = useState<any>(null);
  const [error, setError] = useState("");

  const createSpaReservationFromBooking = (): SpaReservationType => ({
    guestName: form.guestName,
    roomNumber: "TBD (On Arrival)",
    reservationDate: form.checkIn,
    timeSlot: form.spaSlotPreference,
    spaArea: "Full Spa (Private Use)",
  });

  const reset = () => {
    setSuccess(null);
    setError("");
  };

  return {
    form,
    setForm,
    success,
    setSuccess,
    error,
    setError,
    createSpaReservationFromBooking,
    reset,
  };
}
