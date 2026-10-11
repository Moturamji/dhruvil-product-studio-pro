import { useCallback, useEffect, useMemo, useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { featuredProject, projectFilters, taskFlow } from "@/data/portfolio";
import { styleCalc } from "@/data/stylecalc";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import { Section, SectionHeading } from "./Section";
import { StyleCalcPreview, StyleCalcShowcase } from "./StyleCalcShowcase";
import { TaskFlowPreview, TaskFlowShowcase } from "./TaskFlowShowcase";
import { MovieTicketPreview, MovieTicketShowcase } from "./MovieTicketShowcase";
import { movieTicket } from "@/data/movieticket";
import { luxTrader } from "@/data/luxtrader";
import { LuxTraderPreview, LuxTraderShowcase } from "./LuxTraderShowcase";
import { LaptopMockup } from "./LaptopMockup";
import { colorPicker } from "@/data/colorpicker";
import { ColorPickerPreview, ColorPickerShowcase } from "./ColorPickerShowcase";
import toolwebFull from "@/assets/toolweb/homepage-full.jpg";


type LiveProject = {
  id: "toolweb" | "stylecalc" | "taskflow" | "movieticket" | "luxtrader" | "colorpicker";
  title: string;
  summary: string;
  category: (typeof projectFilters)[number];
  platform: string;
  role: string;
  tags: string[];
  badge: string;
  badgeTone: "accent" | "outline";
  preview:
    | { type: "cover"; src: string; alt: string }
    | { type: "laptop" }
    | { type: "app"; src: string; alt: string }
    | { type: "mock" }
    | { type: "movie" }
    | { type: "lux" }
    | { type: "colorpicker" };
};

const liveProjects: LiveProject[] = [
  {
    id: "toolweb",
    title: featuredProject.title,
    summary: featuredProject.tagline,
    category: "Web",
    platform: featuredProject.platform,
    role: featuredProject.role,
    tags: featuredProject.technologies.slice(0, 4),
    badge: "Live",
    badgeTone: "accent",
    preview: { type: "laptop" },
  },
  {
    id: "stylecalc",
    title: styleCalc.name,
    summary: styleCalc.tagline,
    category: "Mobile",
    platform: styleCalc.platform,
    role: "Developer / Publisher",
    tags: ["Flutter", "Dart", "Google Play"],
    badge: "Live",
    badgeTone: "accent",
    preview: { type: "app", src: styleCalc.icon, alt: "StyleCalc app icon" },
  },
  {
    id: "taskflow",
    title: taskFlow.title,
    summary: taskFlow.tagline,
    category: taskFlow.category,
    platform: taskFlow.platform,
    role: taskFlow.role,
    tags: taskFlow.tags,
    badge: taskFlow.status,
    badgeTone: "outline",
    preview: { type: "mock" },
  },
  {
    id: "movieticket",
    title: movieTicket.title,
    summary: movieTicket.tagline,
    category: movieTicket.category,
    platform: movieTicket.platform,
    role: movieTicket.role,
    tags: [...movieTicket.tags],
    badge: movieTicket.status,
    badgeTone: "outline",
    preview: { type: "movie" },
  },
  {
    id: "luxtrader",
    title: luxTrader.title,
    summary: luxTrader.tagline,
    category: luxTrader.category,
    platform: luxTrader.platform,
    role: luxTrader.role,
    tags: [...luxTrader.tags],
    badge: luxTrader.status,
    badgeTone: "accent",
    preview: { type: "lux" },
  },
  {
    id: "colorpicker",
    title: colorPicker.title,
    summary: colorPicker.tagline,
    category: colorPicker.category,
    platform: colorPicker.platform,
    role: colorPicker.role,
    tags: [...colorPicker.tags],
    badge: colorPicker.status,
    badgeTone: "outline",
    preview: { type: "colorpicker" },
  },
];

function ToolWebDetail() {
  const p = featuredProject;
  return (
    <div className="border-border bg-card shadow-soft overflow-hidden rounded-2xl border">
      <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
        <div className="bg-surface-2 relative order-2 flex items-center justify-center overflow-hidden p-5 md:p-8 lg:order-1">
          <div aria-hidden className="grid-field pointer-events-none absolute inset-0 opacity-70" />
          <div className="relative w-full max-w-[560px]">
            <LaptopMockup
              src={toolwebFull}
              alt={p.coverAlt}
              label="Scroll inside the screen to explore the full ToolWeb homepage"
              width={1794}
              height={3737}
              priority
            />
          </div>
        </div>


        <div className="order-1 flex flex-col p-7 md:p-10 lg:order-2">
          <div className="flex items-center gap-3">
            <span className="eyebrow text-accent">Live product</span>
            <span className="bg-border-strong h-3 w-px" aria-hidden />
            <span className="eyebrow">{p.platform}</span>
          </div>
          <h3 className="mt-5 text-3xl font-medium md:text-4xl">{p.title}</h3>
          <p className="text-muted-foreground mt-2 text-base">{p.tagline}</p>
          <p className="text-muted-foreground mt-5 text-sm leading-relaxed">{p.summary}</p>

          <ul className="mt-6 flex flex-wrap gap-1.5">
            {p.tools.map((tool) => (
              <li
                key={tool}
                className="chip"
              >
                {tool}
              </li>
            ))}
          </ul>

          <dl className="border-border mt-7 grid gap-x-8 gap-y-3 border-t pt-6 sm:grid-cols-2">
            <div>
              <dt className="eyebrow">Role</dt>
              <dd className="mt-1 text-sm">{p.role}</dd>
            </div>
            <div>
              <dt className="eyebrow">Technologies</dt>
              <dd className="mt-1 text-sm">{p.technologies.join(" · ")}</dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="eyebrow">Focus</dt>
              <dd className="mt-1 text-sm">{p.focus.join(" · ")}</dd>
            </div>
          </dl>

          <a
            href={p.link}
            target="_blank"
            rel="noreferrer noopener"
            className="group btn-primary mt-8 w-fit"
          >
            Visit ToolWeb
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </div>
  );
}

function DetailModal({
  title,
  onClose,
  children,
}: {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${title} case study`}
      className="bg-foreground/60 fixed inset-0 z-[65] overflow-y-auto p-0 sm:p-6"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-background border-border relative mx-auto w-full max-w-6xl border sm:rounded-2xl"
      >
        <div className="border-border bg-background/95 sticky top-0 z-10 flex items-center justify-between gap-4 border-b px-5 py-3 backdrop-blur-sm sm:rounded-t-2xl sm:px-7">
          <span className="eyebrow truncate">{title} · Case study</span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close case study"
            className="border-border hover:bg-surface-2 grid h-11 w-11 shrink-0 place-items-center rounded-full border transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="p-5 sm:p-7 md:p-9">{children}</div>
      </div>
    </div>
  );
}

export function Work() {
  const [filter, setFilter] = useState<(typeof projectFilters)[number]>("All");
  const [openId, setOpenId] = useState<LiveProject["id"] | null>(null);
  const close = useCallback(() => setOpenId(null), []);

  const visibleLive = useMemo(
    () => (filter === "All" ? liveProjects : liveProjects.filter((p) => p.category === filter)),
    [filter],
  );
  const total = visibleLive.length;
  const openProject = liveProjects.find((p) => p.id === openId) ?? null;

  return (
    <Section id="work">
      <SectionHeading
        index="05"
        eyebrow="Selected work"
        title="Products, applications and interfaces"
        lead="ToolWeb and StyleCalc are live products I built and shipped; TaskFlow is a personal Flutter app I built and use locally. Open any card to read the full case study."
      />

      <div className="border-border mt-12 flex flex-wrap items-center gap-x-6 gap-y-2 border-b pb-4">
        {projectFilters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            aria-pressed={filter === f}
            className={cn(
              "relative py-1 text-sm transition-colors",
              filter === f ? "text-foreground" : "text-muted-foreground hover:text-foreground",
            )}
          >
            {f}
            <span
              aria-hidden
              className={cn(
                "bg-accent absolute -bottom-[17px] left-0 h-px w-full origin-left transition-transform duration-500",
                filter === f ? "scale-x-100" : "scale-x-0",
              )}
            />
          </button>
        ))}
        <span className="text-muted-foreground ml-auto font-mono text-[11px]">
          {String(total).padStart(2, "0")} projects
        </span>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {visibleLive.map((project, i) => (
          <Reveal key={project.id} delay={i * 60} className="h-full">
            <button
              type="button"
              onClick={() => setOpenId(project.id)}
              aria-label={`Open ${project.title} case study`}
              className="border-border bg-card shadow-soft hover:shadow-lift group focus-visible:outline-accent flex h-full w-full flex-col overflow-hidden rounded-xl border text-left transition-shadow duration-500 focus-visible:outline-2 focus-visible:outline-offset-4"
            >
              <div className="bg-surface-2 border-border relative overflow-hidden border-b">
                <div aria-hidden className="grid-field pointer-events-none absolute inset-0 opacity-60" />
                {project.preview.type === "cover" ? (
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={project.preview.src}
                      alt={project.preview.alt}
                      loading="lazy"
                      decoding="async"
                      sizes="(min-width: 768px) 46vw, 92vw"
                      className="h-full w-full object-cover object-top transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                    />
                  </div>
                ) : project.preview.type === "laptop" ? (
                  <div className="flex aspect-[16/9] items-center justify-center overflow-hidden px-6 pt-5">
                    <div className="w-full max-w-[300px]">
                      <LaptopMockup
                        src={toolwebFull}
                        alt={featuredProject.coverAlt}
                        width={1794}
                        height={3737}
                      />
                    </div>
                  </div>
                ) : project.preview.type === "mock" ? (
                  <TaskFlowPreview />
                ) : project.preview.type === "movie" ? (
                  <MovieTicketPreview />
                ) : project.preview.type === "lux" ? (
                  <LuxTraderPreview />
                ) : project.preview.type === "colorpicker" ? (
                  <ColorPickerPreview />
                ) : (
                  <StyleCalcPreview />
                )}
                <span className="pill pill-overlay absolute top-4 left-4">{project.category}</span>
                <span
                  className={cn(
                    "pill absolute top-4 right-4",
                    project.badgeTone === "accent" ? "pill-accent pill-live" : "pill-overlay",
                  )}
                >
                  {project.badge}
                </span>

              </div>

              <div className="flex flex-1 flex-col p-6 md:p-8">
                <span className="eyebrow">{project.platform}</span>
                <h3 className="mt-4 text-lg font-medium md:text-xl">{project.title}</h3>
                <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                  {project.summary}
                </p>
                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {project.tags.map((t) => (
                    <li
                      key={t}
                      className="chip"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
                <div className="border-border mt-auto flex items-center justify-between gap-4 border-t pt-6 text-sm">
                  <span className="text-muted-foreground">{project.role}</span>
                  <span className="inline-flex items-center gap-1.5 font-medium">
                    View case study
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </div>
            </button>
          </Reveal>
        ))}

      </div>

      {openProject ? (
        <DetailModal title={openProject.title} onClose={close}>
          {openProject.id === "toolweb" ? (
            <ToolWebDetail />
          ) : openProject.id === "stylecalc" ? (
            <StyleCalcShowcase embedded />
          ) : openProject.id === "taskflow" ? (
            <TaskFlowShowcase />
          ) : openProject.id === "luxtrader" ? (
            <LuxTraderShowcase />
          ) : openProject.id === "colorpicker" ? (
            <ColorPickerShowcase />
          ) : (
            <MovieTicketShowcase />
          )}
        </DetailModal>
      ) : null}
    </Section>
  );
}
