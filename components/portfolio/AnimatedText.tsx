"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export default function AnimatedText({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 42, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: .9, delay, ease: [.22, 1, .36, 1] }}
    >
      {children}
    </motion.div>
  );
}
