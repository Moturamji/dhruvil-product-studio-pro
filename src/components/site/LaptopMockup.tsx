import { cn } from "@/lib/utils";
import { MockupImage } from "./MockupImage";

/**
 * Premium laptop mockup with a scrollable screen.
 *
 * The screen keeps a fixed 16/10 box; the full-page screenshot scrolls inside
 * it (manual scroll, plus a slow auto-pan on hover) so long pages can be
 * explored without breaking the device silhouette.
 */
export function LaptopMockup({
  src,
  alt,
  label,
  className,
  priority = false,
  width,
  height,
}: {
  src: string;
  alt: string;
  label?: string;
  className?: string | undefined;
  priority?: boolean;
  width?: number;
  height?: number;
}) {
  return (
    <div className={cn("w-full", className)}>
      <div className="laptop-lid">
        <div className="laptop-screen aspect-[16/10]">
          <span aria-hidden className="laptop-camera" />
          <div className="scroll-screen h-full w-full overflow-x-hidden overflow-y-auto">
            <div className="laptop-pan">
              <MockupImage
                src={src}
                alt={alt}
                fit="natural"
                priority={priority}
                {...(width ? { width } : {})}
                {...(height ? { height } : {})}
              />
            </div>
          </div>
          <span
            aria-hidden
            className="device-glare pointer-events-none absolute inset-0 z-10 mix-blend-screen"
          />
        </div>
      </div>

      <div className="laptop-base">
        <span aria-hidden className="laptop-notch" />
      </div>

      {label ? (
        <p className="text-muted-foreground mt-3 text-center text-[11px] leading-snug">{label}</p>
      ) : null}
    </div>
  );
}
