"use client";

import Link from "next/link";
import Logo from "./Logo";
import { ScrollReveal } from "@/components/motion";

const COMPANY_LINKS = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Careers", href: "/careers" },
  { label: "Life at CodeNax", href: "/life-at-codenax" },
];

const RESOURCE_LINKS = [
  { label: "Pricing", href: "/pricing" },
  { label: "Estimator", href: "/estimate" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="relative bg-cadbury-purple overflow-hidden">
<div className="h-px bg-gradient-to-r from-transparent via-blue/20 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Logo, tagline, socials */}
          <ScrollReveal delay={0} direction="up" distance={30} className="lg:col-span-2">
          <div>
            <Logo />
            <p className="mt-4 text-sm text-muted max-w-md">
              Crafted with care, powered by AI. Building websites, mobile apps,
              and custom AI agents with 10+ years of experience delivering
              digital products that scale.
            </p>
            <div className="mt-5 flex items-center gap-4">
              <a
                href="https://wa.me/13074436778"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-light-bg text-muted hover:text-navy transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                  <path d="M8 1.333A6.667 6.667 0 001.82 11.14L1.333 14.667l3.613-.487A6.667 6.667 0 108 1.333zm3.667 9.334c-.154.433-.893.827-1.234.88-.34.053-.667.24-2.24-.467-1.907-.86-3.12-2.813-3.213-2.947-.094-.133-.773-1.027-.773-1.96s.487-1.393.66-1.58c.173-.187.38-.233.507-.233h.366c.12 0 .28-.047.44.333.16.387.547 1.333.593 1.433.047.1.08.213.02.34-.067.127-.1.207-.2.32-.1.113-.207.253-.3.34-.1.093-.2.2-.087.393.113.193.507.84 1.087 1.36.747.667 1.38.873 1.573.973.193.1.307.087.42-.047.113-.133.487-.56.613-.753.127-.193.26-.16.44-.1.18.067 1.14.54 1.333.64.193.1.327.147.373.227.047.08.047.46-.107.893z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/codenax"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-light-bg text-muted hover:text-navy transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                  <path d="M13.333 1.333H2.667A1.333 1.333 0 001.333 2.667v10.666a1.333 1.333 0 001.334 1.334h10.666a1.333 1.333 0 001.334-1.334V2.667a1.333 1.333 0 00-1.334-1.334zM5.333 13.333H3.333V6.333h2v7zM4.333 5.5a1.167 1.167 0 110-2.333 1.167 1.167 0 010 2.333zm9 7.833h-2V9.933c0-.813-.016-1.86-1.133-1.86-1.134 0-1.307.886-1.307 1.8v3.46h-2V6.333h1.92v.957h.027c.267-.507.92-1.04 1.893-1.04 2.027 0 2.4 1.333 2.4 3.067v4.016z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/codenaxx"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-light-bg text-muted hover:text-navy transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                  <path d="M14.667 8A6.667 6.667 0 108 14.667h.058v-4.6H6.725V8.2h1.333V6.933c0-1.32.807-2.04 1.987-2.04.567 0 1.053.04 1.193.06v1.38h-.82c-.64 0-.767.307-.767.753V8.2h1.533l-.2 1.867H9.652v4.533A6.668 6.668 0 0014.667 8z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/codenax_llc/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-light-bg text-muted hover:text-navy transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <rect x="1.5" y="1.5" width="13" height="13" rx="3.5" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="11.75" cy="4.25" r="0.75" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>
          </ScrollReveal>

          {/* Company */}
          <ScrollReveal delay={0.1} direction="up" distance={30}>
          <div>
            <h3 className="text-sm font-bold text-navy uppercase tracking-wider">Company</h3>
            <ul className="mt-4 space-y-2.5">
              {COMPANY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-navy transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          </ScrollReveal>

          {/* Resources */}
          <ScrollReveal delay={0.2} direction="up" distance={30}>
          <div>
            <h3 className="text-sm font-bold text-navy uppercase tracking-wider">Resources</h3>
            <ul className="mt-4 space-y-2.5">
              {RESOURCE_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-navy transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          </ScrollReveal>

          {/* Get In Touch */}
          <ScrollReveal delay={0.3} direction="up" distance={30}>
          <div>
            <h3 className="text-sm font-bold text-navy uppercase tracking-wider">Get In Touch</h3>
            <div className="mt-4 space-y-4">
              <a
                href="tel:+13074436778"
                className="flex items-start gap-2.5 text-sm text-muted hover:text-navy transition-all group"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-light-bg text-muted group-hover:text-white group-hover:bg-gradient-to-br group-hover:from-cyan group-hover:to-blue transition-all duration-300 group-hover:scale-110">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M14 11.25v2a1.33 1.33 0 01-1.45 1.33A13.18 13.18 0 011.42 3.45 1.33 1.33 0 012.75 2h2a1.33 1.33 0 011.33 1.15 8.56 8.56 0 00.47 1.87 1.33 1.33 0 01-.3 1.41l-.85.85a10.67 10.67 0 004.87 4.87l.85-.85a1.33 1.33 0 011.41-.3 8.56 8.56 0 001.87.47A1.33 1.33 0 0114 11.25z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="pt-1.5">+1 307 443 6778</span>
              </a>
              <a
                href="mailto:info@codenax.com"
                className="flex items-start gap-2.5 text-sm text-muted hover:text-navy transition-all group"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-light-bg text-muted group-hover:text-white group-hover:bg-gradient-to-br group-hover:from-cyan group-hover:to-blue transition-all duration-300 group-hover:scale-110">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M2 4l6 4 6-4M2 4v8h12V4H2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="pt-1.5">info@codenax.com</span>
              </a>
              <div className="flex items-start gap-2.5 text-sm text-muted group">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-light-bg text-muted">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M13.333 6.667C13.333 10.667 8 14.667 8 14.667S2.667 10.667 2.667 6.667a5.333 5.333 0 0110.666 0z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="8" cy="6.667" r="2" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </span>
                <address className="not-italic pt-1.5">
                  30N Gould ST #7785
                  <br />
                  Sheridan, Wyoming
                </address>
              </div>
            </div>
          </div>
          </ScrollReveal>
        </div>

        {/* Copyright bar with watermark tagline */}
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border/60 py-6 text-center sm:mt-14 sm:flex-row sm:gap-4 sm:py-7 sm:text-left">
          <p className="text-xs text-muted sm:text-sm">
            Copyright &copy;2020{" "}
            <Link href="/" className="text-blue hover:underline">
              CodeNax
            </Link>
            . All Rights Reserved
          </p>
          <span className="text-xs text-muted sm:text-sm">
            Crafted with care, powered by AI.
          </span>
        </div>
      </div>
    </footer>
  );
}
