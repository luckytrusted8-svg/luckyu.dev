import type { Variants } from "framer-motion";

/** Standard entrance easing used across the whole site's motion design. */
export const EASE_OUT = [0.16, 1, 0.3, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE_OUT },
  },
};

/**
 * Wrap a group of `fadeUp` children in a `motion.div` using this variant
 * to animate them in one-by-one instead of all at once.
 */
export const staggerContainer = (staggerChildren = 0.12, delayChildren = 0): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren, delayChildren },
  },
});
