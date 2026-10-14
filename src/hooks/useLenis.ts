import { useEffect } from "react";
import Lenis from "lenis";

export function useLenis() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    (window as any).__lenis = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const raf_id = requestAnimationFrame(raf);

    function onClick(e: MouseEvent) {
      const anchor = (e.target as HTMLElement)?.closest?.(
        'a[href^="#"], a[href^="/#"]'
      ) as HTMLAnchorElement | null;
      if (!anchor) return;
      const rawHref = anchor.getAttribute("href");
      if (!rawHref) return;

      const hashIndex = rawHref.indexOf("#");
      if (hashIndex === -1) return;
      const hash = rawHref.slice(hashIndex);
      if (!hash || hash === "#") return;

      if (window.location.pathname === "/" || window.location.pathname === "") {
        e.preventDefault();
        if (hash === "#home") {
          lenis.scrollTo(0, { duration: 1.1 });
        } else {
          const target = document.querySelector(hash);
          if (target) {
            lenis.scrollTo(target as HTMLElement, { offset: -20, duration: 1.1 });
          }
        }
        history.pushState(null, "", hash);
      }
    }
    document.addEventListener("click", onClick);

    return () => {
      cancelAnimationFrame(raf_id);
      document.removeEventListener("click", onClick);
      (window as any).__lenis = null;
      lenis.destroy();
    };
  }, []);
}
