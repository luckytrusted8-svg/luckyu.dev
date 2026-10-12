import { ArrowRight, Layers, Layout, ShieldCheck, Sparkles } from "lucide-react";

export function Services() {
  const serviceList = [
    {
      icon: Layers,
      title: "Aplikasi Web Full-Stack",
      summary:
        "Membangun aplikasi web dari awal: perancangan database, pembuatan API backend, hingga tampilan frontend yang rapi dan terintegrasi.",
      badge: "Laravel / Next.js",
      color: "bg-amber-100 text-amber-800",
    },
    {
      icon: Layout,
      title: "Pengembangan Front-End",
      summary:
        "Membuat antarmuka web yang responsif, cepat diakses di perangkat mobile, dan interaktif menggunakan React, Tailwind CSS, serta TypeScript.",
      badge: "React & Tailwind",
      color: "bg-blue-100 text-blue-800",
    },
    {
      icon: ShieldCheck,
      title: "Panel Admin & Kasir (POS)",
      summary:
        "Sistem dashboard manajemen inventaris, kasir, hak akses pengguna bertingkat, dan laporan transaksi yang mudah dikelola staf.",
      badge: "Filament / Blade",
      color: "bg-emerald-100 text-emerald-800",
    },
    {
      icon: Sparkles,
      title: "Fitur Web Interaktif & Geotagging",
      summary:
        "Integrasi fitur khusus seperti pelacakan lokasi Google Maps untuk absensi, pemindaian QR code untuk event, hingga grafik analitik.",
      badge: "API & Maps",
      color: "bg-purple-100 text-purple-800",
    },
  ];

  return (
    <section
      id="services"
      className="relative px-5 sm:px-8 lg:px-12 py-20 sm:py-28 bg-[#fafaf9] border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600 font-mono">
              <span>— Services</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-[-0.03em] leading-tight">
              <span className="text-amber-500">Services</span> I Provide
            </h2>
          </div>

          <a
            href="#projects"
            className="inline-flex items-center pl-5 pr-2 py-2 rounded-full bg-[#142d1f] hover:bg-[#0d1e14] text-white font-semibold text-xs uppercase tracking-wider transition-all shadow-sm group self-start md:self-auto cursor-pointer"
          >
            <span>Lihat Semua Karya</span>
            <span className="ml-3 w-7 h-7 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
              <ArrowRight size={14} />
            </span>
          </a>
        </div>

        {/* 4 Clean Elevated Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceList.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="p-7 rounded-2xl bg-white border border-slate-200 hover:border-amber-400/80 transition-all duration-300 flex flex-col justify-between group shadow-xs hover:shadow-lg hover:-translate-y-1"
              >
                <div className="space-y-5">
                  {/* Icon & Badge */}
                  <div className="flex items-center justify-between">
                    <div
                      className={`w-12 h-12 rounded-xl ${service.color} flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform`}
                    >
                      <Icon size={22} />
                    </div>
                    <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2.5">
                    <h3 className="font-display font-bold text-lg text-slate-900 group-hover:text-amber-600 transition-colors leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {service.summary}
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-100 mt-6 flex items-center gap-1.5 text-xs font-bold text-slate-800 group-hover:text-amber-600 transition-colors">
                  <span>Pelajari selengkapnya</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
