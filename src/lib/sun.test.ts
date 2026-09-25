import { describe, it, expect } from "vitest";
import { sunTimes, formatUlcinjTime, ULCINJ } from "./sun";

describe("sunTimes (Ulcinj solar math)", () => {
  it("computes a sunset after sunrise on a summer day", () => {
    const times = sunTimes(new Date("2026-07-15T12:00:00Z"), ULCINJ.lat, ULCINJ.lng);
    expect(times.sunset.getTime()).toBeGreaterThan(times.sunrise.getTime());
  });

  it("midday is daylight and not set", () => {
    const noon = new Date("2026-07-15T11:00:00Z");
    const times = sunTimes(noon);
    expect(times.isDaylight).toBe(true);
    expect(times.hasSet).toBe(false);
  });

  it("late night counts as hasSet", () => {
    const night = new Date("2026-07-15T22:00:00Z");
    const times = sunTimes(night);
    expect(times.hasSet).toBe(true);
  });

  it("progress stays within 0..1", () => {
    for (let hour = 0; hour < 24; hour++) {
      const times = sunTimes(new Date(2026, 6, 15, hour, 0, 0));
      expect(times.progress).toBeGreaterThanOrEqual(0);
      expect(times.progress).toBeLessThanOrEqual(1);
    }
  });
});

describe("formatUlcinjTime", () => {
  it("formats in Europe/Podgorica 24h time", () => {
    const text = formatUlcinjTime(new Date("2026-07-15T19:30:00Z"));
    expect(text).toMatch(/^\d{2}:\d{2}$/);
  });
});
