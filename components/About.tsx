import { BadgeCheck, Goal, Layers3 } from "lucide-react";

const focusItems = [
  {
    icon: Layers3,
    title: "Product-minded UI",
    text: "Interfaces are organized for scanning, comparison, and repeated use instead of pure decoration.",
  },
  {
    icon: BadgeCheck,
    title: "Accessible by default",
    text: "Semantic structure, clear focus states, readable contrast, and useful form feedback are part of the baseline.",
  },
  {
    icon: Goal,
    title: "Career-ready craft",
    text: "Each project is framed around outcome, stack, and implementation choices recruiters can evaluate quickly.",
  },
];

export function About() {
  return (
    <section id="about" className="bg-forest px-5 pb-20 pt-14 text-cream sm:px-8 lg:pb-28 lg:pt-16">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="text-sm font-black uppercase text-amber">About</p>
          <h2 className="mt-4 max-w-xl text-balance text-4xl font-black leading-tight sm:text-5xl">
            Frontend engineering with a sharp eye for product presentation.
          </h2>
        </div>

        <div className="space-y-6 text-lg leading-8 text-muted">
          <p>
            I focus on turning product requirements into polished web interfaces that feel calm, fast,
            and easy to trust. My strongest work sits at the intersection of React architecture,
            responsive layouts, accessibility, and clean visual systems.
          </p>
          <p>
            I enjoy building dashboards, launch pages, workflow tools, and form-heavy products where
            good structure matters as much as visual polish. The goal is simple: make the next step
            obvious for users and the codebase easy for a team to extend.
          </p>

          <div className="grid gap-4 pt-3 md:grid-cols-3">
            {focusItems.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="rounded-lg border border-line bg-white/5 p-5 transition hover:-translate-y-1 hover:border-mint/45">
                  <Icon className="text-mint" size={24} aria-hidden="true" />
                  <h3 className="mt-4 text-lg font-black text-cream">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
