import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import PageCTA from "@/components/PageCTA";

export const metadata: Metadata = {
  title: "Why Us",
  description:
    "Senior expertise, genuine ownership, and measurable outcomes. Discover what makes CodeNax different.",
};

const STATS = [
  { value: "120+", label: "Live apps delivered" },
  { value: "99%", label: "Client retention" },
  { value: "10+", label: "Years experience" },
  { value: "8+", label: "Industries served" },
];

const DIFFS = [
  { title: "User-Centric Design", desc: "Every interface starts with research, not assumptions. We validate with real users before writing a single line of code." },
  { title: "Scalable Architecture", desc: "Our systems are built to handle 10x growth without re-architecture, using proven patterns and cloud-native infrastructure." },
  { title: "AI Integration", desc: "We embed AI where it adds real value, from intelligent automation to predictive analytics and conversational agents." },
  { title: "Industry Compliance", desc: "HIPAA, SOC 2, GDPR, PCI-DSS: we build compliance into the architecture from day one, not as an afterthought." },
  { title: "Long-Term Support", desc: "Launch is just the beginning. We provide ongoing monitoring, optimization, and feature development for years." },
  { title: "Transparent Communication", desc: "Weekly demos, shared dashboards, and direct Slack access. You always know where your project stands." },
];

const MVP_ROWS = [
  { label: "Timeline", us: "2 weeks", them: "3-6 months" },
  { label: "Pricing", us: "Fixed", them: "Hourly" },
  { label: "Risk", us: "Lower", them: "Higher" },
];

const STAFF_ROWS = [
  { label: "Onboarding", us: "Days", them: "Months" },
  { label: "Flexibility", us: "Scale up/down", them: "Fixed headcount" },
  { label: "Cost", us: "Lower overhead", them: "Higher overhead" },
];

export default function WhyUsPage() {
  return (
    <>
      <PageHero
        title="A partner invested in your outcome"
        description="We pair senior expertise with genuine ownership so every decision, line of code, and design choice drives measurable results for your business."
        primaryCta="Book a call"
      />

      {/* Stats */}
      <section className="bg-cadbury-purple py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {STATS.map((s) => (
              <div key={s.label}>
                <p className="text-4xl font-bold gradient-text">{s.value}</p>
                <p className="mt-1 text-sm text-muted">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="relative bg-light-bg py-16 lg:py-24 section-grid-bg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center"><span className="gradient-text">What sets us apart</span></h2>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {DIFFS.map((d) => (
              <div key={d.title} className="rounded-xl border border-border bg-cadbury-purple p-6 card-hover">
                <h3 className="text-lg font-bold text-navy">{d.title}</h3>
                <p className="mt-2 text-sm text-muted">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Tables */}
      <section className="bg-cadbury-purple py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          {/* MVP comparison */}
          <div>
            <h2 className="text-2xl font-bold text-navy text-center">80-hour MVP vs Traditional Agency</h2>
            <div className="mt-8 overflow-x-auto">
              <table className="mx-auto w-full max-w-2xl text-left text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="py-3 pr-4 font-semibold text-muted" />
                    <th className="py-3 px-4 font-semibold text-navy">CodeNax MVP</th>
                    <th className="py-3 px-4 font-semibold text-navy">Traditional Agency</th>
                  </tr>
                </thead>
                <tbody>
                  {MVP_ROWS.map((r) => (
                    <tr key={r.label} className="border-b border-border">
                      <td className="py-3 pr-4 font-medium text-navy">{r.label}</td>
                      <td className="py-3 px-4 text-muted">{r.us}</td>
                      <td className="py-3 px-4 text-muted">{r.them}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Staff Augmentation comparison */}
          <div>
            <h2 className="text-2xl font-bold text-navy text-center">Staff Augmentation vs In-house Hiring</h2>
            <div className="mt-8 overflow-x-auto">
              <table className="mx-auto w-full max-w-2xl text-left text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="py-3 pr-4 font-semibold text-muted" />
                    <th className="py-3 px-4 font-semibold text-navy">CodeNax</th>
                    <th className="py-3 px-4 font-semibold text-navy">In-house</th>
                  </tr>
                </thead>
                <tbody>
                  {STAFF_ROWS.map((r) => (
                    <tr key={r.label} className="border-b border-border">
                      <td className="py-3 pr-4 font-medium text-navy">{r.label}</td>
                      <td className="py-3 px-4 text-muted">{r.us}</td>
                      <td className="py-3 px-4 text-muted">{r.them}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="relative isolate overflow-hidden bg-light-bg py-16 lg:py-24">
        {/* Subtle glow orb */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 rounded-full"
          style={{ width: 500, height: 500, background: "rgba(22,104,217,0.05)", filter: "blur(64px)" }}
        />
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-xl sm:text-2xl font-medium text-navy italic leading-relaxed">
            &ldquo;CodeNax helped us expand Educator Hub to 120+ countries. Their team understood our vision from day one and delivered a platform that scaled far beyond our initial expectations.&rdquo;
          </blockquote>
          <p className="mt-6 text-sm font-semibold text-navy">CEO, Educator Hub</p>
        </div>
      </section>

      <PageCTA />
    </>
  );
}
