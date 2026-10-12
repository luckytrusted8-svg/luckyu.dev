import { useState, type FormEvent } from "react";
import { MapPin, Check, Copy, ArrowUpRight } from "lucide-react";

const WHATSAPP_BASE_URL = "https://wa.me/62895629244156";
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [copied, setCopied] = useState(false);
  const [sent, setSent] = useState(false);

  function handleCopyEmail() {
    navigator.clipboard.writeText("luckyubidillah5@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();

    const nextErrors: { name?: string; email?: string; message?: string } = {};
    if (!name) nextErrors.name = "Nama wajib diisi.";
    if (!email) nextErrors.email = "Email wajib diisi.";
    else if (!EMAIL_REGEX.test(email)) nextErrors.email = "Format email tidak valid.";
    if (!message) nextErrors.message = "Pesan kebutuhan proyek wajib diisi.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const waMessage =
      `Halo Lucky,\n\nSaya ingin berkonsultasi mengenai proyek web.\n\n` +
      `Nama: ${name}\nEmail: ${email}\n\n` +
      `Kebutuhan:\n${message}\n\nTerima kasih.`;

    window.open(`${WHATSAPP_BASE_URL}?text=${encodeURIComponent(waMessage)}`, "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <section
      id="contact"
      className="relative px-5 sm:px-8 lg:px-12 py-24 sm:py-32 border-b border-white/10 bg-[#080b12]"
    >
      <div className="max-w-7xl mx-auto space-y-14">
        {/* Folio Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-6 border-b border-white/10">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs text-amber-400">
              <span className="px-2 py-0.5 rounded-sm bg-amber-400/10 font-bold border border-amber-400/20">08</span>
              <span className="uppercase tracking-widest font-semibold">KOMUNIKASI &amp; INKUIRI PROYEK</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-[-0.03em] leading-tight">
              mulai diskusi atau kirimkan brief.
            </h2>
          </div>
          <span className="font-mono text-xs text-emerald-400 uppercase font-semibold">
            ESTIMASI_RESPON: &lt; 24 JAM
          </span>
        </div>

        {/* 12-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left (Cols 1-5): Direct Channels & Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl border border-white/10 bg-[#0e1422] p-6 sm:p-8 space-y-6 shadow-xl">
              <div className="border-b border-white/10 pb-4 font-mono text-xs text-slate-400 uppercase tracking-wider">
                SALURAN_LANGSUNG
              </div>

              {/* Email Box with Copy */}
              <div className="space-y-2">
                <span className="font-mono text-xs text-slate-400 uppercase block">
                  Surel (Email)
                </span>
                <div className="flex items-center justify-between p-3.5 rounded-xl border border-white/10 bg-[#070a10]">
                  <span className="font-mono text-xs sm:text-sm font-semibold text-white truncate mr-2">
                    luckyubidillah5@gmail.com
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-white/5 border border-white/10 hover:border-amber-400 text-slate-300 hover:text-white transition-colors cursor-pointer shrink-0"
                    title="Salin Email"
                  >
                    {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                  </button>
                </div>
              </div>

              {/* WhatsApp Box */}
              <div className="space-y-2">
                <span className="font-mono text-xs text-slate-400 uppercase block">
                  WhatsApp Bisnis
                </span>
                <a
                  href={WHATSAPP_BASE_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl border border-white/10 bg-[#070a10] hover:border-emerald-400/50 transition-colors group"
                >
                  <span className="font-mono text-xs sm:text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors">
                    +62 895 6292 44156
                  </span>
                  <ArrowUpRight size={15} className="text-slate-500 group-hover:text-emerald-400" />
                </a>
              </div>

              {/* Location */}
              <div className="pt-4 border-t border-white/10 font-mono text-xs text-slate-400 space-y-1">
                <div className="flex items-center gap-1.5 text-white font-semibold">
                  <MapPin size={13} className="text-amber-400" />
                  <span>Tangerang &amp; Jabodetabek, Indonesia</span>
                </div>
                <p className="text-[11px] text-slate-500">
                  Terbuka untuk kolaborasi jarak jauh (Remote) atau pertemuan proyek onsite.
                </p>
              </div>
            </div>
          </div>

          {/* Right (Cols 6-12): Atmospheric Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-white/15 bg-[#0e1422] p-6 sm:p-10 space-y-6 shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-4 font-mono text-xs">
                <span className="font-bold text-white uppercase">FORMULIR_INKUIRI_PROYEK</span>
                <span className="text-slate-500">WHATSAPP DIRECT</span>
              </div>

              {sent ? (
                <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 space-y-2">
                  <div className="flex items-center gap-2 font-mono text-xs font-bold text-emerald-400">
                    <Check size={16} />
                    <span>PESAN BERHASIL DISIAPKAN</span>
                  </div>
                  <p className="text-xs text-slate-300">
                    Tautan WhatsApp telah dibuka. Jika tab belum muncul, silakan klik kontak WhatsApp di samping.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="contact-name" className="block font-mono text-xs font-semibold uppercase text-slate-300 mb-2">
                      Nama Lengkap / Instansi *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="e.g. John Doe / PT Nama Bisnis"
                      className={`w-full p-3.5 rounded-xl text-xs sm:text-sm border bg-[#070a10] text-white font-body focus:outline-none focus:border-amber-400 transition-colors ${
                        errors.name ? "border-red-500" : "border-white/10"
                      }`}
                    />
                    {errors.name && <p className="font-mono text-[11px] text-red-400 mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block font-mono text-xs font-semibold uppercase text-slate-300 mb-2">
                      Alamat Email *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="nama@domain.com"
                      className={`w-full p-3.5 rounded-xl text-xs sm:text-sm border bg-[#070a10] text-white font-body focus:outline-none focus:border-amber-400 transition-colors ${
                        errors.email ? "border-red-500" : "border-white/10"
                      }`}
                    />
                    {errors.email && <p className="font-mono text-[11px] text-red-400 mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block font-mono text-xs font-semibold uppercase text-slate-300 mb-2">
                      Deskripsi Kebutuhan Proyek *
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Jelaskan gambaran aplikasi web, tujuan, atau fitur utama yang Anda butuhkan..."
                      className={`w-full p-3.5 rounded-xl text-xs sm:text-sm border bg-[#070a10] text-white font-body focus:outline-none focus:border-amber-400 transition-colors ${
                        errors.message ? "border-red-500" : "border-white/10"
                      }`}
                    />
                    {errors.message && <p className="font-mono text-[11px] text-red-400 mt-1">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 hover:from-amber-300 hover:to-amber-400 font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(245,158,11,0.25)] hover:shadow-[0_0_30px_rgba(245,158,11,0.4)] cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Kirim Pesan via WhatsApp</span>
                    <ArrowUpRight size={14} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
