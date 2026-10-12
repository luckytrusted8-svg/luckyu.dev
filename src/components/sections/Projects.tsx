import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, GitFork, ExternalLink, ArrowUpRight } from "lucide-react";
import { projects } from "../../data/projectsData";

export function Projects() {
  const [filter, setFilter] = useState<string>("all");
  const sorted = [...projects].sort((a, b) => a.order - b.order);

  const categories = ["all", "Full-Stack", "Laravel", "React"];

  const filtered = sorted.filter((p) => {
    if (filter === "all") return true;
    if (filter === "Full-Stack") return p.category.toLowerCase().includes("full-stack") || p.tech.includes("React");
    if (filter === "Laravel") return p.tech.some((t) => t.toLowerCase().includes("laravel"));
    if (filter === "React") return p.tech.some((t) => t.toLowerCase().includes("react"));
    return true;
  });

  return (
    <section
      id="projects"
      className="relative px-5 sm:px-8 lg:px-12 py-24 sm:py-32 border-b border-white/10 bg-[#080b12]"
    >
      <div className="max-w-7xl mx-auto space-y-14">
        {/* Header & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs text-amber-400">
              <span className="px-2 py-0.5 rounded-sm bg-amber-400/10 font-bold border border-amber-400/20">01</span>
              <span className="uppercase tracking-widest font-semibold">KARYA PILIHAN / STUDI KASUS PRODUKSI</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-[-0.03em] leading-tight">
              proyek nyata, hasil terukur.
            </h2>
            <p className="text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed">
              Arsitektur aplikasi web yang dibangun dari fondasi yang kuat — performa tinggi,
              kode modular, dan kepuasan pengguna akhir.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full border transition-all cursor-pointer uppercase ${
                  filter === cat
                    ? "bg-amber-400 text-slate-950 border-amber-400 font-bold shadow-[0_0_15px_rgba(245,158,11,0.3)]"
                    : "bg-white/5 text-slate-400 border-white/10 hover:border-white/20 hover:text-white"
                }`}
              >
                {cat === "all" ? "Semua Koleksi" : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Cinematic Project Cards */}
        <div className="space-y-12">
          {filtered.slice(0, 4).map((project, idx) => {
            const stepNumber = String(idx + 1).padStart(2, "0");

            return (
              <article
                key={project.slug}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10 rounded-3xl bg-[#0e1422] border border-white/10 hover:border-amber-400/35 transition-all duration-300 shadow-[0_15px_40px_rgba(0,0,0,0.5)] group"
              >
                {/* Left (Image Frame): Cols 1-7 */}
                <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
                  <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#070a10] aspect-16/10 group-hover:border-white/20 transition-all">
                    <img
                      src={project.images[0] || "/images/placeholder.png"}
                      alt={project.title}
                      className="w-full h-full object-cover object-top filter brightness-95 group-hover:brightness-105 group-hover:scale-[1.02] transition-all duration-500"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = "none";
                      }}
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-md border border-white/10 font-mono text-[10px] uppercase font-bold text-amber-400">
                      INDEX_{stepNumber}
                    </div>
                  </div>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap items-center gap-1.5 font-mono text-xs">
                    <span className="text-slate-500 mr-1 text-[11px]">STACK:</span>
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-0.5 rounded-full border border-white/10 bg-white/5 text-slate-300 text-[11px]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right (Details): Cols 8-12 */}
                <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-white/10 pb-3 font-mono text-xs">
                      <span className="text-amber-400 font-bold uppercase tracking-wider">
                        {project.category}
                      </span>
                      <span className="text-slate-500">#{project.order}</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight group-hover:text-amber-300 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-sm text-slate-300 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-3">
                    <Link
                      to={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-[0_0_15px_rgba(245,158,11,0.25)] hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] transition-all cursor-pointer"
                    >
                      <span>Studi Kasus</span>
                      <ArrowRight size={14} />
                    </Link>

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full border border-white/10 bg-white/5 hover:border-white/30 text-slate-300 hover:text-white text-xs font-semibold uppercase tracking-wider transition-all"
                      >
                        <GitFork size={13} />
                        <span>Source Code</span>
                      </a>
                    )}

                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 hover:border-cyan-400 text-cyan-300 text-xs font-semibold uppercase tracking-wider transition-all"
                      >
                        <ExternalLink size={13} />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Footer Archive Link */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
          <span className="text-slate-400">
            TOTAL PROYEK TERDOKUMENTASI: <strong className="text-white">{sorted.length} REPOSITORI</strong>
          </span>
          <Link
            to="/all-projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/15 bg-white/5 hover:border-amber-400 hover:text-amber-300 text-slate-200 transition-all font-semibold uppercase tracking-wider"
          >
            <span>Buka Arsip Lengkap Proyek</span>
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
