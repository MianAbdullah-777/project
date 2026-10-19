import Link from "next/link";
import PageHero from "@/components/PageHero";
import PageCTA from "@/components/PageCTA";

const POSTS: Record<
  string,
  { title: string; category: string; date: string; readTime: string; image: string; sections: { heading: string; body: string }[] }
> = {
  "11-best-mvp-development-companies": {
    title: "11 Best MVP Development Companies in 2026",
    category: "Industry",
    date: "Sep 20, 2026",
    readTime: "10 min",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80",
    sections: [
      { heading: "Why choosing the right MVP partner matters", body: "Building an MVP is about speed, focus, and validation. The right development partner helps you ship a lean product that tests your core hypothesis without over-engineering. A bad choice burns months and budget on features nobody asked for." },
      { heading: "What we looked for", body: "We evaluated agencies on four criteria: speed to first deploy, technical depth, design quality, and post-launch support. We also considered pricing transparency and whether they specialize in startup-stage products or serve enterprise clients exclusively." },
      { heading: "The top 11 MVP development companies", body: "1. CodeNax — AI-powered studio with 10+ years of experience, known for shipping MVPs in 4-8 weeks with full-stack teams.\n2. Toptal — curated freelance talent for custom team assembly.\n3. Intellectsoft — enterprise-grade development with startup speed.\n4. Netguru — design-driven product development from Poland.\n5. Savvy Apps — mobile-first MVP specialists based in Washington DC.\n6. Iterative — lean startup methodology baked into their process.\n7. DevSquad — dedicated squads that embed with your team.\n8. Altar.io — product-focused agency from Lisbon with a strong discovery phase.\n9. Uptech — Ukrainian studio known for rapid prototyping.\n10. Rootstrap — growth-focused development with offices in the US and South America.\n11. Lemon.io — vetted developer marketplace for lean teams." },
      { heading: "How to make your final decision", body: "Request case studies in your industry, ask about their discovery process, and insist on a fixed-scope pilot before committing to a long engagement. The best agencies welcome this because they know their work speaks for itself." },
    ],
  },
  "what-is-mvp-software-development": {
    title: "What is MVP Software Development?",
    category: "Guides",
    date: "Sep 14, 2026",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    sections: [
      { heading: "Defining the MVP", body: "A Minimum Viable Product is the smallest version of your product that delivers enough value to attract early adopters and generate real feedback. It is not a prototype, not a demo, and not a half-finished app. It is a working product with one job: validate your riskiest assumption." },
      { heading: "Why MVPs matter", body: "Statistically, 42% of startups fail because they build something nobody wants. An MVP forces you to test demand before investing heavily. It compresses learning cycles from months to weeks and lets you iterate based on actual user behavior, not guesswork." },
      { heading: "The MVP development process", body: "Step 1: Identify the core problem your product solves. Step 2: Map the minimum feature set that addresses it. Step 3: Design a clean, intuitive UI for those features only. Step 4: Build with a scalable stack so you can extend later. Step 5: Launch to a small cohort and instrument everything. Step 6: Analyze, iterate, and expand." },
      { heading: "Common MVP mistakes", body: "Building too many features upfront. Choosing bleeding-edge tech that slows you down. Skipping user research. Not defining success metrics before launch. Treating the MVP as a throwaway instead of the foundation for your real product." },
      { heading: "When to go beyond the MVP", body: "Once you see consistent retention, clear willingness to pay, and users requesting specific features, you have product-market signal. That is when you invest in scaling the architecture, expanding the feature set, and growing the team." },
    ],
  },
  "top-it-staff-augmentation-companies-2026": {
    title: "Top IT Staff Augmentation Companies 2026",
    category: "Industry",
    date: "Sep 8, 2026",
    readTime: "9 min",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
    sections: [
      { heading: "What is staff augmentation?", body: "Staff augmentation is a hiring strategy where you bring in external engineers who work as embedded members of your team. Unlike outsourcing, you retain full control over the project direction, codebase, and priorities. The augmentation partner handles sourcing, vetting, and HR." },
      { heading: "When to choose augmentation over hiring", body: "When you need to scale fast for a specific initiative. When hiring full-time takes too long for your timeline. When you need specialized skills like AI/ML or blockchain that your current team lacks. When budget constraints make permanent headcount impractical." },
      { heading: "Top companies for 2026", body: "CodeNax leads with senior-only engineers, transparent daily rates, and a managed team model. Toptal offers a broad freelance network. Andela focuses on African engineering talent. Turing uses AI matching for global developers. BairesDev provides Latin American teams at competitive rates. Arc.dev specializes in remote developer hiring with async-first workflows." },
      { heading: "Key questions to ask providers", body: "What is the average experience level of your engineers? How quickly can you staff a role? What happens if there is a mismatch? Do you provide management or just bodies? What are your rates and how are they structured?" },
    ],
  },
  "shipping-ai-features-users-trust": {
    title: "Shipping AI Features Users Actually Trust",
    category: "AI",
    date: "Aug 30, 2026",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
    sections: [
      { heading: "The trust gap in AI products", body: "Users are excited about AI but skeptical about reliability. They have been burned by hallucinating chatbots, biased recommendations, and opaque decision-making. To ship AI features people trust, you need to design for transparency, control, and graceful failure." },
      { heading: "Show your work", body: "When AI makes a recommendation or decision, show why. Cite the data sources. Display confidence scores. Let users see the reasoning chain. This transforms AI from a black box into a tool users feel they can verify and override." },
      { heading: "Give users control", body: "Always provide a manual override. Let users adjust AI sensitivity. Make it easy to correct mistakes and have those corrections improve future results. Users trust AI more when they feel they are in the driver's seat." },
      { heading: "Fail gracefully", body: "AI will be wrong sometimes. Design for that. Use fallback behaviors when confidence is low. Clearly communicate uncertainty. Never present a guess as a fact. Users forgive AI that says 'I am not sure' far more than AI that confidently gets it wrong." },
      { heading: "Patterns that work", body: "Progressive disclosure of AI capabilities. Human-in-the-loop for high-stakes decisions. Feedback loops that visibly improve over time. A/B testing AI features against manual alternatives to prove value with data, not hype." },
    ],
  },
  "from-mvp-to-scale-without-rewrite": {
    title: "From MVP to Scale Without a Rewrite",
    category: "Engineering",
    date: "Aug 22, 2026",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=1200&q=80",
    sections: [
      { heading: "The rewrite trap", body: "Most teams hit a point where the MVP codebase feels painful. The temptation is to rewrite everything from scratch. But rewrites are almost always more expensive and slower than expected. The better path is incremental evolution." },
      { heading: "Strangler fig pattern", body: "Replace components one at a time. Build the new version alongside the old, route traffic gradually, and retire legacy pieces once the replacement is proven. This lets you modernize without ever having a non-functional product." },
      { heading: "Extract, don't rebuild", body: "When a monolith gets unwieldy, extract services at natural boundaries. Start with the piece that changes most frequently or has the most independent scaling needs. Keep the rest intact until there is a clear reason to split it." },
      { heading: "Invest in testing first", body: "Before refactoring anything, build a test suite around the existing behavior. Tests are your safety net. Without them, every change risks breaking something silently. With them, you can refactor aggressively and ship with confidence." },
      { heading: "Scaling architecture choices", body: "Move to managed databases and caching early. Add CDN and edge caching for static assets. Implement feature flags to decouple deployment from release. Use horizontal scaling and load balancers instead of vertical scaling." },
    ],
  },
  "design-systems-that-speed-teams-up": {
    title: "Design Systems That Speed Teams Up",
    category: "Design",
    date: "Aug 15, 2026",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=80",
    sections: [
      { heading: "What a design system actually is", body: "A design system is not a component library. It is a shared language between design and engineering: tokens, components, patterns, and principles documented in a way that eliminates ambiguity. When done right, it makes every new feature faster to design, build, and review." },
      { heading: "When to invest", body: "If your team has more than two designers or three frontend engineers, or if you ship features across multiple platforms, you need a design system. The break-even point is typically 3-4 months, after which every feature ships faster." },
      { heading: "Start with tokens, not components", body: "Colors, spacing, typography, shadows, and border radii. Get these right first. Everything else builds on them. If your tokens are consistent, even ad-hoc components will look cohesive." },
      { heading: "Building components that stick", body: "Each component needs: a clear API with sensible defaults, documentation with examples, automated visual regression tests, and an owner who reviews changes. Components without ownership drift and decay." },
    ],
  },
  "why-we-automate-the-boring-80-percent-first": {
    title: "Why We Automate the Boring 80% First",
    category: "Process",
    date: "Aug 8, 2026",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80",
    sections: [
      { heading: "The 80/20 rule of automation", body: "In most businesses, 80% of repetitive work is straightforward and predictable. The other 20% involves edge cases, judgment calls, and exceptions. We always automate the boring 80% first because the ROI is immediate and the risk is low." },
      { heading: "Finding the high-leverage targets", body: "Map every manual process. Measure how long each takes and how often it runs. Multiply frequency by duration. The top items on that list are your automation candidates. Ignore complexity for now — focus on impact." },
      { heading: "Start with workflow automation, not AI", body: "Before reaching for machine learning, check if simple rules, templates, and integrations solve the problem. Zapier-style automation, scheduled jobs, and templated workflows cover a surprising amount of ground at a fraction of the cost." },
      { heading: "When to bring in AI", body: "AI shines when the task requires understanding unstructured data, making predictions, or handling variability that rules cannot cover. Classification, summarization, anomaly detection, and natural language interfaces are all strong AI use cases." },
    ],
  },
  "pragmatic-guide-to-choosing-tech-stack": {
    title: "A Pragmatic Guide to Choosing Your Tech Stack",
    category: "Engineering",
    date: "Jul 30, 2026",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    sections: [
      { heading: "The stack does not make the product", body: "No technology choice will save a bad product idea or compensate for a weak team. The best stack is the one your team knows well, that fits your constraints, and that has a healthy ecosystem. Boring technology is almost always the right choice." },
      { heading: "Frontend choices in 2026", body: "React and Next.js dominate for web apps. React Native or Flutter for cross-platform mobile. TypeScript everywhere. Tailwind CSS for rapid UI development. The ecosystem maturity and hiring pool make these safe defaults." },
      { heading: "Backend and infrastructure", body: "Node.js with TypeScript for API-heavy products. Python for data-intensive or AI workloads. PostgreSQL as the default database. Redis for caching. AWS or Vercel for hosting. Docker for consistency across environments." },
      { heading: "Decision framework", body: "Ask three questions: Can we hire for this stack? Does it handle our scale requirements for the next 18 months? Is the ecosystem actively maintained? If the answer to all three is yes, ship it. Do not optimize for hypothetical future requirements." },
      { heading: "Stacks we recommend by product type", body: "SaaS: Next.js + Node.js + PostgreSQL. Mobile app: React Native + Node.js. AI product: Python + FastAPI + Next.js frontend. E-commerce: Shopify or Next.js Commerce. Internal tools: Retool or Next.js with a headless CMS." },
    ],
  },
  "how-we-run-discovery-sprints": {
    title: "How We Run Discovery Sprints",
    category: "Process",
    date: "Jul 22, 2026",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80",
    sections: [
      { heading: "What is a discovery sprint?", body: "A discovery sprint is a one-week intensive where we take a vague product idea and turn it into a validated spec with wireframes, technical architecture, and a clear scope. It replaces months of back-and-forth with focused, structured exploration." },
      { heading: "Day 1: Understand", body: "Stakeholder interviews, user research review, competitive analysis, and business model mapping. By end of day one, the team has a shared understanding of the problem space, the target users, and the constraints." },
      { heading: "Day 2-3: Explore and decide", body: "Rapid ideation, solution sketching, and prioritization. We map out possible solutions, evaluate them against user needs and technical feasibility, then converge on the strongest approach. Key decisions are documented with rationale." },
      { heading: "Day 4: Prototype", body: "High-fidelity wireframes or clickable prototypes for the core flows. Not pixel-perfect design, but enough to test with real users and communicate the vision to stakeholders and engineers." },
      { heading: "Day 5: Validate and plan", body: "User testing with 3-5 target users. Technical spike on the riskiest assumption. Final deliverable: a product brief with scope, wireframes, architecture diagram, timeline estimate, and recommended team composition." },
    ],
  },
};

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = POSTS[slug];

  if (!post) {
    const title = slug
      .replace(/-/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase());

    return (
      <>
        <PageHero tag="Blog" title={title} description="This article is coming soon." />
        <section className="bg-cadbury-purple py-16 lg:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-muted text-lg">
              We are currently working on this article. Check back soon for the full post.
            </p>
            <Link
              href="/blog"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-blue hover:underline"
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M13 8H3m0 0l4 4M3 8l4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Back to all posts
            </Link>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      {/* Hero with background image */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-20">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${post.image}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#E1D8EE] via-[#E1D8EE]/80 to-[#E1D8EE]/50" />
        </div>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center">
          <div className="flex items-center justify-center gap-3 text-sm text-muted mb-4">
            <span className="rounded-full bg-blue/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-blue">
              {post.category}
            </span>
            <span>{post.date}</span>
            <span>&middot;</span>
            <span>{post.readTime} read</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            <span className="gradient-text">{post.title}</span>
          </h1>
        </div>
      </section>

      {/* Article body */}
      <section className="bg-cadbury-purple py-16 lg:py-20 section-grid-bg">
        <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {post.sections.map((section, i) => (
            <div key={i} className={i > 0 ? "mt-10" : ""}>
              <h2 className="text-xl sm:text-2xl font-bold text-navy">{section.heading}</h2>
              <div className="mt-3 text-muted leading-relaxed whitespace-pre-line">{section.body}</div>
            </div>
          ))}

          {/* Back to blog */}
          <div className="mt-14 pt-8 border-t border-border flex items-center justify-between">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue hover:underline"
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M13 8H3m0 0l4 4M3 8l4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              All posts
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue/30 transition-all hover:scale-105"
              style={{ background: "linear-gradient(to right, #1668D9, #22B8F0)" }}
            >
              Discuss your project
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </article>
      </section>

      <PageCTA />
    </>
  );
}
