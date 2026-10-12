import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../../utils/cn";

interface RotatingTextProps {
  words: string[];
  interval?: number;
  className?: string;
  wordClassName?: string;
}

export function RotatingText({
  words,
  interval = 2800,
  className,
  wordClassName,
}: RotatingTextProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (words.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, interval);
    return () => clearInterval(timer);
  }, [words, interval]);

  return (
    <span className={cn("inline-flex overflow-hidden py-1 align-baseline", className)}>
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ y: "100%", opacity: 0, filter: "blur(4px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          exit={{ y: "-100%", opacity: 0, filter: "blur(4px)" }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className={cn("inline-block font-black tracking-tight", wordClassName)}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
