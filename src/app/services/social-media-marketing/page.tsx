import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import PageCTA from "@/components/PageCTA";
import ProcessFlow from "@/components/ProcessFlow";

export const metadata: Metadata = {
  title: "Social Media Marketing Services",
  description:
    "Data-driven social strategy and execution spanning LinkedIn, Instagram, TikTok, and X. Community-building content and conversion-focused campaigns.",
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
    title: "Social Media Strategy & Content Calendar",
    desc: "Audience analysis, competitive audits, and 30-day rolling content calendars aligned with your business objectives.",
    icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
  },
  {
    title: "Content Creation & Copywriting",
    desc: "Branded visual assets, platform-optimized copywriting, and scroll-stopping graphics crafted for every channel.",
    icon: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z",
  },
  {
    title: "Paid Social Campaigns (Meta, LinkedIn)",
    desc: "Audience targeting, creative testing, budget optimization, and retargeting funnels that drive measurable ROI.",
    icon: "M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z",
  },
  {
    title: "Community Management",
    desc: "Daily community engagement monitoring to foster authentic brand communities and build lasting loyalty.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
  },
  {
    title: "Monthly Analytics & Reporting",
    desc: "Performance dashboards tracking reach, engagement, cost-per-lead, and ROAS with actionable insights.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
  {
    title: "Influencer & Partnership Outreach",
    desc: "Identify, vet, and manage influencer collaborations and brand partnerships that drive real engagement.",
    icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z",
  },
  {
    title: "Video & Reel Production",
    desc: "Short-form video production, reel editing, and platform-optimized video content for maximum reach.",
    icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
  },
  {
    title: "Profile Optimisation & Setup",
    desc: "Complete profile optimization, bio copy, link-in-bio setup, and platform-specific best practices across all channels.",
    icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z",
  },
];

const STRATEGY_ITEMS = [
  "Audience research and persona development",
  "Platform selection based on where your audience lives",
  "Goal-mapped scheduling aligned with business objectives",
  "Competitive audits to identify gaps and opportunities",
  "30-day rolling content calendars with approval workflows",
];

const CONTENT_ITEMS = [
  "Branded visual assets designed for each platform",
  "Platform-optimized copywriting and hashtag strategy",
  "Daily community engagement monitoring and response",
  "User-generated content curation and amplification",
  "Story templates, highlights, and carousel creation",
];

const PAID_ITEMS = [
  "Meta and LinkedIn advertising with precision targeting",
  "Creative A/B testing across formats and audiences",
  "Budget optimization and bid strategy management",
  "Retargeting funnels to recapture warm prospects",
  "Performance dashboards tracking reach, engagement, CPL, and ROAS",
];

const PROCESS = [
  {
    step: "01",
    title: "Audit & Strategy",
    desc: "Assess your current social presence, audit competitors, and build a channel plan tailored to your audience and goals.",
  },
  {
    step: "02",
    title: "Setup & Content Plan",
    desc: "Optimise all profiles, establish brand voice, and create a 30-day content calendar with approved creative direction.",
  },
  {
    step: "03",
    title: "Execute & Engage",
    desc: "Publish content consistently, launch paid campaigns, and manage community engagement with live monitoring.",
  },
  {
    step: "04",
    title: "Review & Optimise",
    desc: "Monthly performance review with strategy adjustments. We shift spend, refresh creative, and double down on what works.",
  },
];

export default function SocialMediaMarketingPage() {
  return (
    <>
      <PageHero
        tag="Social Media"
        title="Turn followers into paying customers"
        description="Data-driven social strategy and execution spanning LinkedIn, Instagram, TikTok, and X. We create community-building content and run conversion-focused campaigns."
        primaryCta="Get a social strategy"
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
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {INCLUDED.map((s) => (
              <div
                key={s.title}
                className="rounded-xl border border-border bg-cadbury-purple p-6 card-hover transition-all"
              >
                <div
                  className="gradient-icon"
                  style={{ width: 48, height: 48 }}
                >
                  <Icon d={s.icon} stroke />
                </div>
                <h3 className="mt-3 text-base font-bold text-navy">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategy / Content / Paid */}
      <section className="relative bg-light-bg py-16 lg:py-24 overflow-hidden">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 perspective-grid" />
        <div aria-hidden="true" className="pointer-events-none absolute w-1.5 h-1.5 rounded-full bg-blue/12 -z-5" style={{ top: "22%", right: "14%", animation: "particle-float-2 10s ease-in-out infinite 3s" }} />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy text-center">
            How We Execute
          </h2>
          <p className="mt-3 text-muted text-center max-w-2xl mx-auto">
            Strategy, content, and paid media working together to build your
            audience and drive conversions.
          </p>
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Strategy Column */}
            <div className="rounded-xl border border-border bg-cadbury-purple p-6">
              <div
                className="gradient-icon"
                style={{ width: 40, height: 40 }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="mt-3 text-lg font-bold text-navy">Strategy</h3>
              <ul className="mt-4 space-y-2">
                {STRATEGY_ITEMS.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-muted"
                  >
                    <span className="mt-1 h-2 w-2 rounded-full gradient-bg shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Content Column */}
            <div className="rounded-xl border border-border bg-cadbury-purple p-6">
              <div
                className="gradient-icon"
                style={{ width: 40, height: 40 }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h3 className="mt-3 text-lg font-bold text-navy">
                Content Execution
              </h3>
              <ul className="mt-4 space-y-2">
                {CONTENT_ITEMS.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-muted"
                  >
                    <span className="mt-1 h-2 w-2 rounded-full gradient-bg shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Paid Campaigns Column */}
            <div className="rounded-xl border border-border bg-cadbury-purple p-6">
              <div
                className="gradient-icon"
                style={{ width: 40, height: 40 }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mt-3 text-lg font-bold text-navy">
                Paid Campaigns
              </h3>
              <ul className="mt-4 space-y-2">
                {PAID_ITEMS.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-muted"
                  >
                    <span className="mt-1 h-2 w-2 rounded-full gradient-bg shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative bg-cadbury-purple py-16 lg:py-24 section-grid-bg overflow-hidden noise-overlay">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 aurora-bg" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[700px] w-[700px] rounded-full bg-[rgba(22,104,217,0.05)] blur-[64px]" />
        <div aria-hidden="true" className="pointer-events-none absolute -z-5" style={{ width: 28, height: 28, top: "10%", left: "6%", border: "1px solid rgba(34,184,240,0.06)", borderRadius: 5, animation: "rotate-3d 22s linear infinite, float 14s ease-in-out infinite" }} />
        <div aria-hidden="true" className="pointer-events-none absolute w-1 h-1 rounded-full bg-cyan/15 -z-5" style={{ bottom: "18%", right: "10%", animation: "particle-float-2 10s ease-in-out infinite 3s" }} />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-2xl sm:text-3xl font-bold gradient-text text-center mb-12">
            How It Works
          </h2>
          <ProcessFlow steps={PROCESS.map((s) => ({ name: s.title, desc: s.desc }))} />
        </div>
      </section>

      <PageCTA
        title="Ready to grow on social?"
        description="Book a call and we'll audit your current presence for free."
      />
    </>
  );
}
