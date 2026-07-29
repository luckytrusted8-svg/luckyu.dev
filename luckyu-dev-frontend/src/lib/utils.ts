import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind classes conditionally without style conflicts.
 * Standard shadcn/ui helper — required by every ui/* component.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
