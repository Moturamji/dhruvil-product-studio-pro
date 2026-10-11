import { taskFlow } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { MockupImage } from "./MockupImage";

import homeShot from "@/assets/taskflow/home.jpg";
import calendarShot from "@/assets/taskflow/calendar.jpg";
import statsShot from "@/assets/taskflow/statistics.jpg";
import profileShot from "@/assets/taskflow/profile.jpg";
import newTaskShot from "@/assets/taskflow/new-task.jpg";

/* ------------------------------------------------------------------ */
/* Real app screenshots, set into device frames.                       */
/* ------------------------------------------------------------------ */

export const taskFlowScreens = [
  { src: homeShot, label: "Home — today and tomorrow" },
  { src: calendarShot, label: "Calendar — month view with task dots" },
  { src: statsShot, label: "Statistics — completion and streaks" },
  { src: newTaskShot, label: "New task — priority, category, reminder" },
  { src: profileShot, label: "Profile — appearance and notifications" },
] as const;

/** One phone mockup, used everywhere. Width is controlled by the parent. */
export function TaskFlowPhone({
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
        <MockupImage src={src} alt={alt} priority={priority} />
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


/** Card preview: three phones, always visible (tighter on small screens). */
export function TaskFlowPreview() {
  return (
    <div className="relative flex aspect-[16/9] items-start justify-center overflow-hidden px-3">
      <div className="flex w-full max-w-[420px] items-start justify-center gap-2 pt-4 sm:gap-3">
        <TaskFlowPhone
          src={taskFlowScreens[1].src}
          alt={taskFlowScreens[1].label}
          className="mt-5 max-w-[104px] rotate-[-8deg] sm:max-w-[118px]"
        />
        <TaskFlowPhone
          src={taskFlowScreens[0].src}
          alt={taskFlowScreens[0].label}
          priority
          className="z-10 max-w-[112px] transition-transform duration-700 group-hover:-translate-y-2 sm:max-w-[128px]"
        />
        <TaskFlowPhone
          src={taskFlowScreens[2].src}
          alt={taskFlowScreens[2].label}
          className="mt-5 max-w-[104px] rotate-[8deg] sm:max-w-[118px]"
        />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Case study                                                          */
/* ------------------------------------------------------------------ */

export function TaskFlowShowcase() {
  const p = taskFlow;
  return (
    <div className="border-border bg-card shadow-soft overflow-hidden rounded-2xl border">
      <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
        <div className="bg-surface-2 relative order-2 overflow-hidden p-6 md:p-8 lg:order-1">
          <div aria-hidden className="grid-field pointer-events-none absolute inset-0 opacity-70" />

          <div className="relative lg:sticky lg:top-20">
            {/* Mobile: every screen in a swipeable row */}
            <div className="-mx-6 flex snap-x snap-mandatory items-start gap-4 overflow-x-auto px-6 pb-3 sm:hidden">
              {taskFlowScreens.map((s, i) => (
                <div key={s.src} className="w-[150px] shrink-0 snap-center">
                  <TaskFlowPhone src={s.src} alt={s.label} priority={i === 0} />
                  <p className="text-muted-foreground mt-2 text-[11px] leading-snug">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Angled hero cluster */}
            <div className="hidden items-start justify-center gap-3 sm:flex">
              <TaskFlowPhone
                src={taskFlowScreens[1].src}
                alt={taskFlowScreens[1].label}
                className="mt-10 max-w-[140px] rotate-[-9deg]"
              />
              <TaskFlowPhone
                src={taskFlowScreens[0].src}
                alt={taskFlowScreens[0].label}
                className="z-10 max-w-[156px] rotate-[-1deg]"
              />
              <TaskFlowPhone
                src={taskFlowScreens[2].src}
                alt={taskFlowScreens[2].label}
                className="mt-10 max-w-[140px] rotate-[9deg]"
              />
            </div>

            {/* Secondary pair — formatted to match scale and size of the upper row */}
            <div className="mt-7 hidden items-start justify-center gap-4 sm:flex md:mt-8 md:gap-6">
              <TaskFlowPhone
                src={taskFlowScreens[3].src}
                alt={taskFlowScreens[3].label}
                className="max-w-[140px] rotate-[-5deg] md:max-w-[146px]"
              />
              <TaskFlowPhone
                src={taskFlowScreens[4].src}
                alt={taskFlowScreens[4].label}
                className="max-w-[140px] rotate-[5deg] md:max-w-[146px]"
              />
            </div>
          </div>
        </div>



        <div className="order-1 flex flex-col p-7 md:p-10 lg:order-2">
          <div className="flex flex-wrap items-center gap-3">
            <span className="pill pill-muted">
              {p.status}
            </span>
            <span className="bg-border-strong h-3 w-px" aria-hidden />
            <span className="eyebrow">{p.platform}</span>
          </div>
          <h3 className="mt-5 text-2xl font-medium md:text-3xl">{p.title}</h3>
          <p className="text-muted-foreground mt-2 text-base">{p.tagline}</p>
          <p className="text-muted-foreground mt-5 text-sm leading-relaxed">{p.overview}</p>

          <div className="border-border mt-7 border-t pt-6">
            <h4 className="eyebrow">Problem &amp; goal</h4>
            <p className="text-muted-foreground mt-2 text-sm leading-relaxed">{p.problem}</p>
          </div>

          <div className="border-border mt-7 border-t pt-6">
            <h4 className="eyebrow">Key capabilities</h4>
            <ul className="mt-4 grid gap-4 sm:grid-cols-2">
              {p.capabilities.map((c) => (
                <li key={c.title}>
                  <div className="text-sm font-medium">{c.title}</div>
                  <p className="text-muted-foreground mt-1 text-sm leading-relaxed">{c.body}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-border mt-7 border-t pt-6">
            <h4 className="eyebrow">Technical approach</h4>
            <dl className="mt-4 grid gap-3">
              {p.technical.map((t) => (
                <div key={t.label} className="grid gap-1 sm:grid-cols-[7rem_1fr] sm:gap-4">
                  <dt className="text-muted-foreground font-mono text-[11px] tracking-[0.1em] uppercase">
                    {t.label}
                  </dt>
                  <dd className="text-muted-foreground text-sm leading-relaxed">{t.body}</dd>
                </div>
              ))}
            </dl>
            <ul className="mt-5 flex flex-wrap gap-1.5">
              {p.tags.map((t) => (
                <li
                  key={t}
                  className="chip"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="border-border mt-7 border-t pt-6">
            <h4 className="eyebrow">What this demonstrates</h4>
            <ul className="mt-3 grid gap-2">
              {p.demonstrates.map((d) => (
                <li key={d} className="text-muted-foreground flex gap-2.5 text-sm leading-relaxed">
                  <span className="bg-accent mt-2 h-1 w-1 shrink-0 rounded-full" aria-hidden />
                  {d}
                </li>
              ))}
            </ul>
          </div>

          <p className="border-border text-muted-foreground mt-7 border-t pt-6 text-sm leading-relaxed">
            {p.honesty}
          </p>
        </div>
      </div>
    </div>
  );
}
