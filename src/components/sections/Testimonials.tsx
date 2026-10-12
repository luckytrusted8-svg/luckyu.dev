import { getTestimonials } from "../../lib/content";
import { Quote } from "lucide-react";

export function Testimonials() {
  const testimonials = getTestimonials();

  return (
    <section
      id="testimonials"
      className="relative px-5 sm:px-8 lg:px-12 py-20 sm:py-28 bg-[#fafaf9] border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600 font-mono">
            <span>— Testimoni</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-[-0.03em] leading-tight">
            Apa Kata <span className="text-amber-500">Rekan &amp; Supervisor</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Catatan dan masukan nyata dari pembimbing selama pengerjaan proyek magang dan aplikasi sekolah.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-amber-400 hover:shadow-lg transition-all duration-200 flex flex-col justify-between space-y-6 shadow-xs"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
                  <Quote size={20} />
                </div>
                <p className="text-sm text-slate-700 leading-relaxed italic">
                  "{item.body}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#142d1f] text-amber-400 font-bold text-xs flex items-center justify-center">
                  {item.name.slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-900">{item.name}</h4>
                  <p className="text-xs text-slate-500">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
