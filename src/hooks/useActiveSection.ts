import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export function useActiveSection(sectionIds: string[]): string {
  const [active, setActive] = useState(sectionIds[0] ?? "");
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Section pada beranda tidak ada di halaman detail proyek. Kosongkan status
    // agar indikator sidebar tidak berhenti pada item aktif sebelumnya.
    if (pathname !== "/") {
      setActive("");
      return;
    }

    const hashSectionId = decodeURIComponent(hash.slice(1));
    if (sectionIds.includes(hashSectionId)) {
      setActive(hashSectionId);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    // Jalankan setelah halaman beranda selesai dirender, terutama saat
    // berpindah dari halaman detail proyek melalui navigasi sidebar.
    const frame = requestAnimationFrame(() => {
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      });
    });

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [hash, pathname, sectionIds]);

  return active;
}
