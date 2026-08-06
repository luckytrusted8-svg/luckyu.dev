import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ArrowLeft, Share2, Copy, CalendarDays } from "lucide-react";
import { Footer } from "../components/layout/Footer";
import { Tag } from "../components/ui/Tag";
import { getBlogBySlug, blogPosts } from "../content/blog";

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

export function BlogDetail() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogBySlug(slug) : undefined;
  const [progress, setProgress] = useState(0);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!post) return;
    document.title = `${post.title} | Blog | Lucky Ubaidillah`;
    const descriptionElement = document.head.querySelector<HTMLMetaElement>("meta[name='description']");
    if (descriptionElement) {
      descriptionElement.content = post.summary;
    }
  }, [post]);

  useEffect(() => {
    const element = contentRef.current;
    if (!element) return;

    const handler = () => {
      const total = element.scrollHeight - window.innerHeight;
      if (total <= 0) return setProgress(100);
      const scrolled = window.scrollY;
      const top = element.offsetTop;
      const current = Math.min(100, Math.max(0, ((scrolled - top + 120) / total) * 100));
      setProgress(current);
    };

    handler();
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, [post]);

const tableOfContents = useMemo(() => {
    if (!post) return [];
    // Hanya tangkap h2 (##) dan h3 (###), abaikan h4+ (####) dan heading inline
    const headings = Array.from(post.body.matchAll(/^(#{2,3})\s+(.*)$/gm));
    return headings.map((item) => ({
      level: item[1].length,
      title: item[2].trim(),
      id: item[2].toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9\-]/g, ""),
    }));
  }, [post]);

  const jsonLd = useMemo(() => {
    if (!post) return null;
    return {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.summary,
      image: [`https://luckyu.dev${post.cover}`],
      author: {
        "@type": "Person",
        name: "Lucky Ubaidillah",
      },
      publisher: {
        "@type": "Organization",
        name: "Lucky Ubaidillah",
        logo: {
          "@type": "ImageObject",
          url: "https://luckyu.dev/logo-dark.png",
        },
      },
      datePublished: post.date,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `https://luckyu.dev/blog/${post.slug}`,
      },
    };
  }, [post]);

  const related = useMemo(() => {
    if (!post) return [];
    return blogPosts.filter((item) => item.slug !== post.slug && item.category === post.category).slice(0, 2);
  }, [post]);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
  };

  return (
    <div className="bg-bg">
      <article className="px-5 py-16 sm:px-10 lg:px-14 lg:py-20">
        <div className="mx-auto max-w-5xl">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-xs font-medium text-muted hover:text-text transition-colors"
          >
            <ArrowLeft size={14} />
            Kembali ke blog
          </Link>

          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 rounded-[2.5rem] border border-border bg-surface/80 p-6 shadow-2xl shadow-black/5 backdrop-blur-xl sm:p-10"
          >
            <div className="space-y-5">
              <div className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-end">
                <div>
                  <span className="text-[11px] uppercase tracking-[0.28em] text-muted-dim">{post.category}</span>
                  <h1 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-text sm:text-5xl">{post.title}</h1>
                </div>
                <div className="space-y-2 rounded-3xl border border-border bg-bg-elevated p-4 text-sm text-muted">
                  <div className="flex items-center gap-2">
                    <CalendarDays size={16} />
                    <span>{new Date(post.date).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Copy size={16} />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>

              <div className="overflow-hidden rounded-[2rem] bg-slate-100">
                <img src={post.cover} alt={post.title} className="h-72 w-full object-cover" />
              </div>

              <div className="rounded-full bg-border/20 p-1">
                <div className="h-2 rounded-full bg-primary" style={{ width: `${progress}%` }} />
              </div>

              <div className="grid gap-4 sm:grid-cols-[1fr_260px]">
                <div className="space-y-4">
                  <p className="text-base leading-8 text-muted">{post.summary}</p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </div>
                </div>
                <div className="hidden rounded-[2rem] border border-border bg-surface p-6 shadow-sm shadow-black/5 lg:block">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-muted-dim">Table of Contents</p>
                  <div className="mt-4 space-y-3 text-sm text-text">
                    {tableOfContents.map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => scrollToSection(item.id)}
                        className="block w-full text-left text-sm text-muted transition hover:text-text"
                      >
                        {item.title}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {jsonLd && (
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
          )}
          <div ref={contentRef} className="prose-custom mt-12 space-y-8 text-[15px] leading-[1.85] text-muted">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h2: ({ children }) => (
                  <h2 className="mt-12 font-display text-2xl font-semibold text-text">{children}</h2>
                ),
                h3: ({ children }) => (
                  <h3 className="mt-10 text-xl font-semibold text-text">{children}</h3>
                ),
                p: ({ children }) => <p>{children}</p>,
                blockquote: ({ children }) => (
                  <blockquote className="rounded-3xl border-l-4 border-primary/70 bg-surface p-6 text-base text-text/95">
                    {children}
                  </blockquote>
                ),
pre: ({ children }) => (
                  <div className="relative rounded-3xl border border-border bg-bg-elevated p-5">
                    <button
                      type="button"
                      onClick={() => handleCopyCode(String((children as any)?.props?.children ?? ""))}
                      className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-2 text-xs font-medium text-muted transition hover:border-primary/40 hover:text-text"
                    >
                      <Copy size={14} /> Copy
                    </button>
                    <pre className="overflow-x-auto rounded-3xl bg-slate-950 px-4 py-5 text-sm text-white">
                      {children}
                    </pre>
                  </div>
                ),
                code: ({ className, children }) => {
                  const isBlock = className?.startsWith("language-");
                  if (isBlock) {
                    return (
                      <code className={`block overflow-x-auto whitespace-pre ${className ?? ""}`}>{children}</code>
                    );
                  }
                  return (
                    <code className="rounded bg-surface px-1.5 py-0.5 font-mono text-[13px] text-primary-soft">{children}</code>
                  );
                },
                li: ({ children }) => <li className="pl-1">{children}</li>,
                a: ({ href, children }) => (
                  <a href={href} className="text-primary-soft hover:text-primary" target="_blank" rel="noreferrer">
                    {children}
                  </a>
                ),
              }}
            >
              {post.body}
            </ReactMarkdown>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
            <div className="rounded-[2rem] border border-border bg-surface p-6 shadow-sm shadow-black/5">
              <p className="text-[11px] uppercase tracking-[0.28em] text-muted-dim">Bagikan</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-bg-elevated px-4 py-3 text-sm text-muted transition hover:border-primary/40 hover:text-text"
                >
                  <Share2 size={16} /> Twitter
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-bg-elevated px-4 py-3 text-sm text-muted transition hover:border-primary/40 hover:text-text"
                >
                  <Share2 size={16} /> Facebook
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-border bg-surface p-6 shadow-sm shadow-black/5">
              <p className="text-[11px] uppercase tracking-[0.28em] text-muted-dim">Artikel terkait</p>
              <div className="mt-4 space-y-3">
                {related.map((item) => (
                  <Link
                    key={item.slug}
                    to={`/blog/${item.slug}`}
                    className="block rounded-3xl border border-border bg-bg-elevated px-4 py-4 text-sm text-text transition hover:border-primary/40"
                  >
                    <p className="font-semibold">{item.title}</p>
                    <span className="text-xs text-muted">{item.category} • {item.readTime}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
}
