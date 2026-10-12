import { getAbout } from "../../lib/content";

export function About() {
  const about = getAbout();
  const paragraphs = about.body.split("\n\n");

  return (
    <section
      id="about"
      className="relative px-5 sm:px-8 lg:px-12 py-20 sm:py-28 border-b border-[var(--color-rule)] bg-[var(--color-paper)]"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Top Folio Header */}
        <div className="flex items-center justify-between pb-6 border-b border-[var(--color-rule)] font-mono text-xs text-[var(--color-ink-muted)]">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 bg-[var(--color-ink)] text-white font-bold">02</span>
            <span className="uppercase tracking-widest font-semibold">PENDEKATAN & LATAR BELAKANG</span>
          </div>
          <span className="text-[var(--color-signal)] font-semibold uppercase">FILOSOFI_REKAYASA</span>
        </div>

        {/* 12-Column Split Diptych */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column (Cols 1-5): Bio Ledger & Metrics */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black text-[var(--color-ink)] tracking-tight leading-tight">
              dibangun dengan disiplin arsitektur, bukan kebetulan.
            </h2>
            <p className="text-sm sm:text-base text-[var(--color-ink-muted)] leading-relaxed">
              {about.heading}
            </p>

            {/* Metrics Matrix (No Floating Shadows, Hairline Ruled Grid) */}
            <div className="border border-[var(--color-rule)] bg-white grid grid-cols-3 divide-x divide-[var(--color-rule)] font-mono pt-2">
              <div className="p-4 text-center">
                <span className="block text-2xl sm:text-3xl font-black text-[var(--color-ink)] tabular-nums">
                  {about.yearsBuilding}+
                </span>
                <span className="text-[10px] text-[var(--color-ink-dim)] uppercase tracking-wider mt-1 block">
                  Tahun Bangun
                </span>
              </div>
              <div className="p-4 text-center">
                <span className="block text-2xl sm:text-3xl font-black text-[var(--color-signal)] tabular-nums">
                  {about.projectsShipped}+
                </span>
                <span className="text-[10px] text-[var(--color-ink-dim)] uppercase tracking-wider mt-1 block">
                  Proyek Rilis
                </span>
              </div>
              <div className="p-4 text-center">
                <span className="block text-2xl sm:text-3xl font-black text-[var(--color-ink)] tabular-nums">
                  {about.stacksUsed}+
                </span>
                <span className="text-[10px] text-[var(--color-ink-dim)] uppercase tracking-wider mt-1 block">
                  Stack Handal
                </span>
              </div>
            </div>

            {/* Availability Callout */}
            <div className="p-4 bg-[var(--color-paper-2)] border border-[var(--color-rule)] font-mono text-xs flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-emerald-500 shrink-0" />
              <span className="text-[var(--color-ink)] font-medium">
                {about.availability}
              </span>
            </div>
          </div>

          {/* Right Column (Cols 6-12): Editorial Prose & Standards */}
          <div className="lg:col-span-7 bg-white border border-[var(--color-rule)] p-6 sm:p-10 space-y-6 text-sm sm:text-base text-[var(--color-ink-muted)] leading-relaxed">
            {paragraphs.map((p, i) => (
              <p
                key={i}
                dangerouslySetInnerHTML={{
                  __html: p.replace(
                    /\*\*(.+?)\*\*/g,
                    '<strong class="font-semibold text-[var(--color-ink)] underline decoration-[var(--color-rule)] underline-offset-4">$1</strong>'
                  ),
                }}
              />
            ))}

            <div className="pt-6 border-t border-[var(--color-rule)] grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs text-[var(--color-ink-muted)]">
              <div>
                <span className="block text-[var(--color-signal)] font-bold mb-1">STANDARD KODE:</span>
                <span>Type safety ketat, zero undefined state, terisolasi per domain modular.</span>
              </div>
              <div>
                <span className="block text-[var(--color-signal)] font-bold mb-1">KOMITMEN PERFORMA:</span>
                <span>Lighthouse 95+, asset terkompresi, responsive di 320px–1440px.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
