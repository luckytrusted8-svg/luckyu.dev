import { useState } from "react";
import { Link } from "react-router-dom";
import { ExternalLink, GitFork, ArrowUpRight } from "lucide-react";
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
      className="relative px-5 sm:px-8 lg:px-12 py-20 sm:py-28 bg-[#fafaf9] border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header & Filter Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600 font-mono">
              <span>— Portofolio &amp; Karya</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-[-0.03em] leading-tight">
              Studi Kasus &amp; <span className="text-amber-500">Proyek Nyata</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-xl leading-relaxed">
              Aplikasi web yang saya bangun dari tahap perencanaan database hingga antarmuka siap pakai.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full border transition-all cursor-pointer font-bold uppercase ${
                  filter === cat
                    ? "bg-[#142d1f] text-white border-[#142d1f] shadow-sm"
                    : "bg-white text-slate-700 border-slate-300 hover:border-slate-400 hover:bg-slate-50"
                }`}
              >
                {cat === "all" ? "Semua Proyek" : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="space-y-10">
          {filtered.map((project, idx) => {
            const stepNumber = String(idx + 1).padStart(2, "0");

            return (
              <article
                key={project.slug}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10 rounded-3xl bg-white border border-slate-200 hover:border-amber-400/80 transition-all duration-300 shadow-xs hover:shadow-xl group"
              >
                {/* Left Column (Cols 1-6): Information & Action */}
                <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    {/* Index & Category */}
                    <div className="flex items-center gap-3 font-mono text-xs">
                      <span className="w-7 h-7 rounded-full bg-amber-100 text-amber-800 font-bold flex items-center justify-center">
                        {stepNumber}
                      </span>
                      <span className="text-slate-500 font-semibold uppercase tracking-wider">
                        {project.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-display font-black text-2xl sm:text-3xl text-slate-900 group-hover:text-amber-600 transition-colors leading-tight">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 font-mono text-xs font-medium border border-slate-200"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links Row */}
                  <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-100">
                    <Link
                      to={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#142d1f] hover:bg-[#0d1e14] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-sm group/btn"
                    >
                      <span>Lihat Detail Studi Kasus</span>
                      <ArrowUpRight size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </Link>

                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-amber-50 text-amber-900 border border-amber-300 hover:bg-amber-100 text-xs font-bold uppercase tracking-wider transition-all"
                      >
                        <ExternalLink size={13} />
                        <span>Live Demo</span>
                      </a>
                    )}

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-slate-50 text-slate-700 border border-slate-200 hover:bg-slate-100 text-xs font-semibold uppercase tracking-wider transition-all"
                      >
                        <GitFork size={13} />
                        <span>GitHub</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Right Column (Cols 7-12): Screenshot Preview */}
                <div className="lg:col-span-6 flex items-center">
                  <Link
                    to={`/projects/${project.slug}`}
                    className="block w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-md group-hover:shadow-lg transition-all"
                  >
                    <div className="aspect-video w-full overflow-hidden relative">
                      <img
                        src={project.images[0]}
                        alt={project.title}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
