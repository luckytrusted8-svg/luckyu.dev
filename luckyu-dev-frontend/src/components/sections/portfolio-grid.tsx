"use client";

import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/shared/social-icons";
import { Card } from "@/components/ui/card";
import type { Portfolio, PortfolioCategory } from "@/types/api";

export function PortfolioGrid({
  portfolios,
  categories,
}: {
  portfolios: Portfolio[];
  categories: PortfolioCategory[];
}) {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filtered =
    activeFilter === "all"
      ? portfolios
      : portfolios.filter((p) => p.category?.slug === activeFilter);

  return (
    <>
      <div className="mb-10 flex flex-wrap gap-2">
        <button
          onClick={() => setActiveFilter("all")}
          className={
            activeFilter === "all"
              ? "rounded-full bg-[image:var(--gradient-brand)] px-[18px] py-[9px] text-[13.5px] font-semibold text-white"
              : "rounded-full border border-border px-[18px] py-[9px] text-[13.5px] font-semibold text-text-secondary hover:border-primary hover:text-foreground"
          }
        >
          Semua
        </button>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveFilter(cat.slug)}
            className={
              activeFilter === cat.slug
                ? "rounded-full bg-[image:var(--gradient-brand)] px-[18px] py-[9px] text-[13.5px] font-semibold text-white"
                : "rounded-full border border-border px-[18px] py-[9px] text-[13.5px] font-semibold text-text-secondary hover:border-primary hover:text-foreground"
            }
          >
            {cat.name}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="text-sm text-text-muted">
          {portfolios.length === 0
            ? "Belum ada proyek ditambahkan. Kelola dari admin dashboard."
            : "Tidak ada proyek pada kategori ini."}
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <Card key={project.id} className="overflow-hidden">
              <div className="relative h-44 overflow-hidden bg-card-hover">
                {project.thumbnail && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={project.thumbnail.url}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                )}
                <span className="absolute left-3 top-3 rounded-full bg-primary/15 px-3 py-1 text-[12px] font-semibold text-primary">
                  {project.category?.name}
                </span>
              </div>
              <div className="p-5">
                <h3 className="mb-1 font-display text-[16px] font-medium">{project.title}</h3>
                <p className="mb-3 line-clamp-2 text-[13px] text-text-secondary">{project.description}</p>
                <div className="mb-4 flex flex-wrap gap-1.5">
                  {project.tech_stack.map((tech) => (
                    <span key={tech} className="rounded bg-card-hover px-2 py-1 text-[11px] text-text-muted">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 text-[13px] font-semibold text-primary">
                  {project.demo_url && (
                    <a href={project.demo_url} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-brand-secondary">
                      Demo <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                  {project.github_url && (
                    <a href={project.github_url} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-brand-secondary">
                      GitHub <GithubIcon className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </>
  );
}
