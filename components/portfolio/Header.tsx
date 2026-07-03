"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "./data";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (value) => setCompact(value > 40));

  return (
    <header className={`fixed inset-x-0 top-0 z-[150] transition-all duration-500 ${compact ? "border-b border-cream/10 bg-ink/88 backdrop-blur-xl" : "bg-transparent"}`}>
      <div className={`page-shell flex items-center justify-between text-cream transition-all duration-500 ${compact ? "h-[68px]" : "h-[84px]"}`}>
        <a href="#top" className="leading-none" aria-label="Udomo Ali home">
          <span className="mb-1 block text-[8px] font-medium uppercase tracking-[.2em] text-cream/45">Career Counsellor</span>
          <span className="display-text text-lg">Udomo Ali</span>
        </a>
        <nav className="hidden items-center gap-4 text-[11px] text-cream/65 lg:flex" aria-label="Primary navigation">
          {navItems.map((item, index) => <span className="flex items-center gap-4" key={item.href}><a className="transition-colors hover:text-cream" href={item.href}>{item.label}</a>{index < navItems.length - 1 && <i className="text-cream/20">/</i>}</span>)}
          <a className="editorial-button editorial-button--primary editorial-button--small ml-5" href="#contact">Let&apos;s talk <ArrowUpRight className="size-3.5" /></a>
        </nav>
        <button className="square-action grid size-11 border border-cream/25 lg:hidden" type="button" onClick={() => setOpen(true)} aria-label="Open menu" aria-expanded={open}><Menu className="size-5" /></button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div className="fixed inset-0 z-[200] isolate text-cream lg:hidden" initial={{ clipPath: "circle(0% at 90% 6%)" }} animate={{ clipPath: "circle(150% at 90% 6%)" }} exit={{ clipPath: "circle(0% at 90% 6%)" }} transition={{ duration: .65, ease: [.76, 0, .24, 1] }}>
            <div className="pointer-events-none fixed inset-0 z-[201] bg-ink" />
            <div className="page-shell relative z-[202] flex h-[84px] items-center justify-between"><span className="display-text text-xl">Udomo Ali</span><button className="square-action grid size-11 border border-cream/25" onClick={() => setOpen(false)} aria-label="Close menu"><X className="size-5" /></button></div>
            <nav className="page-shell relative z-[202] flex h-[calc(100dvh-84px)] flex-col justify-center gap-3" aria-label="Mobile navigation">
              {navItems.map((item, index) => <motion.a className="display-text border-b border-cream/12 py-3 text-5xl uppercase" href={item.href} key={item.href} onClick={() => setOpen(false)} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .18 + index * .06 }}>{item.label}</motion.a>)}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
