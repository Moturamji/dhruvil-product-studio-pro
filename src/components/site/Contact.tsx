import { useState, type FormEvent } from "react";
import { ArrowUpRight, Mail } from "lucide-react";
import { profile, projectTypes } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

const channels = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "LinkedIn", value: profile.links.linkedin.replace(/^https?:\/\//, ""), href: profile.links.linkedin },
  { label: "GitHub", value: profile.links.github.replace(/^https?:\/\//, ""), href: profile.links.github },
].filter((c) => c.href && c.href !== "#");

const fieldClass =
  "w-full rounded-md border border-input bg-card px-3.5 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-accent";

export function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = `Project enquiry — ${data.get("projectType")}`;
    const body = [
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Project type: ${data.get("projectType")}`,
      `Budget: ${data.get("budget") || "Not specified"}`,
      "",
      String(data.get("message") ?? ""),
    ].join("\n");
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <Section id="contact">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <Reveal>
          <span className="eyebrow text-accent">11</span>
          <h2 className="mt-4 text-3xl leading-[1.05] font-medium md:text-[2.5rem]">
            Get in touch
          </h2>
          <p className="text-muted-foreground mt-5 leading-relaxed">
            Send a short description of what you need — platform, scope and timeline if you have
            them. I'll reply with an honest take on how I'd build it.
          </p>

          <ul className="border-border mt-10 border-t">
            {channels.map((c) => (
              <li key={c.label} className="border-border border-b">
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer noopener"
                  className="group flex items-center justify-between gap-4 py-4"
                >
                  <span className="eyebrow">{c.label}</span>
                  <span className="text-muted-foreground group-hover:text-foreground flex min-w-0 items-center gap-1.5 truncate text-sm transition-colors">
                    {c.value}
                    <ArrowUpRight className="h-3.5 w-3.5 shrink-0" />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal
          delay={90}
          className="border-border bg-card shadow-soft rounded-2xl border p-6 md:p-9"
        >
          <form onSubmit={handleSubmit} className="grid gap-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="grid gap-2">
                <label htmlFor="name" className="eyebrow">
                  Name
                </label>
                <input id="name" name="name" required className={fieldClass} placeholder="Your name" />
              </div>
              <div className="grid gap-2">
                <label htmlFor="email" className="eyebrow">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className={fieldClass}
                  placeholder="you@company.com"
                />
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="grid gap-2">
                <label htmlFor="projectType" className="eyebrow">
                  Project type
                </label>
                <select id="projectType" name="projectType" className={fieldClass} defaultValue="Website">
                  {projectTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
              <div className="grid gap-2">
                <label htmlFor="budget" className="eyebrow">
                  Budget <span className="normal-case">(optional)</span>
                </label>
                <input
                  id="budget"
                  name="budget"
                  className={fieldClass}
                  placeholder="Range, or not sure yet"
                />
              </div>
            </div>

            <div className="grid gap-2">
              <label htmlFor="message" className="eyebrow">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className={`${fieldClass} resize-y`}
                placeholder="What are you trying to build?"
              />
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="submit"
                className="group btn-primary"
              >
                <Mail className="h-4 w-4" />
                Send enquiry
              </button>
              <p className="text-muted-foreground text-xs" aria-live="polite">
                {sent
                  ? "Your email client should now be open with the details filled in."
                  : "Opens your email client with the details prefilled."}
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
