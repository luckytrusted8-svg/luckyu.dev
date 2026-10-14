import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { blogPosts } from "../../content/blog";
import { useLanguage } from "../../context/LanguageContext";

export function BlogSection() {
  const { language, t } = useLanguage();
  const sortedPosts = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <section
      id="blog"
      className="relative px-5 sm:px-8 lg:px-12 py-20 sm:py-28 bg-[#fafaf9] border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header Row: Title on Left, View All Blogs Button on Right */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-500 font-mono">
              <span className="w-5 h-[2px] bg-amber-500 inline-block"></span>
              <span>{t("Catatan & Tulisan", "News & Blogs")}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-[-0.03em] leading-tight">
              {t("Artikel & Catatan", "Our Latest")} <br className="hidden sm:inline" />
              <span className="text-amber-500">
                {t("Belajar Terbaru", "News & Blogs")}
              </span>
            </h2>
          </div>

          <Link
            to="/blog"
            className="inline-flex items-center pl-6 pr-2 py-2 rounded-full bg-[#142d1f] hover:bg-[#0d1e14] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-sm group shrink-0 self-start md:self-auto"
          >
            <span>{t("Lihat Semua Artikel", "View All Blogs")}</span>
            <span className="ml-3.5 w-8 h-8 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
              <ArrowRight size={14} />
            </span>
          </Link>
        </div>

        {/* 3 Blog Cards Grid matching Behance Reference */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedPosts.slice(0, 3).map((post) => {
            const dateStr = new Date(post.date).toLocaleDateString(
              language === "id" ? "id-ID" : "en-US",
              {
                day: "numeric",
                month: "short",
                year: "numeric",
              }
            );

            return (
              <article
                key={post.slug}
                className="bg-white rounded-[28px] border border-slate-200/90 p-5 sm:p-6 shadow-2xs hover:shadow-xl hover:border-amber-400/80 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top: Mockup / Cover Image with Floating Arrow */}
                  <Link
                    to={`/blog/${post.slug}`}
                    className="block overflow-hidden rounded-2xl bg-slate-100 aspect-[16/10] relative mb-5 shadow-xs border border-slate-100"
                  >
                    <img
                      src={post.cover}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3.5 right-3.5 w-9 h-9 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                      <ArrowUpRight size={17} className="stroke-[2.5]" />
                    </div>
                  </Link>

                  {/* Dual Amber Badges: Category & Date */}
                  <div className="flex flex-wrap items-center gap-2 mb-3.5">
                    <span className="px-3 py-1 rounded-full bg-amber-400 text-slate-950 text-xs font-bold shadow-2xs">
                      {post.category}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-amber-400 text-slate-950 text-xs font-bold shadow-2xs">
                      {dateStr}
                    </span>
                  </div>

                  {/* Bold Title */}
                  <h3 className="font-black text-lg sm:text-xl text-slate-900 group-hover:text-amber-600 transition-colors leading-snug line-clamp-2 mb-2.5">
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>

                  {/* Summary Snippet */}
                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed mb-5">
                    {post.summary}
                  </p>
                </div>

                {/* Bottom: Read More text link */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    to={`/blog/${post.slug}`}
                    className="text-xs font-bold text-slate-900 group-hover:text-amber-600 flex items-center gap-1.5 transition-colors underline underline-offset-4 decoration-slate-300 group-hover:decoration-amber-500"
                  >
                    <span>{t("Baca Selengkapnya", "Read More")}</span>
                    <span>→</span>
                  </Link>
                  <span className="font-mono text-[11px] text-slate-400">
                    {post.readTime}
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
