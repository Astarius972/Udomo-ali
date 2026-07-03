"use client";

import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";

export default function SectionHeading({ index, label, title, dark = false }: { index: string; label: string; title: string; dark?: boolean }) {
  return (
    <div className="relative grid gap-8 pt-7 md:grid-cols-[1fr_3fr] md:gap-12">
      <motion.div className="absolute inset-x-0 top-0 h-px origin-left bg-current opacity-15" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1.1, ease: [.22, 1, .36, 1] }} />
      <AnimatedText className={`flex items-start gap-4 text-[11px] font-semibold uppercase tracking-[.22em] ${dark ? "text-cream/55" : "text-ink/50"}`}>
        <span className="text-gold">{index}</span><span>{label}</span>
      </AnimatedText>
      <AnimatedText>
        <h2 className={`display-text max-w-5xl text-balance text-[clamp(2.3rem,5.2vw,5.8rem)] leading-[.96] ${dark ? "text-cream" : "text-ink"}`}>{title}</h2>
      </AnimatedText>
    </div>
  );
}
