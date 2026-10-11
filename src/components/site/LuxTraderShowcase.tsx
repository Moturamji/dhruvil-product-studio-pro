import { ArrowRight, ArrowUpRight } from "lucide-react";

import { luxAdminShots, luxShots, luxTrader, type LuxShot } from "@/data/luxtrader";
import { cn } from "@/lib/utils";
import { LuxLaptop } from "./LuxLaptop";
import { LuxPhone } from "./LuxPhone";
import { Reveal } from "./Reveal";

/* ------------------------------------------------------------------ */
/* Shared blocks                                                       */
/* ------------------------------------------------------------------ */

function Block({
  index,
  eyebrow,
  title,
  lead,
  children,
}: {
  index: string;
  eyebrow: string;
  title: string;
  lead?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="border-border border-t px-5 py-12 md:px-10 md:py-16">
      <Reveal className="max-w-3xl">
        <div className="flex items-center gap-3">
          <span className="eyebrow text-accent">{index}</span>
          <span className="eyebrow">{eyebrow}</span>
        </div>
        <h3 className="mt-4 text-2xl leading-tight font-medium md:text-[2rem]">{title}</h3>
        {lead ? (
          <p className="text-muted-foreground mt-4 text-sm leading-relaxed md:text-base">{lead}</p>
        ) : null}
      </Reveal>
      {children ? <div className="mt-9">{children}</div> : null}
    </section>
  );
}

/** Horizontal (desktop) / stacked (mobile) pipeline diagram. */
function Flow({ steps, accentLast = false }: { steps: readonly string[]; accentLast?: boolean }) {
  return (
    <ol className="flex flex-col gap-2 md:flex-row md:flex-wrap md:items-stretch">
      {steps.map((step, i) => (
        <li key={step} className="flex items-center gap-2 md:contents">
          <div
            className={cn(
              "border-border bg-surface-2 flex flex-1 items-center rounded-lg border px-4 py-3 text-sm md:flex-none",
              accentLast && i === steps.length - 1 && "border-accent/50 text-accent",
            )}
          >
            <span className="text-muted-foreground mr-3 font-mono text-[10px]">
              {String(i + 1).padStart(2, "0")}
            </span>
            {step}
          </div>
          {i < steps.length - 1 ? (
            <ArrowRight
              aria-hidden
              className="text-muted-foreground h-4 w-4 shrink-0 rotate-90 self-center md:mx-1 md:rotate-0"
            />
          ) : null}
        </li>
      ))}
    </ol>
  );
}

