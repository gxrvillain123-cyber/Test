import { GitBranch, Mail, SquareUser } from "lucide-react";
import { navItems, profile } from "../lib/portfolio-data";

export function Footer() {
  return (
    <footer className="border-t border-line bg-forest px-5 py-10 text-cream sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-xl font-black">{profile.name}</p>
          <p className="mt-2 max-w-xl text-sm leading-6 text-muted">
            Frontend developer focused on clean product UI, practical engineering, and thoughtful presentation.
          </p>
        </div>

        <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
          <div className="flex flex-wrap gap-3 text-sm font-semibold text-muted">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="focus-ring rounded-md px-2 py-1 transition hover:text-mint">
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex gap-2">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="focus-ring grid h-10 w-10 place-items-center rounded-md border border-line text-muted transition hover:border-mint hover:text-mint"
              aria-label="GitHub"
            >
              <GitBranch size={18} aria-hidden="true" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="focus-ring grid h-10 w-10 place-items-center rounded-md border border-line text-muted transition hover:border-cyan hover:text-cyan"
              aria-label="LinkedIn"
            >
              <SquareUser size={18} aria-hidden="true" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="focus-ring grid h-10 w-10 place-items-center rounded-md border border-line text-muted transition hover:border-amber hover:text-amber"
              aria-label="Email"
            >
              <Mail size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
