import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { navItems, socialLinks } from "../../lib/nav";
import { cn } from "../../utils/cn";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 flex items-center justify-between border-b border-border bg-bg/85 px-5 py-4 backdrop-blur-md lg:hidden">
        <Link to="/#home" className="flex items-center gap-2">
          <picture className="brand-logo-shell flex h-9 w-9 shrink-0 items-center justify-center">
            <source media="(prefers-color-scheme: light)" srcSet="/logo-dark.png" />
            <img
              src="/logo-dark.png"
              alt="Logo Lucky"
              className="h-full w-full object-contain"
            />
          </picture>
          <span className="font-display text-sm font-semibold text-text">Lucky</span>
        </Link>
        <button
          onClick={() => setOpen(true)}
          aria-label="Open navigation menu"
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted hover:text-text"
        >
          <Menu size={18} />
        </button>
      </header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm lg:hidden"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 34 }}
              className="fixed inset-y-0 right-0 z-50 flex w-[82%] max-w-[320px] flex-col justify-between bg-bg-elevated px-6 py-8 lg:hidden"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-display text-sm font-semibold text-text">Menu</span>
                  <button
                    onClick={() => setOpen(false)}
                    aria-label="Close navigation menu"
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted hover:text-text"
                  >
                    <X size={18} />
                  </button>
                </div>
                <nav className="mt-8 flex flex-col gap-1" aria-label="Mobile navigation">
                  {navItems.map((item) => {
                    const to = item.path ?? `/#${item.id}`;
                    return (
                      <Link
                        key={item.id}
                        to={to}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "flex items-center gap-3 rounded-lg px-3.5 py-3 text-sm text-muted hover:bg-surface hover:text-text transition-colors"
                        )}
                      >
                        <item.icon size={16} />
                        {item.label}
                      </Link>
                    );
                  })}
                </nav>
              </div>

<div className="flex flex-col gap-4 border-t border-border pt-4">
<a
                  href="/resume.pdf"
                  download
                  className="flex items-center justify-center gap-2 rounded-lg bg-surface py-2.5 text-xs font-medium text-text transition-colors hover:border hover:border-primary-soft"
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
                      className="text-muted hover:text-primary-soft"
                    >
                      <s.icon size={16} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
