import { usePointerParallax } from "@/hooks/use-pointer-parallax";

/**
 * Hero visual: an art-directed composition of real UI surfaces —
 * an admin dashboard window, a mobile app frame and an API panel.
 * Rendered with tokens (no screenshots), on a size-constrained stage
 * so it never stretches across large desktops.
 */
export function HeroComposition() {
  const { ref, offset } = usePointerParallax<HTMLDivElement>();

  const layer = (depth: number) => ({
    transform: `translate3d(${offset.x * depth}px, ${offset.y * depth}px, 0)`,
    transition: "transform 900ms cubic-bezier(0.16,1,0.3,1)",
  });

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="relative mx-auto w-full max-w-[360px] sm:max-w-[440px] lg:mr-0 lg:ml-auto lg:max-w-[480px] xl:max-w-[540px]"
    >
      {/* stage reserves layout space so nothing shifts while fonts/JS settle */}
      <div className="relative aspect-[4/3.35] w-full">
        {/* soft light behind the stack */}
        <div className="pointer-events-none absolute -top-12 -right-4 h-[45%] w-[45%] rounded-full bg-[radial-gradient(circle_at_30%_30%,var(--surface),var(--surface-2)_55%,transparent_72%)] blur-[2px]" />

        {/* Desktop / admin window — primary visual */}
        <div style={layer(8)} className="absolute top-0 right-0 w-[92%]">
          <div className="bg-card border-border shadow-lift overflow-hidden rounded-xl border">
            <div className="border-border bg-surface-2 flex items-center gap-2 border-b px-3 py-2">
              <span className="bg-border-strong h-1.5 w-1.5 rounded-full" />
              <span className="bg-border-strong h-1.5 w-1.5 rounded-full" />
              <span className="bg-border-strong h-1.5 w-1.5 rounded-full" />
              <span className="text-muted-foreground ml-3 font-mono text-[10px]">
                admin.dashboard
              </span>
            </div>
            <div className="grid grid-cols-[86px_1fr] sm:grid-cols-[104px_1fr]">
              <div className="border-border bg-surface-2/60 space-y-1.5 border-r p-2.5">
                {["Overview", "Orders", "Users", "Reports", "Settings"].map((item, i) => (
                  <div
                    key={item}
                    className={`rounded-md px-2 py-1.5 text-[10px] ${
                      i === 0 ? "bg-foreground text-background" : "text-muted-foreground"
                    }`}
                  >
                    {item}
                  </div>
                ))}
              </div>
              <div className="space-y-2.5 p-2.5 sm:p-3.5">
                <div className="grid grid-cols-3 gap-2">
                  {["Active", "Pending", "Archived"].map((k) => (
                    <div key={k} className="border-border rounded-md border p-2">
                      <div className="text-muted-foreground font-mono text-[8px] tracking-wider uppercase">
                        {k}
                      </div>
                      <div className="bg-secondary mt-2 h-1.5 w-full rounded-full">
                        <div
                          className="bg-foreground h-1.5 rounded-full"
                          style={{
                            width: k === "Active" ? "72%" : k === "Pending" ? "38%" : "18%",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="border-border rounded-md border p-2.5">
                  <div className="flex aspect-[5/2] items-end gap-1.5">
                    {[38, 52, 44, 68, 58, 82, 64, 90, 74, 96].map((h, i) => (
                      <div
                        key={i}
                        className={`flex-1 rounded-t-[2px] ${i === 9 ? "bg-accent" : "bg-secondary"}`}
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>
                <div className="space-y-1.5">
                  {[0, 1, 2].map((r) => (
                    <div key={r} className="border-border flex items-center gap-2 border-b pb-1.5">
                      <div className="bg-secondary h-3.5 w-3.5 rounded-sm" />
                      <div className="bg-secondary h-1.5 flex-1 rounded-full" />
                      <div className="bg-secondary h-1.5 w-8 rounded-full" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile app frame — secondary, proportional to the stage */}
        <div style={layer(18)} className="absolute bottom-0 -left-[3%] w-[34%] sm:w-[29%] max-w-[160px]">
          <div className="bg-card border-border-strong shadow-lift float-slow rounded-[1.4rem] border p-1.5">
            <div className="bg-surface-2 aspect-[9/17] overflow-hidden rounded-[1.05rem]">
              <div className="flex items-center justify-between px-3 pt-2.5 pb-1">
                <span className="text-muted-foreground font-mono text-[8px]">9:41</span>
                <span className="bg-border-strong h-1 w-5 rounded-full" />
              </div>
              <div className="space-y-2 p-2.5">
                <div className="bg-foreground text-background rounded-lg px-2.5 py-2">
                  <div className="font-mono text-[8px] opacity-70">FLUTTER</div>
                  <div className="mt-1 text-[10px] leading-tight font-medium">Mobile app</div>
                </div>
                <div className="grid grid-cols-2 gap-1.5">
                  {[0, 1, 2, 3].map((i) => (
                    <div key={i} className="bg-card border-border rounded-md border p-1.5">
                      <div className="bg-secondary h-3.5 w-3.5 rounded-sm" />
                      <div className="bg-secondary mt-1.5 h-1 w-full rounded-full" />
                      <div className="bg-secondary mt-1 h-1 w-2/3 rounded-full" />
                    </div>
                  ))}
                </div>
                <div className="bg-accent h-5 rounded-md" />
              </div>
            </div>
          </div>
        </div>

        {/* API layer panel — supporting detail, desktop/tablet only */}
        <div
          style={layer(-14)}
          className="bg-card border-border shadow-soft absolute right-0 bottom-[4%] hidden rounded-lg border px-3 py-2.5 sm:block"
        >
          <div className="text-muted-foreground font-mono text-[9px] tracking-[0.14em] uppercase">
            API layer
          </div>
          <div className="mt-1.5 flex items-center gap-2">
            <span className="bg-accent h-1.5 w-1.5 rounded-full" />
            <span className="font-mono text-[10px]">200 · /v1/orders</span>
          </div>
          <div className="text-muted-foreground mt-1 font-mono text-[9px]">
            Node.js · Supabase · Firebase
          </div>
        </div>
      </div>
    </div>
  );
}
