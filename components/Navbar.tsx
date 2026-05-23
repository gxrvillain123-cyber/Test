"use client";

import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { navItems, profile } from "../lib/portfolio-data";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState(navItems[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target.id) {
          setActiveId(visibleEntry.target.id);
        }
      },
      { rootMargin: "-25% 0px -55% 0px", threshold: [0.12, 0.28, 0.5] },
    );

    navItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-deep/82 text-cream backdrop-blur-xl">
      <nav className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-5 sm:px-8" aria-label="Primary navigation">
        <a href="#home" className="focus-ring flex items-center gap-3 rounded-md" aria-label={`${profile.name} home`}>
          <span className="grid h-10 w-10 place-items-center rounded-md border border-mint/38 bg-mint text-sm font-black text-deep shadow-lift">
            {profile.initials}
          </span>
          <span className="hidden leading-tight sm:block">
            <span className="block text-sm font-black">{profile.name}</span>
            <span className="block text-xs text-muted">{profile.role}</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`focus-ring rounded-md px-3 py-2 text-sm font-semibold transition ${
                activeId === item.id ? "bg-cream text-deep" : "text-muted hover:bg-white/8 hover:text-cream"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            className="focus-ring inline-flex items-center gap-2 rounded-md border border-line px-4 py-2 text-sm font-bold text-cream transition hover:border-mint hover:text-mint"
            href={profile.resume}
            download
          >
            <Download size={16} aria-hidden="true" />
            Resume
          </a>
        </div>

        <button
          type="button"
          className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-md border border-line text-cream lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-line bg-deep px-5 py-4 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`focus-ring rounded-md px-3 py-3 text-sm font-semibold ${
                  activeId === item.id ? "bg-cream text-deep" : "text-muted hover:bg-white/8 hover:text-cream"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              className="focus-ring mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-mint px-4 py-3 text-sm font-black text-deep"
              href={profile.resume}
              download
              onClick={() => setIsOpen(false)}
            >
              <Download size={16} aria-hidden="true" />
              Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
