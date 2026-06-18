import { describe, it, expect, vi } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useNasheed } from "./useNasheed";

describe("useNasheed", () => {
  beforeEach(() => {
    vi.stubGlobal("AudioContext", class {
      currentTime = 0;
      state = "running";
      destination = {};
      createGain() {
        return {
          gain: { setValueAtTime: vi.fn(), setTargetAtTime: vi.fn() },
          connect: vi.fn(),
        };
      }
      createOscillator() {
        return {
          type: "",
          frequency: { setValueAtTime: vi.fn() },
          connect: vi.fn(),
          start: vi.fn(),
          stop: vi.fn(),
        };
      }
      close() {}
    });
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("starts with playing off", () => {
    const { result } = renderHook(() => useNasheed());
    expect(result.current.isPlaying).toBe(false);
  });

  it("toggles on", () => {
    const { result } = renderHook(() => useNasheed());
    act(() => result.current.toggle());
    expect(result.current.isPlaying).toBe(true);
  });

  it("toggles off", () => {
    const { result } = renderHook(() => useNasheed());
    act(() => result.current.toggle());
    expect(result.current.isPlaying).toBe(true);
    act(() => result.current.toggle());
    expect(result.current.isPlaying).toBe(false);
  });
});
