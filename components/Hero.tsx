import Image from "next/image";
import { ArrowRight, Download, GitBranch, Mail, MapPin, SquareUser } from "lucide-react";
import { heroStats, profile } from "../lib/portfolio-data";

export function Hero() {
  const socialLinks = [
    { label: "GitHub", href: profile.github, icon: GitBranch },
    { label: "LinkedIn", href: profile.linkedin, icon: SquareUser },
    { label: "Email", href: `mailto:${profile.email}`, icon: Mail },
  ];

  return (
    <section id="home" className="relative overflow-hidden border-b border-line bg-deep text-cream">
      <Image
        src="/portfolio-assets/hero-workspace.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-35"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,20,16,0.96),rgba(15,20,16,0.72),rgba(15,20,16,0.9))]" />

      <div className="relative mx-auto grid min-h-[76svh] max-w-7xl items-center gap-8 px-5 pb-8 pt-24 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12">
        <div className="relative z-10 animate-reveal">
          <div className="mb-5 inline-flex items-center gap-2 rounded-md border border-mint/28 bg-mint/10 px-3 py-2 text-sm font-bold text-mint">
            <MapPin size={16} aria-hidden="true" />
            {profile.location}
          </div>

          <h1 className="max-w-4xl text-balance text-4xl font-black leading-[1.04] text-cream sm:text-6xl">
            {profile.name}
          </h1>

          <p className="mt-5 max-w-2xl text-pretty text-lg leading-8 text-cream/76 sm:text-xl">
            {profile.tagline}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-md bg-mint px-5 py-3 text-base font-black text-deep shadow-lift transition hover:-translate-y-0.5 hover:bg-cream"
            >
              View Projects
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-md border border-cream/24 bg-cream/8 px-5 py-3 text-base font-bold text-cream transition hover:-translate-y-0.5 hover:border-coral hover:text-coral"
            >
              Contact Me
              <Mail size={18} aria-hidden="true" />
            </a>
            <a
              href={profile.resume}
              download
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-md border border-cream/24 bg-deep/50 px-5 py-3 text-base font-bold text-cream transition hover:-translate-y-0.5 hover:border-amber hover:text-amber"
            >
              Resume Download
              <Download size={18} aria-hidden="true" />
            </a>
          </div>

          <div className="mt-7 flex flex-wrap gap-3" aria-label="Social links">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              const isEmail = link.href.startsWith("mailto:");
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={isEmail ? undefined : "_blank"}
                  rel={isEmail ? undefined : "noreferrer"}
                  className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-md border border-line bg-white/6 text-muted transition hover:border-mint hover:text-mint"
                  aria-label={link.label}
                >
                  <Icon size={20} aria-hidden="true" />
                </a>
              );
            })}
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-8 right-5 z-0 w-20 opacity-45 sm:pointer-events-auto sm:relative sm:bottom-auto sm:right-auto sm:z-auto sm:mx-auto sm:w-full sm:max-w-[17rem] sm:opacity-100 lg:max-w-xs">
          <div className="absolute inset-x-8 bottom-4 h-10 rounded-[50%] bg-black/40 blur-xl" />
          <figure className="relative overflow-hidden rounded-lg border border-cream/18 bg-cream/10 shadow-soft">
            <Image
              src="/portfolio-assets/profile-illustration.png"
              alt="Stylized profile illustration for Shashwat Sharma"
              width={900}
              height={1080}
              priority
              sizes="(min-width: 1024px) 420px, 72vw"
              className="aspect-[5/6] w-full object-cover"
            />
            <figcaption className="hidden grid-cols-3 gap-px border-t border-line bg-line text-center text-xs text-cream/82 sm:grid">
              {heroStats.map((stat) => (
                <span key={stat.label} className="bg-deep/92 px-2 py-3">
                  <span className="block text-lg font-black text-mint">{stat.value}</span>
                  <span className="mt-1 block leading-snug">{stat.label}</span>
                </span>
              ))}
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
