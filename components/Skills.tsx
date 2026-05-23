import type { LucideIcon } from "lucide-react";
import { Code2, Database, ServerCog, Wrench } from "lucide-react";
import { skillCategories } from "../lib/portfolio-data";

const categoryIcons: Record<string, LucideIcon> = {
  frontend: Code2,
  backend: ServerCog,
  database: Database,
  tools: Wrench,
};

export function Skills() {
  return (
    <section id="skills" className="panel-grid border-y border-line bg-forest px-5 py-20 text-cream sm:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase text-cyan">Skills</p>
            <h2 className="mt-4 text-balance text-4xl font-black leading-tight sm:text-5xl">
              A practical stack for building fast, maintainable interfaces.
            </h2>
          </div>
          <p className="max-w-md text-pretty text-base leading-7 text-muted">
            The stack favors modern frontend delivery, typed components, clean APIs, and deployment
            paths that reduce friction during handoff.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {skillCategories.map((category) => {
            const Icon = categoryIcons[category.id];
            return (
              <article
                key={category.id}
                className="rounded-lg border border-line bg-deep/76 p-5 shadow-soft transition hover:-translate-y-1 hover:border-mint/50"
              >
                <div className="mb-6 flex items-center justify-between gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-md bg-mint text-deep">
                    <Icon size={24} aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-black">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-line bg-white/6 px-3 py-2 text-sm font-semibold text-cream/88 transition group-hover:text-cream"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
