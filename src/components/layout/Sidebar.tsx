import { useMemo } from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { Link } from "react-router-dom";
import { navItems, socialLinks } from "../../lib/nav";
import { cn } from "../../utils/cn";
import { useActiveSection } from "../../hooks/useActiveSection";

export function Sidebar() {
  const sectionIds = useMemo(() => navItems.map((item) => item.id), []);
  const active = useActiveSection(sectionIds);

  return (
    <aside className="fixed inset-y-0 left-0 z-40 hidden w-[268px] flex-col justify-between border-r border-border bg-bg-elevated/60 px-6 py-8 backdrop-blur-md lg:flex">
      <div>
        <Link to="/#home" className="flex items-center gap-2.5 group">
          <img
            src="/LuckyDev2.png" 
            alt="Logo"
            className="h-8 w-8 rounded-lg object-contain"
          />
          <span>
            <span className="block font-display text-sm font-semibold text-text">Lucky Ubaidillah</span>
            <span className="block text-[11px] text-muted">Pengembang Full-Stack</span>
          </span>
        </Link>

        <nav className="mt-10 flex flex-col gap-1" aria-label="Main navigation">
          {navItems.map((item) => {
            const isActive = active === item.id;
            const Icon = item.icon;
            return (
              <Link
                key={item.id}
                to={`/#${item.id}`}
                className={cn(
                  "relative flex items-center gap-3 rounded-lg px-3.5 py-2.5 text-sm transition-colors",
                  isActive ? "text-text" : "text-muted hover:text-text"
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="sidebar-active-pill"
                    className="absolute inset-0 rounded-lg bg-surface"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <Icon size={16} className="relative z-10" />
                <span className="relative z-10">{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="flex flex-col gap-4">
        <div className="rounded-xl border border-primary/25 bg-gradient-to-br from-primary/15 via-secondary/10 to-transparent p-4">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-soft opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-soft" />
            </span>
            <p className="text-xs font-medium text-text">Terbuka untuk proyek freelance</p>
          </div>
          <p className="mt-2 text-[12px] leading-relaxed text-muted">
            Saat ini menerima proyek web skala kecil hingga menengah di sela kegiatan magang.
          </p>
          <Link
            to="/#contact"
            className="mt-3 inline-block text-[12px] font-medium text-primary-soft hover:text-text transition-colors"
          >
            Hubungi saya →
          </Link>
        </div>

        <a
          href="/MyCV.pdf"
          download
          className="flex items-center justify-center gap-2 rounded-lg border border-border py-2.5 text-xs font-medium text-muted hover:text-text hover:border-primary-soft transition-colors"
        >
          <Download size={14} />
          Unduh CV
        </a>

        <div className="flex items-center gap-4 px-1">
          {socialLinks.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className="text-muted hover:text-primary-soft transition-colors"
            >
              <s.icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
}
