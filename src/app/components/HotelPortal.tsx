"use client";

import { useState, useTransition, lazy, Suspense } from "react";
import { submitBookingRequest, submitReview, reserveSpaSlot } from "../actions";
import { useNasheed } from "@/hooks/useNasheed";
import { useReviews } from "@/hooks/useReviews";
import { useSpa } from "@/hooks/useSpa";
import { useBooking } from "@/hooks/useBooking";
import { Reveal } from "@/components/Reveal";
import { TopBar } from "@/components/sections/TopBar";
import { Header } from "@/components/sections/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { MetricsBar } from "@/components/sections/MetricsBar";
import { VisionSection } from "@/components/sections/VisionSection";
import { RoomsShowcase } from "@/components/sections/RoomsShowcase";
import { HalalConcept } from "@/components/sections/HalalConcept";

const SpaConcierge = lazy(() => import("@/components/sections/SpaConcierge").then((m) => ({ default: m.SpaConcierge })));
const ReviewsSection = lazy(() => import("@/components/sections/ReviewsSection").then((m) => ({ default: m.ReviewsSection })));
const ReviewModal = lazy(() => import("@/components/sections/ReviewModal").then((m) => ({ default: m.ReviewModal })));
const BookingSuite = lazy(() => import("@/components/sections/BookingSuite").then((m) => ({ default: m.BookingSuite })));
const LocationGuide = lazy(() => import("@/components/sections/LocationGuide").then((m) => ({ default: m.LocationGuide })));
const ContactForm = lazy(() => import("@/components/sections/ContactForm").then((m) => ({ default: m.ContactForm })));
const Footer = lazy(() => import("@/components/sections/Footer").then((m) => ({ default: m.Footer })));
import type { ReviewType, SpaReservationType } from "@/lib/types";

interface HotelPortalProps {
  initialReviews: ReviewType[];
  initialSpaReservations: SpaReservationType[];
}

