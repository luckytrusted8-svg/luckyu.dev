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
      className="relative px-5 sm:px-8 lg:px-12 py-20 sm:py-28 border-b border-[var(--color-rule)] bg-[var(--color-paper)]"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header Folio */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-6 border-b border-[var(--color-rule)]">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs text-[var(--color-ink-muted)]">
              <span className="px-2 py-0.5 bg-[var(--color-ink)] text-white font-bold">06</span>
              <span className="uppercase tracking-widest font-semibold">TULISAN & CATATAN REKAYASA</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-[var(--color-ink)] tracking-[-0.035em] leading-tight">
              dokumentasi & analisis teknis.
            </h2>
          </div>
          <Link
            to="/blog"
            className="font-mono text-xs font-semibold text-[var(--color-signal)] hover:underline flex items-center gap-1 uppercase"
          >
            <span>Buka Arsip Lengkap</span>
            <ArrowUpRight size={13} />
          </Link>
        </div>

        {/* Editorial Index Rows (Hairline Ruled List) */}
        <div className="border border-[var(--color-rule)] bg-white divide-y divide-[var(--color-rule)]">
          {sortedPosts.slice(0, 4).map((post, idx) => {
            const issueNumber = String(idx + 1).padStart(2, "0");
            const dateStr = new Date(post.date).toLocaleDateString("id-ID", {
              day: "numeric",
              month: "short",
              year: "numeric",
            });

            return (
              <article
                key={post.slug}
                className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6 sm:p-8 hover:bg-[var(--color-paper-2)] transition-colors duration-150 items-center group"
              >
                {/* Meta & Issue: Cols 1-3 */}
                <div className="md:col-span-3 space-y-1 font-mono text-xs">
                  <div className="flex items-center gap-2">
                    <span className="text-[var(--color-signal)] font-bold">ISSUE_{issueNumber}</span>
                    <span className="px-2 py-0.5 border border-[var(--color-rule)] bg-[var(--color-paper-3)] text-[var(--color-ink)] text-[10px] uppercase font-bold">
                      {post.category}
                    </span>
                  </div>
                  <div className="text-[var(--color-ink-dim)] text-[11px] pt-1">
                    {dateStr} &bull; {post.readTime}
                  </div>
                </div>

                {/* Title & Summary: Cols 4-10 */}
                <div className="md:col-span-7 space-y-1.5">
                  <h3 className="font-display font-bold text-lg sm:text-xl text-[var(--color-ink)] group-hover:text-[var(--color-signal)] transition-colors leading-snug">
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--color-ink-muted)] line-clamp-2 leading-relaxed">
                    {post.summary}
                  </p>
                </div>

                {/* Action Arrow: Cols 11-12 */}
                <div className="md:col-span-2 flex justify-end">
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold uppercase text-[var(--color-ink)] group-hover:text-[var(--color-signal)] transition-colors"
                  >
                    <span>Baca</span>
                    <ArrowUpRight size={14} />
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
