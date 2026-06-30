"use client";

import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { useCallback, useState } from "react";
import About from "./portfolio/About";
import BrandStatement from "./portfolio/BrandStatement";
import Contact from "./portfolio/Contact";
import Expertise from "./portfolio/Expertise";
import Footer from "./portfolio/Footer";
import Header from "./portfolio/Header";
import Hero from "./portfolio/Hero";
import IntroLoader from "./portfolio/IntroLoader";
import Principles from "./portfolio/Principles";
import Services from "./portfolio/Services";
import SmoothScrollProvider from "./portfolio/SmoothScrollProvider";
import Timeline from "./portfolio/Timeline";
import TrustStrip from "./portfolio/TrustStrip";

export default function Portfolio() {
  const [loading, setLoading] = useState(true);
  const completeLoader = useCallback(() => setLoading(false), []);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: .001 });

  return (
    <SmoothScrollProvider>
      <AnimatePresence mode="wait">{loading && <IntroLoader key="loader" onComplete={completeLoader} />}</AnimatePresence>
      <motion.div className="fixed left-0 right-0 top-0 z-[100] h-[2px] origin-left bg-gold" style={{ scaleX: progress }} />
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <BrandStatement />
        <About />
        <Timeline />
        <Services />
        <Expertise />
        <Principles />
        <Contact />
      </main>
      <Footer />
    </SmoothScrollProvider>
  );
}
