"use client";

import { motion } from "framer-motion";

const skills = [
  "Career Transition Mentorship",
  "Strategic Problem-Solving (Legal & Business)",
  "Talent Development & HR Frameworks",
  "Active Listening & Deep Empathy",
  "Public Speaking & Advisory Workshop Facilitation",
  "Research",
  "Cross-cultural Communication",
];

export default function TrustStrip() {
  return (
    <section data-gsap-reveal className="overflow-hidden border-y border-cream/14 bg-soft py-5 text-cream" aria-label="Key skills and expertise">
      <motion.div className="flex w-max items-center gap-5" animate={{ x: [0, "-50%"] }} transition={{ duration: 34, repeat: Infinity, ease: "linear" }}>
        {[...skills, ...skills].map((skill, index) => <span className="flex items-center gap-5 whitespace-nowrap text-[10px] font-semibold uppercase tracking-[.18em] text-muted" key={`${skill}-${index}`}><i className="size-1.5 rounded-full bg-orange" />{skill}</span>)}
      </motion.div>
    </section>
  );
}
