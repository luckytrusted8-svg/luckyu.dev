import { getAbout } from "../../lib/content";

export function About() {
  const about = getAbout();
  const paragraphs = about.body.split("\n\n");

  return (
    <section
      id="about"
      className="relative px-5 sm:px-8 lg:px-12 py-24 sm:py-32 border-b border-white/10 bg-[#080b12]"
    >
      <div className="max-w-7xl mx-auto space-y-14">
        {/* Folio Header */}
        <div className="flex items-center justify-between pb-6 border-b border-white/10 font-mono text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded-sm bg-amber-400/10 text-amber-400 font-bold border border-amber-400/20">02</span>
            <span className="uppercase tracking-widest text-slate-300">PENDEKATAN &amp; LATAR BELAKANG</span>
          </div>
          <span className="text-amber-400 font-semibold uppercase">FILOSOFI_REKAYASA</span>
        </div>

        {/* 12-Column Split Diptych */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column (Cols 1-5): Bio & Metrics */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
              dibangun dengan disiplin arsitektur, bukan kebetulan.
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {about.heading}
            </p>

            {/* Glowing Metric Meters */}
            <div className="rounded-2xl border border-white/10 bg-[#0e1422] grid grid-cols-3 divide-x divide-white/10 font-mono p-2 shadow-xl">
              <div className="p-4 text-center">
                <span className="block text-2xl sm:text-3xl font-black text-white tabular-nums">
                  {about.yearsBuilding}+
                </span>
                <span className="text-[10px] text-slate-400 uppercase tracking-wider mt-1 block">
                  Tahun Bangun
                </span>
              </div>
              <div className="p-4 text-center">
                <span className="block text-2xl sm:text-3xl font-black text-amber-400 tabular-nums">
                  {about.projectsShipped}+
                </span>
                <span className="text-[10px] text-slate-400 uppercase tracking-wider mt-1 block">
                  Proyek Rilis
                </span>
              </div>
              <div className="p-4 text-center">
                <span className="block text-2xl sm:text-3xl font-black text-cyan-400 tabular-nums">
                  {about.stacksUsed}+
                </span>
                <span className="text-[10px] text-slate-400 uppercase tracking-wider mt-1 block">
                  Stack Utama
                </span>
              </div>
            </div>

            {/* Live Availability Callout */}
            <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 font-mono text-xs flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <span className="text-emerald-300 font-medium">
                {about.availability}
              </span>
            </div>
          </div>

          {/* Right Column (Cols 6-12): Editorial Prose on Elevated Surface */}
          <div className="lg:col-span-7 rounded-3xl bg-[#0e1422] border border-white/10 p-6 sm:p-10 space-y-6 text-sm sm:text-base text-slate-300 leading-relaxed shadow-xl">
            {paragraphs.map((p, i) => (
              <p
                key={i}
                dangerouslySetInnerHTML={{
                  __html: p.replace(
                    /\*\*(.+?)\*\*/g,
                    '<strong class="font-bold text-amber-300">$1</strong>'
                  ),
                }}
              />
            ))}

            <div className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs text-slate-400">
              <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                <span className="block text-amber-400 font-bold mb-1">STANDARD KODE:</span>
                <span>Type-safety ketat, arsitektur modular terisolasi, zero undefined state.</span>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                <span className="block text-cyan-400 font-bold mb-1">PERFORMA EKSTRIM:</span>
                <span>Optimasi CWV, asset terkompresi, responsive penuh 320px–1440px.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
