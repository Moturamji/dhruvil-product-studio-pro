import discoverShot from "@/assets/movie-ticket-booking/buyer/discover.jpg";
import detailsShot from "@/assets/movie-ticket-booking/buyer/movie-details.jpg";
import castShot from "@/assets/movie-ticket-booking/buyer/cast-filmography.jpg";
import seatsShot from "@/assets/movie-ticket-booking/buyer/seat-selection.jpg";
import checkoutShot from "@/assets/movie-ticket-booking/buyer/checkout.jpg";
import ticketShot from "@/assets/movie-ticket-booking/buyer/digital-ticket.jpg";
import bookingsShot from "@/assets/movie-ticket-booking/buyer/my-bookings.jpg";
import watchlistShot from "@/assets/movie-ticket-booking/buyer/watchlist.jpg";
import profileShot from "@/assets/movie-ticket-booking/buyer/profile.jpg";

import admin1 from "@/assets/movie-ticket-booking/cinema-admin/movie-catalog.jpg";
import admin2 from "@/assets/movie-ticket-booking/cinema-admin/hall-listings.jpg";
import admin3 from "@/assets/movie-ticket-booking/cinema-admin/time-slab-listing.jpg";
import admin4 from "@/assets/movie-ticket-booking/cinema-admin/halls.jpg";
import admin5 from "@/assets/movie-ticket-booking/cinema-admin/layout-presets.jpg";
import admin6 from "@/assets/movie-ticket-booking/cinema-admin/hall-builder.jpg";
import admin7 from "@/assets/movie-ticket-booking/cinema-admin/layout-preview.jpg";
import admin8 from "@/assets/movie-ticket-booking/cinema-admin/streaming-schedule.jpg";

import super1 from "@/assets/movie-ticket-booking/super-admin/home.jpg";
import super2 from "@/assets/movie-ticket-booking/super-admin/movie-details.jpg";
import super3 from "@/assets/movie-ticket-booking/super-admin/global-search.jpg";
import super4 from "@/assets/movie-ticket-booking/super-admin/imported-movie-data.jpg";

export type MovieShot = {
  id: string;
  src: string;
  width: number;
  height: number;
  label: string;
  caption: string;
  /** Extremely narrow captures are never stretched to a phone width. */
  narrow?: boolean;
};

export const movieTicket = {
  id: "movieticket",
  title: "Movie Ticket Booking Platform",
  shortTitle: "Movie Ticket Booking",
  tagline:
    "A complete movie ticket booking ecosystem connecting movie discovery, cinema operations, dynamic seating and pricing, and digital ticketing.",
  status: "Multi-role product",
  category: "Full-Stack" as const,
  platform: "Mobile — Buyer, Cinema Admin, Super Admin",
  role: "Developer / Product Builder",
  projectType: "Movie Ticket Booking / Cinema Management Platform",
  tags: ["Buyer app", "Cinema admin", "Super admin", "Seating engine"],
  scope: [
    "Three connected role experiences",
    "Movie discovery, details, cast and filmography",
    "Configurable cinema halls and visual seating",
    "Category base pricing with percentage show adjustment",
    "Checkout, digital QR ticketing and booking history",
  ],
  roles: [
    {
      name: "Buyer",
      flow: "Discover → Select Show → Select Seats → Checkout → Digital Ticket",
      points: [
        "Featured movies, ratings and genres",
        "Movie details, duration, release date, languages",
        "Cast, crew and cast filmography",
        "Visual seat selection with category pricing",
        "Checkout, convenience fee, slide-to-book",
        "QR ticket, countdown, bookings and watchlist",
      ],
    },
    {
      name: "Cinema Admin",
      flow: "Create Hall → Configure Seating → Set Pricing → Create Shows → Manage Movies",
      points: [
        "Custom hall builder with visual seating management",
        "Sections, divisions, rows and seat configuration",
        "Base price per seating division/category",
        "Percentage increase or decrease per show",
        "Movie, show and schedule management",
        "Drag-and-drop management and timestamp-based media editing",
      ],
    },
    {
      name: "Super Admin",
      flow: "Manage Movie Catalog → Control Listings → Platform Governance",
      points: [
        "Central movie catalog management",
        "Decide which movies are listed and available",
        "Platform-level movie information",
        "Catalog governance across cinemas",
      ],
    },
  ],
  pricing: {
    intro:
      "Every seating division inside a hall carries its own base price. When a Cinema Admin lists a show, they apply a percentage adjustment on top of that base — so a late-night or premiere show can be priced up or down without redefining the hall.",
    steps: [
      { label: "Category base price", body: "Set once per seating division when the hall is built." },
      { label: "Show price adjustment", body: "A percentage increase or decrease chosen while listing the show." },
      { label: "Final ticket price", body: "What the buyer sees on the seat map and at checkout." },
    ],
    formula: "Category base price × (100% ± show adjustment) = final ticket price",
  },
  highlights: [
    "Role-based architecture across buyer, cinema operator and platform administrator",
    "Configurable cinema halls with a dynamic seating structure",
    "Category-based pricing and percentage-based show pricing",
    "Seat selection state, booking workflow and booking status",
    "QR digital tickets with show countdown",
    "Cast and filmography data surfaced from the movie catalog",
    "Watchlist, bookings history and profile/membership surfaces",
    "Cinema operations: halls, shows, schedules and movie management",
  ],
  summary:
    "This project brings the entire cinema journey into one connected system — from discovering a movie and selecting a seat to managing halls, pricing shows, controlling movie listings, and issuing digital tickets.",
} as const;

