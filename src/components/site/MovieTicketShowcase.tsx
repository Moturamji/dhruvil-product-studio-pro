import { useCallback, useEffect, useState } from "react";
import { ChevronsDown, X } from "lucide-react";
import { adminShots, buyerShots, movieTicket, superShots, type MovieShot } from "@/data/movieticket";
import { cn } from "@/lib/utils";
import { MockupImage } from "./MockupImage";

/* ------------------------------------------------------------------ */
/* Phone mockup — identical frame for every screenshot.                */
/* The screenshot itself is never cropped, scaled to fill or filtered: */
/* it sits at its natural aspect ratio inside a scrollable viewport.   */
/* ------------------------------------------------------------------ */

export function MoviePhone({
  shot,
  onOpen,
  className,
  priority = false,
  showHint = true,
}: {
  shot: MovieShot;
  onOpen?: (shot: MovieShot) => void;
  className?: string | undefined;
  priority?: boolean;
  showHint?: boolean;
}) {
  return (
    <div className={cn("device-frame w-full shrink-0", className)}>
      {/* side buttons */}
      <span aria-hidden className="device-btn top-[16%] -left-[2px] h-[5%] w-[2px]" />
      <span aria-hidden className="device-btn top-[26%] -left-[2px] h-[8%] w-[2px]" />
      <span aria-hidden className="device-btn top-[24%] -right-[2px] h-[10%] w-[2px]" />

      <div className="device-screen aspect-[9/19]">
        <div className="bg-surface-2 h-full w-full overflow-y-auto overscroll-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <MockupImage
            src={shot.src}
            alt={`${movieTicket.shortTitle} — ${shot.label}`}
            width={shot.width}
            height={shot.height}
            fit="natural"
            priority={priority}
            className="min-h-full"
          />
        </div>


        {/* dynamic island */}
        <span
          aria-hidden
          className="pointer-events-none absolute top-[1.6%] left-1/2 z-20 h-[1.6%] min-h-[7px] w-[22%] -translate-x-1/2 rounded-full bg-black shadow-[0_0_0_1px_rgba(255,255,255,0.06)]"
        />
        {/* glass glare */}
        <span
          aria-hidden
          className="device-glare pointer-events-none absolute inset-0 z-10 rounded-[1.65rem] mix-blend-screen"
        />

        {onOpen ? (
          <button
            type="button"
            onClick={() => onOpen(shot)}
            aria-label={`Open ${shot.label} full size`}
            className="focus-visible:outline-accent absolute right-2 bottom-2 z-30 rounded-full border border-white/20 bg-black/60 px-2.5 py-1 font-mono text-[10px] tracking-[0.12em] text-white/90 uppercase backdrop-blur-sm transition-colors hover:bg-black/80 focus-visible:outline-2"
          >
            Full size
          </button>
        ) : null}
        {showHint ? (
          <span
            aria-hidden
            className="pointer-events-none absolute bottom-2 left-1/2 z-20 inline-flex -translate-x-1/2 items-center gap-1 rounded-full bg-black/50 px-2 py-0.5 font-mono text-[9px] tracking-[0.1em] text-white/70 uppercase"
          >
            <ChevronsDown className="h-3 w-3 motion-safe:animate-bounce" />
            Scroll
          </span>
        ) : null}
      </div>
    </div>
  );
}


/* ------------------------------------------------------------------ */
/* Lightbox — full, uncropped original.                                */
/* ------------------------------------------------------------------ */

