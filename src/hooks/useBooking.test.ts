import { describe, it, expect } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useBooking } from "./useBooking";

describe("useBooking", () => {
  it("initializes with default form state", () => {
    const { result } = renderHook(() => useBooking());
    expect(result.current.form.guestName).toBe("");
    expect(result.current.form.guestEmail).toBe("");
    expect(result.current.form.roomType).toBe("deluxe_sea_view");
    expect(result.current.form.guestsCount).toBe(2);
  });

  it("updates form field", () => {
    const { result } = renderHook(() => useBooking());
    act(() => result.current.setForm((prev) => ({ ...prev, guestName: "John" })));
    expect(result.current.form.guestName).toBe("John");
  });

  it("creates spa reservation from booking", () => {
    const { result } = renderHook(() => useBooking());
    act(() =>
      result.current.setForm((prev) => ({
        ...prev,
        guestName: "Amina",
        checkIn: "2026-07-15",
        spaSlotPreference: "10:00 - 11:00",
      }))
    );
    const spaRes = result.current.createSpaReservationFromBooking();
    expect(spaRes.guestName).toBe("Amina");
    expect(spaRes.reservationDate).toBe("2026-07-15");
    expect(spaRes.timeSlot).toBe("10:00 - 11:00");
    expect(spaRes.spaArea).toBe("Full Spa (Private Use)");
  });

  it("sets success state", () => {
    const { result } = renderHook(() => useBooking());
    act(() => result.current.setSuccess({ id: 1 }));
    expect(result.current.success).toEqual({ id: 1 });
  });

  it("sets error state", () => {
    const { result } = renderHook(() => useBooking());
    act(() => result.current.setError("Something went wrong"));
    expect(result.current.error).toBe("Something went wrong");
  });

  it("resets success and error", () => {
    const { result } = renderHook(() => useBooking());
    act(() => {
      result.current.setSuccess({ id: 1 });
      result.current.setError("Error");
    });
    act(() => result.current.reset());
    expect(result.current.success).toBeNull();
    expect(result.current.error).toBe("");
  });
});
