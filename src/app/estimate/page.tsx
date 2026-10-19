"use client";

import { useState } from "react";
import PageHero from "@/components/PageHero";

const PROJECT_TYPES = [
  { label: "SaaS Platform", hours: 120 },
  { label: "Marketplace", hours: 140 },
  { label: "Mobile App", hours: 100 },
  { label: "AI Assistant", hours: 110 },
  { label: "Internal Tools", hours: 80 },
];

const FEATURES = [
  { label: "Authentication & User Management", hours: 12 },
  { label: "Payment Processing", hours: 16 },
  { label: "Admin Panel", hours: 14 },
  { label: "AI Features", hours: 20 },
  { label: "Real-time Functionality", hours: 16 },
  { label: "Push Notifications", hours: 8 },
  { label: "Third-party Integrations", hours: 12 },
  { label: "Analytics Dashboard", hours: 14 },
];

const RATE = 100; // $/hr for calculation display

export default function EstimatePage() {
  const [projectType, setProjectType] = useState(0);
  const [selectedFeatures, setSelectedFeatures] = useState<number[]>([]);
  const [email, setEmail] = useState("");

  const baseHours = PROJECT_TYPES[projectType].hours;
  const featureHours = selectedFeatures.reduce((sum, i) => sum + FEATURES[i].hours, 0);
  const totalHours = baseHours + featureHours;
  const lowPrice = totalHours * RATE * 0.85;
  const highPrice = totalHours * RATE * 1.15;

  function toggleFeature(i: number) {
    setSelectedFeatures((prev) =>
      prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]
    );
  }

  return (
    <>
      <PageHero
        tag="Estimate"
        title="Get a project estimate"
        description="Answer a few questions and get an instant scope and pricing estimate for your project."
      />

      <section className="relative bg-cadbury-purple py-16 lg:py-24 section-grid-bg">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Step 1 */}
          <div>
            <h2 className="text-lg font-bold text-navy">1. What are you building?</h2>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {PROJECT_TYPES.map((pt, i) => (
                <button
                  key={pt.label}
                  onClick={() => setProjectType(i)}
                  className={`rounded-xl border p-4 text-left text-sm font-semibold transition-colors ${
                    projectType === i
                      ? "border-blue bg-blue/5 text-navy"
                      : "border-border text-muted hover:border-blue/40"
                  }`}
                >
                  {pt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Step 2 */}
          <div>
            <h2 className="text-lg font-bold text-navy">2. Which features do you need?</h2>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {FEATURES.map((f, i) => (
                <label
                  key={f.label}
                  className={`flex items-center gap-3 rounded-xl border p-4 text-sm cursor-pointer transition-colors ${
                    selectedFeatures.includes(i)
                      ? "border-blue bg-blue/5 text-navy font-semibold"
                      : "border-border text-muted hover:border-blue/40"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={selectedFeatures.includes(i)}
                    onChange={() => toggleFeature(i)}
                    className="accent-blue h-4 w-4"
                  />
                  {f.label}
                </label>
              ))}
            </div>
          </div>

          {/* Results */}
          <div className="rounded-xl border border-border bg-light-bg p-8">
            <h2 className="text-lg font-bold text-navy">Your estimate</h2>
            <div className="mt-6 grid grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-muted">Estimated hours</p>
                <p className="text-3xl font-extrabold gradient-text">{totalHours} hrs</p>
              </div>
              <div>
                <p className="text-sm text-muted">Price range</p>
                <p className="text-3xl font-extrabold gradient-text">
                  ${lowPrice.toLocaleString()} - ${highPrice.toLocaleString()}
                </p>
              </div>
            </div>

            <div className="mt-8">
              <label htmlFor="email" className="block text-sm font-semibold text-navy">
                Get a detailed proposal
              </label>
              <div className="mt-2 flex gap-3">
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="flex-1 rounded-lg border border-border px-4 py-2.5 text-sm text-navy placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-blue/30"
                />
                <button className="gradient-bg rounded-lg px-6 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90">
                  Send
                </button>
              </div>
            </div>

            <p className="mt-4 text-xs text-muted">
              This is a rough estimate based on typical project complexity. Final pricing is determined after a discovery call where we scope your exact requirements.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
