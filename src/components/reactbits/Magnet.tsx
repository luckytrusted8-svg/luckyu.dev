import { useState, useRef, type ReactNode, type MouseEvent } from "react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

interface MagnetProps {
  children: ReactNode;
  className?: string;
  padding?: number;
  disabled?: boolean;
  magnetStrength?: number;
}

export function Magnet({
  children,
  className,
  padding = 40,
  disabled = false,
  magnetStrength = 2.5,
}: MagnetProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (disabled || !ref.current) return;

    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;

    if (
      Math.abs(distanceX) < width / 2 + padding &&
      Math.abs(distanceY) < height / 2 + padding
    ) {
      setPosition({
        x: distanceX / magnetStrength,
        y: distanceY / magnetStrength,
      });
    } else {
      setPosition({ x: 0, y: 0 });
    }
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", damping: 15, stiffness: 200, mass: 0.1 }}
      className={cn("inline-block", className)}
    >
      {children}
    </motion.div>
  );
}
