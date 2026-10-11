import { useCallback, useEffect, useState } from "react";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Mail,
  Moon,
  Palette,
  ShieldCheck,
  Smartphone,
  Sparkles,
  X,
  Zap,
} from "lucide-react";
import { styleCalc, styleCalcDetails } from "@/data/stylecalc";
import { cn } from "@/lib/utils";
import { MockupImage } from "./MockupImage";
import { Reveal } from "./Reveal";

const icons = { palette: Palette, zap: Zap, moon: Moon, sparkles: Sparkles, smartphone: Smartphone };

function Phone({
  src,
  alt,
  className,
  onClick,
  priority,
}: {
  src: string;
  alt: string;
  className?: string;
  onClick?: () => void;
  priority?: boolean;
}) {
  const img = (
    <MockupImage
      src={src}
      alt={alt}
      width={720}
      height={1560}
      sizes="(min-width: 768px) 240px, 45vw"
      fit="natural"
      {...(priority ? { priority: true } : {})}
    />
  );
  const frame = (
    <span className="border-border bg-card shadow-soft group-hover:shadow-lift block overflow-hidden rounded-[1.35rem] border p-1.5 transition-shadow duration-500">
      <span className="block overflow-hidden rounded-[1rem]">{img}</span>
    </span>
  );
  if (!onClick) return <div className={cn("group", className)}>{frame}</div>;
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`Open screenshot: ${alt}`}
      className={cn(
        "group focus-visible:outline-accent block cursor-zoom-in transition-transform duration-500 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4",
        className,
      )}
    >
      {frame}
    </button>
  );
}

/** One StyleCalc screen in the shared premium device frame. */
export function StyleCalcPhone({
  src,
  alt,
  className,
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string | undefined;
  priority?: boolean;
}) {
  return (
    <div className={cn("device-frame w-full shrink-0", className)}>
      <span aria-hidden className="device-btn top-[16%] -left-[2px] h-[5%] w-[2px]" />
      <span aria-hidden className="device-btn top-[26%] -left-[2px] h-[8%] w-[2px]" />
      <span aria-hidden className="device-btn top-[24%] -right-[2px] h-[10%] w-[2px]" />
      <div className="device-screen aspect-[9/19]">
        <MockupImage src={src} alt={alt} priority={priority} sizes="(min-width: 768px) 160px, 40vw" />
        <span
          aria-hidden
          className="pointer-events-none absolute top-[1.6%] left-1/2 z-20 h-[1.6%] min-h-[7px] w-[22%] -translate-x-1/2 rounded-full bg-black shadow-[0_0_0_1px_rgba(255,255,255,0.06)]"
        />
        <span
          aria-hidden
          className="device-glare pointer-events-none absolute inset-0 z-10 rounded-[1.65rem] mix-blend-screen"
        />
      </div>
    </div>
  );
}

/** Card preview: three real StyleCalc screens in device frames. */
export function StyleCalcPreview() {
  const [a, b, c] = [
    styleCalc.screenshots[2]!,
    styleCalc.screenshots[0]!,
    styleCalc.screenshots[3]!,
  ];
  return (
    <div className="relative flex aspect-[16/9] items-start justify-center overflow-hidden px-3">
      <div className="flex w-full max-w-[420px] items-start justify-center gap-2 pt-4 sm:gap-3">
        <StyleCalcPhone
          src={a.src}
          alt={a.alt}
          className="mt-5 max-w-[104px] rotate-[-8deg] sm:max-w-[118px]"
        />
        <StyleCalcPhone
          src={b.src}
          alt={b.alt}
          priority
          className="z-10 max-w-[112px] transition-transform duration-700 group-hover:-translate-y-2 sm:max-w-[128px]"
        />
        <StyleCalcPhone
          src={c.src}
          alt={c.alt}
          className="mt-5 max-w-[104px] rotate-[8deg] sm:max-w-[118px]"
        />
      </div>
    </div>
  );
}


