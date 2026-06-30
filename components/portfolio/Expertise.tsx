"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { expertise } from "./data";

export default function Expertise() {
  return (
    <section id="expertise" className="page-shell bg-forest py-28 text-cream md:py-44">
      <SectionHeading index="04" label="Services, Skills & Areas of Interest" title="Key Skills & Expertise" dark />
      <div data-gsap-reveal className="mt-20 grid sm:grid-cols-2 lg:grid-cols-3">
        {expertise.map((skill, index) => (
          <motion.div key={skill} className="group flex min-h-24 items-center gap-5 border-b border-r border-cream/12 px-5 py-6 transition-colors hover:bg-orange md:min-h-32 md:px-8" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: (index % 6) * .05 }}>
            <span className="grid size-8 shrink-0 place-items-center rounded-full border border-orange/60 text-orange transition-colors group-hover:border-cream/50 group-hover:text-cream"><Check className="size-3.5" strokeWidth={1.7} /></span>
            <span className="display-text text-xl leading-tight md:text-2xl">{skill}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
