"use client";

import { motion } from "motion/react";

const ease = [0.16, 1, 0.3, 1] as const;

export function Reveal({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: "some" }}
      transition={{ duration: 0.6, ease }}
    >
      {children}
    </motion.div>
  );
}
