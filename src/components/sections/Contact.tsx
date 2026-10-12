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
      className="relative px-5 sm:px-8 lg:px-12 py-20 sm:py-28 border-b border-[var(--color-rule)] bg-[var(--color-paper)]"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header Folio */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-6 border-b border-[var(--color-rule)]">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs text-[var(--color-ink-muted)]">
              <span className="px-2 py-0.5 bg-[var(--color-ink)] text-white font-bold">08</span>
              <span className="uppercase tracking-widest font-semibold">KOMUNIKASI & INKUIRI PROYEK</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-[var(--color-ink)] tracking-[-0.035em] leading-tight">
              mulai diskusi atau kirimkan brief.
            </h2>
          </div>
          <span className="font-mono text-xs text-[var(--color-signal)] uppercase font-semibold">
            ESTIMASI_RESPON: &lt; 24 JAM
          </span>
        </div>

        {/* 12-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left (Cols 1-5): Direct Channels & Availability Ledger */}
          <div className="lg:col-span-5 space-y-6">
            <div className="border border-[var(--color-rule)] bg-white p-6 sm:p-8 space-y-6">
              <div className="border-b border-[var(--color-rule)] pb-4 font-mono text-xs text-[var(--color-ink-dim)] uppercase tracking-wider">
                SALURAN_LANGSUNG
              </div>

              {/* Email Box with Copy */}
              <div className="space-y-2">
                <span className="font-mono text-xs text-[var(--color-ink-dim)] uppercase block">
                  Surel (Email)
                </span>
                <div className="flex items-center justify-between p-3 border border-[var(--color-rule)] bg-[var(--color-paper-2)]">
                  <span className="font-mono text-xs sm:text-sm font-semibold text-[var(--color-ink)] truncate mr-2">
                    luckyubidillah5@gmail.com
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-1.5 bg-white border border-[var(--color-rule)] hover:border-[var(--color-ink)] text-[var(--color-ink)] transition-colors cursor-pointer shrink-0"
                    title="Salin Email"
                  >
                    {copied ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                  </button>
                </div>
              </div>

              {/* WhatsApp Box */}
              <div className="space-y-2">
                <span className="font-mono text-xs text-[var(--color-ink-dim)] uppercase block">
                  WhatsApp Bisnis
                </span>
                <a
                  href={WHATSAPP_BASE_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 border border-[var(--color-rule)] bg-[var(--color-paper-2)] hover:border-[var(--color-signal)] transition-colors group"
                >
                  <span className="font-mono text-xs sm:text-sm font-semibold text-[var(--color-ink)] group-hover:text-[var(--color-signal)] transition-colors">
                    +62 895 6292 44156
                  </span>
                  <ArrowUpRight size={15} className="text-[var(--color-ink-dim)] group-hover:text-[var(--color-signal)]" />
                </a>
              </div>

              {/* Location */}
              <div className="pt-4 border-t border-[var(--color-rule)] font-mono text-xs text-[var(--color-ink-muted)] space-y-1">
                <div className="flex items-center gap-1.5 text-[var(--color-ink)] font-semibold">
                  <MapPin size={13} className="text-[var(--color-signal)]" />
                  <span>Tangerang & Jabodetabek, Indonesia</span>
                </div>
                <p className="text-[11px] text-[var(--color-ink-dim)]">
                  Terbuka untuk kolaborasi jarak jauh (Remote) atau pertemuan proyek onsite.
                </p>
              </div>
            </div>
          </div>

          {/* Right (Cols 6-12): Swiss Architectural Form */}
          <div className="lg:col-span-7">
            <div className="border border-[var(--color-ink)] bg-white p-6 sm:p-10 space-y-6">
              <div className="flex items-center justify-between border-b border-[var(--color-rule)] pb-4 font-mono text-xs">
                <span className="font-bold text-[var(--color-ink)] uppercase">FORMULIR_INKUIRI_PROYEK</span>
                <span className="text-[var(--color-ink-dim)]">KONEKSI: WHATSAPP DIRECT</span>
              </div>

              {sent ? (
                <div className="p-6 bg-[var(--color-paper-2)] border border-[var(--color-signal)] space-y-2">
                  <div className="flex items-center gap-2 font-mono text-xs font-bold text-[var(--color-signal)]">
                    <Check size={16} />
                    <span>PESAN BERHASIL DISIAPKAN</span>
                  </div>
                  <p className="text-xs text-[var(--color-ink-muted)]">
                    Tautan WhatsApp telah dibuka. Jika tab belum muncul, silakan klik tombol WhatsApp langsung di samping.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="contact-name" className="block font-mono text-xs font-semibold uppercase text-[var(--color-ink)] mb-1.5">
                      Nama Lengkap / Instansi *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="e.g. John Doe / PT Nama Bisnis"
                      className={`w-full p-3 text-xs sm:text-sm border bg-[var(--color-paper-2)] text-[var(--color-ink)] font-body focus:bg-white focus:outline-none focus:border-[var(--color-signal)] transition-colors ${
                        errors.name ? "border-red-500" : "border-[var(--color-rule)]"
                      }`}
                    />
                    {errors.name && <p className="font-mono text-[11px] text-red-600 mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block font-mono text-xs font-semibold uppercase text-[var(--color-ink)] mb-1.5">
                      Alamat Email *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="nama@domain.com"
                      className={`w-full p-3 text-xs sm:text-sm border bg-[var(--color-paper-2)] text-[var(--color-ink)] font-body focus:bg-white focus:outline-none focus:border-[var(--color-signal)] transition-colors ${
                        errors.email ? "border-red-500" : "border-[var(--color-rule)]"
                      }`}
                    />
                    {errors.email && <p className="font-mono text-[11px] text-red-600 mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block font-mono text-xs font-semibold uppercase text-[var(--color-ink)] mb-1.5">
                      Deskripsi Kebutuhan Proyek *
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Jelaskan gambaran aplikasi web, tujuan, atau fitur utama yang Anda butuhkan..."
                      className={`w-full p-3 text-xs sm:text-sm border bg-[var(--color-paper-2)] text-[var(--color-ink)] font-body focus:bg-white focus:outline-none focus:border-[var(--color-signal)] transition-colors ${
                        errors.message ? "border-red-500" : "border-[var(--color-rule)]"
                      }`}
                    />
                    {errors.message && <p className="font-mono text-[11px] text-red-600 mt-1">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 bg-[var(--color-ink)] text-white hover:bg-[var(--color-signal)] font-mono text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer flex items-center justify-center gap-2"
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
