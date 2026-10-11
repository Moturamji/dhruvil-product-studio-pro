import { ArrowRight } from "lucide-react";
import { buildCards } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { Section, SectionHeading } from "./Section";

export function WhatIBuild() {
  return (
    <Section id="build" className="bg-surface-2/50">
      <SectionHeading
        index="02"
        eyebrow="For clients"
        title="What can I build for you?"
        lead="Tell me the requirement and I'll build the product that fits it — not the one that fits a single framework."
      />

      <div className="border-border mt-14 grid border-t border-l md:grid-cols-2 lg:grid-cols-3">
        {buildCards.map((card, i) => (
          <Reveal
            key={card.id}
            delay={i * 60}
            className="border-border bg-card group relative border-r border-b"
          >
            <a href="#contact" className="flex h-full flex-col p-7 md:p-8">
              <span
                aria-hidden
                className="bg-accent absolute inset-x-0 top-0 h-px origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
              />
              <span className="eyebrow">{card.category}</span>
              <h3 className="mt-5 text-xl font-medium">{card.title}</h3>
              <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
                {card.description}
              </p>
              <ul className="mt-6 space-y-1.5">
                {card.points.map((p) => (
                  <li key={p} className="text-muted-foreground flex items-center gap-2 text-sm">
                    <span className="bg-border-strong h-px w-3" aria-hidden />
                    {p}
                  </li>
                ))}
              </ul>
              <span className="mt-auto flex items-center gap-1.5 pt-8 text-sm font-medium">
                Discuss this
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
