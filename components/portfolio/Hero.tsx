"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import RotatingWords from "./RotatingWords";

const focusAreas = [
  "Career Mapping & Trajectory Planning",
  "Higher Education & Admissions Advisory",
  "Resume & Professional Storytelling",
];

const reveal = {
  initial: { opacity: 0, y: 90 },
  animate: { opacity: 1, y: 0 },
};

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 190]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -120]);

  return (
    <section ref={ref} id="top" className="grain editorial-grid relative min-h-[100svh] overflow-hidden bg-ink text-cream lg:min-h-[108svh]">
      <div data-orange-glow className="orange-glow pointer-events-none absolute right-[4vw] top-[10vh] size-[58vw] max-h-[860px] max-w-[860px] rounded-full opacity-70" />
      <motion.div style={{ y: imageY, scale: imageScale }} className="hero-image-mask pointer-events-none absolute right-[-15%] top-[16%] z-[1] h-[72%] w-[100%] md:right-[-4%] md:top-[8%] md:h-[90%] md:w-[62%]">
        <Image className="size-full object-cover object-[57%_center] saturate-[.72] contrast-[1.08]" src="/images/hero.jpg" alt="Replaceable portfolio hero visual" fill priority quality={90} sizes="(max-width: 768px) 100vw, 62vw" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(12,13,16,.46),transparent_38%,rgba(12,13,16,.14)),linear-gradient(0deg,#0c0d10_0%,transparent_30%,rgba(12,13,16,.2)_100%)]" />
      </motion.div>

      <div className="page-shell relative z-10 flex min-h-[100svh] flex-col justify-between pb-8 pt-28 lg:min-h-[108svh] lg:pb-12 lg:pt-32">
        <motion.div className="grid items-start gap-5 border-b border-cream/12 pb-5 text-[9px] font-semibold uppercase tracking-[.2em] text-muted md:grid-cols-[1fr_auto_1fr]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.9, duration: .7 }}>
          <div><span className="mr-3 inline-block size-1.5 rounded-full bg-orange" />About Me: Navigating Paths, Unlocking Potential</div>
          <div className="hidden text-center md:block">Udomo Ali</div>
          <div className="hidden text-right md:block">Available for opportunities globally</div>
        </motion.div>

        <motion.div style={{ y: titleY }} className="relative z-20 my-auto py-14 md:py-20">
          <div className="mb-5 grid max-w-xs grid-cols-[auto_1fr] items-end gap-4 text-[10px] uppercase tracking-[.17em] text-muted md:ml-[1vw]">
            <span className="text-orange">01</span>
            <span className="border-b border-cream/18 pb-2">Professional Career Counsellor</span>
          </div>
          <h1 className="hero-title max-w-[1500px]">
            <motion.span className="block" {...reveal} transition={{ delay: 2.02, duration: .95, ease: [.22, 1, .36, 1] }}>Navigating</motion.span>
            <motion.span className="block pl-[14vw]" {...reveal} transition={{ delay: 2.12, duration: .95, ease: [.22, 1, .36, 1] }}>Paths.</motion.span>
            <motion.span className="block text-[.45em] leading-[.92] text-orange sm:text-[.55em] md:pl-[5vw]" {...reveal} transition={{ delay: 2.22, duration: .95, ease: [.22, 1, .36, 1] }}><span className="inline-block">Unlocking</span><span className="ml-[.4em] inline-block">potential.</span></motion.span>
          </h1>
        </motion.div>

        <motion.div className="relative z-20 grid gap-7 border-t border-cream/12 pt-6 md:grid-cols-[1.05fr_.8fr_auto] md:items-end" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.4, duration: .8 }}>
          <p className="max-w-xl text-sm leading-7 text-cream/70 md:text-base">My mission is to help individuals embrace their unique stories and navigate their transitions with total confidence.</p>
          <div className="min-w-0 text-[9px] font-semibold uppercase tracking-[.16em] text-muted"><span className="mb-2 block text-cream/35">Services Offered</span><RotatingWords /></div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <a className="group inline-flex items-center gap-3 rounded-full bg-orange px-5 py-3 text-[10px] font-semibold uppercase tracking-[.1em] text-white transition-transform hover:-translate-y-1" href="#journey">Experience & Background <ArrowDown className="size-4 transition-transform group-hover:translate-y-1" /></a>
            <a className="inline-flex items-center gap-3 rounded-full border border-cream/25 px-5 py-3 text-[10px] font-semibold uppercase tracking-[.1em]" href="#contact">Let&apos;s connect <ArrowUpRight className="size-4" /></a>
          </div>
        </motion.div>
      </div>

      <div className="absolute right-5 top-1/2 z-20 hidden -translate-y-1/2 xl:block"><span className="vertical-label text-[8px] uppercase tracking-[.28em] text-cream/35">London · Africa · Egypt · United Kingdom · Canada</span></div>
      <div className="page-shell relative z-20 grid grid-cols-1 border-t border-cream/12 text-[8px] uppercase tracking-[.16em] text-cream/42 sm:grid-cols-3">{focusAreas.map((label, index) => <span className="min-w-0 border-b border-cream/10 px-2 py-4 leading-4 sm:border-b-0 sm:border-r sm:px-4 sm:text-center sm:first:text-left sm:last:border-r-0 sm:last:text-right" key={label}>0{index + 1} · {label}</span>)}</div>
    </section>
  );
}
