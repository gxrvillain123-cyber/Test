import { CheckCircle2 } from "lucide-react";
import { buildDecisions } from "../lib/portfolio-data";

const targets = [
  "Responsive layout across mobile, tablet, and desktop",
  "Semantic headings and keyboard-visible focus states",
  "Local optimized visuals with stable dimensions",
  "Smooth scroll with reduced-motion fallback",
];

export function BuildDecisions() {
  return (
    <section id="decisions" className="bg-deep px-5 py-20 text-cream sm:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase text-amber">Build Decisions</p>
            <h2 className="mt-4 text-balance text-4xl font-black leading-tight sm:text-5xl">
              Built to feel polished, explainable, and easy to extend.
            </h2>
            <div className="mt-8 rounded-lg border border-line bg-forest p-5">
              <h3 className="text-lg font-black">Quality targets</h3>
              <ul className="mt-4 space-y-3">
                {targets.map((target) => (
                  <li key={target} className="flex gap-3 text-sm leading-6 text-muted">
                    <CheckCircle2 className="mt-0.5 shrink-0 text-mint" size={18} aria-hidden="true" />
                    <span>{target}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {buildDecisions.map((decision) => (
              <article key={decision.title} className="rounded-lg border border-line bg-forest p-5 transition hover:-translate-y-1 hover:border-amber/55">
                <h3 className="text-xl font-black text-cream">{decision.title}</h3>
                <p className="mt-3 text-pretty leading-7 text-muted">{decision.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
