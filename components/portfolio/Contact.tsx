"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Linkedin, Mail, MapPin } from "lucide-react";
import { FormEvent, useState } from "react";
import PlaceholderImage from "./PlaceholderImage";

export default function Contact() {
  const [note, setNote] = useState("Your email app will open with the message ready to send.");

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Portfolio enquiry from ${data.get("name")}`);
    const body = encodeURIComponent(`Hi Udomo,\n\n${data.get("message")}\n\nName: ${data.get("name")}\nEmail: ${data.get("email")}`);
    window.location.href = `mailto:udomoa.ali@gmail.com?subject=${subject}&body=${body}`;
    setNote("Your email app should open now.");
  };

  return (
    <section id="contact" className="grain relative overflow-hidden bg-[radial-gradient(circle_at_72%_30%,#4b1709_0%,#171013_34%,#0c0d10_72%)] pt-28 text-cream md:pt-44">
      <div data-orange-glow className="orange-glow pointer-events-none absolute -right-24 top-0 size-[700px] rounded-full opacity-70" />
      <div className="page-shell relative z-10">
        <p className="text-[10px] font-semibold uppercase tracking-[.22em] text-orange">06 · Contact Information & Professional Links</p>
        <motion.h2 className="display-text mt-8 max-w-[1500px] text-[clamp(4.5rem,10.2vw,12rem)] leading-[.78]" initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .9, ease: [.22, 1, .36, 1] }}>
          Let&apos;s connect and map out your <span className="text-orange">next professional chapter.</span>
        </motion.h2>

        <div className="mt-20 grid gap-10 border-t border-cream/12 pt-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <div className="space-y-2">
              <a className="flex items-center justify-between border-b border-cream/15 py-4 text-sm" href="mailto:udomoa.ali@gmail.com"><span className="flex items-center gap-3"><Mail className="size-4 text-orange" /> udomoa.ali@gmail.com</span><ArrowUpRight className="size-4" /></a>
              <a className="flex items-center justify-between border-b border-cream/15 py-4 text-sm" href="https://www.linkedin.com/in/udomo-ali" target="_blank" rel="noreferrer"><span className="flex items-center gap-3"><Linkedin className="size-4 text-orange" /> LinkedIn</span><ArrowUpRight className="size-4" /></a>
              <p className="flex items-center gap-3 border-b border-cream/15 py-4 text-sm text-cream/60"><MapPin className="size-4 text-orange" /> Available for opportunities globally</p>
            </div>
            <PlaceholderImage path="/images/contact.jpg" label="Contact Information & Professional Links" number="06" tone="clay" className="mt-8 aspect-[4/3] min-h-[280px]" />
          </div>

          <div className="relative min-h-[520px] overflow-hidden lg:col-span-4">
            <div className="absolute inset-5 border border-orange/30" />
            <PlaceholderImage path="/images/about.jpg" label="About Me: Navigating Paths, Unlocking Potential" number="UA" tone="ink" className="h-full min-h-[520px]" />
          </div>

          <motion.form onSubmit={submit} className="self-stretch border border-cream/14 bg-cream/[.035] p-7 backdrop-blur-md md:p-10 lg:col-span-4" initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .75 }}>
            <div className="mb-10 flex items-end justify-between border-b border-cream/12 pb-5"><p className="display-text text-4xl">Let&apos;s connect</p><ArrowUpRight className="size-6 text-orange" /></div>
            <label className="mb-7 block text-[9px] font-semibold uppercase tracking-[.2em] text-cream/45">Name<input className="form-field" type="text" name="name" placeholder="Your name" autoComplete="name" required /></label>
            <label className="mb-7 block text-[9px] font-semibold uppercase tracking-[.2em] text-cream/45">Email<input className="form-field" type="email" name="email" placeholder="you@example.com" autoComplete="email" required /></label>
            <label className="mb-8 block text-[9px] font-semibold uppercase tracking-[.2em] text-cream/45">Message<textarea className="form-field resize-y" name="message" rows={5} placeholder="Tell me about the chapter you're navigating..." required /></label>
            <button className="flex w-full items-center justify-between rounded-full bg-orange px-6 py-4 text-xs font-semibold uppercase tracking-[.12em] text-white transition-transform hover:-translate-y-1" type="submit">Let&apos;s connect <ArrowUpRight className="size-4" /></button>
            <p className="mt-4 text-center text-[10px] text-cream/38">{note}</p>
          </motion.form>
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
