"use client";

import { useState, useMemo } from "react";
import type { ReviewType, ReviewFormData } from "@/lib/types";

export function useReviews(initialReviews: ReviewType[]) {
  const [reviews, setReviews] = useState<ReviewType[]>(initialReviews);
  const [searchQuery, setSearchQuery] = useState("");
  const [ratingFilter, setRatingFilter] = useState<number | null>(null);
  const [tripTypeFilter, setTripTypeFilter] = useState("All");
  const [form, setForm] = useState<ReviewFormData>({
    authorName: "",
    rating: 5,
    tripType: "Vacation",
    text: "",
    roomsRating: 5,
    serviceRating: 5,
    locationRating: 5,
  });
  const [modalOpen, setModalOpen] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const filteredReviews = useMemo(
    () =>
      reviews.filter((review) => {
        const matchesSearch =
          review.authorName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          review.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (review.tripType && review.tripType.toLowerCase().includes(searchQuery.toLowerCase()));
        const matchesRating = ratingFilter ? review.rating === ratingFilter : true;
        const matchesTripType = tripTypeFilter === "All" ? true : review.tripType === tripTypeFilter;
        return matchesSearch && matchesRating && matchesTripType;
      }),
    [reviews, searchQuery, ratingFilter, tripTypeFilter]
  );

  const averageRating = reviews.length
    ? (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1)
    : "0.0";
  const averageRooms = reviews.length
    ? (reviews.reduce((acc, r) => acc + (r.roomsRating || 5), 0) / reviews.length).toFixed(1)
    : "5.0";
  const averageService = reviews.length
    ? (reviews.reduce((acc, r) => acc + (r.serviceRating || 5), 0) / reviews.length).toFixed(1)
    : "5.0";
  const averageLocation = reviews.length
    ? (reviews.reduce((acc, r) => acc + (r.locationRating || 5), 0) / reviews.length).toFixed(1)
    : "5.0";

  const addReview = (review: ReviewType) => {
    setReviews((prev) => [review, ...prev]);
  };

  const resetForm = () => {
    setForm({ authorName: "", rating: 5, tripType: "Vacation", text: "", roomsRating: 5, serviceRating: 5, locationRating: 5 });
  };

  return {
    reviews,
    filteredReviews,
    searchQuery,
    setSearchQuery,
    ratingFilter,
    setRatingFilter,
    tripTypeFilter,
    setTripTypeFilter,
    form,
    setForm,
    modalOpen,
    setModalOpen,
    success,
    setSuccess,
    error,
    setError,
    averageRating,
    averageRooms,
    averageService,
    averageLocation,
    addReview,
    resetForm,
  };
}
