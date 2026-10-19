import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import PageCTA from "@/components/PageCTA";
import ProcessFlow from "@/components/ProcessFlow";

export const metadata: Metadata = {
  title: "Process",
  description:
    "Six clear stages from idea to impact. Discover how CodeNax maintains predictability and quality at every step.",
};

const STEPS = [
  {
    name: "Discover",
    duration: "1-2 weeks",
    summary: "We immerse ourselves in your market, users, and business goals to define a clear project scope.",
    deliverables: ["User research", "Competitor analysis", "Scope document", "Tech recommendations"],
  },
  {
    name: "Design",
    duration: "2-3 weeks",
    summary: "We translate research into intuitive interfaces and a cohesive design system validated with stakeholders.",
    deliverables: ["Wireframes", "UI mockups", "Design system", "Interactive prototype"],
  },
  {
    name: "Develop",
    duration: "4-12 weeks",
    summary: "Our engineers build the product in iterative sprints with continuous code reviews and client demos.",
    deliverables: ["Frontend implementation", "Backend & APIs", "Third-party integrations", "Code reviews"],
  },
  {
    name: "Test",
    duration: "1-2 weeks",
    summary: "Rigorous QA ensures performance, security, and reliability before anything reaches production.",
    deliverables: ["Test plans", "Bug reports", "Performance benchmarks", "Security audit"],
  },
  {
    name: "Launch",
    duration: "1 week",
    summary: "We deploy to production with monitoring, documentation, and a smooth handover to your team.",
    deliverables: ["Production deployment", "Monitoring setup", "Technical documentation", "Team handover"],
  },
  {
    name: "Scale",
    duration: "Ongoing",
    summary: "Post-launch, we optimize performance, plan new features, and provide reliable ongoing support.",
    deliverables: ["Analytics & insights", "Performance optimization", "Feature roadmap", "Dedicated support"],
  },
];

export default function ProcessPage() {
  return (
    <>
      <PageHero
        title="From idea to impact, step by step"
        description="Our six-stage process keeps every project on track and on budget. Clear milestones, weekly demos, and shared dashboards maintain predictability from kickoff to scale."
        primaryCta="Start your project"
        secondaryCta="See our work"
        secondaryHref="/case-studies"
      />

      {/* Overview Flowchart */}
      <section className="relative isolate overflow-hidden bg-cadbury-purple py-16 lg:py-24 section-grid-bg noise-overlay">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 aurora-bg" />
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{ width: 700, height: 700, background: "rgba(22,104,217,0.05)", filter: "blur(64px)" }}
        />
        <div aria-hidden="true" className="pointer-events-none absolute -z-5" style={{ width: 36, height: 36, top: "12%", right: "8%", border: "1px solid rgba(22,104,217,0.10)", borderRadius: 6, animation: "rotate-3d 22s linear infinite, float 12s ease-in-out infinite" }} />
        <div aria-hidden="true" className="pointer-events-none absolute -z-5 rounded-full" style={{ width: 22, height: 22, bottom: "15%", left: "5%", border: "1px solid rgba(34,184,240,0.08)", animation: "rotate-3d-slow 28s linear infinite, float-diagonal 16s ease-in-out infinite 4s" }} />
        <div aria-hidden="true" className="pointer-events-none absolute w-1 h-1 rounded-full bg-cyan/15 -z-5" style={{ top: "25%", left: "15%", animation: "particle-float-1 8s ease-in-out infinite" }} />
        <div aria-hidden="true" className="pointer-events-none absolute w-1 h-1 rounded-full bg-blue/12 -z-5" style={{ bottom: "20%", right: "18%", animation: "particle-float-2 10s ease-in-out infinite 3s" }} />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-2xl sm:text-3xl font-bold gradient-text text-center mb-12">Our development journey</h2>
          <ProcessFlow
            steps={STEPS.map((s) => ({ name: s.name, desc: s.summary.split(" ").slice(0, 10).join(" ") + "…", duration: s.duration }))}
          />
        </div>
      </section>

      {/* Detailed Sections */}
      {STEPS.map((s, i) => (
        <section key={s.name} className={`relative overflow-hidden ${i % 2 === 0 ? "bg-light-bg section-grid-bg" : "bg-cadbury-purple noise-overlay"} py-16 lg:py-24`}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              <div>
                <span className="inline-block rounded-full gradient-bg px-3 py-1 text-xs font-semibold text-white">
                  Step {i + 1}
                </span>
                <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-navy">{s.name}</h2>
                <p className="mt-2 text-sm font-medium text-blue">Duration: {s.duration}</p>
                <p className="mt-4 text-muted">{s.summary}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-navy uppercase tracking-wide">Deliverables</h3>
                <ul className="mt-4 space-y-3">
                  {s.deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-sm text-muted">
                      <svg className="mt-0.5 h-4 w-4 shrink-0 text-blue" fill="none" viewBox="0 0 16 16" aria-hidden="true">
                        <path d="M4 8l3 3 5-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}

      <PageCTA />
    </>
  );
}
