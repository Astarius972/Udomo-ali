"use client";

import AnimatedText from "./AnimatedText";

export default function BrandStatement() {
  return (
    <section className="relative overflow-hidden bg-orange px-6 py-20 text-white md:py-32">
      <div data-orange-glow className="pointer-events-none absolute -right-24 -top-36 size-[520px] rounded-full bg-orange-soft/30 blur-[90px]" />
      <div className="relative z-10 mx-auto max-w-[1380px]"><AnimatedText><p className="display-text text-balance text-center text-[clamp(3.2rem,7.2vw,8.5rem)] leading-[.9]">I deeply understand the <em>real-world twists, turns, anxieties, and triumphs</em> it takes to find your true professional footing.</p></AnimatedText></div>
    </section>
  );
}
