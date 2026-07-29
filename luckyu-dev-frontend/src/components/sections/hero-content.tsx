"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion-variants";
import { HeroCtaGroup, type HeroCtaGroupProps } from "./hero-cta-group";
import { HeroTrustedTech } from "./hero-trusted-tech";

export interface HeroContentProps {
  eyebrow: string;
  firstName: string;
  lastName: string;
  role: string;
  description: string;
  cta: HeroCtaGroupProps;
  trustedTechLabel: string;
  trustedTech: string[];
}

export function HeroContent({
  eyebrow,
  firstName,
  lastName,
  role,
  description,
  cta,
  trustedTechLabel,
  trustedTech,
}: HeroContentProps) {
  return (
    <motion.div initial="hidden" animate="visible" variants={staggerContainer()}>
      <motion.div variants={fadeUp} className="mb-5 flex items-center gap-2.5">
        <span
          aria-hidden="true"
          className="h-3 w-[22px] bg-[image:var(--gradient-brand)]"
          style={{ clipPath: "polygon(0% 100%, 35% 100%, 100% 0%, 78% 0%)" }}
        />
        <span className="text-[13px] font-semibold tracking-wide text-brand-secondary">{eyebrow}</span>
      </motion.div>

      <motion.h1
        variants={fadeUp}
        className="font-display text-[42px] font-light leading-[1.05] sm:text-[52px] lg:text-[60px]"
      >
        {firstName}
        <br />
        <span className="bg-[image:var(--gradient-brand)] bg-clip-text text-transparent">{lastName}</span>
      </motion.h1>

      <motion.h2
        variants={fadeUp}
        className="mt-4 font-display text-[20px] font-light text-text-secondary lg:text-[24px]"
      >
        {role}
      </motion.h2>

      <motion.p variants={fadeUp} className="mb-8 mt-6 max-w-lg text-[15px] leading-relaxed text-text-secondary">
        {description}
      </motion.p>

      <motion.div variants={fadeUp}>
        <HeroCtaGroup {...cta} />
      </motion.div>

      <motion.div variants={fadeUp}>
        <HeroTrustedTech label={trustedTechLabel} items={trustedTech} />
      </motion.div>
    </motion.div>
  );
}
