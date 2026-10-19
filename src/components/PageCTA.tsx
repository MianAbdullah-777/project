import Link from "next/link";

export default function PageCTA({
  title = "Let’s build something people love",
  description = "Tell us about your project. We respond within 24 hours.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-navy py-16 lg:py-24">
      {/* Subtle background photo — masked & desaturated */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1920&q=80')",
          opacity: 0.15,
          mixBlendMode: "luminosity",
          maskImage:
            "radial-gradient(ellipse 90% 90% at 50% 50%, black, transparent)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 90% at 50% 50%, black, transparent)",
        }}
      />

      {/* Grid line overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.12) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* White glow orbs — animated */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-16 -left-10 -z-10 rounded-full"
        style={{
          width: 320,
          height: 320,
          background: "rgba(255, 255, 255, 0.15)",
          filter: "blur(72px)",
          animation: "float 16s ease-in-out infinite",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 -right-10 -z-10 rounded-full"
        style={{
          width: 320,
          height: 320,
          background: "rgba(255, 255, 255, 0.10)",
          filter: "blur(72px)",
          animation: "float-slow 18s ease-in-out infinite 3s",
        }}
      />
      {/* Cyan accent orb */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -z-10 rounded-full"
        style={{
          width: 200,
          height: 200,
          top: "20%",
          right: "25%",
          background: "rgba(34,184,240,0.08)",
          filter: "blur(64px)",
          animation: "float-diagonal 20s ease-in-out infinite 5s",
        }}
      />
      {/* 3D rotating shapes (light borders on dark bg) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -z-5"
        style={{ width: 32, height: 32, top: "12%", right: "8%", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 5, animation: "rotate-3d 24s linear infinite, float 12s ease-in-out infinite" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -z-5 rounded-full"
        style={{ width: 20, height: 20, bottom: "15%", left: "6%", border: "1px solid rgba(255,255,255,0.06)", animation: "rotate-3d-slow 28s linear infinite reverse, float-diagonal 16s ease-in-out infinite 4s" }}
      />
      {/* Particles */}
      <div aria-hidden="true" className="pointer-events-none absolute w-1 h-1 rounded-full bg-white/15 -z-5" style={{ top: "30%", left: "20%", animation: "particle-float-1 9s ease-in-out infinite" }} />
      <div aria-hidden="true" className="pointer-events-none absolute w-1 h-1 rounded-full bg-white/10 -z-5" style={{ bottom: "25%", right: "15%", animation: "particle-float-2 11s ease-in-out infinite 3s" }} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
          {title}
        </h2>
        <p className="mt-3 text-white/70 max-w-xl mx-auto">{description}</p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue/30 transition-all duration-300 hover:scale-105 hover:opacity-95"
            style={{
              background: "linear-gradient(to right, #1668D9, #22B8F0)",
            }}
          >
            Book a call
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
          <a
            href="mailto:info@codenax.com"
            className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-white/40 hover:bg-cadbury-purple/10 hover:scale-105"
          >
            info@codenax.com
          </a>
          <a
            href="https://wa.me/13074436778"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:opacity-90"
            style={{ backgroundColor: "#25D366" }}
          >
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
