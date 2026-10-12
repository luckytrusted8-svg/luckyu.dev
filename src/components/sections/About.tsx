import { ArrowDownToLine } from "lucide-react";
import { getAbout } from "../../lib/content";

export function About() {
  const about = getAbout();

  const floatingSkills = [
    {
      name: "Laravel 11",
      icon: "/icons/laravel.png",
      pos: "-top-3 left-2 sm:-top-3 sm:left-4",
      badgeStyle: "bg-white text-slate-900 border border-slate-200 shadow-xl",
    },
    {
      name: "React",
      icon: "/icons/react.png",
      pos: "-top-3 right-2 sm:-top-3 sm:right-6",
      badgeStyle: "bg-white text-slate-900 border border-slate-200 shadow-xl",
    },
    {
      name: "Next.js",
      icon: "/icons/nextjs.png",
      pos: "top-1/4 -right-6 sm:top-1/4 sm:-right-8",
      badgeStyle: "bg-white text-slate-900 border border-slate-200 shadow-xl",
    },
    {
      name: "Tailwind CSS",
      icon: "/icons/tailwind.png",
      pos: "top-1/3 -left-6 sm:top-1/3 sm:-left-8",
      badgeStyle: "bg-white text-slate-900 border border-slate-200 shadow-xl",
    },
    {
      name: "TypeScript",
      icon: "/icons/typescript.png",
      pos: "bottom-16 -left-6 sm:bottom-16 sm:-left-8",
      badgeStyle: "bg-white text-slate-900 border border-slate-200 shadow-xl",
    },
    {
      name: "Prisma",
      icon: "/icons/prisma.png",
      pos: "bottom-14 -right-6 sm:bottom-16 sm:-right-8",
      badgeStyle: "bg-white text-slate-900 border border-slate-200 shadow-xl",
    },
    {
      name: "MySQL",
      icon: "/icons/mysql.png",
      pos: "-bottom-4 left-6 sm:-bottom-4 sm:left-10",
      badgeStyle: "bg-white text-slate-900 border border-slate-200 shadow-xl",
    },
    {
      name: "Node.js",
      icon: "/icons/nodejs.png",
      pos: "-bottom-4 right-6 sm:-bottom-4 sm:right-10",
      badgeStyle: "bg-white text-slate-900 border border-slate-200 shadow-xl",
    },
  ];

  return (
    <section
      id="about"
      className="relative px-5 sm:px-8 lg:px-12 py-24 sm:py-32 bg-[#142d1f] text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column (Cols 1-5): Circular Portrait with Floating Skill Badges */}
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

              {/* Floating Skill Badges with Real Logos Radiating around the Circle */}
              {floatingSkills.map((skill, idx) => (
                <div
                  key={idx}
                  className={`absolute z-20 px-3.5 py-1.5 rounded-full text-xs font-bold flex items-center gap-2 shadow-xl transition-transform hover:scale-110 cursor-default select-none ${skill.pos} ${skill.badgeStyle}`}
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-4 h-4 sm:w-5 sm:h-5 object-contain shrink-0"
                  />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column (Cols 6-12): Human Narrative & Verified Metrics */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 font-mono">
                <span>— About Me</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black tracking-[-0.03em] leading-tight text-white">
                <span className="text-white">Who is </span>
                <span className="text-amber-400">Lucky Ubaidillah</span>
                <span className="text-white">?</span>
              </h2>
            </div>

            {/* Narrative Prose */}
            <div className="space-y-4 text-slate-200 text-sm sm:text-base leading-relaxed">
              <p>
                Saya Lucky, mahasiswa Rekayasa Perangkat Lunak dan web developer asal Indonesia. Saat ini saya menjalani magang di <strong className="text-white font-semibold">PT Spero Mahakarya Nusantara</strong> sambil menyelesaikan pendidikan di <strong className="text-white font-semibold">SMK Skill Village Islamic School</strong>.
              </p>
              <p>
                Saya menikmati proses membawa sebuah ide dari folder kosong hingga menjadi aplikasi yang berfungsi penuh: mulai dari merancang skema database, membangun API backend, sampai memoles antarmuka agar intuitif dan tidak membingungkan pengguna.
              </p>
            </div>

            {/* Counters Row */}
            <div className="grid grid-cols-3 gap-6 pt-4 border-t border-white/15">
              <div>
                <span className="block text-3xl sm:text-4xl font-black text-amber-400 tabular-nums">
                  {about.yearsBuilding}+
                </span>
                <span className="text-xs sm:text-sm text-slate-300 font-medium mt-1 block">
                  Tahun Bangun Web
                </span>
              </div>
              <div>
                <span className="block text-3xl sm:text-4xl font-black text-amber-400 tabular-nums">
                  {about.projectsShipped}+
                </span>
                <span className="text-xs sm:text-sm text-slate-300 font-medium mt-1 block">
                  Proyek Rilis
                </span>
              </div>
              <div>
                <span className="block text-3xl sm:text-4xl font-black text-amber-400 tabular-nums">
                  {about.stacksUsed}+
                </span>
                <span className="text-xs sm:text-sm text-slate-300 font-medium mt-1 block">
                  Teknologi Aktif
                </span>
              </div>
            </div>

            {/* Action Row: Download CV & Script Signature */}
            <div className="flex flex-wrap items-center gap-6 pt-2">
              <a
                href="/MyCV.pdf"
                download="Lucky_Ubaidillah_CV.pdf"
                className="inline-flex items-center pl-6 pr-2 py-2 rounded-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-lg group cursor-pointer"
              >
                <span>Download CV</span>
                <span className="ml-3.5 w-8 h-8 rounded-full bg-[#142d1f] text-amber-400 flex items-center justify-center group-hover:translate-y-0.5 transition-transform">
                  <ArrowDownToLine size={15} />
                </span>
              </a>

              <div className="font-serif italic text-2xl sm:text-3xl text-amber-300/90 font-bold select-none">
                Lucky Ubaidillah
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
