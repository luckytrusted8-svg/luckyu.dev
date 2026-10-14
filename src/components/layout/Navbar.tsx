import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { LuckyLogo } from "../ui/LuckyLogo";
import { useLanguage } from "../../context/LanguageContext";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

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

  // Dynamic Scroll Spy: Automatically updates the highlighted nav link as the user scrolls
  useEffect(() => {
    if (location.pathname !== "/" && location.pathname !== "") {
      if (location.pathname.startsWith("/blog")) {
        setActiveSection("blog");
      } else if (
        location.pathname.startsWith("/projects") ||
        location.pathname.startsWith("/all-projects")
      ) {
        setActiveSection("projects");
      } else {
        setActiveSection("");
      }
      return;
    }

    const sectionIds = [
      "home",
      "services",
      "about",
      "projects",
      "skills",
      "testimonials",
      "blog",
    ];

    const handleScroll = () => {
      // If at top of the page, highlight home
      if (window.scrollY < 120) {
        setActiveSection("home");
        return;
      }

      // If scrolled close to bottom of document, highlight blog/contact
      const scrollBottom = window.innerHeight + window.scrollY;
      if (scrollBottom >= document.documentElement.scrollHeight - 160) {
        setActiveSection("blog");
        return;
      }

      // Reference detection line: 220px below viewport top
      const targetY = 220;
      let current = "home";

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= targetY && rect.bottom > targetY) {
            current = id;
            break;
          }
        }
      }

      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  function handleNavClick(e: React.MouseEvent, targetId: string, href: string) {
    if (location.pathname === "/" || location.pathname === "") {
      e.preventDefault();
      setActiveSection(targetId);

      const lenis = (window as any).__lenis;

      if (targetId === "home") {
        if (lenis) {
          lenis.scrollTo(0, { duration: 1.1 });
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
        window.history.pushState(null, "", "/#home");
      } else {
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          if (lenis) {
            lenis.scrollTo(targetEl, { offset: -20, duration: 1.1 });
          } else {
            targetEl.scrollIntoView({ behavior: "smooth" });
          }
          window.history.pushState(null, "", href);
        }
      }
    }
  }

  const navLinks = [
    { id: "home", label: t("Beranda", "Home"), href: "/#home" },
    { id: "services", label: t("Layanan", "Services"), href: "/#services" },
    { id: "about", label: t("Tentang", "About"), href: "/#about" },
    { id: "projects", label: t("Proyek", "Projects"), href: "/#projects" },
    { id: "skills", label: t("Keahlian", "Skills"), href: "/#skills" },
    { id: "testimonials", label: t("Testimoni", "Testimonials"), href: "/#testimonials" },
    { id: "blog", label: t("Blog", "Blog"), href: "/#blog" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 flex justify-center px-3 sm:px-4 pt-3 sm:pt-5 pointer-events-none transition-all duration-300">
      {/* Unified Connected Capsule Container: morphs smoothly between sleek pill and expanded card */}
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 380, damping: 32 }}
        className={`pointer-events-auto w-full max-w-5xl lg:max-w-6xl overflow-hidden transition-all duration-300 ${
          mobileOpen
            ? "rounded-[28px] bg-[#142d1f]/95 backdrop-blur-2xl border border-white/15 shadow-[0_25px_50px_rgba(10,25,17,0.45)]"
            : scrolled
            ? "rounded-full bg-[#142d1f]/95 backdrop-blur-xl border border-white/10 shadow-[0_15px_35px_rgba(20,45,31,0.25)]"
            : "rounded-full bg-[#142d1f] border border-[#1c3d2a] shadow-[0_10px_25px_rgba(20,45,31,0.18)]"
        }`}
      >
        {/* Top Header Row (Logo, Desktop Nav, Language Switcher, Action Button / Mobile Hamburger) */}
        <div className="px-4 sm:px-6 py-2 sm:py-2.5 flex items-center justify-between">
          {/* Left: Monogram + Wordmark */}
          <Link
            to="/#home"
            onClick={(e) => {
              handleNavClick(e, "home", "/#home");
              setMobileOpen(false);
            }}
            className="flex items-center gap-2.5 group shrink-0"
            aria-label="luckyu.dev beranda"
          >
            <LuckyLogo className="w-8 h-8 group-hover:scale-105 transition-transform" />
            <span className="font-display font-bold text-sm sm:text-base tracking-tight text-white">
              luckyu<span className="text-amber-400">.</span>
            </span>
          </Link>

          {/* Center: Dynamic Active Nav Links (Desktop) */}
          <nav
            className="hidden md:flex items-center gap-0.5 lg:gap-1.5"
            aria-label="Navigasi Utama"
          >
            {navLinks.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={(e) => handleNavClick(e, item.id, item.href)}
                  className={`px-2.5 lg:px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                    isActive
                      ? "bg-white/15 text-amber-400 font-bold shadow-2xs"
                      : "text-slate-200 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Desktop: Language Switcher + Crisp White Pill Button */}
          <div className="hidden sm:flex items-center gap-2 lg:gap-3 shrink-0">
            {/* Language Switcher Pill Toggle */}
            <div className="flex items-center bg-white/10 p-0.5 rounded-full border border-white/15 text-xs font-bold font-mono shrink-0">
              <button
                type="button"
                onClick={() => setLanguage("id")}
                className={`px-2.5 py-1 rounded-full transition-all cursor-pointer ${
                  language === "id"
                    ? "bg-amber-400 text-slate-950 shadow-xs"
                    : "text-slate-300 hover:text-white"
                }`}
                aria-label="Bahasa Indonesia"
              >
                ID
              </button>
              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={`px-2.5 py-1 rounded-full transition-all cursor-pointer ${
                  language === "en"
                    ? "bg-amber-400 text-slate-950 shadow-xs"
                    : "text-slate-300 hover:text-white"
                }`}
                aria-label="English"
              >
                EN
              </button>
            </div>

            <a
              href="#contact"
              className="whitespace-nowrap shrink-0 px-4 sm:px-5 py-2 rounded-full bg-white text-[#142d1f] hover:bg-amber-400 hover:text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-sm cursor-pointer"
            >
              {t("Hubungi Saya", "Contact Me")}
            </a>
          </div>

          {/* Mobile Right: Language Switcher & Animated Morphing Menu Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            {/* Mobile Language Switcher */}
            <div className="flex items-center bg-white/10 p-0.5 rounded-full border border-white/15 text-[10px] font-bold font-mono">
              <button
                type="button"
                onClick={() => setLanguage("id")}
                className={`px-2 py-0.5 rounded-full transition-all cursor-pointer ${
                  language === "id"
                    ? "bg-amber-400 text-slate-950 font-bold"
                    : "text-slate-300"
                }`}
              >
                ID
              </button>
              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={`px-2 py-0.5 rounded-full transition-all cursor-pointer ${
                  language === "en"
                    ? "bg-amber-400 text-slate-950 font-bold"
                    : "text-slate-300"
                }`}
              >
                EN
              </button>
            </div>

            {/* Unique Animated Hamburger / Close Button */}
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/15 flex items-center justify-center text-slate-200 hover:text-white transition-all cursor-pointer"
              aria-label="Menu"
              aria-expanded={mobileOpen}
            >
              <motion.div
                animate={{ rotate: mobileOpen ? 90 : 0, scale: mobileOpen ? 1.08 : 1 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
              >
                {mobileOpen ? (
                  <X size={18} className="text-amber-400 stroke-[2.5]" />
                ) : (
                  <Menu size={18} />
                )}
              </motion.div>
            </button>
          </div>
        </div>

        {/* UNIFIED Mobile Expanded Menu: Seamlessly connected inside the exact same capsule! */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              key="mobile-nav-content"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
              className="sm:hidden border-t border-white/10 px-4 pt-3 pb-4 text-white"
            >
              {/* Status Header Badge */}
              <div className="flex items-center justify-between pb-2.5 mb-2 border-b border-white/10 font-mono text-[11px] text-amber-400">
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
                  <span className="font-semibold uppercase tracking-wider">
                    {t("Tersedia untuk Kerja Sama", "Available for Hire")}
                  </span>
                </span>
                <span className="text-[10px] text-slate-400 font-mono">LUCKYU.DEV</span>
              </div>

              {/* Staggered Navigation Links */}
              <nav className="flex flex-col space-y-1">
                {navLinks.map((item, idx) => {
                  const isActive = activeSection === item.id;
                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -14 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.035 * idx, duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <Link
                        to={item.href}
                        onClick={(e) => {
                          handleNavClick(e, item.id, item.href);
                          setMobileOpen(false);
                        }}
                        className={`py-2 px-3 rounded-xl text-xs font-semibold flex items-center justify-between transition-all ${
                          isActive
                            ? "bg-amber-400 text-slate-950 font-bold shadow-xs"
                            : "text-slate-200 hover:text-white hover:bg-white/10"
                        }`}
                      >
                        <span>{item.label}</span>
                        <span className={`text-xs ${isActive ? "text-slate-950 font-bold" : "text-slate-400"}`}>
                          →
                        </span>
                      </Link>
                    </motion.div>
                  );
                })}

                {/* Hubungi Saya Button at Bottom of Connected Card */}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.035 * navLinks.length + 0.02, duration: 0.22 }}
                  className="pt-2"
                >
                  <a
                    href="#contact"
                    onClick={(e) => {
                      handleNavClick(e, "contact", "/#contact");
                      setMobileOpen(false);
                    }}
                    className="block text-center py-2.5 rounded-xl bg-white text-[#142d1f] hover:bg-amber-400 hover:text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-sm cursor-pointer"
                  >
                    {t("Hubungi Saya", "Contact Me")}
                  </a>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  );
}
