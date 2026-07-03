"use client";

import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";

export default function AnimatedText({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const triggerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(triggerRef, { once: true, amount: .01, margin: "0px 0px -4% 0px" });

  return (
    <div ref={triggerRef} className="overflow-hidden">
      <motion.div
        className={className}
        initial={false}
        animate={isInView ? { opacity: 1, y: "0%", rotate: 0 } : { opacity: 0, y: "108%", rotate: .8 }}
        transition={{ duration: .95, delay, ease: [.16, 1, .3, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
}
