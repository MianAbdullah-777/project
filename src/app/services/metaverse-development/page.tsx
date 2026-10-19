"use client";

import { useState } from "react";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import PageCTA from "@/components/PageCTA";
import ProcessFlow from "@/components/ProcessFlow";

/* ── SVG icon helper ── */
function Icon({ d, stroke }: { d: string; stroke?: boolean }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={stroke ? "none" : "currentColor"}
      stroke={stroke ? "currentColor" : "none"}
      strokeWidth={stroke ? "1.5" : undefined}
      strokeLinecap={stroke ? "round" : undefined}
      strokeLinejoin={stroke ? "round" : undefined}
      aria-hidden="true"
    >
      <path d={d} />
    </svg>
  );
}

/* ── Data ── */

const OFFERINGS = [
  {
    step: "01",
    title: "Metaverse App Development",
    desc: "Custom 3D avatars, real-time communication, and cross-platform experiences. We combine blockchain and AR/VR to build immersive applications that connect users across devices.",
    icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
  },
  {
    step: "02",
    title: "Metaverse NFT Development",
    desc: "Own, trade, and utilize virtual assets within metaverse environments. We streamline wallet management behind user-friendly interfaces so adoption is frictionless.",
    icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
  },
  {
    step: "03",
    title: "Metaverse Game Development",
    desc: "Blockchain and advanced technology for exceptional VR/AR gaming experiences. Multiplayer worlds, play-to-earn mechanics, and engaging gameplay loops.",
    icon: "M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664zM21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    step: "04",
    title: "Metaverse Platform Integration",
    desc: "Connect existing platforms to metaverse infrastructure. We integrate accounts, APIs, and payment systems with blockchain for seamless interoperability.",
    icon: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1",
  },
  {
    step: "05",
    title: "Metaverse Social Media App",
    desc: "Users interact through avatars in immersive virtual spaces. Meet, chat, share content, and attend events in richly designed social environments.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
  },
  {
    step: "06",
    title: "Metaverse Digital Assets",
    desc: "Transform concepts into digital representations for virtual worlds. From 3D objects to virtual real estate, we create assets that hold value.",
    icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
  },
  {
    step: "07",
    title: "Metaverse Store Development",
    desc: "Virtual shopping environments with secure wallets for streamlined transactions. Browse, try, and buy in immersive retail spaces.",
    icon: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z",
  },
  {
    step: "08",
    title: "Metaverse Avatar Development",
    desc: "Digital avatars for personality expression and realistic interaction. Customizable characters that represent users across virtual environments.",
    icon: "M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    step: "09",
    title: "Metaverse AR/VR Development",
    desc: "Realistic interaction, spatial movements, controller inputs, and device-specific optimizations for truly immersive augmented and virtual reality.",
    icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
  {
    step: "10",
    title: "Metaverse Maintenance & Support",
    desc: "Bug fixes, security improvements, and feature updates post-launch. We keep your metaverse experience running smoothly long after deployment.",
    icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z",
  },
  {
    step: "11",
    title: "Decentralized Platforms",
    desc: "Blockchain-based platforms for multi-user data from remote locations. Decentralized architecture for transparency, security, and user ownership.",
    icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
  },
];

const TECH_STACK = [
  {
    category: "AR/VR",
    items: [
      "ARKit",
      "ARCore",
      "Unity AR Foundation",
      "Vuforia",
      "8th Wall",
      "Apple ARKit",
      "Google ARCore",
    ],
  },
  {
    category: "AI",
    items: [
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "AWS SageMaker",
      "Google Vertex AI",
      "Azure ML",
    ],
  },
  {
    category: "3D Development",
    items: ["Unity 3D", "Blender", "Unreal Engine"],
  },
  {
    category: "IoT",
    items: ["MQTT", "Microsoft Azure IoT", "LoRaWAN"],
  },
  {
    category: "Front-End",
    items: [
      "HTML5",
      "CSS3",
      "WebSockets",
      "Web3.js",
      "React",
      "Three.js",
      "TypeScript",
    ],
  },
  {
    category: "Back-End",
    items: ["Node.js", "MongoDB", "Solidity", "Rust", "Python"],
  },
  {
    category: "Storage",
    items: [
      "MongoDB",
      "IPFS",
      "Filecoin",
      "CouchDB",
      "Amazon S3",
      "Google Cloud Storage",
      "Azure Blob",
    ],
  },
  {
    category: "Cloud",
    items: [
      "AWS",
      "Microsoft Azure",
      "Google Cloud",
      "IBM Cloud",
      "Oracle Cloud",
    ],
  },
];

const WHY_PARTNER = [
  {
    title: "Research-Driven Development",
    desc: "Market analysis, audience assessment, and technology evaluation before a single line of code is written. We build on evidence, not assumptions.",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01",
  },
  {
    title: "Cross-Industry Experience",
    desc: "Solutions across multiple sectors tailored to industry-specific needs. We bring lessons learned from diverse verticals to every engagement.",
    icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9",
  },
  {
    title: "Creativity as Core Value",
    desc: "Creative thinking combined with technology to produce memorable experiences. Innovation is not an afterthought — it is central to everything we deliver.",
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
  },
  {
    title: "Client-Friendly Pricing",
    desc: "High-end development at competitive pricing. Enterprise-grade quality without the enterprise price tag, with transparent estimates and no hidden costs.",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
];

const INDUSTRIES = [
  {
    name: "Real Estate",
    desc: "Virtual property exploration and ownership experiences. Walk through properties remotely and make confident purchase decisions.",
  },
  {
    name: "Education",
    desc: "VR/AR transforms complex concepts into interactive learning experiences. Immersive classrooms that make education engaging and memorable.",
  },
  {
    name: "Retail & E-commerce",
    desc: "Virtual shops with integrated payments for confident purchases. Try before you buy in immersive shopping environments.",
  },
  {
    name: "Healthcare",
    desc: "Immersive simulations for medical training and remote learning. Practice procedures safely in realistic virtual environments.",
  },
  {
    name: "Sports",
    desc: "Fans interact in virtual spaces, and athletes practice with AI coaching. Immersive training and spectator experiences.",
  },
  {
    name: "Travel & Tourism",
    desc: "Virtual location previews including space simulations. Explore destinations before booking and experience places you cannot reach physically.",
  },
  {
    name: "Automobile",
    desc: "3D design, simulation testing, and interactive vehicle showcases. Configure, customize, and experience vehicles in virtual showrooms.",
  },
  {
    name: "Manufacturers",
    desc: "Digital production environments for team review before manufacturing. Prototype, test, and iterate in virtual spaces before committing to production.",
  },
];

const ENGAGEMENT_MODELS = [
  {
    title: "Project-Based Development",
    desc: "Defined scope and timeframes with agreed milestones. Best for well-scoped initiatives with a clear start and end date.",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
  },
  {
    title: "Staff Augmentation",
    desc: "Hire specialized 3D artists and AR/VR experts while maintaining full control of your project. Scale your team on demand.",
    icon: "M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z",
  },
  {
    title: "Dedicated Team",
    desc: "Developers, designers, and 3D artists committed to your product for the long lifecycle. A full squad embedded in your roadmap.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Ideation",
    desc: "Product and market understanding, asset and requirement gathering. We define the vision and validate the opportunity.",
  },
  {
    step: "02",
    title: "UX/UI Design",
    desc: "Wireframes and creative design for engaging virtual experiences. Spatial UX that feels intuitive and immersive.",
  },
  {
    step: "03",
    title: "Prototype",
    desc: "Interactive design transformation and feedback collection. A working proof-of-concept you can experience before full build.",
  },
  {
    step: "04",
    title: "Metaverse Development",
    desc: "Feature implementation prioritizing user interactions. 3D environments, networking, blockchain, and platform integration.",
  },
  {
    step: "05",
    title: "QA and Testing",
    desc: "Rigorous testing for production-ready products. Performance profiling, device testing, and cross-platform validation.",
  },
  {
    step: "06",
    title: "Deployment",
    desc: "Platform deployment with live environment verification. App store submissions, hosting configuration, and go-live support.",
  },
  {
    step: "07",
    title: "Maintenance and Support",
    desc: "Long-term post-launch services. Bug fixes, security patches, feature updates, and performance optimization.",
  },
];

const FAQS = [
  {
    q: "How much does metaverse development cost?",
    a: "The cost of metaverse development varies significantly depending on scope, complexity, integration levels, and feature requirements. A basic virtual environment starts at a different price point than a full-fledged metaverse platform with blockchain integration, NFT marketplaces, and cross-platform support. We provide custom estimates after an initial consultation where we understand your specific goals, target platforms, and desired features. Contact us for a tailored proposal.",
  },
  {
    q: "How should I start my metaverse project?",
    a: "Start by consulting with a development company and describing your desired outcomes. A good metaverse partner will help you refine your ideas, assess technical feasibility, select the right technology stack, and estimate realistic timelines and budgets. We recommend beginning with a discovery phase where we map out the experience, identify the target audience, choose the right platforms, and build a prototype before committing to full-scale development.",
  },
];

/* ── FAQ Component ── */
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl border border-border bg-cadbury-purple overflow-hidden">
      <button
        type="button"
        className="flex w-full items-center justify-between gap-4 p-5 text-left"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="text-sm font-bold text-navy">{q}</span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          className={`shrink-0 text-blue transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        >
          <path
            d="M5 7.5l5 5 5-5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {open && (
        <div className="px-5 pb-5">
          <p className="text-sm text-muted">{a}</p>
        </div>
      )}
    </div>
  );
}

/* ── Page ── */

export default function MetaverseDevelopmentPage() {
  return (
    <>
      <PageHero
        tag="Metaverse & Immersive"
        title="Metaverse Development Services: Bring Your Virtual World to Life"
        description="Comprehensive metaverse solutions spanning virtual environments, 3D experiences, NFT markets, digital assets, and social platforms. Business requirements drive development, not features."
        primaryCta="Explore possibilities"
      />

      {/* Service Offerings */}
      <section className="bg-cadbury-purple py-16 lg:py-24 section-grid-bg relative overflow-hidden">
        <div
          className="absolute -top-20 -right-20 w-72 h-72 rounded-full pointer-events-none"
          style={{
            background: "rgba(22,104,217,0.10)",
            filter: "blur(64px)",
          }}
        />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-2xl sm:text-3xl font-bold gradient-text text-center">
            Our Services
          </h2>
          <p className="mt-3 text-muted text-center max-w-2xl mx-auto">
            End-to-end metaverse capabilities — from concept and design to
            blockchain integration and post-launch support.
          </p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {OFFERINGS.map((o) => (
              <div
                key={o.step}
                className="rounded-xl border border-border bg-cadbury-purple p-6 card-hover transition-all"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="gradient-icon shrink-0"
                    style={{ width: 48, height: 48 }}
                  >
                    <Icon d={o.icon} stroke />
                  </div>
                  <span className="text-xs font-bold text-blue uppercase tracking-wider">
                    {o.step}
                  </span>
                </div>
                <h3 className="mt-3 text-base font-bold text-navy">
                  {o.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="relative bg-light-bg py-16 lg:py-24 overflow-hidden">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 perspective-grid" />
        <div aria-hidden="true" className="pointer-events-none absolute w-1.5 h-1.5 rounded-full bg-blue/12 -z-5" style={{ top: "22%", right: "14%", animation: "particle-float-2 10s ease-in-out infinite 3s" }} />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy text-center">
            Technology Stack
          </h2>
          <p className="mt-3 text-muted text-center max-w-2xl mx-auto">
            We work with the industry&apos;s leading tools and frameworks to
            build metaverse experiences that perform.
          </p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TECH_STACK.map((cat) => (
              <div
                key={cat.category}
                className="rounded-xl border border-border bg-cadbury-purple p-6"
              >
                <h3 className="text-sm font-bold text-blue uppercase tracking-wider">
                  {cat.category}
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="inline-block rounded-full border border-border bg-light-bg px-3 py-1 text-xs font-medium text-navy"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="bg-cadbury-purple py-16 lg:py-24 relative overflow-hidden">
        <div
          className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full pointer-events-none"
          style={{
            background: "rgba(22,104,217,0.10)",
            filter: "blur(64px)",
          }}
        />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-2xl sm:text-3xl font-bold gradient-text text-center">
            Why Partner with CodeNax
          </h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {WHY_PARTNER.map((w) => (
              <div
                key={w.title}
                className="rounded-xl border border-border bg-cadbury-purple p-6 card-hover transition-all"
              >
                <div
                  className="gradient-icon"
                  style={{ width: 48, height: 48 }}
                >
                  <Icon d={w.icon} stroke />
                </div>
                <h3 className="mt-3 text-base font-bold text-navy">
                  {w.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="relative bg-light-bg py-16 lg:py-24 overflow-hidden">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 perspective-grid" />
        <div aria-hidden="true" className="pointer-events-none absolute w-1 h-1 rounded-full bg-cyan/12 -z-5" style={{ top: "18%", left: "10%", animation: "particle-float-1 8s ease-in-out infinite" }} />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy text-center">
            Industries We Serve
          </h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {INDUSTRIES.map((ind) => (
              <div
                key={ind.name}
                className="rounded-xl border border-border bg-cadbury-purple p-6"
              >
                <h3 className="text-base font-bold text-navy">{ind.name}</h3>
                <p className="mt-2 text-sm text-muted">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="relative bg-cadbury-purple py-16 lg:py-24 overflow-hidden">
        <div aria-hidden="true" className="pointer-events-none absolute -z-5" style={{ width: 26, height: 26, top: "12%", right: "8%", border: "1px solid rgba(22,104,217,0.08)", borderRadius: 4, animation: "rotate-3d 20s linear infinite, float 12s ease-in-out infinite 2s" }} />
        <div aria-hidden="true" className="pointer-events-none absolute w-1 h-1 rounded-full bg-blue/10 -z-5" style={{ bottom: "18%", left: "14%", animation: "particle-float-1 9s ease-in-out infinite" }} />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy text-center">
            Engagement Models
          </h2>
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {ENGAGEMENT_MODELS.map((e) => (
              <div
                key={e.title}
                className="rounded-xl border border-border bg-cadbury-purple p-6 card-hover transition-all"
              >
                <div
                  className="gradient-icon"
                  style={{ width: 48, height: 48 }}
                >
                  <Icon d={e.icon} stroke />
                </div>
                <h3 className="mt-3 text-base font-bold text-navy">
                  {e.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="relative bg-light-bg py-16 lg:py-24 section-grid-bg overflow-hidden noise-overlay">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 aurora-bg" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[700px] w-[700px] rounded-full bg-[rgba(22,104,217,0.05)] blur-[64px]" />
        <div aria-hidden="true" className="pointer-events-none absolute -z-5" style={{ width: 32, height: 32, top: "10%", left: "6%", border: "1px solid rgba(34,184,240,0.06)", borderRadius: 5, animation: "rotate-3d 22s linear infinite, float 14s ease-in-out infinite" }} />
        <div aria-hidden="true" className="pointer-events-none absolute w-1 h-1 rounded-full bg-cyan/15 -z-5" style={{ bottom: "20%", right: "12%", animation: "particle-float-2 10s ease-in-out infinite 3s" }} />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-2xl sm:text-3xl font-bold gradient-text text-center mb-12">
            Development Process
          </h2>
          <ProcessFlow steps={PROCESS.map((s) => ({ name: s.title, desc: s.desc }))} />
        </div>
      </section>

      {/* FAQs */}
      <section className="relative bg-cadbury-purple py-16 lg:py-24 overflow-hidden">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 aurora-bg" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-2xl sm:text-3xl font-bold gradient-text text-center">
            Frequently Asked Questions
          </h2>
          <div className="mt-10 mx-auto max-w-3xl space-y-4">
            {FAQS.map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      <PageCTA
        title="Ready to enter the metaverse?"
        description="Tell us about your vision and we'll map out the experience."
      />
    </>
  );
}
