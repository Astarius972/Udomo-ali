"use client";

import { motion } from "framer-motion";
import { principles } from "./data";

export default function Principles() {
  return (
    <section className="page-shell relative overflow-hidden bg-ink py-28 text-cream md:py-44">
      <div className="mb-24 grid gap-8 md:grid-cols-12">
        <p className="text-[10px] font-semibold uppercase tracking-[.22em] text-orange md:col-span-3">05 · About Me</p>
        <h2 className="display-text text-balance text-[clamp(3.8rem,7.2vw,8.2rem)] leading-[.86] md:col-span-9">My mission is to help individuals embrace their unique stories and navigate their transitions with total confidence.</h2>
      </div>
      <div className="border-b border-cream/12">
        {principles.map((principle, index) => (
          <motion.blockquote key={principle} className="group grid min-h-[260px] gap-8 border-t border-cream/12 py-9 transition-colors hover:bg-cream hover:px-7 hover:text-ink md:grid-cols-12 md:items-center" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .7, delay: index * .08 }}>
            <span className="display-text text-5xl text-orange md:col-span-2">{String(index + 1).padStart(2, "0")}.</span>
            <p className="display-text text-balance text-4xl leading-[.98] md:col-span-8 md:text-6xl">{principle}</p>
            <span className="justify-self-end text-[9px] uppercase tracking-[.2em] text-muted transition-colors group-hover:text-ink/45 md:col-span-2">Udomo Ali</span>
          </motion.blockquote>
        ))}
      </div>
    </section>
  );
}
