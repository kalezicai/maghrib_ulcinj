import { describe, it, expect } from "vitest";
import { ROOMS, SPA_SLOTS, NAP } from "./constants";

describe("ROOMS", () => {
  it("has 4 room types", () => {
    expect(ROOMS).toHaveLength(4);
  });

  it("each room has required fields", () => {
    for (const room of ROOMS) {
      expect(room.id).toBeTruthy();
      expect(room.name).toBeTruthy();
      expect(room.price).toBeGreaterThan(0);
      expect(room.size).toBeTruthy();
      expect(room.capacity).toBeTruthy();
      expect(room.bed).toBeTruthy();
      expect(room.image).toMatch(/^https?:\/\//);
      expect(room.amenities.length).toBeGreaterThan(0);
      expect(room.highlights.length).toBeGreaterThan(0);
    }
  });

  it("each room has unique id", () => {
    const ids = ROOMS.map((r) => r.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("prices are in expected range", () => {
    for (const room of ROOMS) {
      expect(room.price).toBeGreaterThanOrEqual(100);
      expect(room.price).toBeLessThanOrEqual(500);
    }
  });
});

describe("SPA_SLOTS", () => {
  it("has defined slots", () => {
    expect(SPA_SLOTS.length).toBeGreaterThan(0);
  });

  it("each slot is a non-empty string", () => {
    for (const slot of SPA_SLOTS) {
      expect(slot.length).toBeGreaterThan(0);
    }
  });

  it("includes women & kids only slot", () => {
    expect(SPA_SLOTS.some((s) => s.toLowerCase().includes("women & kids"))).toBe(true);
  });

  it("includes men only slot", () => {
    expect(SPA_SLOTS.some((s) => s.toLowerCase().includes("men only"))).toBe(true);
  });
});

describe("NAP", () => {
  it("has all required contact fields", () => {
    expect(NAP.name).toBe("Hotel Maghrib");
    expect(NAP.phone).toMatch(/^\+382/);
    expect(NAP.email).toContain("@");
  });

  it("has valid coordinates", () => {
    expect(NAP.coordinates.lat).toBeGreaterThan(40);
    expect(NAP.coordinates.lat).toBeLessThan(43);
    expect(NAP.coordinates.lng).toBeGreaterThan(18);
    expect(NAP.coordinates.lng).toBeLessThan(20);
  });

  it("has check-in and check-out times", () => {
    expect(NAP.checkIn).toBeTruthy();
    expect(NAP.checkOut).toBeTruthy();
  });
});
