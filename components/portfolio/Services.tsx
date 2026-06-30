"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { services } from "./data";

export default function Services() {
  return (
    <section id="services" className="page-shell editorial-grid relative overflow-hidden bg-forest py-28 text-cream md:py-44">
      <div data-orange-glow className="orange-glow pointer-events-none absolute -left-48 top-24 size-[560px] rounded-full opacity-35" />
      <div className="relative z-10 mb-24 grid gap-8 md:grid-cols-12 md:items-end">
        <p className="text-[10px] font-semibold uppercase tracking-[.22em] text-orange md:col-span-3">03 · Services, Skills & Areas of Interest</p>
        <h2 className="display-text text-[clamp(4.5rem,10vw,11rem)] leading-[.8] md:col-span-9">Services<br /><span className="outline-type">Offered</span></h2>
      </div>

      <div className="relative z-10 border-b border-cream/14">
        {services.map((service, index) => (
          <motion.article key={service.number} className="group relative overflow-hidden border-t border-cream/14" initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-12%" }} transition={{ duration: .75, delay: index * .08 }}>
            <div className="absolute inset-0 translate-y-full bg-orange transition-transform duration-500 ease-[cubic-bezier(.76,0,.24,1)] group-hover:translate-y-0" />
            <div className="relative z-10 grid min-h-[250px] gap-7 py-9 md:grid-cols-12 md:items-center md:py-12">
              <span className="display-text text-5xl text-orange transition-colors group-hover:text-white md:col-span-1">{service.number}</span>
              <h3 className="display-text max-w-3xl text-balance text-4xl leading-[.92] md:col-span-5 md:text-6xl">{service.title}</h3>
              <div className="md:col-span-4">
                <p className="max-w-lg text-sm leading-7 text-muted transition-colors group-hover:text-white/75">{service.description}</p>
                <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-[8px] uppercase tracking-[.16em] text-cream/38 transition-colors group-hover:text-white/65">{service.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </div>
              <a href="#contact" aria-label={`Let's connect about ${service.title}`} className="grid size-14 place-items-center rounded-full border border-cream/24 transition-transform group-hover:-rotate-45 group-hover:border-white md:col-span-2 md:justify-self-end"><ArrowUpRight className="size-5" /></a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
