"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useRef, useState } from "react";
import PlaceholderImage from "./PlaceholderImage";
import { journeyItems } from "./data";

export default function Timeline() {
  const stageRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: stageRef, offset: ["start start", "end end"] });

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    const next = Math.min(journeyItems.length - 1, Math.floor(value * journeyItems.length));
    setActive(next);
  });

  const item = journeyItems[active];

  return (
    <section id="journey" className="relative bg-ink text-cream">
      <div className="page-shell editorial-grid relative overflow-hidden border-b border-cream/10 pb-20 pt-28 md:pb-32 md:pt-44">
        <div data-orange-glow className="orange-glow pointer-events-none absolute -right-48 top-0 size-[580px] rounded-full opacity-35" />
        <div className="relative z-10 grid gap-8 md:grid-cols-12">
          <p className="text-[10px] font-semibold uppercase tracking-[.22em] text-orange md:col-span-3">02 · Experience, Achievements & Background</p>
          <h2 className="display-text text-balance text-[clamp(4rem,8.8vw,10rem)] leading-[.82] md:col-span-9">Today, as a Career Counsellor, I tie all of these diverse chapters together.</h2>
        </div>
      </div>

      <div ref={stageRef} className="relative hidden h-[600vh] lg:block">
        <div className="page-shell sticky top-0 h-screen overflow-hidden bg-ink pb-10 pt-28">
          <div className="grid h-full grid-cols-12 gap-8">
            <div className="col-span-3 flex min-w-0 flex-col justify-between border-r border-cream/10 pr-8">
              <div>
                <p className="mb-8 text-[9px] uppercase tracking-[.22em] text-muted">Experience & Background</p>
                <div className="space-y-2">
                  {journeyItems.map((journey, index) => (
                    <motion.p key={journey.number} animate={{ color: index === active ? "#f7f5f2" : "rgba(247,245,242,.19)", x: index === active ? 8 : 0 }} className="display-text text-[clamp(1.25rem,1.75vw,2.25rem)] leading-[.88]" transition={{ duration: .45 }}>
                      {journey.title}
                    </motion.p>
                  ))}
                </div>
              </div>
              <div className="flex items-end justify-between border-t border-cream/10 pt-5">
                <span className="display-text text-5xl text-orange">{item.number}</span>
                <span className="text-[9px] uppercase tracking-[.2em] text-muted">06 chapters</span>
              </div>
            </div>

            <div className="col-span-6 min-w-0">
              <AnimatePresence mode="wait">
                <motion.div key={item.number} className="h-full" initial={{ clipPath: "inset(0 0 100% 0)", opacity: .6 }} animate={{ clipPath: "inset(0 0 0% 0)", opacity: 1 }} exit={{ clipPath: "inset(100% 0 0 0)", opacity: .3 }} transition={{ duration: .7, ease: [.76, 0, .24, 1] }}>
                  <PlaceholderImage path={item.imagePath} label={item.title} number={item.number} tone={item.tone} className="h-full min-h-0" />
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="col-span-3 flex min-w-0 flex-col justify-between pl-2">
              <AnimatePresence mode="wait">
                <motion.div key={item.number} initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: .55, ease: [.22, 1, .36, 1] }}>
                  <p className="mb-6 text-[9px] font-semibold uppercase tracking-[.22em] text-orange">{item.accent}</p>
                  <h3 className="display-text text-balance text-5xl leading-[.92]">{item.title}</h3>
                  <p className="mt-7 text-sm leading-7 text-muted">{item.description}</p>
                </motion.div>
              </AnimatePresence>
              <div className="grid grid-cols-6 gap-2">
                {journeyItems.map((journey, index) => <span key={journey.number} className="h-0.5 overflow-hidden bg-cream/12"><motion.i className="journey-progress block h-full bg-orange" animate={{ scaleX: index <= active ? 1 : 0 }} transition={{ duration: .4 }} /></span>)}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="page-shell space-y-20 py-24 lg:hidden">
        {journeyItems.map((journey) => (
          <article key={journey.number} className="border-t border-cream/12 pt-6">
            <div className="mb-7 flex items-start justify-between gap-5"><span className="display-text text-5xl text-orange">{journey.number}</span><p className="max-w-[220px] text-right text-[9px] uppercase tracking-[.18em] text-muted">{journey.accent}</p></div>
            <PlaceholderImage path={journey.imagePath} label={journey.title} number={journey.number} tone={journey.tone} className="aspect-[4/3] min-h-[280px]" />
            <h3 className="display-text mt-7 text-balance text-5xl leading-[.9]">{journey.title}</h3>
            <p className="mt-5 text-sm leading-7 text-muted">{journey.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
