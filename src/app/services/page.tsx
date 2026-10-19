import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import PageCTA from "@/components/PageCTA";

export const metadata: Metadata = {
  title: "Services",
  description:
    "End-to-end digital product development, from strategy to scale. AI, web, mobile, design, QA, and more.",
};

const SERVICES = [
  { icon: "M9 3v2M15 3v2M9 19v2M15 19v2M3 9h2M3 15h2M19 9h2M19 15h2M7 7h10v10H7z", title: "AI Development", slug: "ai-development", desc: "Custom AI models, agents, and automation pipelines tailored to your business." },
  { icon: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z", title: "Website Development", slug: "web-development", desc: "High-performance websites and web apps built with modern frameworks." },
  { icon: "M17 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM12 18h.01", title: "Mobile Apps", slug: "custom-mobile-app-development", desc: "Native and cross-platform mobile applications for iOS and Android." },
  { icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5", title: "UI/UX Design", slug: "ui-ux-design-and-development", desc: "User-centered design systems, prototypes, and interfaces that convert." },
  { icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75", title: "Dedicated Teams", slug: "staff-augmentation", desc: "Vetted engineering squads embedded in your organization, managed by us." },
  { icon: "M9 12l2 2 4-4M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z", title: "Software Testing & QA", slug: "software-testing-and-qa", desc: "End-to-end QA with automated testing, performance audits, and security reviews." },
  { icon: "M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z", title: "Branding & Marketing", slug: "branding-marketing", desc: "Brand identity, marketing websites, SEO, paid media, and growth strategy." },
  { icon: "M4 9h16M4 15h16M10 3v18M14 3v18", title: "Social Media Marketing", slug: "social-media-marketing", desc: "Strategy, content, and paid social that turn followers into customers." },
  { icon: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16zM3.27 6.96L12 12.01l8.73-5.05M12 22.08V12", title: "Metaverse & Immersive", slug: "metaverse-development", desc: "Virtual worlds, 3D experiences, AR/VR applications, and spatial computing." },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        tag="Services"
        title="Our Services"
        description="End-to-end digital product development, from strategy to scale."
        primaryCta="Book a call"
      />

      <section className="relative bg-cadbury-purple py-16 lg:py-24 section-grid-bg overflow-hidden">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 aurora-bg" />
        <div aria-hidden="true" className="pointer-events-none absolute -z-5" style={{ width: 36, height: 36, top: "8%", right: "6%", border: "1px solid rgba(22,104,217,0.08)", borderRadius: 6, animation: "rotate-3d 22s linear infinite, float 14s ease-in-out infinite" }} />
        <div aria-hidden="true" className="pointer-events-none absolute -z-5 rounded-full" style={{ width: 22, height: 22, bottom: "12%", left: "4%", border: "1px solid rgba(34,184,240,0.06)", animation: "rotate-3d-slow 26s linear infinite reverse, float-diagonal 16s ease-in-out infinite 4s" }} />
        <div aria-hidden="true" className="pointer-events-none absolute w-1 h-1 rounded-full bg-cyan/15 -z-5" style={{ top: "25%", left: "10%", animation: "particle-float-1 9s ease-in-out infinite" }} />
        <div aria-hidden="true" className="pointer-events-none absolute w-1 h-1 rounded-full bg-blue/10 -z-5" style={{ bottom: "30%", right: "15%", animation: "particle-float-2 11s ease-in-out infinite 3s" }} />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="rounded-xl border border-border bg-cadbury-purple p-6 card-hover transition-all group"
              >
                <div className="gradient-icon h-12 w-12">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d={s.icon} />
                  </svg>
                </div>
                <h2 className="mt-3 text-lg font-bold text-navy group-hover:text-blue transition-colors">
                  {s.title}
                </h2>
                <p className="mt-2 text-sm text-muted">{s.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue">
                  Learn more
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <PageCTA
        title="Not sure which service fits?"
        description="Book a free consultation and we'll recommend the best approach for your project."
      />
    </>
  );
}
