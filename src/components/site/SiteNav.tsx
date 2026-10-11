import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems, profile } from "@/data/portfolio";
import { cn } from "@/lib/utils";

/**
 * Editorial navigation: a full-width bar that sits flush with the page.
 * Transparent at rest, solid with a hairline rule once scrolled — no glass,
 * no floating capsule. A thin accent line tracks reading progress.
 */
export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState<string>("#home");

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 12);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, y / max) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((n) => document.querySelector<HTMLElement>(n.href))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!sections.length || typeof IntersectionObserver === "undefined") return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.2, 0.6] },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow] duration-300",
        scrolled || open
          ? "bg-background/95 border-border border-b supports-[backdrop-filter]:bg-background/85"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="shell">
        <nav
          aria-label="Primary"
          className={cn(
            "flex items-center justify-between gap-6 transition-[height] duration-300",
            scrolled ? "h-14 md:h-16" : "h-16 md:h-20",
          )}
        >
          <a
            href="#home"
            className="flex min-w-0 items-center gap-2.5"
            onClick={() => setOpen(false)}
          >
            <span
              aria-hidden
              className="bg-foreground text-background grid h-7 w-7 shrink-0 place-items-center rounded-[5px] font-mono text-[11px]"
            >
              DB
            </span>
            <span className="truncate text-sm font-medium tracking-tight">{profile.name}</span>
          </a>

          <ul className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={cn(
                    "relative py-1 text-[0.9rem] transition-colors duration-200",
                    active === item.href
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {item.label}
                  <span
                    aria-hidden
                    className={cn(
                      "bg-accent absolute inset-x-0 -bottom-0.5 h-px origin-left transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]",
                      active === item.href ? "scale-x-100" : "scale-x-0",
                    )}
                  />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a href="#contact" className="btn-secondary hidden sm:inline-flex">
              Start a project
            </a>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="border-border hover:bg-secondary grid h-11 w-11 place-items-center rounded-md border transition-colors active:scale-[0.97] lg:hidden"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>
      </div>

      {/* reading progress */}
      <div
        aria-hidden
        className={cn(
          "bg-accent h-px origin-left transition-opacity duration-300",
          scrolled ? "opacity-100" : "opacity-0",
        )}
        style={{ transform: `scaleX(${progress})` }}
      />

      {open ? (
        <div className="bg-background border-border animate-rise border-b lg:hidden">
          <div className="shell py-3">
            <ul className="grid">
              {navItems.map((item, i) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="border-border/70 hover:text-accent flex items-center justify-between border-b py-3.5 text-[0.95rem] transition-colors"
                  >
                    {item.label}
                    <span className="text-muted-foreground font-mono text-[11px]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-primary mt-4 w-full justify-center"
            >
              Start a project
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
