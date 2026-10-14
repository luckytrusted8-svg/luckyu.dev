import { ArrowDownToLine } from "lucide-react";
import { getAbout } from "../../lib/content";
import { useLanguage } from "../../context/LanguageContext";

export function About() {
  const about = getAbout();
  const { language, t } = useLanguage();

  const floatingSkills = [
    {
      name: "Full-Stack Web",
      pos: "top-24 -left-6 sm:top-28 sm:-left-8",
      badgeStyle: "bg-amber-400 text-slate-950 font-bold border border-amber-300 shadow-xl",
    },
    {
      name: "React & Next.js",
      pos: "-top-3 right-2 sm:-top-3 sm:right-6",
      badgeStyle: "bg-amber-400 text-slate-950 font-bold border border-amber-300 shadow-xl",
    },
    {
      name: "Laravel 11",
      pos: "top-1/4 -right-6 sm:top-1/4 sm:-right-8",
      badgeStyle: "bg-[#183324] text-white border border-white/20 shadow-xl",
    },
    {
      name: "Tailwind CSS",
      pos: "bottom-24 -left-6 sm:bottom-28 sm:-left-8",
      badgeStyle: "bg-amber-400 text-slate-950 font-bold border border-amber-300 shadow-xl",
    },
    {
      name: "TypeScript",
      pos: "bottom-20 -right-4 sm:bottom-24 sm:-right-6",
      badgeStyle: "bg-[#183324] text-white border border-white/20 shadow-xl",
    },
    {
      name: "MySQL & Prisma",
      pos: "-bottom-4 left-4 sm:-bottom-4 sm:left-8",
      badgeStyle: "bg-[#183324] text-white border border-white/20 shadow-xl",
    },
    {
      name: "RESTful API",
      pos: "-bottom-4 right-4 sm:-bottom-4 sm:right-8",
      badgeStyle: "bg-amber-400 text-slate-950 font-bold border border-amber-300 shadow-xl",
    },
  ];

  return (
    <section
      id="about"
      className="relative px-5 sm:px-8 lg:px-12 py-24 sm:py-32 bg-[#142d1f] text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Circular Portrait with Radiating Skill Badges */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-72 h-72 sm:w-88 sm:h-88">
              {/* Central Yellow Sun Circle Container */}
              <div className="w-full h-full rounded-full bg-gradient-to-br from-amber-400 to-amber-500 p-2 sm:p-2.5 shadow-2xl flex items-center justify-center relative overflow-hidden">
                <div className="w-full h-full rounded-full overflow-hidden bg-amber-200 relative">
                  <img
                    src="/image.png"
                    alt="Lucky Ubaidillah Profile"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Radiating Skill Badges */}
              {floatingSkills.map((skill, idx) => (
                <div
                  key={idx}
                  className={`absolute z-20 px-4 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 shadow-xl transition-transform hover:scale-110 cursor-default select-none ${skill.pos} ${skill.badgeStyle}`}
                >
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Narrative & Metrics */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 font-mono">
                <span className="w-5 h-[2px] bg-amber-400 inline-block"></span>
                <span>{t("Tentang Saya", "About Me")}</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black tracking-[-0.03em] leading-tight text-white">
                {language === "id" ? (
                  <>
                    <span className="text-white">Siapa itu </span>
                    <span className="text-amber-400">Lucky Ubaidillah</span>
                    <span className="text-white">?</span>
                  </>
                ) : (
                  <>
                    <span className="text-white">Who is </span>
                    <span className="text-amber-400">Lucky Ubaidillah</span>
                    <span className="text-white">?</span>
                  </>
                )}
              </h2>
            </div>

            {/* Narrative Prose */}
            <div className="space-y-4 text-slate-200 text-sm sm:text-base leading-relaxed">
              {language === "id" ? (
                <>
                  <p>
                    Saya Lucky, web developer asal Indonesia yang berfokus membangun aplikasi web andal, cepat, dan terstruktur. Saat ini saya menjalani magang di <strong className="text-white font-semibold">PT Spero Mahakarya Nusantara</strong> sambil menyelesaikan pendidikan rekayasa perangkat lunak.
                  </p>
                  <p>
                    Dari merancang skema database, membuat arsitektur API backend dengan Laravel atau Express, hingga menyusun tampilan antarmuka responsif dengan React dan Next.js, saya mendedikasikan ketelitian pada setiap baris kode agar produk siap digunakan secara nyata.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    I'm Lucky, a web developer from Indonesia focusing on building reliable, fast, and structured web applications. Currently interning at <strong className="text-white font-semibold">PT Spero Mahakarya Nusantara</strong> while completing my software engineering education.
                  </p>
                  <p>
                    From designing database schemas, architecting backend APIs with Laravel or Express, to building responsive user interfaces with React and Next.js, I commit to precision across every line of code so each solution is production-ready.
                  </p>
                </>
              )}
            </div>

            {/* Counters Row */}
            <div className="grid grid-cols-3 gap-6 pt-4 border-t border-white/15">
              <div>
                <span className="block text-3xl sm:text-5xl font-black text-amber-400 tabular-nums">
                  {about.projectsShipped}+
                </span>
                <span className="text-xs sm:text-sm text-slate-300 font-medium mt-1 block">
                  {t("Proyek Selesai", "Projects Completed")}
                </span>
              </div>
              <div>
                <span className="block text-3xl sm:text-5xl font-black text-amber-400 tabular-nums">
                  100%
                </span>
                <span className="text-xs sm:text-sm text-slate-300 font-medium mt-1 block">
                  {t("Kepuasan Klien", "Client Satisfaction")}
                </span>
              </div>
              <div>
                <span className="block text-3xl sm:text-5xl font-black text-amber-400 tabular-nums">
                  {about.yearsBuilding}+
                </span>
                <span className="text-xs sm:text-sm text-slate-300 font-medium mt-1 block">
                  {t("Tahun Pengalaman", "Years of Experience")}
                </span>
              </div>
            </div>

            {/* Action Row: Download CV & Script Signature */}
            <div className="flex flex-wrap items-center gap-8 pt-2">
              <a
                href="/MyCV.pdf"
                download="Lucky_Ubaidillah_CV.pdf"
                className="inline-flex items-center pl-6 pr-2 py-2 rounded-full bg-[#183324] hover:bg-[#0f2418] text-white font-semibold text-xs uppercase tracking-wider transition-all shadow-lg border border-white/15 group cursor-pointer"
              >
                <span>{t("Unduh CV", "Download CV")}</span>
                <span className="ml-3.5 w-8 h-8 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                  <ArrowDownToLine size={15} />
                </span>
              </a>

              <div className="font-serif italic text-2xl sm:text-3xl text-amber-300 font-bold select-none tracking-wide">
                Lucky Ubaidillah
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
