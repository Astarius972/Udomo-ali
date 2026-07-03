"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Linkedin, Mail } from "lucide-react";
import PlaceholderImage from "./PlaceholderImage";
import AnimatedText from "./AnimatedText";

export default function Contact() {
  return (
    <section id="contact" className="grain relative overflow-hidden bg-[radial-gradient(circle_at_72%_18%,#fbfaf6_0%,#f4f2ec_46%,#efece3_100%)] pt-28 text-cream md:pt-44">
      <div data-orange-glow className="orange-glow pointer-events-none absolute -right-24 top-0 size-[700px] rounded-full opacity-70" />
      <div className="page-shell relative z-10">
        <p className="text-[10px] font-semibold uppercase tracking-[.22em] text-orange">06 · Contact Information & Professional Links</p>
        <div className="mt-8"><AnimatedText><h2 className="display-text max-w-[1400px] text-[clamp(2.6rem,7vw,8rem)] leading-[.9]">Let&apos;s connect and map out your <span className="text-orange">next professional chapter.</span></h2></AnimatedText></div>

        <div className="mt-20 grid gap-10 border-t border-cream/12 pt-10 lg:grid-cols-12 lg:gap-8">
          <motion.div className="lg:col-span-5" initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .75 }}>
            <PlaceholderImage path="/images/contact.jpg" label="Contact Information & Professional Links" number="06" tone="clay" className="aspect-[4/5] min-h-[460px]" />
          </motion.div>

          <motion.div className="flex flex-col justify-between gap-10 lg:col-span-7" initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .75, delay: .08 }}>
            <div className="border-y border-cream/14 py-8 md:py-10">
              <p className="mb-7 max-w-2xl text-sm leading-7 text-cream/65">Ready to discuss your next career or education chapter? Choose the most convenient way to connect.</p>
              <div className="grid gap-3 sm:grid-cols-2">
                <a className="editorial-button editorial-button--primary" href="mailto:udomoa.ali@gmail.com?subject=Portfolio%20enquiry">Send Email <Mail className="size-4" /></a>
                <a className="editorial-button editorial-button--secondary" href="https://www.linkedin.com/in/udomo-ali" target="_blank" rel="noreferrer">LinkedIn <Linkedin className="size-4" /></a>
              </div>
            </div>
            <div className="relative overflow-hidden lg:min-h-[320px] lg:flex-1">
              <div className="absolute inset-5 z-[3] border border-orange/30" />
              <PlaceholderImage path="/images/global-perspective.jpg" label="A global perspective shaped by lived experience across cultures" number="GL" tone="ink" className="aspect-[3/4] w-full lg:aspect-auto lg:h-full lg:min-h-[320px]" />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="mt-24 overflow-hidden border-y border-cream/12 py-6 md:mt-36 md:py-10">
        <div className="email-marquee flex w-max whitespace-nowrap">
          {[0, 1].map((item) => <a key={item} href="mailto:udomoa.ali@gmail.com" className="display-text pr-[5vw] text-[clamp(4rem,9vw,10rem)] leading-none">udomoa.ali<span className="text-orange">@</span>gmail.com</a>)}
        </div>
      </div>
    </section>
  );
}
