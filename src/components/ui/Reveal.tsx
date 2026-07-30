import type { ReactNode } from "react";
import { motion, type Variants } from "framer-motion";
import { fadeUp } from "../../animations/variants";

interface RevealProps {
  children: ReactNode;
  variants?: Variants;
  className?: string;
  delay?: number;
  as?: "div" | "li";
}

export function Reveal({
  children,
  variants = fadeUp,
  className,
  delay = 0,
  as = "div",
}: RevealProps) {
  const Component = motion[as];
  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants}
      transition={{ delay }}
    >
      {children}
    </Component>
  );
}
