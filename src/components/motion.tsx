"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
};

export function Reveal({
  children,
  delay = 0,
  className,
  y = 16,
}: RevealProps) {
  const reduce = useReducedMotion();

  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0.45, transform: `translateY(${y}px)` }}
      whileInView={{ opacity: 1, transform: "translateY(0)" }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.42, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

type RevealStaggerProps = {
  children: ReactNode;
  className?: string;
  staggerIndex?: number;
};

export function RevealStagger({
  children,
  className,
  staggerIndex = 0,
}: RevealStaggerProps) {
  const reduce = useReducedMotion();

  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0.35, transform: "translateY(18px)" }}
      whileInView={{ opacity: 1, transform: "translateY(0)" }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.46, delay: staggerIndex * 0.075, ease }}
    >
      {children}
    </motion.div>
  );
}
