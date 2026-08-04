import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface Stage {
  at: number;
  label: string;
}

// Persis tabel status yang diminta: persentase → status text
const STAGES: Stage[] = [
  { at: 0, label: "Initializing..." },
  { at: 12, label: "Loading Interface..." },
  { at: 28, label: "Building Components..." },
  { at: 47, label: "Rendering Experience..." },
  { at: 66, label: "Optimizing Performance..." },
  { at: 81, label: "Finalizing..." },
  { at: 95, label: "Preparing Portfolio..." },
  { at: 100, label: "Welcome." },
];

function labelForPercent(pct: number): string {
  let label = STAGES[0].label;
  for (const stage of STAGES) {
    if (pct >= stage.at) label = stage.label;
  }
  return label;
}

// Titik-titik partikel tersebar, posisi tetap (bukan random tiap render)
// biar gak "meloncat" saat re-render.
const PARTICLES = [
  { top: "18%", left: "22%", size: 2, duration: 7, delay: 0 },
  { top: "72%", left: "16%", size: 3, duration: 9, delay: 1.2 },
  { top: "30%", left: "82%", size: 2, duration: 8, delay: 0.6 },
  { top: "64%", left: "78%", size: 3, duration: 10, delay: 2 },
  { top: "12%", left: "58%", size: 2, duration: 8.5, delay: 1.6 },
  { top: "85%", left: "48%", size: 2, duration: 7.5, delay: 0.3 },
  { top: "46%", left: "8%", size: 2, duration: 9.5, delay: 2.4 },
  { top: "40%", left: "92%", size: 2, duration: 8, delay: 1 },
];

interface LoadingScreenProps {
  /** Called once the count-up + hold is complete — parent starts the exit/reveal. */
  onFinished: () => void;
  /** Total duration of the 0→100 count, in ms. */
  duration?: number;
}

export function LoadingScreen({ onFinished, duration = 2600 }: LoadingScreenProps) {
  const [percent, setPercent] = useState(0);
  const [pulsing, setPulsing] = useState(false);
  const finishedRef = useRef(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      // Skip the theatrics — jump straight to done.
      setPercent(100);
      onFinished();
      return;
    }

    let raf = 0;
    const start = performance.now();

    function tick(now: number) {
      const elapsed = now - start;
      const t = Math.min(elapsed / duration, 1);
      // Ease-out cubic — quick start, gentle deceleration into 100%.
      const eased = 1 - Math.pow(1 - t, 3);
      const next = Math.round(eased * 100);

      setPercent(next);

      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else if (!finishedRef.current) {
        finishedRef.current = true;
        setPulsing(true);
        // Hold ~500ms on "Welcome." before handing off to the reveal.
        window.setTimeout(onFinished, 500);
      }
    }

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [duration]);

  const label = labelForPercent(percent);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-[999] flex items-center justify-center bg-bg"
      role="status"
      aria-live="polite"
      aria-label={`Loading, ${percent} percent, ${label}`}
    >
      {/* grain halus, sedikit "bergerak" via background-position */}
      <div className="loading-grain pointer-events-none absolute inset-0 opacity-[0.05]" />

      {/* partikel melayang pelan */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {PARTICLES.map((p, i) => (
          <motion.span
            key={i}
            animate={{ y: [0, -14, 0], opacity: [0.15, 0.55, 0.15] }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute rounded-full bg-primary-soft"
            style={{ top: p.top, left: p.left, width: p.size, height: p.size }}
          />
        ))}
      </div>

      {/* konten tengah */}
      <div className="relative flex flex-col items-center px-6 text-center">
        <motion.div
          animate={
            pulsing
              ? { scale: [1, 1.08, 1] }
              : { y: [0, -6, 0] }
          }
          transition={
            pulsing
              ? { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
              : { duration: 3.4, repeat: Infinity, ease: [0.42, 0, 0.58, 1] }
          }
          className="font-display text-2xl font-semibold tracking-tight text-text sm:text-3xl"
          style={{
            textShadow:
              "0 0 24px rgba(139,92,246,0.45), 0 0 48px rgba(59,130,246,0.25)",
          }}
        >
          Luckyu<span className="text-primary-soft">.dev</span>
        </motion.div>

        {/* garis progress tipis */}
        <div className="relative mt-8 h-px w-56 overflow-hidden rounded-full bg-white/10 sm:w-72">
          <motion.div
            className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-primary via-secondary to-accent"
            style={{
              width: `${percent}%`,
              boxShadow: "0 0 10px 1px rgba(139,92,246,0.6)",
            }}
          />
        </div>

        {/* persentase besar */}
        <div className="mt-6 font-mono text-5xl font-semibold tabular-nums text-text sm:text-6xl">
          {percent}
          <span className="text-2xl text-muted-dim sm:text-3xl">%</span>
        </div>

        {/* status text, fade antar state */}
        <div className="mt-3 h-5">
          <AnimatePresence mode="wait">
            <motion.p
              key={label}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="font-mono text-xs uppercase tracking-[0.2em] text-muted-dim"
            >
              {label}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
