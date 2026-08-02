import { motion } from "framer-motion";
import { useRef } from "react";
import { SectionHeading } from "./SectionHeading";
import { BadgeCheck } from "lucide-react";

const certs = [
  { title: "Software Testing Full Stack", issuer: "QSpiders", date: "2026", cred: "QS-STFS-2025" },
  { title: "SDET with DevOps", issuer: "QSpiders", date: "2026", cred: "QS-SDET-2025" },
  { title: "AI Automation — FireFlink", issuer: "QSpiders", date: "2026", cred: "QS-AI-FF" },
  { title: "Selenium with Java", issuer: "Self-Certified Project", date: "2026", cred: "SEL-J-01" },
  { title: "API Testing with Rest Assured", issuer: "Self-Certified Project", date: "2026", cred: "API-RA-01" },
  { title: "SQL for Testers", issuer: "Coursework", date: "2026", cred: "SQL-T-01" },
];

export function Certificates() {
  return (
    <section id="certificates" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Certificates" title="Signed, sealed, verified." />
      </div>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent" />
        <div className="mx-auto flex max-w-6xl gap-5 overflow-x-auto px-6 pb-6" style={{ scrollbarWidth: "thin" }}>
          {certs.map((c, i) => (
            <CertCard key={c.title} c={c} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CertCard({ c, i }: { c: (typeof certs)[number]; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const move = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - (r.left + r.width / 2)) / r.width;
    const y = (e.clientY - (r.top + r.height / 2)) / r.height;
    el.style.transform = `perspective(900px) rotateX(${(-y * 10).toFixed(1)}deg) rotateY(${(x * 12).toFixed(1)}deg)`;
  };
  const reset = () => { if (ref.current) ref.current.style.transform = ""; };
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.05 }}
      ref={ref}
      onMouseMove={move}
      onMouseLeave={reset}
      className="glass-strong gradient-border relative min-w-[280px] max-w-[280px] shrink-0 rounded-2xl p-5 transition-transform duration-200 will-change-transform"
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="gradient-border-inner rounded-2xl" />
      <div className="flex items-center gap-3">
        <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/25">
          <BadgeCheck className="h-5 w-5" />
        </div>
        <div className="text-[11px] uppercase tracking-widest text-muted-foreground">{c.date}</div>
      </div>
      <h3 className="mt-4 font-display text-lg leading-tight text-highlight">{c.title}</h3>
      <div className="mt-1 text-sm text-muted-foreground">{c.issuer}</div>
      <div className="mt-4 flex items-center justify-between border-t border-white/5 pt-3 text-[11px] text-muted-foreground">
        <span>Credential</span>
        <span className="font-mono text-highlight/80">{c.cred}</span>
      </div>
    </motion.div>
  );
}
