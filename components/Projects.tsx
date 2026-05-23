"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { ExternalLink, GitBranch, Star } from "lucide-react";
import { projects } from "../lib/portfolio-data";

const filters = ["All", "Data", "Commerce", "Health", "Automation"];

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const visibleProjects = useMemo(
    () => projects.filter((project) => activeFilter === "All" || project.category === activeFilter),
    [activeFilter],
  );

  return (
    <section id="projects" className="bg-deep px-5 py-20 text-cream sm:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase text-coral">Projects</p>
            <h2 className="mt-4 text-balance text-4xl font-black leading-tight sm:text-5xl">
              Selected work framed for outcomes, stack, and polish.
            </h2>
          </div>

          <div className="flex flex-wrap gap-2" aria-label="Project filters">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                aria-pressed={activeFilter === filter}
                onClick={() => setActiveFilter(filter)}
                className={`focus-ring rounded-md px-4 py-2 text-sm font-black transition ${
                  activeFilter === filter
                    ? "bg-cream text-deep"
                    : "border border-line bg-white/5 text-muted hover:border-mint hover:text-mint"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {visibleProjects.map((project, index) => (
            <article
              key={project.title}
              className={`group rounded-lg border border-line bg-forest shadow-soft transition hover:-translate-y-1 hover:border-mint/45 ${
                project.featured && activeFilter === "All" ? "lg:col-span-2" : ""
              }`}
            >
              <div className={`grid gap-0 ${project.featured && activeFilter === "All" ? "lg:grid-cols-[1.12fr_0.88fr]" : ""}`}>
                <div className="relative aspect-[16/10] overflow-hidden rounded-t-lg bg-moss lg:rounded-l-lg lg:rounded-tr-none">
                  <Image
                    src={project.image}
                    alt={`${project.title} project thumbnail`}
                    fill
                    sizes={project.featured && activeFilter === "All" ? "(min-width: 1024px) 58vw, 100vw" : "(min-width: 1024px) 50vw, 100vw"}
                    priority={index === 0 && activeFilter === "All"}
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  {project.featured && (
                    <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-md bg-deep/82 px-3 py-2 text-xs font-black text-amber backdrop-blur">
                      <Star size={14} aria-hidden="true" />
                      Featured
                    </span>
                  )}
                </div>

                <div className="flex min-h-full flex-col p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-bold text-mint">{project.category}</p>
                      <h3 className="mt-2 text-2xl font-black text-cream">{project.title}</h3>
                    </div>
                  </div>

                  <p className="mt-4 text-pretty leading-7 text-muted">{project.description}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span key={item} className="rounded-md bg-white/7 px-3 py-2 text-xs font-bold text-cream/82">
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="focus-ring inline-flex items-center gap-2 rounded-md border border-line px-4 py-2 text-sm font-bold text-cream transition hover:border-mint hover:text-mint"
                    >
                      <GitBranch size={17} aria-hidden="true" />
                      GitHub
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="focus-ring inline-flex items-center gap-2 rounded-md bg-cream px-4 py-2 text-sm font-black text-deep transition hover:bg-mint"
                    >
                      <ExternalLink size={17} aria-hidden="true" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
