import { useState } from "react";
import { getSkills } from "../../lib/content";

export function Skills() {
  const { categories } = getSkills();
  const [activeTab, setActiveTab] = useState(0);
  const active = categories[activeTab];

  // Specific high-frequency tools with real logos
  const favoriteTools = [
    {
      name: "React",
      category: "Frontend",
      desc: "Library UI utama untuk SPA & aplikasi reaktif",
      icon: "/icons/react.png",
      bgClass: "bg-cyan-50 border-cyan-200",
    },
    {
      name: "Next.js",
      category: "Full-Stack",
      desc: "SSR, API routes, dan arsitektur aplikasi modern",
      icon: "/icons/nextjs.png",
      bgClass: "bg-slate-100 border-slate-300",
    },
    {
      name: "Laravel",
      category: "Backend",
      desc: "Framework PHP untuk REST API & admin panel",
      icon: "/icons/laravel.png",
      bgClass: "bg-rose-50 border-rose-200",
    },
    {
      name: "Tailwind CSS",
      category: "Styling",
      desc: "Desain antarmuka cepat & konsisten",
      icon: "/icons/tailwind.png",
      bgClass: "bg-sky-50 border-sky-200",
    },
    {
      name: "TypeScript",
      category: "Language",
      desc: "Keamanan tipe data & autocompletion rapi",
      icon: "/icons/typescript.png",
      bgClass: "bg-blue-50 border-blue-200",
    },
    {
      name: "MySQL",
      category: "Database",
      desc: "Relasi data terstruktur & query teroptimasi",
      icon: "/icons/mysql.png",
      bgClass: "bg-amber-50 border-amber-200",
    },
    {
      name: "Prisma ORM",
      category: "Database",
      desc: "Schema modeling & migrasi database aman",
      icon: "/icons/prisma.png",
      bgClass: "bg-teal-50 border-teal-200",
    },
    {
      name: "Node.js",
      category: "Runtime",
      desc: "Ekosistem JavaScript server-side & tools",
      icon: "/icons/nodejs.png",
      bgClass: "bg-emerald-50 border-emerald-200",
    },
    {
      name: "Git",
      category: "Version Control",
      desc: "Branching, committing, dan history tracking",
      icon: "/icons/git.png",
      bgClass: "bg-orange-50 border-orange-200",
    },
    {
      name: "GitHub",
      category: "Platform",
      desc: "Kolaborasi repository & open-source",
      icon: "/icons/github.png",
      bgClass: "bg-slate-100 border-slate-300",
    },
    {
      name: "Figma",
      category: "UI/UX",
      desc: "Perancangan wireframe & mockup sebelum koding",
      icon: "/icons/figma.png",
      bgClass: "bg-purple-50 border-purple-200",
    },
  ];

  return (
    <section
      id="skills"
      className="relative px-5 sm:px-8 lg:px-12 py-20 sm:py-28 bg-white border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600 font-mono">
            <span>// My Favorite Tools</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-[-0.03em] leading-tight">
            <span className="text-amber-500">Exploring the Tools</span> Behind My Code
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Perangkat lunak, framework, dan teknologi yang saya gunakan sehari-hari untuk mengembangkan aplikasi web dari folder kosong hingga rilis.
          </p>
        </div>

        {/* Favorite Tools Grid with Real Brand Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6">
          {favoriteTools.map((tool, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#fafaf9] border border-slate-200 hover:border-amber-400 hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-200 flex flex-col items-center text-center space-y-3.5 group cursor-default"
            >
              {/* Tool Logo Icon Box */}
              <div
                className={`w-16 h-16 rounded-2xl border ${tool.bgClass} flex items-center justify-center p-3 shadow-xs group-hover:scale-105 transition-transform`}
              >
                <img
                  src={tool.icon}
                  alt={tool.name}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="space-y-1.5 w-full">
                <h3 className="font-bold text-sm sm:text-base text-slate-900 group-hover:text-amber-600 transition-colors">
                  {tool.name}
                </h3>
                <span className="inline-block text-[10px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-slate-200/80 text-slate-700">
                  {tool.category}
                </span>
                <p className="text-[11px] text-slate-500 line-clamp-2 pt-1 leading-snug">
                  {tool.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Categorized Matrix Detail */}
        <div className="pt-8 border-t border-slate-200">
          <div className="flex flex-wrap items-center justify-center gap-2 font-mono text-xs pb-6">
            {categories.map((cat, i) => (
              <button
                key={cat.name}
                type="button"
                onClick={() => setActiveTab(i)}
                className={`px-4 py-2 rounded-full border transition-all cursor-pointer font-semibold uppercase ${
                  activeTab === i
                    ? "bg-[#142d1f] text-white border-[#142d1f] shadow-sm"
                    : "bg-white text-slate-700 border-slate-300 hover:border-slate-400"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {active.skills.map((skill) => (
              <div
                key={skill.name}
                className="p-5 rounded-xl bg-[#fafaf9] border border-slate-200 flex items-center justify-between hover:bg-white hover:border-slate-300 transition-all"
              >
                <span className="font-bold text-sm text-slate-900">{skill.name}</span>
                <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-amber-100 text-amber-800">
                  Tingkat {skill.level}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
