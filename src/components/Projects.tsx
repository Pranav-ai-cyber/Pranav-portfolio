import { motion } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

type Project = {
  title: string;
  tag: string;
  stack: string[];
  problem: string;
  solution: string;
  features: string[];
  accent: string;
};

const projects: Project[] = [
  {
    title: "ShoppersStack — E-commerce Test Suite",
    tag: "Automation",
    stack: ["Selenium", "Java", "TestNG", "POM", "Maven"],
    problem: "Fragile manual regression on a 40-page shopping portal.",
    solution:
      "Built a hybrid POM framework with data-driven checkouts, cross-browser runs on Sauce Labs, and Jenkins nightly triggers.",
    features: ["200+ automated cases", "Grid parallel runs", "HTML + Allure reports", "Retry logic"],
    accent: "oklch(0.68 0.13 55 / 0.35)",
  },
  {
    title: "Q-Bank — Banking API Testing",
    tag: "API",
    stack: ["Rest Assured", "Postman", "JSON", "POJO"],
    problem: "Money-movement APIs needed contract + status-code coverage.",
    solution:
      "Serialization/deserialization workflows via POJO, CRUD suites in Postman, and negative-path assertions on 4xx / 5xx.",
    features: ["Auth token flow", "Schema validation", "Env-based configs", "CI ready"],
    accent: "oklch(0.66 0.04 120 / 0.35)",
  },
  {
    title: "PhonePe — Payments Regression",
    tag: "Mobile + Web",
    stack: ["Manual", "Jira", "Zephyr Scale", "Ad-hoc"],
    problem: "Payments flows changed weekly; regression drift was expensive.",
    solution:
      "Authored a living regression pack with Zephyr Scale, tied every case to Jira epics, and ran daily smoke on release branches.",
    features: ["UPI + wallet flows", "Bill pay coverage", "Bug triage", "SLA dashboards"],
    accent: "oklch(0.94 0.03 85 / 0.35)",
  },
  {
    title: "Flipkart — 200 Functional Scenarios",
    tag: "Test Design",
    stack: ["Black Box", "Boundary", "Equivalence"],
    problem: "Search + checkout paths had unclear acceptance criteria.",
    solution:
      "Reverse-engineered flows into 200 functional scenarios with priority, preconditions, and traceability.",
    features: ["Priority matrix", "Requirement traceability", "Reviewer-ready docs"],
    accent: "oklch(0.68 0.13 55 / 0.3)",
  },
  {
    title: "BookMyShow — Integration Test Design",
    tag: "Integration",
    stack: ["System Testing", "End-to-End"],
    problem: "Ticketing spans seat-map, payments, and notifications.",
    solution:
      "Mapped 200 integration cases covering seat-lock, retry, refund, and cross-partner flows.",
    features: ["Seat concurrency", "Refund reconciliation", "Notification checks"],
    accent: "oklch(0.66 0.04 120 / 0.3)",
  },
  {
    title: "Remote Operated Voice Guider",
    tag: "Academic",
    stack: ["Embedded", "Voice UI", "Assistive Tech"],
    problem: "Bedridden patients need a hands-free way to signal caregivers.",
    solution:
      "Designed a voice-guided remote helper with escalating alerts and simple failure modes.",
    features: ["Voice cues", "One-touch alert", "Battery-safe standby"],
    accent: "oklch(0.68 0.07 145 / 0.35)",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work I'm proud of."
          subtitle="Real testing projects from my internship and coursework — each shipped with docs, traceability, and repeatable runs."
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} p={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ p, index }: { p: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - (r.left + r.width / 2)) / r.width;
    const y = (e.clientY - (r.top + r.height / 2)) / r.height;
    el.style.transform = `perspective(1000px) rotateX(${(-y * 4).toFixed(2)}deg) rotateY(${(x * 5).toFixed(2)}deg) translateY(-4px)`;
  };
  const reset = () => {
    if (ref.current) ref.current.style.transform = "";
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: (index % 2) * 0.08 }}
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      className="gradient-border glass group relative overflow-hidden rounded-3xl p-6 transition-transform duration-200 ease-out will-change-transform sm:p-7"
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="gradient-border-inner rounded-3xl" />
      {/* Cover visual */}
      <div
        className="relative mb-5 flex h-40 items-end overflow-hidden rounded-2xl border border-white/10 p-4"
        style={{
          background: `radial-gradient(circle at 20% 20%, ${p.accent}, transparent 55%), linear-gradient(135deg, oklch(0.22 0.005 180), oklch(0.16 0.005 180))`,
        }}
      >
        <div className="absolute right-4 top-4 text-[10px] uppercase tracking-[0.2em] text-primary/80">{p.tag}</div>
        <div className="font-display text-2xl leading-tight text-highlight">{p.title}</div>
        <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{ background: "radial-gradient(400px 200px at var(--mx,50%) var(--my,50%), oklch(1 0 0 / 0.05), transparent 60%)" }} />
      </div>

      <div className="flex flex-wrap gap-1.5">
        {p.stack.map((t) => (
          <span key={t} className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-0.5 text-[11px] text-muted-foreground">
            {t}
          </span>
        ))}
      </div>

      <div className="mt-4 space-y-2 text-sm text-muted-foreground">
        <p><span className="text-highlight">Problem — </span>{p.problem}</p>
        <p><span className="text-highlight">Solution — </span>{p.solution}</p>
      </div>

      <ul className="mt-4 grid grid-cols-2 gap-1.5 text-[12px] text-muted-foreground">
        {p.features.map((f) => (
          <li key={f} className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-primary" /> {f}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex gap-3">
        <a
          href="#"
          className="inline-flex items-center gap-1.5 rounded-full bg-primary/90 px-3 py-1.5 text-xs text-primary-foreground hover:bg-primary"
        >
          <ExternalLink className="h-3.5 w-3.5" /> Case Study
        </a>
      </div>
    </motion.article>
  );
}
