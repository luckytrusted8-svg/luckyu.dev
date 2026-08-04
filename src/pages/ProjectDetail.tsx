import { Link, useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import { ArrowLeft, GitFork, ExternalLink } from "lucide-react";
import { getProjectBySlug, projects } from "../components/sections/Projects";
import { ProjectGallery } from "../components/ui/ProjectGallery";
import { Tag } from "../components/ui/Tag";
import { Footer } from "../components/layout/Footer";
import { fadeUp } from "../animations/variants";

export function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) {
    return <Navigate to="/" replace />;
  }

  const others = projects
    .filter((p) => p.slug !== project.slug)
    .slice(0, 2);

  return (
    <>
      <article className="px-5 py-16 sm:px-10 lg:py-24">
        <div className="mx-auto max-w-3xl">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-xs font-medium text-muted hover:text-text transition-colors"
          >
            <ArrowLeft size={14} />
            Back to projects
          </Link>

          <motion.div initial="hidden" animate="show" variants={fadeUp} className="mt-8">
            <p className="text-[11px] font-mono uppercase tracking-wider text-primary-soft">
              {project.category}
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-[-0.02em] text-text sm:text-4xl">{project.title}</h1>
            <p className="mt-4 text-muted leading-relaxed">{project.description}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-xs font-medium text-muted hover:text-text hover:border-primary-soft transition-colors"
                >
                  <GitFork size={14} />
                  View code
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-xs font-medium text-white"
                >
                  <ExternalLink size={14} />
                  Live demo
                </a>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10"
          >
            <ProjectGallery title={project.title} images={project.images} />
          </motion.div>

          <div className="prose-custom mt-12 space-y-5 text-[15px] leading-[1.85] text-muted">
            <ReactMarkdown
              components={{
                h2: ({ children }) => (
                  <h2 className="mt-10 font-display text-xl font-semibold text-text first:mt-0">
                    {children}
                  </h2>
                ),
                p: ({ children }) => <p>{children}</p>,
                ul: ({ children }) => (
                  <ul className="list-disc space-y-2 pl-5 marker:text-primary-soft">
                    {children}
                  </ul>
                ),
                li: ({ children }) => <li className="pl-1">{children}</li>,
                strong: ({ children }) => (
                  <strong className="font-medium text-text">{children}</strong>
                ),
                code: ({ children }) => (
                  <code className="rounded bg-surface px-1.5 py-0.5 font-mono text-[13px] text-primary-soft">
                    {children}
                  </code>
                ),
              }}
            >
              {project.body}
            </ReactMarkdown>
          </div>

          {others.length > 0 && (
            <div className="mt-16 border-t border-border pt-10">
              <p className="text-xs font-mono uppercase tracking-wider text-muted-dim">
                More projects
              </p>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {others.map((o) => (
                  <Link
                    key={o.slug}
                    to={`/projects/${o.slug}`}
                    className="group rounded-xl border border-border bg-surface p-5 transition-colors hover:border-primary/40"
                  >
                    <p className="text-[11px] font-mono uppercase tracking-wider text-primary-soft">
                      {o.category}
                    </p>
                    <h3 className="mt-1.5 font-display text-sm font-semibold text-text group-hover:text-primary-soft transition-colors">
                      {o.title}
                    </h3>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
      <Footer />
    </>
  );
}