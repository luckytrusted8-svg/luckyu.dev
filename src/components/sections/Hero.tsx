import { ArrowUpRight, ArrowDownRight, Terminal } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center px-5 sm:px-8 lg:px-12 pt-28 pb-20 sm:pt-36 sm:pb-28 border-b border-white/10 bg-[#080b12] overflow-hidden"
    >
      {/* Atmospheric Subtle Radial Blooms */}
      <div className="atmospheric-bloom w-[500px] h-[500px] bg-amber-500/12 top-[-100px] left-1/4" />
      <div className="atmospheric-bloom w-[420px] h-[420px] bg-indigo-500/10 top-1/3 right-[-80px]" />
      <div className="absolute inset-0 blueprint-dots opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full space-y-12">
        {/* Folio Metadata Strip */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10 font-mono text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded-sm bg-amber-400/10 text-amber-400 font-bold border border-amber-400/20">
              00
            </span>
            <span className="uppercase tracking-widest text-slate-300">
              REKAYASA SISTEM WEB &amp; FRONTEND PRODUKSI
            </span>
          </div>
          <div className="flex items-center gap-6">
            <span className="hidden sm:inline text-slate-500">LOKASI: TANGERANG, INDONESIA</span>
            <span className="text-amber-400/80">EDISI: 2026.04</span>
          </div>
        </div>

        {/* 12-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column (Cols 1-7): Display Headline & Narrative */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 font-mono text-xs text-amber-300 shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                <span className="uppercase tracking-wider">FULL-STACK WEB ENGINEER</span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-[4.25rem] font-black text-white tracking-[-0.035em] leading-[1.05]">
                membangun sistem web <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500">berdaya tahan tinggi</span> &amp; bebas kompromi.
              </h1>
            </div>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Saya <strong className="text-white font-semibold">Lucky Ubaidillah</strong>.
              Fokus merancang arsitektur aplikasi web modern, sistem front-end interaktif tanpa bloatware,
              dan backend skala produksi berbasis <span className="text-amber-300 font-medium">React</span>,{" "}
              <span className="text-amber-300 font-medium">Next.js</span>, dan{" "}
              <span className="text-amber-300 font-medium">Laravel</span>.
            </p>

            {/* Action Row */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 hover:from-amber-300 hover:to-amber-400 font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(245,158,11,0.25)] hover:shadow-[0_0_30px_rgba(245,158,11,0.4)] cursor-pointer"
              >
                <span>Lihat Karya Pilihan</span>
                <ArrowDownRight size={15} />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/5 text-slate-200 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all font-semibold text-xs uppercase tracking-wider cursor-pointer"
              >
                <span>Mulai Konsultasi</span>
                <ArrowUpRight size={15} />
              </a>
            </div>

            {/* Micro Stats Ledger */}
            <div className="pt-8 border-t border-white/10 grid grid-cols-3 gap-4 font-mono text-xs">
              <div>
                <span className="block text-slate-500 uppercase text-[10px]">Arsitektur</span>
                <span className="font-semibold text-slate-200">Modular &amp; Scalable</span>
              </div>
              <div>
                <span className="block text-slate-500 uppercase text-[10px]">Performa CWV</span>
                <span className="font-semibold text-emerald-400">Score 98+ (Fast INP)</span>
              </div>
              <div>
                <span className="block text-slate-500 uppercase text-[10px]">Disiplin Desain</span>
                <span className="font-semibold text-amber-300">Atmospheric &amp; Anti-Slop</span>
              </div>
            </div>
          </div>

          {/* Right Column (Cols 8-12): Atmospheric Code & System Apparatus */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-white/15 bg-[#0e1422]/90 backdrop-blur-xl p-6 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.7)] relative overflow-hidden group hover:border-amber-400/40 transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 blur-2xl pointer-events-none" />

              {/* Apparatus Window Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 font-mono text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-slate-400 font-semibold text-[11px]">lucky-system.ts</span>
                </div>
                <span className="text-amber-400/80 text-[10px] px-2 py-0.5 rounded-full bg-amber-400/10 border border-amber-400/20">
                  LIVE_RUNTIME
                </span>
              </div>

              {/* Code Blocks / Capabilities */}
              <div className="py-4 space-y-3 font-mono text-xs">
                <div className="p-3 rounded-lg bg-[#070a10] border border-white/5 space-y-1">
                  <span className="text-slate-500">// 01: Core Architecture Stack</span>
                  <div className="text-slate-300">
                    <span className="text-purple-400">const</span> stack = [
                    <span className="text-amber-300">&quot;React 19&quot;</span>,{" "}
                    <span className="text-cyan-300">&quot;Next.js&quot;</span>,{" "}
                    <span className="text-emerald-300">&quot;Laravel 12&quot;</span>];
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-[#070a10] border border-white/5 space-y-1">
                  <span className="text-slate-500">// 02: Verification Protocol</span>
                  <div className="text-slate-300">
                    <span className="text-purple-400">await</span> verifyStandards({`{`}
                    <span className="text-amber-300">a11y: &quot;WCAG_AA&quot;</span>,{" "}
                    <span className="text-cyan-300">speed: &quot;sub-100ms&quot;</span>
                    {`}`});
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-[#070a10] border border-white/5 flex items-center justify-between">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <Terminal size={12} className="text-amber-400" />
                    <span>deploy_status</span>
                  </span>
                  <span className="text-emerald-400 font-bold">200 OK &bull; READY</span>
                </div>
              </div>

              {/* Apparatus Footer */}
              <div className="pt-3 border-t border-white/10 flex items-center justify-between font-mono text-[11px] text-slate-500">
                <span>MEM_USAGE: 42MB</span>
                <span className="tabular-nums">UPTIME: 99.98%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
