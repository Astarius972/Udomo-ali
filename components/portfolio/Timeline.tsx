"use client";

import { AnimatePresence, motion, MotionValue, useMotionValue, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import AnimatedText from "./AnimatedText";
import PlaceholderImage from "./PlaceholderImage";
import { journeyItems } from "./data";

export default function Timeline() {
  const stageRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [mobileActive, setMobileActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: stageRef, offset: ["start start", "end end"] });

  const offsets = journeyItems.map(() => useMotionValue(0));

  const syncSlider = () => {
    const el = sliderRef.current;
    if (!el) return;
    const viewportCenter = window.innerWidth / 2;
    let nearest = 0;
    let nearestDist = Infinity;
    Array.from(el.children).forEach((child, i) => {
      const rect = (child as HTMLElement).getBoundingClientRect();
      const cardCenter = rect.left + rect.width / 2;
      const off = Math.max(-1, Math.min(1, (cardCenter - viewportCenter) / window.innerWidth));
      offsets[i].set(off);
      const dist = Math.abs(cardCenter - viewportCenter);
      if (dist < nearestDist) { nearestDist = dist; nearest = i; }
    });
    setMobileActive(nearest);
  };

  useEffect(() => {
    syncSlider();
    window.addEventListener("resize", syncSlider);
    return () => window.removeEventListener("resize", syncSlider);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const scrollToSlide = (index: number) => {
    const el = sliderRef.current;
    if (!el) return;
    const child = el.children[index] as HTMLElement | undefined;
    if (!child) return;
    el.scrollTo({ left: child.offsetLeft - (el.clientWidth - child.clientWidth) / 2, behavior: "smooth" });
  };

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
          <div className="min-w-0 md:col-span-9"><AnimatedText><h2 className="display-text text-balance text-[clamp(2.4rem,6vw,6.6rem)] leading-[.92]">Today, as a Career Counsellor, I tie all of these diverse chapters together.</h2></AnimatedText></div>
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
                    <motion.p key={journey.number} animate={{ color: index === active ? "#17140f" : "rgba(23,20,15,.24)", x: index === active ? 8 : 0 }} className="display-text text-[clamp(1.25rem,1.75vw,2.25rem)] leading-[.88]" transition={{ duration: .45 }}>
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

      <div className="py-24 lg:hidden">
        <div className="page-shell mb-8 flex items-end justify-between">
          <p className="text-[9px] uppercase tracking-[.22em] text-muted">Experience & Background</p>
          <p className="text-[9px] uppercase tracking-[.22em] text-muted">
            <span className="text-orange">{String(mobileActive + 1).padStart(2, "0")}</span> / {String(journeyItems.length).padStart(2, "0")} · swipe
          </p>
        </div>

        <div
          ref={sliderRef}
          onScroll={syncSlider}
          className="hide-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto px-[9vw] pb-4 [perspective:1200px]"
        >
          {journeyItems.map((journey, index) => (
            <MobileCard key={journey.number} journey={journey} offset={offsets[index]} />
          ))}
        </div>

        <div className="page-shell mt-8 flex justify-center gap-2">
          {journeyItems.map((journey, index) => (
            <button
              key={journey.number}
              type="button"
              aria-label={`Go to ${journey.title}`}
              onClick={() => scrollToSlide(index)}
              className="h-1.5 rounded-full bg-cream/15 transition-all duration-300"
              style={{ width: index === mobileActive ? 28 : 8, backgroundColor: index === mobileActive ? "#e5431c" : undefined }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function MobileCard({ journey, offset }: { journey: (typeof journeyItems)[number]; offset: MotionValue<number> }) {
  const scale = useTransform(offset, [-1, 0, 1], [0.82, 1, 0.82]);
  const opacity = useTransform(offset, [-0.6, 0, 0.6], [0.35, 1, 0.35]);
  const rotateY = useTransform(offset, [-1, 0, 1], [22, 0, -22]);
  const y = useTransform(offset, [-1, 0, 1], [40, 0, 40]);
  const imgX = useTransform(offset, [-1, 0, 1], [40, 0, -40]);

  return (
    <motion.article
      style={{ scale, opacity, rotateY, transformStyle: "preserve-3d" }}
      className="w-[82vw] shrink-0 snap-center border-t border-cream/12 pt-6 will-change-transform"
    >
      <div className="mb-7 flex items-start justify-between gap-5"><span className="display-text text-5xl text-orange">{journey.number}</span><p className="max-w-[200px] text-right text-[9px] uppercase tracking-[.18em] text-muted">{journey.accent}</p></div>
      <div className="overflow-hidden rounded-sm">
        <motion.div style={{ x: imgX, scale: 1.12 }} className="will-change-transform">
          <PlaceholderImage path={journey.imagePath} label={journey.title} number={journey.number} tone={journey.tone} className="aspect-[4/3] min-h-[260px]" />
        </motion.div>
      </div>
      <motion.h3 style={{ y }} className="display-text mt-7 text-balance text-4xl leading-[.9]">{journey.title}</motion.h3>
      <motion.p style={{ y }} className="mt-5 text-sm leading-7 text-muted">{journey.description}</motion.p>
    </motion.article>
  );
}
