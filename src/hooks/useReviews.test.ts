import { describe, it, expect } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useReviews } from "./useReviews";
import type { ReviewType } from "@/lib/types";

const mockReviews: ReviewType[] = [
  { id: 1, authorName: "Sanela M.", rating: 5, tripType: "Family", text: "Great halal hotel", roomsRating: 5, serviceRating: 5, locationRating: 5, createdAt: new Date("2025-07-01") },
  { id: 2, authorName: "Ermin T.", rating: 5, tripType: "Couple", text: "Amazing sea view", roomsRating: 5, serviceRating: 4, locationRating: 5, createdAt: new Date("2025-06-15") },
  { id: 3, authorName: "Gresa K.", rating: 4, tripType: "Vacation", text: "Very clean and comfortable", roomsRating: 4, serviceRating: 5, locationRating: 4, createdAt: new Date("2025-05-20") },
];

describe("useReviews", () => {
  it("initializes with provided reviews", () => {
    const { result } = renderHook(() => useReviews(mockReviews));
    expect(result.current.reviews).toHaveLength(3);
  });

  it("filters by search query", () => {
    const { result } = renderHook(() => useReviews(mockReviews));
    act(() => result.current.setSearchQuery("Sanela"));
    expect(result.current.filteredReviews).toHaveLength(1);
    expect(result.current.filteredReviews[0].authorName).toBe("Sanela M.");
  });

  it("filters by rating", () => {
    const { result } = renderHook(() => useReviews(mockReviews));
    act(() => result.current.setRatingFilter(4));
    expect(result.current.filteredReviews).toHaveLength(1);
    expect(result.current.filteredReviews[0].rating).toBe(4);
  });

  it("filters by trip type", () => {
    const { result } = renderHook(() => useReviews(mockReviews));
    act(() => result.current.setTripTypeFilter("Family"));
    expect(result.current.filteredReviews).toHaveLength(1);
    expect(result.current.filteredReviews[0].tripType).toBe("Family");
  });

  it("returns all reviews when no filters active", () => {
    const { result } = renderHook(() => useReviews(mockReviews));
    expect(result.current.filteredReviews).toHaveLength(3);
  });

  it("computes average rating correctly", () => {
    const { result } = renderHook(() => useReviews(mockReviews));
    expect(result.current.averageRating).toBe("4.7");
  });

  it("computes average service rating", () => {
    const { result } = renderHook(() => useReviews(mockReviews));
    expect(result.current.averageService).toBe("4.7");
  });

  it("adds a new review to the list", () => {
    const { result } = renderHook(() => useReviews(mockReviews));
    const newReview: ReviewType = {
      id: 4, authorName: "New Guest", rating: 5, tripType: "Family",
      text: "Wonderful stay", roomsRating: 5, serviceRating: 5, locationRating: 5,
      createdAt: new Date(),
    };
    act(() => result.current.addReview(newReview));
    expect(result.current.reviews).toHaveLength(4);
    expect(result.current.reviews[0].authorName).toBe("New Guest");
  });

  it("resets form to defaults", () => {
    const { result } = renderHook(() => useReviews(mockReviews));
    act(() => result.current.setForm((prev) => ({ ...prev, authorName: "Test" })));
    act(() => result.current.resetForm());
    expect(result.current.form.authorName).toBe("");
    expect(result.current.form.rating).toBe(5);
  });

  it("handles empty reviews list", () => {
    const { result } = renderHook(() => useReviews([]));
    expect(result.current.averageRating).toBe("0.0");
    expect(result.current.averageRooms).toBe("5.0");
    expect(result.current.filteredReviews).toHaveLength(0);
  });
});
