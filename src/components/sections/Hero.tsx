import { ArrowDownRight, ArrowUpRight, Terminal, Layers, Cpu, ShieldCheck } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative px-5 sm:px-8 lg:px-12 pt-12 pb-20 sm:pt-20 sm:pb-28 border-b border-[var(--color-rule)] bg-[var(--color-paper)]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Top Folio Row (Swiss Exhibition Style) */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[var(--color-rule)] font-mono text-xs text-[var(--color-ink-muted)]">
          <div className="flex items-center gap-3">
            <span className="px-2 py-0.5 bg-[var(--color-paper-3)] text-[var(--color-ink)] font-bold">
              00
            </span>
            <span className="uppercase tracking-widest font-semibold">
              KARYA & REKAYASA SISTEM WEB
            </span>
          </div>
          <div className="flex items-center gap-6">
            <span className="hidden sm:inline">LOKASI: INDONESIA (UTC+7)</span>
            <span>EDISI: 2026.04</span>
          </div>
        </div>

        {/* 12-Column Grid Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 pt-10 sm:pt-14 items-start">
          {/* Left Column (Cols 1-7): Display Headline & Narrative */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="inline-block font-mono text-xs font-semibold uppercase tracking-widest text-[var(--color-signal)]">
                [ FULL-STACK WEB ENGINEER ]
              </span>
              <h1 className="text-4xl sm:text-6xl lg:text-[4.25rem] font-black text-[var(--color-ink)] tracking-[-0.04em] leading-[1.02]">
                membangun produk digital nyata, bukan sekadar tampilan.
              </h1>
            </div>

            <p className="text-base sm:text-lg text-[var(--color-ink-muted)] max-w-2xl leading-relaxed">
              Saya <strong className="text-[var(--color-ink)] font-semibold">Lucky Ubaidillah</strong>.
              Berfokus pada arsitektur web modern, sistem front-end presisi tinggi, dan backend yang tangguh
              menggunakan ekosistem React, Next.js, dan Laravel. Setiap baris kode ditulis untuk kejelasan,
              kecepatan, dan kemudahan skalabilitas.
            </p>

            {/* Action Row */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[var(--color-ink)] text-white hover:bg-[var(--color-signal)] transition-colors text-xs font-semibold tracking-wider uppercase"
              >
                <span>Lihat Karya Pilihan</span>
                <ArrowDownRight size={15} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-transparent text-[var(--color-ink)] border border-[var(--color-rule)] hover:border-[var(--color-ink)] hover:bg-[var(--color-paper-2)] transition-colors text-xs font-semibold tracking-wider uppercase"
              >
                <span>Mulai Konsultasi</span>
                <ArrowUpRight size={15} />
              </a>
            </div>

            {/* Micro Architecture Ledger */}
            <div className="pt-8 border-t border-[var(--color-rule)] grid grid-cols-3 gap-4 font-mono text-xs">
              <div>
                <span className="block text-[var(--color-ink-dim)] uppercase text-[10px]">Arsitektur</span>
                <span className="font-semibold text-[var(--color-ink)]">Modular & Clean</span>
              </div>
              <div>
                <span className="block text-[var(--color-ink-dim)] uppercase text-[10px]">Kepatuhan UX</span>
                <span className="font-semibold text-[var(--color-ink)]">A11y & Fast CWV</span>
              </div>
              <div>
                <span className="block text-[var(--color-ink-dim)] uppercase text-[10px]">Prinsip Desain</span>
                <span className="font-semibold text-[var(--color-ink)]">Swiss Grid & Anti-Slop</span>
              </div>
            </div>
          </div>

          {/* Right Column (Cols 8-12): Constructed Architectural Specimen Object */}
          <div className="lg:col-span-5">
            <div className="border border-[var(--color-ink)] bg-white p-6 sm:p-8 space-y-6">
              {/* Card Header Specimen */}
              <div className="flex items-center justify-between border-b border-[var(--color-rule)] pb-4 font-mono text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 bg-[var(--color-signal)]" />
                  <span className="font-bold text-[var(--color-ink)]">SPECIMEN_01</span>
                </div>
                <span className="text-[var(--color-ink-dim)]">INDEX: SYSTEM_CORE</span>
              </div>

              {/* Specimen Content: 4 Core Competencies */}
              <div className="space-y-4">
                <div className="border border-[var(--color-rule)] p-4 bg-[var(--color-paper-2)]">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-[var(--color-ink)]">
                    <Layers size={14} className="text-[var(--color-signal)]" />
                    <span>01 / FRONTEND ENGINEERING</span>
                  </div>
                  <p className="text-xs text-[var(--color-ink-muted)] mt-1.5 leading-relaxed">
                    React 19, TypeScript, Tailwind v4, state architecture terisolasi, dan optimasi Core Web Vitals tanpa bloatware.
                  </p>
                </div>

                <div className="border border-[var(--color-rule)] p-4 bg-[var(--color-paper-2)]">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-[var(--color-ink)]">
                    <Cpu size={14} className="text-[var(--color-signal)]" />
                    <span>02 / BACKEND & API SYSTEMS</span>
                  </div>
                  <p className="text-xs text-[var(--color-ink-muted)] mt-1.5 leading-relaxed">
                    Laravel 12 REST API, autentikasi Sanctum teruji, query database efisien, dan integrasi payment gateway.
                  </p>
                </div>

                <div className="border border-[var(--color-rule)] p-4 bg-[var(--color-paper-2)]">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-[var(--color-ink)]">
                    <ShieldCheck size={14} className="text-[var(--color-signal)]" />
                    <span>03 / KUALITAS KODE TERTATA</span>
                  </div>
                  <p className="text-xs text-[var(--color-ink-muted)] mt-1.5 leading-relaxed">
                    Desain responsif 320px–1440px, kontras rasio ketat 4.5:1, navigasi keyboard penuh, dan tanpa layout acak.
                  </p>
                </div>
              </div>

              {/* Terminal / Status Strip */}
              <div className="pt-3 border-t border-[var(--color-rule)] flex items-center justify-between font-mono text-[11px] text-[var(--color-ink-muted)]">
                <span className="flex items-center gap-1.5">
                  <Terminal size={12} className="text-[var(--color-signal)]" />
                  <span>status: siap-rilis</span>
                </span>
                <span className="tabular-nums">latency: &lt; 50ms</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
