import { ArrowUp, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="page-shell border-t border-cream/12 bg-ink py-10 text-cream">
      <div className="grid gap-8 md:grid-cols-[1fr_auto_1fr] md:items-center">
        <p className="display-text text-xl">Udomo Ali <span className="text-cream/35">&mdash;</span> Professional Career Counsellor</p>
        <div className="flex gap-5 text-[10px] uppercase tracking-[.16em] text-cream/55"><a className="flex items-center gap-2 hover:text-cream" href="https://www.linkedin.com/in/udomo-ali" target="_blank" rel="noreferrer"><Linkedin className="size-3.5" /> LinkedIn</a><a className="flex items-center gap-2 hover:text-cream" href="mailto:udomoa.ali@gmail.com"><Mail className="size-3.5" /> Email</a></div>
        <a className="justify-self-start text-[10px] uppercase tracking-[.16em] text-cream/55 hover:text-cream md:justify-self-end" href="#top">Back to top <ArrowUp className="ml-2 inline size-3.5" /></a>
      </div>
      <div className="mt-10 flex justify-between border-t border-cream/10 pt-5 text-[9px] uppercase tracking-[.16em] text-cream/28"><span>&copy; {new Date().getFullYear()} Udomo Ali</span><span>Navigating paths, unlocking potential.</span></div>
    </footer>
  );
}
