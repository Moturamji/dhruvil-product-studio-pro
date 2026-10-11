import { colorPicker } from "@/data/colorpicker";
import { cn } from "@/lib/utils";
import { MockupImage } from "./MockupImage";

/**
 * Windows desktop window frame.
 * The screenshots already contain the real OS title bar, so the frame only
 * adds depth (border, radius, shadow) instead of faking chrome twice.
 */
function DesktopWindow({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string | undefined;
  priority?: boolean;
}) {
  return (
    <div
      className={cn(
        "border-border-strong bg-surface-2 shadow-lift w-full overflow-hidden rounded-lg border",
        className,
      )}
    >
      <MockupImage
        src={src}
        alt={alt}
        fit="natural"
        width={width}
        height={height}
        priority={priority}
      />
    </div>
  );
}

/** Card preview used inside the Selected Work grid. */
export function ColorPickerPreview() {
  const [main, splash] = colorPicker.shots;
  return (
    <div className="relative flex aspect-[16/9] items-start justify-center gap-4 overflow-hidden px-6 pt-6">
      {main ? (
        <DesktopWindow
          src={main.src}
          alt={main.alt}
          width={main.width}
          height={main.height}
          className="w-full max-w-[132px] translate-y-1"
        />
      ) : null}
      {splash ? (
        <DesktopWindow
          src={splash.src}
          alt={splash.alt}
          width={splash.width}
          height={splash.height}
          className="w-full max-w-[112px] translate-y-6 opacity-90"
        />
      ) : null}
    </div>
  );
}

export function ColorPickerShowcase() {
  const p = colorPicker;
  return (
    <div className="space-y-12">
      <header className="border-border bg-card shadow-soft overflow-hidden rounded-2xl border">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
          <div className="bg-surface-2 relative order-2 flex items-start justify-center gap-5 overflow-hidden p-6 md:p-9 lg:order-1">
            <div aria-hidden className="grid-field pointer-events-none absolute inset-0 opacity-70" />
            {p.shots.map((shot, i) => (
              <DesktopWindow
                key={shot.title}
                src={shot.src}
                alt={shot.alt}
                width={shot.width}
                height={shot.height}
                priority={i === 0}
                className={cn(
                  "relative w-full",
                  i === 0 ? "max-w-[188px]" : "max-w-[160px] translate-y-8",
                )}
              />
            ))}
          </div>

          <div className="order-1 flex flex-col p-7 md:p-10 lg:order-2">
            <div className="flex items-center gap-3">
              <span className="eyebrow text-accent">Desktop utility</span>
              <span className="bg-border-strong h-3 w-px" aria-hidden />
              <span className="eyebrow">{p.platform}</span>
            </div>
            <h3 className="mt-5 text-3xl font-medium md:text-4xl">{p.shortTitle}</h3>
            <p className="text-muted-foreground mt-2 text-base">{p.tagline}</p>
            <p className="text-muted-foreground mt-5 text-sm leading-relaxed">{p.overview}</p>

            <ul className="mt-6 flex flex-wrap gap-1.5">
              {p.tags.map((t) => (
                <li key={t} className="chip">
                  {t}
                </li>
              ))}
            </ul>

            <dl className="border-border mt-7 grid gap-x-8 gap-y-3 border-t pt-6 sm:grid-cols-2">
              <div>
                <dt className="eyebrow">Role</dt>
                <dd className="mt-1 text-sm">{p.role}</dd>
              </div>
              <div>
                <dt className="eyebrow">Status</dt>
                <dd className="mt-1 text-sm">{p.status}</dd>
              </div>
            </dl>
          </div>
        </div>
      </header>

      <section>
        <span className="eyebrow">The problem</span>
        <p className="text-muted-foreground mt-3 max-w-3xl text-sm leading-relaxed">{p.problem}</p>
      </section>

      <section>
        <span className="eyebrow">Screens</span>
        <div className="mt-5 grid gap-6 sm:grid-cols-2">
          {p.shots.map((shot) => (
            <figure key={shot.title} className="flex flex-col items-center">
              <DesktopWindow
                src={shot.src}
                alt={shot.alt}
                width={shot.width}
                height={shot.height}
                className="max-w-[240px]"
              />
              <figcaption className="mt-4 text-center">
                <span className="text-sm font-medium">{shot.title}</span>
                <span className="text-muted-foreground mt-1 block text-[13px] leading-relaxed">
                  {shot.caption}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section>
        <span className="eyebrow">What it does</span>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {p.capabilities.map((c) => (
            <div key={c.title} className="border-border bg-card rounded-xl border p-5">
              <h4 className="text-sm font-medium">{c.title}</h4>
              <p className="text-muted-foreground mt-2 text-[13px] leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <span className="eyebrow">How it's built</span>
        <dl className="border-border mt-5 divide-y divide-[var(--border)] border-y">
          {p.technical.map((t) => (
            <div key={t.label} className="grid gap-1 py-4 sm:grid-cols-[160px_1fr] sm:gap-6">
              <dt className="text-sm font-medium">{t.label}</dt>
              <dd className="text-muted-foreground text-[13px] leading-relaxed">{t.body}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="grid gap-8 lg:grid-cols-2">
        <div>
          <span className="eyebrow">What it demonstrates</span>
          <ul className="mt-4 space-y-2">
            {p.demonstrates.map((d) => (
              <li key={d} className="text-muted-foreground flex gap-3 text-[13px] leading-relaxed">
                <span aria-hidden className="bg-accent mt-[7px] h-1 w-1 shrink-0 rounded-full" />
                {d}
              </li>
            ))}
          </ul>
        </div>
        <div className="border-border bg-surface-2 rounded-xl border p-6">
          <span className="eyebrow">Honest scope</span>
          <p className="text-muted-foreground mt-3 text-[13px] leading-relaxed">{p.honesty}</p>
        </div>
      </section>
    </div>
  );
}