function Lightbox({ shot, onClose }: { shot: MovieShot; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${shot.label} full size`}
      onClick={onClose}
      className="fixed inset-0 z-[90] overflow-y-auto bg-black/90 p-4 backdrop-blur-sm motion-safe:animate-in motion-safe:fade-in"
    >
      <div className="mx-auto flex max-w-3xl flex-col items-center py-10">
        <img
          src={shot.src}
          alt={`${movieTicket.shortTitle} — ${shot.label}`}
          width={shot.width}
          height={shot.height}
          onClick={(e) => e.stopPropagation()}
          className="block h-auto w-full rounded-lg"
          style={{ maxWidth: "420px" }}
        />
        <p className="mt-4 font-mono text-[11px] tracking-[0.12em] text-white/70 uppercase">
          {shot.label}
        </p>
      </div>
      <button
        type="button"
        onClick={onClose}
        aria-label="Close full size viewer"
        className="fixed top-4 right-4 grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-black/60 text-white"
      >
        <X className="h-5 w-5" />
      </button>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Card preview                                                        */
/* ------------------------------------------------------------------ */

export function MovieTicketPreview() {
  return (
    <div className="relative flex aspect-[16/9] items-start justify-center overflow-hidden px-3">
      <div className="flex w-full max-w-[420px] items-start justify-center gap-2 pt-4 sm:gap-3">
        <MoviePhone
          shot={buyerShots[1]!}
          showHint={false}
          className="mt-5 max-w-[104px] rotate-[-8deg] sm:max-w-[118px]"
        />
        <MoviePhone
          shot={buyerShots[0]!}
          showHint={false}
          priority
          className="z-10 max-w-[112px] transition-transform duration-700 group-hover:-translate-y-2 sm:max-w-[128px]"
        />
        <MoviePhone
          shot={buyerShots[5]!}
          showHint={false}
          className="mt-5 max-w-[104px] rotate-[8deg] sm:max-w-[118px]"
        />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Case study                                                          */
/* ------------------------------------------------------------------ */

function Block({
  index,
  title,
  lead,
  children,
}: {
  index: string;
  title: string;
  lead?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="border-border border-t pt-8 first:border-t-0 first:pt-0">
      <div className="flex items-center gap-3">
        <span className="eyebrow text-accent">{index}</span>
        <span className="eyebrow">{title}</span>
      </div>
      {lead ? (
        <p className="text-muted-foreground mt-4 max-w-3xl text-sm leading-relaxed md:text-base">
          {lead}
        </p>
      ) : null}
      {children}
    </section>
  );
}

function ShotFigure({
  shot,
  onOpen,
  width = "max-w-[200px]",
}: {
  shot: MovieShot;
  onOpen: (s: MovieShot) => void;
  width?: string;
}) {
  return (
    <figure className={cn("w-full", width)}>
      <MoviePhone shot={shot} onOpen={onOpen} />
      <figcaption className="text-muted-foreground mt-3 text-xs leading-relaxed">
        <span className="text-foreground block text-sm font-medium">{shot.label}</span>
        {shot.caption}
      </figcaption>
    </figure>
  );
}

function ReservedSection({ label }: { label: string }) {
  return (
    <div className="border-border bg-surface-2 relative mt-6 overflow-hidden rounded-xl border border-dashed p-8 text-center">
      <div aria-hidden className="grid-field pointer-events-none absolute inset-0 opacity-50" />
      <p className="relative font-mono text-[11px] tracking-[0.14em] uppercase">{label}</p>
    </div>
  );
}

function RoleDivider({ role, blurb }: { role: string; blurb: string }) {
  return (
    <div className="border-border border-t pt-8">
      <div className="bg-surface-2 border-border rounded-xl border px-6 py-5">
        <span className="eyebrow text-accent">Role</span>
        <h3 className="mt-2 text-xl font-medium md:text-2xl">{role}</h3>
        <p className="text-muted-foreground mt-2 max-w-3xl text-sm leading-relaxed">{blurb}</p>
      </div>
    </div>
  );
}


export function MovieTicketShowcase() {
  const p = movieTicket;
  const [lightbox, setLightbox] = useState<MovieShot | null>(null);
  const open = useCallback((s: MovieShot) => setLightbox(s), []);
  const shot = (id: string) => buyerShots.find((s) => s.id === id)!;
  const adminShot = (id: string) => adminShots.find((s) => s.id === id)!;
  const superShot = (id: string) => superShots.find((s) => s.id === id)!;

  return (
    <div className="grid gap-10">
      {/* 01 — Overview */}
      <Block index="01" title="Project overview">
        <h3 className="mt-4 text-2xl font-medium md:text-3xl">{p.title}</h3>
        <p className="text-muted-foreground mt-3 max-w-3xl text-base leading-relaxed">
          {p.tagline}
        </p>
        <dl className="border-border mt-7 grid gap-x-8 gap-y-4 border-t pt-6 sm:grid-cols-2">
          <div>
            <dt className="eyebrow">Project type</dt>
            <dd className="mt-1 text-sm">{p.projectType}</dd>
          </div>
          <div>
            <dt className="eyebrow">Roles</dt>
            <dd className="mt-1 text-sm">Buyer · Cinema Admin · Super Admin</dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="eyebrow">Product scope</dt>
            <dd className="mt-2">
              <ul className="grid gap-2 sm:grid-cols-2">
                {p.scope.map((s) => (
                  <li
                    key={s}
                    className="text-muted-foreground flex gap-2.5 text-sm leading-relaxed"
                  >
                    <span className="bg-accent mt-2 h-1 w-1 shrink-0 rounded-full" aria-hidden />
                    {s}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        </dl>
      </Block>

      {/* 02 — The product */}
      <Block
        index="02"
        title="The product"
        lead="Three connected experiences sit on one catalog and one seating model: buyers book, cinema operators define and price what can be booked, and the platform administrator governs the movie catalog itself."
      >
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {p.roles.map((r) => (
            <div key={r.name} className="border-border bg-card rounded-xl border p-6">
              <span className="eyebrow text-accent">{r.name}</span>
              <p className="mt-3 font-mono text-[11px] leading-relaxed">{r.flow}</p>
              <ul className="mt-5 grid gap-2">
                {r.points.map((pt) => (
                  <li
                    key={pt}
                    className="text-muted-foreground flex gap-2.5 text-sm leading-relaxed"
                  >
                    <span
                      className="bg-border-strong mt-2 h-1 w-1 shrink-0 rounded-full"
                      aria-hidden
                    />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Block>

      <RoleDivider
        role="Buyer experience"
        blurb="Each screen below appears once, in the order a buyer moves through the app. Every capture is unmodified — it scrolls inside its device frame and opens full size in a viewer."
      />


      {/* 03 — Discovery & details */}
      <Block
        index="03"
        title="Movie discovery & details"
        lead="Discovery leads with a featured movie carrying duration and genres, then a rail of movie cards with posters, genres and ratings. The detail screen expands into rating, duration, release date, a full overview, genre and language chips, and the complete cast and crew."
      >
        <div className="mt-8 flex flex-wrap justify-center gap-10">
          <ShotFigure shot={shot("discover")} onOpen={open} />
          <ShotFigure shot={shot("details")} onOpen={open} />
        </div>
      </Block>

      {/* 04 — Cast & filmography */}
      <Block
        index="04"
        title="Cast & filmography"
        lead="Movie details extend beyond the title itself. Users can explore cast members, their previous filmography, and upcoming movies."
      >
        <div className="mt-8 flex justify-center">
          <figure className="w-full max-w-[200px]">
            <MoviePhone shot={shot("cast")} onOpen={open} />
            <figcaption className="text-muted-foreground mt-3 text-xs leading-relaxed">
              <span className="text-foreground block text-sm font-medium">
                {shot("cast").label}
              </span>
              One very long capture shown at full phone width — scroll inside the frame, or open it
              full size to read the whole filmography.
            </figcaption>
          </figure>
        </div>
      </Block>

      {/* 05 — Seat selection */}
      <Block
        index="05"
        title="Cinema seat selection"
        lead="The seat map mirrors the hall a cinema admin configured: screen orientation, rows, sections and seating categories, each with its own price. Buyers see availability and their own selection updating against the running total."
      >
        <div className="mt-8 flex justify-center">
          <ShotFigure shot={shot("seats")} onOpen={open} />
        </div>
      </Block>

      {/* 06 — Dynamic pricing */}
      <Block index="06" title="Dynamic cinema pricing" lead={p.pricing.intro}>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {p.pricing.steps.map((s, i) => (
            <div key={s.label} className="border-border bg-card relative rounded-xl border p-6">
              <span className="text-border-strong font-mono text-2xl">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="mt-3 text-sm font-medium">{s.label}</div>
              <p className="text-muted-foreground mt-1 text-sm leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
        <p className="border-border bg-surface-2 text-muted-foreground mt-4 rounded-xl border px-5 py-4 text-center font-mono text-[11px] tracking-[0.08em] md:text-xs">
          {p.pricing.formula}
        </p>
      </Block>

      {/* 07 — Checkout */}
      <Block
        index="07"
        title="Checkout & booking"
        lead="Checkout restates the movie, format, date and time, lists the selected seats, and breaks the total into ticket price and convenience fee. Confirmation is a deliberate slide-to-book gesture rather than a tap."
      >
        <div className="mt-8 flex justify-center">
          <ShotFigure shot={shot("checkout")} onOpen={open} />
        </div>
      </Block>

      {/* 08 — Digital ticket */}
      <Block
        index="08"
        title="Digital ticket"
        lead="A confirmed booking becomes a digital ticket: movie, date, time, hall and seats, a scannable QR code, and a live countdown to showtime."
      >
        <div className="mt-8 flex justify-center">
          <ShotFigure shot={shot("ticket")} onOpen={open} />
        </div>
      </Block>

      {/* 09 — Bookings & watchlist */}
      <Block
        index="09"
        title="My bookings & watchlist"
        lead="Bookings split into upcoming and past, with booking status, seats and show details on each entry. The watchlist keeps saved movies one tap away from a new booking."
      >
        <div className="mt-8 flex flex-wrap justify-center gap-10">
          <ShotFigure shot={shot("bookings")} onOpen={open} />
          <ShotFigure shot={shot("watchlist")} onOpen={open} />
        </div>
      </Block>

      {/* 10 — Profile */}
      <Block
        index="10"
        title="Profile"
        lead="The profile collects membership tier, movies watched, points and reviews, and routes into bookings, payment & wallet and the watchlist."
      >
        <div className="mt-8 flex justify-center">
          <ShotFigure shot={shot("profile")} onOpen={open} />
        </div>
      </Block>

      <RoleDivider
        role="Cinema Admin"
        blurb="The operator side: the movie catalog a cinema draws from, how a movie gets listed on a hall, how halls and seating are configured and priced, and how the day's schedule is set."
      />

      {/* 11 — Cinema admin: catalog & listing */}
      <Block
        index="11"
        title="Cinema operations — movies & listing"
        lead="The cinema admin side is where a hall becomes bookable inventory. It starts with the movie catalog and the two ways a movie gets listed on a hall."
      >
        <div className="mt-8 flex flex-wrap justify-center gap-10">
          <ShotFigure shot={adminShot("movie-catalog")} onOpen={open} />
          <ShotFigure shot={adminShot("hall-listings")} onOpen={open} />
          <ShotFigure shot={adminShot("time-slab")} onOpen={open} />
        </div>
      </Block>

      {/* 12 — Halls & seating */}
      <Block
        index="12"
        title="Halls & seating configuration"
        lead="Halls can be assembled from ready-made layouts or built seat by seat, then previewed exactly as the buyer will see them."
      >
        <div className="mt-8 flex flex-wrap justify-center gap-10">
          <ShotFigure shot={adminShot("halls")} onOpen={open} />
          <ShotFigure shot={adminShot("layout-presets")} onOpen={open} />
          <ShotFigure shot={adminShot("hall-builder")} onOpen={open} />
          <ShotFigure shot={adminShot("layout-preview")} onOpen={open} />
        </div>
      </Block>

      {/* 13 — Scheduling */}
      <Block
        index="13"
        title="Show scheduling"
        lead="Once halls and listings exist, the schedule view answers the operational question: which movie is streaming on which day."
      >
        <div className="mt-8 flex justify-center">
          <ShotFigure shot={adminShot("schedule")} onOpen={open} />
        </div>
        <ul className="mt-8 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {p.roles[1]!.points.map((pt) => (
            <li
              key={pt}
              className="border-border text-muted-foreground rounded-lg border px-4 py-3 text-sm leading-relaxed"
            >
              {pt}
            </li>
          ))}
        </ul>
      </Block>


      <RoleDivider
        role="Super Admin"
        blurb="Platform governance above individual cinemas: the central movie catalog and which movies are available to be listed at all."
      />

      {/* 14 — Super admin catalog */}
      <Block
        index="14"
        title="Platform administration — the movie catalog"
        lead="Above individual cinemas, the super admin governs the catalog every cinema draws from. The home surface lists every movie available on the app for listing along with its active state, and each title opens into the platform's own movie record."
      >
        <div className="mt-8 flex flex-wrap justify-center gap-10">
          <ShotFigure shot={superShot("sa-home")} onOpen={open} />
          <ShotFigure shot={superShot("sa-movie")} onOpen={open} />
        </div>
      </Block>

      {/* 15 — Global movie import */}
      <Block
        index="15"
        title="Global movie search & import"
        lead="Movies aren't typed in by hand. The super admin searches a worldwide movie database, where almost any title can be found, and imports it with its poster, metadata, cast and crew already attached."
      >
        <div className="mt-8 flex flex-wrap justify-center gap-10">
          <ShotFigure shot={superShot("sa-search")} onOpen={open} />
          <ShotFigure shot={superShot("sa-fields")} onOpen={open} />
        </div>
        <p className="border-border text-muted-foreground mt-8 max-w-3xl rounded-lg border border-dashed px-5 py-4 text-sm leading-relaxed">
          Why it works this way: because every movie enters the platform once, from one
          source, cinema admins never upload their own artwork. That removes thumbnail and
          metadata conflicts entirely — the same movie looks and reads identically across
          every cinema on the app.
        </p>
        <ul className="mt-8 grid gap-2 sm:grid-cols-2">
          {p.roles[2]!.points.map((pt) => (
            <li
              key={pt}
              className="border-border text-muted-foreground rounded-lg border px-4 py-3 text-sm leading-relaxed"
            >
              {pt}
            </li>
          ))}
        </ul>
      </Block>


      {/* 16 — Highlights */}
      <Block index="16" title="Engineering & product highlights">
        <ul className="mt-6 grid gap-2 sm:grid-cols-2">
          {p.highlights.map((h) => (
            <li key={h} className="text-muted-foreground flex gap-2.5 text-sm leading-relaxed">
              <span className="bg-accent mt-2 h-1 w-1 shrink-0 rounded-full" aria-hidden />
              {h}
            </li>
          ))}
        </ul>
      </Block>

      {/* 17 — Technology stack */}
      <Block index="17" title="Technology stack">
        <ReservedSection label="Technology stack to be added" />
      </Block>

      {/* 18 — Summary */}
      <Block index="18" title="Final product summary">
        <p className="mt-4 max-w-3xl text-base leading-relaxed md:text-lg">{p.summary}</p>
      </Block>

      {lightbox ? <Lightbox shot={lightbox} onClose={() => setLightbox(null)} /> : null}
    </div>
  );
}
