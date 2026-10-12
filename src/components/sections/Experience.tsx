import { getExperience } from "../../lib/content";
import { Briefcase, GraduationCap } from "lucide-react";

export function Experience() {
  const entries = getExperience();

  return (
    <section
      id="experience"
      className="relative px-5 sm:px-8 lg:px-12 py-20 sm:py-28 bg-white border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600 font-mono">
              <span>— Rekam Jejak</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-[-0.03em] leading-tight">
              <span className="text-amber-500">Pengalaman</span> &amp; Riwayat Belajar
            </h2>
          </div>
          <span className="font-mono text-xs font-semibold text-slate-500 uppercase">
            2023 — Sekarang
          </span>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {entries.map((entry) => {
            const isWork = entry.type === "work";
            const Icon = isWork ? Briefcase : GraduationCap;

            return (
              <div
                key={entry.slug}
                className="p-7 rounded-2xl bg-[#fafaf9] border border-slate-200 hover:border-amber-400 hover:bg-white transition-all duration-200 space-y-4 shadow-xs hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      isWork ? "bg-amber-100 text-amber-800" : "bg-emerald-100 text-emerald-800"
                    }`}
                  >
                    <Icon size={18} />
                  </div>
                  <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-full bg-slate-200/80 text-slate-700">
                    {entry.period}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="font-display font-bold text-lg text-slate-900 leading-snug">
                    {entry.role}
                  </h3>
                  <p className="text-xs font-semibold text-amber-600 uppercase tracking-wide">
                    {entry.org}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-2 border-t border-slate-200/60">
                  {entry.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
