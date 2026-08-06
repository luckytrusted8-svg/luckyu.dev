import { useMemo, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, Filter, ArrowRight } from "lucide-react";
import { Footer } from "../components/layout/Footer";
import { Tag } from "../components/ui/Tag";
import { blogCategories, blogPosts } from "../content/blog";

const perPage = 6;

function setMetaData() {
  document.title = "Blog | Lucky Ubaidillah";
  const description = "Tempat saya membagikan pengalaman membangun website, studi kasus project, solusi masalah teknis, dan pelajaran sebagai Web Developer.";

  const setTag = (name: string, content: string) => {
    let element = document.head.querySelector<HTMLMetaElement>(`meta[name='${name}']`);
    if (!element) {
      element = document.createElement("meta");
      element.name = name;
      document.head.appendChild(element);
    }
    element.content = content;
  };

  setTag("description", description);
  setTag("og:title", "Blog | Lucky Ubaidillah");
  setTag("og:description", description);
  setTag("og:type", "website");
  setTag("og:image", "/images/blog/cover-1.svg");
  setTag("twitter:card", "summary_large_image");
}

const sortOptions = [
  { label: "Terbaru", value: "newest" },
  { label: "Terlama", value: "oldest" },
];

export function Blog() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("newest");
  const [visibleCount, setVisibleCount] = useState(perPage);

  useEffect(() => {
    setMetaData();
  }, []);

  const filteredPosts = useMemo(() => {
    const query = search.toLowerCase().trim();
    return blogPosts
      .filter((post) => (category === "All" ? true : post.category === category))
      .filter((post) => {
        if (!query) return true;
        return (
          post.title.toLowerCase().includes(query) ||
          post.summary.toLowerCase().includes(query) ||
          post.tags.some((tag) => tag.toLowerCase().includes(query))
        );
      })
      .sort((a, b) => {
        const aTime = new Date(a.date).getTime();
        const bTime = new Date(b.date).getTime();
        return sort === "newest" ? bTime - aTime : aTime - bTime;
      });
  }, [category, search, sort]);

  const visiblePosts = filteredPosts.slice(0, visibleCount);
  const canLoadMore = visibleCount < filteredPosts.length;

  return (
    <div className="bg-bg">
      <section className="relative overflow-hidden px-5 py-16 sm:px-10 lg:px-14 lg:py-20">
        <div className="absolute inset-x-0 top-0 h-80 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="relative mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-[2.5rem] border border-border bg-surface/80 p-8 shadow-2xl shadow-black/5 backdrop-blur-xl sm:p-12"
          >
<div className="max-w-3xl">
              <p className="text-[11px] font-mono uppercase tracking-[0.3em] text-primary-soft">Blog</p>
              <h1 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-text sm:text-5xl">
                Blog
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-8 text-muted sm:text-lg">
                Tempat saya membagikan pengalaman membangun website, studi kasus project, solusi dari berbagai masalah yang pernah saya hadapi, serta berbagai hal yang saya pelajari selama menjadi Web Developer.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]"
          >
            <div className="space-y-6">
              <div className="rounded-[2rem] border border-border bg-surface p-5 shadow-[0_24px_60px_-38px_rgba(15,23,42,0.4)] backdrop-blur-xl sm:p-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="flex flex-col gap-2">
                    <span className="text-xs uppercase tracking-[0.3em] text-muted-dim">Search</span>
                    <div className="flex items-center gap-2 rounded-3xl border border-border bg-bg-elevated px-4 py-3">
                      <Search size={16} className="text-muted" />
                      <input
                        value={search}
                        onChange={(event) => setSearch(event.target.value)}
                        placeholder="Cari artikel, tag, atau kata kunci"
                        className="w-full border-0 bg-transparent text-text outline-none placeholder:text-muted"
                        aria-label="Search blog posts"
                      />
                    </div>
                  </label>

                  <label className="flex flex-col gap-2">
                    <span className="text-xs uppercase tracking-[0.3em] text-muted-dim">Kategori</span>
                    <div className="flex flex-wrap gap-2">
                      {blogCategories.map((option) => (
                        <button
                          key={option}
                          type="button"
                          onClick={() => {
                            setCategory(option);
                            setVisibleCount(perPage);
                          }}
                          className={
                            category === option
                              ? "rounded-full border border-primary bg-primary/10 px-4 py-2 text-sm font-medium text-text shadow-sm shadow-primary/10"
                              : "rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-muted hover:border-primary/40 hover:text-text"
                          }
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </label>
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted">
                    <Filter size={16} />
                    <span>{filteredPosts.length} artikel ditemukan</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[11px] uppercase tracking-[0.3em] text-muted-dim">Sortir</span>
                    <div className="rounded-full border border-border bg-bg-elevated px-3 py-2 text-sm text-text">
                      <select
                        value={sort}
                        onChange={(event) => setSort(event.target.value)}
                        className="w-full bg-transparent text-text outline-none"
                        aria-label="Sort blog posts"
                      >
                        {sortOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                {visiblePosts.map((post) => (
                  <motion.article
                    key={post.slug}
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="group overflow-hidden rounded-[2rem] border border-border bg-surface shadow-sm shadow-black/5 transition-all"
                  >
                    <Link to={`/blog/${post.slug}`} className="block overflow-hidden">
                      <div className="h-56 overflow-hidden bg-slate-100 transition duration-500 group-hover:scale-[1.02]">
                        <img src={post.cover} alt={post.title} className="h-full w-full object-cover" />
                      </div>
                    </Link>
                    <div className="space-y-4 p-6">
                      <div className="flex flex-wrap items-center gap-2">
                        <Tag>{post.category}</Tag>
                        <span className="text-[11px] uppercase tracking-[0.24em] text-muted-dim">{post.readTime}</span>
                      </div>
                      <h2 className="text-xl font-semibold text-text">
                        <Link to={`/blog/${post.slug}`} className="transition-colors hover:text-primary-soft">
                          {post.title}
                        </Link>
                      </h2>
                      <p className="text-sm leading-7 text-muted">{post.summary}</p>
                      <div className="flex items-center justify-between text-xs text-muted">
                        <span>{new Date(post.date).toLocaleDateString("id-ID", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}</span>
                        <span className="inline-flex items-center gap-1 text-primary-soft">
                          Baca selengkapnya <ArrowRight size={14} />
                        </span>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>

              {filteredPosts.length === 0 && (
                <div className="rounded-[2rem] border border-border bg-surface p-12 text-center text-muted">
                  Tidak ada artikel yang cocok. Coba ubah kata kunci atau kategori.
                </div>
              )}

              {canLoadMore && (
                <div className="flex justify-center">
                  <button
                    type="button"
                    onClick={() => setVisibleCount((count) => count + perPage)}
                    className="inline-flex items-center justify-center rounded-full border border-border bg-surface px-6 py-3 text-sm font-medium text-text transition hover:border-primary/40 hover:bg-surface-hover"
                  >
                    Muat lebih banyak
                  </button>
                </div>
              )}
            </div>

            <aside className="space-y-6">
              <div className="rounded-[2rem] border border-border bg-surface p-6 shadow-[0_20px_50px_-35px_rgba(15,23,42,0.45)] backdrop-blur-xl">
                <p className="text-[11px] uppercase tracking-[0.3em] text-muted-dim">Tentang Blog</p>
                <h3 className="mt-3 text-xl font-semibold text-text">Catatan teknis dan studi kasus</h3>
                <p className="mt-4 text-sm leading-7 text-muted">
                  Blog ini berisi refleksi saya saat membangun aplikasi web, solusi permasalahan nyata, dan pola desain yang saya gunakan di setiap proyek.
                </p>
              </div>

              <div className="rounded-[2rem] border border-border bg-surface p-6 shadow-sm shadow-black/5">
                <p className="text-[11px] uppercase tracking-[0.3em] text-muted-dim">Kategori unggulan</p>
                <div className="mt-4 space-y-3">
                  {blogCategories.slice(1).map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => {
                        setCategory(item);
                        setVisibleCount(perPage);
                      }}
                      className="w-full rounded-2xl border border-border bg-bg-elevated px-4 py-3 text-left text-sm text-text transition hover:border-primary/40"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] border border-border bg-surface p-6 shadow-sm shadow-black/5">
                <p className="text-[11px] uppercase tracking-[0.3em] text-muted-dim">Artikel terbaru</p>
                <div className="mt-4 space-y-3">
                  {blogPosts.slice(0, 4).map((post) => (
                    <Link
                      key={post.slug}
                      to={`/blog/${post.slug}`}
                      className="block rounded-3xl border border-border bg-bg-elevated px-4 py-3 text-sm transition hover:border-primary/40"
                    >
                      {post.title}
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
