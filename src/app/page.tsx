"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ScrollReveal, StaggerContainer, staggerItem, AnimatedCounter } from "@/components/motion";
import SectionHeading from "@/components/SectionHeading";
import ProcessFlow from "@/components/ProcessFlow";

/* ───── Shared icons ───── */
function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0" aria-hidden="true">
      <circle cx="10" cy="10" r="10" fill="url(#check-grad)" />
      <path d="M6.5 10.5l2 2 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <defs>
        <linearGradient id="check-grad" x1="0" y1="0" x2="20" y2="20">
          <stop stopColor="#22B8F0" />
          <stop offset="1" stopColor="#1668D9" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ───── Homepage Background — matches real codenax.com ───── */

/* ───── Hero with background image + glow orbs (matches codenax.com) ───── */
const heroEase: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

function Hero() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="relative overflow-hidden">
      {/* Background image layer */}
      <div className="absolute inset-0 -z-30 animate-hero-bg">
        <div
          aria-hidden="true"
          className="absolute inset-0 scale-105 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=80')",
          }}
        />
      </div>

      {/* Animated gradient mesh layer */}
      <div aria-hidden="true" className="absolute inset-0 -z-25 animated-mesh" />

      {/* Aurora gradient sweep */}
      <div aria-hidden="true" className="absolute inset-0 -z-24 aurora-bg" />

      {/* Gradient overlays for depth */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20"
        style={{ backgroundColor: "rgba(225, 216, 238, 0.50)" }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20"
        style={{
          background:
            "linear-gradient(to right, #E1D8EE, rgba(225,216,238,0.80), rgba(225,216,238,0.25))",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20"
        style={{
          background:
            "linear-gradient(to top, #E1D8EE, rgba(225,216,238,0.40), transparent)",
        }}
      />

      {/* 3D Perspective grid — bottom fade */}
      <div aria-hidden="true" className="absolute inset-0 -z-15 perspective-grid" />

      {/* Large blurred glow orbs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-20 -z-10 rounded-full"
        style={{
          width: 320,
          height: 320,
          background: "rgba(22, 104, 217, 0.22)",
          filter: "blur(72px)",
          animation: "float-slow 16s ease-in-out infinite",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-10 -z-10 rounded-full"
        style={{
          width: 320,
          height: 320,
          background: "rgba(34, 184, 240, 0.18)",
          filter: "blur(72px)",
          animation: "float 14s ease-in-out infinite 3s",
        }}
      />
      {/* Purple accent orb */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 left-1/3 -z-10 rounded-full"
        style={{
          width: 200,
          height: 200,
          background: "rgba(139, 92, 246, 0.10)",
          filter: "blur(64px)",
          animation: "float-diagonal 18s ease-in-out infinite 5s",
        }}
      />

      {/* 3D floating geometric decorations */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -z-5"
        style={{
          width: 48,
          height: 48,
          top: "15%",
          right: "8%",
          border: "1px solid rgba(22, 104, 217, 0.12)",
          borderRadius: 8,
          animation: "rotate-3d 22s linear infinite, float 10s ease-in-out infinite",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -z-5 rounded-full"
        style={{
          width: 28,
          height: 28,
          bottom: "20%",
          left: "5%",
          border: "1px solid rgba(34, 184, 240, 0.10)",
          animation: "rotate-3d-slow 28s linear infinite, float-diagonal 14s ease-in-out infinite 2s",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -z-5"
        style={{
          width: 20,
          height: 20,
          top: "60%",
          right: "15%",
          border: "1px solid rgba(139, 92, 246, 0.08)",
          borderRadius: 4,
          animation: "rotate-3d 18s linear infinite reverse, float 12s ease-in-out infinite 4s",
        }}
      />

      {/* Floating particles */}
      <div aria-hidden="true" className="pointer-events-none absolute w-1.5 h-1.5 rounded-full bg-cyan/20 -z-5" style={{ top: "25%", left: "20%", animation: "particle-float-1 7s ease-in-out infinite" }} />
      <div aria-hidden="true" className="pointer-events-none absolute w-1 h-1 rounded-full bg-blue/15 -z-5" style={{ top: "70%", right: "25%", animation: "particle-float-2 9s ease-in-out infinite 2s" }} />
      <div aria-hidden="true" className="pointer-events-none absolute w-1 h-1 rounded-full bg-[#8B5CF6]/12 -z-5" style={{ top: "45%", left: "70%", animation: "particle-float-3 11s ease-in-out infinite 4s" }} />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={prefersReduced ? false : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: heroEase }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-navy">
                Build faster with
                <br />
                <span className="gradient-text relative">
                  elite engineers
                  <motion.span
                    className="absolute -bottom-1 left-0 w-full h-1 gradient-bg rounded-full"
                    initial={prefersReduced ? false : { scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.5, duration: 0.8, ease: heroEase }}
                    style={{ transformOrigin: "left" }}
                  />
                </span>
              </h1>
            </motion.div>
            <motion.p
              className="mt-6 text-lg text-muted max-w-lg"
              initial={prefersReduced ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6, ease: heroEase }}
            >
              CodeNax is an AI-powered software studio that delivers websites,
              mobile apps, and custom AI agents — on time and built to scale.
            </motion.p>
            <motion.div
              className="mt-8 flex flex-wrap gap-4"
              initial={prefersReduced ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6, ease: heroEase }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-base font-semibold text-white shadow-lg shadow-blue/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue/25"
                style={{ background: "linear-gradient(to right, #1668D9, #22B8F0)" }}
              >
                Book a call <ArrowIcon />
              </Link>
              <a
                href="https://wa.me/13074436778"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-blue/25 bg-cadbury-purple/70 backdrop-blur-sm px-6 py-3 text-base font-semibold text-navy transition-all duration-300 hover:border-blue/40 hover:bg-blue/5 hover:text-blue hover:scale-105"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366" aria-hidden="true">
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 1.77.46 3.44 1.27 4.89L2 22l5.23-1.24A9.96 9.96 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2z" />
                </svg>
                WhatsApp us
              </a>
            </motion.div>
          </div>

          <motion.div
            className="relative"
            initial={prefersReduced ? false : { opacity: 0, x: 60, rotateY: -8 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: heroEase }}
          >
            {/* Animated glow behind the card */}
            <div
              className="absolute -inset-6 -z-10 rounded-[2.5rem]"
              style={{
                background: "linear-gradient(135deg, rgba(22,104,217,0.25), rgba(34,184,240,0.15), transparent)",
                filter: "blur(40px)",
                animation: "float 8s ease-in-out infinite",
              }}
            />
            {/* Orbiting accent dot */}
            <div
              aria-hidden="true"
              className="absolute -z-5 w-2 h-2 rounded-full bg-cyan/40"
              style={{ top: -10, right: 40, animation: "orbit 10s linear infinite" }}
            />
            <div className="relative rounded-2xl border border-border/60 bg-cadbury-purple/70 backdrop-blur-md shadow-xl shadow-blue/10 overflow-hidden">
              {/* Top gradient bar */}
              <div className="h-1 w-full bg-gradient-to-r from-cyan via-blue to-[#8B5CF6]" />
              <div className="p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-navy tracking-tight">CodeNax</span>
                    <span className="text-xs text-muted">&middot;</span>
                    <span className="text-sm font-semibold gradient-text">AI Studio</span>
                  </div>
                  <motion.span
                    className="inline-flex items-center gap-1.5 rounded-full bg-green-bg px-2.5 py-0.5 text-[10px] font-bold text-green uppercase tracking-wider"
                    animate={prefersReduced ? {} : { scale: [1, 1.04, 1] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-green animate-pulse" />
                    Live
                  </motion.span>
                </div>

                {/* Feature list */}
                <ul className="space-y-3">
                  {[
                    { icon: "🤖", text: "Custom AI agents & assistants" },
                    { icon: "💬", text: "Chatbots trained on your data" },
                    { icon: "⚡", text: "Workflow & document automation" },
                    { icon: "📊", text: "Recommendation & prediction engines" },
                  ].map((item, i) => (
                    <motion.li
                      key={item.text}
                      className="flex items-center gap-3 text-sm text-navy font-medium"
                      initial={prefersReduced ? false : { opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 + i * 0.1, duration: 0.4, ease: heroEase }}
                    >
                      <span className="text-base">{item.icon}</span>
                      {item.text}
                    </motion.li>
                  ))}
                </ul>

                {/* Divider */}
                <div className="my-5 h-px bg-gradient-to-r from-transparent via-border/40 to-transparent" />

                {/* Metrics row */}
                <motion.div
                  className="grid grid-cols-3 gap-3"
                  initial={prefersReduced ? false : { opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1, duration: 0.5, ease: heroEase }}
                >
                  {[
                    { value: "10×", label: "Faster workflows", color: "text-cyan" },
                    { value: "99%", label: "Happy clients", color: "text-blue" },
                    { value: "On time", label: "Every sprint", color: "text-green" },
                  ].map((m) => (
                    <div key={m.label} className="text-center rounded-lg bg-light-bg/50 py-2.5 px-2">
                      <p className={`text-lg font-extrabold ${m.color}`}>{m.value}</p>
                      <p className="text-[10px] text-muted font-medium mt-0.5">{m.label}</p>
                    </div>
                  ))}
                </motion.div>

                {/* Score gauges */}
                <motion.div
                  className="mt-4 flex items-center justify-between"
                  initial={prefersReduced ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.3, duration: 0.5, ease: heroEase }}
                >
                  {[
                    { label: "Speed", score: 96, color: "#22B8F0" },
                    { label: "SEO", score: 100, color: "#1668D9" },
                    { label: "Accessibility", score: 94, color: "#16A34A" },
                  ].map((g) => (
                    <div key={g.label} className="flex items-center gap-2">
                      <div className="relative h-8 w-8">
                        <svg className="h-8 w-8 -rotate-90" viewBox="0 0 32 32">
                          <circle cx="16" cy="16" r="13" fill="none" stroke="rgba(14,20,32,0.06)" strokeWidth="3" />
                          <circle
                            cx="16" cy="16" r="13" fill="none"
                            stroke={g.color} strokeWidth="3"
                            strokeLinecap="round"
                            strokeDasharray={`${(g.score / 100) * 81.68} 81.68`}
                          />
                        </svg>
                        <span className="absolute inset-0 flex items-center justify-center text-[8px] font-bold text-navy">{g.score}</span>
                      </div>
                      <span className="text-[10px] font-medium text-muted">{g.label}</span>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ───── Ad / Promo Banner Section ───── */
function AdBanner() {
  const promos = [
    {
      icon: "🚀",
      title: "80-Hour MVP Sprint",
      desc: "Go from idea to live product in just 2 weeks. Fixed price, full code ownership.",
      cta: "Get an estimate",
      href: "/estimate",
      gradient: "from-cyan to-blue",
    },
    {
      icon: "🤖",
      title: "AI-Powered Development",
      desc: "Ship smarter products with built-in AI agents, chatbots, and automation.",
      cta: "Explore AI services",
      href: "/services/ai-development",
      gradient: "from-blue to-cyan",
    },
    {
      icon: "👥",
      title: "Hire Senior Engineers",
      desc: "Scale your team in days, not months. 280+ pre-vetted developers across 30 countries.",
      cta: "Hire a team",
      href: "/services/staff-augmentation",
      gradient: "from-cyan to-blue",
    },
  ];

  return (
    <section className="relative z-10 py-8 lg:py-12 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        <div aria-hidden="true" className="absolute w-1 h-1 rounded-full bg-cyan/15" style={{ top: "20%", right: "10%", animation: "particle-float-1 9s ease-in-out infinite" }} />
        <div aria-hidden="true" className="absolute w-1 h-1 rounded-full bg-blue/12" style={{ bottom: "25%", left: "15%", animation: "particle-float-2 11s ease-in-out infinite 3s" }} />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5" stagger={0.1}>
          {promos.map((p) => (
            <motion.div key={p.title} variants={staggerItem}>
              <Link
                href={p.href}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-cadbury-purple/80 backdrop-blur-sm p-6 transition-all duration-300 hover:shadow-xl hover:shadow-cyan/10 hover:-translate-y-1"
              >
                <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${p.gradient}`} />
                <span className="text-3xl">{p.icon}</span>
                <h3 className="mt-3 text-lg font-bold text-navy">{p.title}</h3>
                <p className="mt-1.5 text-sm text-muted leading-relaxed">{p.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-blue group-hover:gap-2.5 transition-all">
                  {p.cta}
                  <ArrowIcon />
                </span>
              </Link>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

/* ───── Stat Row ───── */
function Stats() {
  const stats = [
    { value: 120, suffix: "+", label: "Live applications", decimals: 0 },
    { value: 99.5, suffix: "%", label: "Client retention", decimals: 1 },
    { value: 9.5, suffix: "+", label: "Years building", decimals: 1 },
  ];

  return (
    <section className="relative bg-light-bg/80 border-y border-border/40 backdrop-blur-sm overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 perspective-grid" />
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div aria-hidden="true" className="absolute w-1.5 h-1.5 rounded-full bg-cyan/12" style={{ top: "30%", left: "10%", animation: "particle-float-1 8s ease-in-out infinite" }} />
        <div aria-hidden="true" className="absolute w-1 h-1 rounded-full bg-blue/10" style={{ bottom: "20%", right: "15%", animation: "particle-float-3 10s ease-in-out infinite 2s" }} />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center" stagger={0.15}>
          {stats.map((s) => (
            <motion.div key={s.label} variants={staggerItem} className="relative group">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan/5 to-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative py-2">
                <p className="text-3xl sm:text-4xl font-extrabold gradient-text">
                  <AnimatedCounter target={s.value} suffix={s.suffix} decimals={s.decimals} />
                </p>
                <p className="mt-1 text-sm text-muted">{s.label}</p>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

/* ───── What We Do — matches real codenax.com services grid ───── */
function WhatWeDo() {
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      {/* Animated background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 aurora-bg" />
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div aria-hidden="true" className="absolute -z-5" style={{ width: 36, height: 36, top: "8%", right: "6%", border: "1px solid rgba(22,104,217,0.08)", borderRadius: 6, animation: "rotate-3d 24s linear infinite, float 14s ease-in-out infinite" }} />
        <div aria-hidden="true" className="absolute -z-5 rounded-full" style={{ width: 22, height: 22, bottom: "12%", left: "4%", border: "1px solid rgba(139,92,246,0.06)", animation: "rotate-3d-slow 28s linear infinite reverse, float-diagonal 16s ease-in-out infinite 5s" }} />
        <div aria-hidden="true" className="absolute w-1.5 h-1.5 rounded-full bg-cyan/15 -z-5" style={{ top: "30%", left: "8%", animation: "particle-float-1 9s ease-in-out infinite" }} />
        <div aria-hidden="true" className="absolute w-1 h-1 rounded-full bg-blue/10 -z-5" style={{ bottom: "35%", right: "12%", animation: "particle-float-2 11s ease-in-out infinite 3s" }} />
        <div className="shimmer-line absolute top-0 left-0 w-full" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header row */}
        <ScrollReveal direction="up" distance={40}>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-12">
          <div className="flex flex-col gap-5 max-w-2xl">
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-8 bg-blue" />
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-blue">What we do</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight tracking-tight text-navy text-balance">
              Services that take you{" "}
              <span className="gradient-text">from idea to impact</span>
            </h2>
          </div>
          <div className="flex items-start gap-4 lg:max-w-xs lg:pb-2">
            <span aria-hidden="true" className="mt-1 h-12 w-px shrink-0 bg-gradient-to-b from-blue to-transparent" />
            <p className="text-sm leading-relaxed text-muted sm:text-base">
              A full-stack product partner — design, engineering, AI, and growth — under one roof.
            </p>
          </div>
        </div>
        </ScrollReveal>

        {/* Service cards grid */}
        <StaggerContainer className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12" stagger={0.08}>

          {/* AI Development — featured large card */}
          <motion.div variants={staggerItem} className="sm:col-span-2 lg:col-span-5 lg:row-span-2">
          <Link
            href="/services/ai-development"
            className="group block h-full"
          >
            <div className="relative isolate flex h-full flex-col overflow-hidden rounded-3xl shadow-xl shadow-blue/20 p-7 sm:p-8"
              style={{ background: "linear-gradient(135deg, #1668D9, rgba(22,104,217,0.9), #22B8F0)" }}
            >
              <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-20 w-60 h-60 rounded-full bg-white/10 blur-3xl" />
              <div aria-hidden="true" className="pointer-events-none absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-cyan/20 blur-3xl" />
              <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_50%_50%_at_70%_30%,black,transparent)]" />

              <div className="relative flex flex-1 flex-col gap-5">
                <div className="flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-white/15 text-white ring-1 ring-white/20 backdrop-blur-sm">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
                      <path d="M9 13a4.5 4.5 0 0 0 3-4" />
                      <path d="M12 13h4M12 18h6a2 2 0 0 1 2 2v1M12 8h8M16 8V5a2 2 0 0 1 2-2" />
                      <circle cx="16" cy="13" r=".5" /><circle cx="18" cy="3" r=".5" /><circle cx="20" cy="21" r=".5" /><circle cx="20" cy="8" r=".5" />
                    </svg>
                  </div>
                  <span className="inline-flex items-center rounded-full bg-white/15 px-2 py-0.5 text-[0.65rem] font-medium text-white">
                    Most requested
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-white">AI Development</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/75">
                    Custom AI agents, chatbots, and intelligent automation that transform your data into business insights for growth.
                  </p>
                </div>

                <ul className="flex flex-col gap-1.5">
                  {["Custom AI agents & assistants", "RAG pipelines & embeddings", "Workflow automation"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-[0.8rem] text-white/90">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-cyan" aria-hidden="true">
                        <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-col gap-4">
                  {/* AI Agent Live panel */}
                  <div className="rounded-xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 animate-pulse rounded-full bg-green" />
                        <span className="text-xs font-semibold text-white/90">AI Agent · Live</span>
                      </div>
                      <span className="text-[0.6rem] text-white/50">v2.4.1</span>
                    </div>
                    <div className="mt-4 flex flex-col gap-3">
                      {[
                        { label: "Accuracy", value: "97%", color: "bg-green" },
                        { label: "Latency", value: "88%", color: "bg-cyan" },
                        { label: "Uptime", value: "100%", color: "bg-white/70" },
                      ].map((m) => (
                        <div key={m.label} className="flex items-center gap-3">
                          <span className="w-14 text-[0.65rem] font-medium text-white/60">{m.label}</span>
                          <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/10">
                            <div className={`h-full rounded-full ${m.color} transition-all duration-1000`} style={{ width: m.value }} />
                          </div>
                          <span className="w-8 text-right text-[0.65rem] font-bold text-white/80">{m.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Requests mini chart */}
                  <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                    <span className="text-[0.6rem] text-white/50">Requests</span>
                    <div className="flex h-4 flex-1 items-end gap-0.5">
                      {[40, 60, 35, 75, 50, 85, 65, 90, 70, 95, 80, 100].map((h, i) => (
                        <div key={i} className="flex-1 rounded-sm bg-cyan/60" style={{ height: `${h}%` }} />
                      ))}
                    </div>
                    <span className="flex items-center gap-0.5 text-[0.6rem] font-bold text-green">
                      <svg width="10" height="10" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <path d="M8 12V4m0 0l-3 3m3-3l3 3" />
                      </svg>
                      34%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          </motion.div>

          {/* Website Development */}
          <ServiceCard
            href="/services/web-development"
            icon={<path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />}
            title="Website Development"
            desc="Fast, SEO-ready websites and web apps on Next.js and modern frameworks."
            colSpan="lg:col-span-4"
          >
            <div className="flex flex-col gap-2.5">
              <div className="flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green" aria-hidden="true"><path d="m12 14 4-4" /><path d="M3.34 19a10 10 0 1 1 17.32 0" /></svg>
                <span className="text-xs font-semibold text-navy">Blazing fast</span>
              </div>
              <div className="flex gap-2">
                {[{ label: "Speed", value: 96 }, { label: "SEO", value: 100 }, { label: "Accessibility", value: 94 }].map((s) => (
                  <div key={s.label} className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-[0.6rem] text-muted">{s.label}</span>
                      <span className="text-[0.6rem] font-bold text-green">{s.value}</span>
                    </div>
                    <div className="mt-1 h-1 overflow-hidden rounded-full bg-border">
                      <div className="h-full rounded-full bg-green transition-all duration-1000" style={{ width: `${s.value}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ServiceCard>

          {/* Mobile Apps */}
          <ServiceCard
            href="/services/custom-mobile-app-development"
            icon={<><rect width="14" height="20" x="5" y="2" rx="2" ry="2" /><path d="M12 18h.01" /></>}
            title="Mobile Apps"
            desc="Native and cross-platform iOS & Android apps built to scale."
            colSpan="lg:col-span-3"
          >
            <div className="flex flex-col gap-2.5">
              <div className="flex items-center gap-4">
                {["iOS", "Android"].map((os) => (
                  <div key={os} className="flex items-center gap-2 rounded-lg bg-light-bg/60 px-3 py-1.5">
                    <span className="h-2 w-2 rounded-full bg-green" />
                    <span className="text-xs font-medium text-navy">{os}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#FBBF24" stroke="#FBBF24" strokeWidth="1" aria-hidden="true">
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                    </svg>
                  ))}
                </div>
                <span className="text-xs text-muted">4.9 avg store rating</span>
              </div>
            </div>
          </ServiceCard>

          {/* UI/UX Design */}
          <ServiceCard
            href="/services/ui-ux-design-and-development"
            icon={<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />}
            title="UI/UX Design"
            desc="User-first interfaces and design systems made for simple and easy user navigation."
            colSpan="lg:col-span-5"
          >
            <div className="flex flex-col gap-2.5">
              <div className="flex items-center gap-1.5">
                {["bg-blue", "bg-cyan", "bg-navy", "bg-border", "bg-[#FBBF24]"].map((c, i) => (
                  <div key={i} className={`h-7 w-7 rounded-lg ring-1 ring-border/30 ${c}`} />
                ))}
              </div>
              <div className="flex items-center gap-1.5 text-xs text-muted">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue" aria-hidden="true"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" /></svg>
                <span>Design tokens · Components · Handoff</span>
              </div>
            </div>
          </ServiceCard>

          {/* Dedicated Teams */}
          <ServiceCard
            href="/services/staff-augmentation"
            icon={<><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><path d="M16 3.128a4 4 0 0 1 0 7.744" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><circle cx="9" cy="7" r="4" /></>}
            title="Dedicated Teams"
            desc="Top engineering talent that plugs into your workflow and adds value from day one."
            colSpan="lg:col-span-2"
          >
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {["bg-blue", "bg-cyan", "bg-[#8B5CF6]"].map((c, i) => (
                    <div key={i} className={`h-8 w-8 rounded-full ring-2 ring-cadbury-purple ${c}`} />
                  ))}
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-navy">3 engineers</span>
                  <span className="text-[0.6rem] text-muted">Dedicated to your project</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-border">
                  <div className="h-full rounded-full bg-green transition-all duration-1000" style={{ width: "98%" }} />
                </div>
                <span className="shrink-0 text-xs font-semibold text-green">98% on-time</span>
              </div>
            </div>
          </ServiceCard>

          {/* Software Testing */}
          <ServiceCard
            href="/services/software-testing-and-qa"
            icon={<><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /><path d="m9 12 2 2 4-4" /></>}
            title="Software Testing"
            desc="Automated QA ensuring your product is ready to launch."
            colSpan="lg:col-span-2"
          >
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green" aria-hidden="true"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /><path d="m9 12 2 2 4-4" /></svg>
                <span className="text-xs font-semibold text-navy">Ship with confidence</span>
              </div>
              <div className="flex gap-3">
                <div className="flex-1">
                  <span className="text-[0.6rem] text-muted">Test coverage</span>
                  <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-border">
                    <div className="h-full rounded-full bg-green transition-all duration-1000" style={{ width: "94%" }} />
                  </div>
                  <span className="text-[0.6rem] font-bold text-green">94%</span>
                </div>
                <div className="flex items-center gap-1.5 self-end rounded-full bg-green/10 px-2.5 py-1">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>
                  <span className="text-[0.65rem] font-semibold text-green">847 passed</span>
                </div>
              </div>
            </div>
          </ServiceCard>
        </StaggerContainer>

        {/* View all services */}
        <div className="flex justify-end">
          <Link
            href="/services"
            className="group/all mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-blue transition-colors hover:text-blue/80"
          >
            View all services
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover/all:translate-x-0.5" aria-hidden="true">
              <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  href,
  icon,
  title,
  desc,
  colSpan,
  children,
}: {
  href: string;
  icon: React.ReactNode;
  title: string;
  desc: string;
  colSpan: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div variants={staggerItem} className={`h-full sm:col-span-1 ${colSpan}`}>
      <Link href={href} className="block h-full">
        <div className="group relative isolate flex h-full flex-col overflow-hidden rounded-2xl border border-border/60 bg-cadbury-purple p-5 shadow-sm transition-all duration-300 hover:border-blue/30 hover:shadow-lg hover:shadow-blue/10">
          <span aria-hidden="true" className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-blue to-cyan transition-transform duration-500 group-hover:scale-x-100" />
          <div aria-hidden="true" className="pointer-events-none absolute -right-8 -top-8 -z-10 h-24 w-24 rounded-full bg-blue/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
          <div className="flex items-center justify-between">
            <div className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-blue/10 to-blue/5 text-blue ring-1 ring-blue/15 transition-all duration-300 group-hover:from-blue group-hover:to-cyan group-hover:text-white group-hover:ring-0 group-hover:shadow-md group-hover:shadow-blue/25">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                {icon}
              </svg>
            </div>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted/30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue" aria-hidden="true">
              <path d="M7 7h10v10" /><path d="M7 17 17 7" />
            </svg>
          </div>
          <h3 className="mt-3 text-[0.95rem] font-semibold text-navy">{title}</h3>
          <p className="mt-1 text-[0.8rem] leading-relaxed text-muted">{desc}</p>
          <div className="mt-auto pt-4">{children}</div>
        </div>
      </Link>
    </motion.div>
  );
}

/* ───── Services ───── */
function Services() {
  const services = [
    {
      title: "AI Development",
      desc: "Custom AI models, agents, and automation pipelines tailored to your business workflows.",
      includes: [
        "Large language model integration and fine-tuning",
        "Conversational AI agents (support, sales, ops)",
        "Computer vision and document processing",
        "Workflow automation and intelligent routing",
        "RAG pipelines and knowledge base systems",
        "Model evaluation, monitoring, and iteration",
      ],
    },
    {
      title: "Website Development",
      desc: "High-performance websites built with modern frameworks and optimized for conversions.",
      includes: [
        "Next.js, React, and headless CMS builds",
        "E-commerce platforms (Shopify, custom)",
        "Landing pages and marketing sites",
        "Performance optimization and Core Web Vitals",
        "SEO architecture and structured data",
        "Analytics and conversion tracking setup",
      ],
    },
    {
      title: "Mobile Apps",
      desc: "Native and cross-platform mobile applications for iOS and Android.",
      includes: [
        "React Native and Flutter development",
        "Native iOS (Swift) and Android (Kotlin)",
        "Offline-first and real-time sync",
        "Push notifications and deep linking",
        "App Store and Google Play submission",
        "Post-launch analytics and iteration",
      ],
    },
    {
      title: "UI/UX Design",
      desc: "User-centered design systems, prototypes, and interfaces that delight users.",
      includes: [
        "User research and persona development",
        "Wireframing and interactive prototyping",
        "Design systems and component libraries",
        "Usability testing and iteration",
        "Responsive and accessible design",
        "Handoff-ready Figma deliverables",
      ],
    },
    {
      title: "Dedicated Teams",
      desc: "Full engineering squads embedded in your organization, managed by CodeNax.",
      includes: [
        "Vetted senior engineers matched to your stack",
        "Full-time or part-time arrangements",
        "Project management and daily stand-ups",
        "Seamless integration with your tools (Jira, Slack, GitHub)",
        "Transparent reporting and velocity tracking",
        "Scale up or down with 2-week notice",
      ],
    },
    {
      title: "Software Testing",
      desc: "End-to-end QA with automated testing, performance audits, and security reviews.",
      includes: [
        "Automated test suites (unit, integration, e2e)",
        "Manual exploratory testing",
        "Performance and load testing",
        "Security vulnerability assessments",
        "Accessibility (WCAG) audits",
        "CI/CD pipeline integration",
      ],
    },
    {
      title: "Branding & Marketing",
      desc: "Complete brand identity and marketing strategy to establish your market presence.",
      includes: [
        "Logo design and visual identity",
        "Brand guidelines and style systems",
        "Marketing websites and landing pages",
        "Email campaigns and nurture sequences",
        "Growth strategy and positioning",
        "Content strategy and copywriting",
      ],
    },
    {
      title: "Social Media Marketing",
      desc: "Data-driven social media strategy across LinkedIn, Instagram, TikTok, and X.",
      includes: [
        "Content creation and scheduling",
        "Paid ad campaigns and optimization",
        "Community management and engagement",
        "Monthly analytics and performance reports",
        "Influencer outreach and partnerships",
        "Platform-specific growth strategies",
      ],
    },
    {
      title: "Metaverse & Immersive",
      desc: "Next-generation 3D, AR/VR experiences that redefine digital interaction.",
      includes: [
        "3D web experiences (WebGL, Three.js)",
        "AR product visualizers and try-on",
        "VR environments and walkthroughs",
        "Metaverse integrations and virtual spaces",
        "Interactive 3D configurators",
        "Immersive storytelling and presentations",
      ],
    },
  ];

  return (
    <ScrollReveal direction="up" distance={30}>
      <section className="relative bg-cadbury-purple/60 py-16 lg:py-24 mesh-bg noise-overlay overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[10%] right-[6%] w-3 h-3 border border-cyan/15 rounded-full" style={{ animation: "float-diagonal 11s ease-in-out infinite" }} />
          <div className="absolute bottom-[15%] left-[5%] w-4 h-4 border border-blue/10 rounded-sm" style={{ animation: "float 13s ease-in-out infinite 2s, spin-slow 32s linear infinite" }} />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Services"
            title="Full-spectrum software services"
            highlight="software services"
            description="Everything you need to build, launch, and scale digital products — under one roof."
          />
          <div className="mt-12 space-y-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="card-hover rounded-2xl border border-border/60 bg-cadbury-purple/80 backdrop-blur-sm p-6 lg:p-8 shadow-sm"
              >
                <h3 className="text-xl font-bold text-navy">{service.title}</h3>
                <p className="mt-2 text-muted max-w-2xl">{service.desc}</p>
                <div className="mt-5">
                  <h4 className="text-sm font-semibold text-navy mb-3">What&apos;s included</h4>
                  <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2">
                    {service.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted">
                        <CheckIcon /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}

/* ───── AI Agents ───── */
function AIAgents() {
  const agents = [
    {
      name: "Concierge Agent",
      desc: "Greets every visitor in real time, understands their intent, and routes them to the right team or resource.",
      capabilities: [
        "Multi-language greeting and routing",
        "Seamless handoff to human agents",
        "CRM and calendar integration",
        "Customizable personality and tone",
      ],
      metrics: [
        { label: "Routing accuracy", value: "97.2%" },
        { label: "Avg response time", value: "1.4s" },
        { label: "Languages supported", value: "12" },
        { label: "Uptime", value: "99.9%" },
      ],
    },
    {
      name: "Support Agent",
      desc: "Handles tier-1 support tickets with context-aware, human-like responses.",
      capabilities: [
        "Knowledge base auto-sync",
        "Ticket triage and prioritization",
        "Sentiment detection and escalation",
        "Helpdesk integration (Zendesk, Intercom, Freshdesk)",
      ],
      metrics: [
        { label: "Resolution rate", value: "89%" },
        { label: "Uptime", value: "99.9%" },
        { label: "Avg handle time", value: "42s" },
        { label: "CSAT score", value: "4.7/5" },
      ],
    },
    {
      name: "Sales Agent",
      desc: "Qualifies inbound leads 24/7, books demos, and nurtures prospects through personalized follow-ups.",
      capabilities: [
        "Lead scoring and qualification",
        "Automated demo booking",
        "CRM pipeline updates",
        "Personalized email sequences",
      ],
      metrics: [
        { label: "Leads qualified/mo", value: "340+" },
        { label: "Qualification accuracy", value: "94%" },
        { label: "Demos booked/mo", value: "85+" },
        { label: "Uptime", value: "99.8%" },
      ],
    },
    {
      name: "Ops Agent",
      desc: "Automates repetitive back-office tasks — data entry, report generation, and reconciliation.",
      capabilities: [
        "Workflow automation across tools",
        "Scheduled report generation",
        "Data extraction and validation",
        "ERP and accounting integration",
      ],
      metrics: [
        { label: "Tasks/day", value: "1,200+" },
        { label: "Uptime", value: "99.8%" },
        { label: "Error rate", value: "<0.3%" },
        { label: "Time saved/week", value: "40hrs" },
      ],
    },
  ];

  return (
    <ScrollReveal direction="up" distance={30}>
      <section className="relative bg-light-bg/70 py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[15%] left-[8%] w-2.5 h-2.5 bg-cyan/15 rounded-full" style={{ animation: "float 10s ease-in-out infinite" }} />
          <div className="absolute bottom-[20%] right-[10%] w-3 h-3 border border-blue/12 rounded-sm" style={{ animation: "float-diagonal 15s ease-in-out infinite 1s, spin-slow 30s linear infinite reverse" }} />
          <div className="absolute top-1/2 right-[5%] w-16 h-16 rounded-full border border-cyan/8" style={{ animation: "pulse-glow 7s ease-in-out infinite" }} />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="AI Agents"
            title="Intelligent agents, working for you"
            highlight="working for you"
            description="Purpose-built AI agents that integrate with your tools, learn from your data, and scale with your business."
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {agents.map((agent) => (
              <div
                key={agent.name}
                className="card-hover rounded-2xl border border-border/60 bg-cadbury-purple p-6 flex flex-col shadow-sm"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-base font-bold text-navy">{agent.name}</h3>
                  <span className="inline-flex items-center gap-1 rounded-full bg-green-bg px-2.5 py-0.5 text-[11px] font-semibold text-green">
                    <span className="h-1.5 w-1.5 rounded-full bg-green animate-pulse" />
                    Live
                  </span>
                </div>
                <p className="text-sm text-muted">{agent.desc}</p>
                <div className="mt-4 mb-4 border-t border-border/40" />
                <h4 className="text-xs font-semibold text-navy uppercase tracking-wider mb-3">Capabilities</h4>
                <ul className="space-y-2 flex-1">
                  {agent.capabilities.map((c) => (
                    <li key={c} className="flex items-start gap-2 text-sm text-muted">
                      <CheckIcon /> {c}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 mb-4 border-t border-border/40" />
                <h4 className="text-xs font-semibold text-navy uppercase tracking-wider mb-3">Performance</h4>
                <div className="grid grid-cols-2 gap-4">
                  {agent.metrics.map((m) => (
                    <div key={m.label}>
                      <p className="text-xl font-bold text-navy">{m.value}</p>
                      <p className="text-[11px] text-muted">{m.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}

/* ───── Case Studies ───── */
function CaseStudies() {
  const cases = [
    {
      title: "CureNax",
      tag: "Healthcare",
      problem: "A network of three clinics relied on paper-based patient records and phone scheduling. Appointment no-shows were running at 28%.",
      solution: "We built a HIPAA-ready patient management platform with digital records, automated reminders, an online booking portal, and a real-time dashboard.",
      results: [
        "No-show rate dropped from 28% to 18% (35% reduction)",
        "Administrative processing time cut by 45%",
        "3 clinics fully digitized in under 12 weeks",
        "HIPAA-compliant from day one",
      ],
    },
    {
      title: "PrépaBac Tchad",
      tag: "Education",
      problem: "Students across Chad preparing for the Baccalauréat exam had no structured digital study tools and unreliable internet connectivity.",
      solution: "We developed a mobile-first exam prep app with offline-capable quizzes, structured study plans, and progress tracking.",
      results: [
        "12,000+ active students within 6 months",
        "Offline mode used by 73% of sessions",
        "Average quiz completion rate of 82%",
        "Adopted by 15 schools as a study tool",
      ],
    },
    {
      title: "Fintech Invoicing",
      tag: "Fintech",
      problem: "A growing fintech startup processed invoices manually through spreadsheets — 20+ hours per week and increasing error rates.",
      solution: "We built an automated invoicing system with recurring generation, multi-currency support, payment tracking, and AI-powered reconciliation.",
      results: [
        "Manual processing time reduced by 60%",
        "Invoice error rate dropped from 8% to under 1%",
        "Payment cycle shortened by 12 days on average",
        "Handles 3x volume with the same team",
      ],
    },
  ];

  return (
    <ScrollReveal direction="up" distance={30}>
      <section className="relative bg-cadbury-purple/60 py-16 lg:py-24 mesh-bg noise-overlay overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[8%] left-[12%] w-2 h-2 bg-blue/12 rounded-full" style={{ animation: "float 12s ease-in-out infinite 1s" }} />
          <div className="absolute bottom-[12%] right-[8%] w-3.5 h-3.5 border border-cyan/12 rounded-sm" style={{ animation: "float-diagonal 14s ease-in-out infinite, spin-slow 28s linear infinite" }} />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Case Studies"
            title="Real results, real clients"
            highlight="real clients"
            description="A closer look at how we solve problems and deliver measurable outcomes."
          />
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {cases.map((c) => (
              <div
                key={c.title}
                className="card-hover rounded-2xl border border-border/60 bg-cadbury-purple/80 backdrop-blur-sm p-6 flex flex-col shadow-sm"
              >
                <span className="inline-block self-start rounded-full gradient-bg px-3 py-1 text-xs font-bold text-white">
                  {c.tag}
                </span>
                <h3 className="mt-3 text-lg font-bold text-navy">{c.title}</h3>
                <div className="mt-4 space-y-4 flex-1">
                  <div>
                    <h4 className="text-xs font-bold text-navy uppercase tracking-wider">Problem</h4>
                    <p className="mt-1 text-sm text-muted">{c.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-navy uppercase tracking-wider">Solution</h4>
                    <p className="mt-1 text-sm text-muted">{c.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-navy uppercase tracking-wider">Results</h4>
                    <ul className="mt-1 space-y-1.5">
                      {c.results.map((r) => (
                        <li key={r} className="flex items-start gap-2 text-sm text-muted">
                          <CheckIcon /> {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}

/* ───── Pricing ───── */
function Pricing() {
  const plans = [
    {
      name: "Staff Augmentation",
      price: "From $4,500",
      unit: "/month per engineer",
      desc: "Embed senior developers directly into your team on a flexible monthly basis.",
      features: [
        "Vetted engineers matched to your stack",
        "Full-time or part-time arrangements",
        "Managed onboarding and performance",
        "Scale up or down with 2-week notice",
        "Daily stand-ups and progress reports",
        "Dedicated account manager",
      ],
      cta: "Hire engineers",
      popular: false,
    },
    {
      name: "90-Hour MVP",
      price: "From $9,000",
      unit: "fixed project",
      desc: "Go from idea to a production-ready MVP in a focused 90-hour sprint.",
      features: [
        "Scope-locked deliverable with clear milestones",
        "UI/UX design included",
        "Full-stack development and deployment",
        "Launch-ready in 3–5 weeks",
        "One round of revisions included",
        "30-day post-launch support",
      ],
      cta: "Start your MVP",
      popular: true,
    },
    {
      name: "AI-Powered Apps",
      price: "From $12,000",
      unit: "starting price",
      desc: "Custom AI agents and automation built on top of your existing systems.",
      features: [
        "Discovery and use-case mapping",
        "LLM integration and fine-tuning",
        "Agent development and testing",
        "Integration with your existing tools",
        "Monitoring and performance dashboards",
        "Ongoing optimization retainer available",
      ],
      cta: "Build an AI agent",
      popular: false,
    },
  ];

  return (
    <ScrollReveal direction="up" distance={30}>
      <section className="relative bg-light-bg/70 py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[12%] right-[10%] w-2.5 h-2.5 border border-cyan/15 rounded-full" style={{ animation: "float 11s ease-in-out infinite" }} />
          <div className="absolute bottom-[18%] left-[6%] w-3 h-3 border border-blue/10 rounded-sm" style={{ animation: "float-diagonal 13s ease-in-out infinite 3s, spin-slow 35s linear infinite reverse" }} />
          <div className="absolute top-1/3 left-[50%] w-14 h-14 rounded-full border border-blue/8" style={{ animation: "pulse-glow 8s ease-in-out infinite 2s" }} />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Pricing"
            title="Transparent pricing, no surprises"
            highlight="no surprises"
            description="All prices are starting ranges — final scope is tailored to your project."
          />
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`card-hover rounded-2xl border bg-cadbury-purple p-6 lg:p-8 flex flex-col shadow-sm ${
                  plan.popular ? "border-blue ring-2 ring-blue/20" : "border-border/60"
                }`}
              >
                {plan.popular && (
                  <span className="inline-block self-start rounded-full gradient-bg px-3 py-1 text-xs font-semibold text-white mb-4 shadow-md shadow-blue/25">
                    Most popular
                  </span>
                )}
                <h3 className="text-lg font-bold text-navy">{plan.name}</h3>
                <p className="mt-2 text-sm text-muted">{plan.desc}</p>
                <div className="mt-4">
                  <span className="text-3xl font-extrabold text-navy">{plan.price}</span>
                  <span className="text-sm text-muted ml-1">{plan.unit}</span>
                </div>
                <ul className="mt-6 space-y-3 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-muted">
                      <CheckIcon /> {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`mt-6 block rounded-lg px-6 py-3 text-center text-sm font-semibold transition-all hover:opacity-90 ${
                    plan.popular
                      ? "gradient-bg text-white shadow-lg shadow-blue/25 hover:shadow-xl"
                      : "border border-border text-navy hover:border-blue/40 hover:shadow-md"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-sm text-muted">
            All prices in USD. Need something custom?{" "}
            <Link href="/contact" className="font-semibold text-blue hover:underline">
              Let&apos;s talk
            </Link>
            .
          </p>
        </div>
      </section>
    </ScrollReveal>
  );
}

/* ───── Industries ───── */
function Industries() {
  const industries = [
    {
      name: "Healthcare",
      desc: "HIPAA-compliant patient portals, telehealth apps, AI triage systems, and remote monitoring solutions.",
      icon: "🏥",
      color: "#EF4444",
      bg: "#EF444415",
    },
    {
      name: "Finance & Business",
      desc: "Secure fintech platforms, automated invoicing, payment processing, and real-time analytics dashboards.",
      icon: "💰",
      color: "#3B82F6",
      bg: "#3B82F615",
    },
    {
      name: "Retail & E-commerce",
      desc: "High-converting storefronts, inventory management, personalized recommendations, and omnichannel experiences.",
      icon: "🛒",
      color: "#8B5CF6",
      bg: "#8B5CF615",
    },
    {
      name: "Education",
      desc: "LMS platforms, exam prep apps, offline-capable learning tools, and student progress tracking systems.",
      icon: "🎓",
      color: "#10B981",
      bg: "#10B98115",
    },
    {
      name: "Logistics",
      desc: "Fleet tracking, route optimization, warehouse management, and real-time delivery status systems.",
      icon: "🚛",
      color: "#F59E0B",
      bg: "#F59E0B15",
    },
    {
      name: "Real Estate",
      desc: "Property listing platforms, virtual tours, CRM integrations, and AI-powered property valuation tools.",
      icon: "🏠",
      color: "#06B6D4",
      bg: "#06B6D415",
    },
    {
      name: "Travel & Tourism",
      desc: "Booking engines, itinerary planners, review platforms, and multi-language travel companion apps.",
      icon: "✈️",
      color: "#EC4899",
      bg: "#EC489915",
    },
    {
      name: "Food & Delivery",
      desc: "Order management systems, driver tracking, restaurant dashboards, and AI-optimized delivery routing.",
      icon: "🍔",
      color: "#F97316",
      bg: "#F9731615",
    },
  ];

  return (
    <ScrollReveal direction="up" distance={30}>
      <section className="relative bg-cadbury-purple/60 py-16 lg:py-24 mesh-bg noise-overlay overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[10%] right-[12%] w-3 h-3 border border-cyan/12 rounded-full" style={{ animation: "float 10s ease-in-out infinite" }} />
          <div className="absolute bottom-[15%] left-[8%] w-4 h-4 border border-blue/10 rounded-sm" style={{ animation: "float-diagonal 12s ease-in-out infinite 2s, spin-slow 30s linear infinite" }} />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Industries"
            title="Solutions for every industry"
            highlight="every industry"
            description="We build tailored software for 8+ industries, each with deep domain expertise and compliance knowledge."
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((ind) => (
              <div
                key={ind.name}
                className="card-hover rounded-2xl border border-border/60 bg-cadbury-purple/80 backdrop-blur-sm p-6 flex flex-col shadow-sm group"
              >
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-xl text-xl transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: ind.bg }}
                >
                  {ind.icon}
                </div>
                <h3 className="mt-4 text-base font-bold text-navy">{ind.name}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed flex-1">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}

/* ───── Company ───── */
function Company() {
  const values = [
    { name: "Respect", desc: "We value every interaction and believe in mutual growth." },
    { name: "Curiosity", desc: "We dig deep to understand what drives your business." },
    { name: "Innovation", desc: "We build products designed for future relevance." },
    { name: "Commitment", desc: "We deliver on our promises and provide ongoing support." },
    { name: "Courage", desc: "We address challenges head-on and take bold steps." },
    { name: "Trust", desc: "We enable confident partnerships through transparency." },
  ];

  const process = [
    { step: "01", name: "Discover", desc: "Understand your goals, users, and constraints" },
    { step: "02", name: "Design", desc: "Wireframes, prototypes, and user-tested interfaces" },
    { step: "03", name: "Develop", desc: "Clean, scalable code with agile sprints" },
    { step: "04", name: "Test", desc: "Automated and manual QA, performance audits" },
    { step: "05", name: "Launch", desc: "Deployment, monitoring, and go-live support" },
    { step: "06", name: "Scale", desc: "Optimization, growth features, and iteration" },
  ];

  return (
    <ScrollReveal direction="up" distance={30}>
      <section className="relative bg-light-bg/70 py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[15%] left-[6%] w-2.5 h-2.5 bg-cyan/12 rounded-full" style={{ animation: "float 12s ease-in-out infinite" }} />
          <div className="absolute bottom-[20%] right-[10%] w-3 h-3 border border-blue/10 rounded-sm" style={{ animation: "float-diagonal 15s ease-in-out infinite, spin-slow 28s linear infinite reverse" }} />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Company"
            title="About CodeNax"
            highlight="CodeNax"
            description="12+ years building AI-powered applications, websites, and mobile apps that solve real problems."
          />

          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-5 gap-6 text-center">
            {[
              { value: "120+", label: "Live Applications" },
              { value: "99%", label: "Client Retention" },
              { value: "10+", label: "Years Experience" },
              { value: "8+", label: "Industries Served" },
              { value: "200+", label: "Products Shipped" },
            ].map((s) => (
              <div key={s.label} className="rounded-2xl border border-border/60 bg-cadbury-purple/80 backdrop-blur-sm p-4 shadow-sm">
                <p className="text-2xl font-extrabold gradient-text">{s.value}</p>
                <p className="mt-1 text-xs text-muted">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Our Process — connected flowchart */}
          <div className="mt-16">
            <h3 className="text-xl font-bold text-navy text-center mb-10">Our Process</h3>
            <ProcessFlow steps={process.map((p) => ({ name: p.name, desc: p.desc }))} />
          </div>

          {/* Core Values */}
          <div className="mt-16">
            <h3 className="text-xl font-bold text-navy text-center">Our Values</h3>
            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {values.map((v) => (
                <div key={v.name} className="card-hover rounded-2xl border border-border/60 bg-cadbury-purple/80 backdrop-blur-sm p-5 shadow-sm">
                  <h4 className="text-sm font-bold text-navy">{v.name}</h4>
                  <p className="mt-2 text-sm text-muted">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Leadership */}
          <div className="mt-16 text-center">
            <div className="inline-block rounded-2xl border border-border/60 bg-cadbury-purple/80 backdrop-blur-sm p-8 shadow-sm max-w-lg">
              <div className="flex h-16 w-16 mx-auto items-center justify-center rounded-full gradient-bg text-white text-xl font-bold">
                S
              </div>
              <h4 className="mt-4 text-lg font-bold text-navy">Salman</h4>
              <p className="text-sm text-muted">Founder & CEO</p>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                &ldquo;We don&apos;t just write code — we fuel growth with expertise and vision, building products that create lasting impact.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}

/* ───── Insights (Blog placeholder) ───── */
function Insights() {
  const posts = [
    {
      title: "How AI Agents Are Transforming Customer Support in 2026",
      category: "AI",
      date: "Sep 2026",
      desc: "Explore how purpose-built AI agents are resolving 60%+ of support tickets automatically, cutting response times from hours to seconds.",
    },
    {
      title: "The 90-Hour MVP: From Idea to Production in 3 Weeks",
      category: "Startups",
      date: "Aug 2026",
      desc: "Our proven sprint methodology takes your concept through design, development, and deployment in a focused 90-hour engagement.",
    },
    {
      title: "Why Staff Augmentation Beats Traditional Hiring for Tech Teams",
      category: "Teams",
      date: "Jul 2026",
      desc: "Compare costs, ramp-up time, and flexibility between building an in-house team and embedding vetted senior engineers from CodeNax.",
    },
    {
      title: "Building HIPAA-Compliant Healthcare Apps: A Developer's Guide",
      category: "Healthcare",
      date: "Jun 2026",
      desc: "Key architectural decisions, encryption strategies, and compliance checklists for digital health products that meet regulatory requirements.",
    },
    {
      title: "Next.js vs React: Which Framework Should You Choose in 2026?",
      category: "Engineering",
      date: "May 2026",
      desc: "A practical comparison of Next.js and plain React for production applications, covering SSR, performance, SEO, and developer experience.",
    },
    {
      title: "Scaling Mobile Apps: Lessons from 120+ Live Applications",
      category: "Mobile",
      date: "Apr 2026",
      desc: "Hard-earned lessons from building and maintaining over 120 production applications across iOS, Android, and cross-platform frameworks.",
    },
  ];

  return (
    <ScrollReveal direction="up" distance={30}>
      <section className="relative bg-cadbury-purple/60 py-16 lg:py-24 mesh-bg noise-overlay overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[8%] right-[8%] w-3 h-3 border border-cyan/12 rounded-full" style={{ animation: "float-diagonal 13s ease-in-out infinite" }} />
          <div className="absolute bottom-[12%] left-[10%] w-2.5 h-2.5 bg-blue/10 rounded-full" style={{ animation: "float 11s ease-in-out infinite 2s" }} />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Insights"
            title="Latest from the blog"
            highlight="the blog"
            description="Technical deep-dives, industry insights, and practical guides from the CodeNax engineering team."
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <article
                key={post.title}
                className="card-hover rounded-2xl border border-border/60 bg-cadbury-purple/80 backdrop-blur-sm p-6 flex flex-col shadow-sm group cursor-pointer"
              >
                <div className="flex items-center gap-3 text-xs">
                  <span className="inline-block rounded-full gradient-bg px-2.5 py-0.5 font-bold text-white">
                    {post.category}
                  </span>
                  <span className="text-muted">{post.date}</span>
                </div>
                <h3 className="mt-3 text-base font-bold text-navy leading-snug group-hover:text-blue transition-colors">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm text-muted leading-relaxed flex-1">{post.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue">
                  Read more
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}

/* ───── Testimonials ───── */
function Testimonials() {
  const quotes = [
    {
      text: "CodeNax delivered our MVP two weeks ahead of schedule. Their team integrated seamlessly with ours and the quality exceeded expectations.",
      author: "Sarah M.",
      role: "CTO, HealthTech Startup",
      initials: "SM",
      color: "from-cyan to-blue",
    },
    {
      text: "The AI agents they built for our support team handle 60% of tickets automatically. Response time dropped from hours to seconds.",
      author: "James O.",
      role: "Head of Operations, SaaS Company",
      initials: "JO",
      color: "from-blue to-[#8B5CF6]",
    },
    {
      text: "We've worked with three agencies before CodeNax. They're the first team that actually shipped on time and stayed within budget.",
      author: "Amina L.",
      role: "Founder, EdTech Platform",
      initials: "AL",
      color: "from-[#8B5CF6] to-cyan",
    },
  ];

  return (
    <section className="relative bg-cadbury-purple/60 py-16 lg:py-24 overflow-hidden noise-overlay">
      {/* Aurora gradient sweep */}
      <div aria-hidden="true" className="absolute inset-0 aurora-bg pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* 3D rotating shapes */}
        <div className="absolute" style={{ width: 36, height: 36, top: "10%", right: "8%", border: "1px solid rgba(22,104,217,0.10)", borderRadius: 6, animation: "rotate-3d 20s linear infinite, float 11s ease-in-out infinite" }} />
        <div className="absolute rounded-full" style={{ width: 24, height: 24, bottom: "15%", left: "6%", border: "1px solid rgba(139,92,246,0.08)", animation: "rotate-3d-slow 26s linear infinite, float-diagonal 14s ease-in-out infinite 3s" }} />
        {/* Floating particles */}
        <div className="absolute w-1.5 h-1.5 rounded-full bg-cyan/15" style={{ top: "30%", left: "3%", animation: "particle-float-1 9s ease-in-out infinite" }} />
        <div className="absolute w-1 h-1 rounded-full bg-blue/12" style={{ top: "70%", right: "12%", animation: "particle-float-2 11s ease-in-out infinite 2s" }} />
        <div className="absolute w-1 h-1 rounded-full bg-[#8B5CF6]/10" style={{ bottom: "25%", right: "35%", animation: "particle-float-3 8s ease-in-out infinite 4s" }} />
        {/* Shimmer accent line */}
        <div className="shimmer-line absolute top-0 left-0 w-full" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading tag="Testimonials" title="What our clients say" />
        <StaggerContainer className="mt-12 grid md:grid-cols-3 gap-8" stagger={0.12}>
          {quotes.map((q) => (
            <motion.blockquote
              key={q.author}
              variants={staggerItem}
              className="relative card-hover rounded-2xl border border-border/60 bg-light-bg/80 backdrop-blur-sm p-6 shadow-sm"
            >
              <svg aria-hidden="true" className="absolute -top-1 -left-1 h-10 w-10 text-blue/[0.07]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <div className="flex gap-0.5 mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} width="14" height="14" viewBox="0 0 24 24" fill="#FBBF24" aria-hidden="true">
                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-muted leading-relaxed relative">&ldquo;{q.text}&rdquo;</p>
              <footer className="mt-5 flex items-center gap-3">
                <div className={`grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gradient-to-br ${q.color} text-[0.65rem] font-bold text-white`}>
                  {q.initials}
                </div>
                <div>
                  <p className="text-sm font-bold text-navy">{q.author}</p>
                  <p className="text-xs text-muted">{q.role}</p>
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

/* ───── Tech Stack — Marquee (matches real codenax.com) ───── */
const ROW_1 = [
  { name: "TypeScript", abbr: "TS", color: "#3178C6" },
  { name: "JavaScript", abbr: "JS", color: "#F7DF1E" },
  { name: "Python", abbr: "Py", color: "#3776AB" },
  { name: "Java", abbr: "Ja", color: "#ED8B00" },
  { name: "Go", abbr: "Go", color: "#00ADD8" },
  { name: "C#", abbr: "C#", color: "#68217A" },
  { name: "PHP", abbr: "PH", color: "#777BB4" },
  { name: "Ruby", abbr: "Rb", color: "#CC342D" },
  { name: "Rust", abbr: "Rs", color: "#CE422B" },
  { name: "Kotlin", abbr: "Kt", color: "#7F52FF" },
  { name: "Swift", abbr: "Sw", color: "#FA7343" },
  { name: "React", abbr: "Re", color: "#61DAFB" },
  { name: "Next.js", abbr: "Nx", color: "#000000" },
  { name: "Vue", abbr: "Vu", color: "#4FC08D" },
  { name: "Angular", abbr: "Ng", color: "#DD0031" },
  { name: "Tailwind CSS", abbr: "Tw", color: "#06B6D4" },
  { name: "Redux", abbr: "Rx", color: "#764ABC" },
  { name: "Node.js", abbr: "No", color: "#339933" },
  { name: "Express", abbr: "Ex", color: "#333333" },
  { name: "NestJS", abbr: "Ne", color: "#E0234E" },
  { name: "Django", abbr: "Dj", color: "#092E20" },
  { name: "FastAPI", abbr: "Fa", color: "#009688" },
  { name: "Laravel", abbr: "La", color: "#FF2D20" },
  { name: ".NET", abbr: ".N", color: "#512BD4" },
  { name: "Spring Boot", abbr: "Sb", color: "#6DB33F" },
  { name: "GraphQL", abbr: "Gq", color: "#E10098" },
  { name: "Flutter", abbr: "Fl", color: "#02569B" },
  { name: "Jetpack Compose", abbr: "JC", color: "#4285F4" },
];

const ROW_2 = [
  { name: "OpenAI", abbr: "AI", color: "#412991" },
  { name: "TensorFlow", abbr: "Tf", color: "#FF6F00" },
  { name: "PyTorch", abbr: "Pt", color: "#EE4C2C" },
  { name: "LangChain", abbr: "Lc", color: "#1C3C3C" },
  { name: "Hugging Face", abbr: "HF", color: "#FFD21E" },
  { name: "scikit-learn", abbr: "Sk", color: "#F7931E" },
  { name: "n8n", abbr: "n8", color: "#EA4B71" },
  { name: "Zapier", abbr: "Zp", color: "#FF4F00" },
  { name: "Make", abbr: "Mk", color: "#6D00CC" },
  { name: "Apache Airflow", abbr: "Af", color: "#017CEE" },
  { name: "Celery", abbr: "Ce", color: "#37B24D" },
  { name: "Stripe", abbr: "St", color: "#635BFF" },
  { name: "PostgreSQL", abbr: "Pg", color: "#4169E1" },
  { name: "MySQL", abbr: "My", color: "#4479A1" },
  { name: "MongoDB", abbr: "Mg", color: "#47A248" },
  { name: "Redis", abbr: "Rd", color: "#DC382D" },
  { name: "Supabase", abbr: "Su", color: "#3ECF8E" },
  { name: "Firebase", abbr: "Fb", color: "#FFCA28" },
  { name: "Prisma", abbr: "Pr", color: "#2D3748" },
  { name: "AWS", abbr: "AW", color: "#FF9900" },
  { name: "Google Cloud", abbr: "GC", color: "#4285F4" },
  { name: "Docker", abbr: "Dk", color: "#2496ED" },
  { name: "Kubernetes", abbr: "K8", color: "#326CE5" },
  { name: "Vercel", abbr: "Vc", color: "#000000" },
  { name: "GitHub Actions", abbr: "GA", color: "#2088FF" },
  { name: "Terraform", abbr: "Tf", color: "#7B42BC" },
];

function TechChip({ name, abbr, color }: { name: string; abbr: string; color: string }) {
  return (
    <div className="group/chip flex shrink-0 items-center gap-2.5 rounded-xl border border-border/50 bg-cadbury-purple px-4 py-2.5 shadow-sm transition-all duration-300 hover:border-blue/30 hover:shadow-md hover:shadow-blue/10">
      <div
        className="flex h-5 w-5 items-center justify-center rounded text-[10px] font-bold text-white transition-all duration-300 grayscale group-hover/chip:grayscale-0"
        style={{ backgroundColor: color }}
      >
        {abbr.substring(0, 2)}
      </div>
      <span className="text-sm font-medium text-navy whitespace-nowrap">{name}</span>
    </div>
  );
}

function MarqueeRow({
  items,
  reverse = false,
}: {
  items: typeof ROW_1;
  reverse?: boolean;
}) {
  const doubled = [...items, ...items];
  return (
    <div
      className="group/row relative overflow-hidden"
      style={{
        maskImage: "linear-gradient(to right, transparent, black 4%, black 96%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, black 4%, black 96%, transparent)",
      }}
    >
      <div
        className={`flex w-max gap-3 group-hover/row:[animation-play-state:paused] ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        {doubled.map((tech, i) => (
          <TechChip key={`${tech.name}-${i}`} {...tech} />
        ))}
      </div>
    </div>
  );
}

function TechStack() {
  return (
    <section className="relative bg-light-bg/80 py-16 lg:py-24 overflow-hidden">
      {/* Perspective grid background */}
      <div aria-hidden="true" className="absolute inset-0 perspective-grid pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* 3D geometric shapes */}
        <div className="absolute" style={{ width: 32, height: 32, top: "12%", left: "5%", border: "1px solid rgba(34,184,240,0.10)", borderRadius: 4, animation: "rotate-3d 24s linear infinite, float-diagonal 12s ease-in-out infinite" }} />
        <div className="absolute rounded-full" style={{ width: 20, height: 20, bottom: "18%", right: "8%", border: "1px solid rgba(22,104,217,0.08)", animation: "rotate-3d-slow 22s linear infinite reverse, float 16s ease-in-out infinite 5s" }} />
        {/* Particles */}
        <div className="absolute w-1.5 h-1.5 rounded-full bg-blue/12" style={{ top: "20%", right: "20%", animation: "particle-float-1 10s ease-in-out infinite 1s" }} />
        <div className="absolute w-1 h-1 rounded-full bg-cyan/15" style={{ bottom: "30%", left: "25%", animation: "particle-float-2 8s ease-in-out infinite 3s" }} />
        {/* Top shimmer line */}
        <div className="shimmer-line absolute top-0 left-0 w-full" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Tech Stack"
          title="Built with tools you trust"
          highlight="tools you trust"
          description="We work with industry-leading technologies to deliver scalable, reliable, and future-proof solutions."
        />
      </div>

      <div className="mt-8 flex flex-col gap-3">
        <ScrollReveal direction="left" distance={60} duration={0.8}>
          <MarqueeRow items={ROW_1} />
        </ScrollReveal>
        <ScrollReveal direction="right" distance={60} duration={0.8} delay={0.15}>
          <MarqueeRow items={ROW_2} reverse />
        </ScrollReveal>
      </div>

      <ScrollReveal direction="up" distance={20} delay={0.3}>
        <p className="mt-8 text-center text-sm text-muted">
          <span className="font-semibold gradient-text">{ROW_1.length + ROW_2.length}+</span>{" "}
          technologies across 8 categories
        </p>
      </ScrollReveal>
    </section>
  );
}

/* ───── FAQ ───── */
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`rounded-2xl border backdrop-blur-sm shadow-sm transition-all duration-300 hover:shadow-md ${open ? "border-blue/25 bg-light-bg/90" : "border-border/60 bg-light-bg/80"}`}>
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full cursor-pointer items-center justify-between px-6 py-4 text-left text-sm font-semibold text-navy"
        aria-expanded={open}
      >
        {q}
        <motion.svg
          className="h-5 w-5 shrink-0 text-muted"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
        </motion.svg>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-4">
              <div className="h-px w-full bg-gradient-to-r from-blue/10 via-border/30 to-transparent mb-3" />
              <p className="text-sm text-muted leading-relaxed">{a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function FAQ() {
  const faqs = [
    {
      q: "How quickly can you start a new project?",
      a: "Most projects kick off within one week of signing. For staff augmentation, we can embed engineers in your team within 48 hours.",
    },
    {
      q: "Do you work with early-stage startups?",
      a: "Yes. Our 90-Hour MVP model is designed specifically for startups that need to validate an idea fast without over-investing.",
    },
    {
      q: "What does ongoing support look like after launch?",
      a: "We offer flexible retainers that cover bug fixes, performance monitoring, feature additions, and scaling infrastructure as your user base grows.",
    },
    {
      q: "Can your AI agents integrate with our existing tools?",
      a: "Absolutely. Our agents connect to Slack, CRMs, ERPs, helpdesks, and custom APIs. We design every integration around your current workflow.",
    },
  ];

  return (
    <section className="relative bg-cadbury-purple/60 py-16 lg:py-24 overflow-hidden noise-overlay">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-[15%] right-[5%] w-3 h-3 border border-cyan/15 rounded-sm" style={{ animation: "float-diagonal 14s ease-in-out infinite 2s, spin-slow 28s linear infinite reverse" }} />
        <div className="absolute top-[10%] left-[12%] w-2 h-2 bg-cyan/15 rounded-full" style={{ animation: "float 8s ease-in-out infinite" }} />
      </div>
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading tag="FAQ" title="Common questions" />
        <StaggerContainer className="mt-10 space-y-4" stagger={0.08}>
          {faqs.map((f) => (
            <motion.div key={f.q} variants={staggerItem}>
              <FaqItem q={f.q} a={f.a} />
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

/* ───── Final CTA ───── */
function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-light-bg/80 py-16 lg:py-24 noise-overlay">
      {/* Aurora gradient sweep */}
      <div aria-hidden="true" className="absolute inset-0 aurora-bg pointer-events-none" />
      {/* Perspective grid */}
      <div aria-hidden="true" className="absolute inset-0 perspective-grid pointer-events-none" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-16 -right-16 w-80 h-80 morph-blob opacity-40"
          style={{
            background: "radial-gradient(circle, rgba(34,184,240,0.18) 0%, transparent 65%)",
            animation: "float 10s ease-in-out infinite, morph 16s ease-in-out infinite",
          }}
        />
        <div
          className="absolute -bottom-20 -left-20 w-72 h-72 morph-blob opacity-30"
          style={{
            background: "radial-gradient(circle, rgba(22,104,217,0.14) 0%, transparent 65%)",
            animation: "float-slow 14s ease-in-out infinite, morph 20s ease-in-out infinite reverse",
          }}
        />
        {/* 3D rotating geometric shapes */}
        <div className="absolute" style={{ width: 40, height: 40, top: "15%", right: "10%", border: "1px solid rgba(22,104,217,0.10)", borderRadius: 6, animation: "rotate-3d 22s linear infinite, float 12s ease-in-out infinite" }} />
        <div className="absolute rounded-full" style={{ width: 28, height: 28, bottom: "20%", left: "8%", border: "1px solid rgba(139,92,246,0.08)", animation: "rotate-3d-slow 28s linear infinite, float-diagonal 16s ease-in-out infinite 4s" }} />
        <div className="absolute" style={{ width: 18, height: 18, top: "55%", right: "30%", border: "1px solid rgba(34,184,240,0.06)", borderRadius: 3, animation: "rotate-3d 16s linear infinite reverse, float 10s ease-in-out infinite 2s" }} />
        {/* Glowing ring */}
        <div
          className="absolute top-1/3 left-1/4 w-20 h-20 rounded-full border border-cyan/10"
          style={{ animation: "pulse-glow 5s ease-in-out infinite" }}
        />
        {/* Floating particles */}
        <div className="absolute w-1.5 h-1.5 rounded-full bg-cyan/20" style={{ top: "25%", left: "18%", animation: "particle-float-1 7s ease-in-out infinite" }} />
        <div className="absolute w-1 h-1 rounded-full bg-blue/15" style={{ top: "65%", right: "20%", animation: "particle-float-2 9s ease-in-out infinite 2s" }} />
        <div className="absolute w-1 h-1 rounded-full bg-[#8B5CF6]/12" style={{ bottom: "30%", left: "40%", animation: "particle-float-3 11s ease-in-out infinite 5s" }} />
        {/* Top shimmer line */}
        <div className="shimmer-line absolute top-0 left-0 w-full" />
      </div>
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal direction="up" distance={40}>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy">
            Ready to build something{" "}
            <span className="gradient-text">extraordinary</span>?
          </h2>
        </ScrollReveal>
        <ScrollReveal direction="up" distance={30} delay={0.1}>
          <p className="mt-4 text-muted text-lg">
            Tell us about your project and we&apos;ll get back to you within 24 hours.
          </p>
        </ScrollReveal>
        <ScrollReveal direction="up" distance={20} delay={0.2}>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="gradient-bg inline-flex items-center gap-2 rounded-lg px-6 py-3 text-base font-semibold text-white shadow-lg shadow-blue/25 transition-all hover:opacity-90 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue"
            >
              Book a call <ArrowIcon />
            </Link>
            <a
              href="https://wa.me/13074436778"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-base font-semibold text-white shadow-lg transition-all hover:opacity-90 hover:shadow-xl"
              style={{ backgroundColor: "#25D366" }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                <path d="M12 2C6.48 2 2 6.48 2 12c0 1.77.46 3.44 1.27 4.89L2 22l5.23-1.24A9.96 9.96 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2z" />
              </svg>
              WhatsApp us
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   Home Page — sections toggle on nav click
   ═══════════════════════════════════════════════ */
const VALID_SECTIONS = ["services", "industries", "ai-agents", "case-studies", "pricing", "insights", "company", "faq"];

export default function HomePage() {
  const [active, setActive] = useState<string | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const check = () => {
      const hash = window.location.hash.slice(1);
      if (VALID_SECTIONS.includes(hash)) {
        setActive(hash);
        setTimeout(() => {
          contentRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 50);
      }
    };
    check();
    window.addEventListener("hashchange", check);
    return () => window.removeEventListener("hashchange", check);
  }, []);

  return (
    <div className="relative overflow-hidden">
      <Hero />
      <AdBanner />
      <div className="section-divider" />
      <Stats />
      <div className="section-divider" />
      <WhatWeDo />

      {/* Toggled content area */}
      <div ref={contentRef} className="scroll-mt-20">
        {active === "services" && <Services />}
        {active === "industries" && <Industries />}
        {active === "ai-agents" && <AIAgents />}
        {active === "case-studies" && <CaseStudies />}
        {active === "pricing" && <Pricing />}
        {active === "insights" && <Insights />}
        {active === "company" && <Company />}
        {active === "faq" && <FAQ />}
      </div>

      <div className="section-divider" />
      <Testimonials />
      <div className="section-divider" />
      <TechStack />
      <div className="section-divider" />
      {active !== "faq" && <FAQ />}
      <div className="section-divider" />
      <FinalCTA />
    </div>
  );
}
