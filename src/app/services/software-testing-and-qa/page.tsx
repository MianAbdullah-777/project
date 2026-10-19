"use client";

import { useState } from "react";
import PageHero from "@/components/PageHero";
import PageCTA from "@/components/PageCTA";
import ProcessFlow from "@/components/ProcessFlow";

const OFFERINGS = [
  {
    step: "01",
    title: "QA Assessment & Consulting",
    desc: "Reviewing your current QA practices, testing tools, and workflows, we identify risks and gaps and develop a QA strategy based on the product requirements, business goals, and resources available — including testing priorities, processes, tools, and the best mix of automated and manual testing.",
  },
  {
    step: "02",
    title: "Manual Testing",
    desc: "Our QA engineers test your software manually from the perspective of different users to identify functional problems, usability issues, compatibility problems, and unexpected behaviors. We cover edge cases and critical user journeys.",
  },
  {
    step: "03",
    title: "Automated Testing",
    desc: "We select the best tools and create reliable scripts, maintaining them as your software evolves. Automated testing improves coverage, finds issues sooner, and speeds up your release cycles.",
  },
  {
    step: "04",
    title: "Performance Testing",
    desc: "We evaluate how well your application performs under normal, high, and extreme usage scenarios. Through stress, load, and scalability testing, we identify bottlenecks before they affect users.",
  },
];

const CASE_FOR_QA = [
  {
    title: "Fewer Bugs in Production",
    desc: "Bugs can ruin your reputation and are expensive to fix post-release. Professional QA fixes bugs before they reach end users, eliminating negative experiences.",
  },
  {
    title: "Faster and More Confident Releases",
    desc: "An experienced testing team uses established processes and a structured approach, giving developers constant feedback, enhancing speed, and boosting release confidence.",
  },
  {
    title: "Reduced Development Costs",
    desc: "Finding and fixing bugs early saves you from revising your application post-launch, which costs significantly more time and money.",
  },
];

const WHAT_WE_TEST = [
  "Mobile apps", "Web apps", "Desktop solutions", "Cloud-based systems",
  "Enterprise software", "Medical device software", "E-commerce software",
  "eLearning tools", "Insurance software", "Data warehouses & databases",
  "Microservices-based software", "Big data apps", "Healthcare software",
  "Blockchain software", "SaaS software",
];

const TEST_TYPES = [
  {
    category: "Functional & Product Testing",
    items: ["Functional Testing", "Regression Testing", "Smoke & Sanity Testing", "Integration Testing", "System Testing", "End-to-End Testing", "Exploratory Testing", "User Acceptance Testing (UAT)"],
  },
  {
    category: "Performance & Reliability",
    items: ["Performance Testing", "Load Testing", "Stress Testing", "Scalability Testing", "Endurance Testing", "Volume Testing", "Reliability Testing"],
  },
  {
    category: "Security & Compliance",
    items: ["Security Testing", "Vulnerability Assessment", "Penetration Testing", "API Security Testing", "Auth Testing", "Compliance Testing", "Data Privacy Testing"],
  },
  {
    category: "Usability & Accessibility",
    items: ["Usability Testing", "Accessibility Testing", "UX Testing", "Localization Testing", "Internationalization Testing"],
  },
  {
    category: "Compatibility & Device",
    items: ["Cross-Browser Testing", "Cross-Platform Testing", "Mobile App Testing", "Device Compatibility", "OS Compatibility", "Responsive Testing"],
  },
];

const WHY_US = [
  { title: "Professional QA Engineers", desc: "We use reliable testing methods to find issues related to performance, compatibility, security, and usability." },
  { title: "Coverage of All Testing Areas", desc: "We cover everything from functional testing and automation to security, API, and mobile testing." },
  { title: "Customized Testing Strategies", desc: "Our approach is not one-size-fits-all. Testing strategies are built around application requirements, risk, users, and development processes." },
  { title: "Modern Testing & Automation", desc: "Using modern tools, we improve test coverage, speed up repetitive testing, and support continuous delivery." },
  { title: "Communication & Reporting", desc: "Your team will have a clear view of test results, defects, and severity at all times." },
  { title: "Scalable QA for Your Product", desc: "We adapt our testing process to your evolving application, including new releases, features, integrations, and business requirements." },
];

