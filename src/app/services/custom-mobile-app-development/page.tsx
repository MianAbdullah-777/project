"use client";

import { useState } from "react";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import PageCTA from "@/components/PageCTA";
import ProcessFlow from "@/components/ProcessFlow";

const BUILDS = [
  { step: "01", title: "Android App Development", desc: "Modern and secure Android applications with easy-to-use, conversion-centered interfaces optimized for different devices and screen sizes." },
  { step: "02", title: "iOS App Development", desc: "Native iPhone and iPad applications built with Swift. We handle development, integration, launch, and ongoing support." },
  { step: "03", title: "Cross-Platform App Development", desc: "iOS and Android apps from a shared codebase using Flutter or React Native to expand your market reach cost-effectively." },
  { step: "04", title: "Mobile App Modernization", desc: "Update legacy applications to meet contemporary user expectations with modern design, features, and architecture." },
];

const PROCESS = [
  { step: "01", title: "Discovery & Ideation", desc: "Establishing objectives, requirements, features, and competitive research to define the right product." },
  { step: "02", title: "UX/UI Designing", desc: "Creating intuitive, responsive interfaces using wireframes and prototypes tested with real users." },
  { step: "03", title: "Development", desc: "Building front-end and back-end components with secure, scalable code in agile sprints." },
  { step: "04", title: "QA & Testing", desc: "Ensuring flawless functionality, usability, and security across all target devices and OS versions." },
  { step: "05", title: "Deployment", desc: "Submitting to app stores and managing compliance, ASO optimization, and go-live support." },
  { step: "06", title: "Support & Maintenance", desc: "Ongoing security updates, new features, performance tuning, and scaling as your user base grows." },
];

const AI_SERVICES = [
  { title: "Biometric Authentication", desc: "Facial and fingerprint verification combined with secure workflows and encryption for enhanced app security." },
  { title: "Contextual AI Search", desc: "Search functionality that understands user intent and preferences, going beyond simple keyword matching." },
  { title: "In-App Chatbot Integration", desc: "NLP-powered chatbots that automate customer support directly within your mobile application." },
  { title: "AI Personalization", desc: "Customize content, product suggestions, notifications, and app experiences by analyzing past behavior and preferences." },
  { title: "AI Predictive Analysis", desc: "Analytics dashboards that detect patterns in user behavior, sales, and demand to forecast outcomes." },
];

const COST_TABLE = [
  { factor: "Typical Cost", simple: "$50,000", medium: "$120,000", complex: "$250,000+" },
  { factor: "Development Time", simple: "2–4 months", medium: "4–7 months", complex: "7–12+ months" },
  { factor: "UI/UX", simple: "Basic screens", medium: "Custom UI, multiple screens", complex: "Highly interactive with animations" },
  { factor: "Features", simple: "Core, single task", medium: "Multiple features & workflows", complex: "Advanced, real-time features" },
  { factor: "Backend", simple: "Minimal or existing", medium: "Custom APIs, database", complex: "Scalable, complex architecture" },
  { factor: "Integrations", simple: "Basic third-party", medium: "Multiple APIs", complex: "Complex enterprise systems" },
  { factor: "Technology", simple: "Native or cross-platform", medium: "Flutter, React Native", complex: "Advanced architecture" },
  { factor: "Advanced Capabilities", simple: "Usually not required", medium: "Payments, maps, chat", complex: "AI/ML, AR/VR, IoT" },
  { factor: "Security", simple: "Standard authentication", medium: "Role-based access", complex: "Advanced encryption, compliance" },
  { factor: "Team Size", simple: "1–3 specialists", medium: "Dev, designer, QA, PM", complex: "Senior devs, architects, DevOps" },
];

const COST_FACTORS = [
  "App functionality and feature complexity",
  "UI/UX design customization level",
  "Platform choice (iOS, Android, or both)",
  "Native or cross-platform approach",
  "Backend architecture and database requirements",
  "Third-party API and system integrations",
  "Advanced technologies (AI, ML, AR/VR)",
  "Real-time features (chat, tracking, streaming)",
  "Security, authentication, and compliance needs",
  "Testing, QA, and device coverage",
  "Cloud infrastructure and DevOps requirements",
  "Post-launch maintenance and development",
];

const WHY_US = [
  { step: "01", title: "Business-Focused Development", desc: "Apps built around business goals and user needs, not just feature lists." },
  { step: "02", title: "Transparent & Clear Process", desc: "Full visibility into progress, timelines, and deliverables at every stage." },
  { step: "03", title: "Experienced Mobile Developers", desc: "Team proficient in native and cross-platform technologies with proven track records." },
  { step: "04", title: "Scalable Architecture", desc: "Future growth considered in every design and architecture decision." },
  { step: "05", title: "Security Built-In", desc: "Secure authentication and data protection from the ground up." },
  { step: "06", title: "Quality-First Development", desc: "Comprehensive testing across functionality, performance, and all target devices." },
  { step: "07", title: "Long-Term Support", desc: "Ongoing improvements, feature additions, and performance optimization post-launch." },
  { step: "08", title: "End-to-End Development", desc: "Full lifecycle management from design through deployment and beyond." },
];

