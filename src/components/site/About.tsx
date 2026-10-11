import { profile } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

const facts = [
  { label: "Experience", value: profile.experience },
  { label: "Core stack", value: "Flutter · Dart · Node.js" },
  { label: "Platforms", value: "Web · Mobile · Desktop" },
  { label: "Availability", value: "Freelance & full-time" },
];

export function About() {
  return (
    <Section id="about">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <Reveal>
          <span className="eyebrow text-accent">01</span>
          <h2 className="mt-4 text-3xl leading-[1.05] font-medium md:text-[2.5rem]">About</h2>
          <div className="border-border mt-8 border-t">
            <dl className="grid">
              {facts.map((f) => (
                <div key={f.label} className="border-border flex justify-between gap-4 border-b py-3.5">
                  <dt className="text-muted-foreground font-mono text-[11px] tracking-[0.12em] uppercase">
                    {f.label}
                  </dt>
                  <dd className="text-right text-sm">{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>

        <div className="space-y-6">
          <Reveal delay={80}>
            <p className="text-xl leading-relaxed font-medium md:text-2xl md:leading-[1.45]">
              I'm {profile.name}, a developer who builds software products across mobile, web and
              desktop — from a single marketing site to an application with its own admin panel and
              API layer.
            </p>
          </Reveal>
          <Reveal delay={140}>
            <p className="text-muted-foreground leading-relaxed">
              Over the last {profile.experience} I've worked on Flutter mobile and desktop
              applications, websites and web applications, admin dashboards, REST API integrations
              and Firebase/Supabase backends. Most of that work has been end-to-end: understanding
              the requirement, choosing the stack, building it, then debugging and deploying it.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-muted-foreground leading-relaxed">
              Flutter is a major part of my stack, especially where one codebase should cover
              Android, iOS and desktop. It isn't the whole answer though — the right build depends
              on what the product actually needs, and I pick the platform accordingly.
            </p>
          </Reveal>
          <Reveal delay={260}>
            <p className="text-muted-foreground leading-relaxed">
              I also use modern AI coding agents — Claude Code, OpenAI Codex, Antigravity — as part
              of the workflow for prototyping, refactoring and debugging. They speed the work up;
              the architecture decisions and the shipped result are mine.
            </p>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
