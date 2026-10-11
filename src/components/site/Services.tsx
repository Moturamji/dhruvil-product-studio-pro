import { services } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { Section, SectionHeading } from "./Section";

export function Services() {
  return (
    <Section id="services">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <SectionHeading
          index="03"
          eyebrow="Services"
          title="How I can help"
          lead="Direct, scoped work — from a single website to an application with its own backend and admin system."
          className="lg:sticky lg:top-28 lg:self-start"
        />

        <div className="border-border border-t">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 50}>
              <div className="border-border group grid gap-2 border-b py-6 md:grid-cols-[auto_1fr] md:gap-8">
                <span className="text-muted-foreground group-hover:text-accent font-mono text-[11px] transition-colors md:pt-1.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-lg font-medium">{service.title}</h3>
                  <p className="text-muted-foreground mt-1.5 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
