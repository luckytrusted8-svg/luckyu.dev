"use client";

import { motion } from "framer-motion";
import { SectionEyebrow } from "@/components/shared/section-eyebrow";
import type { SkillCategory } from "@/types/api";

export function SkillsSection({ categories }: { categories: SkillCategory[] }) {
  return (
    <section id="skills" className="bg-background-secondary px-6 py-24 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14">
          <SectionEyebrow>KEAHLIAN</SectionEyebrow>
          <h2 className="font-display text-[32px] font-light lg:text-[40px]">Skills & Expertise</h2>
        </div>

        {categories.length === 0 ? (
          <p className="text-sm text-text-muted">
            Belum ada data skill ditambahkan. Kelola dari admin dashboard.
          </p>
        ) : (
          <div className="grid gap-x-16 gap-y-10 lg:grid-cols-2">
            {categories.map((category) => (
              <div key={category.id}>
                <h4 className="mb-5 text-[13px] font-bold tracking-wider text-text-muted">
                  {category.name.toUpperCase()}
                </h4>
                <div className="space-y-5">
                  {category.skills.map((skill) => (
                    <div key={skill.id}>
                      <div className="mb-2 flex justify-between text-[13.5px]">
                        <span>{skill.name}</span>
                        <span className="tnum text-brand-secondary">{skill.proficiency}%</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full border border-border bg-card">
                        <motion.div
                          className="h-full rounded-full bg-[image:var(--gradient-brand)]"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.proficiency}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
