"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import PageCTA from "@/components/PageCTA";

const INDUSTRIES = [
  {
    name: "Healthcare",
    description: "Compliant, patient-first digital health products built with HIPAA from day one.",
    builds: ["Patient portals & telehealth", "AI triage & clinical assistants", "HIPAA-compliant infrastructure", "Remote monitoring"],
    caseStudy: { label: "CureNax", href: "/case-studies/curenax-digital-healthcare-platform" },
  },
  {
    name: "Finance & Business",
    description: "Secure fintech solutions that streamline operations and accelerate growth.",
    builds: ["Payment platforms", "Invoice management", "Banking apps", "Financial dashboards"],
    caseStudy: { label: "Fintech Invoicing", href: "/case-studies/fintech-solution-for-smarter-invoicing" },
  },
  {
    name: "Retail & E-commerce",
    description: "Conversion-focused shopping experiences that turn browsers into buyers.",
    builds: ["Custom storefronts", "Inventory management", "Loyalty programs", "Mobile commerce"],
    caseStudy: null,
  },
  {
    name: "Education",
    description: "Engaging digital learning platforms that make education accessible anywhere.",
    builds: ["LMS platforms", "Exam prep apps", "Student portals", "Virtual classrooms"],
    caseStudy: { label: "PrépaBac Tchad", href: "/case-studies/prepabac-tchad-learning-app" },
  },
  {
    name: "Logistics",
    description: "Streamlined supply chain solutions for end-to-end visibility.",
    builds: ["Fleet management", "Route optimization", "Warehouse systems", "Real-time tracking"],
    caseStudy: null,
  },
  {
    name: "Real Estate",
    description: "Property tech that converts leads and simplifies management.",
    builds: ["Listing platforms", "Virtual tours", "CRM systems", "Property management"],
    caseStudy: null,
  },
  {
    name: "Travel & Tourism",
    description: "Booking experiences people love, from discovery to checkout.",
    builds: ["Booking engines", "Itinerary planners", "Hotel management", "Travel apps"],
    caseStudy: null,
  },
  {
    name: "Food & Delivery",
    description: "End-to-end food ordering systems from kitchen to doorstep.",
    builds: ["Ordering apps", "Kitchen management", "Delivery tracking", "Restaurant POS"],
    caseStudy: { label: "ALKEBABISH", href: "/case-studies/alkebabish-food-ordering-app" },
  },
];

const CROSS_FEATURES = [
  { icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z", title: "Security & Compliance", desc: "Built-in encryption, role-based access, and industry-standard compliance from day one." },
  { icon: "M18 20V10M12 20V4M6 20v-6", title: "Scalable Architecture", desc: "Cloud-native infrastructure designed to grow with your user base and data volume." },
  { icon: "M13 2L3 14h9l-1 8 10-12h-9l1-8", title: "AI Integration", desc: "Smart automation, predictive analytics, and intelligent workflows embedded where they matter." },
];

const TAB_MAP: Record<string, number> = {
  healthcare: 0,
  finance: 1,
  retail: 2,
  education: 3,
  logistics: 4,
  "real-estate": 5,
  travel: 6,
  food: 7,
};

export default function IndustriesPage() {
  const searchParams = useSearchParams();
  const [active, setActive] = useState(() => {
    const tab = typeof window !== "undefined" ? new URLSearchParams(window.location.search).get("tab") : null;
    return tab && TAB_MAP[tab] !== undefined ? TAB_MAP[tab] : 0;
  });
  const industry = INDUSTRIES[active];

  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab && TAB_MAP[tab] !== undefined) {
      setActive(TAB_MAP[tab]);
    }
  }, [searchParams]);

  return (
    <>
      <PageHero
        tag="Industries"
        title="Software built for your industry"
        description="We have shipped 100+ products across 8 industries. Here is how we can help yours."
        primaryCta="Start your project"
        primaryHref="/contact"
        secondaryCta="See our work"
        secondaryHref="/case-studies"
      />

      <section className="bg-cadbury-purple py-16 lg:py-24 section-grid-bg relative overflow-hidden">
        {/* Glow orb */}
        <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-[rgba(22,104,217,0.10)] blur-[64px]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {INDUSTRIES.map((ind, i) => (
              <button
                key={ind.name}
                onClick={() => setActive(i)}
                className={`relative px-4 py-2 text-sm font-semibold transition-colors ${
                  active === i
                    ? "text-blue"
                    : "text-muted hover:text-navy"
                }`}
              >
                {ind.name}
                {active === i && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 gradient-bg rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* Active industry detail */}
          <div className="rounded-xl border border-border bg-light-bg p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-navy">{industry.name}</h3>
            <p className="mt-3 text-muted text-lg">{industry.description}</p>

            <div className="mt-8">
              <h4 className="text-sm font-semibold text-navy uppercase tracking-wider">What We Build</h4>
              <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {industry.builds.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-muted">
                    <svg width="16" height="16" viewBox="0 0 20 20" className="shrink-0" aria-hidden="true">
                      <circle cx="10" cy="10" r="10" fill="url(#ig)" />
                      <path d="M6.5 10.5l2 2 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <defs><linearGradient id="ig" x1="0" y1="0" x2="20" y2="20"><stop stopColor="#22B8F0" /><stop offset="1" stopColor="#1668D9" /></linearGradient></defs>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {industry.caseStudy && (
              <Link
                href={industry.caseStudy.href}
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-blue hover:underline"
              >
                Read {industry.caseStudy.label} case study
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* Cross-industry features */}
      <section className="bg-light-bg py-16 lg:py-24 section-grid-bg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold gradient-text text-center">Built into every project</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {CROSS_FEATURES.map((f) => (
              <div key={f.title} className="rounded-xl border border-border bg-cadbury-purple p-6 group card-hover">
                <div className="gradient-icon h-12 w-12 mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d={f.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-navy">{f.title}</h3>
                <p className="mt-2 text-sm text-muted">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageCTA />
    </>
  );
}
