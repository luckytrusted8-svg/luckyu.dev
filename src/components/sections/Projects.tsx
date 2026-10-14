import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { projects } from "../../data/projectsData";
import { useLanguage } from "../../context/LanguageContext";

export function Projects() {
  const { language, t } = useLanguage();
  const sorted = [...projects].sort((a, b) => a.order - b.order).slice(0, 4);

  return (
    <section
      id="projects"
      className="relative px-5 sm:px-8 lg:px-12 py-20 sm:py-28 bg-[#fafaf9] border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header Row: Title on Left, View All Button on Right */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-500 font-mono">
              <span className="w-5 h-[2px] bg-amber-500 inline-block"></span>
              <span>{t("Portofolio & Karya", "My Portfolio")}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-[-0.03em] leading-tight">
              {language === "id" ? (
                <>
                  Studi Kasus &amp; <span className="text-amber-500">Proyek Nyata</span>
                </>
              ) : (
                <>
                  My Latest <span className="text-amber-500">Projects</span>
                </>
              )}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-xl leading-relaxed">
              {t(
                "Koleksi aplikasi web yang saya rancang dan bangun dari arsitektur backend hingga antarmuka pengguna interaktif.",
                "A collection of web applications engineered from backend architecture to interactive user interfaces."
              )}
            </p>
          </div>

          {/* View All Projects Capsule Button */}
          <Link
            to="/all-projects"
            className="inline-flex items-center pl-6 pr-2 py-2 rounded-full bg-[#142d1f] hover:bg-[#0d1e14] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-sm group shrink-0 self-start md:self-auto"
          >
            <span>{t("Lihat Semua Proyek", "View All Projects")}</span>
            <span className="ml-3.5 w-8 h-8 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
              <ArrowRight size={14} />
            </span>
          </Link>
        </div>

        {/* 2x2 Project Cards Grid matching Behance Reference */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sorted.map((project) => {
            // Select up to 3 showcase tags for clean amber pill badges
            const displayTags = project.tech.slice(0, 3);
            const previewImage =
              project.slug === "pos-skillage-mart" && project.images[1]
                ? project.images[1]
                : project.images[0];

            return (
              <article
                key={project.slug}
                className="bg-white rounded-[28px] border border-slate-200/90 p-5 sm:p-7 shadow-2xs hover:shadow-xl hover:border-amber-400/80 transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Top: Mockup Image Preview */}
                <Link
                  to={`/projects/${project.slug}`}
                  className="block overflow-hidden rounded-2xl bg-slate-100 aspect-[16/10] relative mb-6 shadow-xs border border-slate-100"
                >
                  <img
                    src={previewImage}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </Link>

                {/* Middle: Amber Pill Badges */}
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  {displayTags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3.5 py-1 rounded-full bg-amber-400 text-slate-950 text-xs font-bold shadow-2xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bottom: Title & Dark Pine Circular Arrow Button */}
                <div className="flex items-center justify-between gap-4 pt-1">
                  <Link
                    to={`/projects/${project.slug}`}
                    className="font-black text-lg sm:text-xl text-slate-900 group-hover:text-amber-600 transition-colors leading-snug line-clamp-2"
                  >
                    {project.title}
                  </Link>

                  <Link
                    to={`/projects/${project.slug}`}
                    className="w-10 h-10 rounded-full bg-[#142d1f] text-white flex items-center justify-center shrink-0 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors shadow-xs"
                    aria-label={`Lihat detail ${project.title}`}
                  >
                    <ArrowUpRight size={18} />
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
