import { useState } from "react";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { getServices } from "../../lib/content";

export function Services() {
  const services = getServices();
  const [activeService, setActiveService] = useState<string | null>(null);

  return (
    <section
      id="services"
      className="relative px-5 sm:px-8 lg:px-12 py-24 sm:py-32 border-b border-white/10 bg-[#080b12]"
    >
      <div className="max-w-7xl mx-auto space-y-14">
        {/* Header Folio */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-6 border-b border-white/10">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs text-amber-400">
              <span className="px-2 py-0.5 rounded-sm bg-amber-400/10 font-bold border border-amber-400/20">03</span>
              <span className="uppercase tracking-widest font-semibold">LAYANAN &amp; CAKUPAN SOLUSI</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-[-0.03em] leading-tight">
              rekayasa perangkat lunak terfokus.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md font-mono">
            // FOKUS: EFISIENSI ARSITEKTUR, PENGALAMAN PENGGUNA BERSIH, DAN KESTABILAN SISTEM.
          </p>
        </div>

        {/* 4 Elevated Atmospheric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => {
            const Icon = (Icons[service.icon as keyof typeof Icons] ??
              Icons.Sparkles) as LucideIcon;
            const stepNum = String(idx + 1).padStart(2, "0");
            const isOpen = activeService === service.slug;

            return (
              <div
                key={service.slug}
                className="p-6 sm:p-7 rounded-2xl bg-[#0e1422] border border-white/10 hover:border-amber-400/35 transition-all duration-300 flex flex-col justify-between group shadow-xl"
              >
                <div className="space-y-5">
                  {/* Step Folio & Glowing Icon */}
                  <div className="flex items-center justify-between border-b border-white/10 pb-4 font-mono text-xs">
                    <span className="text-amber-400 font-bold">[{stepNum}]</span>
                    <div className="w-9 h-9 rounded-xl border border-white/10 bg-white/5 group-hover:border-amber-400/40 group-hover:bg-amber-400/10 flex items-center justify-center text-amber-400 transition-colors shadow-xs">
                      <Icon size={17} />
                    </div>
                  </div>

                  {/* Title & Summary */}
                  <div className="space-y-2">
                    <h3 className="font-display font-bold text-lg text-white group-hover:text-amber-300 transition-colors leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {service.summary}
                    </p>
                  </div>

                  {/* Expandable Technical Scope */}
                  {isOpen && (
                    <div className="pt-4 border-t border-white/10 text-xs text-slate-200 leading-relaxed bg-[#070a10] p-3 rounded-lg border border-white/5">
                      {service.body}
                    </div>
                  )}
                </div>

                {/* Scope Toggle Button */}
                <div className="pt-5 mt-5 border-t border-white/10">
                  <button
                    type="button"
                    onClick={() => setActiveService(isOpen ? null : service.slug)}
                    className="font-mono text-xs font-semibold text-slate-300 hover:text-amber-400 flex items-center justify-between w-full uppercase tracking-wider cursor-pointer"
                  >
                    <span>{isOpen ? "Tutup Rincian" : "Cakupan Teknis"}</span>
                    <span>{isOpen ? "−" : "+"}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