/** A consistent row of real app screenshots — one device family, one scale. */
function ShotRow({ shots, className }: { shots: readonly LuxShot[]; className?: string }) {
  return (
    <div
      className={cn(
        "-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 md:mx-0 md:grid md:grid-cols-4 md:gap-6 md:overflow-visible md:px-0",
        className,
      )}
    >
      {shots.map((s) => (
        <LuxPhone
          key={s.label}
          shot={s}
          className="w-[136px] shrink-0 snap-start md:w-full md:max-w-[176px] md:justify-self-center"
        />
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Card preview                                                        */
/* ------------------------------------------------------------------ */

export function LuxTraderPreview() {
  return (
    <div className="relative flex aspect-[16/9] items-start justify-center overflow-hidden px-4">
      <div className="flex w-full max-w-[440px] items-start justify-center gap-3 pt-5">
        <LuxPhone
          shot={luxShots.courses}
          caption={false}
          className="mt-5 max-w-[96px] rotate-[-8deg] sm:max-w-[108px]"
        />
        <LuxPhone
          shot={luxShots.homeFree}
          caption={false}
          className="z-10 max-w-[104px] transition-transform duration-700 group-hover:-translate-y-2 sm:max-w-[118px]"
        />
        <LuxPhone
          shot={luxShots.coursePremium}
          caption={false}
          className="mt-5 max-w-[96px] rotate-[8deg] sm:max-w-[108px]"
        />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Case study                                                          */
/* ------------------------------------------------------------------ */

export function LuxTraderShowcase() {
  const p = luxTrader;

  return (
    <div className="border-border bg-card shadow-soft overflow-hidden rounded-2xl border">
      {/* 1 — Hero */}
      <section className="relative px-5 py-12 md:px-10 md:py-16">
        <div aria-hidden className="grid-field pointer-events-none absolute inset-0 opacity-50" />
        <div className="relative grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <Reveal>
            <div className="flex flex-wrap items-center gap-3">
              <span className="pill pill-accent">{p.status}</span>
              <span className="eyebrow">{p.domain}</span>
            </div>
            <h3 className="mt-5 text-3xl leading-[1.05] font-medium md:text-5xl">{p.title}</h3>
            <p className="text-accent mt-3 text-base md:text-lg">{p.tagline}</p>
            <p className="text-muted-foreground mt-5 max-w-2xl text-sm leading-relaxed md:text-base">
              {p.hero}
            </p>

            <ul className="mt-7 flex flex-wrap gap-1.5">
              {p.delivery.map((d) => (
                <li key={d} className="chip">
                  {d}
                </li>
              ))}
            </ul>

            <dl className="border-border mt-8 grid gap-x-8 gap-y-4 border-t pt-6 sm:grid-cols-2">
              <div>
                <dt className="eyebrow">Role</dt>
                <dd className="mt-1 text-sm">{p.role}</dd>
              </div>
              <div>
                <dt className="eyebrow">Engagement</dt>
                <dd className="mt-1 text-sm">{p.client}</dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="eyebrow">Stack</dt>
                <dd className="mt-1 text-sm">{p.platform}</dd>
              </div>
            </dl>

            <a
              href={p.link}
              target="_blank"
              rel="noreferrer noopener"
              className="group btn-primary mt-8 w-fit"
            >
              View Play Store listing
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Reveal>

          <Reveal delay={80}>
            <div className="flex items-start justify-center gap-4">
              <LuxPhone
                shot={luxShots.courses}
                caption={false}
                className="mt-8 max-w-[132px] rotate-[-6deg] md:max-w-[150px]"
              />
              <LuxPhone
                shot={luxShots.homeFree}
                caption={false}
                priority
                className="z-10 max-w-[148px] md:max-w-[168px]"
              />
              <LuxPhone
                shot={luxShots.coursePremium}
                caption={false}
                className="mt-8 max-w-[132px] rotate-[6deg] md:max-w-[150px]"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Highlight cards */}
      <section className="border-border border-t px-5 py-12 md:px-10 md:py-16">
        <Reveal>
          <span className="eyebrow">What was built</span>
        </Reveal>
        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {p.highlights.map((h, i) => (
            <Reveal key={h.title} delay={i * 50}>
              <div className="border-border bg-surface-2 h-full rounded-xl border p-6">
                <h4 className="text-base font-medium">{h.title}</h4>
                <p className="text-muted-foreground mt-2 text-sm leading-relaxed">{h.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 2 — Product experience */}
      <Block
        index="02"
        eyebrow="Product experience"
        title="A complete learning loop, not a video list"
        lead={p.overview}
      >
        <ul className="mb-10 grid gap-x-8 gap-y-2 sm:grid-cols-2">
          {p.productExperience.map((item) => (
            <li key={item} className="text-muted-foreground flex gap-2 text-sm">
              <span aria-hidden className="text-accent">
                —
              </span>
              {item}
            </li>
          ))}
        </ul>
        <ShotRow
          shots={[luxShots.homeFree, luxShots.homePromo, luxShots.courses, luxShots.courseFree]}
        />
        <p className="text-muted-foreground mt-6 text-xs leading-relaxed">
          The home screen and course details each appear twice on purpose: the two home captures show
          the free-learning rail and the promotional / premium surface, and the two course-details
          captures show the free enrolment path next to the paid, backend-priced one.
        </p>
        <div className="mt-8">
          <ShotRow
            shots={[
              luxShots.coursePremium,
              luxShots.dailyTips,
              luxShots.profile,
              luxShots.splash,
            ]}
          />
        </div>
      </Block>

      {/* 3 — Admin platform */}
      <Block
        index="03"
        eyebrow="Admin platform"
        title="A custom admin panel controlling the whole ecosystem"
        lead="Courses, lessons, users, payments, tips and promotional content were all managed from one panel wired to the Node.js backend and Firebase services."
      >
        <div className="bg-surface-2 border-border relative overflow-hidden rounded-xl border p-5 md:p-8">
          <div aria-hidden className="grid-field pointer-events-none absolute inset-0 opacity-60" />
          <div className="relative grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
            {luxAdminShots.map((s, i) => (
              <LuxLaptop key={s.label} shot={s} priority={i === 0} />
            ))}
          </div>
        </div>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {p.adminScreens.map((s) => (
            <li key={s.label} className="border-border rounded-lg border p-4">
              <p className="text-sm font-medium">{s.label}</p>
              <p className="text-muted-foreground mt-1 text-xs leading-relaxed">{s.note}</p>
            </li>
          ))}
        </ul>

      </Block>

      {/* 4 — Video processing */}
      <Block
        index="04"
        eyebrow="Video infrastructure"
        title="Node.js video processing and HLS delivery"
        lead={p.videoNote}
      >
        <Flow steps={p.videoPipeline} accentLast />
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {[
            {
              t: "Source upload",
              b: "Admins uploaded a high-quality source video (e.g. 1080p) through the admin panel.",
            },
            {
              t: "Transcoding",
              b: "The Node.js server generated 720p, 480p and other required quality variants.",
            },
            {
              t: "Segmented streaming",
              b: "Variants were packaged as HLS so the app streams segments instead of one large file.",
            },
          ].map((c) => (
            <div key={c.t} className="border-border bg-surface-2 rounded-xl border p-5">
              <p className="text-sm font-medium">{c.t}</p>
              <p className="text-muted-foreground mt-2 text-xs leading-relaxed">{c.b}</p>
            </div>
          ))}
        </div>
      </Block>

      {/* 5 — Dynamic payments */}
      <Block
        index="05"
        eyebrow="Payments"
        title="Dynamic payment configuration"
        lead={p.paymentNote}
      >
        <Flow steps={p.paymentFlow} accentLast />
        <p className="text-muted-foreground mt-6 max-w-2xl text-sm leading-relaxed">
          Razorpay handled processing. Because the active configuration lived in the backend rather
          than the Flutter build, switching it was an admin action — not a release cycle.
        </p>
      </Block>

      {/* 6 — Firebase */}
      <Block
        index="06"
        eyebrow="Cloud services"
        title="Firebase architecture"
        lead="Firebase covered identity, structured data, media storage, serverless operations and messaging. Video transcoding stayed outside Firebase, on the dedicated Node.js server."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {p.firebase.map((f) => (
            <div key={f.label} className="border-border rounded-xl border p-5">
              <p className="text-sm font-medium">{f.label}</p>
              <p className="text-muted-foreground mt-2 text-xs leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
        <div className="border-border bg-surface-2 mt-6 rounded-xl border p-5">
          <p className="eyebrow">Security posture</p>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {p.security.map((s) => (
              <li key={s} className="text-muted-foreground text-sm">
                {s}
              </li>
            ))}
          </ul>
        </div>
      </Block>

      {/* 7 — Content management */}
      <Block
        index="07"
        eyebrow="Content operations"
        title="Content the client could keep changing"
        lead="Promotional sections, tips and course content were admin-driven, so the app surface stayed current without a new release for every change."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <div>
            <Flow steps={p.contentFlow} />
            <ul className="mt-5 flex flex-wrap gap-1.5">
              {p.contentManagement.map((c) => (
                <li key={c} className="chip">
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow">Daily tips & notifications</p>
            <div className="mt-3">
              <Flow steps={p.tipsFlow} />
            </div>
          </div>
        </div>
      </Block>

      {/* 8 — Production architecture */}
      <Block
        index="08"
        eyebrow="Architecture"
        title="Three layers, clear responsibilities"
        lead="Client, backend and cloud infrastructure stayed separated — the Node.js processing server is deliberately outside the Firebase layer."
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {p.architecture.map((layer, i) => (
            <div key={layer.layer} className="border-border bg-surface-2 rounded-xl border p-6">
              <div className="flex items-center gap-3">
                <span className="text-accent font-mono text-[11px]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="eyebrow">{layer.layer}</span>
              </div>
              <ul className="mt-4 space-y-2">
                {layer.items.map((item) => (
                  <li key={item} className="border-border rounded-md border bg-transparent px-3 py-2 text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Block>

      {/* Outcome */}
      <section className="border-border border-t px-5 py-12 md:px-10 md:py-16">
        <Reveal className="max-w-3xl">
          <span className="eyebrow text-accent">Outcome</span>
          <p className="mt-4 text-xl leading-snug font-medium md:text-2xl">{p.outcome}</p>
        </Reveal>
        <ul className="mt-8 flex flex-wrap gap-1.5">
          {p.outcomePoints.map((o) => (
            <li key={o} className="chip">
              {o}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
