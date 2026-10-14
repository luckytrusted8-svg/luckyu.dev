import { ArrowRight, LayoutDashboard, FileCode, MapPin, Webhook, type LucideIcon } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

type TechBadgeItem =
  | { name: string; type: "image"; src: string }
  | { name: string; type: "icon"; icon: LucideIcon };

interface ServiceItem {
  title: string;
  summary: string;
  badge: string;
  primaryLogo?: string;
  fallbackIcon?: LucideIcon;
  techItems: TechBadgeItem[];
  color: string;
}

export function Services() {
  const { language, t } = useLanguage();

  const serviceList: ServiceItem[] = [
    {
      title: t("Aplikasi Web Full-Stack", "Full-Stack Web App"),
      summary: t(
        "Membangun aplikasi web dari awal: perancangan database, pembuatan API backend, hingga tampilan frontend yang rapi dan terintegrasi.",
        "Building web applications from scratch: database design, backend API creation, to a clean and integrated frontend."
      ),
      badge: "Laravel / Next.js",
      primaryLogo: "/icons/laravel.png",
      techItems: [
        { name: "Laravel", type: "image", src: "/icons/laravel.png" },
        { name: "Next.js", type: "image", src: "/icons/nextjs.png" },
      ],
      color: "bg-red-50 border border-red-100",
    },
    {
      title: t("Pengembangan Front-End", "Front-End Development"),
      summary: t(
        "Membuat antarmuka web yang responsif, cepat diakses di perangkat mobile, dan interaktif menggunakan React, Tailwind CSS, serta TypeScript.",
        "Creating responsive, fast, and interactive web interfaces using React, Tailwind CSS, and TypeScript."
      ),
      badge: "React & Tailwind",
      primaryLogo: "/icons/react.png",
      techItems: [
        { name: "React", type: "image", src: "/icons/react.png" },
        { name: "Tailwind CSS", type: "image", src: "/icons/tailwind.png" },
      ],
      color: "bg-cyan-50 border border-cyan-100",
    },
    {
      title: t("Panel Admin & Kasir (POS)", "Admin Dashboard & POS"),
      summary: t(
        "Sistem dashboard manajemen inventaris, kasir, hak akses pengguna bertingkat, dan laporan transaksi yang mudah dikelola staf.",
        "Inventory management dashboard, cash register system, multi-level user roles, and transaction reports."
      ),
      badge: "Filament / Blade",
      fallbackIcon: LayoutDashboard,
      techItems: [
        { name: "Filament", type: "icon", icon: LayoutDashboard },
        { name: "Blade", type: "icon", icon: FileCode },
      ],
      color: "bg-emerald-50 border border-emerald-100 text-emerald-800",
    },
    {
      title: t("Fitur Web Interaktif & Geotagging", "Interactive Features & Geotagging"),
      summary: t(
        "Integrasi fitur khusus seperti pelacakan lokasi Google Maps untuk absensi, pemindaian QR code untuk event, hingga grafik analitik.",
        "Integration of custom features such as Google Maps geotagging for attendance, QR code scanning, and analytics."
      ),
      badge: "API & Maps",
      fallbackIcon: MapPin,
      techItems: [
        { name: "API", type: "icon", icon: Webhook },
        { name: "Maps", type: "icon", icon: MapPin },
      ],
      color: "bg-purple-50 border border-purple-100 text-purple-800",
    },
  ];

  return (
    <section
      id="services"
      className="relative px-5 sm:px-8 lg:px-12 py-20 sm:py-28 bg-white border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header Row matching Behance reference 1:1 */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-500 font-mono">
              <span className="w-5 h-[2px] bg-amber-500 inline-block"></span>
              <span>{t("Layanan Saya", "Services")}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-[-0.03em] leading-tight">
              {language === "id" ? (
                <>
                  <span className="text-amber-500">Layanan</span> yang Saya Sediakan
                </>
              ) : (
                <>
                  <span className="text-amber-500">Services</span> I Provide
                </>
              )}
            </h2>
          </div>

          <a
            href="#projects"
            className="inline-flex items-center pl-6 pr-2 py-2 rounded-full bg-[#142d1f] hover:bg-[#0d1e14] text-white font-semibold text-xs uppercase tracking-wider transition-all shadow-md group self-start md:self-auto cursor-pointer"
          >
            <span>{t("Lihat Semua Layanan", "View All Services")}</span>
            <span className="ml-3.5 w-8 h-8 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
              <ArrowRight size={15} />
            </span>
          </a>
        </div>

        {/* Clean Elevated Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {serviceList.map((service, idx) => {
            const Fallback = service.fallbackIcon;
            return (
              <div
                key={idx}
                className="p-8 rounded-[28px] bg-[#f8f9fa] border border-slate-200/90 hover:border-amber-400/80 hover:bg-white transition-all duration-300 flex flex-col justify-between group shadow-2xs hover:shadow-xl hover:-translate-y-1.5"
              >
                <div className="space-y-5">
                  {/* Top-Left: Pure White Circular Disc with Drop Shadow */}
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-full bg-white shadow-md border border-slate-100 flex items-center justify-center group-hover:scale-105 transition-transform">
                      {service.primaryLogo ? (
                        <img
                          src={service.primaryLogo}
                          alt={service.title}
                          className="w-7 h-7 object-contain"
                        />
                      ) : (
                        Fallback && <Fallback size={24} className="text-slate-800" />
                      )}
                    </div>

                    {/* Tech Pill Badge */}
                    <span className="text-[11px] font-mono font-semibold px-3 py-1 rounded-full bg-slate-200/60 text-slate-700">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2.5 pt-1">
                    <h3 className="font-display font-bold text-xl text-slate-900 group-hover:text-amber-600 transition-colors leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {service.summary}
                    </p>
                  </div>
                </div>

                {/* Bottom Action: Learn more → with amber arrow */}
                <div className="pt-6 border-t border-slate-200/70 mt-6 flex items-center gap-1.5 text-xs font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                  <span>{t("Pelajari selengkapnya", "Learn more")}</span>
                  <span className="text-amber-500 font-bold group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
