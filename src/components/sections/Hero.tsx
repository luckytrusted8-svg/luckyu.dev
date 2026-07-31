import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";

import { ArrowUpRight, PlayCircle, Sparkles } from "lucide-react";

import { StatusTerminal } from "../ui/StatusTerminal";
import { fadeUp, staggerContainer } from "../../animations/variants";

const stack = ["React", "Next.js", "Laravel", "Express", "Tailwind", "Prisma"];

// Helper Animasi Floating untuk Badges
const floatingAnimation = (
  delay = 0,
  duration = 3.5
): Pick<HTMLMotionProps<"div">, "animate" | "transition"> => ({
  animate: {
    y: [0, -8, 0],
  },
  transition: {
    duration,
    delay,
    repeat: Infinity,
    repeatType: "reverse",
    ease: [0.42, 0, 0.58, 1],
  },
});

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-5 pt-24 pb-16 sm:px-10 lg:pt-32"
    >
      {/* Subtle Background Grid Line & Grain */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:36px_36px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-[0.04]" />

      <motion.div
        variants={staggerContainer(0.12)}
        initial="hidden"
        animate="show"
        className="relative z-10 grid w-full max-w-6xl mx-auto items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]"
      >
        {/* === KOLOM KIRI: CONTENT === */}
        <div>
          <motion.p
            variants={fadeUp}
            className="font-mono text-xs uppercase tracking-[0.3em] text-primary font-semibold"
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="mt-3 text-5xl font-bold leading-[1.08] text-text sm:text-6xl lg:text-[3.4rem] tracking-tight"
          >
            Lucky —{" "}
            <span className="relative inline-block text-primary">
              I build products,
              <svg className="absolute -bottom-2 left-0 w-full h-2 text-primary/30" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M0 15 Q 50 0 100 15" stroke="currentColor" strokeWidth="4" fill="none" />
              </svg>
            </span>{" "}
            not just pages.
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-6 max-w-lg text-muted leading-relaxed text-base sm:text-lg">
            Full-stack developer and Software Engineering student in Indonesia. I turn
            ideas into working web applications — from the database schema to the last
            hover state.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-white transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>View my work</span>
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 px-6 py-3.5 text-sm font-medium text-muted transition-all hover:text-text hover:border-text/30 hover:bg-surface"
            >
              <PlayCircle size={16} />
              More about me
            </a>
          </motion.div>

          {/* Tech Stack Chips */}
          <motion.div variants={fadeUp} className="mt-12 pt-6 border-t border-border/40">
            <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-muted-dim font-medium">
              Stack I ship with
            </p>
            <div className="mt-3.5 flex flex-wrap gap-2">
              {stack.map((s) => (
                <span
                  key={s}
                  className="rounded-lg border border-border/60 bg-surface/60 px-3 py-1.5 font-mono text-xs text-muted transition-colors hover:border-primary/40 hover:text-text hover:bg-surface"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* === KOLOM KANAN: AVATAR CARD & FLOATING BADGES === */}
        <motion.div variants={fadeUp} className="relative mx-auto flex justify-center lg:justify-end">
          <div className="relative p-6 sm:p-8">
            
            {/* FLOATING TECH BADGES */}
            
            {/* React Badge */}
            <motion.div
              {...floatingAnimation(0, 3.4)}
              className="absolute top-2 -right-2 sm:-right-4 z-30 flex items-center gap-2.5 rounded-xl border border-border bg-surface/90 backdrop-blur-md px-3.5 py-2 shadow-md transition-all hover:scale-105 select-none"
            >
              <svg className="h-5 w-5 fill-none stroke-[#61DAFB]" viewBox="-11.5 -10.23174 23 20.46348">
                <circle r="2.05" fill="#61DAFB" />
                <g stroke="#61DAFB" strokeWidth="1">
                  <ellipse rx="11" ry="4.2" />
                  <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                  <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                </g>
              </svg>
              <span className="font-mono text-xs font-semibold text-text">React</span>
            </motion.div>

            {/* Laravel Badge */}
            <motion.div
              {...floatingAnimation(0.8, 3.8)}
              className="absolute top-12 -left-4 sm:-left-8 z-30 flex items-center gap-2.5 rounded-xl border border-border bg-surface/90 backdrop-blur-md px-3.5 py-2 shadow-md transition-all hover:scale-105 select-none"
            >
              <svg className="h-5 w-5 fill-[#FF2D20]" viewBox="0 0 24 24">
                <path d="M22.5 14.5L12 20.5L1.5 14.5V9.5L12 15.5L22.5 9.5V14.5ZM12 3.5L22.5 9.5L12 15.5L1.5 9.5L12 3.5Z" />
              </svg>
              <span className="font-mono text-xs font-semibold text-text">Laravel</span>
            </motion.div>

            {/* Next.js Badge */}
            <motion.div
              {...floatingAnimation(1.2, 3.6)}
              className="absolute bottom-20 -right-4 sm:-right-8 z-30 flex items-center gap-2.5 rounded-xl border border-border bg-surface/90 backdrop-blur-md px-3.5 py-2 shadow-md transition-all hover:scale-105 select-none"
            >
              <svg className="h-5 w-5" viewBox="0 0 180 180" fill="none">
                <circle cx="90" cy="90" r="90" fill="currentColor" className="text-text" />
                <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="white" />
                <rect x="115" y="54" width="12" height="72" fill="white" />
              </svg>
              <span className="font-mono text-xs font-semibold text-text">Next.js</span>
            </motion.div>

            {/* MAIN AVATAR CARD */}
            <div className="group relative z-10 h-72 w-72 overflow-hidden rounded-[2.5rem] border border-border bg-surface p-2 sm:h-80 sm:w-80 shadow-md transition-all duration-300 hover:border-primary/40 hover:shadow-xl">
              <div className="relative h-full w-full overflow-hidden rounded-[2rem] bg-surface-hover">
                
                {/* Foto Utama Profil */}
                <img
                  src="/image.png"
                  alt="Lucky"
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />

                {/* Subtle Gradient Overlay untuk Teks di Atas & Bawah */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />

                {/* Top Badge Inside Card */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <span className="flex items-center gap-1.5 rounded-full border border-white/10 bg-black/40 px-2.5 py-1 text-[10px] font-mono text-white/90 backdrop-blur-md">
                    <Sparkles size={12} className="text-primary" />
                    <span>Software Dev</span>
                  </span>
                  <span className="flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                </div>

                {/* Bottom Info inside Card */}
                <div className="absolute bottom-4 left-0 right-0 text-center z-10">
                  <p className="font-mono text-[11px] text-white/80 font-medium">Based in Indonesia 🇮🇩</p>
                </div>

              </div>
            </div>

            {/* Status Terminal (Bisa digeser) */}
            <div className="absolute -bottom-4 -left-6 hidden sm:block z-40">
              <StatusTerminal />
            </div>

          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}