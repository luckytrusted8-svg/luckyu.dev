import { useState } from "react";
import { getSkills } from "../../lib/content";

export function Skills() {
  const { categories } = getSkills();
  const [activeTab, setActiveTab] = useState(0);
  const active = categories[activeTab];

  return (
    <section
      id="skills"
      className="relative px-5 sm:px-8 lg:px-12 py-20 sm:py-28 border-b border-[var(--color-rule)] bg-[var(--color-paper)]"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header Folio */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-6 border-b border-[var(--color-rule)]">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs text-[var(--color-ink-muted)]">
              <span className="px-2 py-0.5 bg-[var(--color-ink)] text-white font-bold">04</span>
              <span className="uppercase tracking-widest font-semibold">KOMPETENSI TEKNIS & STACK MATRIX</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-[var(--color-ink)] tracking-[-0.035em] leading-tight">
              sistem perangkat & ekosistem kode.
            </h2>
          </div>
          <span className="font-mono text-xs text-[var(--color-signal)] uppercase font-semibold">
            VERIFIKASI_PRODUKSI: 2026
          </span>
        </div>

        {/* Category Tabs (Swiss Architectural Tabs) */}
        <div className="flex flex-wrap items-center gap-2 font-mono text-xs border-b border-[var(--color-rule)] pb-4">
          {categories.map((cat, i) => (
            <button
              key={cat.name}
              type="button"
              onClick={() => setActiveTab(i)}
              className={`px-4 py-2 border transition-colors cursor-pointer uppercase ${
                activeTab === i
                  ? "bg-[var(--color-ink)] text-white border-[var(--color-ink)] font-bold"
                  : "bg-white text-[var(--color-ink-muted)] border-[var(--color-rule)] hover:border-[var(--color-ink)] hover:text-[var(--color-ink)]"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Technical Ledger Matrix (Ruled Grid, No Fake Percentages) */}
        <div className="border border-[var(--color-rule)] bg-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[var(--color-rule)]">
          {active.skills.map((skill, idx) => {
            const indexStr = String(idx + 1).padStart(2, "0");
            return (
              <div
                key={skill.name}
                className="p-6 space-y-4 hover:bg-[var(--color-paper-2)] transition-colors duration-150"
              >
                <div className="flex items-center justify-between border-b border-[var(--color-rule)] pb-2 font-mono text-xs">
                  <span className="text-[var(--color-signal)] font-bold">
                    ITEM_{indexStr}
                  </span>
                  <span className="px-2 py-0.5 bg-[var(--color-paper-3)] text-[var(--color-ink)] text-[10px] uppercase font-semibold">
                    AKTIF
                  </span>
                </div>

                <div>
                  <h3 className="font-display font-bold text-lg text-[var(--color-ink)]">
                    {skill.name}
                  </h3>
                  <p className="mt-1 text-xs text-[var(--color-ink-muted)] font-mono leading-relaxed">
                    Penerapan langsung pada sistem web produksi, arsitektur modular, dan integrasi API.
                  </p>
                </div>

                <div className="pt-2 flex items-center gap-2 font-mono text-[11px] text-[var(--color-ink-dim)]">
                  <span className="w-1.5 h-1.5 bg-[var(--color-signal)]" />
                  <span>Level Standar Industri</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
