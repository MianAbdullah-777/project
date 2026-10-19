"use client";

import { useState } from "react";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import PageCTA from "@/components/PageCTA";
import ProcessFlow from "@/components/ProcessFlow";

/* ── Data ── */

const STATS = [
  { value: "100+", label: "Engineers Placed" },
  { value: "Your", label: "Dedicated Squad" },
  { value: "Now", label: "Available to Start" },
];

const WHY_AUGMENTATION = [
  {
    step: "01",
    title: "Quickly Fill Technical Skill Gaps",
    desc: "Eliminate critical gaps in 5 to 10 days. Our streamlined process identifies and deploys the right talent fast so your projects never stall.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    step: "02",
    title: "Access Pre-Vetted Software Professionals",
    desc: "Experienced professionals with proven technical expertise who have passed rigorous screening before they ever join your team.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
  {
    step: "03",
    title: "Scale Resources Up or Down",
    desc: "Increase or decrease staffing based on project demands. Pay only for what you need, when you need it, with full flexibility.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    step: "04",
    title: "Replace Low-Performing Development Teams",
    desc: "Structured onboarding and smooth knowledge transfer ensure new engineers hit the ground running without disrupting your workflow.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 4 23 10 17 10" /><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
      </svg>
    ),
  },
  {
    step: "05",
    title: "Maintain Full Control",
    desc: "Clients set goals, priorities, and KPIs. Project managers convert these to sprint plans, using tools like Jira and ClickUp for full transparency.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
  {
    step: "06",
    title: "Access Global Talent Pool",
    desc: "Diverse talent across countries without lengthy hiring processes. We connect you with the best engineers regardless of geography.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    step: "07",
    title: "Remote Collaboration Without Disruption",
    desc: "Engineers integrate seamlessly using your preferred tools — Jira, ClickUp, Slack, GitHub, and Microsoft Teams — from day one.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    step: "08",
    title: "Less Time to Market",
    desc: "Bypass traditional hiring cycles, fill gaps quickly, and deliver faster. Speed matters, and our process is built for velocity.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
];

const MODELS = [
  {
    title: "IT Staff Augmentation",
    desc: "Rapidly fill talent gaps with senior engineers who follow your existing processes. Individual professionals embed within your team, work under your management, and contribute from day one.",
    best: "Filling specific skill gaps or adding capacity to an existing team.",
  },
  {
    title: "Dedicated Development Teams",
    desc: "Complete teams that embed in your organization and focus on single projects. A dedicated project manager handles communication, sprint planning, and delivery coordination.",
    best: "Long-term product development with predictable velocity and full team focus.",
  },
  {
    title: "Project-Based Development",
    desc: "Entrust entire projects from planning through deployment. We own delivery end-to-end on a defined scope and timeline, so you can focus on your core business.",
    best: "Well-defined projects with clear deliverables and deadlines.",
  },
];

const TECH_STACK = [
  {
    category: "Front-End",
    items: ["React", "Next.js", "Angular", "Vue.js", "Nuxt", "Svelte", "TypeScript", "JavaScript", "Tailwind CSS", "Redux"],
  },
  {
    category: "Back-End",
    items: ["Node.js", "NestJS", "Express", "Python", "Django", "FastAPI", "Java", "Spring Boot", ".NET", "PHP", "Laravel", "Ruby on Rails", "Go"],
  },
  {
    category: "Mobile",
    items: ["React Native", "Flutter", "Swift", "SwiftUI", "Kotlin", "Jetpack Compose", "iOS", "Android"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Supabase", "Firebase", "Redis", "SQL Server", "DynamoDB", "Prisma", "Elasticsearch"],
  },
  {
    category: "AI & Data",
    items: ["Python", "OpenAI API", "LangChain", "TensorFlow", "PyTorch", "Hugging Face", "Pandas", "Vector Databases", "SQL", "Power BI"],
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS", "Google Cloud", "Azure", "Vercel", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "CI/CD", "Nginx"],
  },
  {
    category: "CMS & E-commerce",
    items: ["WordPress", "Shopify", "Strapi", "Sanity", "Contentful", "WooCommerce", "Magento"],
  },
  {
    category: "QA & Testing",
    items: ["Jest", "Playwright", "Cypress", "Selenium", "Appium", "Postman", "JUnit"],
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Technical Screening",
    desc: "We evaluate portfolios and conduct code quality assessments under realistic workload conditions to ensure every candidate meets our standards.",
  },
  {
    step: "02",
    title: "Interviews for Communication",
    desc: "We ensure clear English communication skills to prevent miscommunication that can derail remote collaboration.",
  },
  {
    step: "03",
    title: "Technical Interviews",
    desc: "Senior engineers from our team scrutinize portfolios and assessments, asking the hard questions only experienced developers can evaluate.",
  },
  {
    step: "04",
    title: "AI-Enabled Team Selection",
    desc: "AI-driven recommendation engine suggests optimal candidates based on your project requirements, tech stack, and team dynamics.",
  },
];

const WHY_CODENAX = [
  { step: "01", title: "Pre-Vetted Engineering Talent", desc: "Multi-screen selection process: portfolio review, pair programming sessions, and HR interviews ensure only top-tier professionals reach your team." },
  { step: "02", title: "Experienced in Agile Workflows", desc: "Our engineers adapt to your team's methodologies from day one, whether Scrum, Kanban, or a custom agile framework." },
  { step: "03", title: "Transparent Project Management", desc: "Dedicated PM spaces where goals and KPIs translate to sprint plans. Full visibility into progress, blockers, and velocity." },
  { step: "04", title: "No Hidden Costs", desc: "Pricing, resource allocation, progress, and KPI reporting are visible in real-time. What you see is what you pay." },
  { step: "05", title: "Best Talent for US Market", desc: "Years of experience working with US companies, minimizing technical debt and ensuring alignment with American business practices." },
  { step: "06", title: "Security-First Engineering", desc: "NDAs, IP protection, secure cloud platforms, and controlled access to repositories and environments protect your assets." },
  { step: "07", title: "Up to 50% Cost Savings", desc: "Local US engineers cost $10K-$15K per month. Staff augmentation bridges the gap between budget and quality without compromise." },
  { step: "08", title: "Trusted US-Based Company", desc: "Since 2015, we have placed 280+ engineers across 30 countries, building a track record of reliability and excellence." },
];

const INDUSTRIES = [
  "Healthcare",
  "Education",
  "Finance & Business",
  "Real Estate",
  "Retail & E-commerce",
  "Logistics",
  "Travel & Tourism",
  "Food & Delivery",
];

const FAQS = [
  {
    q: "What is Staff Augmentation and how does it work?",
    a: "Staff augmentation allows organizations to add external developers without running traditional hiring processes. It rapidly fills talent gaps with vetted engineers who embed within your local staff. Clients maintain full control over processes, priorities, and workflows while benefiting from flexible, on-demand engineering capacity.",
  },
];

/* ── Component ── */

export default function StaffAugmentationPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <PageHero
        tag="Staff Augmentation"
        title="IT Staff Augmentation Services to Scale Your Development Team"
        description="CodeNax fills your talent gaps with nearshore and offshore IT staff augmentation services. We connect software engineers who integrate rapidly into existing teams, delivering results from day one."
        primaryCta="Scale your team"
        secondaryCta="View case studies"
      />

      {/* ── Stats Bar ── */}
      <section className="relative bg-cadbury-purple py-10 overflow-hidden">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 perspective-grid" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {STATS.map((s) => (
              <div key={s.label} className="rounded-xl border border-border bg-light-bg p-6">
                <p className="text-3xl font-bold gradient-text">{s.value}</p>
                <p className="mt-1 text-sm text-muted">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Staff Augmentation ── */}
      <section className="bg-light-bg py-16 lg:py-24 section-grid-bg relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full pointer-events-none" style={{ background: "rgba(22,104,217,0.10)", filter: "blur(64px)" }} />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-2xl sm:text-3xl font-bold gradient-text text-center">Why Choose Staff Augmentation</h2>
          <p className="mt-3 text-muted text-center max-w-2xl mx-auto">Flexible, fast, and cost-effective engineering talent on demand.</p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_AUGMENTATION.map((w) => (
              <div key={w.step} className="rounded-xl border border-border bg-cadbury-purple p-6 card-hover transition-all">
                <div className="gradient-icon" style={{ width: 48, height: 48 }}>{w.icon}</div>
                <span className="mt-3 inline-block text-sm font-bold text-blue">{w.step}</span>
                <h3 className="mt-1 text-base font-bold text-navy">{w.title}</h3>
                <p className="mt-2 text-sm text-muted">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Working Models ── */}
      <section className="relative bg-cadbury-purple py-16 lg:py-24 overflow-hidden">
        <div aria-hidden="true" className="pointer-events-none absolute -z-5 rounded-full" style={{ width: 22, height: 22, top: "15%", right: "7%", border: "1px solid rgba(139,92,246,0.06)", animation: "rotate-3d-slow 26s linear infinite reverse, float-diagonal 14s ease-in-out infinite 3s" }} />
        <div aria-hidden="true" className="pointer-events-none absolute w-1 h-1 rounded-full bg-blue/10 -z-5" style={{ bottom: "20%", left: "12%", animation: "particle-float-1 9s ease-in-out infinite" }} />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy text-center">Working Models</h2>
          <p className="mt-3 text-muted text-center max-w-2xl mx-auto">Choose the engagement model that fits your needs.</p>
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {MODELS.map((m, i) => (
              <div key={m.title} className="rounded-xl border border-border bg-light-bg p-6 card-hover transition-all">
                <span className="text-sm font-bold text-blue">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-2 text-lg font-bold text-navy">{m.title}</h3>
                <p className="mt-3 text-sm text-muted">{m.desc}</p>
                <div className="mt-4 rounded-lg bg-cadbury-purple border border-border p-3">
                  <p className="text-xs font-semibold text-blue uppercase tracking-wide">Best for</p>
                  <p className="mt-1 text-sm text-navy">{m.best}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tech Stack ── */}
      <section className="bg-light-bg py-16 lg:py-24 section-grid-bg relative overflow-hidden">
        <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full pointer-events-none" style={{ background: "rgba(22,104,217,0.10)", filter: "blur(64px)" }} />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-2xl sm:text-3xl font-bold gradient-text text-center">Expertise & Tech Stack</h2>
          <p className="mt-3 text-muted text-center max-w-2xl mx-auto">Engineers skilled across the full modern technology spectrum.</p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {TECH_STACK.map((cat) => (
              <div key={cat.category} className="rounded-xl border border-border bg-cadbury-purple p-6">
                <h3 className="text-base font-bold text-navy">{cat.category}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span key={item} className="rounded-full border border-border bg-light-bg px-3 py-1 text-xs font-medium text-navy">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Process ── */}
      <section className="relative bg-cadbury-purple py-16 lg:py-24 section-grid-bg overflow-hidden noise-overlay">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 aurora-bg" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[700px] w-[700px] rounded-full bg-[rgba(22,104,217,0.05)] blur-[64px]" />
        <div aria-hidden="true" className="pointer-events-none absolute -z-5" style={{ width: 28, height: 28, top: "12%", left: "6%", border: "1px solid rgba(34,184,240,0.06)", borderRadius: 5, animation: "rotate-3d 22s linear infinite, float 14s ease-in-out infinite" }} />
        <div aria-hidden="true" className="pointer-events-none absolute w-1 h-1 rounded-full bg-cyan/15 -z-5" style={{ bottom: "18%", right: "10%", animation: "particle-float-2 10s ease-in-out infinite 3s" }} />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-2xl sm:text-3xl font-bold gradient-text text-center mb-4">Our 4-Step Vetting Process</h2>
          <p className="text-muted text-center max-w-2xl mx-auto mb-12">How we ensure every engineer meets the highest standards.</p>
          <ProcessFlow steps={PROCESS.map((p) => ({ name: p.title, desc: p.desc }))} />
        </div>
      </section>

      {/* ── Why Choose CodeNax ── */}
      <section className="bg-light-bg py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full pointer-events-none" style={{ background: "rgba(22,104,217,0.10)", filter: "blur(64px)" }} />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-2xl sm:text-3xl font-bold gradient-text text-center">Why Choose CodeNax</h2>
          <p className="mt-3 text-muted text-center max-w-2xl mx-auto">What sets us apart from other staff augmentation providers.</p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_CODENAX.map((w) => (
              <div key={w.step} className="rounded-xl border border-border bg-cadbury-purple p-6 card-hover transition-all">
                <span className="text-sm font-bold text-blue">{w.step}</span>
                <h3 className="mt-2 text-base font-bold text-navy">{w.title}</h3>
                <p className="mt-2 text-sm text-muted">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Industries ── */}
      <section className="relative bg-cadbury-purple py-16 lg:py-24 overflow-hidden">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 aurora-bg" />
        <div aria-hidden="true" className="pointer-events-none absolute -z-5" style={{ width: 24, height: 24, top: "10%", left: "5%", border: "1px solid rgba(22,104,217,0.08)", borderRadius: 4, animation: "rotate-3d 20s linear infinite, float 12s ease-in-out infinite 2s" }} />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy text-center">Industries We Serve</h2>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
            {INDUSTRIES.map((ind) => (
              <div key={ind} className="rounded-xl border border-border bg-light-bg p-5 text-center font-semibold text-sm text-navy card-hover transition-all">
                {ind}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQs ── */}
      <section className="relative bg-light-bg py-16 lg:py-24 overflow-hidden">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 perspective-grid" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy text-center">Frequently Asked Questions</h2>
          <div className="mt-10 mx-auto max-w-3xl space-y-4">
            {FAQS.map((faq, i) => (
              <div key={i} className="rounded-xl border border-border bg-cadbury-purple overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="text-sm font-semibold text-navy">{faq.q}</span>
                  <svg
                    className={`h-5 w-5 shrink-0 text-blue transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.168l3.71-3.938a.75.75 0 1 1 1.08 1.04l-4.25 4.5a.75.75 0 0 1-1.08 0l-4.25-4.5a.75.75 0 0 1 .02-1.06z" clipRule="evenodd" />
                  </svg>
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5">
                    <p className="text-sm text-muted">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageCTA title="Ready to scale your development team?" description="Tell us about your staffing needs and receive matched candidates within 48 hours." />
    </>
  );
}
