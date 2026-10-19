"use client";

import { useState } from "react";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import PageCTA from "@/components/PageCTA";
import ProcessFlow from "@/components/ProcessFlow";

/* ── Data ── */

const OFFERINGS = [
  {
    step: "01",
    title: "UX Strategy & Research",
    desc: "Analyzes customers, business objectives, competition, and product specs. Includes user research, wireframing, and information architecture to lay the groundwork for intuitive products.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
      </svg>
    ),
  },
  {
    step: "02",
    title: "UX Audit & Optimization",
    desc: "Assesses existing products to identify usability problems, unclear workflows, and improvement opportunities. Prioritizes changes that make a real difference to users and business outcomes.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
  {
    step: "03",
    title: "Design Systems",
    desc: "Reusable patterns and guidelines for consistency across your product. Makes collaboration with developers easier and speeds up future feature design and implementation.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
  },
  {
    step: "04",
    title: "New Product Design",
    desc: "From concept to refined interfaces using prototypes, design systems, and usability tests. We guide new products from initial idea through to production-ready visual experiences.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    step: "05",
    title: "Product Redesign & Modernization",
    desc: "Modernizes outdated interfaces, eliminates friction, and simplifies navigation while maintaining product goals. Breathe new life into products that have lost their edge.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 4 23 10 17 10" /><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
      </svg>
    ),
  },
  {
    step: "06",
    title: "Mobile App UX/UI",
    desc: "iOS and Android design with intuitive navigation, touch interaction, and responsive layouts. We craft mobile experiences that feel native and effortless on every device.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
  },
  {
    step: "07",
    title: "AI-Powered UX/UI",
    desc: "AI accelerates research, exploration, and prototyping while maintaining human judgment. Combines AI workflows and user feedback with product expertise for faster, smarter design.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1.27A7 7 0 0 1 14 22h-4a7 7 0 0 1-6.73-3H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z" />
        <circle cx="9.5" cy="15.5" r="1" /><circle cx="14.5" cy="15.5" r="1" />
      </svg>
    ),
  },
  {
    step: "08",
    title: "Enterprise & Complex Products",
    desc: "Simplifies complex workflows by organizing data and interactions to help users complete complicated tasks with clarity, reducing errors and training time.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
];

const CHALLENGES = [
  {
    title: "Slow Design Cycles",
    desc: "Experienced designers use established AI-integrated workflows that deliver production-ready UX/UI on time, without sacrificing quality or attention to detail.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: "Budget Constraints",
    desc: "We focus on impact, making thoughtful UX decisions that reduce unnecessary revisions and maximize value from every design dollar spent.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    title: "Scaling Issues",
    desc: "Agile methodology and flexible design systems with reusable components keep your product consistent as it grows and evolves across platforms.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    title: "Design Inconsistency",
    desc: "Custom design systems ensure every button, color, and font stays unified across all platforms, creating a cohesive brand experience everywhere.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18" />
      </svg>
    ),
  },
];

const BAD_DESIGN = [
  { step: "01", title: "Conversion Losses", desc: "E-commerce businesses lose approximately 35% in potential sales due to bad UI/UX design that frustrates and confuses shoppers." },
  { step: "02", title: "Wasted Marketing Spend", desc: "Poor design causes users to bounce, resulting in conversion drop-offs that waste the advertising budget used to attract them." },
  { step: "03", title: "Redesign Causing Uncertainty", desc: "Poorly executed redesigns create new problems instead of solving existing ones, leading to user confusion and lost trust." },
  { step: "04", title: "Complex Workflows", desc: "Feature-heavy apps become confusing when information, navigation, and actions are not structured correctly for the user." },
  { step: "05", title: "Outdated Product Appearance", desc: "Old designs reduce appeal and credibility. Modern design enhances trust and signals that the product is actively maintained." },
  { step: "06", title: "Development Budget Overrun", desc: "Design defects discovered in production are exponentially more expensive to fix than those caught during the design phase." },
  { step: "07", title: "Support Cost Burden", desc: "Confusing layouts and unclear interfaces generate support requests that could have been prevented with better UX design." },
  { step: "08", title: "Brand Equity Damage", desc: "Users abandon frustrating apps for competitors. Every poor interaction erodes the trust and loyalty you've worked to build." },
  { step: "09", title: "Feature Blindness", desc: "Important features hidden behind poor UX designs go unused, reducing the value users get and undermining your product investment." },
];

