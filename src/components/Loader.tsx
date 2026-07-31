import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Loader() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf: number;
    const start = performance.now();
    const dur = 1600;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setProgress(Math.round(p * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setTimeout(() => setVisible(false), 350);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[200] grid place-items-center bg-background"
        >
          <div className="flex flex-col items-center gap-6">
            <div className="relative">
              <div className="grid h-20 w-20 place-items-center rounded-2xl glass-strong">
                <span className="font-display text-3xl text-gradient">PS</span>
              </div>
              <div className="absolute -inset-3 rounded-3xl border border-primary/30 animate-[pulse-ring_2s_ease-in-out_infinite]" />
            </div>
            <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Loading Portfolio…
            </div>
            <div className="h-[2px] w-56 overflow-hidden rounded-full bg-white/5">
              <div
                className="h-full bg-gradient-to-r from-primary via-secondary to-highlight transition-[width] duration-100"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