export default function HotelPortal({ initialReviews, initialSpaReservations }: HotelPortalProps) {
  const [isPending, startTransition] = useTransition();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeRoomIndex, setActiveRoomIndex] = useState(0);

  const { isPlaying: nasheedPlaying, toggle: toggleNasheed } = useNasheed();
  const {
    filteredReviews, searchQuery, setSearchQuery,
    ratingFilter, setRatingFilter, tripTypeFilter, setTripTypeFilter,
    form: reviewForm, setForm: setReviewForm,
    modalOpen: reviewModalOpen, setModalOpen: setReviewModalOpen,
    success: reviewSuccess, setSuccess: setReviewSuccess,
    error: reviewError, setError: setReviewError,
    averageRating, averageRooms, averageService, averageLocation,
    addReview, resetForm
  } = useReviews(initialReviews);

  const spa = useSpa(initialSpaReservations);

  const booking = useBooking();

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    booking.setError("");
    booking.setSuccess(null);

    startTransition(async () => {
      const res = await submitBookingRequest(booking.form);
      if (res.success) {
        booking.setSuccess(res.message);
        if (booking.form.privateSpaRequested && booking.form.spaSlotPreference) {
          spa.addReservation(booking.createSpaReservationFromBooking());
        }
      } else {
        booking.setError(res.message);
      }
    });
  };

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setReviewError("");
    setReviewSuccess("");

    startTransition(async () => {
      const res = await submitReview(reviewForm);
      if (res.success) {
        setReviewSuccess(res.message);
        const newReviewObj: ReviewType = {
          authorName: reviewForm.authorName,
          rating: reviewForm.rating,
          tripType: reviewForm.tripType,
          text: reviewForm.text,
          roomsRating: reviewForm.roomsRating,
          serviceRating: reviewForm.serviceRating,
          locationRating: reviewForm.locationRating,
          createdAt: new Date().toISOString()
        };
        addReview(newReviewObj);
        resetForm();
        setTimeout(() => {
          setReviewModalOpen(false);
          setReviewSuccess("");
        }, 2000);
      } else {
        setReviewError(res.message);
      }
    });
  };

  const handleSpaSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    spa.setError("");
    spa.setSuccess("");

    startTransition(async () => {
      const res = await reserveSpaSlot(spa.form);
      if (res.success) {
        spa.setSuccess(res.message);
        const newSpaRes: SpaReservationType = {
          guestName: spa.form.guestName,
          roomNumber: spa.form.roomNumber || "Suite",
          reservationDate: spa.form.reservationDate,
          timeSlot: spa.form.timeSlot,
          spaArea: spa.form.spaArea
        };
        spa.addReservation(newSpaRes);
        spa.setForm((prev) => ({ ...prev, guestName: "" }));
      } else {
        spa.setError(res.message);
      }
    });
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-stone-800 font-sans selection:bg-stone-200 selection:text-stone-900 scroll-smooth">
      <TopBar />
      <Header
        nasheedPlaying={nasheedPlaying}
        toggleNasheed={toggleNasheed}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <HeroSection />
      <Reveal><MetricsBar /></Reveal>
      <Reveal delay={100}><VisionSection /></Reveal>
      <Reveal delay={150}>
        <RoomsShowcase
          activeRoomIndex={activeRoomIndex}
          setActiveRoomIndex={setActiveRoomIndex}
          setBookingForm={booking.setForm}
        />
      </Reveal>
      <Reveal delay={100}><HalalConcept /></Reveal>
      <Reveal delay={150}>
        <Suspense fallback={<div className="h-80 bg-stone-100 animate-pulse rounded-2xl" />}>
          <SpaConcierge
            form={spa.form}
            setForm={spa.setForm}
            handleSubmit={handleSpaSubmit}
            isPending={isPending}
            success={spa.success}
            error={spa.error}
            isSlotBooked={spa.isSlotBooked}
            getSlotBookedBy={spa.getSlotBookedBy}
          />
        </Suspense>
      </Reveal>
      <Reveal delay={100}>
        <Suspense fallback={<div className="h-96 bg-stone-100 animate-pulse rounded-2xl" />}>
          <ReviewsSection
            reviewsList={initialReviews}
            filteredReviews={filteredReviews}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            ratingFilter={ratingFilter}
            setRatingFilter={setRatingFilter}
            tripTypeFilter={tripTypeFilter}
            setTripTypeFilter={setTripTypeFilter}
            setReviewModalOpen={setReviewModalOpen}
            averageRating={averageRating}
            averageRooms={averageRooms}
            averageService={averageService}
            averageLocation={averageLocation}
          />
        </Suspense>
      </Reveal>
      {reviewModalOpen && (
        <Suspense fallback={null}>
          <ReviewModal
            form={reviewForm}
            setForm={setReviewForm}
            handleSubmit={handleReviewSubmit}
            isPending={isPending}
            success={reviewSuccess}
            error={reviewError}
            setModalOpen={setReviewModalOpen}
          />
        </Suspense>
      )}
      <Reveal delay={150}>
        <Suspense fallback={<div className="h-80 bg-stone-100 animate-pulse rounded-2xl" />}>
          <BookingSuite
            form={booking.form}
            setForm={booking.setForm}
            handleSubmit={handleBookingSubmit}
            isPending={isPending}
            success={booking.success}
            error={booking.error}
            setSuccess={booking.setSuccess}
          />
        </Suspense>
      </Reveal>
      <Reveal delay={100}>
        <Suspense fallback={<div className="h-64 bg-stone-100 animate-pulse rounded-2xl" />}>
          <LocationGuide />
        </Suspense>
      </Reveal>
      <Reveal delay={150}>
        <section className="py-24 bg-[#FAF9F6] border-b border-stone-200/50">
          <div className="max-w-2xl mx-auto px-6">
            <div className="bg-white rounded-3xl border border-stone-200/60 p-8 md:p-12 shadow-md text-center space-y-8">
              <div className="space-y-2">
                <span className="text-xs font-semibold tracking-[0.2em] text-[#C5A880] uppercase block">
                  Have Particular Inquiries?
                </span>
                <h2 className="font-serif text-3xl text-stone-900">
                  Contact Our Guest Relations Team
                </h2>
                <p className="text-xs text-stone-500 max-w-md mx-auto leading-relaxed">
                  Whether you need special family arrangements, airport transfer scheduling from Podgorica (TGD) or Tivat (TIV), 
                  or have custom dietary questions, we are here to assist.
                </p>
              </div>
              <Suspense fallback={<div className="h-48 bg-stone-100 animate-pulse rounded-2xl" />}>
                <ContactForm />
              </Suspense>
            </div>
          </div>
        </section>
      </Reveal>
      <Suspense fallback={<div className="h-40 bg-stone-100 animate-pulse" />}>
        <Footer />
      </Suspense>
    </div>
  );
}
