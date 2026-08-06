import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { getTestimonials } from "../../lib/content";
import { SectionHeading } from "../ui/SectionHeading";

export function Testimonials() {
  const testimonials = getTestimonials();
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  function go(next: number) {
    setDirection(next > index ? 1 : -1);
    setIndex((next + testimonials.length) % testimonials.length);
  }

  const current = testimonials[index];

  return (
    <section
      id="testimonials"
      className="relative px-5 py-24 sm:px-10 lg:py-32 border-t border-border/60 overflow-hidden"
    >
      {/* ambient glow, consistent with the rest of the dark theme */}
      <div className="pointer-events-none absolute right-[-10%] top-1/3 h-[380px] w-[380px] -translate-y-1/2 rounded-full bg-primary/10 blur-[110px]" />

<div className="relative mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Testimoni"
            heading="Kata mereka yang pernah bekerja bersama saya"
            index="07"
          />

          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-muted-dim">
              {String(index + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
            </span>
            <div className="flex gap-2">
              <button
                onClick={() => go(index - 1)}
                aria-label="Testimoni sebelumnya"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-primary-soft/50 hover:text-text"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={() => go(index + 1)}
                aria-label="Testimoni berikutnya"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-primary-soft/50 hover:text-text"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

        <div className="relative mt-12 max-w-2xl overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current.slug}
              custom={direction}
              initial={{ opacity: 0, x: 40 * direction }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 * direction }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-surface to-bg-elevated p-8 shadow-[0_20px_60px_-24px_rgba(139,92,246,0.35)] sm:p-10"
            >
              {/* oversized decorative quote mark */}
              <Quote
                size={120}
                strokeWidth={1}
                className="pointer-events-none absolute -right-4 -top-6 text-primary/[0.07]"
              />

              <Quote className="relative text-primary-soft" size={26} />
              <p className="relative mt-5 text-lg leading-relaxed text-text sm:text-xl">
                {current.body}
              </p>

              <div className="relative mt-8 flex items-center gap-3 border-t border-border/60 pt-6">
                <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary via-secondary to-accent p-[2px]">
                  <span className="flex h-full w-full items-center justify-center rounded-full bg-bg-elevated font-display text-sm font-semibold text-text">
                    {current.name.charAt(0)}
                  </span>
                </span>
                <div>
                  <p className="text-sm font-medium text-text">{current.name}</p>
                  <p className="text-xs text-muted">{current.role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-6 flex gap-2">
          {testimonials.map((t, i) => (
            <button
              key={t.slug}
              onClick={() => go(i)}
              aria-label={`Buka testimoni ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index
                  ? "w-8 bg-gradient-to-r from-primary via-secondary to-accent"
                  : "w-1.5 bg-border hover:bg-muted-dim"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
