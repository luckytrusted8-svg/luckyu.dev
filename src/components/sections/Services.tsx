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
      className="relative px-5 sm:px-8 lg:px-12 py-20 sm:py-28 border-b border-[var(--color-rule)] bg-[var(--color-paper)]"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header Folio */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-6 border-b border-[var(--color-rule)]">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs text-[var(--color-ink-muted)]">
              <span className="px-2 py-0.5 bg-[var(--color-ink)] text-white font-bold">03</span>
              <span className="uppercase tracking-widest font-semibold">LAYANAN & CAKUPAN SOLUSI</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-[var(--color-ink)] tracking-[-0.035em] leading-tight">
              rekayasa perangkat lunak terfokus.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[var(--color-ink-muted)] max-w-md font-mono">
            // FOKUS: EFISIENSI ARSITEKTUR, PENGALAMAN PENGGUNA BERSIH, DAN KESTABILAN SISTEM.
          </p>
        </div>

        {/* Ruled Grid Cells (Swiss Cells, Not Floating Cards) */}
        <div className="border border-[var(--color-rule)] bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[var(--color-rule)]">
          {services.map((service, idx) => {
            const Icon = (Icons[service.icon as keyof typeof Icons] ??
              Icons.Sparkles) as LucideIcon;
            const stepNum = String(idx + 1).padStart(2, "0");
            const isOpen = activeService === service.slug;

            return (
              <div
                key={service.slug}
                className="p-6 sm:p-8 flex flex-col justify-between hover:bg-[var(--color-paper-2)] transition-colors duration-200 group"
              >
                <div className="space-y-6">
                  {/* Step Folio & Icon */}
                  <div className="flex items-center justify-between border-b border-[var(--color-rule)] pb-4 font-mono text-xs">
                    <span className="text-[var(--color-signal)] font-bold">[{stepNum}]</span>
                    <div className="w-8 h-8 rounded-none border border-[var(--color-rule)] bg-white group-hover:border-[var(--color-ink)] flex items-center justify-center text-[var(--color-ink)] transition-colors">
                      <Icon size={16} />
                    </div>
                  </div>

                  {/* Title & Summary */}
                  <div className="space-y-3">
                    <h3 className="font-display font-bold text-lg sm:text-xl text-[var(--color-ink)] leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[var(--color-ink-muted)] leading-relaxed">
                      {service.summary}
                    </p>
                  </div>

                  {/* Expandable Body */}
                  {isOpen && (
                    <div className="pt-4 border-t border-[var(--color-rule)] text-xs text-[var(--color-ink)] leading-relaxed bg-white p-3 border">
                      {service.body}
                    </div>
                  )}
                </div>

                {/* Toggle Action */}
                <div className="pt-6 mt-6 border-t border-[var(--color-rule)]">
                  <button
                    type="button"
                    onClick={() => setActiveService(isOpen ? null : service.slug)}
                    className="font-mono text-xs font-semibold text-[var(--color-ink)] hover:text-[var(--color-signal)] flex items-center justify-between w-full uppercase tracking-wider cursor-pointer"
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
