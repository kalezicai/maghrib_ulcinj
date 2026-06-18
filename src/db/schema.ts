import { pgTable, serial, text, integer, date, boolean, timestamp, index } from "drizzle-orm/pg-core";

export const bookings = pgTable("bookings", {
  id: serial("id").primaryKey(),
  guestName: text("guest_name").notNull(),
  guestEmail: text("guest_email").notNull(),
  guestPhone: text("guest_phone").notNull(),
  checkIn: date("check_in").notNull(),
  checkOut: date("check_out").notNull(),
  guestsCount: integer("guests_count").notNull().default(2),
  roomType: text("room_type").notNull(),
  privateSpaRequested: boolean("private_spa_requested").default(false),
  spaSlotPreference: text("spa_slot_preference"),
  specialRequests: text("special_requests"),
  status: text("status").notNull().default("pending"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
}, (table) => ({
  emailIdx: index("idx_bookings_email").on(table.guestEmail),
  checkInIdx: index("idx_bookings_checkin").on(table.checkIn),
  statusIdx: index("idx_bookings_status").on(table.status),
}));

export const reviews = pgTable("reviews", {
  id: serial("id").primaryKey(),
  authorName: text("author_name").notNull(),
  rating: integer("rating").notNull().default(5),
  tripType: text("trip_type").default("Vacation"),
  text: text("text").notNull(),
  roomsRating: integer("rooms_rating").default(5),
  serviceRating: integer("service_rating").default(5),
  locationRating: integer("location_rating").default(5),
  isApproved: boolean("is_approved").default(true).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
}, (table) => ({
  ratingIdx: index("idx_reviews_rating").on(table.rating),
  createdAtIdx: index("idx_reviews_created").on(table.createdAt),
}));

export const inquiries = pgTable("inquiries", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
}, (table) => ({
  emailIdx: index("idx_inquiries_email").on(table.email),
}));

export const spaReservations = pgTable("spa_reservations", {
  id: serial("id").primaryKey(),
  guestName: text("guest_name").notNull(),
  roomNumber: text("room_number"),
  reservationDate: date("reservation_date").notNull(),
  timeSlot: text("time_slot").notNull(),
  spaArea: text("spa_area").notNull().default("Full Spa (Private Use)"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
}, (table) => ({
  dateSlotIdx: index("idx_spa_date_slot").on(table.reservationDate, table.timeSlot),
}));