const PROCESS = [
  { step: "01", title: "Analysis of Requirements", desc: "Review business objectives, technical specifications, user flows, and functional requirements to identify quality issues early." },
  { step: "02", title: "Test Estimation & Planning", desc: "Define testing scope, priority, timeframes, resources, methods, and the best balance of manual and automated tests." },
  { step: "03", title: "Environment & Data Setup", desc: "Prepare testing environments — devices, browsers, databases — to closely mimic real usage. Test integrations included." },
  { step: "04", title: "Test Case & Scenario Design", desc: "Create scenarios, test cases, and checklists covering critical user journeys, edge cases, and automation scripts." },
  { step: "05", title: "Testing Execution", desc: "Comprehensive testing covering functionality, performance, security, compatibility, usability, and other relevant requirements." },
  { step: "06", title: "Defect Reporting & Tracking", desc: "Document issues with clear, reproducible steps and logs for efficient developer handoff." },
  { step: "07", title: "Retesting & Regression", desc: "Re-test defects to confirm fixes. Regression tests ensure new changes don’t break existing functionality." },
  { step: "08", title: "QA Sign-Off", desc: "Detailed reports covering test coverage, defects found and fixed, remaining risks, and overall quality status. QA approval for release." },
  { step: "09", title: "After-Release Support", desc: "Continued testing of new features, updates, and integrations to maintain software quality over time." },
];

const ENGAGEMENT = [
  {
    title: "QA Integrated Into Development",
    desc: "Our QA experts work alongside developers throughout the development lifecycle, ensuring your product passes rigorous quality assurance tests and is market-ready.",
    best: "Teams wanting QA woven into their agile workflow.",
  },
  {
    title: "QA-as-a-Service",
    desc: "Standalone QA and testing services where we run your software through numerous manual and automated tests, identify and fix problems to make your product flawless.",
    best: "Companies needing independent QA or surge capacity.",
  },
];

const TECH_STACK = [
  { category: "Performance", items: ["JMeter", "LoadRunner", "k6", "Gatling"] },
  { category: "Security", items: ["Burp Suite", "OWASP ZAP", "Nessus", "Nmap", "Acunetix"] },
  { category: "Automation", items: ["Selenium", "Playwright", "Cypress", "Appium", "Postman"] },
  { category: "Mobile", items: ["Appium", "Espresso", "XCUITest", "BrowserStack"] },
  { category: "CI/CD", items: ["Jenkins", "GitHub Actions", "GitLab CI/CD", "Azure DevOps"] },
  { category: "Test Management", items: ["Jira", "TestRail", "Zephyr", "Xray"] },
  { category: "Cross-Browser", items: ["BrowserStack", "Sauce Labs", "LambdaTest"] },
  { category: "API Testing", items: ["Postman", "SoapUI", "REST Assured"] },
  { category: "Code Quality", items: ["SonarQube", "Snyk", "Checkmarx"] },
  { category: "Monitoring", items: ["Grafana", "Prometheus", "Datadog", "Sentry"] },
];

const INDUSTRIES = [
  { name: "Healthcare", desc: "Ensure applications are functional, secure, compliant with regulations, and protect sensitive patient data for reliable digital health solutions." },
  { name: "Education", desc: "Usability, functionality, performance, and compatibility checks for eLearning platforms, education management systems, and learning applications across all devices." },
  { name: "Finance & Business", desc: "Testing covers functionality, security, performance, and accuracy of banking, fintech, and business applications to identify errors and vulnerabilities." },
  { name: "Real Estate", desc: "Test rental applications, property management, marketplaces, and listing apps to ensure smooth communication, payments, and booking experiences." },
  { name: "E-commerce", desc: "Test product catalogs, search engines, payment methods, user accounts, and third-party integrations to provide reliable shopping experiences." },
  { name: "Logistics", desc: "Ensure GPS tracking, real-time route updates, and shipment management are working correctly as operations grow." },
  { name: "Travel & Tourism", desc: "Testing covers booking, payment, search, map, notification, and itinerary management for smooth, reliable experiences during high demand." },
  { name: "Food & Delivery", desc: "Test menus, payments, location tracking, driver workflows, notifications, and restaurant integrations for a smooth order and delivery process." },
];

