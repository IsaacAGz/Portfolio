"use client";

import { motion } from "motion/react";

const ease = [0.16, 1, 0.3, 1] as const;

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

export function HeroIntro({
  role,
  name,
  pitch,
  children,
}: {
  role: string;
  name: string;
  pitch: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      className="mx-auto flex w-full max-w-6xl flex-col gap-12"
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.08 } },
      }}
    >
      <div>
        <motion.p variants={item} className="text-base text-muted md:text-lg">
          {role}
        </motion.p>
        <motion.h1
          id="hero-title"
          variants={item}
          className="mt-3 max-w-5xl text-5xl font-medium tracking-tight text-foreground md:text-6xl lg:text-7xl"
        >
          {name}
        </motion.h1>
      </div>
      <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-end lg:justify-between">
        <motion.p variants={item} className="max-w-[42ch] text-lg leading-relaxed text-muted">
          {pitch}
        </motion.p>
        <motion.div variants={item}>{children}</motion.div>
      </div>
    </motion.div>
  );
}
