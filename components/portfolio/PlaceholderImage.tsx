"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";

type Tone = "sage" | "clay" | "slate" | "gold" | "blue" | "ink";

const BLUR =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMicgaGVpZ2h0PScxNic+PHJlY3Qgd2lkdGg9JzEyJyBoZWlnaHQ9JzE2JyBmaWxsPScjOGY4NTdhJy8+PC9zdmc+";

const imagePositions: Record<string, string> = {
  "/images/about.jpg": "52% center",
  "/images/contact.jpg": "54% 34%",
  "/images/global-perspective.jpg": "58% center",
  "/images/journey/law.jpg": "58% 42%",
  "/images/journey/research.jpg": "44% center",
  "/images/journey/hr-business.jpg": "50% 36%",
  "/images/journey/real-world.jpg": "50% 34%",
  "/images/journey/admissions.jpg": "50% center",
  "/images/journey/counselling.jpg": "67% center",
};

export default function PlaceholderImage({ path, label, number = "00", tone = "sage", className = "" }: { path: string; label: string; number?: string; tone?: Tone; className?: string }) {
  const [failed, setFailed] = useState(false);
  const figureRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: figureRef, offset: ["start end", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-1.5%", "1.5%"]);

  return (
    <motion.figure
      ref={figureRef}
      className={`image-placeholder grain group relative isolate w-full max-w-full overflow-hidden rounded-[2px] text-white ${className}`}
      data-image-path={path}
      data-tone={tone}
      initial={{ opacity: 0, scale: .97, clipPath: "inset(8% 0 8% 0)" }}
      whileInView={{ opacity: 1, scale: 1, clipPath: "inset(0% 0 0% 0)" }}
      viewport={{ once: true, amount: .06 }}
      transition={{ duration: .9, ease: [.22, 1, .36, 1] }}
    >
      {!failed && (
        <motion.div className="absolute -inset-[2%]" style={{ y: imageY }}>
          <Image
            src={path}
            alt={label}
            fill
            sizes="(max-width: 768px) 92vw, (max-width: 1200px) 50vw, 640px"
            quality={75}
            placeholder="blur"
            blurDataURL={BLUR}
            className="object-cover saturate-[.82] contrast-[1.04] transition duration-700 ease-out group-hover:scale-[1.035] group-hover:saturate-100"
            style={{ objectPosition: imagePositions[path] ?? "center" }}
            onError={() => setFailed(true)}
          />
        </motion.div>
      )}

      {failed && <><div className="placeholder-orbit absolute -right-[8%] -top-[12%] size-[62%]" /><div className="placeholder-orbit absolute right-[9%] top-[5%] size-[32%]" /></>}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,13,16,.05)_30%,rgba(12,13,16,.78)_100%)]" />
      <div className="absolute inset-0 border border-white/12" />
      <span className="display-text absolute left-5 top-5 z-[2] text-[clamp(4rem,8vw,8rem)] leading-none text-white/[.16]">{number}</span>
      <span className="absolute right-5 top-5 z-10 text-[8px] font-semibold uppercase tracking-[.2em] text-white/58">Udomo Ali</span>
      <figcaption className="absolute inset-x-5 bottom-5 z-10 border-t border-white/25 pt-4">
        <p className="max-w-[360px] text-sm leading-5 text-white/88">{label}</p>
      </figcaption>
    </motion.figure>
  );
}
