import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/site/About";
import { ClientCTA } from "@/components/site/ClientCTA";
import { Contact } from "@/components/site/Contact";
import { Experience } from "@/components/site/Experience";
import { Hero } from "@/components/site/Hero";
import { Hiring } from "@/components/site/Hiring";
import { Services } from "@/components/site/Services";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteNav } from "@/components/site/SiteNav";
import { Skills } from "@/components/site/Skills";
import { WhatIBuild } from "@/components/site/WhatIBuild";
import { WhyAndProcess } from "@/components/site/WhyAndProcess";
import { Work } from "@/components/site/Work";

const title = "Dhruvil Bhingradiya — Full-Stack Developer | Web, Mobile & Desktop Apps";
const description =
  "Dhruvil Bhingradiya builds websites, web applications, Flutter mobile and desktop apps, admin panels and API integrations. 3+ years of practical development experience.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Dhruvil Bhingradiya",
          jobTitle: "Full-Stack Developer — Web, Mobile & Desktop Applications",
          description,
          knowsAbout: [
            "Flutter",
            "Dart",
            "Node.js",
            "REST APIs",
            "Firebase",
            "Supabase",
            "Web development",
            "Mobile app development",
            "Desktop app development",
            "Admin panel development",
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "StyleCalc",
          applicationCategory: "UtilitiesApplication",
          operatingSystem: "Android",
          author: { "@type": "Person", name: "Dhruvil Bhingradiya" },
          description:
            "StyleCalc is a modern and customizable Android calculator built with Flutter, featuring Minimal, NeoCalc, Elegant, Liquid Glass, Neon and Dark themes.",
          url: "https://play.google.com/store/apps/details?id=com.fluttercraftone.stylecalc",
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        }),
      },
    ],

  }),
  component: Index,
});

function Index() {
  return (
    <div className="grain min-h-screen">
      <a
        href="#home"
        className="focus:bg-foreground focus:text-background sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-md focus:px-4 focus:py-2 focus:text-sm"
      >
        Skip to content
      </a>
      <SiteNav />
      <main>
        <Hero />
        <About />
        <WhatIBuild />
        <Services />
        <Skills />
        <Work />
        <Experience />
        <WhyAndProcess />
        <Hiring />
        <ClientCTA />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
