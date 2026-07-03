import { Compass, GraduationCap, ScrollText } from "lucide-react";

export const navItems = [
  { label: "Index", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Journey", href: "#journey" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
] as const;

export const journeyItems = [
  {
    number: "01",
    title: "Constructive Thinker",
    description: "Earned a law degree, developing core skills in strategic analysis, compliance, client advocacy, and structured problem-solving.",
    imagePath: "/images/journey/law.jpg",
    accent: "Strategic analysis · Compliance · Client advocacy",
    tone: "gold",
  },
  {
    number: "02",
    title: "Research & Leadership",
    description: "Managed regional operations across Africa for a global background screening company based in London. Specialised in academic verifications, cross-border research compliance, and operational leadership.",
    imagePath: "/images/journey/research.jpg",
    accent: "Academic verifications · Cross-border research compliance",
    tone: "slate",
  },
  {
    number: "03",
    title: "Human Resources & Business Development",
    description: "Successfully managed employee relations, recruitment strategies, and drove market/business growth across diverse organisational settings.",
    imagePath: "/images/journey/hr-business.jpg",
    accent: "Employee relations · Recruitment strategies",
    tone: "sage",
  },
  {
    number: "04",
    title: "The 'Real-World' Connector (Uber Driver Experience)",
    description: "Cultivated deep empathy, exceptional communication, and a grounded perspective on people by engaging with thousands of unique passengers.",
    imagePath: "/images/journey/real-world.jpg",
    accent: "Deep empathy · Exceptional communication",
    tone: "clay",
  },
  {
    number: "05",
    title: "University Admissions & Higher Ed Advisor",
    description: "Guided prospective students through academic planning, entry requirements, and the complex landscape of university placement.",
    imagePath: "/images/journey/admissions.jpg",
    accent: "Academic planning · Entry requirements · University placement",
    tone: "blue",
  },
  {
    number: "06",
    title: "Professional Career Counsellor",
    description: "Synthesising a lifetime of diverse industry knowledge to empower clients, map out career trajectories, and mentor individuals through pivotal professional transitions.",
    imagePath: "/images/journey/counselling.jpg",
    accent: "Career trajectories · Professional transitions",
    tone: "ink",
  },
] as const;

export const services = [
  {
    number: "01",
    title: "Career Mapping & Trajectory Planning",
    description: "Helping clients pivot or transition into new fields confidently.",
    icon: Compass,
    tags: ["Career Transition Mentorship", "Strategic Problem-Solving (Legal & Business)"],
  },
  {
    number: "02",
    title: "Higher Education & Admissions Advisory",
    description: "Guiding students through the complex university selection and entry process.",
    icon: GraduationCap,
    tags: ["Higher Education & Admissions Advisory", "Research"],
  },
  {
    number: "03",
    title: "Resume & Professional Storytelling",
    description: "Helping individuals package unconventional backgrounds (like my own!) into highly marketable professional narratives.",
    icon: ScrollText,
    tags: ["Resume & Professional Storytelling", "Cross-cultural Communication"],
  },
] as const;

export const expertise = [
  "Career Transition Mentorship",
  "Strategic Problem-Solving (Legal & Business)",
  "Talent Development & HR Frameworks",
  "Active Listening & Deep Empathy",
  "Public Speaking & Advisory Workshop Facilitation",
  "Research",
  "Cross-cultural Communication",
] as const;

export const principles = [
  "A career isn’t a rigid straight line, it’s an evolution.",
  "I don't just advise on careers from a textbook, I deeply understand the real-world twists, turns, anxieties, and triumphs it takes to find your true professional footing.",
] as const;
