import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const timeline = [
  {
    when: "2025",
    title: "AI Automation Intern",
    org: "QSpiders — FireFlink",
    detail:
      "Built AI-driven test cases with FireFlink, learned codeless automation patterns, and integrated runs into a CI-style pipeline.",
    tags: ["FireFlink", "AI Testing", "CI"],
  },
  {
    when: "2024–25",
    title: "Software Testing Full Stack + SDET",
    org: "QSpiders — Certified Program",
    detail:
      "Deep-dive into Selenium, Java, TestNG, POM, Rest Assured, JMeter, Jenkins, SQL, Jira, and Zephyr Scale. Shipped assignments across ShoppersStack, Q-Bank, and PhonePe.",
    tags: ["Selenium", "Java", "Rest Assured", "JMeter"],
  },
  {
    when: "2024",
    title: "Test Design Assignments",
    org: "Flipkart · BookMyShow · Myntra · ShoppersStack",
    detail:
      "Authored 700+ functional, integration, system, smoke and ad-hoc test cases across 4 real-world domains.",
    tags: ["Manual", "Black Box", "Regression"],
  },
  {
    when: "2022–26",
    title: "BE — Computer Science Engineering",
    org: "LAEC, Bidar · CGPA 7.94",
    detail:
      "Coursework in OOP, DBMS, Networks, and Software Engineering — with an academic project on assistive voice-guided remotes.",
    tags: ["CS Core", "Academic Project"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-28">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          eyebrow="Experience"
          title="A short, honest timeline."
          subtitle="Internships, training, and the assignments that actually shipped."
        />
        <div className="relative">
          {/* line */}
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent sm:left-1/2" />
          <div className="space-y-10">
            {timeline.map((t, i) => (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className={`relative grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-10 ${i % 2 ? "sm:[&>*:first-child]:order-2" : ""}`}
              >
                {/* dot */}
                <div className="absolute left-4 top-6 -translate-x-1/2 sm:left-1/2">
                  <div className="relative">
                    <div className="h-3 w-3 rounded-full bg-primary" />
                    <div className="absolute inset-[-8px] rounded-full border border-primary/40 animate-[pulse-ring_3s_ease-in-out_infinite]" />
                  </div>
                </div>
                <div className={`pl-12 sm:pl-0 ${i % 2 ? "sm:pr-12 sm:text-right" : "sm:pl-12"}`}>
                  <div className="text-xs uppercase tracking-widest text-primary">{t.when}</div>
                  <h3 className="mt-1 font-display text-xl text-highlight">{t.title}</h3>
                  <div className="text-sm text-muted-foreground">{t.org}</div>
                </div>
                <div className={`pl-12 sm:pl-0 ${i % 2 ? "sm:pl-12" : "sm:pr-12"}`}>
                  <div className="glass rounded-2xl p-5">
                    <p className="text-sm leading-relaxed text-muted-foreground">{t.detail}</p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {t.tags.map((tag) => (
                        <span key={tag} className="rounded-full border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[11px] text-highlight/80">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