function Lightbox({
  index,
  onClose,
  onStep,
}: {
  index: number;
  onClose: () => void;
  onStep: (delta: number) => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onStep(1);
      if (e.key === "ArrowLeft") onStep(-1);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose, onStep]);

  const shot = styleCalc.screenshots[index];
  if (!shot) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="StyleCalc screenshot viewer"
      className="bg-foreground/85 fixed inset-0 z-[70] flex flex-col p-4 backdrop-blur-sm sm:p-8"
      onClick={onClose}
    >
      <div className="flex items-center justify-between gap-4">
        <span className="text-background/80 font-mono text-[11px]">
          {String(index + 1).padStart(2, "0")} / {String(styleCalc.screenshots.length).padStart(2, "0")}
        </span>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close screenshot viewer"
          className="text-background border-background/25 hover:bg-background/10 grid h-11 w-11 place-items-center rounded-full border transition-colors"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <div className="flex min-h-0 flex-1 items-center justify-center gap-3 sm:gap-6">
        <button
          type="button"
          aria-label="Previous screenshot"
          onClick={(e) => {
            e.stopPropagation();
            onStep(-1);
          }}
          className="text-background border-background/25 hover:bg-background/10 grid h-11 w-11 shrink-0 place-items-center rounded-full border transition-colors"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <img
          src={shot.src}
          alt={shot.alt}
          onClick={(e) => e.stopPropagation()}
          className="max-h-full min-h-0 w-auto max-w-full rounded-xl object-contain"
        />
        <button
          type="button"
          aria-label="Next screenshot"
          onClick={(e) => {
            e.stopPropagation();
            onStep(1);
          }}
          className="text-background border-background/25 hover:bg-background/10 grid h-11 w-11 shrink-0 place-items-center rounded-full border transition-colors"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <p className="text-background/80 mt-4 text-center text-sm">{shot.alt.replace("StyleCalc screenshot — ", "")}</p>
    </div>
  );
}

