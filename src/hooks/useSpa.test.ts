import { describe, it, expect } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useSpa } from "./useSpa";
import type { SpaReservationType } from "@/lib/types";

const mockReservations: SpaReservationType[] = [
  { guestName: "Sanela", roomNumber: "201", reservationDate: "2026-07-15", timeSlot: "09:00 - 10:00", spaArea: "Full Spa (Private Use)" },
  { guestName: "Ermin", roomNumber: "305", reservationDate: "2026-07-15", timeSlot: "10:00 - 11:00", spaArea: "Pool Only" },
];

describe("useSpa", () => {
  it("initializes with provided reservations", () => {
    const { result } = renderHook(() => useSpa(mockReservations));
    expect(result.current.reservations).toHaveLength(2);
  });

  it("detects booked slot", () => {
    const { result } = renderHook(() => useSpa(mockReservations));
    expect(result.current.isSlotBooked("2026-07-15", "09:00 - 10:00")).toBe(true);
    expect(result.current.isSlotBooked("2026-07-15", "11:00 - 12:00")).toBe(false);
  });

  it("returns who booked a slot", () => {
    const { result } = renderHook(() => useSpa(mockReservations));
    expect(result.current.getSlotBookedBy("2026-07-15", "09:00 - 10:00")).toBe("Sanela");
    expect(result.current.getSlotBookedBy("2026-07-15", "11:00 - 12:00")).toBe("");
  });

  it("matches slot regardless of parenthetical suffix", () => {
    const { result } = renderHook(() => useSpa(mockReservations));
    expect(result.current.isSlotBooked("2026-07-15", "09:00 - 10:00 (Women Only)")).toBe(true);
  });

  it("adds a new reservation", () => {
    const { result } = renderHook(() => useSpa(mockReservations));
    const newRes: SpaReservationType = {
      guestName: "Amina", roomNumber: "102",
      reservationDate: "2026-07-16", timeSlot: "14:00 - 15:00", spaArea: "Sauna & Jacuzzi",
    };
    act(() => result.current.addReservation(newRes));
    expect(result.current.reservations).toHaveLength(3);
    expect(result.current.reservations[0].guestName).toBe("Amina");
  });

  it("handles empty reservations", () => {
    const { result } = renderHook(() => useSpa([]));
    expect(result.current.isSlotBooked("2026-07-15", "09:00 - 10:00")).toBe(false);
    expect(result.current.getSlotBookedBy("2026-07-15", "09:00 - 10:00")).toBe("");
  });
});
