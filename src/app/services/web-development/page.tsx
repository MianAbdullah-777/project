"use client";

import { useState } from "react";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import PageCTA from "@/components/PageCTA";
import ProcessFlow from "@/components/ProcessFlow";

const BUILDS = [
  { step: "01", title: "Web Applications", desc: "Fast, secure, and scalable web applications with a maintainable code base tailored to your business. Served clients across 8+ industries." },
  { step: "02", title: "Web Portals", desc: "Portals with security embedded from inception and efficient role-based databases that limit access for each role to ensure smooth operations." },
  { step: "03", title: "Websites", desc: "Fast, responsive, secure, and visually engaging websites that effectively represent your brand — corporate sites, portfolios, landing pages, and content-driven platforms." },
  { step: "04", title: "E-commerce", desc: "Conversion-focused platforms that keep clutter minimal and optimize user journeys to boost sales while reducing bounce rates." },
  { step: "05", title: "Analytics Applications", desc: "Transform complicated data into actionable insights through dashboards, reports, and visualizations, merging data from multiple sources." },
  { step: "06", title: "CMS Development", desc: "Manage, organize, and publish website content efficiently without relying on developers. Secure, scalable, and customizable to your requirements." },
];

const STEPS = [
  { step: "01", title: "Business Analysis", desc: "Examine market conditions, competition, target audiences, and necessary features before coding begins." },
  { step: "02", title: "Planning & Wireframing", desc: "Design product structure, navigation, and user flow using wireframing techniques to maximize conversions." },
  { step: "03", title: "UI/UX Design", desc: "Create interfaces that are simple and attractive while remaining functionally feasible and aligned with business objectives." },
  { step: "04", title: "Front-end Development", desc: "Convert approved designs into interactive, fast, and responsive web experiences across desktop, tablet, and mobile." },
  { step: "05", title: "Back-end Development", desc: "Ensure solutions are secure, scalable, and unbreakable using modern tools and languages." },
  { step: "06", title: "Integration", desc: "Integrate into existing systems including CRM, accounting software, third-party APIs, and payment gateways." },
  { step: "07", title: "Cloud Migration", desc: "Secure, scalable, and reliable cloud infrastructure for files, data, APIs, and application services." },
  { step: "08", title: "Testing & QA", desc: "Comprehensive testing covering usability, functionality, responsiveness, performance, security, and integration." },
  { step: "09", title: "Deployment", desc: "Transition from development to production with configured hosting, domains, databases, security, and monitored releases." },
  { step: "10", title: "Maintenance & Support", desc: "Post-launch services to maintain functionality, address bugs, and provide regular updates as a long-term partner." },
];

const TIERS = [
  { title: "Corporate Website", price: "$10,000", desc: "Marketing sites with CMS, SEO, and analytics." },
  { title: "Customer Self-Service Portal", price: "$50,000", desc: "Multi-role portals with auth, dashboards, and integrations." },
  { title: "Custom E-commerce Platform", price: "$80,000", desc: "Storefronts with payments, inventory, and fulfillment." },
  { title: "Enterprise Web Application", price: "$100,000", desc: "Complex systems with microservices, SSO, and compliance." },
];

const SEO_POINTS = [
  "Search visibility and machine readability for Google and Bing",
  "Optimization for AI-powered discovery platforms like Gemini and ChatGPT",
  "Accessible to search engine crawlers without compromising security or privacy",
  "Enhanced brand awareness, trust, and revenue through AI visibility",
];

const WHY_US = [
  { title: "Agile Development", desc: "An established agile development culture that involves clients at every stage through continuous feedback loops, reducing revisions and costs." },
  { title: "Deadline Reliability", desc: "We set ambitious yet realistic timelines and commit to on-time delivery consistently." },
  { title: "Cost Transparency", desc: "Every project begins with a detailed budget and expense breakdown with no hidden charges." },
];

