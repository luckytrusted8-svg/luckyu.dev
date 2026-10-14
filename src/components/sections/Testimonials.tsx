import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getTestimonials } from "../../lib/content";
import { useLanguage } from "../../context/LanguageContext";

export function Testimonials() {
  const testimonials = getTestimonials();
  const [currentIndex, setCurrentIndex] = useState(0);
  const { language, t } = useLanguage();

  function handlePrev() {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : testimonials.length - 1));
  }

  function handleNext() {
    setCurrentIndex((prev) => (prev < testimonials.length - 1 ? prev + 1 : 0));
  }

  // Rotate items based on currentIndex so clicking prev/next shifts cards smoothly
  const displayed = testimonials
    .map((_, i) => testimonials[(currentIndex + i) % testimonials.length])
    .slice(0, 3);

  return (
    <section
      id="testimonials"
      className="relative px-5 sm:px-8 lg:px-12 py-20 sm:py-28 bg-[#f8f9fa] border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Centered Header matching Behance Image 3 */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-500 font-mono">
            <span className="w-5 h-[2px] bg-amber-500 inline-block"></span>
            <span>{t("Testimoni Rekan & Klien", "Client's Testimonials")}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-[-0.03em] leading-tight">
            {language === "id" ? (
              <>
                Dampak &amp; Hasil Kerja:<br />
                <span className="text-amber-500">Testimoni Rekan &amp; Klien</span>
              </>
            ) : (
              <>
                The Impact of My Work:<br />
                <span className="text-amber-500">Client Testimonials</span>
              </>
            )}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {t(
              "Catatan dan penilaian nyata dari rekan kerja serta pembimbing teknis selama pengembangan sistem aplikasi.",
              "Real feedback and testimonials from project supervisors and teammates during technical application development."
            )}
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayed.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200/90 rounded-[28px] p-7 sm:p-8 shadow-xs hover:shadow-xl hover:border-amber-400/80 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group min-h-[280px]"
            >
              {/* Top: 5 Stars + 5.0 Rating */}
              <div>
                <div className="flex items-center gap-2 mb-5">
                  <div className="flex text-amber-400 text-base tracking-wider">
                    ★★★★★
                  </div>
                  <span className="font-black text-slate-900 text-sm">5.0</span>
                </div>

                {/* Testimonial Quote */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed relative z-10">
                  "{item.body}"
                </p>
              </div>

              {/* Bottom: Client Profile */}
              <div className="pt-6 border-t border-slate-100 flex items-center gap-3.5 relative z-10 mt-6">
                <div className="w-10 h-10 rounded-full bg-[#142d1f] text-amber-400 font-bold text-xs flex items-center justify-center shrink-0 border border-amber-400/30">
                  {item.name.slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-900 leading-tight">
                    {item.name}
                  </h4>
                  <p className="text-xs text-slate-500 leading-tight mt-0.5">
                    {item.role}
                  </p>
                </div>
              </div>

              {/* Faint Background Quotation Mark Glyph */}
              <div
                className="text-slate-100 group-hover:text-amber-50 text-8xl font-serif absolute -bottom-4 right-4 pointer-events-none select-none z-0 transition-colors"
                aria-hidden="true"
              >
                “
              </div>
            </div>
          ))}
        </div>

        {/* Centered Navigation Buttons matching Behance Image 3 */}
        <div className="flex items-center justify-center gap-3 pt-4">
          <button
            type="button"
            onClick={handlePrev}
            className="w-11 h-11 rounded-full bg-[#142d1f] hover:bg-[#0d1e14] text-white flex items-center justify-center transition-all cursor-pointer shadow-sm hover:scale-105 active:scale-95"
            aria-label="Previous Testimonials"
          >
            <ArrowLeft size={18} />
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="w-11 h-11 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 flex items-center justify-center transition-all cursor-pointer shadow-sm hover:scale-105 active:scale-95"
            aria-label="Next Testimonials"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
