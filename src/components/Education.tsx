import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const items = [
  { degree: "BE — Electronics & Communication", school: "LAEC, Bidar", score: "CGPA 7.94", year: "2022 – 2026" },
  { degree: "12th (HSC)", school: "DSCL, Latur", score: "64.67 %", year: "2020 – 2022" },
  { degree: "10th (SSC)", school: "KVL, Latur", score: "88.60 %", year: "2019 – 2020" },
];

export function Education() {
  return (
    <section id="education" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Education"
          title="Academic foundation."
        />
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {items.map((it, i) => (
            <motion.div
              key={it.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass gradient-border relative overflow-hidden rounded-2xl p-6"
            >
              <div className="gradient-border-inner rounded-2xl" />
              <div className="text-[11px] uppercase tracking-widest text-primary">{it.year}</div>
              <h3 className="mt-2 font-display text-xl text-highlight">{it.degree}</h3>
              <div className="mt-1 text-sm text-muted-foreground">{it.school}</div>
              <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs text-primary ring-1 ring-primary/20">
                {it.score}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
