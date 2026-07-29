"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

/**
 * Attaches an infinite, staggered floating animation to a group of
 * elements (e.g. the hero's floating tech-stack icons).
 *
 * Convention for this project: Framer Motion owns scroll-triggered /
 * one-shot reveals (see RevealOnScroll); GSAP owns continuous, timeline-
 * based loops where its tweening engine is a better fit.
 */
export function useFloatingIcons<T extends HTMLElement>() {
  const containerRef = useRef<T | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const icons = container.querySelectorAll<HTMLElement>("[data-float-icon]");
    const ctx = gsap.context(() => {
      icons.forEach((icon, index) => {
        gsap.to(icon, {
          y: -16,
          duration: 2.5 + (index % 3) * 0.4,
          delay: index * 0.2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return containerRef;
}
