import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname, location.hash]);

  const navLinks = [
    { label: "Karya", href: "/#projects" },
    { label: "Pendekatan", href: "/#about" },
    { label: "Layanan", href: "/#services" },
    { label: "Keahlian", href: "/#skills" },
    { label: "Pengalaman", href: "/#experience" },
    { label: "Tulisan", href: "/blog" },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-200 ${
        scrolled
          ? "bg-[var(--color-paper)]/95 backdrop-blur-md border-b border-[var(--color-rule)]"
          : "bg-[var(--color-paper)]/80 backdrop-blur-xs border-b border-[var(--color-rule)]/60"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 sm:h-18 flex items-center justify-between gap-6">
        {/* Left: Brand Identity (Swiss Monogram & Folio) */}
        <Link
          to="/#home"
          className="flex items-center gap-3 group shrink-0"
          aria-label="luckyu.dev homepage"
        >
          <div className="w-8 h-8 rounded-none bg-[var(--color-ink)] text-white font-mono text-xs font-bold flex items-center justify-center transition-colors group-hover:bg-[var(--color-signal)]">
            LU
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-sm tracking-tight text-[var(--color-ink)] leading-none">
              luckyu.dev
            </span>
            <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-ink-dim)] mt-1">
              portfolio / 2026
            </span>
          </div>
        </Link>

        {/* Center: Architectural Nav Links */}
        <nav
          className="hidden md:flex items-center gap-1 lg:gap-2"
          aria-label="Navigasi Utama"
        >
          {navLinks.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="px-3 py-1.5 text-xs font-medium text-[var(--color-ink-muted)] hover:text-[var(--color-ink)] hover:bg-[var(--color-paper-2)] border border-transparent hover:border-[var(--color-rule)] transition-all duration-150"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right: Availability & Action Button */}
        <div className="hidden sm:flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-2 font-mono text-[11px] text-[var(--color-ink-muted)] border-r border-[var(--color-rule)] pr-4">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="uppercase tracking-wider">Tersedia Proyek Q2/Q3</span>
          </div>

          <Link
            to="/#contact"
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-[var(--color-ink)] text-[var(--color-paper)] hover:bg-[var(--color-signal)] text-xs font-medium tracking-wide uppercase transition-colors"
          >
            <span>Mulai Diskusi</span>
            <ArrowUpRight size={13} />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex sm:hidden items-center gap-3">
          <Link
            to="/#contact"
            className="px-3 py-1.5 bg-[var(--color-ink)] text-white text-xs font-medium uppercase"
          >
            Kontak
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 border border-[var(--color-rule)] text-[var(--color-ink)]"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="sm:hidden border-b border-[var(--color-rule)] bg-[var(--color-paper)] px-5 py-6 space-y-4">
          <div className="flex items-center gap-2 font-mono text-xs text-[var(--color-ink-muted)] pb-2 border-b border-[var(--color-rule)]">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            <span>TERSEDIA UNTUK PROYEK Q2/Q3</span>
          </div>
          <nav className="flex flex-col space-y-1">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="py-2.5 text-sm font-medium text-[var(--color-ink)] border-b border-[var(--color-rule)]/40 flex items-center justify-between"
              >
                <span>{item.label}</span>
                <span className="font-mono text-xs text-[var(--color-ink-dim)]">→</span>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
