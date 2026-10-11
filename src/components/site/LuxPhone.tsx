import { ChevronsDown } from "lucide-react";

import type { LuxShot } from "@/data/luxtrader";
import { cn } from "@/lib/utils";
import { MockupImage } from "./MockupImage";

/**
 * Lux Trader phone frame.
 *
 * Long screenshots (taller than the device viewport) scroll inside the screen.
 * Regular screenshots sit still — no scroll container, no scroll hint.
 */
export function LuxPhone({
  shot,
  className,
  caption = true,
  priority = false,
}: {
  shot: LuxShot;
  className?: string | undefined;
  caption?: boolean;
  priority?: boolean;
}) {
  return (
    <figure className={cn("w-full shrink-0", className)}>
      <div className="device-frame w-full">
        <span aria-hidden className="device-btn top-[16%] -left-[2px] h-[5%] w-[2px]" />
        <span aria-hidden className="device-btn top-[26%] -left-[2px] h-[8%] w-[2px]" />
        <span aria-hidden className="device-btn top-[24%] -right-[2px] h-[10%] w-[2px]" />

        <div className="device-screen aspect-[9/19]">
          {shot.long ? (
            <div className="bg-surface-2 h-full w-full overflow-y-auto overscroll-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <MockupImage
                src={shot.src}
                alt={`Lux Trader — ${shot.label}`}
                width={shot.width}
                height={shot.height}
                fit="natural"
                priority={priority}
                className="min-h-full"
              />
            </div>
          ) : (
            <MockupImage
              src={shot.src}
              alt={`Lux Trader — ${shot.label}`}
              width={shot.width}
              height={shot.height}
              priority={priority}
              imgClassName="object-contain object-top"
            />
          )}

          <span
            aria-hidden
            className="pointer-events-none absolute top-[1.6%] left-1/2 z-20 h-[1.6%] min-h-[7px] w-[22%] -translate-x-1/2 rounded-full bg-black shadow-[0_0_0_1px_rgba(255,255,255,0.06)]"
          />
          <span
            aria-hidden
            className="device-glare pointer-events-none absolute inset-0 z-10 rounded-[1.65rem] mix-blend-screen"
          />

          {shot.long ? (
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
      {caption ? (
        <figcaption className="mt-3 text-center">
          <span className="block text-[11px] font-medium">{shot.label}</span>
          <span className="text-muted-foreground mt-1 block text-[11px] leading-snug">
            {shot.note}
          </span>
        </figcaption>
      ) : null}
    </figure>
  );
}
