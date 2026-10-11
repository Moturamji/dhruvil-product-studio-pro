import { ArrowRight, ArrowUpRight } from "lucide-react";
import { profile } from "@/data/portfolio";
import { HeroComposition } from "./HeroComposition";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
      {/* background system: fine technical grid, fading outward */}
      <div
        aria-hidden
        className="grid-field pointer-events-none absolute inset-0 [mask-image:radial-gradient(120%_80%_at_50%_0%,black,transparent_70%)] opacity-70"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-b-full bg-[radial-gradient(ellipse_at_top,var(--surface),transparent_65%)]"
      />

      <div className="shell relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <div
              className="animate-rise border-border text-muted-foreground inline-flex items-center gap-2 rounded-full border px-3 py-1"
              style={{ animationDelay: "60ms" }}
            >
              <span className="bg-accent h-1.5 w-1.5 rounded-full" />
              <span className="font-mono text-[11px] tracking-[0.12em] uppercase">
                Available for freelance & full-time
              </span>
            </div>

            <h1
              className="animate-rise mt-7 text-[2.25rem] leading-[1.06] font-medium tracking-[-0.03em] sm:text-5xl lg:text-[3.9rem] lg:leading-[1.03]"
              style={{ animationDelay: "140ms" }}
            >
              I build digital products for businesses & ideas.
            </h1>

            <p
              className="animate-rise text-muted-foreground mt-6 max-w-xl text-base leading-relaxed sm:text-lg"
              style={{ animationDelay: "220ms" }}
            >
              Websites, web applications, mobile apps, desktop software and admin systems — built
              around your requirements. {profile.experience} of hands-on development, with Flutter
              as a core part of the stack.
            </p>

            <div
              className="animate-rise mt-8 flex flex-wrap items-center gap-3"
              style={{ animationDelay: "300ms" }}
            >
              <a href="#contact" className="group btn-primary">
                Start a project
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>
              <a href="#work" className="btn-secondary">
                View my work
              </a>
              {profile.links.resume && profile.links.resume !== "#" ? (
                <a href={profile.links.resume} className="group btn-ghost">
                  Download resume
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              ) : null}

            </div>

            <div
              className="animate-rise mt-12 flex flex-wrap items-center gap-x-4 gap-y-2"
              style={{ animationDelay: "380ms" }}
            >
              {profile.disciplines.map((d, i) => (
                <span key={d} className="flex items-center gap-4">
                  <span className="font-mono text-[11px] tracking-[0.14em] uppercase">{d}</span>
                  {i < profile.disciplines.length - 1 ? (
                    <span className="bg-border-strong h-3 w-px" aria-hidden />
                  ) : null}
                </span>
              ))}
            </div>
            <p className="text-muted-foreground mt-3 text-sm">
              {profile.shortRole} — Flutter, Dart, Node.js, REST APIs, Firebase, Supabase.
            </p>
          </div>

          <div
            className="animate-rise relative mt-10 pb-4 sm:mt-12 lg:mt-0 lg:pb-6"
            style={{ animationDelay: "260ms" }}
          >
            <HeroComposition />
          </div>

        </div>
      </div>
    </section>
  );
}
