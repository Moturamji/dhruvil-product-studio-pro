import { ChevronsDown } from "lucide-react";

import type { LuxAdminShot } from "@/data/luxtrader";
import { cn } from "@/lib/utils";
import { MockupImage } from "./MockupImage";

/**
 * Lux Trader admin-panel laptop frame.
 *
 * Long captures (taller than the 16/10 screen) scroll inside the lid; regular
 * captures sit still with no scroll container and no hint.
 */
export function LuxLaptop({
  shot,
  className,
  caption = true,
  priority = false,
}: {
  shot: LuxAdminShot;
  className?: string | undefined;
  caption?: boolean;
  priority?: boolean;
}) {
  return (
    <figure className={cn("w-full", className)}>
      <div className="laptop-lid">
        <div className="lux-admin-screen laptop-screen aspect-[16/10]">
          <span aria-hidden className="laptop-camera" />

          {shot.long ? (
            <div className="scroll-screen h-full w-full overflow-x-hidden overflow-y-auto overscroll-contain">
              <MockupImage
                src={shot.src}
                alt={`Lux Trader admin panel — ${shot.label}`}
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
              alt={`Lux Trader admin panel — ${shot.label}`}
              width={shot.width}
              height={shot.height}
              priority={priority}
              imgClassName="object-contain object-top"
            />
          )}

          <span
            aria-hidden
            className="device-glare pointer-events-none absolute inset-0 z-10 mix-blend-screen"
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

      <div className="laptop-base">
        <span aria-hidden className="laptop-notch" />
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
