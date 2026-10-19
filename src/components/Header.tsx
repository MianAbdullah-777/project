"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "./Logo";

/* ── dropdown data with real page routes ── */
const SERVICES_ITEMS = [
  { label: "AI Development", href: "/services/ai-development" },
  { label: "Website Development", href: "/services/web-development" },
  { label: "Mobile Apps", href: "/services/custom-mobile-app-development" },
  { label: "UI/UX Design", href: "/services/ui-ux-design-and-development" },
  { label: "Dedicated Teams", href: "/services/staff-augmentation" },
  { label: "Software Testing", href: "/services/software-testing-and-qa" },
  { label: "Branding & Marketing", href: "/services/branding-marketing" },
  { label: "Social Media Marketing", href: "/services/social-media-marketing" },
  { label: "Metaverse & Immersive", href: "/services/metaverse-development" },
];

const INDUSTRIES_ITEMS = [
  { label: "Healthcare", href: "/industries?tab=healthcare" },
  { label: "Finance & Business", href: "/industries?tab=finance" },
  { label: "Retail & E-commerce", href: "/industries?tab=retail" },
  { label: "Education", href: "/industries?tab=education" },
  { label: "Logistics", href: "/industries?tab=logistics" },
  { label: "Real Estate", href: "/industries?tab=real-estate" },
  { label: "Travel & Tourism", href: "/industries?tab=travel" },
  { label: "Food & Delivery", href: "/industries?tab=food" },
];

const INSIGHTS_ITEMS = [
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
];

const COMPANY_ITEMS = [
  { label: "About", href: "/about" },
  { label: "Why Us", href: "/why-us" },
  { label: "Our Process", href: "/process" },
  { label: "Careers", href: "/careers" },
  { label: "Life at CodeNax", href: "/life-at-codenax" },
];


/* ── Dropdown with links (hover to open) ── */
function NavDropdown({
  label,
  items,
}: {
  label: string;
  items: { label: string; href: string }[];
}) {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function handleEnter() {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  }

  function handleLeave() {
    timeoutRef.current = setTimeout(() => setOpen(false), 150);
  }

  return (
    <div className="relative" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      <button
        type="button"
        className="flex items-center gap-1 text-sm font-medium text-muted hover:text-navy transition-colors"
      >
        {label}
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        >
          <path d="M3 4.5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50"
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <div className="w-56 rounded-xl border border-border/60 bg-cadbury-purple/95 backdrop-blur-lg shadow-xl shadow-navy/8 py-2">
              {items.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-2.5 text-sm text-muted hover:text-navy hover:bg-light-bg transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}


/* ── Mobile accordion with links ── */
function MobileAccordion({
  label,
  items,
  onClose,
}: {
  label: string;
  items: { label: string; href: string }[];
  onClose: () => void;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm font-medium text-muted hover:text-navy hover:bg-light-bg transition-colors"
      >
        {label}
        <svg
          width="14"
          height="14"
          viewBox="0 0 12 12"
          fill="none"
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        >
          <path d="M3 4.5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            className="ml-4 mt-1 space-y-0.5 overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {items.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={onClose}
                className="block rounded-lg px-3 py-2 text-sm text-muted hover:text-navy hover:bg-light-bg transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}


export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function closeMobile() {
    setMobileOpen(false);
  }

  return (
    <header
      className={`sticky top-0 z-50 border-b border-border/60 transition-all duration-300 ${
        scrolled
          ? "bg-cadbury-purple/90 backdrop-blur-lg shadow-md shadow-navy/5"
          : "bg-cadbury-purple/60 backdrop-blur-sm shadow-none"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" aria-label="CodeNax home">
            <Logo />
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            <NavDropdown label="Services" items={SERVICES_ITEMS} />
            <NavDropdown label="Industries" items={INDUSTRIES_ITEMS} />
            <Link href="/case-studies" className="text-sm font-medium text-muted hover:text-navy transition-colors">
              Case Studies
            </Link>
            <Link href="/pricing" className="text-sm font-medium text-muted hover:text-navy transition-colors">
              Pricing
            </Link>
            <NavDropdown label="Insights" items={INSIGHTS_ITEMS} />
            <NavDropdown label="Company" items={COMPANY_ITEMS} />
          </nav>

          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="gradient-bg inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue"
            >
              Book a call
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

          <button
            type="button"
            className="lg:hidden p-2 text-navy"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M6 6l12 12M6 18L18 6" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="lg:hidden border-t border-border bg-cadbury-purple max-h-[80vh] overflow-y-auto overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <nav className="flex flex-col px-4 py-4 gap-1">
              <MobileAccordion label="Services" items={SERVICES_ITEMS} onClose={closeMobile} />
              <MobileAccordion label="Industries" items={INDUSTRIES_ITEMS} onClose={closeMobile} />
              <Link href="/case-studies" onClick={closeMobile} className="rounded-lg px-3 py-2.5 text-left text-sm font-medium text-muted hover:text-navy hover:bg-light-bg transition-colors">
                Case Studies
              </Link>
              <Link href="/pricing" onClick={closeMobile} className="rounded-lg px-3 py-2.5 text-left text-sm font-medium text-muted hover:text-navy hover:bg-light-bg transition-colors">
                Pricing
              </Link>
              <MobileAccordion label="Insights" items={INSIGHTS_ITEMS} onClose={closeMobile} />
              <MobileAccordion label="Company" items={COMPANY_ITEMS} onClose={closeMobile} />
              <Link
                href="/contact"
                className="gradient-bg mt-2 rounded-lg px-5 py-2.5 text-center text-sm font-semibold text-white"
                onClick={closeMobile}
              >
                Book a call
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
