"use client";

import { motion } from "framer-motion";

export default function BrandStatement() {
  return (
    <section className="relative overflow-hidden bg-orange px-6 py-20 text-cream md:py-32">
      <div data-orange-glow className="pointer-events-none absolute -right-24 -top-36 size-[520px] rounded-full bg-orange-soft/30 blur-[90px]" />
      <motion.p className="display-text relative z-10 mx-auto max-w-[1380px] text-balance text-center text-[clamp(3.2rem,7.2vw,8.5rem)] leading-[.9]" initial={{ opacity: 0, y: 55 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-10%" }} transition={{ duration: .9, ease: [.22, 1, .36, 1] }}>
        I deeply understand the <em>real-world twists, turns, anxieties, and triumphs</em> it takes to find your true professional footing.
      </motion.p>
    </section>
  );
}
