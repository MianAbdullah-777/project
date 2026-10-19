import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import PageCTA from "@/components/PageCTA";
import ProcessFlow from "@/components/ProcessFlow";

export const metadata: Metadata = {
  title: "About",
  description:
    "12+ years of building digital products with creativity, senior expertise, and long-term client partnerships.",
};

const STATS = [
  { value: "120+", label: "Live apps delivered" },
  { value: "99%", label: "Client retention" },
  { value: "10+", label: "Years experience" },
  { value: "8+", label: "Industries served" },
];

const HIGHLIGHTS = [
  { title: "AI Development", href: "/services/ai-development", desc: "Custom AI models, agents, and automation built for real business impact." },
  { title: "Staff Augmentation", href: "/services/staff-augmentation", desc: "Senior engineers embedded in your team, managed by us." },
  { title: "MVP Development", href: "/services/web-development", desc: "Launch a validated product in weeks, not months." },
];

const STEPS = [
  { name: "Discover", desc: "Research your market, users, and goals." },
  { name: "Design", desc: "Wireframes, prototypes, and design systems." },
  { name: "Develop", desc: "Clean, scalable code with continuous reviews." },
  { name: "Test", desc: "Automated QA, performance, and security audits." },
  { name: "Launch", desc: "Deployment, monitoring, and documentation." },
  { name: "Scale", desc: "Analytics, optimization, and ongoing support." },
];

const VALUES = [
  { name: "Respect", desc: "We treat every stakeholder with honesty and professionalism." },
  { name: "Curiosity", desc: "We question assumptions and explore better solutions." },
  { name: "Innovation", desc: "We push boundaries while staying grounded in results." },
  { name: "Commitment", desc: "We own every deliverable as if it were our own product." },
  { name: "Courage", desc: "We challenge the status quo when it serves the client." },
  { name: "Trust", desc: "We earn it through transparency, consistency, and results." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        tag="About"
        title="We have the Courage to Innovate"
        description="For over 12 years we have combined creativity with senior engineering expertise to build digital products that last. Our clients stay because we treat their goals as our own."
        primaryCta="Book a call"
        secondaryCta="See our work"
        secondaryHref="/case-studies"
      />

      {/* Stats */}
      <section className="relative bg-cadbury-purple py-16 lg:py-24 overflow-hidden">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 perspective-grid" />
        <div aria-hidden="true" className="pointer-events-none absolute w-1.5 h-1.5 rounded-full bg-cyan/15 -z-5" style={{ top: "20%", right: "15%", animation: "particle-float-1 8s ease-in-out infinite" }} />
        <div aria-hidden="true" className="pointer-events-none absolute w-1 h-1 rounded-full bg-blue/12 -z-5" style={{ bottom: "25%", left: "20%", animation: "particle-float-2 10s ease-in-out infinite 3s" }} />
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

      {/* Service Highlights */}
      <section className="bg-light-bg py-16 lg:py-24 section-grid-bg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold gradient-text text-center">What we do best</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {HIGHLIGHTS.map((h) => (
              <Link key={h.title} href={h.href} className="rounded-xl border border-border bg-cadbury-purple p-6 card-hover group">
                <h3 className="text-lg font-bold text-navy group-hover:text-blue transition-colors">{h.title}</h3>
                <p className="mt-2 text-sm text-muted">{h.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process Flowchart */}
      <section className="relative bg-cadbury-purple py-16 lg:py-24 section-grid-bg overflow-hidden noise-overlay">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 aurora-bg" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[700px] w-[700px] rounded-full bg-[rgba(22,104,217,0.05)] blur-[64px]" />
        <div aria-hidden="true" className="pointer-events-none absolute -z-5" style={{ width: 32, height: 32, top: "10%", right: "7%", border: "1px solid rgba(22,104,217,0.08)", borderRadius: 5, animation: "rotate-3d 24s linear infinite, float 14s ease-in-out infinite" }} />
        <div aria-hidden="true" className="pointer-events-none absolute w-1 h-1 rounded-full bg-cyan/15 -z-5" style={{ bottom: "20%", left: "12%", animation: "particle-float-1 9s ease-in-out infinite 2s" }} />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-2xl sm:text-3xl font-bold gradient-text text-center mb-12">Our process</h2>
          <ProcessFlow steps={STEPS} />
        </div>
      </section>

      {/* Values */}
      <section className="bg-light-bg py-16 lg:py-24 section-grid-bg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold gradient-text text-center">Our values</h2>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {VALUES.map((v) => (
              <div key={v.name} className="rounded-xl border border-border bg-cadbury-purple p-6 group card-hover">
                <div className="gradient-icon-hover h-10 w-10 text-sm font-bold mb-3">{v.name[0]}</div>
                <h3 className="text-lg font-bold text-navy">{v.name}</h3>
                <p className="mt-2 text-sm text-muted">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CEO Quote */}
      <section className="relative bg-cadbury-purple py-16 lg:py-24 overflow-hidden">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 aurora-bg" />
        <div aria-hidden="true" className="pointer-events-none absolute -z-5" style={{ width: 28, height: 28, top: "15%", left: "8%", border: "1px solid rgba(22,104,217,0.08)", borderRadius: 4, animation: "rotate-3d 20s linear infinite, float 12s ease-in-out infinite" }} />
        <div aria-hidden="true" className="pointer-events-none absolute -z-5 rounded-full" style={{ width: 18, height: 18, bottom: "20%", right: "10%", border: "1px solid rgba(139,92,246,0.06)", animation: "rotate-3d-slow 26s linear infinite reverse, float-diagonal 14s ease-in-out infinite 3s" }} />
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-xl sm:text-2xl font-medium text-navy italic leading-relaxed">
            &ldquo;We fuel growth with expertise, creativity, and a relentless commitment to our clients&rsquo; success. Every product we build is a partnership, not a transaction.&rdquo;
          </blockquote>
          <p className="mt-6 text-sm font-semibold text-navy">Salman</p>
          <p className="text-sm text-muted">CEO, CodeNax</p>
        </div>
      </section>

      <PageCTA />
    </>
  );
}
