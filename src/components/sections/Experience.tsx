import { Briefcase, GraduationCap } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

export function Experience() {
  const { language, t } = useLanguage();

  const educationList = [
    {
      period: t("2023 - Sekarang", "2023 - Present"),
      title: "SMK Skill Village Islamic School",
      subtitle: t(
        "Rekayasa Perangkat Lunak (PPLG) - Fokus Full-Stack Web Development & Arsitektur Database",
        "Software Engineering (PPLG) - Focusing on Full-Stack Web Development & Database Architecture"
      ),
    },
    {
      period: "2020 - 2023",
      title: "SMP Negeri 2 Curug",
      subtitle: t(
        "Pendidikan Menengah Pertama - Aktif mempelajari dasar logika pemrograman dan algoritma komputer",
        "Junior High School - Actively learning logic, algorithms, and fundamental computer programming"
      ),
    },
    {
      period: "2024 - 2025",
      title: "Dicoding Indonesia & BuildWithAngga",
      subtitle: t(
        "Sertifikasi Pemrograman Web Modern - Pendalaman ekosistem Laravel, React, REST API, dan MySQL",
        "Modern Web Development Certification - In-depth mastery of Laravel, React, REST API, and MySQL"
      ),
    },
  ];

  const workList = [
    {
      period: t("2025 - Sekarang", "2025 - Present"),
      title: "PT. Spero Mahakarya Nusantara",
      subtitle: t(
        "Full-Stack Developer Intern (PKL) - Membangun platform e-commerce mini dan sistem manajemen acara dengan QR check-in",
        "Full-Stack Developer Intern - Engineering a mini e-commerce platform and event management system with QR check-in"
      ),
    },
    {
      period: "2025",
      title: "Skillage Edupark",
      subtitle: t(
        "Independent Web Developer - Merancang sistem pemesanan tiket online dan CMS artikel empat tingkat persetujuan berbasis Firebase",
        "Independent Web Developer - Designing an online e-ticketing platform and 4-tier approval article CMS using Firebase"
      ),
    },
    {
      period: t("2024 - Sekarang", "2024 - Present"),
      title: "Freelance Web Developer",
      subtitle: t(
        "Mengerjakan pembuatan website portofolio, landing page UMKM, sistem absensi QR untuk sekolah, dan integrasi API",
        "Building portfolio websites, small business landing pages, school QR attendance systems, and API integrations"
      ),
    },
  ];

  return (
    <section
      id="experience"
      className="relative px-5 sm:px-8 lg:px-12 py-20 sm:py-28 bg-white border-b border-slate-200"
    >
      <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16">
        {/* Centered Header matching Behance Image 2 */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-500 font-mono">
            <span className="w-5 h-[2px] bg-amber-500 inline-block"></span>
            <span>{t("Pendidikan & Pengalaman", "Education & Work")}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-[-0.03em] leading-tight">
            {language === "id" ? (
              <>
                Riwayat <span className="text-amber-500">Belajar &amp;</span><br />
                <span className="text-amber-500">Pengalaman</span> Profesional
              </>
            ) : (
              <>
                My <span className="text-amber-500">Academic and</span><br />
                <span className="text-amber-500">Professional</span> Journey
              </>
            )}
          </h2>
        </div>

        {/* Two-Column Side-by-Side Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Left Column: Education */}
          <div className="bg-[#f8f9fa] border border-slate-200/90 rounded-[28px] p-7 sm:p-10 shadow-2xs flex flex-col">
            {/* Header Badge */}
            <div className="flex items-center gap-4 pb-6 border-b border-slate-200">
              <div className="w-12 h-12 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center font-bold shadow-xs shrink-0">
                <GraduationCap size={24} className="stroke-[2.5]" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                {t("Pendidikan", "Education")}
              </h3>
            </div>

            {/* Timeline List with Left Vertical Border */}
            <div className="space-y-8 pt-8 flex-1">
              {educationList.map((item, idx) => (
                <div
                  key={idx}
                  className="relative pl-6 border-l-2 border-slate-300 space-y-1.5"
                >
                  <span className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-amber-500"></span>
                  <div className="text-xs sm:text-sm font-semibold font-mono text-slate-400">
                    {item.period}
                  </div>
                  <h4 className="text-base sm:text-lg font-black text-slate-900 leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Work Experience */}
          <div className="bg-[#f8f9fa] border border-slate-200/90 rounded-[28px] p-7 sm:p-10 shadow-2xs flex flex-col">
            {/* Header Badge */}
            <div className="flex items-center gap-4 pb-6 border-b border-slate-200">
              <div className="w-12 h-12 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center font-bold shadow-xs shrink-0">
                <Briefcase size={22} className="stroke-[2.5]" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                {t("Pengalaman Kerja", "Work Experience")}
              </h3>
            </div>

            {/* Timeline List with Left Vertical Border */}
            <div className="space-y-8 pt-8 flex-1">
              {workList.map((item, idx) => (
                <div
                  key={idx}
                  className="relative pl-6 border-l-2 border-slate-300 space-y-1.5"
                >
                  <span className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-amber-500"></span>
                  <div className="text-xs sm:text-sm font-semibold font-mono text-slate-400">
                    {item.period}
                  </div>
                  <h4 className="text-base sm:text-lg font-black text-slate-900 leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
