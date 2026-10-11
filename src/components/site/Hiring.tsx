import { ArrowRight, ArrowUpRight } from "lucide-react";
import { profile } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

const interests = [
  "Flutter development",
  "Mobile development",
  "Desktop development",
  "Web development",
  "Admin panels & dashboards",
  "Full-stack product development",
];

export function Hiring() {
  return (
    <Section id="hiring" className="bg-surface-2/50">
      <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-20">
        <Reveal>
          <span className="eyebrow text-accent">09</span>
          <h2 className="mt-4 text-3xl leading-[1.05] font-medium md:text-[2.5rem]">
            Looking for a developer?
          </h2>
          <p className="text-muted-foreground mt-5 leading-relaxed">
            I'm open to roles and contracts where I can build and ship real products.{" "}
            {profile.experience} of practical development across Flutter, web and backend
            integrations — comfortable owning a feature from requirement to production.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {profile.links.resume && profile.links.resume !== "#" ? (
              <a href={profile.links.resume} className="group btn-primary">
                View resume
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            ) : null}
            <a
              href="#contact"
              className="group btn-secondary"
            >
              Let's connect
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
          </div>
        </Reveal>

        <Reveal delay={90} className="border-border bg-card rounded-xl border p-7 md:p-8">
          <h3 className="eyebrow">Interested in work involving</h3>
          <ul className="mt-5 grid">
            {interests.map((item) => (
              <li
                key={item}
                className="border-border flex items-center gap-3 border-b py-3 text-sm last:border-b-0"
              >
                <span className="bg-accent h-1 w-1 rounded-full" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