const PROCESS = [
  { step: "01", title: "Product Discovery & Strategy", desc: "We study product goals, target audience, competitors, and industry trends to form a design strategy rooted in real business context." },
  { step: "02", title: "Research and User Flows", desc: "Organize business content and sketch how users navigate the product, mapping every touchpoint and decision along the journey." },
  { step: "03", title: "Wireframes & Concepts", desc: "Transform requirements into wireframes with recognizable patterns that communicate structure before visual design begins." },
  { step: "04", title: "UI Design", desc: "Polished interfaces with consistent visuals focused around brand identity, fully responsive and optimized for cross-platform use." },
  { step: "05", title: "Prototype and Test", desc: "Interactive flows that catch design flaws before engineering writes a single line of code, saving time and budget." },
  { step: "06", title: "Design QA and Optimization", desc: "Visual audits, functional QA, and performance optimization to ensure the final product matches the approved design." },
];

const WHY_US = [
  { title: "Clear Communication, No Guesswork", desc: "Clear updates, honest reviews, and direct communication at each stage of the project so you always know where things stand." },
  { title: "Designed for Development", desc: "Clear specifications and reusable parts that let developers build confidently without second-guessing design intent." },
  { title: "Accessible Design", desc: "Interfaces easy to use for people of all abilities, devices, and environments, ensuring no user is left behind." },
  { title: "Design Scales with Your Product", desc: "Reusable components and systems that make future features easier to design, build, and maintain as your product grows." },
  { title: "Evidence-Based Decisions", desc: "Every design decision is validated through research, usability testing, and real user feedback rather than assumptions." },
  { title: "Work in Collaboration", desc: "We work directly with your engineering and business teams, staying aligned with priorities and technical realities." },
  { title: "Long-Term Collaboration", desc: "We stay involved in implementation to review the build and ensure the final product is true to the approved experience." },
];

const TECH_STACK = [
  {
    category: "Programming Languages & Technologies",
    items: ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap", "Tailwind CSS", "React.js", "Next.js", "Flutter", "React Native", "Component Libraries"],
  },
  {
    category: "Wireframing & Prototyping",
    items: ["Figma", "InVision", "Adobe XD", "Google Web Designer", "ProtoPie", "Axure RP", "Framer", "Webflow"],
  },
  {
    category: "Testing & Analytics",
    items: ["Maze", "Lyssna", "Hotjar", "Microsoft Clarity"],
  },
  {
    category: "Visual Design",
    items: ["Photoshop", "InDesign", "Illustrator", "Sketch"],
  },
];

const INDUSTRIES = [
  {
    name: "Healthcare",
    points: [
      "Find test results, appointments, and records easily",
      "Complete tasks in fewer steps",
      "Understand complex health information",
      "Avoid confusion in time-sensitive situations",
      "Accessibility for elderly and disabled users",
    ],
  },
  {
    name: "Education",
    points: [
      "Find resources and courses faster",
      "Track learning progress clearly",
      "Make complex content understandable",
      "Simpler assignment submission workflows",
      "Better tools for teachers and administrators",
    ],
  },
  {
    name: "Finance & Business",
    points: [
      "Financial information easy to read at a glance",
      "Pay and transact with less friction",
      "Control complex workflows with clarity",
      "Avoid mistakes with sensitive data",
      "Build confidence through predictable interactions",
    ],
  },
  {
    name: "Real Estate",
    points: [
      "Find and filter properties faster",
      "Compare listings without information overload",
      "View important details at a glance",
      "Contact agents in fewer steps",
      "Make better-informed decisions",
    ],
  },
  {
    name: "Retail & E-commerce",
    points: [
      "Discover products faster",
      "Compare options easily",
      "Checkout with fewer obstacles",
      "Track orders and returns seamlessly",
      "Consistent experience across all devices",
    ],
  },
  {
    name: "Travel & Tourism",
    points: [
      "Compare and search travel options quickly",
      "Book without friction or confusion",
      "Manage itineraries with ease",
      "Quickly access tickets and reservations",
      "Receive timely booking updates",
    ],
  },
  {
    name: "Food & Delivery",
    points: [
      "Find restaurants and menus quickly",
      "Customize orders without confusion",
      "Minimum-effort checkout experience",
      "Real-time delivery tracking",
      "Clear order status, reorder favorites, and simple driver interfaces",
    ],
  },
];

