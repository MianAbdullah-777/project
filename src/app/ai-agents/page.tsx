import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "AI Agents",
  description:
    "Purpose-built AI agents by CodeNax — Concierge, Support, Sales, and Ops agents that integrate with your tools and scale with your business.",
};

const AGENTS = [
  {
    name: "Concierge Agent",
    desc: "Greets every visitor in real time, understands their intent, and routes them to the right team or resource — instantly and accurately.",
    capabilities: [
      "Multi-language greeting and routing",
      "Seamless handoff to human agents",
      "CRM and calendar integration",
      "Customizable personality and tone",
    ],
    metrics: [
      { label: "Routing accuracy", value: "97.2%" },
      { label: "Avg response time", value: "1.4s" },
      { label: "Languages supported", value: "12" },
      { label: "Uptime", value: "99.9%" },
    ],
  },
  {
    name: "Support Agent",
    desc: "Handles tier-1 support tickets with context-aware, human-like responses. Escalates complex issues to your team with full conversation history.",
    capabilities: [
      "Knowledge base auto-sync",
      "Ticket triage and prioritization",
      "Sentiment detection and escalation",
      "Helpdesk integration (Zendesk, Intercom, Freshdesk)",
    ],
    metrics: [
      { label: "Resolution rate", value: "89%" },
      { label: "Uptime", value: "99.9%" },
      { label: "Avg handle time", value: "42s" },
      { label: "CSAT score", value: "4.7/5" },
    ],
  },
  {
    name: "Sales Agent",
    desc: "Qualifies inbound leads 24/7, books demos, and nurtures prospects through personalized follow-up sequences.",
    capabilities: [
      "Lead scoring and qualification",
      "Automated demo booking",
      "CRM pipeline updates",
      "Personalized email sequences",
    ],
    metrics: [
      { label: "Leads qualified/mo", value: "340+" },
      { label: "Qualification accuracy", value: "94%" },
      { label: "Demos booked/mo", value: "85+" },
      { label: "Uptime", value: "99.8%" },
    ],
  },
  {
    name: "Ops Agent",
    desc: "Automates repetitive back-office tasks — data entry, report generation, invoice processing, and cross-system reconciliation.",
    capabilities: [
      "Workflow automation across tools",
      "Scheduled report generation",
      "Data extraction and validation",
      "ERP and accounting integration",
    ],
    metrics: [
      { label: "Tasks/day", value: "1,200+" },
      { label: "Uptime", value: "99.8%" },
      { label: "Error rate", value: "<0.3%" },
      { label: "Time saved/week", value: "40hrs" },
    ],
  },
];

export default function AIAgentsPage() {
  return (
    <>
      <section className="bg-light-bg py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="AI Agents"
            title="Intelligent agents, working for you"
            highlight="working for you"
            description="Deploy purpose-built AI agents that integrate with your existing tools, learn from your data, and scale with your business."
          />
        </div>
      </section>

      <section className="bg-cadbury-purple py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {AGENTS.map((agent) => (
              <div
                key={agent.name}
                className="rounded-xl border border-border p-6 flex flex-col hover:border-blue/40 transition-colors"
              >
                <div className="flex items-center justify-between mb-3">
                  <h2 className="text-base font-bold text-navy">{agent.name}</h2>
                  <span className="inline-flex items-center gap-1 rounded-full bg-green-bg px-2.5 py-0.5 text-[11px] font-semibold text-green">
                    <span className="h-1.5 w-1.5 rounded-full bg-green" />
                    Live
                  </span>
                </div>
                <p className="text-sm text-muted">{agent.desc}</p>

                <div className="mt-5 mb-5 border-t border-border" />

                <h3 className="text-xs font-semibold text-navy uppercase tracking-wider mb-3">
                  Capabilities
                </h3>
                <ul className="space-y-2 flex-1">
                  {agent.capabilities.map((c) => (
                    <li
                      key={c}
                      className="flex items-start gap-2 text-sm text-muted"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 20 20"
                        className="shrink-0 mt-0.5"
                        aria-hidden="true"
                      >
                        <circle cx="10" cy="10" r="10" fill="url(#cg)" />
                        <path
                          d="M6.5 10.5l2 2 5-5"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <defs>
                          <linearGradient id="cg" x1="0" y1="0" x2="20" y2="20">
                            <stop stopColor="#22B8F0" />
                            <stop offset="1" stopColor="#1668D9" />
                          </linearGradient>
                        </defs>
                      </svg>
                      {c}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 mb-5 border-t border-border" />

                <h3 className="text-xs font-semibold text-navy uppercase tracking-wider mb-3">
                  Performance
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {agent.metrics.map((m) => (
                    <div key={m.label}>
                      <p className="text-xl font-bold text-navy">{m.value}</p>
                      <p className="text-[11px] text-muted">{m.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-light-bg py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-navy">
            Ready to deploy an <span className="gradient-text">AI agent</span>?
          </h2>
          <p className="mt-4 text-muted text-lg">
            Tell us about your use case and we&apos;ll scope a custom agent in 48 hours.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="gradient-bg inline-flex items-center gap-2 rounded-lg px-6 py-3 text-base font-semibold text-white transition-opacity hover:opacity-90"
            >
              Get started
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
