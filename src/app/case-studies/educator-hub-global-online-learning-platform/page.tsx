import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Educator Hub - Global Online Learning Platform",
  description: "How CodeNax built a global platform enabling educators to create and sell courses.",
};

export default function EducatorHubCaseStudy() {
  return (
    <>
      <PageHero
        tag="Education"
        title="Educator Hub: Global Online Learning Platform"
        description="A marketplace platform where educators create, sell, and manage courses with built-in analytics."
      />

      <section className="relative bg-cadbury-purple py-16 lg:py-24 section-grid-bg">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Hero image */}
          <div className="relative overflow-hidden rounded-2xl mb-12">
            <div
              className="aspect-[16/9] bg-cover bg-center"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=1200&q=80')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
          <div>
            <h2 className="text-sm font-semibold text-navy uppercase tracking-wider">The Challenge</h2>
            <p className="mt-3 text-muted">Independent educators needed a platform to host, market, and sell their courses without the steep fees and limited customization of existing marketplaces.</p>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-navy uppercase tracking-wider">Our Solution</h2>
            <p className="mt-3 text-muted">We built a white-label course marketplace with video hosting, student progress tracking, payment processing, certificate generation, and an analytics dashboard for educators.</p>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-navy uppercase tracking-wider">Key Results</h2>
            <div className="mt-4 grid grid-cols-2 gap-4">
              {[
                { value: "500+", label: "Courses published" },
                { value: "25K+", label: "Enrolled students" },
                { value: "92%", label: "Completion rate" },
                { value: "18", label: "Countries reached" },
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
              {["Next.js", "Node.js", "PostgreSQL", "Mux Video", "Stripe", "Vercel"].map((t) => (
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
