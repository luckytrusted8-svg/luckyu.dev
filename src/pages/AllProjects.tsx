import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { GitFork, ArrowUpRight, ArrowLeft } from "lucide-react";
import { projects } from "../components/sections/Projects";
import { ProjectThumb } from "../components/ui/ProjectThumb";
import { Tag } from "../components/ui/Tag";
import { Footer } from "../components/layout/Footer";
import { staggerContainer, fadeUp } from "../animations/variants";

export function AllProjects() {
  const sorted = [...projects].sort((a, b) => a.order - b.order);

  return (
    <>
      <article className="px-5 py-16 sm:px-10 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-xs font-medium text-muted hover:text-text transition-colors"
          >
            <ArrowLeft size={14} />
            Kembali ke beranda
          </Link>

          <motion.div initial="hidden" animate="show" variants={fadeUp} className="mt-8">
            <h1 className="text-3xl font-semibold tracking-[-0.02em] text-text sm:text-4xl">
              Semua Proyek
            </h1>
            <p className="mt-2 text-muted leading-relaxed">
              Koleksi lengkap proyek yang telah saya kerjakan
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-14 grid gap-6 sm:grid-cols-2"
          >
            {sorted.map((project) => (
              <motion.article
                key={project.slug}
                variants={fadeUp}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-colors hover:border-primary/40"
              >
                <Link to={`/projects/${project.slug}`} className="p-4 pb-0">
                  <ProjectThumb
                    title={project.title}
                    category={project.category}
                    accent={project.accent}
                    images={project.images}
                    className="transition-transform duration-500 group-hover:scale-[1.015]"
                  />
                </Link>

                <div className="flex flex-1 flex-col p-6">
                  <p className="text-[11px] font-mono uppercase tracking-wider text-primary-soft">
                    {project.category}
                  </p>
                  <h3 className="mt-2 font-display text-lg font-semibold text-text">
                    <Link
                      to={`/projects/${project.slug}`}
                      className="hover:text-primary-soft transition-colors"
                    >
                      {project.title}
                    </Link>
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.slice(0, 4).map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center gap-4 border-t border-border pt-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 text-xs font-medium text-muted hover:text-text transition-colors"
                    >
                      <GitFork size={14} />
                      Kode
                    </a>
                    <Link
                      to={`/projects/${project.slug}`}
                      className="flex items-center gap-1.5 text-xs font-medium text-primary-soft hover:gap-2.5 transition-all"
                    >
                      Studi kasus
                      <ArrowUpRight size={13} />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </article>
      <Footer />
    </>
  );
}
