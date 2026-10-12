import { getExperience } from "../../lib/content";

export function Experience() {
  const entries = getExperience();

  return (
    <section
      id="experience"
      className="relative px-5 sm:px-8 lg:px-12 py-24 sm:py-32 border-b border-white/10 bg-[#080b12]"
    >
      <div className="max-w-7xl mx-auto space-y-14">
        {/* Folio Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-6 border-b border-white/10">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs text-amber-400">
              <span className="px-2 py-0.5 rounded-sm bg-amber-400/10 font-bold border border-amber-400/20">05</span>
              <span className="uppercase tracking-widest font-semibold">REKAM JEJAK &amp; PERJALANAN KARIER</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-[-0.03em] leading-tight">
              kronologi pengalaman profesional.
            </h2>
          </div>
          <span className="font-mono text-xs text-slate-500 uppercase">
            TIMELINE_RECORD: 2023 — 2026
          </span>
        </div>

        {/* Career Ledger Table */}
        <div className="rounded-2xl border border-white/10 bg-[#0e1422] divide-y divide-white/10 overflow-hidden shadow-xl">
          {entries.map((entry, idx) => {
            const indexStr = String(idx + 1).padStart(2, "0");
            const isWork = entry.type === "work";

            return (
              <div
                key={entry.slug}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 sm:p-8 hover:bg-white/[0.03] transition-colors duration-150 items-start group"
              >
                {/* Period & Category (Cols 1-3) */}
                <div className="lg:col-span-3 space-y-2 font-mono text-xs">
                  <div className="flex items-center gap-2">
                    <span className="text-amber-400 font-bold">#{indexStr}</span>
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-[10px] uppercase font-bold border ${
                        isWork
                          ? "bg-amber-400/10 border-amber-400/30 text-amber-300"
                          : "bg-white/5 border-white/10 text-slate-400"
                      }`}
                    >
                      {isWork ? "PENGALAMAN KERJA" : "PENDIDIKAN"}
                    </span>
                  </div>
                  <div className="text-white font-semibold text-sm pt-1">
                    {entry.period}
                  </div>
                </div>

                {/* Role & Org (Cols 4-6) */}
                <div className="lg:col-span-4 space-y-1">
                  <h3 className="font-display font-bold text-lg sm:text-xl text-white group-hover:text-amber-300 transition-colors leading-snug">
                    {entry.role}
                  </h3>
                  <p className="font-mono text-xs text-cyan-400 font-medium">
                    {entry.org}
                  </p>
                </div>

                {/* Scope & Impact (Cols 7-12) */}
                <div className="lg:col-span-5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {entry.body}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
