export interface ReviewType {
  authorName: string;
  rating: number;
  tripType: string;
  text: string;
  roomsRating: number;
  serviceRating: number;
  locationRating: number;
  createdAt: string;
}

export interface SpaReservationType {
  guestName: string;
  roomNumber: string;
  reservationDate: string;
  timeSlot: string;
  spaArea: string;
}

export interface RoomType {
  id: string;
  name: string;
  price: number;
  size: string;
  capacity: string;
  bed: string;
  image: string;
  description: string;
  amenities: string[];
  highlights: string[];
}

export interface BookingFormData {
  guestName: string;
  guestEmail: string;
  guestPhone: string;
  checkIn: string;
  checkOut: string;
  guestsCount: number;
  roomType: string;
  privateSpaRequested: boolean;
  spaSlotPreference: string;
  specialRequests: string;
}

export interface ReviewFormData {
  authorName: string;
  rating: number;
  tripType: string;
  text: string;
  roomsRating: number;
  serviceRating: number;
  locationRating: number;
}

export interface SpaFormData {
  guestName: string;
  roomNumber: string;
  reservationDate: string;
  timeSlot: string;
  spaArea: string;
}
