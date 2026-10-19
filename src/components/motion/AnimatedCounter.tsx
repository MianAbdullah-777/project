"use client";

import { useEffect, useRef } from "react";
import {
  useInView,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  duration?: number;
}

export default function AnimatedCounter({
  target,
  suffix = "",
  prefix = "",
  decimals = 0,
  duration = 2,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const prefersReduced = useReducedMotion();
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, {
    damping: 40 + duration * 10,
    stiffness: 80,
  });

  useEffect(() => {
    if (inView) {
      motionValue.set(target);
    }
  }, [inView, motionValue, target]);

  useEffect(() => {
    const unsubscribe = spring.on("change", (v) => {
      if (ref.current) {
        ref.current.textContent =
          prefix + v.toFixed(decimals) + suffix;
      }
    });
    return unsubscribe;
  }, [spring, prefix, suffix, decimals]);

  if (prefersReduced) {
    return (
      <span ref={ref}>
        {prefix}
        {target.toFixed(decimals)}
        {suffix}
      </span>
    );
  }

  return (
    <span ref={ref}>
      {prefix}0{suffix}
    </span>
  );
}
