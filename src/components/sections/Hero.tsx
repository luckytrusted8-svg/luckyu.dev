import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { ArrowUpRight, PlayCircle } from "lucide-react";

import { StatusTerminal } from "../ui/StatusTerminal";
import { HeroBackdrop } from "../ui/HeroBackdrop";
import { fadeUp, staggerContainer } from "../../animations/variants";
import { cn } from "../../utils/cn";

const stack = [
  {
    name: "React",
    accent: "#61DAFB",
    logo: (
      <svg viewBox="-11.5 -10.23174 23 20.46348" className="h-14 w-14 text-white">
        <circle r="2.05" fill="currentColor" />
        <g stroke="currentColor" strokeWidth="1">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    ),
  },
  {
    name: "Next.js",
    accent: "#000000",
    logo: (
      <svg viewBox="0 0 128 128" className="h-14 w-14 text-white">
        <rect width="128" height="128" rx="24" fill="currentColor" />
        <path d="M42 38h14l24 46 22-46h12l-30 56 30 56h-14l-24-46-22 46H42l30-56-30-56Z" fill="white" />
      </svg>
    ),
  },
  {
    name: "Laravel",
    accent: "#FF2D20",
    logo: (
      <svg viewBox="0 0 120 120" className="h-14 w-14 text-white">
        <path d="M20 30h28l20 22.5L84 30h28v60H20V30Z" fill="currentColor" />
        <path d="M48 30 28 60v30h64V60L72 30" stroke="white" strokeWidth="6" fill="none" />
      </svg>
    ),
  },
  {
    name: "Express",
    accent: "#000000",
    logo: (
      <svg viewBox="0 0 128 128" className="h-14 w-14 text-white">
        <path d="M24 40c0-11 8-20 20-20h40c11 0 20 9 20 20v48c0 11-9 20-20 20H44c-11 0-20-9-20-20V40Z" fill="currentColor" />
        <path d="M46 56h36v12H46v20h20v12H46v12h36" stroke="white" strokeWidth="8" fill="none" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Tailwind",
    accent: "#38BDF8",
    logo: (
      <svg viewBox="0 0 128 128" className="h-14 w-14 text-white">
        <path d="M26 78c18 0 32-10 42-28 18 0 34 10 54 28-24 24-40 34-54 34-18 0-32-10-42-28Z" fill="currentColor" />
        <path d="M42 66c14 0 24-8 32-24 14 0 26 8 42 24-18 18-32 26-42 26-14 0-24-8-32-24Z" fill="white" opacity="0.95" />
      </svg>
    ),
  },
  {
    name: "Prisma",
    accent: "#7C3AED",
    logo: (
      <svg viewBox="0 0 128 128" className="h-14 w-14 text-white">
        <path d="M20 108 64 20 108 108H20Z" fill="currentColor" />
        <path d="M64 30 38 94h52L64 30Z" fill="white" opacity="0.8" />
      </svg>
    ),
  },
];

function getOffset(index: number, activeIndex: number) {
  const total = stack.length;
  const raw = index - activeIndex;
  const half = total / 2;
  if (raw > half) return raw - total;
  if (raw < -half) return raw + total;
  return raw;
}

// Susunan kata untuk headline word-by-word reveal.
// `highlight: true` pada kata-kata yang jadi satu frasa disorot (warna primary + underline).
const headlineWords = [
  { text: "Lucky", highlight: false },
  { text: ",", highlight: false },
  { text: "saya", highlight: true },
  { text: "membangun", highlight: true },
  { text: "produk,", highlight: true },
  { text: "bukan", highlight: false },
  { text: "sekadar", highlight: false },
  { text: "halaman.", highlight: false },
];

const wordVariants = {
  hidden: { opacity: 0, y: 16, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        setActiveIndex((current) => (current + 1) % stack.length);
      }
      if (event.key === "ArrowLeft") {
        setActiveIndex((current) => (current - 1 + stack.length) % stack.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const moveNext = () => setActiveIndex((current) => (current + 1) % stack.length);
  const movePrev = () => setActiveIndex((current) => (current - 1 + stack.length) % stack.length);
  const activeItem = stack[activeIndex];

  const handleDragEnd = (_: any, info: { offset: { x: number } }) => {
    if (info.offset.x > 60) movePrev();
    if (info.offset.x < -60) moveNext();
  };

  return (
    <section
      id="home"
      className="hero-section relative flex min-h-screen items-center overflow-hidden px-5 pt-24 pb-16 sm:px-10 lg:pt-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:36px_36px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-[0.04]" />

      <motion.div
        variants={staggerContainer(0.12)}
        initial="hidden"
        animate="show"
        className="hero-layout relative z-10 grid w-full max-w-6xl mx-auto items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]"
      >
        <div>
          <motion.p
            variants={fadeUp}
            className="font-mono text-xs uppercase tracking-[0.3em] text-primary font-semibold"
          >
            Halo, saya
          </motion.p>

          <motion.h1
            initial="hidden"
            animate="show"
            transition={{ delayChildren: 0.15, staggerChildren: 0.09 }}
            className="hero-title mt-3 text-5xl font-bold leading-[1.08] text-text sm:text-6xl lg:text-[3.4rem] tracking-tight"
          >
            {headlineWords.map((word, i) => (
              <motion.span
                key={i}
                variants={wordVariants}
                className={cn(
                  "relative inline-block",
                  word.highlight && "text-primary"
                )}
              >
                {word.text}
                {word.highlight && (
                  <svg
                    className="absolute -bottom-2 left-0 w-full h-2 text-primary/30"
                    viewBox="0 0 100 20"
                    preserveAspectRatio="none"
                  >
                    <path d="M0 15 Q 50 0 100 15" stroke="currentColor" strokeWidth="4" fill="none" />
                  </svg>
                )}
                {i < headlineWords.length - 1 ? "\u00A0" : ""}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p variants={fadeUp} className="hero-description mt-6 max-w-lg text-muted leading-relaxed text-base sm:text-lg">
            Full-stack developer dan mahasiswa Rekayasa Perangkat Lunak di Indonesia. Saya mengubah ide menjadi aplikasi web yang benar-benar jalan dari skema database sampai detail hover yang terakhir.
          </motion.p>

          <motion.div variants={fadeUp} className="hero-actions mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-white transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Lihat karya saya</span>
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 px-6 py-3.5 text-sm font-medium text-muted transition-all hover:text-text hover:border-text/30 hover:bg-surface"
            >
              <PlayCircle size={16} />
              Lebih lanjut tentang saya
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="hero-stack mt-12 pt-6 border-t border-border/40">
            <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-muted-dim font-medium">
              Stack yang saya pakai
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {stack.map((item, index) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "rounded-full border px-3 py-1.5 text-xs font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/30",
                    activeIndex === index
                      ? "border-primary bg-primary/10 text-text shadow-sm shadow-primary/10"
                      : "border-border/60 bg-surface/70 text-muted hover:border-primary/40 hover:text-text hover:bg-surface"
                  )}
                >
                  {item.name}
                </button>
              ))}
            </div>
            <p className="mt-4 max-w-xl text-sm text-muted">
              Klik badge, geser kartu, atau gunakan keyboard untuk berpindah antar teknologi dengan animasi halus.
            </p>
          </motion.div>
        </div>

        <motion.div variants={fadeUp} className="hero-visual relative mx-auto flex justify-center px-2 lg:justify-end">
          <div className="relative overflow-hidden rounded-[3rem] border border-border/50 bg-surface/70 p-4 backdrop-blur-xl sm:p-6 lg:p-8">
            <HeroBackdrop />

            <div className="relative mx-auto w-full max-w-[22rem] overflow-hidden rounded-[2.5rem] sm:max-w-[26rem] md:max-w-[30rem] lg:max-w-[34rem]">
              <motion.div
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.18}
                onDragEnd={handleDragEnd}
                className="relative mx-auto flex h-[24rem] w-full items-center justify-center sm:h-[28rem] md:h-[30rem] lg:h-[34rem]"
              >
              {stack.map((item, index) => {
                const offset = getOffset(index, activeIndex);
                const absOffset = Math.abs(offset);
                const x = offset * 72;
                const y = absOffset * 12;
                const rotate = offset * -8;
                const scale = offset === 0 ? 1 : 0.88;
                const opacity = offset === 0 ? 1 : 0.55;
                const blur = offset === 0 ? 0 : 1.5;

                return (
                  <motion.button
                    key={item.name}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    initial={false}
                    animate={{
                      x,
                      y,
                      rotate,
                      scale,
                      opacity,
                      filter: `blur(${blur}px)`,
                      zIndex: 30 - absOffset,
                    }}
                    transition={{ type: "spring", stiffness: 210, damping: 25, mass: 0.75 }}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[2.5rem] border border-border bg-surface/95 p-6 shadow-2xl shadow-black/10 backdrop-blur-xl focus:outline-none focus:ring-2 focus:ring-primary/25"
                  >
                    <div
                      className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-white/10 to-black/10"
                      style={{ boxShadow: offset === 0 ? "0 32px 140px rgba(15, 23, 42, 0.16)" : "0 18px 60px rgba(15, 23, 42, 0.08)" }}
                    />
                    <div className="relative flex h-full w-full flex-col justify-between gap-4">
                      <div>
                        <div className="flex h-16 w-16 items-center justify-center rounded-3xl" style={{ backgroundColor: item.accent, opacity: 0.16 }}>
                          {item.logo}
                        </div>
                        <div className="mt-6 text-sm font-mono uppercase tracking-[0.28em] text-muted">
                          Teknologi
                        </div>
                        <h2 className="mt-3 text-3xl font-semibold text-text">
                          {item.name}
                        </h2>
                      </div>

                      <div className="mt-4 flex items-center justify-between rounded-3xl border border-border/70 bg-black/10 p-4 text-sm text-muted shadow-sm shadow-black/5">
                        <div>
                          <p className="text-xs uppercase tracking-[0.2em] text-muted-dim">Aksen</p>
                          <p className="mt-1 font-semibold text-text" style={{ color: item.accent }}>
                            {item.accent}
                          </p>
                        </div>
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-xs font-semibold text-white/90" style={{ borderColor: item.accent }}>
                          {index + 1}
                        </span>
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </motion.div>
          </div>

            <div className="mt-5 rounded-[2rem] border border-border/70 bg-black/10 p-4 text-center shadow-sm shadow-black/5 sm:mt-6">
              <p className="text-[11px] uppercase tracking-[0.3em] text-muted-dim">Stack terpilih</p>
              <p className="mt-2 text-xl font-semibold text-text">{activeItem.name}</p>
              <div className="mx-auto mt-3 h-2 w-24 rounded-full" style={{ backgroundColor: activeItem.accent }} />
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <button
                type="button"
                onClick={movePrev}
                className="inline-flex w-full items-center justify-center rounded-full border border-border/60 bg-surface/80 px-4 py-3 text-sm font-medium text-muted transition hover:border-primary/40 hover:text-text hover:bg-surface sm:w-auto"
              >
                Previous
              </button>
              <button
                type="button"
                onClick={moveNext}
                className="inline-flex w-full items-center justify-center rounded-full border border-border/60 bg-surface/80 px-4 py-3 text-sm font-medium text-muted transition hover:border-primary/40 hover:text-text hover:bg-surface sm:w-auto"
              >
                Next
              </button>
            </div>

            <div className="hero-terminal absolute -bottom-4 -left-6 hidden sm:block z-40">
              <StatusTerminal />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
