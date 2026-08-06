import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "../../content/blog";
import { SectionHeading } from "../ui/SectionHeading";
import { Tag } from "../ui/Tag";
import { staggerContainer, fadeUp } from "../../animations/variants";

export function BlogSection() {
  const sortedPosts = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <section
      id="blog"
      className="px-5 py-24 sm:px-10 lg:py-32 border-t border-border/60"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Blog"
            heading="Catatan, studi kasus, dan dokumentasi pengembangan"
            description="Pengalaman membangun website, solusi masalah teknis, dan pelajaran yang saya kumpulkan selama menjadi Web Developer."
            index="06"
          />
          <Link
            to="/blog"
            className="group inline-flex items-center gap-2 text-sm font-medium text-primary-soft hover:text-text transition-colors"
          >
            Semua artikel
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 gap-6 lg:columns-3 lg:[column-fill:_balance]"
        >
          {sortedPosts.map((post) => (
            <motion.article
              key={post.slug}
              variants={fadeUp}
              className="group mb-6 break-inside-avoid overflow-hidden rounded-2xl border border-border bg-surface transition-colors hover:border-primary/40"
            >
              <Link to={`/blog/${post.slug}`} className="block overflow-hidden">
                <div className="aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={post.cover}
                    alt={post.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
              </Link>

              <div className="p-5">
                <div className="flex flex-wrap items-center gap-2">
                  <Tag>{post.category}</Tag>
                  <span className="text-[11px] uppercase tracking-wider text-muted-dim">
                    {new Date(post.date).toLocaleDateString("id-ID", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                </div>

                <h3 className="mt-3 font-display text-base font-semibold leading-snug text-text">
                  <Link
                    to={`/blog/${post.slug}`}
                    className="hover:text-primary-soft transition-colors"
                  >
                    {post.title}
                  </Link>
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-muted line-clamp-3">
                  {post.summary}
                </p>

                <div className="mt-4 flex items-center justify-between border-t border-border pt-4 text-xs text-muted">
                  <span>{post.readTime}</span>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 font-medium text-primary-soft hover:gap-2 transition-all"
                  >
                    Baca
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