const TECH_STACK = [
  { category: "Front-end", items: ["CSS", "HTML", "JavaScript", "Angular", "React", "Vue.js", "Ember", "Meteor", "Svelte", "SolidJS"] },
  { category: "Back-end", items: ["Python", "Node.js", ".NET", "Go", "Java", "PHP", "Ruby", "Kotlin"] },
  { category: "Platforms", items: ["SharePoint", "Dynamics 365", "Salesforce", "Atlassian"] },
  { category: "Databases & Storage", items: ["MySQL", "SQL Server", "Oracle", "PostgreSQL", "Apache HBase", "Cassandra", "MongoDB", "DynamoDB"] },
];

const INDUSTRIES = [
  {
    name: "Healthcare",
    desc: "HIPAA-compliant solutions for USA-based clients.",
    solutions: ["Patient Portals & Personal Health Records", "Telehealth & Virtual Care", "Provider Websites & Scheduling", "EHR/EMR Integrations", "Healthcare Management Dashboards", "Remote Patient Monitoring"],
  },
  {
    name: "Education",
    desc: "Education has moved from books to screens.",
    solutions: ["Learning Management Systems", "Student & Parent Portals", "Virtual Classroom Platforms", "School Management Systems", "Online Assessment Platforms", "Admissions & Enrollment", "Education Analytics"],
  },
  {
    name: "Finance & Business",
    desc: "Secure, accurate, reliable, and easy to navigate solutions.",
    solutions: ["Fintech & Banking Platforms", "Payment & Billing Solutions", "Investment & Wealth Management", "Insurance Platforms", "Accounting & Financial Management", "Enterprise Management Portals"],
  },
  {
    name: "Real Estate",
    desc: "Easy property discovery, lead generation, and smooth cross-platform experience.",
    solutions: ["Property Listing Marketplaces", "Advanced Property Search", "Agent & Broker Portals", "Property Management Systems", "Online Booking & Scheduling", "Virtual Property Tours", "Mortgage Platforms", "Real Estate CRM", "Tenant & Landlord Portals"],
  },
  {
    name: "Retail & E-commerce",
    desc: "Platforms that maximize conversions and business revenue.",
    solutions: ["E-commerce Stores", "Multi-Vendor Marketplaces", "B2B Platforms", "Product Catalog & Discovery", "Omnichannel Retail", "Subscription Commerce", "Order & Inventory Management"],
  },
  {
    name: "Logistics",
    desc: "Transparency, automation, real-time tracking, and operational efficiency.",
    solutions: ["Logistics Management Platforms", "Transportation Management (TMS)", "Shipment Tracking", "Fleet Management", "Warehouse Management (WMS)", "Delivery Management", "Route Optimization"],
  },
  {
    name: "Travel & Tourism",
    desc: "Help travellers discover, compare, book, and manage trips.",
    solutions: ["Travel Booking Platforms", "Hotel & Accommodation Booking", "Travel Marketplaces", "Tour & Activity Platforms", "Travel Agency Platforms", "Vacation Rental Platforms", "Transportation Booking"],
  },
  {
    name: "Food & Delivery",
    desc: "Digital platforms essential for modern food businesses.",
    solutions: ["Online Food Ordering", "Restaurant Websites & Ordering", "Multi-Restaurant Delivery", "Restaurant Management Portals", "Delivery Management Systems", "Catering & Bulk Ordering"],
  },
];

const FAQS = [
  { q: "How long does a web development project take?", a: "A typical web development project takes 3–6 months to become a final product, pass through rigorous QA tests, and be ready to hit the market. Timelines depend on feature count and complexity." },
  { q: "How do you ensure the success of a web development product?", a: "We follow an established process: defining project scope and requirements, selecting appropriate technology, implementing responsive design, and managing development and deployment methodically. Quality is built into our system." },
  { q: "How to find the best web development companies in the USA?", a: "Search Google, review company websites, study case studies, understand cost structures and pricing models, then make an informed decision based on demonstrated expertise and relevant experience." },
];

