import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import PageCTA from "@/components/PageCTA";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "See how CodeNax delivers results — real case studies with measurable outcomes across healthcare, education, fintech, and more.",
};

const CASES = [
  {
    tag: "Healthcare",
    title: "CureNax",
    desc: "A HIPAA-ready patient management platform that cut admin processing time by 45% and reduced no-shows by 35%.",
    href: "/case-studies/curenax-digital-healthcare-platform",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
  },
  {
    tag: "Education",
    title: "PrépaBac Tchad",
    desc: "A mobile-first exam prep app reaching 12,000+ students across Chad with offline-capable quizzes and study plans.",
    href: "/case-studies/prepabac-tchad-learning-app",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
  },
  {
    tag: "Fintech",
    title: "Fintech Invoicing Platform",
    desc: "Automated invoicing system with AI reconciliation that reduced manual processing by 60% and errors to under 1%.",
    href: "/case-studies/fintech-solution-for-smarter-invoicing",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
  },
  {
    tag: "Networking",
    title: "BuzUp",
    desc: "A professional networking platform connecting entrepreneurs with mentors, investors, and co-founders globally.",
    href: "/case-studies/buzup-networking-platform",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80",
  },
  {
    tag: "Education",
    title: "Educator Hub",
    desc: "A global online learning platform enabling educators to create, sell, and manage courses with built-in analytics.",
    href: "/case-studies/educator-hub-global-online-learning-platform",
    image:
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80",
  },
  {
    tag: "Business",
    title: "Ciwac",
    desc: "A unified business platform that reduces admin work by 60% through integrated project, HR, and finance tools.",
    href: "/case-studies/ciwac-unified-business-platform",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
  },
  {
    tag: "Asset Management",
    title: "Asset Hub",
    desc: "A SaaS asset management solution reducing manual work by 35% with automated tracking and reporting.",
    href: "/case-studies/asset-hub-saas",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80",
  },
  {
    tag: "Food",
    title: "ALKEBABISH",
    desc: "A custom food ordering app driving 43% of all orders through the app with real-time tracking and loyalty features.",
    href: "/case-studies/alkebabish-food-ordering-app",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        tag="Case Studies"
        title="Outcomes, not just output"
        description="Real projects, real metrics. See how we help companies ship products that move the needle."
        primaryCta="Start your project"
        primaryHref="/contact"
        secondaryCta="View services"
        secondaryHref="/services"
      />

      <section className="bg-cadbury-purple py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CASES.map((c) => (
              <Link
                key={c.title}
                href={c.href}
                className="group relative overflow-hidden rounded-2xl shadow-lg shadow-navy/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy/10"
              >
                {/* Background image with hover zoom */}
                <div className="aspect-[16/10] relative overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url('${c.image}')` }}
                  />
                  {/* Dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

                  {/* Content over the image */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <span className="inline-block w-fit rounded-full bg-cadbury-purple/90 backdrop-blur-sm px-3 py-1 text-xs font-bold text-navy">
                      {c.tag}
                    </span>
                    <h2 className="mt-2 text-xl font-bold text-white">
                      {c.title}
                    </h2>
                    <p className="mt-1 text-sm text-white/80 line-clamp-2">
                      {c.desc}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-white transition-transform duration-300 group-hover:translate-x-1">
                      Read the story
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 16 16"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M3 8h10m0 0L9 4m4 4L9 12"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <PageCTA />
    </>
  );
}
