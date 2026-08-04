import { useState } from "react";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { getServices } from "../../lib/content";
import { SectionHeading } from "../ui/SectionHeading";
import { staggerContainer, fadeUp } from "../../animations/variants";

export function Services() {
  const services = getServices();
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section id="services" className="px-5 py-24 sm:px-10 lg:py-32 border-t border-border/60">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Yang Saya Kerjakan"
          heading="Layanan yang dibangun dari project nyata"
          description="Layanan ini berangkat dari pengalaman mengerjakan proyek nyata dan dapat disesuaikan dengan kebutuhan Anda."
          index="02"
        />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service) => {
            const Icon = (Icons[service.icon as keyof typeof Icons] ??
              Icons.Sparkles) as LucideIcon;
            return (
              <motion.div
                key={service.slug}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="group flex flex-col rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-primary/40 hover:bg-surface-hover"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 text-primary-soft">
                  <Icon size={20} />
                </div>
                <h3 className="mt-5 font-display text-base font-semibold text-text">
                  {service.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {service.summary}
                </p>

                <AnimatePresence>
                  {expanded === service.slug && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden text-sm leading-relaxed text-muted"
                    >
                      <span className="mt-3 block border-t border-border pt-3">
                        {service.body}
                      </span>
                    </motion.p>
                  )}
                </AnimatePresence>

                <button
                  className="mt-5 flex items-center gap-1.5 text-xs font-medium text-primary-soft opacity-80 transition-all group-hover:gap-2.5 group-hover:opacity-100"
                  onClick={() =>
                    setExpanded(expanded === service.slug ? null : service.slug)
                  }
                  aria-expanded={expanded === service.slug}
                >
                  {expanded === service.slug ? "Tampilkan lebih sedikit" : "Selengkapnya"}
                  <Icons.ArrowRight size={13} />
                </button>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
