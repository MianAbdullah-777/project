"use client";

import { useState } from "react";
import PageHero from "@/components/PageHero";
import PageCTA from "@/components/PageCTA";

type Category = "All" | "General" | "Services" | "Process" | "Pricing" | "Support";

const FAQS: { q: string; a: string; cat: Category }[] = [
  { cat: "General", q: "What kind of projects does CodeNax take on?", a: "We build SaaS platforms, mobile apps, AI agents, MVPs, and custom software for startups and enterprises across healthcare, fintech, education, logistics, and more." },
  { cat: "General", q: "Where is your team based?", a: "Our core team operates across multiple time zones with a headquarters focus on remote-first collaboration, ensuring overlap with US, EU, and MENA business hours." },
  { cat: "General", q: "How do you incorporate AI into projects?", a: "We integrate AI where it adds real value: intelligent search, automation, chatbots, recommendation engines, and predictive analytics. We do not add AI for its own sake." },
  { cat: "General", q: "Which technologies do you work with?", a: "Our primary stack includes React, Next.js, React Native, Node.js, Python, PostgreSQL, and cloud providers like AWS and GCP. We choose the best tools for each project." },
  { cat: "Services", q: "Can you redesign an existing product?", a: "Yes. We regularly take over and modernize existing applications, from UI/UX redesigns to full architecture overhauls, without disrupting your live users." },
  { cat: "Process", q: "How long does a typical project take?", a: "An MVP takes 2-5 weeks. A full product build typically ranges from 2-4 months. Staff augmentation engagements start within 1-2 weeks." },
  { cat: "Process", q: "What is the 80-hour MVP?", a: "It is a fixed-scope sprint where we design, develop, and deploy a production-ready MVP in 80 hours. You get a working product, full code ownership, and 30 days of post-launch support." },
  { cat: "Process", q: "What does your development process look like?", a: "We follow a six-step process: Discover, Design, Develop, Test, Launch, and Scale. Every project starts with a discovery phase to align on goals, scope, and priorities." },
  { cat: "Pricing", q: "How much does a project cost?", a: "It depends on scope. MVPs start from a fixed price for 80 hours. Staff augmentation is priced monthly per engineer. AI and custom builds are scoped individually after a discovery phase." },
  { cat: "Pricing", q: "Do you offer flexible engagement models?", a: "Yes. We offer fixed-price projects, monthly retainers, dedicated team models, and hybrid arrangements. We tailor the engagement to your budget and timeline." },
  { cat: "Support", q: "Do you provide support after launch?", a: "Every project includes 30 days of post-launch support. We also offer ongoing maintenance retainers for monitoring, updates, and feature additions." },
  { cat: "Support", q: "Who owns the code and IP?", a: "You do. From day one, all source code, designs, and intellectual property belong to you. We transfer everything at project completion." },
  { cat: "Support", q: "Can I hire dedicated developers from CodeNax?", a: "Absolutely. Our staff augmentation model lets you embed vetted senior engineers into your team on a flexible monthly basis with a 2-week scaling notice." },
];

const CATEGORIES: Category[] = ["All", "General", "Services", "Process", "Pricing", "Support"];

export default function FAQPage() {
  const [activeCat, setActiveCat] = useState<Category>("All");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filtered = activeCat === "All" ? FAQS : FAQS.filter((f) => f.cat === activeCat);

  return (
    <>
      <PageHero
        tag="FAQ"
        title="Frequently Asked Questions"
        description="Answers to the most common questions about working with CodeNax."
      />

      <section className="relative isolate overflow-hidden bg-cadbury-purple py-16 lg:py-24">
        {/* Glow orb */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-20 -z-10 rounded-full"
          style={{ width: 288, height: 288, background: "rgba(22,104,217,0.10)", filter: "blur(64px)", animation: "float 14s ease-in-out infinite" }}
        />
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {/* Category tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => { setActiveCat(cat); setOpenIndex(null); }}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  activeCat === cat ? "gradient-bg text-white" : "bg-light-bg text-navy hover:bg-border"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Accordion */}
          <div className="space-y-3">
            {filtered.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div key={faq.q} className="rounded-xl border border-border overflow-hidden">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left"
                  >
                    <span className="text-sm font-semibold text-navy pr-4">{faq.q}</span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      className={`shrink-0 text-muted transition-transform ${isOpen ? "rotate-180" : ""}`}
                      aria-hidden="true"
                    >
                      <path d="M5 7.5l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    </svg>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5">
                      <p className="text-sm text-muted">{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <PageCTA
        title="Still have questions?"
        description="Reach out and we will get back to you within 24 hours."
      />
    </>
  );
}
