import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { Award, Briefcase, GraduationCap, Rocket, Target, Wrench } from "lucide-react";
import profileImg from "@/assets/pranav-profile.jpeg";


const items = [
  { icon: GraduationCap, title: "Computer Science Student", detail: "BE, LAEC Bidar — 2026" },
  { icon: Award, title: "CGPA", detail: "7.94 / 10" },
  { icon: Briefcase, title: "Internship", detail: "AI + FireFlink @ QSpiders" },
  { icon: Wrench, title: "Core Skills", detail: "Selenium · Java · API · SQL · JMeter" },
  { icon: Rocket, title: "Currently Learning", detail: "Playwright · CI/CD · Cloud Testing" },
  { icon: Target, title: "Career Goal", detail: "Ship reliable software as an SDET" },
];

export function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="About"
          title="Quality is a craft, not a checklist."
          subtitle="I'm Pranav — a final-year Computer Science engineer specialising in software testing and SDET workflows. I care about the small details: readable test suites, deterministic runs, and dashboards that tell the truth."
        />
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[auto_1fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="gradient-border glass relative mx-auto w-full max-w-xs overflow-hidden rounded-3xl lg:sticky lg:top-24"
          >
            <div className="gradient-border-inner rounded-3xl" />
            <img
              src={profileImg}
              alt="Pranav Suryawanshi — SDET & Quality Engineer"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent p-4">
              <div className="font-display text-lg text-highlight">Pranav Suryawanshi</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">SDET · Quality Engineer</div>
            </div>
          </motion.div>

          <div className="gradient-border glass rounded-3xl p-8 sm:p-10">
            <div className="gradient-border-inner rounded-3xl" />
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              {items.map((it, i) => (
                <motion.div
                  key={it.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="group relative flex gap-4 rounded-2xl p-4 transition-colors hover:bg-white/[0.03]"
                >
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20 transition-transform group-hover:scale-110">
                    <it.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">{it.title}</div>
                    <div className="mt-1 font-display text-lg text-highlight">{it.detail}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
