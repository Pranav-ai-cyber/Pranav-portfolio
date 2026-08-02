import { motion } from "framer-motion";
import { useState } from "react";
import { SectionHeading } from "./SectionHeading";

type Skill = {
  name: string;
  level: number; // 1-5
  category: string;
  tools: string[];
};

const skills: Skill[] = [
  { name: "Selenium", level: 5, category: "Automation", tools: ["POM", "TestNG", "Grid"] },
  { name: "Java", level: 5, category: "Language", tools: ["JDK 21", "OOP", "Collections"] },
  { name: "Manual Testing", level: 5, category: "QA", tools: ["Functional", "Regression", "Smoke"] },
  { name: "API Testing", level: 4, category: "Middleware Testing", tools: ["Rest Assured", "Postman", "SOAP UI"] },
  { name: "SQL", level: 4, category: "Data", tools: ["Joins", "Subquery", "RDBMS"] },
  { name: "TestNG", level: 4, category: "Framework", tools: ["Annotations", "DataProvider"] },
  { name: "Jenkins", level: 3, category: "CI/CD", tools: ["Pipelines", "Maven", "GitHub"] },
  { name: "Jira", level: 4, category: "Tracking", tools: ["Bug Triage", "Zephyr Scale"] },
  { name: "FireFlink", level: 4, category: "AI Testing", tools: ["Codeless", "AI-driven"] },
  { name: "Sauce Labs", level: 3, category: "Cross-Browser", tools: ["Cloud", "Parallel"] },
  { name: "Git & GitHub", level: 4, category: "Version Control", tools: ["Branching", "PRs"] },
  { name: "Scrum", level: 4, category: "Methodology", tools: ["Sprint Planning", "Retrospective", "Bug Triage"] },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Skills"
          title="Tools I trust in a release pipeline."
          subtitle="Hover a bubble to see confidence, category, and the tools I've shipped with."
        />
        <div className="flex flex-wrap gap-4">
          {skills.map((s, i) => (
            <Bubble key={s.name} skill={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Bubble({ skill, index }: { skill: Skill; index: number }) {
  const [hover, setHover] = useState(false);
  const size = 96 + skill.level * 14; // 110-166
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.04, type: "spring", stiffness: 120 }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ width: size, height: size }}
      className="relative shrink-0"
    >
      <div
        className="glass-strong absolute inset-0 rounded-full transition-all duration-500"
        style={{
          boxShadow: hover
            ? "0 0 0 1px oklch(0.68 0.13 55 / 0.5), 0 30px 60px -20px oklch(0.68 0.13 55 / 0.5), inset 0 1px 0 oklch(1 0 0 / 0.15)"
            : "0 20px 40px -20px oklch(0 0 0 / 0.6), inset 0 1px 0 oklch(1 0 0 / 0.08)",
          transform: hover ? "translateY(-6px) scale(1.06)" : "translateY(0) scale(1)",
        }}
      >
        <div
          className="pointer-events-none absolute inset-0 rounded-full opacity-0 transition-opacity duration-500"
          style={{
            opacity: hover ? 1 : 0,
            background:
              "radial-gradient(circle at 30% 25%, oklch(0.94 0.03 85 / 0.35), transparent 55%)",
          }}
        />
      </div>
      <div className="relative flex h-full w-full flex-col items-center justify-center px-2 text-center">
        <div className="font-display text-sm text-highlight sm:text-base">{skill.name}</div>
        <div className="mt-1 text-[10px] uppercase tracking-wider text-primary">{skill.category}</div>
        <div className="mt-1.5 flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <span
              key={i}
              className={`h-1 w-1 rounded-full ${i < skill.level ? "bg-primary" : "bg-white/15"}`}
            />
          ))}
        </div>
      </div>
      {hover && (
        <motion.div
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute left-1/2 top-full z-10 mt-3 w-max -translate-x-1/2 rounded-lg glass-strong px-3 py-1.5 text-[10px] text-muted-foreground"
        >
          {skill.tools.join(" · ")}
        </motion.div>
      )}
    </motion.div>
  );
}