const INDUSTRIES = [
  { name: "Medical Apps", items: ["Telemedicine", "Patient portals", "EHR/EMR access", "Remote monitoring", "Disease management", "Medication management", "Care coordination", "Physician apps", "Hospital operations", "Clinical trials"] },
  { name: "Health & Fitness", items: ["Health tracking", "Activity tracking", "Fitness coaching", "Meditation", "Mental wellness", "Nutrition", "Rehabilitation", "Baby care"] },
  { name: "Banking & Finance", items: ["Mobile banking", "Payments", "P2P transfers", "Digital wallets", "Cryptocurrency", "Lending", "BNPL", "Budgeting", "Investment/trading", "Wealth management", "Insurance"] },
  { name: "Enterprise", items: ["Inspection/QC", "Compliance", "Asset monitoring", "Business intelligence", "Customer service", "Field service", "Field sales", "Loyalty programs", "Invoicing", "Employee management"] },
  { name: "Communication & Social", items: ["Video conferencing", "Messaging", "Social networks", "Community platforms", "Dating", "Live streaming", "Content sharing", "Voice/video calling", "Forums", "Professional networking"] },
  { name: "Supply Chain & Logistics", items: ["Planning", "Inventory tracking", "Warehouse management", "Procurement", "Transportation", "Route optimization", "Fleet management"] },
  { name: "mCommerce", items: ["E-commerce", "Auctions", "Subscriptions", "Food/grocery delivery", "Retail delivery", "Coupons/loyalty", "Price comparison", "Social commerce", "Marketplaces", "On-demand shopping"] },
  { name: "Manufacturing", items: ["MES", "PLM", "Bill of materials", "Quality management", "Equipment monitoring", "Predictive maintenance", "Production planning", "HMI", "Industrial IoT"] },
  { name: "Travel & Hospitality", items: ["Ride-hailing", "Public transit", "Carpooling", "Vehicle rental", "Navigation", "Vacation rentals", "Hotel booking", "Business travel", "Flight alerts"] },
  { name: "Booking & Reservation", items: ["Event/tickets", "Restaurant reservations", "Flight/travel", "Car rental", "Service appointments", "Queue management"] },
  { name: "Real Estate", items: ["Property search", "Buying/selling", "Rental/leasing", "Marketplaces", "Virtual tours", "AR staging", "VR showcases", "Agent platforms", "Investment portfolios", "Smart home"] },
  { name: "Entertainment & Media", items: ["IPTV", "Video streaming", "Live sports", "Music streaming", "Podcasts", "Live TV", "OTT", "Digital media"] },
];

const APP_FEATURES = [
  "Geolocation & GPS", "Secure in-app payments", "Messaging & voice/video calling",
  "Multi-device sync", "Voice recognition", "AI-powered chatbots",
  "AR/VR experiences", "Scheduling & booking", "Personalized experiences",
  "Image recognition", "QR & barcode scanning", "Push notifications",
  "Wearable & smart TV integration", "IoT connectivity", "Mobile BI & reporting",
  "Social login & auth", "Biometric authentication", "Offline mode & sync",
  "Real-time tracking", "In-app search & filtering", "File & document management",
  "Social sharing", "Subscriptions & in-app purchases", "Cloud storage & backup",
  "AI-powered recommendations", "Deep linking", "Multi-language & localization",
];

