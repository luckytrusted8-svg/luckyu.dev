import { forwardRef } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "../../utils/cn";

type Variant = "primary" | "ghost" | "outline";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium text-sm px-6 py-3 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2";

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-primary via-secondary to-accent text-white shadow-[0_8px_30px_-8px_rgba(139,92,246,0.55)] hover:shadow-[0_10px_36px_-6px_rgba(139,92,246,0.7)]",
  ghost: "text-text hover:bg-surface-hover border border-border",
  outline: "border border-border text-muted hover:text-text hover:border-primary-soft",
};

interface ButtonOwnProps {
  variant?: Variant;
}

type ButtonProps = ButtonOwnProps & HTMLMotionProps<"button">;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", children, ...props }, ref) => (
    <motion.button
      ref={ref}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      className={cn(base, variants[variant], className)}
      {...props}
    >
      {children}
    </motion.button>
  )
);
Button.displayName = "Button";

type ButtonLinkProps = ButtonOwnProps & HTMLMotionProps<"a">;

export const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  ({ className, variant = "primary", children, ...props }, ref) => (
    <motion.a
      ref={ref}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      className={cn(base, variants[variant], className)}
      {...props}
    >
      {children}
    </motion.a>
  )
);
ButtonLink.displayName = "ButtonLink";