const FAQS = [
  {
    q: "How much do software testing and QA services cost?",
    a: "The cost depends on the complexity of an application, scope, number of platforms, whether manual or automated testing is used, specialized testing needs, device coverage, deadlines, and environment complexity.",
  },
  {
    q: "When should QA testing start?",
    a: "QA testing should start early in the development cycle. Early detection of defects saves time and money, as bugs become more complex and costly to fix as software evolves.",
  },
  {
    q: "Can you integrate QA into our existing development team?",
    a: "Yes, our QA engineers can become part of your development teams, using your tools to collaborate and communicate seamlessly with your existing workflows.",
  },
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

export default function SoftwareTestingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <PageHero
        tag="QA & Testing"
        title="Software Testing & QA Services"
        description="User satisfaction is at the forefront of every software product. With our expert software testing and QA services, we help you find and fix bugs to increase user retention and boost your brand's reputation."
        primaryCta="Talk to our QA team"
        secondaryCta="Get an estimate"
        secondaryHref="/estimate"
      />

      {/* QA Stats Bar */}
      <section className="relative bg-cadbury-purple py-10 overflow-hidden">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 perspective-grid" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="rounded-xl border border-border bg-light-bg p-6 flex flex-wrap items-center justify-center gap-6 text-sm">
            <span className="font-mono text-navy">Build #2418 · main</span>
            <span className="rounded-full bg-green-100 text-green-700 px-3 py-0.5 font-semibold text-xs">Passing</span>
            <span className="text-muted">Coverage: <span className="font-bold text-navy">96.4%</span></span>
            <span className="text-muted">279 tests · <span className="font-bold text-navy">0 failed</span></span>
          </div>
        </div>
      </section>

      {/* Service Offerings */}
      <section className="bg-light-bg py-16 lg:py-24 section-grid-bg relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full pointer-events-none" style={{ background: "rgba(22,104,217,0.10)", filter: "blur(64px)" }} />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-2xl sm:text-3xl font-bold gradient-text text-center">Our QA Services</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {OFFERINGS.map((o) => (
              <div key={o.step} className="rounded-xl border border-border bg-cadbury-purple p-6 card-hover transition-all">
                <span className="text-sm font-bold text-blue">{o.step}</span>
                <h3 className="mt-2 text-base font-bold text-navy">{o.title}</h3>
                <p className="mt-2 text-sm text-muted">{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Case for QA */}
      <section className="relative bg-cadbury-purple py-16 lg:py-24 overflow-hidden">
        <div aria-hidden="true" className="pointer-events-none absolute -z-5 rounded-full" style={{ width: 22, height: 22, top: "15%", right: "8%", border: "1px solid rgba(139,92,246,0.06)", animation: "rotate-3d-slow 26s linear infinite reverse, float-diagonal 14s ease-in-out infinite 3s" }} />
        <div aria-hidden="true" className="pointer-events-none absolute w-1 h-1 rounded-full bg-blue/10 -z-5" style={{ bottom: "22%", left: "12%", animation: "particle-float-1 9s ease-in-out infinite" }} />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy text-center">Why Invest in Professional QA?</h2>
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {CASE_FOR_QA.map((c) => (
              <div key={c.title} className="rounded-xl border border-border bg-light-bg p-6">
                <h3 className="text-base font-bold text-navy">{c.title}</h3>
                <p className="mt-2 text-sm text-muted">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Test */}
      <section className="bg-light-bg py-16 lg:py-24 section-grid-bg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold gradient-text text-center">What We Test</h2>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {WHAT_WE_TEST.map((item) => (
              <span key={item} className="rounded-full border border-border bg-cadbury-purple px-4 py-2 text-sm font-medium text-navy">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Test Types */}
      <section className="bg-cadbury-purple py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full pointer-events-none" style={{ background: "rgba(34,184,240,0.08)", filter: "blur(64px)" }} />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy text-center">Types of Tests We Perform</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TEST_TYPES.map((cat) => (
              <div key={cat.category} className="rounded-xl border border-border bg-light-bg p-6">
                <h3 className="text-sm font-bold text-blue uppercase tracking-wider">{cat.category}</h3>
                <ul className="mt-4 space-y-2">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted">
                      <svg className="mt-1 h-3 w-3 shrink-0 text-blue" viewBox="0 0 12 12" fill="currentColor"><circle cx="6" cy="6" r="3" /></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative bg-light-bg py-16 lg:py-24 overflow-hidden">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 perspective-grid" />
        <div aria-hidden="true" className="pointer-events-none absolute w-1.5 h-1.5 rounded-full bg-cyan/12 -z-5" style={{ top: "20%", left: "15%", animation: "particle-float-1 8s ease-in-out infinite" }} />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-2xl sm:text-3xl font-bold gradient-text text-center">Why Choose CodeNax for QA</h2>
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

      {/* 9-Step Process */}
      <section className="relative bg-cadbury-purple py-16 lg:py-24 section-grid-bg overflow-hidden noise-overlay">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 aurora-bg" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[700px] w-[700px] rounded-full bg-[rgba(22,104,217,0.05)] blur-[64px]" />
        <div aria-hidden="true" className="pointer-events-none absolute -z-5" style={{ width: 30, height: 30, top: "10%", right: "7%", border: "1px solid rgba(22,104,217,0.08)", borderRadius: 5, animation: "rotate-3d 22s linear infinite, float 14s ease-in-out infinite" }} />
        <div aria-hidden="true" className="pointer-events-none absolute w-1 h-1 rounded-full bg-cyan/15 -z-5" style={{ bottom: "18%", left: "12%", animation: "particle-float-1 9s ease-in-out infinite 2s" }} />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-2xl sm:text-3xl font-bold gradient-text text-center mb-12">Our 9-Step QA Process</h2>
          <ProcessFlow steps={PROCESS.map((p) => ({ name: p.title, desc: p.desc }))} />
        </div>
      </section>

      {/* Engagement Models */}
      <section className="relative bg-light-bg py-16 lg:py-24 overflow-hidden">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 perspective-grid" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy text-center">Engagement Models</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {ENGAGEMENT.map((e) => (
              <div key={e.title} className="rounded-xl border border-border bg-cadbury-purple p-6 card-hover transition-all">
                <h3 className="text-lg font-bold text-navy">{e.title}</h3>
                <p className="mt-3 text-sm text-muted">{e.desc}</p>
                <div className="mt-4 rounded-lg bg-light-bg border border-border p-3">
                  <p className="text-xs font-semibold text-blue uppercase tracking-wide">Best for</p>
                  <p className="mt-1 text-sm text-navy">{e.best}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="relative bg-cadbury-purple py-16 lg:py-24 overflow-hidden">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 aurora-bg" />
        <div aria-hidden="true" className="pointer-events-none absolute -z-5" style={{ width: 24, height: 24, bottom: "15%", left: "6%", border: "1px solid rgba(22,104,217,0.08)", borderRadius: 4, animation: "rotate-3d 20s linear infinite reverse, float 12s ease-in-out infinite" }} />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-2xl sm:text-3xl font-bold gradient-text text-center">Our QA Tech Stack</h2>
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

      {/* Industries */}
      <section className="bg-light-bg py-16 lg:py-24 section-grid-bg relative overflow-hidden">
        <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full pointer-events-none" style={{ background: "rgba(22,104,217,0.10)", filter: "blur(64px)" }} />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy text-center">Industries We Serve</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {INDUSTRIES.map((ind) => (
              <div key={ind.name} className="rounded-xl border border-border bg-cadbury-purple p-6">
                <h3 className="text-base font-bold text-navy">{ind.name}</h3>
                <p className="mt-2 text-sm text-muted">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="relative bg-cadbury-purple py-16 lg:py-24 overflow-hidden">
        <div aria-hidden="true" className="pointer-events-none absolute -z-5 rounded-full" style={{ width: 20, height: 20, top: "12%", left: "8%", border: "1px solid rgba(34,184,240,0.06)", animation: "rotate-3d-slow 24s linear infinite, float-diagonal 12s ease-in-out infinite 2s" }} />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-2xl sm:text-3xl font-bold gradient-text text-center">Frequently Asked Questions</h2>
          <div className="mt-10 mx-auto max-w-3xl space-y-4">
            {FAQS.map((faq, i) => (
              <FaqItem key={i} q={faq.q} a={faq.a} open={openFaq === i} onToggle={() => setOpenFaq(openFaq === i ? null : i)} />
            ))}
          </div>
        </div>
      </section>

      <PageCTA title="Quality is not optional" description="Tell us about your product and we'll recommend a QA strategy within 48 hours." />
    </>
  );
}
