import { forwardRef } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "../../utils/cn";

type Variant = "primary" | "ghost" | "outline";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium text-sm px-6 py-3 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2";

const variants: Record<Variant, string> = {
  primary:
    "bg-[linear-gradient(135deg,#111827_0%,#334155_100%)] text-white shadow-[0_10px_30px_-10px_rgba(15,23,42,0.24)] hover:shadow-[0_14px_36px_-10px_rgba(15,23,42,0.32)]",
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
