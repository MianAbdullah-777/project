"use client";

export default function GlobalBackground() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Aurora gradient layer */}
      <div className="absolute inset-0 aurora-bg" />

      {/* Large blurred glow orb — top right (primary blue) */}
      <div
        className="absolute rounded-full"
        style={{
          width: 320,
          height: 320,
          top: -80,
          right: -64,
          background: "rgba(22, 104, 217, 0.15)",
          filter: "blur(80px)",
          animation: "float 14s ease-in-out infinite",
          willChange: "transform",
        }}
      />

      {/* Large blurred glow orb — bottom left (cyan) */}
      <div
        className="absolute rounded-full"
        style={{
          width: 320,
          height: 320,
          bottom: -96,
          left: -40,
          background: "rgba(34, 184, 240, 0.12)",
          filter: "blur(80px)",
          animation: "float-slow 18s ease-in-out infinite 3s",
          willChange: "transform",
        }}
      />

      {/* Medium glow orb — center-left (subtle primary) */}
      <div
        className="absolute rounded-full"
        style={{
          width: 240,
          height: 240,
          top: "45%",
          left: "15%",
          background: "rgba(22, 104, 217, 0.08)",
          filter: "blur(72px)",
          animation: "float-diagonal 22s ease-in-out infinite 5s",
          willChange: "transform",
        }}
      />

      {/* Purple accent orb — center right */}
      <div
        className="absolute rounded-full"
        style={{
          width: 200,
          height: 200,
          top: "30%",
          right: "10%",
          background: "rgba(139, 92, 246, 0.06)",
          filter: "blur(72px)",
          animation: "float-slow 20s ease-in-out infinite 8s",
          willChange: "transform",
        }}
      />

      {/* 3D Floating geometric shapes */}
      {/* Rotating cube outline — top area */}
      <div
        className="absolute"
        style={{
          width: 40,
          height: 40,
          top: "12%",
          left: "78%",
          border: "1px solid rgba(22, 104, 217, 0.08)",
          borderRadius: 6,
          animation: "rotate-3d 25s linear infinite, float 12s ease-in-out infinite",
          willChange: "transform",
        }}
      />

      {/* Rotating diamond — mid left */}
      <div
        className="absolute"
        style={{
          width: 24,
          height: 24,
          top: "55%",
          left: "6%",
          border: "1px solid rgba(34, 184, 240, 0.10)",
          borderRadius: 4,
          animation: "rotate-3d 20s linear infinite reverse, float-diagonal 15s ease-in-out infinite",
          willChange: "transform",
        }}
      />

      {/* Small 3D ring — bottom right */}
      <div
        className="absolute rounded-full"
        style={{
          width: 32,
          height: 32,
          bottom: "18%",
          right: "12%",
          border: "1px solid rgba(139, 92, 246, 0.08)",
          animation: "rotate-3d-slow 30s linear infinite, float 16s ease-in-out infinite 4s",
          willChange: "transform",
        }}
      />

      {/* Floating particles */}
      <div className="absolute w-1.5 h-1.5 rounded-full bg-cyan/15" style={{ top: "20%", left: "25%", animation: "particle-float-1 8s ease-in-out infinite" }} />
      <div className="absolute w-1 h-1 rounded-full bg-blue/12" style={{ top: "65%", right: "20%", animation: "particle-float-2 10s ease-in-out infinite 2s" }} />
      <div className="absolute w-1.5 h-1.5 rounded-full bg-blue/10" style={{ top: "40%", right: "35%", animation: "particle-float-3 12s ease-in-out infinite 4s" }} />
      <div className="absolute w-1 h-1 rounded-full bg-cyan/10" style={{ bottom: "30%", left: "40%", animation: "particle-float-1 9s ease-in-out infinite 3s" }} />
      <div className="absolute w-1 h-1 rounded-full bg-[#8B5CF6]/10" style={{ top: "75%", left: "65%", animation: "particle-float-2 11s ease-in-out infinite 5s" }} />

      {/* Dot grid with radial mask — fades from top */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at center, rgba(22, 104, 217, 0.06) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          maskImage:
            "radial-gradient(ellipse at top, black, transparent 72%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at top, black, transparent 72%)",
        }}
      />
    </div>
  );
}
