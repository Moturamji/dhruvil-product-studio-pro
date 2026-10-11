import { experience } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { Section, SectionHeading } from "./Section";

export function Experience() {
  return (
    <Section id="experience" className="bg-surface-2/50">
      <SectionHeading
        index="06"
        eyebrow="Experience"
        title="Where the hours have gone"
        lead="Independent and freelance development work. No invented employers, no padded history."
      />

      <Reveal className="border-border bg-card shadow-soft mt-14 rounded-2xl border p-7 md:p-10">
        <div className="grid gap-8 md:grid-cols-[auto_1fr] md:gap-12">
          <div className="md:w-44">
            <div className="text-accent font-mono text-sm">{experience.period}</div>
            <div className="text-muted-foreground mt-1 text-sm">{experience.context}</div>
          </div>
          <div>
            <h3 className="text-xl font-medium md:text-2xl">{experience.role}</h3>
            <p className="text-muted-foreground mt-3 max-w-2xl leading-relaxed">
              {experience.intro}
            </p>
            <ul className="border-border mt-8 grid gap-x-8 border-t pt-6 sm:grid-cols-2 lg:grid-cols-3">
              {experience.focus.map((f) => (
                <li
                  key={f}
                  className="border-border text-muted-foreground border-b py-2.5 text-sm last:border-b-0 sm:border-b"
                >
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
