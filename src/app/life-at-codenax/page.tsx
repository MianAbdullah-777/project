import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import PageCTA from "@/components/PageCTA";

export const metadata: Metadata = {
  title: "Life at CodeNax",
  description:
    "Remote-first, senior-driven, and obsessed with craft. Explore the culture, perks, and daily rhythm at CodeNax.",
};

const PERKS = [
  { title: "Remote Work", desc: "Work from wherever you do your best thinking. No offices, no commutes." },
  { title: "Flexible Scheduling", desc: "Core overlap hours keep collaboration smooth; the rest of your day is yours to arrange." },
  { title: "Development Budget", desc: "Annual budget for courses, books, conferences, and certifications." },
  { title: "Real Products", desc: "No throwaway prototypes. You ship software that real people depend on daily." },
  { title: "Health & PTO", desc: "Comprehensive health benefits and generous paid time off from your first day." },
  { title: "Flat Structure", desc: "No layers of management. Ideas win on merit, and everyone has a direct voice." },
];

const CULTURE = [
  { title: "Problem-Solving Autonomy", desc: "You own your solutions. We trust experienced engineers to make the right call." },
  { title: "Code Quality Focus", desc: "Pull requests are reviewed thoroughly. We ship code we are proud to maintain." },
  { title: "Direct Feedback", desc: "Honest, respectful feedback flows in every direction, not just top-down." },
  { title: "Casual Interactions", desc: "Virtual coffee chats, game sessions, and async watercooler channels keep us connected." },
  { title: "No Overtime Culture", desc: "Sustainable pace is non-negotiable. We protect evenings and weekends." },
];

const TIMELINE = [
  { time: "Flexible Start", desc: "Begin your day on your schedule. Grab coffee, review yesterday's progress." },
  { time: "Async Updates", desc: "Post your daily update in Slack. Review teammates' progress at your own pace." },
  { time: "Standup", desc: "Short video standup to align on priorities and unblock anything quickly." },
  { time: "Focused Work", desc: "Deep work blocks with minimal interruptions. Build, review, ship." },
  { time: "Clean End", desc: "Wrap up, push your work, and log off. Tomorrow picks up right where you left off." },
];

export default function LifeAtCodenaxPage() {
  return (
    <>
      <PageHero
        title="Remote-first, senior-driven, and obsessed with craft"
        description="We built CodeNax around the way great engineers actually want to work: autonomy, real products, and no unnecessary process."
      />

      {/* Perks */}
      <section className="relative bg-cadbury-purple py-16 lg:py-24 section-grid-bg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center"><span className="gradient-text">Perks & benefits</span></h2>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PERKS.map((p) => (
              <div key={p.title} className="rounded-xl border border-border bg-light-bg p-6 card-hover">
                <h3 className="text-lg font-bold text-navy">{p.title}</h3>
                <p className="mt-2 text-sm text-muted">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="relative isolate overflow-hidden bg-light-bg py-16 lg:py-24">
        {/* Glow orb */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-20 -z-10 rounded-full"
          style={{ width: 288, height: 288, background: "rgba(22,104,217,0.10)", filter: "blur(64px)", animation: "float 14s ease-in-out infinite" }}
        />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy text-center">Our culture</h2>
          <div className="mt-10 space-y-6 max-w-3xl mx-auto">
            {CULTURE.map((c) => (
              <div key={c.title} className="rounded-xl border border-border bg-cadbury-purple p-6">
                <h3 className="font-bold text-navy">{c.title}</h3>
                <p className="mt-1 text-sm text-muted">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* A Typical Day */}
      <section className="bg-cadbury-purple py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy text-center">A typical day</h2>
          <div className="mt-10 max-w-2xl mx-auto relative">
            {/* Vertical line */}
            <div className="absolute left-4 top-0 bottom-0 w-px bg-border" aria-hidden="true" />
            <div className="space-y-8">
              {TIMELINE.map((t) => (
                <div key={t.time} className="relative pl-12">
                  <span className="absolute left-2 top-1 h-5 w-5 rounded-full gradient-bg" aria-hidden="true" />
                  <h3 className="text-sm font-bold text-navy">{t.time}</h3>
                  <p className="mt-1 text-sm text-muted">{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <PageCTA
        title="Want to work with us?"
        description="We are always looking for senior engineers and designers who care about quality."
      />
    </>
  );
}
