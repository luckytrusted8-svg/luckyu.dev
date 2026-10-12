import { useState, type FormEvent } from "react";
import { Check, Copy, ArrowRight, MessageSquare, Mail, MapPin } from "lucide-react";

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
      `Halo Lucky,\n\nSaya ingin berdiskusi mengenai proyek web.\n\n` +
      `Nama: ${name}\nEmail: ${email}\n\n` +
      `Kebutuhan:\n${message}\n\nTerima kasih.`;

    window.open(`${WHATSAPP_BASE_URL}?text=${encodeURIComponent(waMessage)}`, "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <section
      id="contact"
      className="relative px-5 sm:px-8 lg:px-12 py-20 sm:py-28 bg-[#fafaf9] border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600 font-mono">
            <span>— Hubungi Saya</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-[-0.03em] leading-tight">
            Punya Ide Proyek? <span className="text-amber-500">Mari Wujudkan Bersama.</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
            Terbuka untuk kolaborasi pembuatan website baru, pengembangan sistem backend, hingga pengerjaan proyek freelance. Silakan hubungi langsung lewat WhatsApp atau formulir di bawah.
          </p>
        </div>

        {/* 12-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column (Cols 1-5): Fast Direct Channels */}
          <div className="lg:col-span-5 space-y-6">
            {/* WhatsApp Quick Action Card */}
            <div className="p-7 rounded-2xl bg-white border border-slate-200 space-y-4 shadow-xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
                  <MessageSquare size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-base text-slate-900">Chat Cepat di WhatsApp</h3>
                  <p className="text-xs text-slate-500">Respons biasanya dalam beberapa jam</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-600">
                Cara paling cepat untuk mendiskusikan timeline, estimasi biaya, dan kebutuhan proyek web kamu.
              </p>
              <a
                href={WHATSAPP_BASE_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center w-full py-3 px-5 rounded-full bg-[#142d1f] hover:bg-[#0d1e14] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-sm"
              >
                <span>Buka WhatsApp Sekarang</span>
                <span className="ml-2">→</span>
              </a>
            </div>

            {/* Email & Location Card */}
            <div className="p-7 rounded-2xl bg-white border border-slate-200 space-y-4 shadow-xs">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-slate-900">luckyubidillah5@gmail.com</h3>
                    <p className="text-xs text-slate-500">Email untuk proposal resmi</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-lg border border-slate-200 hover:border-slate-300 bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer"
                  title="Salin Email"
                >
                  {copied ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                  <span>{copied ? "Tersalin" : "Salin"}</span>
                </button>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-600 font-medium">
                <MapPin size={15} className="text-amber-500" />
                <span>Berbasis di Tangerang, Banten, Indonesia (UTC+7)</span>
              </div>
            </div>
          </div>

          {/* Right Column (Cols 6-12): WhatsApp Connected Form */}
          <div className="lg:col-span-7 p-7 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-md">
            <h3 className="font-display font-black text-xl text-slate-900 mb-6">
              Kirimkan Pesan Kebutuhan
            </h3>

            {sent ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 space-y-2">
                <div className="font-bold text-base">Pesan Anda Siap Dikirim!</div>
                <p className="text-xs sm:text-sm text-emerald-800">
                  Tab WhatsApp telah dibuka dengan pesan yang telah disiapkan. Jika belum terbuka otomatis, silakan hubungi langsung ke nomor +62 895-6292-44156.
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="mt-3 text-xs font-bold text-emerald-950 underline cursor-pointer"
                >
                  Kirim pesan baru
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      Nama Lengkap *
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Nama kamu atau tim"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none text-sm text-slate-900 placeholder:text-slate-400 transition-all"
                    />
                    {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      Alamat Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="email@domain.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none text-sm text-slate-900 placeholder:text-slate-400 transition-all"
                    />
                    {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Ceritakan Kebutuhan Proyek *
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Contoh: Saya membutuhkan pembuatan web landing page atau sistem kasir dengan Laravel..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none text-sm text-slate-900 placeholder:text-slate-400 transition-all resize-none"
                  />
                  {errors.message && <p className="text-xs text-red-500">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center pl-6 pr-2 py-2 rounded-full bg-[#142d1f] hover:bg-[#0d1e14] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md group cursor-pointer"
                >
                  <span>Kirim ke WhatsApp Saya</span>
                  <span className="ml-3.5 w-8 h-8 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                    <ArrowRight size={15} />
                  </span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
