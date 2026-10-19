"use client";

import { ScrollReveal } from "@/components/motion";

export default function SectionHeading({
  tag,
  title,
  highlight,
  description,
}: {
  tag?: string;
  title: string;
  highlight?: string;
  description?: string;
}) {
  const parts = highlight ? title.split(highlight) : [title];

  return (
    <div className="text-center max-w-2xl mx-auto">
      {tag && (
        <ScrollReveal delay={0} direction="up" distance={20} duration={0.4}>
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-blue mb-3">
            {tag}
          </span>
        </ScrollReveal>
      )}
      <ScrollReveal delay={0.1} direction="up" distance={20} duration={0.5}>
        <h2 className="text-3xl sm:text-4xl font-bold text-navy">
          {highlight ? (
            <>
              {parts[0]}
              <span className="gradient-text">{highlight}</span>
              {parts[1]}
            </>
          ) : (
            title
          )}
        </h2>
      </ScrollReveal>
      {description && (
        <ScrollReveal delay={0.2} direction="up" distance={20} duration={0.5}>
          <p className="mt-4 text-muted text-lg">{description}</p>
        </ScrollReveal>
      )}
    </div>
  );
}