const FAQS = [
  {
    q: "What is UI/UX design?",
    a: "UI/UX design is the process of designing a digital product that determines how users understand it and interact with it to complete actions. UI (User Interface) focuses on the visual layout and interactive elements, while UX (User Experience) ensures the overall journey is intuitive, efficient, and satisfying.",
  },
  {
    q: "Can AI do UI/UX?",
    a: "Yes, to an extent, but AI cannot replace a UI/UX expert. AI can generate screen designs and assist with research and prototyping, but it cannot understand business strategy, user psychology, or distinguish between real and fake problems. Human judgment remains essential for meaningful design decisions.",
  },
  {
    q: "How do I find a reputable agency for mobile app UI/UX?",
    a: "Begin with agency directories like Clutch, then verify their portfolio for relevant work, read client reviews, assess their design process, and discuss pricing. Look for agencies that demonstrate a structured approach to research, testing, and collaboration.",
  },
  {
    q: "What are the costs for UI/UX services?",
    a: "Costs vary depending on the complexity of design, number of pages, and customizations required. Designers provide estimated costs after an initial assessment of your project scope, goals, and timeline. Contact us for a personalized quote.",
  },
  {
    q: "Can an existing UI/UX be enhanced?",
    a: "Yes, we evaluate your existing product for feature prioritization and engagement enhancement strategies. Through UX audits, usability testing, and data analysis, we identify the highest-impact improvements and implement them incrementally.",
  },
  {
    q: "Does CodeNax provide UI/UX design and development services?",
    a: "Yes, we have specialist designers for UI/UX and specialist developers who can develop and embed these designs in mobile and web applications. Our integrated approach ensures design intent is preserved throughout the development process.",
  },
];

/* ── Component ── */