export function StyleCalcShowcase({ embedded = false }: { embedded?: boolean }) {
  const [open, setOpen] = useState<number | null>(null);
  const total = styleCalc.screenshots.length;

  const step = useCallback(
    (delta: number) => setOpen((i) => (i === null ? i : (i + delta + total) % total)),
    [total],
  );
  const close = useCallback(() => setOpen(null), []);

  return (
    <div id="stylecalc" className="scroll-mt-24">
      {embedded ? null : (
        <Reveal className="mt-24 flex items-center gap-3">
          <span className="eyebrow text-accent">Case study</span>
          <span className="bg-border-strong h-3 w-px" aria-hidden />
          <span className="eyebrow">Android · Google Play</span>
        </Reveal>
      )}

      {/* Hero */}
      <Reveal
        className={cn(
          "border-border bg-card shadow-soft overflow-hidden rounded-2xl border",
          embedded ? "mt-0" : "mt-6",
        )}
      >

        <div className="grid gap-10 p-7 md:p-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="min-w-0">
            <div className="flex min-w-0 items-center gap-4">
              <img
                src={styleCalc.icon}
                alt="StyleCalc app icon"
                width={72}
                height={72}
                decoding="async"
                className="border-border shadow-soft h-16 w-16 shrink-0 rounded-2xl border md:h-[72px] md:w-[72px]"
              />
              <div className="min-w-0">
                <h3 className="truncate text-2xl font-medium md:text-3xl">{styleCalc.name}</h3>
                <p className="text-muted-foreground mt-1 text-sm">
                  {styleCalc.developer} · {styleCalc.category}
                </p>
              </div>
            </div>

            <ul className="mt-6 flex flex-wrap gap-1.5">
              {[styleCalc.platform, styleCalc.status, styleCalc.downloads, styleCalc.contentRating].map(
                (badge) => (
                  <li
                    key={badge}
                    className="pill pill-muted"
                  >
                    {badge}
                  </li>
                ),
              )}
            </ul>

            <p className="mt-6 text-base leading-relaxed">{styleCalc.tagline}</p>
            {styleCalc.description.map((para) => (
              <p key={para.slice(0, 24)} className="text-muted-foreground mt-3 text-sm leading-relaxed">
                {para}
              </p>
            ))}

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={styleCalc.playUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="group btn-primary"
              >
                View on Google Play
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <button type="button" onClick={() => setOpen(0)} className="btn-secondary">
                Browse screenshots
              </button>
            </div>
          </div>

          <div className="bg-surface-2 border-border relative -mx-7 -mb-7 overflow-hidden border-t p-8 md:-mx-10 md:-mb-10 lg:mx-0 lg:mb-0 lg:rounded-xl lg:border">
            <div aria-hidden className="grid-field pointer-events-none absolute inset-0 opacity-70" />
            <div className="relative mx-auto grid max-w-[420px] grid-cols-3 items-center gap-3">
              <Phone
                src={styleCalc.screenshots[1]!.src}
                alt={styleCalc.screenshots[1]!.alt}
                onClick={() => setOpen(1)}
                className="translate-y-5"
                priority
              />
              <Phone
                src={styleCalc.screenshots[0]!.src}
                alt={styleCalc.screenshots[0]!.alt}
                onClick={() => setOpen(0)}
                className="z-10 scale-[1.06]"
                priority
              />
              <Phone
                src={styleCalc.screenshots[2]!.src}
                alt={styleCalc.screenshots[2]!.alt}
                onClick={() => setOpen(2)}
                className="translate-y-5"
                priority
              />
            </div>
          </div>
        </div>
      </Reveal>

      {/* Gallery */}
      <div className="mt-20">
        <div className="border-border flex flex-wrap items-end justify-between gap-4 border-b pb-4">
          <h4 className="text-lg font-medium">Screenshots</h4>
          <span className="text-muted-foreground font-mono text-[11px]">
            Official Google Play assets · {String(total).padStart(2, "0")}
          </span>
        </div>
        <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {styleCalc.screenshots.map((shot, i) => (
            <li key={shot.src}>
              <Reveal delay={(i % 5) * 60}>
                <Phone src={shot.src} alt={shot.alt} onClick={() => setOpen(i)} />
              </Reveal>
            </li>
          ))}
        </ul>
      </div>

      {/* Highlights */}
      <div className="mt-20">
        <h4 className="text-lg font-medium">App highlights</h4>
        <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {styleCalc.highlights.map((h, i) => {
            const Icon = icons[h.icon as keyof typeof icons] ?? Sparkles;
            return (
              <li key={h.title}>
                <Reveal
                  delay={i * 60}
                  className="border-border bg-card shadow-soft hover:shadow-lift h-full rounded-xl border p-6 transition-shadow duration-500"
                >
                  <Icon className="text-accent h-5 w-5" aria-hidden />
                  <h5 className="mt-4 text-base font-medium">{h.title}</h5>
                  <p className="text-muted-foreground mt-2 text-sm leading-relaxed">{h.body}</p>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Features + tech + details */}
      <div className="mt-20 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal className="border-border bg-card shadow-soft rounded-xl border p-7 md:p-8">
          <h4 className="text-lg font-medium">Key features</h4>
          <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {styleCalc.features.map((f) => (
              <li key={f} className="text-muted-foreground flex gap-3 text-sm">
                <span className="bg-accent mt-[0.55rem] h-1 w-1 shrink-0 rounded-full" aria-hidden />
                {f}
              </li>
            ))}
          </ul>

          <h4 className="mt-10 text-lg font-medium">Built with</h4>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {styleCalc.builtWith.map((t) => (
              <li key={t.name} className="border-border rounded-lg border p-4">
                <span className="font-mono text-xs">{t.name}</span>
                <p className="text-muted-foreground mt-1 text-xs leading-relaxed">{t.note}</p>
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="grid gap-6">
          <Reveal className="border-border bg-card shadow-soft rounded-xl border p-7 md:p-8">
            <h4 className="text-lg font-medium">Technical details</h4>
            <dl className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {styleCalcDetails.map((d) => (
                <div key={d.label} className={cn(d.label === "Package" && "sm:col-span-2 min-w-0")}>
                  <dt className="eyebrow">{d.label}</dt>
                  <dd className="mt-1 truncate font-mono text-xs">{d.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal className="border-border bg-card shadow-soft rounded-xl border p-7 md:p-8">
            <div className="flex items-center gap-3">
              <ShieldCheck className="text-accent h-5 w-5 shrink-0" aria-hidden />
              <h4 className="text-lg font-medium">Data safety</h4>
            </div>
            <ul className="mt-5 space-y-2">
              {styleCalc.dataSafety.map((d) => (
                <li key={d} className="text-muted-foreground flex gap-3 text-sm">
                  <span className="bg-accent mt-[0.55rem] h-1 w-1 shrink-0 rounded-full" aria-hidden />
                  {d}
                </li>
              ))}
            </ul>
            <div className="border-border mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 border-t pt-6 text-sm">
              <a
                href={styleCalc.privacyUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="hover:text-accent inline-flex items-center gap-1.5 transition-colors"
              >
                Privacy policy
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
              <a
                href={`mailto:${styleCalc.supportEmail}`}
                className="text-muted-foreground hover:text-accent inline-flex items-center gap-1.5 transition-colors"
              >
                <Mail className="h-3.5 w-3.5" />
                {styleCalc.supportEmail}
              </a>
            </div>
          </Reveal>
        </div>
      </div>

      {open !== null ? <Lightbox index={open} onClose={close} onStep={step} /> : null}
    </div>
  );
}
