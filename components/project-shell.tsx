"use client";

import { motion } from "motion/react";

export function ProjectShell({ children }: { children: React.ReactNode }) {
  return (
    <motion.article
      className="rounded-[2rem] border border-white/10 bg-white/5 p-1.5 motion-safe:hover:border-accent/40 motion-safe:hover:shadow-[0_18px_48px_rgb(58_175_164/0.14)]"
      whileHover={{ y: -6 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.article>
  );
}
