export function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(1200px 800px at 15% 0%, oklch(0.68 0.13 55 / 0.12), transparent 60%), radial-gradient(900px 700px at 85% 30%, oklch(0.66 0.04 120 / 0.10), transparent 65%), radial-gradient(700px 500px at 50% 100%, oklch(0.94 0.03 85 / 0.06), transparent 60%)",
        }}
      />
      {/* Blob 1 */}
      <div
        className="absolute -top-40 -left-32 h-[520px] w-[520px] rounded-full blur-3xl opacity-40 animate-drift"
        style={{ background: "radial-gradient(circle, oklch(0.68 0.13 55 / 0.35), transparent 65%)" }}
      />
      {/* Blob 2 */}
      <div
        className="absolute top-1/3 right-[-120px] h-[480px] w-[480px] rounded-full blur-3xl opacity-30 animate-drift"
        style={{
          background: "radial-gradient(circle, oklch(0.66 0.04 120 / 0.35), transparent 65%)",
          animationDelay: "-6s",
        }}
      />
      {/* Blob 3 */}
      <div
        className="absolute bottom-[-160px] left-1/3 h-[600px] w-[600px] rounded-full blur-3xl opacity-25 animate-drift"
        style={{
          background: "radial-gradient(circle, oklch(0.94 0.03 85 / 0.25), transparent 65%)",
          animationDelay: "-12s",
        }}
      />
      {/* Grain / noise dots */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.18] mix-blend-overlay"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="n">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
          <feColorMatrix values="0 0 0 0 0.85  0 0 0 0 0.78  0 0 0 0 0.6  0 0 0 0.4 0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#n)" />
      </svg>
      {/* Floating dust particles */}
      <Dust />
    </div>
  );
}

function Dust() {
  const dots = Array.from({ length: 40 });
  return (
    <div className="absolute inset-0">
      {dots.map((_, i) => {
        const size = Math.random() * 2.5 + 0.5;
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const delay = Math.random() * 6;
        const duration = 8 + Math.random() * 10;
        return (
          <span
            key={i}
            className="absolute rounded-full bg-highlight/40"
            style={{
              width: size,
              height: size,
              left: `${left}%`,
              top: `${top}%`,
              boxShadow: "0 0 8px oklch(0.94 0.03 85 / 0.6)",
              animation: `float-slow ${duration}s ease-in-out ${delay}s infinite`,
            }}
          />
        );
      })}
    </div>
  );
}
