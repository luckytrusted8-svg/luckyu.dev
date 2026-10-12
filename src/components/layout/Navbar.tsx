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
    <header className="fixed top-0 inset-x-0 z-50 flex justify-center px-4 pt-4 sm:pt-6 pointer-events-none transition-all duration-300">
      <div
        className={`pointer-events-auto w-full max-w-5xl rounded-full px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between border transition-all duration-300 ${
          scrolled
            ? "bg-[#0b101a]/90 backdrop-blur-xl border-white/15 shadow-[0_15px_35px_rgba(0,0,0,0.6)]"
            : "bg-[#0e1422]/75 backdrop-blur-md border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.4)]"
        }`}
      >
        {/* Left: Brand Monogram */}
        <Link
          to="/#home"
          className="flex items-center gap-2.5 group shrink-0"
          aria-label="luckyu.dev beranda"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 text-slate-950 font-mono text-xs font-black flex items-center justify-center shadow-[0_0_12px_rgba(245,158,11,0.35)] group-hover:scale-105 transition-transform">
            LU
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-sm tracking-tight text-white leading-tight">
              luckyu<span className="text-amber-400">.dev</span>
            </span>
          </div>
        </Link>

        {/* Center: Atmospheric Nav Links */}
        <nav
          className="hidden md:flex items-center gap-1"
          aria-label="Navigasi Utama"
        >
          {navLinks.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="px-3 py-1.5 rounded-full text-xs font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right: Availability Badge & CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 font-mono text-[11px] text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="uppercase tracking-wider">Tersedia Q2/Q3</span>
          </div>

          <Link
            to="/#contact"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 hover:from-amber-300 hover:to-amber-400 text-xs font-bold tracking-wide uppercase transition-all shadow-[0_0_15px_rgba(245,158,11,0.25)] hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] cursor-pointer"
          >
            <span>Mulai Diskusi</span>
            <ArrowUpRight size={13} />
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <Link
            to="/#contact"
            className="px-3 py-1.5 rounded-full bg-amber-400 text-slate-950 text-xs font-bold uppercase"
          >
            Kontak
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 text-slate-300 hover:text-white"
            aria-label="Menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Sheet */}
      {mobileOpen && (
        <div className="pointer-events-auto fixed top-20 inset-x-4 max-w-sm mx-auto rounded-3xl border border-white/15 bg-[#0b101a]/95 backdrop-blur-2xl p-5 shadow-2xl z-50">
          <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 pb-3 border-b border-white/10">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <span>TERSEDIA UNTUK PROYEK Q2/Q3</span>
          </div>
          <nav className="flex flex-col space-y-1 pt-3">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="py-2.5 text-sm font-medium text-slate-200 hover:text-amber-400 border-b border-white/5 flex items-center justify-between"
              >
                <span>{item.label}</span>
                <span className="font-mono text-xs text-slate-500">→</span>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
