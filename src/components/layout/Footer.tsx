import { ArrowUp } from "lucide-react";
import { socialLinks } from "../../lib/nav";

export function Footer() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <footer className="border-t border-[var(--color-rule)] bg-[var(--color-paper-2)] px-5 sm:px-8 lg:px-12 pt-16 pb-12">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Giant Lowercase Masthead Wordmark (Swiss Exhibition Archetype) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[var(--color-rule)]">
          <div className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-signal)] font-bold">
              KOLOFON & INDEKS IDENTITAS
            </span>
            <div className="font-display font-black text-4xl sm:text-6xl text-[var(--color-ink)] tracking-[-0.04em]">
              luckyu.dev
            </div>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 border border-[var(--color-rule)] bg-white text-[var(--color-ink)] hover:border-[var(--color-ink)] font-mono text-xs uppercase tracking-wider transition-colors cursor-pointer self-start md:self-auto"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp size={14} />
          </button>
        </div>

        {/* 12-Column Colophon Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 font-mono text-xs">
          {/* Col 1-4: Colophon Specs */}
          <div className="lg:col-span-4 space-y-2 text-[var(--color-ink-muted)]">
            <span className="font-bold text-[var(--color-ink)] uppercase block">SPESIFIKASI SISTEM</span>
            <p>Framework: React 19 &bull; Vite &bull; Tailwind CSS v4</p>
            <p>Tipografi: Sora (Display) &bull; Inter &bull; JetBrains Mono</p>
            <p>Prinsip: Swiss Neo-Grotesque &bull; Anti-AI-Slop</p>
          </div>

          {/* Col 5-8: Navigation Index */}
          <div className="lg:col-span-4 space-y-2 text-[var(--color-ink-muted)]">
            <span className="font-bold text-[var(--color-ink)] uppercase block">NAVIGASI SITUS</span>
            <div className="grid grid-cols-2 gap-2">
              <a href="#projects" className="hover:text-[var(--color-signal)] transition-colors">
                &gt; Karya Pilihan
              </a>
              <a href="#about" className="hover:text-[var(--color-signal)] transition-colors">
                &gt; Pendekatan
              </a>
              <a href="#services" className="hover:text-[var(--color-signal)] transition-colors">
                &gt; Layanan
              </a>
              <a href="#skills" className="hover:text-[var(--color-signal)] transition-colors">
                &gt; Keahlian
              </a>
              <a href="#experience" className="hover:text-[var(--color-signal)] transition-colors">
                &gt; Pengalaman
              </a>
              <a href="#contact" className="hover:text-[var(--color-signal)] transition-colors">
                &gt; Kontak
              </a>
            </div>
          </div>

          {/* Col 9-12: Social & Legal */}
          <div className="lg:col-span-4 space-y-2 text-[var(--color-ink-muted)]">
            <span className="font-bold text-[var(--color-ink)] uppercase block">JEJARING & PROFIL</span>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="px-2.5 py-1 border border-[var(--color-rule)] bg-white hover:border-[var(--color-signal)] hover:text-[var(--color-signal)] transition-colors uppercase text-[11px]"
                >
                  {s.label}
                </a>
              ))}
            </div>
            <p className="pt-2 text-[11px] text-[var(--color-ink-dim)]">
              Hak Cipta &copy; {new Date().getFullYear()} Lucky Ubaidillah. Dirancang & dibangun secara mandiri.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
