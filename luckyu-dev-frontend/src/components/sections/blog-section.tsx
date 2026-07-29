import { Card } from "@/components/ui/card";
import { RevealOnScroll } from "@/components/shared/reveal-on-scroll";
import { SectionEyebrow } from "@/components/shared/section-eyebrow";
import type { BlogPost } from "@/types/api";

export function BlogSection({ posts }: { posts: BlogPost[] }) {
  return (
    <section id="blog" className="bg-background-secondary px-6 py-24 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <RevealOnScroll className="mb-14">
          <SectionEyebrow>BLOG</SectionEyebrow>
          <h2 className="font-display text-[32px] font-light lg:text-[40px]">Artikel Terbaru</h2>
        </RevealOnScroll>

        {posts.length === 0 ? (
          <p className="text-sm text-text-muted">
            Belum ada artikel dipublikasikan. Kelola dari admin dashboard.
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Card key={post.id} className="overflow-hidden">
                {post.cover_image && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={post.cover_image.url} alt={post.title} className="h-40 w-full object-cover" />
                )}
                <div className="p-5">
                  <span className="text-[11px] font-semibold text-brand-secondary">
                    {post.category?.name?.toUpperCase()}
                  </span>
                  <h3 className="my-2 font-display text-[16px] font-medium">{post.title}</h3>
                  <p className="text-[13px] text-text-secondary">{post.excerpt}</p>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
