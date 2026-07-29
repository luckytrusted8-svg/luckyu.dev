"use client";

import { motion } from "framer-motion";
import { SectionEyebrow } from "@/components/shared/section-eyebrow";

const steps = [
  { number: "01", title: "Planning", desc: "Diskusi kebutuhan & susun scope proyek.", color: "primary" },
  { number: "02", title: "Design", desc: "Rancang UI/UX sesuai identitas brand Anda.", color: "primary" },
  { number: "03", title: "Development", desc: "Bangun dengan clean code & arsitektur scalable.", color: "secondary" },
  { number: "04", title: "Deployment", desc: "Rilis, uji performa, dan pendampingan pasca-launch.", color: "secondary" },
];

export function WorkProcessSection() {
  return (
    <section className="bg-background-secondary px-6 py-24 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <SectionEyebrow center>ALUR KERJA</SectionEyebrow>
          <h2 className="font-display text-[32px] font-light lg:text-[40px]">Bagaimana Saya Bekerja</h2>
        </div>
        <div className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <motion.div
            className="absolute left-0 top-[26px] hidden h-[2px] bg-[image:var(--gradient-brand)] lg:block"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
          />
          {steps.map((step) => (
            <div key={step.number} className="relative z-10 text-center">
              <div
                className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border-2 bg-background font-display font-semibold"
                style={{ borderColor: step.color === "primary" ? "var(--brand-primary)" : "var(--brand-secondary)" }}
              >
                {step.number}
              </div>
              <h3 className="mb-2 font-display text-[16px] font-medium">{step.title}</h3>
              <p className="text-[13px] text-text-secondary">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
