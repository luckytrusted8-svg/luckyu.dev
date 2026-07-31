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
      className="px-5 py-24 sm:px-10 lg:py-32 border-t border-border/60"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Feedback" heading="What people I've worked with say" index="06" />
          
          {/* Tombol Navigasi Clean */}
          <div className="flex gap-2">
            <button
              onClick={() => go(index - 1)}
              aria-label="Previous testimonial"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted hover:text-text hover:border-text/30 transition-colors"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={() => go(index + 1)}
              aria-label="Next testimonial"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted hover:text-text hover:border-text/30 transition-colors"
            >
              <ChevronRight size={16} />
            </button>
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
              className="rounded-2xl border border-border bg-surface p-8 shadow-sm"
            >
              <Quote className="text-primary" size={28} />
              <p className="mt-4 text-lg leading-relaxed text-text">{current.body}</p>
              
              <div className="mt-6 flex items-center gap-3">
                {/* Avatar Inisial Solid Clean */}
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary font-display text-sm font-semibold text-white">
                  {current.name.charAt(0)}
                </span>
                <div>
                  <p className="text-sm font-medium text-text">{current.name}</p>
                  <p className="text-xs text-muted">{current.role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Indicator Dots */}
        <div className="mt-6 flex gap-2">
          {testimonials.map((t, i) => (
            <button
              key={t.slug}
              onClick={() => go(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-6 bg-primary" : "w-1.5 bg-border hover:bg-muted"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}