import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import PageCTA from "@/components/PageCTA";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join CodeNax: remote-first, senior-driven, and obsessed with craft. See open roles and benefits.",
};

const BENEFITS = [
  {
    title: "Remote-Friendly",
    desc: "Work from anywhere. Our team spans multiple time zones and we have been remote-first from day one.",
  },
  {
    title: "Modern Technology",
    desc: "React, Next.js, Node, Python, AWS, AI/ML: you will always work with tools that excite you.",
  },
  {
    title: "Professional Development",
    desc: "Annual learning budgets, conference sponsorships, and mentorship from senior engineers.",
  },
  {
    title: "Work-Life Balance",
    desc: "Flexible hours, generous PTO, and a no-overtime culture that respects your personal time.",
  },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        title="Join the team"
        description="We are builders, designers, and problem-solvers who care about craft. If that sounds like you, we would love to talk."
        primaryCta="Contact us"
      />

      {/* Open Positions */}
      <section className="section-grid-bg bg-cadbury-purple py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy">Open positions</h2>
          <p className="mt-4 text-muted max-w-xl mx-auto">
            We don&apos;t have any roles open at the moment, but we&apos;re always happy to hear from talented people.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue hover:underline"
          >
            Send us your resume
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-light-bg py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy text-center">Why people stay</h2>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {BENEFITS.map((b) => (
              <div key={b.title} className="card-hover rounded-xl border border-border bg-cadbury-purple p-6">
                <h3 className="text-lg font-bold text-navy">{b.title}</h3>
                <p className="mt-2 text-sm text-muted">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageCTA
        title="Interested? Send us your resume"
        description="Even without open roles, we keep great applications on file. Reach out and introduce yourself."
      />
    </>
  );
}
