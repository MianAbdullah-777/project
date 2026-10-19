import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import PageCTA from "@/components/PageCTA";
import ProcessFlow from "@/components/ProcessFlow";

export const metadata: Metadata = {
  title: "Branding & Marketing Services",
  description:
    "Logo, identity, tone of voice, and digital marketing strategy — built to match your product ambitions.",
};

/* ── SVG icon helper ── */
function Icon({ d, stroke }: { d: string; stroke?: boolean }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={stroke ? "none" : "currentColor"}
      stroke={stroke ? "currentColor" : "none"}
      strokeWidth={stroke ? "1.5" : undefined}
      strokeLinecap={stroke ? "round" : undefined}
      strokeLinejoin={stroke ? "round" : undefined}
      aria-hidden="true"
    >
      <path d={d} />
    </svg>
  );
}

/* ── Data ── */

const INCLUDED = [
  {
    label: "Logo & visual identity",
    icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
  },
  {
    label: "Brand guidelines & tone of voice",
    icon: "M4 19.5A2.5 2.5 0 016.5 17H20M4 19.5A2.5 2.5 0 014 17V5a2.5 2.5 0 012.5-2.5H20v15H6.5z",
  },
  {
    label: "Marketing website & landing pages",
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1h-2z",
  },
  {
    label: "Email campaigns & automation",
    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
  {
    label: "Growth strategy & positioning",
    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
  },
  {
    label: "SEO content strategy",
    icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
  },
  {
    label: "Paid media strategy & setup",
    icon: "M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z",
  },
  {
    label: "Monthly analytics & reporting",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
];

const IDENTITY_ITEMS = [
  {
    title: "Logo & Visual Identity",
    desc: "Distinctive logos and visual system across digital, print, and product. We design a mark and visual language that works everywhere your brand shows up.",
    icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01",
  },
  {
    title: "Brand Guidelines",
    desc: "A living brand guide covering colour, type, imagery, and tone so every piece of communication stays consistent — no matter who creates it.",
    icon: "M4 19.5A2.5 2.5 0 016.5 17H20M4 19.5A2.5 2.5 0 014 17V5a2.5 2.5 0 012.5-2.5H20v15H6.5z",
  },
  {
    title: "Positioning & Messaging",
    desc: "A clear value proposition and messaging framework the whole team can use. We define what you stand for and how to say it.",
    icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
  },
];

const GROWTH_ITEMS = [
  {
    title: "Marketing Website",
    desc: "High-converting landing pages built on your new brand, designed to capture attention and convert visitors into leads and customers.",
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1h-2z",
  },
  {
    title: "Email Campaigns",
    desc: "Automated nurture sequences and broadcast campaigns designed to keep your audience engaged and move them toward purchase.",
    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
  {
    title: "Growth Strategy",
    desc: "A clear acquisition playbook — organic, paid, and referral — tailored to your stage and goals so every dollar works harder.",
    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
  },
];

const MEASUREMENT_ITEMS = [
  {
    title: "Marketing Analytics",
    desc: "GA4, UTM tagging, and a dashboard showing real business metrics — not vanity numbers. You see what actually drives revenue.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
  {
    title: "Conversion Tracking",
    desc: "Every click, sign-up, and purchase attributed correctly to the spend where it works. No guessing which channels perform.",
    icon: "M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122",
  },
  {
    title: "Monthly Reporting",
    desc: "Clear, actionable monthly reports covering traffic, leads, costs, and revenue impact. You always know where you stand.",
    icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Discovery & Positioning",
    desc: "Brand audit, competitor research, and a positioning workshop to define where you sit in the market and what makes you different.",
  },
  {
    step: "02",
    title: "Identity Design",
    desc: "Logo concepts, visual identity system, and brand guidelines — reviewed, refined, and approved before we move forward.",
  },
  {
    step: "03",
    title: "Marketing Build",
    desc: "Landing pages, email sequences, and ad creative built and launched. Everything connects back to your new brand.",
  },
  {
    step: "04",
    title: "Optimise & Grow",
    desc: "Analytics reviewed monthly, channels optimised, and spend shifted to what works. Continuous improvement, not set-and-forget.",
  },
];

export default function BrandingMarketingPage() {
  return (
    <>
      <PageHero
        tag="Branding & Marketing"
        title="A brand that stands out and scales"
        description="Logo, identity, tone of voice, and digital marketing strategy — built to match your product ambitions. We align your brand with your product so you attract the right audience from launch."
        primaryCta="Start your brand project"
      />

      {/* What's Included */}
      <section className="bg-cadbury-purple py-16 lg:py-24 section-grid-bg relative overflow-hidden">
        <div
          className="absolute -top-20 -right-20 w-72 h-72 rounded-full pointer-events-none"
          style={{
            background: "rgba(22,104,217,0.10)",
            filter: "blur(64px)",
          }}
        />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-2xl sm:text-3xl font-bold gradient-text text-center">
            What&apos;s Included
          </h2>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {INCLUDED.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 rounded-xl border border-border bg-cadbury-purple p-4"
              >
                <div
                  className="gradient-icon shrink-0"
                  style={{ width: 40, height: 40 }}
                >
                  <Icon d={item.icon} stroke />
                </div>
                <span className="text-sm font-semibold text-navy">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Identity That Means Something */}
      <section className="relative bg-light-bg py-16 lg:py-24 overflow-hidden">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 perspective-grid" />
        <div aria-hidden="true" className="pointer-events-none absolute w-1.5 h-1.5 rounded-full bg-blue/12 -z-5" style={{ top: "22%", right: "14%", animation: "particle-float-2 10s ease-in-out infinite 3s" }} />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy text-center">
            Identity that means something
          </h2>
          <p className="mt-3 text-muted text-center max-w-2xl mx-auto">
            A logo is the easy part. We build a complete visual identity — logo,
            colour, typography, and tone — that communicates exactly who you are
            and why you are different.
          </p>
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {IDENTITY_ITEMS.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-border bg-cadbury-purple p-6 card-hover transition-all"
              >
                <div
                  className="gradient-icon"
                  style={{ width: 48, height: 48 }}
                >
                  <Icon d={item.icon} stroke />
                </div>
                <h3 className="mt-3 text-base font-bold text-navy">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marketing That Drives Growth */}
      <section className="bg-cadbury-purple py-16 lg:py-24 relative overflow-hidden">
        <div
          className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full pointer-events-none"
          style={{
            background: "rgba(22,104,217,0.10)",
            filter: "blur(64px)",
          }}
        />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-2xl sm:text-3xl font-bold gradient-text text-center">
            Marketing that drives growth
          </h2>
          <p className="mt-3 text-muted text-center max-w-2xl mx-auto">
            Brand without distribution is invisible. We pair your new identity
            with a growth strategy — from landing pages that convert to email
            flows that nurture.
          </p>
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {GROWTH_ITEMS.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-border bg-cadbury-purple p-6 card-hover transition-all"
              >
                <div
                  className="gradient-icon"
                  style={{ width: 48, height: 48 }}
                >
                  <Icon d={item.icon} stroke />
                </div>
                <h3 className="mt-3 text-base font-bold text-navy">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Measure Everything */}
      <section className="relative bg-light-bg py-16 lg:py-24 overflow-hidden">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 perspective-grid" />
        <div aria-hidden="true" className="pointer-events-none absolute w-1 h-1 rounded-full bg-cyan/12 -z-5" style={{ top: "18%", left: "10%", animation: "particle-float-1 8s ease-in-out infinite" }} />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy text-center">
            Measure everything
          </h2>
          <p className="mt-3 text-muted text-center max-w-2xl mx-auto">
            We set up attribution, dashboards, and reporting so you know exactly
            which channels drive revenue — not just traffic.
          </p>
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {MEASUREMENT_ITEMS.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-border bg-cadbury-purple p-6 card-hover transition-all"
              >
                <div
                  className="gradient-icon"
                  style={{ width: 48, height: 48 }}
                >
                  <Icon d={item.icon} stroke />
                </div>
                <h3 className="mt-3 text-base font-bold text-navy">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="relative bg-cadbury-purple py-16 lg:py-24 section-grid-bg overflow-hidden noise-overlay">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 aurora-bg" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[700px] w-[700px] rounded-full bg-[rgba(22,104,217,0.05)] blur-[64px]" />
        <div aria-hidden="true" className="pointer-events-none absolute -z-5" style={{ width: 28, height: 28, top: "12%", right: "7%", border: "1px solid rgba(22,104,217,0.08)", borderRadius: 5, animation: "rotate-3d 24s linear infinite, float 14s ease-in-out infinite" }} />
        <div aria-hidden="true" className="pointer-events-none absolute w-1 h-1 rounded-full bg-cyan/15 -z-5" style={{ bottom: "20%", left: "10%", animation: "particle-float-1 9s ease-in-out infinite 2s" }} />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-2xl sm:text-3xl font-bold gradient-text text-center mb-12">
            How It Works
          </h2>
          <ProcessFlow steps={PROCESS.map((s) => ({ name: s.title, desc: s.desc }))} />
        </div>
      </section>

      <PageCTA
        title="Build a brand people remember"
        description="Let's discuss your brand vision and create a strategy that grows with you."
      />
    </>
  );
}
