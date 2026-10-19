import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import PageCTA from "@/components/PageCTA";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent pricing for MVP development, staff augmentation, and AI custom builds. No hidden fees.",
};

const PLANS = [
  {
    name: "Rapid MVP",
    price: "Fixed price",
    unit: "80-hour build",
    desc: "Go from idea to a production-ready MVP in a focused sprint.",
    features: [
      "Design + development + deployment",
      "Delivered in 2 weeks",
      "Full code ownership from day one",
      "One round of revisions included",
      "Launch-ready infrastructure",
      "30-day post-launch support",
    ],
    cta: "Get an estimate",
    href: "/estimate",
    popular: true,
  },
  {
    name: "Staff Augmentation",
    price: "Monthly",
    unit: "per engineer",
    desc: "Embed pre-vetted senior engineers directly into your team.",
    features: [
      "Pre-vetted senior developers",
      "Quick integration with your workflows",
      "Flexible scaling up or down",
      "Daily stand-ups and progress reports",
      "Managed onboarding and performance",
      "Dedicated account manager",
    ],
    cta: "Hire a team",
    href: "/contact",
    popular: false,
  },
  {
    name: "AI & Custom Build",
    price: "Custom pricing",
    unit: "scoped to your needs",
    desc: "Discovery-led AI agents, chatbots, and full platform development.",
    features: [
      "Discovery and strategy workshops",
      "AI agents and chatbot development",
      "Full platform engineering",
      "LLM integration and fine-tuning",
      "Monitoring and performance dashboards",
      "Ongoing optimization retainer available",
    ],
    cta: "Book a call",
    href: "/contact",
    popular: false,
  },
];

const COMPARE = [
  { feature: "Code ownership", rapid: true, staff: true, ai: true },
  { feature: "Dedicated project manager", rapid: true, staff: true, ai: true },
  { feature: "UI/UX design included", rapid: true, staff: false, ai: true },
  { feature: "Fixed timeline", rapid: true, staff: false, ai: false },
  { feature: "Flexible team scaling", rapid: false, staff: true, ai: true },
  { feature: "AI/ML capabilities", rapid: false, staff: false, ai: true },
  { feature: "Post-launch support", rapid: true, staff: true, ai: true },
  { feature: "Discovery workshops", rapid: false, staff: false, ai: true },
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        tag="Pricing"
        title="Transparent pricing, no surprises"
        description="Choose the engagement model that fits your stage and budget. Every project gets full code ownership and a dedicated team."
        primaryCta="Get an estimate"
        primaryHref="/estimate"
      />

      <section className="relative section-grid-bg bg-cadbury-purple py-16 lg:py-24 overflow-hidden">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 aurora-bg" />
        <div aria-hidden="true" className="pointer-events-none absolute -z-5" style={{ width: 32, height: 32, top: "10%", right: "8%", border: "1px solid rgba(22,104,217,0.08)", borderRadius: 5, animation: "rotate-3d 24s linear infinite, float 12s ease-in-out infinite" }} />
        <div aria-hidden="true" className="pointer-events-none absolute -z-5 rounded-full" style={{ width: 20, height: 20, bottom: "15%", left: "6%", border: "1px solid rgba(139,92,246,0.06)", animation: "rotate-3d-slow 28s linear infinite reverse, float-diagonal 14s ease-in-out infinite 3s" }} />
        <div aria-hidden="true" className="pointer-events-none absolute w-1 h-1 rounded-full bg-cyan/15 -z-5" style={{ top: "30%", left: "12%", animation: "particle-float-1 8s ease-in-out infinite" }} />
        <div aria-hidden="true" className="pointer-events-none absolute w-1 h-1 rounded-full bg-blue/12 -z-5" style={{ bottom: "25%", right: "18%", animation: "particle-float-2 10s ease-in-out infinite 4s" }} />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {PLANS.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-xl border p-6 lg:p-8 flex flex-col bg-cadbury-purple ${
                  plan.popular ? "border-blue ring-2 ring-blue/20 shadow-lg shadow-blue/10" : "border-border"
                }`}
              >
                {/* Gradient glow behind popular card */}
                {plan.popular && (
                  <div
                    className="pointer-events-none absolute -inset-px -z-10 rounded-xl opacity-30 blur-lg"
                    style={{
                      background: "linear-gradient(135deg, #1668D9, #22B8F0)",
                    }}
                  />
                )}
                {plan.popular && (
                  <span className="inline-block self-start rounded-full gradient-bg px-3 py-1 text-xs font-semibold text-white mb-4">
                    Most popular
                  </span>
                )}
                <h2 className="text-lg font-bold text-navy">{plan.name}</h2>
                <p className="mt-2 text-sm text-muted">{plan.desc}</p>
                <div className="mt-4">
                  <span className="text-3xl font-extrabold text-navy">{plan.price}</span>
                  <span className="text-sm text-muted ml-1">{plan.unit}</span>
                </div>
                <ul className="mt-6 space-y-3 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-muted">
                      <svg width="16" height="16" viewBox="0 0 20 20" className="shrink-0 mt-0.5" aria-hidden="true">
                        <circle cx="10" cy="10" r="10" fill="url(#pg)" />
                        <path d="M6.5 10.5l2 2 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <defs><linearGradient id="pg" x1="0" y1="0" x2="20" y2="20"><stop stopColor="#22B8F0" /><stop offset="1" stopColor="#1668D9" /></linearGradient></defs>
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={plan.href}
                  className={`mt-6 block rounded-lg px-6 py-3 text-center text-sm font-semibold transition-opacity hover:opacity-90 ${
                    plan.popular ? "gradient-bg text-white" : "border border-border text-navy hover:border-blue/40"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="bg-light-bg py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy text-center mb-10">Compare plans</h2>
          <div className="overflow-x-auto rounded-xl border border-border bg-cadbury-purple">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-4 font-semibold text-navy">Feature</th>
                  <th className="p-4 font-semibold text-navy text-center">Rapid MVP</th>
                  <th className="p-4 font-semibold text-navy text-center">Staff Aug.</th>
                  <th className="p-4 font-semibold text-navy text-center">AI & Custom</th>
                </tr>
              </thead>
              <tbody>
                {COMPARE.map((row) => (
                  <tr key={row.feature} className="border-b border-border last:border-0">
                    <td className="p-4 text-muted">{row.feature}</td>
                    {[row.rapid, row.staff, row.ai].map((val, i) => (
                      <td key={i} className="p-4 text-center">
                        {val ? (
                          <svg width="18" height="18" viewBox="0 0 20 20" className="inline-block" aria-label="Included"><circle cx="10" cy="10" r="10" fill="url(#cg)" /><path d="M6.5 10.5l2 2 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><defs><linearGradient id="cg" x1="0" y1="0" x2="20" y2="20"><stop stopColor="#22B8F0" /><stop offset="1" stopColor="#1668D9" /></linearGradient></defs></svg>
                        ) : (
                          <span className="text-muted/40">--</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-center text-sm text-muted">
            All prices in USD. Need something custom?{" "}
            <Link href="/contact" className="font-semibold text-blue hover:underline">Let&apos;s talk</Link>.
          </p>
        </div>
      </section>

      <PageCTA />
    </>
  );
}
