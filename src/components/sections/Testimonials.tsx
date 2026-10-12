import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
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
      className="relative px-5 sm:px-8 lg:px-12 py-24 sm:py-32 border-b border-white/10 bg-[#080b12]"
    >
      <div className="max-w-7xl mx-auto space-y-14">
        {/* Folio Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-6 border-b border-white/10">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs text-amber-400">
              <span className="px-2 py-0.5 rounded-sm bg-amber-400/10 font-bold border border-amber-400/20">07</span>
              <span className="uppercase tracking-widest font-semibold">TESTIMONI &amp; KEPERCAYAAN KLIEN</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-[-0.03em] leading-tight">
              reputasi hasil kerja nyata.
            </h2>
          </div>

          {/* Stepper Controls */}
          <div className="flex items-center gap-3 font-mono text-xs">
            <span className="text-slate-500">
              [{String(index + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}]
            </span>
            <div className="flex items-center rounded-lg border border-white/10 bg-[#0e1422] overflow-hidden">
              <button
                type="button"
                onClick={() => go(index - 1)}
                aria-label="Testimoni sebelumnya"
                className="p-2.5 border-r border-white/10 text-slate-300 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                type="button"
                onClick={() => go(index + 1)}
                aria-label="Testimoni berikutnya"
                className="p-2.5 text-slate-300 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Cinematic Quote Plate */}
        <div className="rounded-3xl border border-white/15 bg-[#0e1422] p-8 sm:p-14 relative shadow-2xl overflow-hidden">
          <Quote
            size={120}
            className="absolute -right-6 -bottom-6 text-white/[0.03] pointer-events-none"
          />

          <div className="font-mono text-xs text-amber-400 mb-6 font-bold uppercase tracking-wider flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            <span>KUTIPAN_TERVERIFIKASI</span>
          </div>

          <blockquote className="font-display font-medium text-xl sm:text-2xl lg:text-3xl text-white leading-snug tracking-tight max-w-4xl">
            &ldquo;{current.body}&rdquo;
          </blockquote>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
            <div>
              <span className="font-bold text-sm text-white block">
                {current.name}
              </span>
              <span className="text-slate-400">
                {current.role}
              </span>
            </div>
            <div className="text-slate-500 uppercase tracking-wider text-[11px]">
              VERIFIKASI HUBUNGAN KERJA PRODUKSI
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
