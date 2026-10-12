"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

const offsets = {
  up: { x: 0, y: 24 },
  left: { x: -48, y: 0 },
  right: { x: 48, y: 0 },
};

export function Reveal({
  children,
  from = "up",
  delay = 0,
  className,
}: {
  children: ReactNode;
  // Lado de onde o elemento entra: "left" desliza para a direita, "right" para a esquerda.
  from?: keyof typeof offsets;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, ...offsets[from] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
