import { useMemo } from "react";
import { motion } from "framer-motion";
import { Download, UserCog } from "lucide-react";
import { Link } from "react-router-dom";
import { navItems, socialLinks } from "../../lib/nav";
import { cn } from "../../utils/cn";
import { useActiveSection } from "../../hooks/useActiveSection";

export function Sidebar() {
  const sectionIds = useMemo(
    () => navItems.filter((item) => !item.path).map((item) => item.id),
    []
  );
  const active = useActiveSection(sectionIds);

  return (
    <motion.aside
      initial={{ x: -40, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
className="sidebar-panel fixed inset-y-0 left-0 z-40 hidden w-[268px] flex-col border-r border-border bg-bg-elevated px-6 py-6 no-scrollbar lg:flex"
    >
      <Link to="/#home" className="flex items-center gap-2.5 group">
        <picture className="brand-logo-shell flex h-10 w-10 shrink-0 items-center justify-center">
          <source media="(prefers-color-scheme: light)" srcSet="/logo-dark.png" />
          <img
            src="/logo-dark.png"
            alt="Logo Lucky"
            className="h-full w-full object-contain"
          />
        </picture>
        <span>
          <span className="block font-display text-sm font-semibold text-text">Lucky</span>
          <span className="block text-[11px] text-muted">Full-Stack Developer</span>
        </span>
      </Link>

<nav
        className="sidebar-nav mt-5 flex min-h-0 flex-1 flex-col gap-1 overflow-y-auto no-scrollbar"
        aria-label="Main navigation"
      >
        <div className="flex flex-col gap-1">
          {navItems.map((item) => {
            const isActive = active === item.id;
            const Icon = item.icon;
            const to = item.path ?? `/#${item.id}`;
            return (
              <Link
                key={item.id}
                to={to}
                className={cn(
                  "sidebar-nav-link relative flex min-h-[38px] items-center gap-3 rounded-lg px-3.5 py-2 text-sm transition-colors",
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
        </div>
      </nav>

<div className="flex shrink-0 flex-col gap-3 border-t border-border pt-4">
        <button
          type="button"
          className="flex min-h-[38px] items-center gap-3 rounded-lg px-3.5 text-sm text-muted transition-colors hover:text-text"
        >
          <UserCog size={16} />
          Admin
        </button>

        <a
          href="/MyCV.pdf"
          download
          className="flex items-center justify-center gap-2 rounded-lg bg-surface py-2.5 text-xs font-medium text-text transition-colors hover:border hover:border-primary-soft"
        >
          <Download size={14} />
          Download CV
        </a>

        <div className="flex items-center justify-center gap-4 px-1">
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
    </motion.aside>
  );
}
