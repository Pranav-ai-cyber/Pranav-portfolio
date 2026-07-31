import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, FileText, Send, Phone } from "lucide-react";
import type { ComponentType, SVGProps } from "react";

const LinkedinIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.4v1.56h.05c.47-.9 1.63-1.85 3.35-1.85 3.58 0 4.24 2.36 4.24 5.42v6.32zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"/></svg>
);
const Linkedin = LinkedinIcon as ComponentType<SVGProps<SVGSVGElement>>;
import { SectionHeading } from "./SectionHeading";

const socials = [
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/suryawanshi-pranav" },
  { icon: Mail, label: "Email", href: "mailto:suryawanshipranav38@gmail.com" },
  { icon: FileText, label: "Resume", href: "/SDET-Suryawanshi-Resume.pdf" },
];

export function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        form.reset();
        setSent(true);
        setTimeout(() => setSent(false), 3000);
      } else {
        setError(`Failed: ${json.message || "Unknown error"}`);
      }
    } catch (err) {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build reliable software together."
          subtitle="I'm open to SDET / QA internships and full-time roles starting 2026. Drop a note — I reply within a day."
        />
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
          <motion.form
            ref={formRef}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="glass gradient-border relative rounded-3xl p-6 sm:p-8 lg:col-span-3"
          >
            <div className="gradient-border-inner rounded-3xl" />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field label="Your name" name="name" placeholder="Jane Doe" />
              <Field label="Email" name="email" type="email" placeholder="jane@company.com" />
            </div>
            <Field label="Subject" name="subject" placeholder="Role at Acme Corp" className="mt-4" />
            <div className="mt-4">
              <label className="mb-1.5 block text-xs uppercase tracking-widest text-muted-foreground">
                Message
              </label>
              <textarea
                required
                name="message"
                rows={5}
                placeholder="Tell me about the role, team, or project…"
                className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-highlight placeholder:text-muted-foreground/60 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
            {error && (
              <p className="mt-3 text-sm text-red-400">{error}</p>
            )}
            <button
              type="submit"
              disabled={loading}
              data-magnetic
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-[0_20px_50px_-15px_oklch(0.68_0.13_55/0.65)] transition-transform hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {sent ? "Sent — I'll reply soon" : loading ? "Sending..." : <><Send className="h-4 w-4" /> Send message</>}
            </button>
          </motion.form>

          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 space-y-4"
          >
            <div className="glass rounded-3xl p-6">
              <div className="text-xs uppercase tracking-widest text-primary">Direct</div>
              <a href="mailto:suryawanshipranav38@gmail.com" className="mt-2 flex items-center gap-2 text-highlight hover:text-primary">
                <Mail className="h-4 w-4" /> suryawanshipranav38@gmail.com
              </a>
              <a href="tel:+919172337349" className="mt-2 flex items-center gap-2 text-highlight hover:text-primary">
                <Phone className="h-4 w-4" /> +91 91723 37349
              </a>
              <div className="mt-2 text-sm text-muted-foreground">Latur, Maharashtra · India</div>
            </div>
            <div className="glass rounded-3xl p-6">
              <div className="text-xs uppercase tracking-widest text-primary mb-3">Elsewhere</div>
              <div className="grid grid-cols-2 gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    data-magnetic
                    className="group flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-3 text-sm text-highlight transition-all hover:-translate-y-0.5 hover:border-primary/40"
                  >
                    <s.icon className="h-4 w-4 text-primary" />
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  className = "",
  ...rest
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <div className={className}>
      <label className="mb-1.5 block text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
      <input
        required
        {...rest}
        className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-highlight placeholder:text-muted-foreground/60 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20"
      />
    </div>
  );
}
