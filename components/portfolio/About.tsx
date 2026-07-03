import AnimatedText from "./AnimatedText";
import PlaceholderImage from "./PlaceholderImage";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="page-shell relative overflow-hidden bg-forest py-28 text-cream md:py-44">
      <div data-orange-glow className="orange-glow pointer-events-none absolute -left-40 top-1/3 size-[540px] rounded-full opacity-45" />
      <div className="relative z-10">
        <SectionHeading index="01" label="About Me" title="A career isn’t a rigid straight line, it’s an evolution." dark />
        <div className="mt-24 grid min-w-0 gap-14 lg:grid-cols-[.84fr_1.16fr] lg:gap-28">
          <div className="relative min-w-0 lg:sticky lg:top-28 lg:self-start">
            <PlaceholderImage path="/images/about.jpg" label="About Me: Navigating Paths, Unlocking Potential" number="UA" tone="clay" className="aspect-[4/5] min-h-[460px]" />
          </div>
          <div className="min-w-0 space-y-10">
            <AnimatedText><p className="display-text text-balance text-4xl leading-[1.02] text-cream md:text-6xl">My own journey began with a law degree, an intense training ground that built a strong foundation in advocacy, critical thinking, objective analysis, and a deep understanding of human behaviour.</p></AnimatedText>
            <AnimatedText><p className="max-w-2xl text-base leading-8 text-muted md:text-lg">Stepping beyond the courtroom and embracing a non-linear path, I applied these analytical skills to the corporate sector in London, stepping into a dual role of research and managing the in-country team for a global academic background screening company. Overseeing operations across Africa, this position immersed me in cross-border research, academic verification, and regional leadership.</p></AnimatedText>
            <AnimatedText><p className="max-w-2xl text-base leading-8 text-muted md:text-lg">Driven by curiosity and a desire to explore different facets of the professional world, I chose to keep expanding my horizons. I pivoted into roles across Human Resources, where I mastered talent alignment and organisational culture, and Business Development, which sharpened my strategic thinking and market insights. At some point in my life, I even spent time on the road as an Uber driver, a unique chapter that allowed me to practice raw human connection, active listening, and engage with people from every imaginable walk of life.</p></AnimatedText>
            <AnimatedText><p className="max-w-2xl text-base leading-8 text-muted md:text-lg">Later, I transitioned into higher education, spending impactful years in University Admissions and Advisory while in Egypt, and across markets in the United Kingdom and Canada. There, I helped students crack the code of university applications, alignment of interests, and academic planning.</p></AnimatedText>
            <AnimatedText><p className="max-w-2xl text-base leading-8 text-muted md:text-lg">Today, as a Career Counsellor, I tie all of these diverse chapters together. Because I have worn so many different hats, I don&apos;t just advise on careers from a textbook, I deeply understand the real-world twists, turns, anxieties, and triumphs it takes to find your true professional footing.</p></AnimatedText>
            <AnimatedText><div className="flex flex-wrap gap-x-8 gap-y-3 border-t border-cream/14 pt-7 text-[10px] font-semibold uppercase tracking-[.18em] text-muted"><span>Advocacy</span><span>Research</span><span>Human Resources</span><span>Business Development</span><span>Higher Education</span></div></AnimatedText>
          </div>
        </div>
      </div>
    </section>
  );
}
