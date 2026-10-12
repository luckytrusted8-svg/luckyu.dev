import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { getTestimonials } from "../../lib/content";

export function Testimonials() {
  const testimonials = getTestimonials();
  const [index, setIndex] = useState(0);

  function go(next: number) {
    setIndex((next + testimonials.length) % testimonials.length);
  }

  const current = testimonials[index];

  return (
    <section
      id="testimonials"
      className="relative px-5 sm:px-8 lg:px-12 py-20 sm:py-28 border-b border-[var(--color-rule)] bg-[var(--color-paper)]"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header Folio */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-6 border-b border-[var(--color-rule)]">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs text-[var(--color-ink-muted)]">
              <span className="px-2 py-0.5 bg-[var(--color-ink)] text-white font-bold">07</span>
              <span className="uppercase tracking-widest font-semibold">TESTIMONI & TESTIMONI KLIEN</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-[var(--color-ink)] tracking-[-0.035em] leading-tight">
              reputasi hasil kerja nyata.
            </h2>
          </div>

          {/* Controller */}
          <div className="flex items-center gap-3 font-mono text-xs">
            <span className="text-[var(--color-ink-dim)]">
              [{String(index + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}]
            </span>
            <div className="flex items-center border border-[var(--color-rule)] bg-white">
              <button
                type="button"
                onClick={() => go(index - 1)}
                aria-label="Testimoni sebelumnya"
                className="p-2.5 border-r border-[var(--color-rule)] text-[var(--color-ink)] hover:bg-[var(--color-paper-2)] transition-colors cursor-pointer"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                type="button"
                onClick={() => go(index + 1)}
                aria-label="Testimoni berikutnya"
                className="p-2.5 text-[var(--color-ink)] hover:bg-[var(--color-paper-2)] transition-colors cursor-pointer"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Editorial Quote Box */}
        <div className="border border-[var(--color-ink)] bg-white p-8 sm:p-14 relative">
          <div className="font-mono text-xs text-[var(--color-signal)] mb-6 font-bold uppercase tracking-wider">
            &ldquo; KUTIPAN_TERVERIFIKASI &rdquo;
          </div>

          <blockquote className="font-display font-medium text-xl sm:text-2xl lg:text-3xl text-[var(--color-ink)] leading-snug tracking-tight max-w-4xl">
            &ldquo;{current.body}&rdquo;
          </blockquote>

          <div className="mt-8 pt-6 border-t border-[var(--color-rule)] flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
            <div>
              <span className="font-bold text-sm text-[var(--color-ink)] block">
                {current.name}
              </span>
              <span className="text-[var(--color-ink-muted)]">
                {current.role}
              </span>
            </div>
            <div className="text-[var(--color-ink-dim)] uppercase tracking-wider text-[11px]">
              VERIFIKASI HUBUNGAN KERJA
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
