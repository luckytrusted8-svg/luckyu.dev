import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { LuckyLogo } from "../ui/LuckyLogo";

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
    { label: "Beranda", href: "/#home" },
    { label: "Layanan", href: "/#services" },
    { label: "Tentang", href: "/#about" },
    { label: "Proyek", href: "/#projects" },
    { label: "Keahlian", href: "/#skills" },
    { label: "Testimoni", href: "/#testimonials" },
    { label: "Blog", href: "/blog" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 flex justify-center px-4 pt-4 sm:pt-6 pointer-events-none transition-all duration-300">
      <div
        className={`pointer-events-auto w-full max-w-4xl rounded-full px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between transition-all duration-300 ${
          scrolled
            ? "bg-[#142d1f]/95 backdrop-blur-xl border border-white/10 shadow-[0_15px_35px_rgba(20,45,31,0.25)]"
            : "bg-[#142d1f] border border-[#1c3d2a] shadow-[0_10px_25px_rgba(20,45,31,0.18)]"
        }`}
      >
        {/* Left: Monogram + Wordmark */}
        <Link
          to="/#home"
          className="flex items-center gap-2.5 group shrink-0"
          aria-label="luckyu.dev beranda"
        >
          <LuckyLogo className="w-8 h-8 group-hover:scale-105 transition-transform" />
          <span className="font-display font-bold text-sm sm:text-base tracking-tight text-white">
            luckyu<span className="text-amber-400">.</span>
          </span>
        </Link>

        {/* Center: Clean Nav Links */}
        <nav
          className="hidden md:flex items-center gap-1 sm:gap-2"
          aria-label="Navigasi Utama"
        >
          {navLinks.map((item) => {
            const isActive =
              (item.href === "/#home" && (location.hash === "#home" || (!location.hash && location.pathname === "/"))) ||
              (item.href !== "/#home" && location.hash === item.href.replace("/", ""));

            return (
              <Link
                key={item.label}
                to={item.href}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                  isActive
                    ? "text-amber-400 font-semibold"
                    : "text-slate-200 hover:text-white hover:bg-white/10"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right: Crisp White Pill Button */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="#contact"
            className="px-5 py-2 rounded-full bg-white text-[#142d1f] hover:bg-amber-400 hover:text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-sm cursor-pointer"
          >
            Hubungi Saya
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <a
            href="#contact"
            className="px-3.5 py-1.5 rounded-full bg-white text-[#142d1f] text-xs font-bold uppercase tracking-wider"
          >
            Kontak
          </a>
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 text-slate-200 hover:text-white"
            aria-label="Menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="pointer-events-auto fixed top-20 inset-x-4 max-w-sm mx-auto rounded-3xl border border-white/10 bg-[#142d1f]/95 backdrop-blur-2xl p-5 shadow-2xl z-50 text-white">
          <div className="flex items-center gap-2 font-mono text-xs text-amber-400 pb-3 border-b border-white/10">
            <span className="h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="font-semibold uppercase">Tersedia untuk Freelance & Magang</span>
          </div>
          <nav className="flex flex-col space-y-1 pt-3">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="py-2.5 text-sm font-medium text-slate-200 hover:text-amber-400 border-b border-white/5 flex items-center justify-between"
              >
                <span>{item.label}</span>
                <span className="text-slate-400 text-xs">→</span>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