export default function UIUXDesignPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <PageHero
        tag="UI/UX Design"
        title="UI/UX Design Services for Increased User Satisfaction and Conversion"
        description="When users interact with digital products, they form lasting impressions based on experience and interface quality. CodeNax clients report increased retention rates and ROI through intuitive, goal-centric UI/UX design and development services."
        primaryCta="Start your project"
        secondaryCta="View case studies"
      />

      {/* ── Service Offerings ── */}
      <section className="bg-cadbury-purple py-16 lg:py-24 section-grid-bg relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full pointer-events-none" style={{ background: "rgba(22,104,217,0.10)", filter: "blur(64px)" }} />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-2xl sm:text-3xl font-bold gradient-text text-center">UI/UX Design & Development Services</h2>
          <p className="mt-3 text-muted text-center max-w-2xl mx-auto">End-to-end design services that transform ideas into intuitive, high-performing digital experiences.</p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {OFFERINGS.map((o) => (
              <div key={o.title} className="rounded-xl border border-border bg-cadbury-purple p-6 card-hover transition-all">
                <div className="gradient-icon" style={{ width: 48, height: 48 }}>{o.icon}</div>
                <span className="mt-3 inline-block text-sm font-bold text-blue">{o.step}</span>
                <h3 className="mt-1 text-base font-bold text-navy">{o.title}</h3>
                <p className="mt-2 text-sm text-muted">{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Challenges We Solve ── */}
      <section className="relative bg-light-bg py-16 lg:py-24 overflow-hidden">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 perspective-grid" />
        <div aria-hidden="true" className="pointer-events-none absolute w-1.5 h-1.5 rounded-full bg-blue/12 -z-5" style={{ top: "22%", right: "14%", animation: "particle-float-2 10s ease-in-out infinite 3s" }} />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy text-center">UI/UX Challenges We Solve</h2>
          <p className="mt-3 text-muted text-center max-w-2xl mx-auto">Common obstacles our clients face before partnering with us.</p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {CHALLENGES.map((c) => (
              <div key={c.title} className="rounded-xl border border-border bg-cadbury-purple p-6 card-hover transition-all">
                <div className="gradient-icon" style={{ width: 48, height: 48 }}>{c.icon}</div>
                <h3 className="mt-3 text-base font-bold text-navy">{c.title}</h3>
                <p className="mt-2 text-sm text-muted">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cost of Bad Design ── */}
      <section className="bg-cadbury-purple py-16 lg:py-24 section-grid-bg relative overflow-hidden">
        <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full pointer-events-none" style={{ background: "rgba(22,104,217,0.10)", filter: "blur(64px)" }} />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-2xl sm:text-3xl font-bold gradient-text text-center">The Cost of Bad Design</h2>
          <p className="mt-3 text-muted text-center max-w-2xl mx-auto">Poor UX is not just an inconvenience — it has measurable business consequences.</p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BAD_DESIGN.map((b) => (
              <div key={b.step} className="rounded-xl border border-border bg-cadbury-purple p-6">
                <span className="text-sm font-bold text-blue">{b.step}</span>
                <h3 className="mt-2 text-base font-bold text-navy">{b.title}</h3>
                <p className="mt-2 text-sm text-muted">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Process ── */}
      <section className="relative bg-light-bg py-16 lg:py-24 section-grid-bg overflow-hidden noise-overlay">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 aurora-bg" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[700px] w-[700px] rounded-full bg-[rgba(22,104,217,0.05)] blur-[64px]" />
        <div aria-hidden="true" className="pointer-events-none absolute -z-5" style={{ width: 30, height: 30, top: "10%", right: "7%", border: "1px solid rgba(22,104,217,0.08)", borderRadius: 5, animation: "rotate-3d 24s linear infinite, float 14s ease-in-out infinite" }} />
        <div aria-hidden="true" className="pointer-events-none absolute w-1 h-1 rounded-full bg-cyan/15 -z-5" style={{ bottom: "18%", left: "10%", animation: "particle-float-1 9s ease-in-out infinite 2s" }} />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-2xl sm:text-3xl font-bold gradient-text text-center mb-4">Our 6-Phase Design Process</h2>
          <p className="text-muted text-center max-w-2xl mx-auto mb-12">A structured approach that turns requirements into experiences users love.</p>
          <ProcessFlow steps={PROCESS.map((p) => ({ name: p.title, desc: p.desc }))} />
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="bg-cadbury-purple py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full pointer-events-none" style={{ background: "rgba(22,104,217,0.10)", filter: "blur(64px)" }} />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-2xl sm:text-3xl font-bold gradient-text text-center">Why Choose CodeNax for UI/UX</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

      {/* ── Tech Stack ── */}
      <section className="relative bg-light-bg py-16 lg:py-24 overflow-hidden">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 perspective-grid" />
        <div aria-hidden="true" className="pointer-events-none absolute w-1 h-1 rounded-full bg-cyan/12 -z-5" style={{ top: "20%", left: "15%", animation: "particle-float-1 8s ease-in-out infinite" }} />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy text-center">Our Tech Stack</h2>
          <p className="mt-3 text-muted text-center max-w-2xl mx-auto">Tools and technologies we use to deliver world-class design and development.</p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
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

      {/* ── Industries ── */}
      <section className="bg-cadbury-purple py-16 lg:py-24 section-grid-bg relative overflow-hidden">
        <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full pointer-events-none" style={{ background: "rgba(22,104,217,0.10)", filter: "blur(64px)" }} />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-2xl sm:text-3xl font-bold gradient-text text-center">Industries We Serve</h2>
          <p className="mt-3 text-muted text-center max-w-2xl mx-auto">Tailored UI/UX solutions for the unique challenges of each industry.</p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INDUSTRIES.map((ind) => (
              <div key={ind.name} className="rounded-xl border border-border bg-cadbury-purple p-6">
                <h3 className="text-base font-bold text-navy">{ind.name}</h3>
                <ul className="mt-3 space-y-2">
                  {ind.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2 text-sm text-muted">
                      <svg className="mt-1 h-3 w-3 shrink-0 text-blue" viewBox="0 0 12 12" fill="currentColor"><circle cx="6" cy="6" r="3" /></svg>
                      {pt}
                    </li>
                  ))}
                </ul>
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

      <PageCTA title="Ready to transform your user experience?" description="Tell us about your project and receive a design strategy proposal within 48 hours." />
    </>
  );
}
