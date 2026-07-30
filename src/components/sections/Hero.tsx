import { motion } from "framer-motion";
import { ArrowUpRight, PlayCircle } from "lucide-react";
import { StatusTerminal } from "../ui/StatusTerminal";
import { fadeUp, staggerContainer } from "../../animations/variants";

const stack = ["React", "Next.js", "Laravel", "Express", "Tailwind", "Prisma"];

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-5 pt-24 pb-16 sm:px-10 lg:pt-32"
    >
      {/* ambient gradient blobs */}
      <div className="pointer-events-none absolute -top-40 right-[-10%] h-[420px] w-[420px] rounded-full bg-primary/25 blur-[120px] animate-float-slow" />
      <div className="pointer-events-none absolute bottom-[-15%] left-[5%] h-[360px] w-[360px] rounded-full bg-secondary/20 blur-[110px] animate-float" />
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-[0.15] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,black,transparent)]" />

      <motion.div
        variants={staggerContainer(0.12)}
        initial="hidden"
        animate="show"
        className="relative z-10 grid w-full max-w-6xl mx-auto items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]"
      >
        <div>
          <motion.p
            variants={fadeUp}
            className="font-mono text-xs uppercase tracking-[0.3em] text-primary-soft"
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="mt-4 text-5xl font-bold leading-[1.05] text-text sm:text-6xl lg:text-[3.4rem]"
          >
            Lucky —{" "}
            <span className="text-gradient">I build products,</span> not just pages.
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-6 max-w-lg text-muted leading-relaxed">
            Full-stack developer and Software Engineering student in Indonesia. I turn
            ideas into working web applications — from the database schema to the last
            hover state.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary via-secondary to-accent px-6 py-3 text-sm font-medium text-white shadow-[0_8px_30px_-8px_rgba(139,92,246,0.55)] transition-transform hover:-translate-y-0.5"
            >
              View my work
              <ArrowUpRight size={16} />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-muted transition-colors hover:text-text hover:border-primary-soft"
            >
              <PlayCircle size={16} />
              More about me
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-14">
            <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-muted-dim">
              Stack I ship with
            </p>
            <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
              {stack.map((s) => (
                <span key={s} className="font-display text-sm text-muted">
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div variants={fadeUp} className="relative mx-auto flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute inset-0 -z-10 scale-110 rounded-full bg-gradient-to-br from-primary via-secondary to-accent opacity-40 blur-2xl" />
            <div className="relative h-72 w-72 overflow-hidden rounded-[2rem] border border-border bg-surface sm:h-80 sm:w-80">
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/30 via-secondary/20 to-accent/20">
                <span className="font-display text-7xl font-bold text-white/90">L</span>
              </div>
            </div>
            <div className="absolute -bottom-8 -left-10 hidden sm:block">
              <StatusTerminal />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
