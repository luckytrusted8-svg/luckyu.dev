import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { blogPosts } from "../../content/blog";

export function BlogSection() {
  const sortedPosts = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <section
      id="blog"
      className="relative px-5 sm:px-8 lg:px-12 py-20 sm:py-28 bg-white border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600 font-mono">
              <span>— Catatan &amp; Tulisan</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-[-0.03em] leading-tight">
              Artikel &amp; <span className="text-amber-500">Catatan Belajar</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-xl leading-relaxed">
              Dokumentasi solusi teknis, eksperimen kode, dan pengalaman nyata membangun sistem web.
            </p>
          </div>

          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#142d1f] hover:bg-[#0d1e14] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-sm"
          >
            <span>Buka Semua Artikel</span>
            <ArrowUpRight size={14} />
          </Link>
        </div>

        {/* Clean Article Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedPosts.slice(0, 3).map((post) => {
            const dateStr = new Date(post.date).toLocaleDateString("id-ID", {
              day: "numeric",
              month: "short",
              year: "numeric",
            });

            return (
              <article
                key={post.slug}
                className="p-7 rounded-2xl bg-[#fafaf9] border border-slate-200 hover:border-amber-400 hover:bg-white hover:shadow-lg transition-all duration-200 flex flex-col justify-between group shadow-xs"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between font-mono text-xs text-slate-500">
                    <span className="px-2.5 py-1 rounded-full bg-slate-200/80 text-slate-700 font-semibold">
                      {post.category}
                    </span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="font-display font-bold text-lg text-slate-900 group-hover:text-amber-600 transition-colors leading-snug">
                    <Link to={`/blog/${post.slug}`} className="hover:underline">
                      {post.title}
                    </Link>
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                    {post.summary}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-200/60 mt-6 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-mono">{dateStr}</span>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="font-bold text-[#142d1f] group-hover:text-amber-600 flex items-center gap-1 transition-colors"
                  >
                    <span>Baca tulisan</span>
                    <span>→</span>
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
