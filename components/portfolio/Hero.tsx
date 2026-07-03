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
      <motion.div style={{ y: imageY, scale: imageScale }} className="hero-image-mask pointer-events-none absolute right-[-18%] top-[18%] z-[1] h-[70%] w-[110%] md:right-[-2%] md:top-[10%] md:h-[86%] md:w-[54%]">
        <Image className="size-full object-cover object-[57%_center] saturate-[.72] contrast-[1.08]" src="/images/hero-udomo.jpg" alt="Udomo Ali" fill priority quality={80} placeholder="blur" blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMicgaGVpZ2h0PScxNic+PHJlY3Qgd2lkdGg9JzEyJyBoZWlnaHQ9JzE2JyBmaWxsPScjOGY4NTdhJy8+PC9zdmc+" sizes="(max-width: 768px) 100vw, 62vw" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(244,242,236,.82),transparent_44%,rgba(244,242,236,.08)),linear-gradient(0deg,#f4f2ec_0%,transparent_30%,rgba(244,242,236,.15)_100%)]" />
      </motion.div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-[62%] bg-gradient-to-t from-ink via-ink/80 to-transparent md:hidden" />

      <div className="page-shell relative z-10 flex min-h-[100svh] flex-col justify-between pb-8 pt-28 lg:min-h-[108svh] lg:pb-12 lg:pt-32">
        <motion.div className="grid items-start gap-5 border-b border-cream/12 pb-5 text-[9px] font-semibold uppercase tracking-[.2em] text-muted md:grid-cols-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.9, duration: .7 }}>
          <div><span className="mr-3 inline-block size-1.5 rounded-full bg-orange" />About Me: Navigating Paths, Unlocking Potential</div>
          <div className="hidden text-right md:block">Udomo Ali</div>
        </motion.div>

        <motion.div style={{ y: titleY }} className="relative z-20 my-auto py-12 md:py-16">
          <div className="mb-5 grid max-w-xs grid-cols-[auto_1fr] items-end gap-4 text-[10px] uppercase tracking-[.17em] text-muted md:ml-[1vw]">
            <span className="text-orange">01</span>
            <span className="border-b border-cream/18 pb-2">Professional Career Counsellor</span>
          </div>
          <h1 className="hero-title max-w-[94vw] md:max-w-[61vw]">
            <motion.span className="block" {...reveal} transition={{ delay: 2.02, duration: .95, ease: [.22, 1, .36, 1] }}>Navigating</motion.span>
            <motion.span className="block pl-[12vw] md:pl-[8vw]" {...reveal} transition={{ delay: 2.12, duration: .95, ease: [.22, 1, .36, 1] }}>Paths.</motion.span>
            <motion.span className="mt-[.22em] block pl-[3vw] text-[.34em] leading-none tracking-[-.045em] text-orange md:pl-[5vw]" {...reveal} transition={{ delay: 2.22, duration: .95, ease: [.22, 1, .36, 1] }}>Unlocking potential.</motion.span>
          </h1>
        </motion.div>

        <motion.div className="relative z-20 grid gap-7 border-t border-cream/12 pt-6 md:grid-cols-[1.05fr_.8fr_auto] md:items-end" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.4, duration: .8 }}>
          <p className="max-w-xl text-sm leading-7 text-cream/85 md:text-base md:text-cream/70">My mission is to help you embrace your unique story and navigate your transition with total confidence.</p>
          <div className="min-w-0 text-[9px] font-semibold uppercase tracking-[.16em] text-muted"><span className="mb-2 block text-cream/35">Services Offered</span><RotatingWords /></div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <a className="editorial-button editorial-button--primary group" href="#journey">Experience & Background <ArrowDown className="size-4 transition-transform group-hover:translate-y-1" /></a>
            <a className="editorial-button editorial-button--secondary" href="#contact">Let&apos;s connect <ArrowUpRight className="size-4" /></a>
          </div>
        </motion.div>
      </div>

      <div className="absolute right-5 top-1/2 z-20 hidden -translate-y-1/2 xl:block"><span className="vertical-label text-[8px] uppercase tracking-[.28em] text-cream/35">London · Africa · Egypt · United Kingdom · Canada</span></div>
      <div className="page-shell relative z-20 grid grid-cols-1 border-t border-cream/12 text-[8px] uppercase tracking-[.16em] text-cream/42 sm:grid-cols-3">{focusAreas.map((label, index) => <span className="min-w-0 border-b border-cream/10 px-2 py-4 leading-4 sm:border-b-0 sm:border-r sm:px-4 sm:text-center sm:first:text-left sm:last:border-r-0 sm:last:text-right" key={label}>0{index + 1} · {label}</span>)}</div>
    </section>
  );
}