export const buyerShots: MovieShot[] = [
  {
    id: "discover",
    src: discoverShot,
    width: 727,
    height: 1920,
    label: "Movie discovery",
    caption:
      "Featured movie hero with duration and genres, followed by movie cards carrying poster, title, genres and rating.",
  },
  {
    id: "details",
    src: detailsShot,
    width: 561,
    height: 1920,
    label: "Movie details",
    caption:
      "Rating, duration and release date, full overview, genre and language chips, then the cast and crew rows.",
  },
  {
    id: "cast",
    src: castShot,
    width: 1080,
    height: 18773,
    label: "Cast & filmography",
    caption:
      "A cast member's profile: biography, known-for roles and a complete filmography of previous and upcoming movies.",
  },
  {
    id: "seats",
    src: seatsShot,
    width: 864,
    height: 1920,
    label: "Seat selection",
    caption:
      "Screen orientation, rows and sections, seating categories with their own pricing, plus available and selected seat states.",
  },
  {
    id: "checkout",
    src: checkoutShot,
    width: 864,
    height: 1920,
    label: "Checkout",
    caption:
      "Movie, format, date and time, the selected seats, ticket price, convenience fee, total and a slide-to-book confirmation.",
  },
  {
    id: "ticket",
    src: ticketShot,
    width: 864,
    height: 1920,
    label: "Digital ticket",
    caption:
      "Issued ticket with date, time, hall, seats and a QR code, headed by a live countdown to showtime.",
  },
  {
    id: "bookings",
    src: bookingsShot,
    width: 682,
    height: 1920,
    label: "My bookings",
    caption:
      "Upcoming and past tabs, a next-show card with confirmation status and countdown, then the upcoming shows list.",
  },
  {
    id: "watchlist",
    src: watchlistShot,
    width: 864,
    height: 1920,
    label: "Watchlist",
    caption: "Saved movies as poster cards with rating, kept for later booking.",
  },
  {
    id: "profile",
    src: profileShot,
    width: 864,
    height: 1920,
    label: "Profile",
    caption:
      "Membership tier, movies watched, points and reviews, with entries into bookings, payment & wallet and watchlist.",
  },
];

export const adminShots: MovieShot[] = [
  {
    id: "movie-catalog",
    src: admin1,
    width: 1080,
    height: 6510,
    label: "Movie catalog",
    caption:
      "Every movie available on the platform, browsable end to end by the cinema admin before anything is listed in a hall.",
  },
  {
    id: "hall-listings",
    src: admin2,
    width: 1080,
    height: 2400,
    label: "Listed movies for a hall",
    caption:
      "All movies currently listed for that hall, with the option to list a new one from the catalog.",
  },
  {
    id: "time-slab",
    src: admin3,
    width: 1080,
    height: 2400,
    label: "Time-slab listing",
    caption:
      "A faster listing path: drag and drop movies into time slabs to build a day's schedule exactly as required.",
  },
  {
    id: "halls",
    src: admin4,
    width: 1080,
    height: 2400,
    label: "Halls of the cinema",
    caption: "All halls created by the cinema admin for that cinema, each one its own bookable space.",
  },
  {
    id: "layout-presets",
    src: admin5,
    width: 1080,
    height: 2400,
    label: "Default hall layouts",
    caption:
      "Commonly used seating layouts ready to pick, so a hall can be created without building it from scratch.",
  },
  {
    id: "hall-builder",
    src: admin6,
    width: 1080,
    height: 2400,
    label: "Custom hall builder",
    caption:
      "Screen placement, seat types, divisions and seat layout configured by hand for a fully custom hall.",
  },
  {
    id: "layout-preview",
    src: admin7,
    width: 1080,
    height: 2400,
    label: "Custom layout preview",
    caption: "The finished custom layout previewed exactly as buyers will see it on the seat map.",
  },
  {
    id: "schedule",
    src: admin8,
    width: 1080,
    height: 2400,
    label: "Streaming schedule",
    caption: "Which movie streams on which day, across the cinema's shows.",
  },
];

export const superShots: MovieShot[] = [
  {
    id: "sa-home",
    src: super1,
    width: 1080,
    height: 10925,
    label: "Super admin home",
    caption:
      "The platform home: every movie currently available on the app for listing, with its active state visible at a glance.",
  },
  {
    id: "sa-movie",
    src: super2,
    width: 1080,
    height: 3549,
    label: "Movie details",
    caption:
      "The actual movie record as the platform stores it — the single source of truth every cinema lists against.",
  },
  {
    id: "sa-search",
    src: super3,
    width: 1080,
    height: 2400,
    label: "Global movie search",
    caption:
      "Search across a worldwide movie database and pull a title straight into the platform — almost any movie can be found and added from here.",
  },
  {
    id: "sa-fields",
    src: super4,
    width: 1080,
    height: 3494,
    label: "Imported movie data",
    caption:
      "The details that come with an imported movie — poster, metadata, cast and crew — reviewed before the title goes live.",
  },
];
