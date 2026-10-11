import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

/**
 * Mockup screenshot loader.
 *
 * - Starts fetching well before the image enters the viewport (rootMargin),
 *   so a scrolling user usually meets an already-decoded image.
 * - Never shows a blank area: a skeleton fills the exact box until load.
 * - The wrapper owns the layout box, so nothing shifts while loading.
 */
export function MockupImage({
  src,
  alt,
  className,
  imgClassName,
  width,
  height,
  sizes,
  priority = false,
  fit = "cover",
  rootMargin = "1200px 0px",
}: {
  src: string;
  alt: string;
  className?: string | undefined;
  imgClassName?: string | undefined;
  width?: number;
  height?: number;
  sizes?: string;
  priority?: boolean;
  /** "cover" fills the frame; "natural" keeps the screenshot's own ratio. */
  fit?: "cover" | "natural";
  rootMargin?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [start, setStart] = useState(priority);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (start) return;
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setStart(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setStart(true);
            io.disconnect();
          }
        }
      },
      { rootMargin },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [start, rootMargin]);

  return (
    <div
      ref={ref}
      className={cn(
        "bg-surface-2 relative",
        fit === "cover" ? "h-full w-full overflow-hidden" : "w-full",
        className,
      )}
    >
      {start ? (
        <img
          src={src}
          alt={alt}
          {...(width ? { width } : {})}
          {...(height ? { height } : {})}
          {...(sizes ? { sizes } : {})}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          decoding="async"
          onLoad={() => setLoaded(true)}
          onError={() => setLoaded(true)}
          ref={(el) => {
            if (el?.complete) setLoaded(true);
          }}
          className={cn(
            "block transition-opacity duration-500",
            fit === "cover" ? "h-full w-full object-cover object-top" : "mx-auto h-auto w-full",
            loaded ? "opacity-100" : "opacity-0",
            imgClassName,
          )}
        />
      ) : fit === "natural" && width && height ? (
        <div style={{ aspectRatio: `${width} / ${height}` }} />
      ) : null}

      {!loaded ? (
        <div aria-hidden className="pointer-events-none absolute inset-0 z-[15] overflow-hidden">
          <div className="bg-surface-2 absolute inset-0" />
          <div className="skeleton-shimmer absolute inset-0" />
        </div>
      ) : null}
    </div>
  );
}
