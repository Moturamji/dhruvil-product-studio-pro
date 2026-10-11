import { processSteps, reasons } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { Section, SectionHeading } from "./Section";

export function WhyAndProcess() {
  return (
    <Section id="process">
      <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeading index="07" eyebrow="Why work with me" title="Five specifics" />
          <div className="border-border mt-10 border-t">
            {reasons.map((reason, i) => (
              <Reveal key={reason.title} delay={i * 60}>
                <div className="border-border border-b py-6">
                  <h3 className="text-base font-medium">{reason.title}</h3>
                  <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div>
          <SectionHeading index="08" eyebrow="Process" title="How a project runs" />
          <ol className="mt-10">
            {processSteps.map((step, i) => (
              <Reveal key={step.id} delay={i * 70}>
                <li className="group relative grid grid-cols-[auto_1fr] gap-5 pb-8 last:pb-0">
                  <div className="flex flex-col items-center">
                    <span className="border-border bg-card group-hover:border-accent grid h-9 w-9 shrink-0 place-items-center rounded-full border font-mono text-[11px] transition-colors duration-500">
                      {step.id}
                    </span>
                    {i < processSteps.length - 1 ? (
                      <span className="bg-border mt-1 w-px flex-1" aria-hidden />
                    ) : null}
                  </div>
                  <div className="min-w-0 pt-1.5">
                    <h3 className="text-base font-medium">{step.title}</h3>
                    <p className="text-muted-foreground mt-1.5 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}