function FaqItem({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  return (
    <div className="rounded-xl border border-border bg-cadbury-purple overflow-hidden">
      <button onClick={onToggle} className="flex w-full items-center justify-between gap-4 p-5 text-left">
        <span className="text-sm font-semibold text-navy">{q}</span>
        <svg className={`h-5 w-5 shrink-0 text-blue transition-transform duration-200 ${open ? "rotate-180" : ""}`} viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.168l3.71-3.938a.75.75 0 1 1 1.08 1.04l-4.25 4.5a.75.75 0 0 1-1.08 0l-4.25-4.5a.75.75 0 0 1 .02-1.06z" clipRule="evenodd" />
        </svg>
      </button>
      {open && <div className="px-5 pb-5"><p className="text-sm text-muted">{a}</p></div>}
    </div>
  );
}

export default function WebDevelopmentPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <PageHero
        tag="Web Development"
        title="Custom Web Development Services Built around your Business Needs"
        description="Result-oriented web development services tailored to your enterprise or startup goals, grounded in industry best practices to develop cost-effective, easy-to-use, and secure web products."
        primaryCta="Get a quote"
        secondaryCta="See our work"
        secondaryHref="/case-studies"
      />

      {/* What We Build */}
      <section className="bg-cadbury-purple py-16 lg:py-24 section-grid-bg relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full pointer-events-none" style={{ background: "rgba(22,104,217,0.10)", filter: "blur(64px)" }} />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-2xl sm:text-3xl font-bold gradient-text text-center">What We Build</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BUILDS.map((b) => (
              <div key={b.step} className="rounded-xl border border-border bg-cadbury-purple p-6 card-hover transition-all">
                <span className="text-sm font-bold text-blue">{b.step}</span>
                <h3 className="mt-2 text-base font-bold text-navy">{b.title}</h3>
                <p className="mt-2 text-sm text-muted">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10-Step Process */}
      <section className="relative bg-light-bg py-16 lg:py-24 section-grid-bg overflow-hidden noise-overlay">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 aurora-bg" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[700px] w-[700px] rounded-full bg-[rgba(22,104,217,0.05)] blur-[64px]" />
        <div aria-hidden="true" className="pointer-events-none absolute -z-5" style={{ width: 28, height: 28, top: "10%", left: "6%", border: "1px solid rgba(22,104,217,0.08)", borderRadius: 5, animation: "rotate-3d 24s linear infinite, float 12s ease-in-out infinite" }} />
        <div aria-hidden="true" className="pointer-events-none absolute w-1 h-1 rounded-full bg-cyan/15 -z-5" style={{ bottom: "15%", right: "10%", animation: "particle-float-2 10s ease-in-out infinite 3s" }} />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-2xl sm:text-3xl font-bold gradient-text text-center mb-12">Our 10-Step Process</h2>
          <ProcessFlow steps={STEPS.map((s) => ({ name: s.title, desc: s.desc }))} />
        </div>
      </section>

      {/* Investment Tiers */}
      <section className="relative bg-cadbury-purple py-16 lg:py-24 overflow-hidden">
        <div aria-hidden="true" className="pointer-events-none absolute -z-5 rounded-full" style={{ width: 22, height: 22, top: "15%", right: "7%", border: "1px solid rgba(139,92,246,0.06)", animation: "rotate-3d-slow 28s linear infinite reverse, float-diagonal 16s ease-in-out infinite 4s" }} />
        <div aria-hidden="true" className="pointer-events-none absolute w-1 h-1 rounded-full bg-blue/10 -z-5" style={{ bottom: "22%", left: "12%", animation: "particle-float-1 9s ease-in-out infinite" }} />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-2xl sm:text-3xl font-bold gradient-text text-center">Investment Tiers</h2>
          <p className="mt-3 text-muted text-center max-w-2xl mx-auto">Final costs depend on functionality, integrations, design complexity, user roles, security, and scaling needs.</p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TIERS.map((t) => (
              <div key={t.title} className="rounded-xl border border-border bg-light-bg p-6 card-hover transition-all">
                <h3 className="text-base font-bold text-navy">{t.title}</h3>
                <p className="mt-2 text-2xl font-bold gradient-text">{t.price}+</p>
                <p className="mt-2 text-sm text-muted">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO & AI Optimization */}
      <section className="bg-light-bg py-16 lg:py-24 section-grid-bg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy text-center">Optimized for Google and AI</h2>
          <p className="mt-3 text-muted text-center max-w-2xl mx-auto">We design for search visibility, machine readability, and accessibility to search engines and AI-powered discovery platforms.</p>
          <ul className="mt-10 max-w-2xl mx-auto space-y-3">
            {SEO_POINTS.map((point) => (
              <li key={point} className="flex items-start gap-3 text-sm text-muted">
                <svg className="mt-1 h-4 w-4 shrink-0 text-blue" viewBox="0 0 20 20" fill="currentColor">
                  <circle cx="10" cy="10" r="10" fill="url(#seoG)" />
                  <path d="M6.5 10.5l2 2 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  <defs><linearGradient id="seoG" x1="0" y1="0" x2="20" y2="20"><stop stopColor="#22B8F0" /><stop offset="1" stopColor="#1668D9" /></linearGradient></defs>
                </svg>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-cadbury-purple py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full pointer-events-none" style={{ background: "rgba(34,184,240,0.08)", filter: "blur(64px)" }} />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-2xl sm:text-3xl font-bold gradient-text text-center">Why Choose CodeNax</h2>
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {WHY_US.map((w, i) => (
              <div key={w.title} className="rounded-xl border border-border bg-cadbury-purple p-6 card-hover transition-all">
                <span className="text-sm font-bold text-blue">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-2 text-base font-bold text-navy">{w.title}</h3>
                <p className="mt-2 text-sm text-muted">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="relative bg-light-bg py-16 lg:py-24 overflow-hidden">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 perspective-grid" />
        <div aria-hidden="true" className="pointer-events-none absolute w-1.5 h-1.5 rounded-full bg-cyan/12 -z-5" style={{ top: "20%", left: "15%", animation: "particle-float-1 8s ease-in-out infinite" }} />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy text-center">Technology Stack</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {TECH_STACK.map((cat) => (
              <div key={cat.category} className="rounded-xl border border-border bg-cadbury-purple p-6">
                <h3 className="text-sm font-bold text-blue uppercase tracking-wider">{cat.category}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span key={item} className="rounded-full border border-border bg-light-bg px-3 py-1 text-xs font-medium text-navy">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-cadbury-purple py-16 lg:py-24 section-grid-bg relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full pointer-events-none" style={{ background: "rgba(22,104,217,0.10)", filter: "blur(64px)" }} />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-2xl sm:text-3xl font-bold gradient-text text-center">Industries We Serve</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {INDUSTRIES.map((ind) => (
              <div key={ind.name} className="rounded-xl border border-border bg-cadbury-purple p-6">
                <h3 className="text-base font-bold text-navy">{ind.name}</h3>
                <p className="mt-1 text-sm text-muted italic">{ind.desc}</p>
                <ul className="mt-3 space-y-1.5">
                  {ind.solutions.map((sol) => (
                    <li key={sol} className="flex items-start gap-2 text-sm text-muted">
                      <svg className="mt-1 h-3 w-3 shrink-0 text-blue" viewBox="0 0 12 12" fill="currentColor"><circle cx="6" cy="6" r="3" /></svg>
                      {sol}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="relative bg-light-bg py-16 lg:py-24 overflow-hidden">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 perspective-grid" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy text-center">Frequently Asked Questions</h2>
          <div className="mt-10 mx-auto max-w-3xl space-y-4">
            {FAQS.map((faq, i) => (
              <FaqItem key={i} q={faq.q} a={faq.a} open={openFaq === i} onToggle={() => setOpenFaq(openFaq === i ? null : i)} />
            ))}
          </div>
        </div>
      </section>

      <PageCTA title="Let's build your web platform" description="Share your requirements and receive a detailed proposal within 48 hours." />
    </>
  );
}
