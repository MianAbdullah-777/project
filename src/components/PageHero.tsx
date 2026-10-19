import Link from "next/link";

export default function PageHero({
  tag,
  title,
  description,
  primaryCta,
  primaryHref = "/contact",
  secondaryCta,
  secondaryHref = "/case-studies",
}: {
  tag?: string;
  title: string;
  description: string;
  primaryCta?: string;
  primaryHref?: string;
  secondaryCta?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-light-bg to-cadbury-purple">
      {/* Aurora gradient sweep */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 aurora-bg" />
      {/* Dot grid with radial mask */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at center, rgba(22,104,217,0.07) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          maskImage:
            "radial-gradient(ellipse at top, black, transparent 72%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at top, black, transparent 72%)",
        }}
      />
      {/* Perspective grid */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 perspective-grid" />

      {/* Animated glow orb — top right */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-20 -z-10 rounded-full"
        style={{
          width: 320,
          height: 320,
          background: "rgba(22, 104, 217, 0.18)",
          filter: "blur(72px)",
          animation: "float 14s ease-in-out infinite",
        }}
      />
      {/* Glow orb — bottom left */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 -left-10 -z-10 rounded-full"
        style={{
          width: 280,
          height: 280,
          background: "rgba(34, 184, 240, 0.12)",
          filter: "blur(72px)",
          animation: "float-slow 18s ease-in-out infinite 4s",
        }}
      />
      {/* 3D rotating shapes */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -z-5"
        style={{ width: 36, height: 36, top: "15%", right: "10%", border: "1px solid rgba(22,104,217,0.10)", borderRadius: 6, animation: "rotate-3d 22s linear infinite, float 12s ease-in-out infinite" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -z-5 rounded-full"
        style={{ width: 22, height: 22, bottom: "20%", left: "7%", border: "1px solid rgba(34,184,240,0.08)", animation: "rotate-3d-slow 26s linear infinite, float-diagonal 14s ease-in-out infinite 3s" }}
      />
      {/* Floating particles */}
      <div aria-hidden="true" className="pointer-events-none absolute w-1.5 h-1.5 rounded-full bg-cyan/18 -z-5" style={{ top: "25%", left: "18%", animation: "particle-float-1 8s ease-in-out infinite" }} />
      <div aria-hidden="true" className="pointer-events-none absolute w-1 h-1 rounded-full bg-blue/12 -z-5" style={{ top: "60%", right: "22%", animation: "particle-float-2 10s ease-in-out infinite 3s" }} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24 text-center">
        {tag && (
          <span className="inline-flex items-center gap-2 rounded-full border border-blue/25 bg-blue/5 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-blue mb-4">
            {tag}
          </span>
        )}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight max-w-4xl mx-auto">
          <span className="gradient-text">{title}</span>
        </h1>
        <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">{description}</p>
        {(primaryCta || secondaryCta) && (
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            {primaryCta && (
              <Link
                href={primaryHref}
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue/30 transition-all duration-300 hover:scale-105 hover:opacity-95"
                style={{
                  background: "linear-gradient(to right, #1668D9, #22B8F0)",
                }}
              >
                {primaryCta}
                <svg
                  width="16"
                  height="16"
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
              </Link>
            )}
            {secondaryCta && (
              <Link
                href={secondaryHref}
                className="inline-flex items-center gap-2 rounded-full border border-blue/25 bg-cadbury-purple px-6 py-3 text-sm font-semibold text-navy transition-all duration-300 hover:border-blue/40 hover:bg-blue/5 hover:text-blue hover:scale-105"
              >
                {secondaryCta}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
