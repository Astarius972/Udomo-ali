"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";

export default function IntroLoader({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const timer = window.setTimeout(() => {
      document.body.style.overflow = "";
      onComplete();
    }, 1900);
    return () => { window.clearTimeout(timer); document.body.style.overflow = ""; };
  }, [onComplete]);

  return (
    <motion.div className="fixed inset-0 z-[200] grid place-items-center bg-ink px-6 text-cream" exit={{ y: "-100%" }} transition={{ duration: .85, ease: [.76, 0, .24, 1] }}>
      <div className="w-full max-w-xl text-center">
        <motion.p className="text-[11px] uppercase tracking-[.35em] text-gold" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .2 }}>Udomo Ali</motion.p>
        <motion.h1 className="display-text mt-5 text-4xl leading-tight md:text-6xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .35, duration: .7 }}>Navigating Paths.<br /><em className="text-gold">Unlocking Potential.</em></motion.h1>
        <div className="mx-auto mt-9 h-px w-full overflow-hidden bg-cream/15"><motion.div className="loader-line h-full bg-gold" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.25, delay: .25, ease: "easeInOut" }} /></div>
      </div>
    </motion.div>
  );
}
