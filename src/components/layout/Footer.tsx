import { useState, type FormEvent } from "react";
import { ArrowRight, Check } from "lucide-react";
import { socialLinks } from "../../lib/nav";
import { LuckyLogo } from "../ui/LuckyLogo";
import { useLanguage } from "../../context/LanguageContext";

export function Footer() {
  const { t } = useLanguage();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleSubscribe(e: FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail("");
      setSubscribed(false);
    }, 3000);
  }

  return (
    <footer className="bg-white text-slate-900 border-t border-slate-200">
      {/* Top Main Footer Section */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-16 sm:pt-20 pb-16 space-y-12">
        {/* Callout Header Row: Let's Connect there */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-10 border-b border-slate-200">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-[-0.03em] leading-tight">
            {t("Mari", "Let's")}{" "}
            <span className="text-amber-500">{t("Terhubung", "Connect")}</span>{" "}
            {t("di Sini", "there")}
          </h2>

          <a
            href="#contact"
            className="inline-flex items-center pl-6 pr-2 py-2 rounded-full bg-[#142d1f] hover:bg-[#0d1e14] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-sm group shrink-0 self-start md:self-auto cursor-pointer"
          >
            <span>{t("Mulai Diskusi", "Let's Talk")}</span>
            <span className="ml-3.5 w-8 h-8 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
              <ArrowRight size={14} />
            </span>
          </a>
        </div>

        {/* 4 Columns Grid matching Behance Reference */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 text-xs">
          {/* Column 1 (Cols 1-4): Brand & Social Circles */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <LuckyLogo className="w-8 h-8" />
              <span className="font-display font-black text-2xl tracking-tight text-slate-900">
                luckyu<span className="text-amber-500">.</span>
              </span>
            </div>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-sm">
              {t(
                "Pengembang web full-stack yang berfokus pada performa tinggi, arsitektur kode bersih, dan antarmuka interaktif yang mudah digunakan.",
                "Full-stack web developer focused on high performance, clean code architecture, and intuitive, interactive user interfaces."
              )}
            </p>

            {/* Circular Social Badges matching Behance screenshot */}
            <div className="flex items-center gap-2.5 pt-2">
              {socialLinks.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 rounded-full bg-amber-500 text-slate-950 hover:bg-[#142d1f] hover:text-white flex items-center justify-center transition-all shadow-2xs hover:scale-105"
                    aria-label={s.label}
                    title={s.label}
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2 (Cols 5-6): Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <span className="font-black text-slate-900 uppercase block text-sm tracking-wide">
              {t("Navigasi", "Navigation")}
            </span>
            <ul className="space-y-2 text-slate-600 font-medium">
              <li>
                <a href="#home" className="hover:text-amber-600 transition-colors">
                  {t("Beranda", "Home")}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-600 transition-colors">
                  {t("Layanan", "Services")}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-amber-600 transition-colors">
                  {t("Tentang", "About")}
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-amber-600 transition-colors">
                  {t("Proyek", "Projects")}
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:text-amber-600 transition-colors">
                  {t("Blog", "Blogs")}
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-amber-600 transition-colors">
                  {t("FAQ", "FAQs")}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 (Cols 7-9): Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <span className="font-black text-slate-900 uppercase block text-sm tracking-wide">
              {t("Kontak", "Contact")}
            </span>
            <ul className="space-y-2 text-slate-600 font-medium">
              <li>
                <a
                  href="https://wa.me/62895629244156"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-amber-600 transition-colors"
                >
                  +62 895-6292-44156
                </a>
              </li>
              <li>
                <a
                  href="https://luckyu.dev"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-amber-600 transition-colors"
                >
                  www.luckyu.dev
                </a>
              </li>
              <li>
                <a
                  href="mailto:luckyubaidillah8@gmail.com"
                  className="hover:text-amber-600 transition-colors"
                >
                  luckyubaidillah8@gmail.com
                </a>
              </li>
              <li className="pt-1 text-slate-500">
                Tangerang, Banten, Indonesia
              </li>
            </ul>
          </div>

          {/* Column 4 (Cols 10-12): Newsletter */}
          <div className="lg:col-span-3 space-y-3">
            <span className="font-black text-slate-900 uppercase block text-sm tracking-wide">
              {t("Dapatkan Informasi Terbaru", "Get the latest information")}
            </span>
            <p className="text-slate-500 text-xs leading-relaxed">
              {t(
                "Dapatkan informasi pembaruan artikel dan studi kasus teknologi langsung ke email Anda.",
                "Get updates on the latest articles and tech case studies directly in your inbox."
              )}
            </p>

            <form onSubmit={handleSubscribe} className="pt-1">
              <div className="flex items-center gap-2 bg-slate-100 rounded-xl p-1.5 border border-slate-200 focus-within:border-amber-500 focus-within:ring-2 focus-within:ring-amber-200 transition-all">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t("Alamat email Anda...", "Email address...")}
                  className="w-full bg-transparent px-3 py-1.5 text-xs text-slate-900 placeholder:text-slate-400 outline-none"
                />
                <button
                  type="submit"
                  className="w-8 h-8 rounded-lg bg-[#142d1f] hover:bg-[#0d1e14] text-white flex items-center justify-center shrink-0 transition-all cursor-pointer shadow-xs"
                  aria-label="Subscribe"
                >
                  {subscribed ? <Check size={14} className="text-amber-400" /> : <ArrowRight size={14} />}
                </button>
              </div>
              {subscribed && (
                <p className="text-[11px] text-emerald-600 font-bold mt-1.5">
                  {t("Terima kasih sudah berlangganan!", "Thank you for subscribing!")}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Deep Forest Pine Bottom Strip matching Behance Reference */}
      <div className="bg-[#142d1f] text-slate-300 px-5 sm:px-8 lg:px-12 py-5 border-t border-[#1b3d2b] font-mono text-[11px]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <span>
            {t("Hak Cipta", "Copyright")} &copy; {new Date().getFullYear()} Lucky. {t("Seluruh Hak Cipta Dilindungi.", "All Rights Reserved.")}
          </span>
          <div className="flex items-center gap-4 text-slate-400">
            <a href="#about" className="hover:text-amber-400 transition-colors">
              {t("Syarat & Ketentuan Pengguna", "User Terms & Conditions")}
            </a>
            <span>|</span>
            <a href="#contact" className="hover:text-amber-400 transition-colors">
              {t("Kebijakan Privasi", "Privacy Policy")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
