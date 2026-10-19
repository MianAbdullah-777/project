"use client";

import { useRef } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
  type Variant,
} from "framer-motion";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  once?: boolean;
  scale?: number;
  threshold?: number;
  as?: React.ElementType;
}

const ease: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

function getInitial(
  direction: ScrollRevealProps["direction"],
  distance: number,
  scale?: number,
): Variant {
  const v: Record<string, number> = { opacity: 0 };
  if (direction === "up") v.y = distance;
  else if (direction === "down") v.y = -distance;
  else if (direction === "left") v.x = distance;
  else if (direction === "right") v.x = -distance;
  if (scale) v.scale = scale;
  return v;
}

function getAnimate(scale?: number): Variant {
  const v: Record<string, number> = { opacity: 1, x: 0, y: 0 };
  if (scale) v.scale = 1;
  return v;
}

export default function ScrollReveal({
  children,
  className,
  delay = 0,
  duration = 0.6,
  direction = "up",
  distance = 40,
  once = true,
  scale,
  threshold = 0.15,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, amount: threshold });
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={getInitial(direction, distance, scale)}
      animate={inView ? getAnimate(scale) : getInitial(direction, distance, scale)}
      transition={{ duration, delay, ease }}
    >
      {children}
    </motion.div>
  );
}
