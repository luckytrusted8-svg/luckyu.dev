import { ArrowUp } from "lucide-react";
import { navItems, socialLinks } from "../../lib/nav";

export function Footer() {
  return (
    <footer className="border-t border-border px-5 py-10 sm:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <a href="#home" className="flex items-center gap-2.5">
          <img
            src="/LuckyDev2.png" 
            alt="Logo"
            className="h-8 w-8 rounded-lg object-contain"
          />
            <span className="font-display text-sm font-semibold text-text">Lucky Ubaidillah</span>
          </a>

          <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Footer navigation">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-xs text-muted hover:text-text transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#home"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted hover:text-text hover:border-primary-soft transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp size={15} />
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6 text-xs text-muted-dim">
          <p>© {new Date().getFullYear()} Lucky. Built from scratch, section by section.</p>
          <div className="flex gap-4">
            {socialLinks.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="hover:text-text transition-colors">
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
