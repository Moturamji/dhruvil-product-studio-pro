import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

/**
 * Reusable EMPTY device frames — screenshot-ready.
 *
 * Both frames reuse the existing premium `device-frame` / `laptop-*` utilities
 * so they belong to the same device family as the rest of the portfolio.
 * Pass `children` later to drop a real screenshot inside; until then a neutral
 * placeholder screen keeps the composition stable with zero layout shift.
 */

function PlaceholderScreen({
  label,
  hint,
}: {
  label?: string | undefined;
  hint?: string | undefined;
}) {
  return (
    <div className="bg-surface-2 absolute inset-0 flex flex-col items-center justify-center gap-2 px-3 text-center">
      <div aria-hidden className="grid-field pointer-events-none absolute inset-0 opacity-60" />
      {label ? (
        <span className="text-foreground/80 relative text-[11px] font-medium">{label}</span>
      ) : null}
      {hint ? (
        <span className="text-muted-foreground relative font-mono text-[9px] tracking-[0.14em] uppercase">
          {hint}
        </span>
      ) : null}
    </div>
  );
}

/** Empty phone frame. Width comes from the parent; proportions never change. */
export function EmptyPhone({
  label,
  caption,
  className,
  children,
}: {
  label?: string | undefined;
  caption?: string | undefined;
  className?: string | undefined;
  children?: ReactNode;
}) {
  return (
    <figure className={cn("w-full shrink-0", className)}>
      <div className="device-frame w-full">
        <span aria-hidden className="device-btn top-[16%] -left-[2px] h-[5%] w-[2px]" />
        <span aria-hidden className="device-btn top-[26%] -left-[2px] h-[8%] w-[2px]" />
        <span aria-hidden className="device-btn top-[24%] -right-[2px] h-[10%] w-[2px]" />

        <div className="device-screen aspect-[9/19]">
          {children ?? <PlaceholderScreen label={label} hint="Screen" />}
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
      {caption ? (
        <figcaption className="text-muted-foreground mt-3 text-center text-[11px] leading-snug">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

/** The single reusable empty laptop frame (admin-panel screens). */
export function EmptyLaptop({
  label,
  caption,
  className,
  children,
}: {
  label?: string | undefined;
  caption?: string | undefined;
  className?: string | undefined;
  children?: ReactNode;
}) {
  return (
    <figure className={cn("w-full", className)}>
      <div className="laptop-lid">
        <div className="laptop-screen aspect-[16/10]">
          <span aria-hidden className="laptop-camera" />
          {children ?? <PlaceholderScreen label={label} hint="Admin screen" />}
          <span
            aria-hidden
            className="device-glare pointer-events-none absolute inset-0 z-10 mix-blend-screen"
          />
        </div>
      </div>
      <div className="laptop-base">
        <span aria-hidden className="laptop-notch" />
      </div>
      {caption ? (
        <figcaption className="text-muted-foreground mt-3 text-center text-[11px] leading-snug">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
