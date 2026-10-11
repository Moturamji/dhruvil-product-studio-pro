import { aiTools, skillGroups } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { Section, SectionHeading } from "./Section";

export function Skills() {
  return (
    <Section id="skills" className="bg-surface-2/50">
      <SectionHeading
        index="04"
        eyebrow="Technology"
        title="The stack I work in"
        lead="A focused toolset I use day to day, rather than a list of everything I've ever touched."
      />

      <div className="mt-14 grid gap-5 md:grid-cols-2">
        {skillGroups.map((group, i) => (
          <Reveal
            key={group.label}
            delay={i * 70}
            className="border-border bg-card shadow-soft hover:shadow-lift rounded-xl border p-7 transition-shadow duration-500 md:p-8"
          >
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="eyebrow">{group.label}</h3>
              <span className="text-muted-foreground font-mono text-[11px]">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <ul className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2">
              {group.items.map((item) => (
                <li key={item} className="text-xl font-medium tracking-tight md:text-2xl">
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground mt-5 text-sm leading-relaxed">{group.note}</p>
          </Reveal>
        ))}
      </div>

      <Reveal
        delay={120}
        className="border-border/80 mt-5 flex flex-col gap-4 rounded-xl border border-dashed p-6 sm:flex-row sm:items-center sm:justify-between md:px-8"
      >
        <div className="min-w-0">
          <h3 className="eyebrow">AI-assisted development</h3>
          <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
            Part of the workflow — used for prototyping, refactoring, debugging and speed. Not the
            product, and not the skillset I'm selling.
          </p>
        </div>
        <ul className="flex flex-wrap gap-2">
          {aiTools.map((tool) => (
            <li
              key={tool}
              className="chip px-2.5 text-[11px]"
            >
              {tool}
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
