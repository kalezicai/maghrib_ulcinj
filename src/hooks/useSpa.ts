"use client";

import { useState } from "react";
import type { SpaReservationType, SpaFormData } from "@/lib/types";

export function useSpa(initialReservations: SpaReservationType[]) {
  const [reservations, setReservations] = useState<SpaReservationType[]>(initialReservations);
  const [form, setForm] = useState<SpaFormData>({
    guestName: "",
    roomNumber: "",
    reservationDate: "2026-09-25",
    timeSlot: "09:00 - 10:00",
    spaArea: "Full Spa (Private Use)"
  });
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const isSlotBooked = (dateStr: string, slotStr: string) =>
    reservations.some(
      (r) => r.reservationDate === dateStr && r.timeSlot.split(" (")[0] === slotStr.split(" (")[0]
    );

  const getSlotBookedBy = (dateStr: string, slotStr: string) => {
    const found = reservations.find(
      (r) => r.reservationDate === dateStr && r.timeSlot.split(" (")[0] === slotStr.split(" (")[0]
    );
    return found?.guestName ?? "";
  };

  const addReservation = (res: SpaReservationType) => {
    setReservations((prev) => [res, ...prev]);
  };

  return {
    reservations,
    form,
    setForm,
    success,
    setSuccess,
    error,
    setError,
    isSlotBooked,
    getSlotBookedBy,
    addReservation,
  };
}
