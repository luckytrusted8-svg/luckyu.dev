import { motion } from "framer-motion";
import { Activity, Braces, Cpu, Layers3 } from "lucide-react";

/**
 * Decorative "holographic scene" that sits behind the hero's main visual
 * (avatar card / laptop mockup). Built entirely in CSS + SVG + Framer Motion
 * — no external image needed, so it inherits the site's exact color tokens
 * and stays crisp at any size.
 *
 * Usage: place `<HeroBackdrop />` as the FIRST child inside the hero's
 * right-hand column, right before the avatar/laptop card, and give that
 * column `relative`. It's `pointer-events-none` and z-indexed behind
 * everything else, so it won't block clicks or floating badges.
 */

const floatY = (distance: number, duration: number, delay = 0) => ({
  animate: { y: [0, -distance, 0] },
  transition: { duration, delay, repeat: Infinity, ease: [0.42, 0, 0.58, 1] as const },
});

const floatRotate = (degrees: number, duration: number, delay = 0) => ({
  animate: { rotate: [0, degrees, 0] },
  transition: { duration, delay, repeat: Infinity, ease: "easeInOut" as const },
});

export function HeroBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-visible select-none">
      {/* ambient glow orbs — depth layer 1 */}
      <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/25 blur-[100px]" />
      <div className="absolute -right-10 top-4 h-56 w-56 rounded-full bg-secondary/20 blur-[80px]" />
      <div className="absolute -left-6 bottom-6 h-52 w-52 rounded-full bg-accent/15 blur-[80px]" />

      {/* faint radial grid, gives the "holographic surface" feel */}
      <div
        className="absolute inset-0 opacity-[0.12] [mask-image:radial-gradient(ellipse_55%_55%_at_50%_50%,#000_40%,transparent_80%)]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #8b5cf633 1px, transparent 1px), linear-gradient(to bottom, #8b5cf633 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* floating glass panel: mini code snippet */}
      <motion.div
        {...floatY(10, 4.2)}
        className="absolute left-[2%] top-[8%] w-32 rounded-xl border border-border bg-surface/60 p-3 shadow-lg backdrop-blur-md"
      >
        <div className="flex items-center gap-1.5">
          <Braces size={12} className="text-primary-soft" />
          <span className="font-mono text-[9px] text-muted-dim">index.tsx</span>
        </div>
        <div className="mt-2 space-y-1">
          <div className="h-1 w-5/6 rounded bg-primary/40" />
          <div className="h-1 w-2/3 rounded bg-secondary/30" />
          <div className="h-1 w-4/5 rounded bg-white/10" />
        </div>
      </motion.div>

      {/* floating glass panel: mini stat / data-viz card */}
      <motion.div
        {...floatY(12, 5, 0.6)}
        className="absolute right-[0%] bottom-[14%] w-28 rounded-xl border border-border bg-surface/60 p-3 shadow-lg backdrop-blur-md"
      >
        <div className="flex items-center gap-1.5">
          <Activity size={12} className="text-accent" />
          <span className="font-mono text-[9px] text-muted-dim">uptime</span>
        </div>
        <div className="mt-2 flex items-end gap-[3px]">
          {[6, 10, 7, 13, 9, 15].map((h, i) => (
            <span
              key={i}
              className="w-1.5 rounded-sm bg-gradient-to-t from-primary to-accent"
              style={{ height: h }}
            />
          ))}
        </div>
      </motion.div>

      {/* floating glass panel: system / process ring */}
      <motion.div
        {...floatY(8, 3.6, 1)}
        className="absolute left-[4%] bottom-[6%] flex items-center gap-2 rounded-xl border border-border bg-surface/60 px-3 py-2 shadow-lg backdrop-blur-md"
      >
        <Cpu size={13} className="text-secondary" />
        <span className="font-mono text-[9px] text-muted-dim">build: ok</span>
      </motion.div>

      {/* rotating outlined geometric shapes */}
      <motion.svg
        {...floatRotate(360, 40)}
        className="absolute right-[6%] top-[4%] h-16 w-16 text-primary/30"
        viewBox="0 0 100 100"
        fill="none"
      >
        <circle cx="50" cy="50" r="42" stroke="currentColor" strokeWidth="1.4" strokeDasharray="6 8" />
      </motion.svg>

      <motion.div
        {...floatRotate(-45, 9, 0.4)}
        className="absolute right-[16%] top-[36%] h-8 w-8 rounded-md border border-secondary/40"
      />

      <motion.div
        {...floatY(9, 4.6, 0.8)}
        className="absolute left-[14%] top-[42%]"
      >
        <Layers3 size={22} className="text-accent/50" />
      </motion.div>

      {/* soft twinkling particles */}
      {[
        { top: "12%", left: "38%", size: 4, delay: 0 },
        { top: "22%", left: "70%", size: 3, delay: 0.5 },
        { top: "60%", left: "20%", size: 3, delay: 1 },
        { top: "72%", left: "62%", size: 4, delay: 1.4 },
        { top: "45%", left: "88%", size: 3, delay: 0.8 },
        { top: "85%", left: "40%", size: 3, delay: 0.3 },
      ].map((p, i) => (
        <motion.span
          key={i}
          animate={{ opacity: [0.15, 0.8, 0.15], scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: 3 + i * 0.4, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
          className="absolute rounded-full bg-primary-soft shadow-[0_0_8px_2px_rgba(139,92,246,0.5)]"
          style={{ top: p.top, left: p.left, width: p.size, height: p.size }}
        />
      ))}
    </div>
  );
}
