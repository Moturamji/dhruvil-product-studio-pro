import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

export function ClientCTA() {
  return (
    <section className="hairline-t relative overflow-hidden py-24 md:py-32">
      <div
        aria-hidden
        className="grid-field pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(80%_80%_at_50%_50%,black,transparent_75%)]"
      />
      <div className="shell relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="eyebrow text-accent">10</span>
          <h2 className="mt-5 text-3xl leading-[1.05] font-medium md:text-5xl">
            Have a product in mind? Let's build it.
          </h2>
          <p className="text-muted-foreground mx-auto mt-6 max-w-2xl leading-relaxed md:text-lg">
            Whether you need a website, web application, mobile app, desktop software or admin
            panel, tell me what you're trying to build and I'll help turn the requirement into a
            working product.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a
              href="#contact"
              className="group btn-primary"
            >
              Start a project
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#work"
              className="btn-secondary"
            >
              View my work
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
