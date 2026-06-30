"use client";

import { motion } from "framer-motion";
import { ImageIcon } from "lucide-react";

type Tone = "sage" | "clay" | "slate" | "gold" | "blue" | "ink";

export default function PlaceholderImage({ path, label, number = "00", tone = "sage", className = "" }: { path: string; label: string; number?: string; tone?: Tone; className?: string }) {
  return (
    <motion.div
      className={`image-placeholder grain group relative isolate w-full max-w-full overflow-hidden rounded-[2px] text-cream ${className}`}
      data-image-path={path}
      data-tone={tone}
      initial={{ clipPath: "inset(0 0 100% 0)", scale: .98 }}
      whileInView={{ clipPath: "inset(0 0 0% 0)", scale: 1 }}
      viewport={{ once: true, margin: "-12%" }}
      transition={{ duration: 1.1, ease: [.22, 1, .36, 1] }}
    >
      <div className="placeholder-orbit absolute -right-[8%] -top-[12%] size-[62%] transition-transform duration-700 group-hover:scale-110" />
      <div className="placeholder-orbit absolute right-[9%] top-[5%] size-[32%]" />
      <svg className="absolute inset-0 z-[1] size-full opacity-30" viewBox="0 0 600 420" fill="none" aria-hidden="true"><path className="placeholder-path" d="M-20 358C120 290 84 170 230 202C365 232 342 54 620 74" stroke="rgba(243,239,230,.55)" strokeWidth="1.3"/><circle cx="230" cy="202" r="5" fill="#b49355"/><circle cx="510" cy="88" r="5" fill="#b49355"/></svg>
      <span className="display-text absolute left-5 top-8 z-[2] text-[clamp(5rem,10vw,9rem)] leading-none text-cream/[.10]">{number}</span>
      <div className="absolute inset-x-5 bottom-5 z-10 flex items-end justify-between gap-4 border-t border-cream/15 pt-4">
        <div><p className="text-[9px] uppercase tracking-[.22em] text-cream/42">Reserved for client imagery</p><p className="mt-1.5 max-w-[260px] text-sm leading-5 text-cream/82">{label}</p></div>
        <span className="grid size-9 shrink-0 place-items-center rounded-full border border-cream/18"><ImageIcon className="size-4 text-gold" strokeWidth={1.2} /></span>
      </div>
      <span className="absolute right-5 top-5 z-10 max-w-[70%] truncate font-mono text-[8px] tracking-wide text-cream/30">{path}</span>
    </motion.div>
  );
}
