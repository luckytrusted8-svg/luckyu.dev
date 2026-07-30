import { useState } from "react";
import { motion } from "framer-motion";
import { getSkills } from "../../lib/content";
import { SectionHeading } from "../ui/SectionHeading";
import { cn } from "../../utils/cn";

export function Skills() {
  const { eyebrow, heading, categories } = getSkills();
  const [activeTab, setActiveTab] = useState(0);
  const active = categories[activeTab];

  return (
    <section id="skills" className="px-5 py-24 sm:px-10 lg:py-32 border-t border-border/60">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow={eyebrow} heading={heading} index="03" />

        <div className="mt-12 flex flex-wrap gap-2">
          {categories.map((cat, i) => (
            <button
              key={cat.name}
              onClick={() => setActiveTab(i)}
              className={cn(
                "rounded-full border px-4 py-2 text-xs font-mono transition-colors",
                activeTab === i
                  ? "border-primary/50 bg-primary/10 text-primary-soft"
                  : "border-border text-muted hover:text-text"
              )}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <motion.div
          key={active.name}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="mt-10 grid gap-x-10 gap-y-6 sm:grid-cols-2"
        >
          {active.skills.map((skill) => (
            <div key={skill.name}>
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm text-text">{skill.name}</span>
                <span className="font-mono text-xs text-muted-dim">{skill.level}%</span>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-surface">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                  className="h-full rounded-full bg-gradient-to-r from-primary via-secondary to-accent"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
