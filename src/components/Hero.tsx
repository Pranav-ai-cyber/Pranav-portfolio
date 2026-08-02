import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Download } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center pt-32 pb-16">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-2">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs text-muted-foreground"
          >
            <span className="inline-block h-2 w-2 rounded-full bg-success animate-pulse" />
            Open to SDET / QA roles — 2026 grad
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="font-display text-5xl leading-[1.02] tracking-tight text-highlight sm:text-6xl lg:text-7xl"
          >
            Hi, I'm <span className="text-gradient">Pranav</span>
            <span className="block text-3xl font-medium text-muted-foreground sm:text-4xl mt-3">
              SDET & Quality Assurance Engineer
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            Building reliable software through automation frameworks in
            <span className="text-highlight"> Selenium + Java</span>, API testing
            with <span className="text-highlight">Rest Assured</span>, and hand-crafted
            test strategies that ship confident releases.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <MagneticButton href="#projects" primary>
              View Projects <ArrowRight className="ml-1 h-4 w-4" />
            </MagneticButton>
            <MagneticButton href="/SDET-Suryawanshi-Resume.pdf" download>
              <Download className="mr-1 h-4 w-4" /> Download Resume
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-12 grid grid-cols-3 gap-6 max-w-md"
          >
            <Stat value={800} suffix="+" label="Test Cases Authored" />
            <Stat value={6} suffix=" mo" label="Internship" />
            <Stat value={7.94} label="CGPA" decimals={2} />
          </motion.div>
        </div>

        <div className="relative">
          <Laptop3D />
        </div>
      </div>
    </section>
  );
}

function MagneticButton({
  children,
  href,
  primary,
  download,
}: {
  children: React.ReactNode;
  href: string;
  primary?: boolean;
  download?: boolean;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - (r.left + r.width / 2);
      const y = e.clientY - (r.top + r.height / 2);
      el.style.transform = `translate(${x * 0.2}px, ${y * 0.25}px)`;
    };
    const reset = () => (el.style.transform = "");
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", reset);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", reset);
    };
  }, []);
  return (
    <a
      ref={ref}
      href={href}
      download={download}
      data-magnetic
      className={
        primary
          ? "inline-flex items-center gap-1 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[0_20px_50px_-15px_oklch(0.68_0.13_55/0.65)] transition-transform duration-200 will-change-transform hover:shadow-[0_25px_70px_-15px_oklch(0.68_0.13_55/0.8)]"
          : "inline-flex items-center gap-1 rounded-full glass px-6 py-3 text-sm font-medium text-highlight transition-transform duration-200 will-change-transform hover:border-primary/40"
      }
    >
      {children}
    </a>
  );
}

function Stat({
  value,
  label,
  suffix = "",
  decimals = 0,
}: {
  value: number;
  label: string;
  suffix?: string;
  decimals?: number;
}) {
  const [n, setN] = useState(0);
  useEffect(() => {
    let raf: number;
    const start = performance.now();
    const dur = 1400;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(value * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [value]);
  return (
    <div>
      <div className="font-display text-2xl text-highlight">
        {n.toFixed(decimals)}
        {suffix}
      </div>
      <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
    </div>
  );
}

/* CSS-based interactive 3D laptop that tilts with the mouse */
function Laptop3D() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - (r.left + r.width / 2)) / r.width;
      const y = (e.clientY - (r.top + r.height / 2)) / r.height;
      el.style.transform = `perspective(1400px) rotateX(${(-y * 10).toFixed(2)}deg) rotateY(${(x * 14).toFixed(2)}deg)`;
    };
    const reset = () => (el.style.transform = "perspective(1400px) rotateX(-6deg) rotateY(-8deg)");
    reset();
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div className="relative mx-auto w-full max-w-[520px]" style={{ perspective: 1400 }}>
      {/* soft glow */}
      <div className="absolute -inset-8 -z-10 rounded-[40px] blur-3xl opacity-60"
        style={{ background: "radial-gradient(circle at 50% 40%, oklch(0.68 0.13 55 / 0.35), transparent 65%)" }} />

      <div
        ref={ref}
        className="relative transition-transform duration-200 ease-out will-change-transform"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Screen */}
        <div className="glass-strong rounded-t-2xl border-b-0 p-2 shadow-soft">
          <div className="rounded-xl border border-white/10 bg-[oklch(0.14_0.005_180)] overflow-hidden">
            {/* Title bar */}
            <div className="flex items-center gap-1.5 border-b border-white/5 px-3 py-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.65_0.17_25)]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.78_0.14_85)]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.7_0.13_145)]" />
              <span className="ml-3 text-[10px] text-muted-foreground">test-suite.java — Eclipse IDE</span>
            </div>
            {/* Fake editor */}
            <div className="grid grid-cols-[40px_1fr] font-mono text-[11px] leading-5">
              <div className="border-r border-white/5 px-2 py-3 text-right text-muted-foreground/60 select-none">
                {Array.from({ length: 14 }).map((_, i) => (
                  <div key={i}>{i + 1}</div>
                ))}
              </div>
              <div className="px-3 py-3 text-highlight/90">
                <div><span className="text-[oklch(0.78_0.13_85)]">package test;</span></div>
                <div><span className="text-[oklch(0.78_0.13_85)]">@Test</span></div>
                <div><span className="text-[oklch(0.7_0.13_145)]">public void</span> <span className="text-primary">shouldAddItemToCart</span>() {"{"}</div>
                <div className="pl-4">driver.get(<span className="text-secondary">"https://shoppersstack.com"</span>);</div>
                <div className="pl-4">loginPage.login(user, pass);</div>
                <div className="pl-4">homePage.searchFor(<span className="text-secondary">"iphone"</span>);</div>
                <div className="pl-4">productPage.addToCart();</div>
                <div className="pl-4">Assert.<span className="text-primary">assertEquals</span>(</div>
                <div className="pl-8">cartPage.count(), <span className="text-secondary">1</span></div>
                <div className="pl-4">);</div>
                <div>{"}"}</div>
                <div className="mt-2 text-success/80">▸ 47 passed · 0 failed · 12.3s</div>
                <div className="text-muted-foreground/70">▸ Suite: Regression / Chrome / Selenium Grid</div>
                <div className="text-muted-foreground/70 animate-shimmer inline-block bg-clip-text text-transparent"
                  style={{ backgroundImage: "linear-gradient(90deg, transparent, oklch(0.94 0.03 85 / 0.9), transparent)" }}>
                  ▸ Running next case…
                </div>
              </div>
            </div>
            {/* Bottom badges */}
            <div className="flex flex-wrap gap-2 border-t border-white/5 p-3 text-[10px]">
              {["Selenium", "Java", "TestNG", "Rest Assured", "JMeter", "Jenkins", "SQL"].map((t) => (
                <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-muted-foreground">{t}</span>
              ))}
            </div>
          </div>
        </div>
        {/* Base */}
        <div className="relative h-4 rounded-b-2xl bg-gradient-to-b from-[oklch(0.28_0.005_180)] to-[oklch(0.2_0.005_180)] shadow-soft">
          <div className="absolute left-1/2 top-0 h-1 w-24 -translate-x-1/2 rounded-b-lg bg-black/50" />
        </div>
      </div>
    </div>
  );
}
