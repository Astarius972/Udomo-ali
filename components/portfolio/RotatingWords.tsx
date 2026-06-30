"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const words = [
  "Career Transition Mentorship",
  "Higher Education & Admissions Advisory",
  "Resume & Professional Storytelling",
  "Cross-cultural Communication",
];

export default function RotatingWords() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = window.setInterval(() => setIndex((value) => (value + 1) % words.length), 2600);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <span className="relative inline-flex min-h-6 min-w-0 flex-1 overflow-hidden text-orange-soft">
      <AnimatePresence mode="wait">
        <motion.span key={words[index]} initial={{ y: 18, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -18, opacity: 0 }} transition={{ duration: .45, ease: [.22, 1, .36, 1] }}>
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