const TECH_STACK = [
  { category: "Mobile Languages", items: ["Swift", "Objective-C", "Kotlin", "Java", "Dart", "JavaScript", "TypeScript", "C#"] },
  { category: "Frameworks & SDKs", items: ["SwiftUI", "UIKit", "Android SDK", "Jetpack Compose", "React Native", "Flutter", ".NET MAUI", "Ionic", "Capacitor", "Expo"] },
  { category: "Backend", items: ["Node.js", "Python", "Java", "C#", ".NET", "Go", "PHP", "Ruby"] },
  { category: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB", "Firebase", "Redis", "SQLite", "Realm", "DynamoDB", "Azure SQL", "Cosmos DB"] },
  { category: "Cloud & Platforms", items: ["AWS", "Microsoft Azure", "Google Cloud", "Firebase", "Salesforce", "Dynamics 365", "SAP", "ServiceNow"] },
  { category: "APIs & Integrations", items: ["REST APIs", "GraphQL", "WebSockets", "OAuth 2.0", "Apple Pay", "Google Pay", "Maps", "BLE", "Push Notifications"] },
  { category: "Testing & QA", items: ["XCTest", "XCUITest", "Espresso", "Appium", "Detox", "Jest", "JUnit", "BrowserStack", "Firebase Test Lab"] },
  { category: "DevOps & CI/CD", items: ["Docker", "Kubernetes", "Terraform", "Jenkins", "GitHub Actions", "GitLab CI/CD", "Azure DevOps", "Fastlane"] },
  { category: "Monitoring", items: ["Firebase Crashlytics", "Firebase Analytics", "Sentry", "Datadog", "Grafana", "Prometheus", "New Relic"] },
  { category: "AI & ML", items: ["OpenAI APIs", "Gemini APIs", "TensorFlow", "TF Lite", "ML Kit", "Core ML", "Amazon Bedrock", "Hugging Face"] },
  { category: "Low-Code", items: ["Power Apps", "Power Automate", "Bubble", "AppSheet"] },
];

const FAQS = [
  { q: "How long does it take to build a custom mobile app?", a: "Development duration varies by complexity — simple apps require 2–3 months while complex projects can take 6–8 months or more depending on features, platforms, and integrations." },
  { q: "Should I build a mobile app or a mobile-responsive website?", a: "Mobile-responsive websites offer faster deployment and search engine discovery, while mobile apps excel with push notifications, offline functionality, and hardware integration like biometrics and GPS. Many businesses benefit from both." },
  { q: "Why should I invest in a custom mobile app?", a: "Custom solutions meet specific business needs rather than forcing adaptation to pre-built tools. They provide greater control over interface design, security, and scalability while integrating with your existing systems and supporting unique workflows." },
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

export default function MobileAppDevelopmentPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <PageHero
        tag="Mobile Apps"
        title="Expert Custom Mobile App Development Services"
        description="Fully functional, user-centric custom mobile apps that help your business thrive in today's technology-first world. From concept to App Store."
        primaryCta="Discuss your app idea"
        secondaryCta="Get an estimate"
        secondaryHref="/estimate"
      />

      {/* What We Build */}
      <section className="bg-cadbury-purple py-16 lg:py-24 section-grid-bg relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full pointer-events-none" style={{ background: "rgba(22,104,217,0.10)", filter: "blur(64px)" }} />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-2xl sm:text-3xl font-bold gradient-text text-center">What We Build</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
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

      {/* Process */}
      <section className="relative bg-light-bg py-16 lg:py-24 section-grid-bg overflow-hidden noise-overlay">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 aurora-bg" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[700px] w-[700px] rounded-full bg-[rgba(22,104,217,0.05)] blur-[64px]" />
        <div aria-hidden="true" className="pointer-events-none absolute -z-5" style={{ width: 30, height: 30, top: "10%", right: "7%", border: "1px solid rgba(34,184,240,0.06)", borderRadius: 5, animation: "rotate-3d 24s linear infinite, float 14s ease-in-out infinite" }} />
        <div aria-hidden="true" className="pointer-events-none absolute w-1 h-1 rounded-full bg-cyan/15 -z-5" style={{ bottom: "20%", left: "12%", animation: "particle-float-1 8s ease-in-out infinite 2s" }} />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-2xl sm:text-3xl font-bold gradient-text text-center mb-12">Our 6-Step Process</h2>
          <ProcessFlow steps={PROCESS.map((s) => ({ name: s.title, desc: s.desc }))} />
        </div>
      </section>

      {/* AI Integration */}
      <section className="bg-cadbury-purple py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full pointer-events-none" style={{ background: "rgba(34,184,240,0.08)", filter: "blur(64px)" }} />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-2xl sm:text-3xl font-bold gradient-text text-center">AI-Powered Mobile Experiences</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {AI_SERVICES.map((s, i) => (
              <div key={s.title} className="rounded-xl border border-border bg-cadbury-purple p-6 card-hover transition-all">
                <span className="text-sm font-bold text-blue">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-2 text-base font-bold text-navy">{s.title}</h3>
                <p className="mt-2 text-sm text-muted">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Comparison Table */}
      <section className="bg-light-bg py-16 lg:py-24 section-grid-bg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy text-center">App Development Cost Comparison</h2>
          <p className="mt-3 text-muted text-center max-w-2xl mx-auto">Indicative pricing based on app complexity.</p>
          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[640px] text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-bold text-navy">Factor</th>
                  <th className="text-left py-3 px-4 font-bold text-navy">Simple App</th>
                  <th className="text-left py-3 px-4 font-bold text-navy">Medium-Complexity</th>
                  <th className="text-left py-3 px-4 font-bold text-navy">Complex App</th>
                </tr>
              </thead>
              <tbody>
                {COST_TABLE.map((row, i) => (
                  <tr key={row.factor} className={`border-b border-border ${i === 0 ? "bg-cadbury-purple font-semibold" : ""}`}>
                    <td className="py-3 px-4 text-navy font-medium">{row.factor}</td>
                    <td className="py-3 px-4 text-muted">{row.simple}</td>
                    <td className="py-3 px-4 text-muted">{row.medium}</td>
                    <td className="py-3 px-4 text-muted">{row.complex}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Cost Factors */}
      <section className="relative bg-cadbury-purple py-16 lg:py-24 overflow-hidden">
        <div aria-hidden="true" className="pointer-events-none absolute -z-5 rounded-full" style={{ width: 24, height: 24, top: "12%", left: "5%", border: "1px solid rgba(139,92,246,0.06)", animation: "rotate-3d-slow 26s linear infinite, float-diagonal 14s ease-in-out infinite 3s" }} />
        <div aria-hidden="true" className="pointer-events-none absolute w-1 h-1 rounded-full bg-blue/10 -z-5" style={{ bottom: "18%", right: "10%", animation: "particle-float-2 10s ease-in-out infinite" }} />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-2xl sm:text-3xl font-bold gradient-text text-center">What Affects Cost</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {COST_FACTORS.map((f) => (
              <div key={f} className="flex items-center gap-3 rounded-xl border border-border bg-light-bg p-4">
                <svg className="h-4 w-4 shrink-0 text-blue" viewBox="0 0 20 20" fill="currentColor">
                  <circle cx="10" cy="10" r="10" fill="url(#cfG)" />
                  <path d="M6.5 10.5l2 2 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  <defs><linearGradient id="cfG" x1="0" y1="0" x2="20" y2="20"><stop stopColor="#22B8F0" /><stop offset="1" stopColor="#1668D9" /></linearGradient></defs>
                </svg>
                <span className="text-sm text-navy">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-light-bg py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full pointer-events-none" style={{ background: "rgba(22,104,217,0.10)", filter: "blur(64px)" }} />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy text-center">Why Choose CodeNax</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_US.map((w) => (
              <div key={w.step} className="rounded-xl border border-border bg-cadbury-purple p-6 card-hover transition-all">
                <span className="text-sm font-bold text-blue">{w.step}</span>
                <h3 className="mt-2 text-base font-bold text-navy">{w.title}</h3>
                <p className="mt-2 text-sm text-muted">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-cadbury-purple py-16 lg:py-24 section-grid-bg relative overflow-hidden">
        <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full pointer-events-none" style={{ background: "rgba(34,184,240,0.08)", filter: "blur(64px)" }} />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-2xl sm:text-3xl font-bold gradient-text text-center">Industries & App Categories</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INDUSTRIES.map((ind) => (
              <div key={ind.name} className="rounded-xl border border-border bg-cadbury-purple p-6">
                <h3 className="text-base font-bold text-navy">{ind.name}</h3>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {ind.items.map((item) => (
                    <span key={item} className="rounded-full border border-border bg-light-bg px-2.5 py-1 text-xs text-muted">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Features */}
      <section className="relative bg-light-bg py-16 lg:py-24 overflow-hidden">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 perspective-grid" />
        <div aria-hidden="true" className="pointer-events-none absolute w-1.5 h-1.5 rounded-full bg-cyan/12 -z-5" style={{ top: "20%", right: "14%", animation: "particle-float-1 9s ease-in-out infinite" }} />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy text-center">App Features We Build</h2>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {APP_FEATURES.map((f) => (
              <span key={f} className="rounded-full border border-border bg-cadbury-purple px-4 py-2 text-sm font-medium text-navy">{f}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="relative bg-cadbury-purple py-16 lg:py-24 overflow-hidden">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 aurora-bg" />
        <div aria-hidden="true" className="pointer-events-none absolute -z-5" style={{ width: 22, height: 22, bottom: "15%", left: "6%", border: "1px solid rgba(22,104,217,0.08)", borderRadius: 4, animation: "rotate-3d 20s linear infinite reverse, float 12s ease-in-out infinite" }} />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-2xl sm:text-3xl font-bold gradient-text text-center">Technology Stack</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TECH_STACK.map((cat) => (
              <div key={cat.category} className="rounded-xl border border-border bg-light-bg p-6">
                <h3 className="text-sm font-bold text-blue uppercase tracking-wider">{cat.category}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span key={item} className="rounded-full border border-border bg-cadbury-purple px-3 py-1 text-xs font-medium text-navy">{item}</span>
                  ))}
                </div>
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

      <PageCTA title="Let's build your mobile app" description="Share your idea and receive a roadmap and estimate within 48 hours." />
    </>
  );
}
