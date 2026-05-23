"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { GitBranch, Mail, MapPin, Send, SquareUser } from "lucide-react";
import { profile } from "../lib/portfolio-data";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  name: "",
  email: "",
  message: "",
};

function validate(values: FormValues) {
  const errors: FormErrors = {};
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (values.name.trim().length < 2) {
    errors.name = "Please enter at least 2 characters.";
  }

  if (!emailPattern.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (values.message.trim().length < 12) {
    errors.message = "Please include a short message of at least 12 characters.";
  }

  return errors;
}

export function Contact() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState("");

  function handleChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
    setStatus("");
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("Please fix the highlighted fields.");
      return;
    }

    const subject = `Portfolio contact from ${values.name.trim()}`;
    const body = `${values.message.trim()}\n\nFrom: ${values.name.trim()} (${values.email.trim()})`;
    const params = new URLSearchParams({ subject, body });
    window.location.href = `mailto:${profile.email}?${params.toString()}`;
    setStatus("Opening an email draft with your message.");
  }

  return (
    <section id="contact" className="panel-grid border-y border-line bg-forest px-5 py-20 text-cream sm:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
        <div>
          <p className="text-sm font-black uppercase text-mint">Contact</p>
          <h2 className="mt-4 text-balance text-4xl font-black leading-tight sm:text-5xl">
            Have a role, internship, or project in mind?
          </h2>
          <p className="mt-5 text-pretty text-lg leading-8 text-muted">
            Send a short note, review the public profiles, or download the resume from the navigation.
            I am especially interested in frontend roles, product UI work, and practical web tooling.
          </p>

          <div className="mt-8 grid gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="focus-ring flex items-center gap-3 rounded-lg border border-line bg-deep/76 p-4 transition hover:border-mint hover:text-mint"
            >
              <Mail size={21} aria-hidden="true" />
              <span>{profile.email}</span>
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="focus-ring flex items-center gap-3 rounded-lg border border-line bg-deep/76 p-4 transition hover:border-cyan hover:text-cyan"
            >
              <SquareUser size={21} aria-hidden="true" />
              <span>LinkedIn profile</span>
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="focus-ring flex items-center gap-3 rounded-lg border border-line bg-deep/76 p-4 transition hover:border-amber hover:text-amber"
            >
              <GitBranch size={21} aria-hidden="true" />
              <span>GitHub profile</span>
            </a>
            <div className="flex items-center gap-3 rounded-lg border border-line bg-deep/76 p-4 text-muted">
              <MapPin size={21} aria-hidden="true" />
              <span>{profile.location}</span>
            </div>
          </div>
        </div>

        <form noValidate onSubmit={handleSubmit} className="rounded-lg border border-line bg-deep/86 p-5 shadow-soft sm:p-7">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="text-sm font-bold text-cream">Name</span>
              <input
                name="name"
                value={values.name}
                onChange={handleChange}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "name-error" : undefined}
                className="focus-ring mt-2 w-full rounded-md border border-line bg-white/7 px-4 py-3 text-cream outline-none transition placeholder:text-muted/70 focus:border-mint"
                placeholder="Your name"
              />
              {errors.name && (
                <span id="name-error" className="mt-2 block text-sm font-semibold text-coral">
                  {errors.name}
                </span>
              )}
            </label>

            <label className="block">
              <span className="text-sm font-bold text-cream">Email</span>
              <input
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "email-error" : undefined}
                className="focus-ring mt-2 w-full rounded-md border border-line bg-white/7 px-4 py-3 text-cream outline-none transition placeholder:text-muted/70 focus:border-mint"
                placeholder="you@example.com"
              />
              {errors.email && (
                <span id="email-error" className="mt-2 block text-sm font-semibold text-coral">
                  {errors.email}
                </span>
              )}
            </label>

            <label className="block sm:col-span-2">
              <span className="text-sm font-bold text-cream">Message</span>
              <textarea
                name="message"
                value={values.message}
                onChange={handleChange}
                rows={6}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "message-error" : undefined}
                className="focus-ring mt-2 w-full resize-none rounded-md border border-line bg-white/7 px-4 py-3 text-cream outline-none transition placeholder:text-muted/70 focus:border-mint"
                placeholder="Tell me what you are hiring or building."
              />
              {errors.message && (
                <span id="message-error" className="mt-2 block text-sm font-semibold text-coral">
                  {errors.message}
                </span>
              )}
            </label>

            <button
              type="submit"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-md bg-mint px-5 py-3 text-base font-black text-deep transition hover:bg-cream sm:col-span-2"
            >
              Send Message
              <Send size={18} aria-hidden="true" />
            </button>
          </div>

          <p className="mt-4 min-h-6 text-sm font-semibold text-muted" role="status" aria-live="polite">
            {status}
          </p>
        </form>
      </div>
    </section>
  );
}
