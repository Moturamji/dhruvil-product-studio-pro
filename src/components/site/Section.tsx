import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function Section({
  id,
  children,
  className,
  bordered = true,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  bordered?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative scroll-mt-24 py-16 md:py-24 lg:py-28",
        bordered && "hairline-t",
        className,
      )}
    >
      <div className="shell">{children}</div>
    </section>
  );
}

export function SectionHeading({
  index,
  eyebrow,
  title,
  lead,
  align = "left",
  className,
}: {
  index?: string;
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto max-w-2xl text-center",
        className,
      )}
    >
      <div
        className={cn(
          "flex items-center gap-3",
          align === "center" && "justify-center",
        )}
      >
        {index ? <span className="eyebrow text-accent">{index}</span> : null}
        <span className="eyebrow">{eyebrow}</span>
      </div>
      <h2 className="mt-5 text-3xl leading-[1.05] font-medium md:text-[2.75rem]">{title}</h2>
      {lead ? (
        <p className="text-muted-foreground mt-5 text-base leading-relaxed md:text-lg">{lead}</p>
      ) : null}
    </Reveal>
  );
}
