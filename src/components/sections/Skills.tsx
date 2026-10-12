import { useState } from "react";
import { getSkills } from "../../lib/content";

export function Skills() {
  const { categories } = getSkills();
  const [activeTab, setActiveTab] = useState(0);
  const active = categories[activeTab];

  return (
    <section
      id="skills"
      className="relative px-5 sm:px-8 lg:px-12 py-24 sm:py-32 border-b border-white/10 bg-[#080b12]"
    >
      <div className="max-w-7xl mx-auto space-y-14">
        {/* Folio Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-6 border-b border-white/10">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs text-amber-400">
              <span className="px-2 py-0.5 rounded-sm bg-amber-400/10 font-bold border border-amber-400/20">04</span>
              <span className="uppercase tracking-widest font-semibold">KOMPETENSI TEKNIS &amp; STACK MATRIX</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-[-0.03em] leading-tight">
              sistem perangkat &amp; ekosistem kode.
            </h2>
          </div>
          <span className="font-mono text-xs text-amber-400 uppercase font-semibold">
            VERIFIKASI_PRODUKSI: 2026
          </span>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2 font-mono text-xs pb-2">
          {categories.map((cat, i) => (
            <button
              key={cat.name}
              type="button"
              onClick={() => setActiveTab(i)}
              className={`px-4 py-2 rounded-full border transition-all cursor-pointer uppercase ${
                activeTab === i
                  ? "bg-amber-400 text-slate-950 border-amber-400 font-bold shadow-[0_0_15px_rgba(245,158,11,0.3)]"
                  : "bg-white/5 text-slate-400 border-white/10 hover:border-white/20 hover:text-white"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Technical Ledger Matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {active.skills.map((skill, idx) => {
            const indexStr = String(idx + 1).padStart(2, "0");
            return (
              <div
                key={skill.name}
                className="p-6 rounded-2xl bg-[#0e1422] border border-white/10 hover:border-amber-400/35 transition-all duration-300 space-y-4 shadow-lg group"
              >
                <div className="flex items-center justify-between border-b border-white/10 pb-3 font-mono text-xs">
                  <span className="text-amber-400 font-bold">
                    ITEM_{indexStr}
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-slate-300 text-[10px] uppercase font-semibold">
                    AKTIF
                  </span>
                </div>

                <div>
                  <h3 className="font-display font-bold text-lg text-white group-hover:text-amber-300 transition-colors">
                    {skill.name}
                  </h3>
                  <p className="mt-1 text-xs text-slate-400 font-mono leading-relaxed">
                    Penerapan langsung pada sistem web produksi, arsitektur modular, dan integrasi API.
                  </p>
                </div>

                <div className="pt-2 flex items-center gap-2 font-mono text-[11px] text-slate-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Standar Produksi &bull; Siap Pakai</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
