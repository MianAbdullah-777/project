"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface Step {
  name: string;
  desc?: string;
  duration?: string;
}

export default function ProcessFlow({ steps }: { steps: Step[] }) {
  const prefersReduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} className="relative">
      {/* Desktop: horizontal flow */}
      <div className="hidden lg:flex items-start justify-between gap-0">
        {steps.map((step, i) => (
          <div key={step.name} className="flex items-start flex-1 min-w-0">
            {/* Step node */}
            <motion.div
              className="flex flex-col items-center text-center w-full"
              initial={prefersReduced ? false : { opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {/* Circle with number */}
              <div className="relative">
                <div className="relative z-10 grid h-14 w-14 place-items-center rounded-full border-2 border-blue/20 bg-cadbury-purple shadow-lg shadow-blue/10 transition-all duration-300 hover:border-blue hover:shadow-blue/25 hover:scale-110 group cursor-default">
                  <span className="text-sm font-bold gradient-text group-hover:scale-110 transition-transform">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                {/* Pulse ring */}
                {isInView && !prefersReduced && (
                  <motion.div
                    className="absolute inset-0 rounded-full border border-blue/20"
                    initial={{ scale: 1, opacity: 0.6 }}
                    animate={{ scale: 1.6, opacity: 0 }}
                    transition={{ delay: 0.5 + i * 0.12, duration: 1.2, ease: "easeOut" }}
                  />
                )}
              </div>
              {/* Label */}
              <p className="mt-3 text-sm font-bold text-navy">{step.name}</p>
              {step.desc && (
                <p className="mt-1 text-xs text-muted leading-relaxed max-w-[140px]">{step.desc}</p>
              )}
              {step.duration && (
                <span className="mt-2 inline-block rounded-full bg-blue/8 px-2.5 py-0.5 text-[10px] font-semibold text-blue">
                  {step.duration}
                </span>
              )}
            </motion.div>

            {/* Connector line */}
            {i < steps.length - 1 && (
              <div className="flex items-center self-center mt-7 -mx-1 flex-shrink-0" style={{ width: "100%", maxWidth: 80 }}>
                <div className="relative h-[2px] w-full overflow-hidden rounded-full bg-border/40">
                  {isInView && (
                    <motion.div
                      className="absolute inset-y-0 left-0 rounded-full"
                      style={{ background: "linear-gradient(90deg, #1668D9, #22B8F0)" }}
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{
                        delay: 0.3 + i * 0.15,
                        duration: 0.6,
                        ease: [0.25, 0.1, 0.25, 1],
                      }}
                    />
                  )}
                </div>
                {/* Arrow tip */}
                <svg width="8" height="10" viewBox="0 0 8 10" fill="none" className="shrink-0 -ml-px">
                  <motion.path
                    d="M1 1L6 5L1 9"
                    stroke="url(#arrowGrad)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                    transition={{ delay: 0.6 + i * 0.15, duration: 0.4 }}
                  />
                  <defs>
                    <linearGradient id="arrowGrad" x1="1" y1="5" x2="6" y2="5">
                      <stop stopColor="#1668D9" />
                      <stop offset="1" stopColor="#22B8F0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Mobile/tablet: vertical flow */}
      <div className="lg:hidden flex flex-col items-start gap-0">
        {steps.map((step, i) => (
          <div key={step.name} className="flex items-start gap-4">
            {/* Vertical line + node */}
            <div className="flex flex-col items-center">
              <motion.div
                className="relative z-10 grid h-12 w-12 shrink-0 place-items-center rounded-full border-2 border-blue/20 bg-cadbury-purple shadow-lg shadow-blue/10"
                initial={prefersReduced ? false : { opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: i * 0.1, duration: 0.4 }}
              >
                <span className="text-sm font-bold gradient-text">{String(i + 1).padStart(2, "0")}</span>
              </motion.div>
              {/* Vertical connector */}
              {i < steps.length - 1 && (
                <div className="relative w-[2px] bg-border/40 overflow-hidden" style={{ height: 48 }}>
                  {isInView && (
                    <motion.div
                      className="absolute inset-x-0 top-0 rounded-full"
                      style={{ background: "linear-gradient(180deg, #1668D9, #22B8F0)" }}
                      initial={{ height: "0%" }}
                      animate={{ height: "100%" }}
                      transition={{ delay: 0.2 + i * 0.12, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                    />
                  )}
                </div>
              )}
            </div>
            {/* Content */}
            <motion.div
              className="pt-2.5 pb-6"
              initial={prefersReduced ? false : { opacity: 0, x: 15 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.4 }}
            >
              <p className="text-sm font-bold text-navy">{step.name}</p>
              {step.desc && <p className="mt-1 text-xs text-muted leading-relaxed">{step.desc}</p>}
              {step.duration && (
                <span className="mt-1.5 inline-block rounded-full bg-blue/8 px-2.5 py-0.5 text-[10px] font-semibold text-blue">
                  {step.duration}
                </span>
              )}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
