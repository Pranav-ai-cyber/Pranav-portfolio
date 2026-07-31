import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#certificates", label: "Certificates" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? (window.scrollY / h) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`mx-auto mt-4 flex max-w-6xl items-center justify-between rounded-full px-5 py-3 transition-all ${
          scrolled ? "glass-strong" : ""
        }`}
        style={{ width: "min(94%, 72rem)" }}
      >
        <a href="#top" className="flex items-center gap-2" aria-label="Home">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary/15 text-sm font-bold text-primary ring-1 ring-primary/30">
            PS
          </span>
          <span className="hidden font-display text-sm tracking-wider text-highlight/90 sm:inline">
            Pranav Suryawanshi
          </span>
        </a>
        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-highlight"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          data-magnetic
          className="hidden rounded-full bg-primary/90 px-4 py-2 text-sm font-medium text-primary-foreground shadow-[0_10px_30px_-10px_oklch(0.68_0.13_55/0.7)] transition-transform hover:scale-[1.03] md:inline-flex"
        >
          Hire me
        </a>
        <button
          className="md:hidden rounded-full p-2 text-highlight"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span className="block h-0.5 w-5 bg-highlight" />
          <span className="mt-1 block h-0.5 w-5 bg-highlight" />
          <span className="mt-1 block h-0.5 w-5 bg-highlight" />
        </button>
      </div>

      {open && (
        <div className="mx-auto mt-2 flex max-w-6xl flex-col gap-1 rounded-2xl glass-strong px-4 py-3 md:hidden" style={{ width: "min(94%, 72rem)" }}>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-white/5 hover:text-highlight"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}

      {/* Scroll progress */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-primary via-secondary to-highlight"
          style={{ width: `${progress}%` }}
        />
      </div>
    </header>
  );
}
