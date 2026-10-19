"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import SectionHeading from "@/components/SectionHeading";

const PROJECT_TYPES = [
  "Website",
  "Mobile App",
  "AI Agent / Automation",
  "Staff Augmentation",
  "MVP Sprint",
  "Other",
];

const BUDGET_RANGES = [
  "Under $5,000",
  "$5,000 – $15,000",
  "$15,000 – $50,000",
  "$50,000 – $100,000",
  "$100,000+",
  "Not sure yet",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <section className="relative isolate overflow-hidden bg-light-bg py-16 lg:py-24">
        {/* Aurora gradient sweep */}
        <div aria-hidden="true" className="absolute inset-0 -z-10 aurora-bg pointer-events-none" />
        {/* Grid lines */}
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(22,104,217,0.09) 1px, transparent 1px), linear-gradient(to bottom, rgba(22,104,217,0.09) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
          }}
        />
        {/* Perspective grid */}
        <div aria-hidden="true" className="absolute inset-0 -z-10 perspective-grid pointer-events-none" />
        {/* Glow orb top-right (primary blue) */}
        <div
          className="pointer-events-none absolute -right-16 -top-10 -z-10 rounded-full"
          style={{
            width: 320,
            height: 320,
            background: "rgba(22,104,217,0.2)",
            filter: "blur(72px)",
            animation: "float 14s ease-in-out infinite",
          }}
        />
        {/* Glow orb bottom-left (cyan) */}
        <div
          className="pointer-events-none absolute -bottom-24 -left-10 -z-10 rounded-full"
          style={{
            width: 320,
            height: 320,
            background: "rgba(34,184,240,0.15)",
            filter: "blur(72px)",
            animation: "float-slow 18s ease-in-out infinite",
            animationDelay: "-4s",
          }}
        />
        {/* Purple accent orb */}
        <div
          className="pointer-events-none absolute -z-10 rounded-full"
          style={{
            width: 200,
            height: 200,
            top: "30%",
            left: "50%",
            background: "rgba(139,92,246,0.08)",
            filter: "blur(64px)",
            animation: "float-diagonal 20s ease-in-out infinite 3s",
          }}
        />
        {/* 3D rotating shapes */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -z-5"
          style={{
            width: 40,
            height: 40,
            top: "12%",
            right: "12%",
            border: "1px solid rgba(22,104,217,0.10)",
            borderRadius: 6,
            animation: "rotate-3d 24s linear infinite, float 12s ease-in-out infinite",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -z-5 rounded-full"
          style={{
            width: 24,
            height: 24,
            bottom: "18%",
            left: "8%",
            border: "1px solid rgba(34,184,240,0.08)",
            animation: "rotate-3d-slow 28s linear infinite, float-diagonal 16s ease-in-out infinite 4s",
          }}
        />
        {/* Floating particles */}
        <div aria-hidden="true" className="pointer-events-none absolute w-1.5 h-1.5 rounded-full bg-cyan/20 -z-5" style={{ top: "20%", left: "15%", animation: "particle-float-1 8s ease-in-out infinite" }} />
        <div aria-hidden="true" className="pointer-events-none absolute w-1 h-1 rounded-full bg-blue/15 -z-5" style={{ top: "65%", right: "20%", animation: "particle-float-2 10s ease-in-out infinite 3s" }} />
        <div aria-hidden="true" className="pointer-events-none absolute w-1 h-1 rounded-full bg-[#8B5CF6]/12 -z-5" style={{ bottom: "25%", left: "45%", animation: "particle-float-3 12s ease-in-out infinite 5s" }} />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Contact"
            title="Let's build something great"
            highlight="something great"
            description="Fill out the form below or reach out directly. We respond within 24 hours."
          />
        </div>
      </section>

      <div className="section-divider" />
      <section className="relative bg-cadbury-purple py-16 lg:py-24 overflow-hidden noise-overlay">
        {/* Subtle animated background for form section */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div aria-hidden="true" className="absolute" style={{ width: 30, height: 30, top: "10%", right: "6%", border: "1px solid rgba(22,104,217,0.08)", borderRadius: 5, animation: "rotate-3d 26s linear infinite, float 14s ease-in-out infinite" }} />
          <div aria-hidden="true" className="absolute rounded-full" style={{ width: 20, height: 20, bottom: "15%", left: "4%", border: "1px solid rgba(139,92,246,0.06)", animation: "rotate-3d-slow 30s linear infinite reverse, float-diagonal 18s ease-in-out infinite 6s" }} />
          <div aria-hidden="true" className="absolute w-1 h-1 rounded-full bg-cyan/15" style={{ top: "35%", left: "3%", animation: "particle-float-1 9s ease-in-out infinite 2s" }} />
          <div aria-hidden="true" className="absolute w-1 h-1 rounded-full bg-blue/12" style={{ bottom: "30%", right: "10%", animation: "particle-float-2 11s ease-in-out infinite 4s" }} />
          <div className="shimmer-line absolute top-0 left-0 w-full" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="rounded-xl border border-green bg-green-bg p-8 text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-green"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <h2 className="mt-4 text-xl font-bold text-navy">
                    Message sent!
                  </h2>
                  <p className="mt-2 text-muted">
                    We&apos;ll get back to you within 24 hours. In the
                    meantime, feel free to reach us on WhatsApp for a faster
                    response.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-navy"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="mt-1 block w-full rounded-lg border border-border px-4 py-2.5 text-sm text-navy placeholder:text-muted/50 focus:border-blue focus:ring-2 focus:ring-blue/20 outline-none"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-navy"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="mt-1 block w-full rounded-lg border border-border px-4 py-2.5 text-sm text-navy placeholder:text-muted/50 focus:border-blue focus:ring-2 focus:ring-blue/20 outline-none"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="project-type"
                        className="block text-sm font-medium text-navy"
                      >
                        Project type
                      </label>
                      <select
                        id="project-type"
                        name="projectType"
                        required
                        className="mt-1 block w-full rounded-lg border border-border px-4 py-2.5 text-sm text-navy focus:border-blue focus:ring-2 focus:ring-blue/20 outline-none bg-cadbury-purple"
                      >
                        <option value="">Select a project type</option>
                        {PROJECT_TYPES.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="budget"
                        className="block text-sm font-medium text-navy"
                      >
                        Budget
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        required
                        className="mt-1 block w-full rounded-lg border border-border px-4 py-2.5 text-sm text-navy focus:border-blue focus:ring-2 focus:ring-blue/20 outline-none bg-cadbury-purple"
                      >
                        <option value="">Estimated budget</option>
                        {BUDGET_RANGES.map((b) => (
                          <option key={b} value={b}>
                            {b}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-navy"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="mt-1 block w-full rounded-lg border border-border px-4 py-2.5 text-sm text-navy placeholder:text-muted/50 focus:border-blue focus:ring-2 focus:ring-blue/20 outline-none resize-y"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="gradient-bg inline-flex items-center gap-2 rounded-lg px-6 py-3 text-base font-semibold text-white transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue"
                  >
                    Send message
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M3 8h10m0 0L9 4m4 4L9 12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h3 className="text-sm font-semibold text-navy">Email</h3>
                <a
                  href="mailto:info@codenax.com"
                  className="mt-1 block text-muted hover:text-navy transition-colors"
                >
                  info@codenax.com
                </a>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-navy">Phone</h3>
                <a
                  href="tel:+13074436778"
                  className="mt-1 block text-muted hover:text-navy transition-colors"
                >
                  +1 307 443 6778
                </a>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-navy">WhatsApp</h3>
                <a
                  href="https://wa.me/13074436778"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                  style={{ backgroundColor: "#25D366" }}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="white"
                    aria-hidden="true"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12c0 1.77.46 3.44 1.27 4.89L2 22l5.23-1.24A9.96 9.96 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2z" />
                  </svg>
                  Chat on WhatsApp
                </a>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-navy">Office</h3>
                <address className="mt-1 text-muted not-italic">
                  30N Gould ST #7785
                  <br />
                  Sheridan, Wyoming
                </address>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-navy">
                  Response time
                </h3>
                <p className="mt-1 text-muted">
                  We respond to all inquiries within 24 hours on business days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
