import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { navItems, socialLinks } from "../../lib/nav";
import { cn } from "../../utils/cn";
import { useActiveSection } from "../../hooks/useActiveSection";

export function Sidebar() {
  const active = useActiveSection(navItems.map((n) => n.id));

  return (
    <aside className="fixed inset-y-0 left-0 z-40 hidden w-[268px] flex-col justify-between border-r border-border bg-bg-elevated/60 px-6 py-8 backdrop-blur-md lg:flex">
      <div>
        <a href="#home" className="flex items-center gap-2.5 group">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary via-secondary to-accent font-display text-sm font-bold text-white">
            L
          </span>
          <span>
            <span className="block font-display text-sm font-semibold text-text">Lucky</span>
            <span className="block text-[11px] text-muted">Full-Stack Developer</span>
          </span>
        </a>

        <nav className="mt-10 flex flex-col gap-1" aria-label="Main navigation">
          {navItems.map((item) => {
            const isActive = active === item.id;
            const Icon = item.icon;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
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
              </a>
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
            <p className="text-xs font-medium text-text">Open for freelance work</p>
          </div>
          <p className="mt-2 text-[12px] leading-relaxed text-muted">
            Currently taking on small-to-mid web projects alongside my internship.
          </p>
          <a
            href="#contact"
            className="mt-3 inline-block text-[12px] font-medium text-primary-soft hover:text-text transition-colors"
          >
            Say hello →
          </a>
        </div>

        <a
          href="/resume.pdf"
          download
          className="flex items-center justify-center gap-2 rounded-lg border border-border py-2.5 text-xs font-medium text-muted hover:text-text hover:border-primary-soft transition-colors"
        >
          <Download size={14} />
          Download CV
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
