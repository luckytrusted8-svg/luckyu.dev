import { ArrowUp } from "lucide-react";
import { socialLinks } from "../../lib/nav";

export function Footer() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <footer className="border-t border-white/10 bg-[#06080e] px-5 sm:px-8 lg:px-12 pt-16 pb-12">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Giant Masthead Wordmark */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-white/10">
          <div className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-widest text-amber-400 font-bold">
              KOLOFON &amp; INDEKS IDENTITAS
            </span>
            <div className="font-display font-black text-4xl sm:text-6xl text-white tracking-[-0.04em]">
              luckyu<span className="text-amber-400">.dev</span>
            </div>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/5 text-slate-300 hover:text-white hover:border-amber-400 font-mono text-xs uppercase tracking-wider transition-all cursor-pointer self-start md:self-auto"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp size={14} />
          </button>
        </div>

        {/* 12-Column Colophon Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 font-mono text-xs">
          {/* Col 1-4: System Specs */}
          <div className="lg:col-span-4 space-y-2 text-slate-400">
            <span className="font-bold text-white uppercase block">SPESIFIKASI SISTEM</span>
            <p>Framework: React 19 &bull; Vite &bull; Tailwind CSS v4</p>
            <p>Tipografi: Sora (Display) &bull; Inter &bull; JetBrains Mono</p>
            <p>Estetika: Atmospheric Cinematic &bull; Anti-AI-Slop</p>
          </div>

          {/* Col 5-8: Navigation Index */}
          <div className="lg:col-span-4 space-y-2 text-slate-400">
            <span className="font-bold text-white uppercase block">NAVIGASI SITUS</span>
            <div className="grid grid-cols-2 gap-2">
              <a href="#projects" className="hover:text-amber-400 transition-colors">
                &gt; Karya Pilihan
              </a>
              <a href="#about" className="hover:text-amber-400 transition-colors">
                &gt; Pendekatan
              </a>
              <a href="#services" className="hover:text-amber-400 transition-colors">
                &gt; Layanan
              </a>
              <a href="#skills" className="hover:text-amber-400 transition-colors">
                &gt; Keahlian
              </a>
              <a href="#experience" className="hover:text-amber-400 transition-colors">
                &gt; Pengalaman
              </a>
              <a href="#contact" className="hover:text-amber-400 transition-colors">
                &gt; Kontak
              </a>
            </div>
          </div>

          {/* Col 9-12: Social & Legal */}
          <div className="lg:col-span-4 space-y-2 text-slate-400">
            <span className="font-bold text-white uppercase block">JEJARING &amp; PROFIL</span>
            <div className="flex flex-wrap gap-2">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1 rounded-full border border-white/10 bg-white/5 hover:border-amber-400 hover:text-amber-300 transition-all uppercase text-[11px]"
                >
                  {s.label}
                </a>
              ))}
            </div>
            <p className="pt-2 text-[11px] text-slate-600">
              Hak Cipta &copy; {new Date().getFullYear()} Lucky Ubaidillah. Dirancang &amp; dibangun secara mandiri.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
