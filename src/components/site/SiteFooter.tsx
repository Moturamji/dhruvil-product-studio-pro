import { navItems, profile } from "@/data/portfolio";

export function SiteFooter() {
  return (
    <footer className="hairline-t py-14">
      <div className="shell">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <div className="text-lg font-medium tracking-tight">{profile.name}</div>
            <p className="text-muted-foreground mt-2 font-mono text-[11px] tracking-[0.14em] uppercase">
              Web • Mobile • Desktop • Admin • Product Development
            </p>
            <p className="text-muted-foreground mt-4 max-w-sm text-sm leading-relaxed">
              I build practical digital products around real requirements — from websites and web
              applications to Flutter mobile and desktop apps, backed by modern APIs and cloud
              platforms.
            </p>
          </div>

          <nav aria-label="Footer">
            <h2 className="eyebrow">Navigate</h2>
            <ul className="mt-4 grid grid-cols-2 gap-y-2 md:grid-cols-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="eyebrow">Elsewhere</h2>
            <ul className="mt-4 grid gap-2">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                >
                  Email
                </a>
              </li>
              <li>
                <a
                  href="https://tool-web.dev"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                >
                  ToolWeb
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-border text-muted-foreground mt-12 flex flex-col gap-2 border-t pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </span>
          <span className="font-mono">{profile.shortRole}</span>
        </div>
      </div>
    </footer>
  );
}
