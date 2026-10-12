import { getExperience } from "../../lib/content";

export function Experience() {
  const entries = getExperience();

  return (
    <section
      id="experience"
      className="relative px-5 sm:px-8 lg:px-12 py-20 sm:py-28 border-b border-[var(--color-rule)] bg-[var(--color-paper)]"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header Folio */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-6 border-b border-[var(--color-rule)]">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs text-[var(--color-ink-muted)]">
              <span className="px-2 py-0.5 bg-[var(--color-ink)] text-white font-bold">05</span>
              <span className="uppercase tracking-widest font-semibold">REKAM JEJAK & PERJALANAN KARIER</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-[var(--color-ink)] tracking-[-0.035em] leading-tight">
              kronologi pengalaman profesional.
            </h2>
          </div>
          <span className="font-mono text-xs text-[var(--color-ink-dim)] uppercase">
            TIMELINE_RECORD: 2023 — 2026
          </span>
        </div>

        {/* Swiss Chronological Ledger Table */}
        <div className="border border-[var(--color-rule)] bg-white divide-y divide-[var(--color-rule)]">
          {entries.map((entry, idx) => {
            const indexStr = String(idx + 1).padStart(2, "0");
            const isWork = entry.type === "work";

            return (
              <div
                key={entry.slug}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 sm:p-8 hover:bg-[var(--color-paper-2)] transition-colors duration-150 items-start"
              >
                {/* Period & Category (Cols 1-3) */}
                <div className="lg:col-span-3 space-y-1.5 font-mono text-xs">
                  <div className="flex items-center gap-2">
                    <span className="text-[var(--color-signal)] font-bold">#{indexStr}</span>
                    <span
                      className={`px-2 py-0.5 text-[10px] uppercase font-bold ${
                        isWork
                          ? "bg-[var(--color-ink)] text-white"
                          : "border border-[var(--color-rule)] bg-[var(--color-paper-3)] text-[var(--color-ink)]"
                      }`}
                    >
                      {isWork ? "PENGALAMAN KERJA" : "PENDIDIKAN"}
                    </span>
                  </div>
                  <div className="text-[var(--color-ink)] font-semibold text-sm pt-1">
                    {entry.period}
                  </div>
                </div>

                {/* Role & Organization (Cols 4-6) */}
                <div className="lg:col-span-4 space-y-1">
                  <h3 className="font-display font-bold text-lg sm:text-xl text-[var(--color-ink)] leading-snug">
                    {entry.role}
                  </h3>
                  <p className="font-mono text-xs text-[var(--color-signal)] font-medium">
                    {entry.org}
                  </p>
                </div>

                {/* Details & Scope (Cols 7-12) */}
                <div className="lg:col-span-5 text-xs sm:text-sm text-[var(--color-ink-muted)] leading-relaxed">
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
