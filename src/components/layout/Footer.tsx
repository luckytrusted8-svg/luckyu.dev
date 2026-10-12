import { ArrowUp, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { socialLinks } from "../../lib/nav";
import { LuckyLogo } from "../ui/LuckyLogo";

export function Footer() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <footer className="bg-[#142d1f] text-white px-5 sm:px-8 lg:px-12 pt-16 pb-12 border-t border-[#1c3d2a]">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Top Header Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-10 border-b border-white/10">
          <div className="space-y-1">
            <div className="flex items-center gap-2.5">
              <LuckyLogo className="w-8 h-8" />
              <span className="font-display font-bold text-2xl tracking-tight text-white">
                luckyu<span className="text-amber-400">.</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 pt-1">
              Web Developer &bull; Berbasis di Tangerang, Indonesia.
            </p>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-amber-400 hover:text-slate-950 text-white font-mono text-xs uppercase tracking-wider transition-all cursor-pointer self-start md:self-auto border border-white/10"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp size={14} />
          </button>
        </div>

        {/* Footer Navigation & Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 text-xs text-slate-300">
          {/* Cols 1-4: Tech & Tools */}
          <div className="lg:col-span-4 space-y-2">
            <span className="font-bold text-white uppercase block text-sm">Fokus Teknologi</span>
            <p className="text-slate-400 leading-relaxed">
              React, Next.js, Laravel, Tailwind CSS, TypeScript, MySQL, Prisma, dan Express.js.
            </p>
          </div>

          {/* Cols 5-8: Nav Links */}
          <div className="lg:col-span-4 space-y-2">
            <span className="font-bold text-white uppercase block text-sm">Navigasi Portofolio</span>
            <div className="grid grid-cols-2 gap-2 text-slate-300">
              <a href="#home" className="hover:text-amber-400 transition-colors">
                &gt; Beranda
              </a>
              <a href="#services" className="hover:text-amber-400 transition-colors">
                &gt; Layanan
              </a>
              <a href="#about" className="hover:text-amber-400 transition-colors">
                &gt; Tentang Saya
              </a>
              <a href="#projects" className="hover:text-amber-400 transition-colors">
                &gt; Proyek &amp; Karya
              </a>
              <a href="#skills" className="hover:text-amber-400 transition-colors">
                &gt; Keahlian &amp; Alat
              </a>
              <Link to="/blog" className="hover:text-amber-400 transition-colors">
                &gt; Blog &amp; Artikel
              </Link>
            </div>
          </div>

          {/* Cols 9-12: Social Links */}
          <div className="lg:col-span-4 space-y-3">
            <span className="font-bold text-white uppercase block text-sm">Tautan &amp; Kontak</span>
            <div className="flex items-center gap-3">
              {socialLinks.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 rounded-full bg-white/10 hover:bg-amber-400 hover:text-slate-950 text-white flex items-center justify-center transition-all"
                    aria-label={s.label}
                    title={s.label}
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
              <a
                href="mailto:luckyubidillah5@gmail.com"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-amber-400 hover:text-slate-950 text-white flex items-center justify-center transition-all"
                aria-label="Email"
                title="Email"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Colophon & Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-[11px] text-slate-400">
          <span>&copy; {new Date().getFullYear()} Lucky Ubaidillah. Hak cipta dilindungi.</span>
          <span>Dibuat dengan React &bull; Tailwind CSS &bull; Vite</span>
        </div>
      </div>
    </footer>
  );
}
