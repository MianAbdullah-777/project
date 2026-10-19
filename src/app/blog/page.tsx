import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import PageCTA from "@/components/PageCTA";

export const metadata: Metadata = {
  title: "Blog",
  description: "Insights on AI, product development, and scaling from the CodeNax team.",
};

const POSTS = [
  {
    slug: "11-best-mvp-development-companies",
    category: "Industry",
    date: "Sep 20, 2026",
    readTime: "10 min",
    title: "11 Best MVP Development Companies in 2026",
    desc: "A curated list of the top MVP development agencies and what sets each apart.",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "what-is-mvp-software-development",
    category: "Guides",
    date: "Sep 14, 2026",
    readTime: "8 min",
    title: "What is MVP Software Development?",
    desc: "Everything you need to know about minimum viable products, from concept to launch.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "top-it-staff-augmentation-companies-2026",
    category: "Industry",
    date: "Sep 8, 2026",
    readTime: "9 min",
    title: "Top IT Staff Augmentation Companies 2026",
    desc: "The best staff augmentation providers for scaling engineering teams fast.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "shipping-ai-features-users-trust",
    category: "AI",
    date: "Aug 30, 2026",
    readTime: "7 min",
    title: "Shipping AI Features Users Actually Trust",
    desc: "Practical patterns for building AI features that feel reliable, not gimmicky.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "from-mvp-to-scale-without-rewrite",
    category: "Engineering",
    date: "Aug 22, 2026",
    readTime: "6 min",
    title: "From MVP to Scale Without a Rewrite",
    desc: "How to evolve your MVP codebase into a production platform without starting over.",
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "design-systems-that-speed-teams-up",
    category: "Design",
    date: "Aug 15, 2026",
    readTime: "5 min",
    title: "Design Systems That Speed Teams Up",
    desc: "Why investing in a design system early pays off in velocity and consistency.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "why-we-automate-the-boring-80-percent-first",
    category: "Process",
    date: "Aug 8, 2026",
    readTime: "5 min",
    title: "Why We Automate the Boring 80% First",
    desc: "Our approach to finding the highest-leverage automation opportunities in any project.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "pragmatic-guide-to-choosing-tech-stack",
    category: "Engineering",
    date: "Jul 30, 2026",
    readTime: "8 min",
    title: "A Pragmatic Guide to Choosing Your Tech Stack",
    desc: "How to pick technologies based on your team, timeline, and product goals.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "how-we-run-discovery-sprints",
    category: "Process",
    date: "Jul 22, 2026",
    readTime: "6 min",
    title: "How We Run Discovery Sprints",
    desc: "Our one-week framework for turning vague ideas into validated product specs.",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80",
  },
];

export default function BlogPage() {
  return (
    <>
      <PageHero
        tag="Blog"
        title="From the blog"
        description="Insights on AI, product development, and scaling from the CodeNax team."
      />

      <section className="relative bg-cadbury-purple py-16 lg:py-24 section-grid-bg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {POSTS.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group overflow-hidden rounded-xl border border-border bg-cadbury-purple card-hover transition-all flex flex-col"
              >
                {/* Image */}
                <div className="aspect-[16/10] relative overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url('${post.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent" />
                  <span className="absolute top-3 left-3 rounded-full bg-cadbury-purple/90 backdrop-blur-sm px-2.5 py-0.5 text-xs font-bold text-navy">
                    {post.category}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-5">
                  <div className="flex items-center gap-3 text-xs text-muted">
                    <span>{post.date}</span>
                    <span>&middot;</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="mt-2 text-lg font-bold text-navy group-hover:text-blue transition-colors">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-sm text-muted flex-1">{post.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue transition-transform duration-300 group-hover:translate-x-1">
                    Read more
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <PageCTA
        title="Want us to write about something?"
        description="Drop us a message with a topic you'd like to see covered."
      />
    </>
  );
}
