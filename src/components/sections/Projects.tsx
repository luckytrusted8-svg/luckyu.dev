import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight, GitFork, ExternalLink } from "lucide-react";
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
      className="relative px-5 sm:px-8 lg:px-12 py-20 sm:py-28 border-b border-[var(--color-rule)] bg-[var(--color-paper)]"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header (Swiss Folio & Left-Aligned Title) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[var(--color-rule)]">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs text-[var(--color-ink-muted)]">
              <span className="px-2 py-0.5 bg-[var(--color-ink)] text-white font-bold">01</span>
              <span className="uppercase tracking-widest font-semibold">PORTFOLIO GRID / CASE STUDIES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-[var(--color-ink)] tracking-[-0.035em] leading-tight">
              karya terpilih & hasil rekayasa nyata.
            </h2>
            <p className="text-sm sm:text-base text-[var(--color-ink-muted)] max-w-2xl">
              Studi kasus implementasi nyata — dirancang dari fondasi arsitektur bersih,
              kecepatan pemuatan tinggi, dan kebutuhan bisnis yang konkret.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center gap-1.5 font-mono text-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`px-3 py-1.5 border transition-all cursor-pointer uppercase ${
                  filter === cat
                    ? "bg-[var(--color-ink)] text-white border-[var(--color-ink)] font-semibold"
                    : "bg-white text-[var(--color-ink-muted)] border-[var(--color-rule)] hover:border-[var(--color-ink)] hover:text-[var(--color-ink)]"
                }`}
              >
                {cat === "all" ? "Semua Koleksi" : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Cells (Macrostructure 18: Stacked Architectural Modules) */}
        <div className="space-y-10">
          {filtered.slice(0, 4).map((project, idx) => {
            const stepNumber = String(idx + 1).padStart(2, "0");

            return (
              <article
                key={project.slug}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8 bg-white border border-[var(--color-rule)] hover:border-[var(--color-ink)] transition-colors duration-200"
              >
                {/* Left (Image Frame): Cols 1-7 */}
                <div className="lg:col-span-7 flex flex-col justify-between">
                  <div className="relative border border-[var(--color-rule)] bg-[var(--color-paper-2)] overflow-hidden aspect-16/10">
                    <img
                      src={project.images[0] || "/images/placeholder.png"}
                      alt={project.title}
                      className="w-full h-full object-cover object-top filter grayscale-20 hover:grayscale-0 transition-all duration-300"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = "none";
                      }}
                    />
                    <div className="absolute top-3 left-3 px-2 py-1 bg-[var(--color-ink)] text-white font-mono text-[10px] uppercase font-bold tracking-wider">
                      INDEX_{stepNumber}
                    </div>
                  </div>

                  {/* Tech Specs Ledger Row */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-4 font-mono text-[11px] text-[var(--color-ink-muted)]">
                    <span className="text-[var(--color-ink-dim)] mr-1">STACK:</span>
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 border border-[var(--color-rule)] bg-[var(--color-paper-2)] text-[var(--color-ink)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right (Information & Case Study Details): Cols 8-12 */}
                <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-[var(--color-rule)] pb-2 font-mono text-xs">
                      <span className="text-[var(--color-signal)] font-bold uppercase tracking-wider">
                        {project.category}
                      </span>
                      <span className="text-[var(--color-ink-dim)]">ORDER: #{project.order}</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-black text-[var(--color-ink)] tracking-tight">
                      {project.title}
                    </h3>

                    <p className="text-sm text-[var(--color-ink-muted)] leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-[var(--color-rule)] flex flex-wrap items-center gap-3">
                    <Link
                      to={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--color-ink)] text-white hover:bg-[var(--color-signal)] text-xs font-semibold uppercase tracking-wider transition-colors"
                    >
                      <span>Buka Studi Kasus</span>
                      <ArrowRight size={14} />
                    </Link>

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 border border-[var(--color-rule)] bg-white hover:border-[var(--color-ink)] text-[var(--color-ink)] text-xs font-semibold uppercase tracking-wider transition-colors"
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
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 border border-[var(--color-rule)] bg-white hover:border-[var(--color-signal)] text-[var(--color-signal)] text-xs font-semibold uppercase tracking-wider transition-colors"
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

        {/* Footer Ledger CTA */}
        <div className="pt-6 border-t border-[var(--color-rule)] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
          <span className="text-[var(--color-ink-muted)]">
            TOTAL PROYEK TERDOKUMENTASI: <strong className="text-[var(--color-ink)]">{sorted.length} REPOSITORI</strong>
          </span>
          <Link
            to="/all-projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-[var(--color-ink)] bg-white hover:bg-[var(--color-ink)] hover:text-white transition-colors font-semibold uppercase tracking-wider"
          >
            <span>Buka Arsip Lengkap Proyek</span>
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
