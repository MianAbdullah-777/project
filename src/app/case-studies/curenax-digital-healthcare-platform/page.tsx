import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "CureNax - Digital Healthcare Platform",
  description: "How CodeNax built a HIPAA-ready patient management platform that cut admin time by 45%.",
};

export default function CureNaxCaseStudy() {
  return (
    <>
      <PageHero
        tag="Healthcare"
        title="CureNax: Digital Healthcare Platform"
        description="A HIPAA-ready patient management system for a network of three clinics."
      />

      <section className="relative bg-cadbury-purple py-16 lg:py-24 section-grid-bg">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Hero image */}
          <div className="relative overflow-hidden rounded-2xl mb-12">
            <div
              className="aspect-[16/9] bg-cover bg-center"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
          <div>
            <h2 className="text-sm font-semibold text-navy uppercase tracking-wider">The Challenge</h2>
            <p className="mt-3 text-muted">A network of three clinics relied on paper-based patient records and phone scheduling. Appointment no-shows were running at 28%, and administrative staff spent most of their time on manual data entry.</p>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-navy uppercase tracking-wider">Our Solution</h2>
            <p className="mt-3 text-muted">We built a HIPAA-ready patient management platform with digital records, automated appointment reminders via SMS and email, an online booking portal, and a real-time dashboard for clinic managers.</p>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-navy uppercase tracking-wider">Key Results</h2>
            <div className="mt-4 grid grid-cols-2 gap-4">
              {[
                { value: "35%", label: "Reduction in no-shows" },
                { value: "45%", label: "Admin time saved" },
                { value: "12 wks", label: "Time to full launch" },
                { value: "100%", label: "HIPAA compliant" },
              ].map((m) => (
                <div key={m.label} className="rounded-xl border border-border bg-light-bg p-4 text-center">
                  <p className="text-2xl font-bold gradient-text">{m.value}</p>
                  <p className="mt-1 text-xs text-muted">{m.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-navy uppercase tracking-wider">Tech Stack</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {["Next.js", "Node.js", "PostgreSQL", "AWS", "Twilio", "Stripe"].map((t) => (
                <span key={t} className="rounded-full bg-light-bg px-3 py-1 text-xs font-medium text-navy border border-border">{t}</span>
              ))}
            </div>
          </div>
          <Link href="/case-studies" className="inline-flex items-center gap-2 text-sm font-semibold text-blue hover:underline">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M13 8H3m0 0l4 4M3 8l4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            Back to all case studies
          </Link>
        </div>
      </section>
    </>
  );
}
