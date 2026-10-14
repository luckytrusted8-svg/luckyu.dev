import { useState, type FormEvent } from "react";
import { ArrowRight, Phone, Mail, Globe, MapPin, CheckCircle2 } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

const WHATSAPP_BASE_URL = "https://wa.me/62895629244156";
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function Contact() {
  const { language, t } = useLanguage();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Full-Stack Web Application",
    budget: "Rp 2.000.000 - Rp 5.000.000",
    location: "Indonesia",
    message: "",
  });

  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();

    const nextErrors: { name?: string; email?: string; message?: string } = {};
    if (!name) nextErrors.name = t("Nama wajib diisi.", "Name is required.");
    if (!email) nextErrors.email = t("Email wajib diisi.", "Email is required.");
    else if (!EMAIL_REGEX.test(email)) nextErrors.email = t("Format email tidak valid.", "Invalid email format.");
    if (!message) nextErrors.message = t("Pesan kebutuhan proyek wajib diisi.", "Project message is required.");

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const waMessage =
      `Halo Lucky,\n\nSaya tertarik berdiskusi mengenai proyek baru:\n\n` +
      `Nama: ${name}\n` +
      `Email: ${email}\n` +
      `Telepon: ${form.phone || "-"}\n` +
      `Layanan: ${form.service}\n` +
      `Estimasi Budget: ${form.budget}\n` +
      `Lokasi: ${form.location || "Indonesia"}\n\n` +
      `Detail Kebutuhan:\n${message}\n\nTerima kasih.`;

    window.open(`${WHATSAPP_BASE_URL}?text=${encodeURIComponent(waMessage)}`, "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <section
      id="contact"
      className="relative px-5 sm:px-8 lg:px-12 py-20 sm:py-28 bg-white border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Two Columns Grid matching Behance Image 3 Top */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column (Cols 1-5): Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-500 font-mono">
                <span className="w-5 h-[2px] bg-amber-500 inline-block"></span>
                <span>{t("Hubungi Saya", "Contact Us")}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-[-0.03em] leading-tight">
                {language === "id" ? (
                  <>
                    Punya Ide Proyek? <br />
                    <span className="text-amber-500">Mari Wujudkan Bersama</span>
                  </>
                ) : (
                  <>
                    Let's Talk for <span className="text-amber-500">Your</span><br />
                    <span className="text-amber-500">Next Projects</span>
                  </>
                )}
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed pt-2">
                {t(
                  "Punya ide proyek baru, butuh bantuan sistem web, atau ingin mendiskusikan peluang kerja sama? Saya siap membantu mewujudkannya.",
                  "Have a new project idea, need assistance with web systems, or want to discuss collaboration? I'm ready to bring it to life."
                )}
              </p>
            </div>

            {/* 4 Contact Channels with Circular Amber Badges matching Image 3 */}
            <div className="space-y-5 pt-2">
              {/* Phone / WhatsApp */}
              <a
                href={WHATSAPP_BASE_URL}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center font-bold shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                  <Phone size={20} className="stroke-[2.2]" />
                </div>
                <div className="space-y-0.5">
                  <div className="text-sm font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                    +62 895-6292-44156
                  </div>
                  <div className="text-xs text-slate-500">WhatsApp &amp; Telepon Langsung</div>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:luckyubaidillah8@gmail.com"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center font-bold shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                  <Mail size={20} className="stroke-[2.2]" />
                </div>
                <div className="space-y-0.5">
                  <div className="text-sm font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                    luckyubaidillah8@gmail.com
                  </div>
                  <div className="text-xs text-slate-500">Email untuk Proposal &amp; Pertanyaan</div>
                </div>
              </a>

              {/* Social / GitHub */}
              <a
                href="https://github.com/luckytrusted8-svg"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center font-bold shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                  <Globe size={20} className="stroke-[2.2]" />
                </div>
                <div className="space-y-0.5">
                  <div className="text-sm font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                    github.com/luckytrusted8-svg
                  </div>
                  <div className="text-xs text-slate-500">Repositori &amp; Portofolio Kode</div>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center font-bold shrink-0 shadow-2xs">
                  <MapPin size={20} className="stroke-[2.2]" />
                </div>
                <div className="space-y-0.5">
                  <div className="text-sm font-bold text-slate-900">
                    Tangerang, Banten, Indonesia
                  </div>
                  <div className="text-xs text-slate-500">Zona Waktu WIB (UTC+7)</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (Cols 6-12): The 2-Column Form */}
          <div className="lg:col-span-7 bg-[#f8f9fa] border border-slate-200/90 rounded-[28px] p-7 sm:p-10 shadow-2xs">
            {sent ? (
              <div className="p-8 rounded-2xl bg-white border border-emerald-200 text-emerald-950 space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={24} className="text-emerald-600 shrink-0" />
                  <h3 className="font-bold text-lg">Pesan Berhasil Disiapkan</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  WhatsApp kamu telah terbuka dengan pesan yang telah dirangkum rapi. Jika belum terbuka secara otomatis, kamu dapat menghubungi langsung nomor WhatsApp di sebelah kiri.
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="px-5 py-2.5 rounded-full bg-[#142d1f] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#0d1e14] transition-all cursor-pointer"
                >
                  Kirim Pesan Lain
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {/* Row 1: Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="block text-xs font-bold text-slate-800">
                      {t("Nama Lengkap *", "Your Name *")}
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder={t("Contoh: Lucky Ubaidillah", "Ex. Lucky Ubaidillah")}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none text-sm text-slate-900 placeholder:text-slate-400 transition-all shadow-2xs"
                    />
                    {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="email" className="block text-xs font-bold text-slate-800">
                      {t("Alamat Email *", "Email *")}
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="example@gmail.com"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none text-sm text-slate-900 placeholder:text-slate-400 transition-all shadow-2xs"
                    />
                    {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
                  </div>
                </div>

                {/* Row 2: Phone & Service */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="block text-xs font-bold text-slate-800">
                      {t("Nomor Telepon *", "Phone *")}
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder={t("Masukkan Nomor Telepon", "Enter Phone Number")}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none text-sm text-slate-900 placeholder:text-slate-400 transition-all shadow-2xs"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="service" className="block text-xs font-bold text-slate-800">
                      {t("Tertarik pada Layanan *", "I'm Interested In *")}
                    </label>
                    <select
                      id="service"
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none text-sm text-slate-900 transition-all shadow-2xs cursor-pointer"
                    >
                      <option value="Full-Stack Web Application">{t("Aplikasi Web Full-Stack", "Full-Stack Web Application")}</option>
                      <option value="Landing Page & UI/UX">{t("Landing Page & Desain UI/UX", "Landing Page & UI/UX")}</option>
                      <option value="Sistem Kasir (POS) & Inventaris">{t("Sistem Kasir (POS) & Inventaris", "Point of Sale (POS) & Inventory")}</option>
                      <option value="Backend REST API & Database">{t("Backend REST API & Database", "Backend REST API & Database")}</option>
                      <option value="Konsultasi & Maintenance">{t("Konsultasi & Pemeliharaan", "Consultation & Maintenance")}</option>
                    </select>
                  </div>
                </div>

                {/* Row 3: Budget & Location */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="budget" className="block text-xs font-bold text-slate-800">
                      {t("Rentang Anggaran *", "Budget Range *")}
                    </label>
                    <select
                      id="budget"
                      value={form.budget}
                      onChange={(e) => setForm({ ...form, budget: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none text-sm text-slate-900 transition-all shadow-2xs cursor-pointer"
                    >
                      <option value="< Rp 2.000.000">&lt; Rp 2.000.000 (&lt; $150)</option>
                      <option value="Rp 2.000.000 - Rp 5.000.000">Rp 2.000.000 - Rp 5.000.000 ($150 - $350)</option>
                      <option value="Rp 5.000.000 - Rp 10.000.000">Rp 5.000.000 - Rp 10.000.000 ($350 - $700)</option>
                      <option value="> Rp 10.000.000 / Custom">&gt; Rp 10.000.000 / Custom (&gt; $700)</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="location" className="block text-xs font-bold text-slate-800">
                      {t("Negara / Kota *", "Country / City *")}
                    </label>
                    <input
                      id="location"
                      type="text"
                      value={form.location}
                      onChange={(e) => setForm({ ...form, location: e.target.value })}
                      placeholder={t("Indonesia / Tangerang", "Select Country or City")}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none text-sm text-slate-900 placeholder:text-slate-400 transition-all shadow-2xs"
                    />
                  </div>
                </div>

                {/* Row 4: Message */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="block text-xs font-bold text-slate-800">
                    {t("Pesan Anda *", "Your Message *")}
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder={t("Tuliskan kebutuhan proyek Anda di sini...", "Enter message...")}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none text-sm text-slate-900 placeholder:text-slate-400 transition-all resize-none shadow-2xs"
                  />
                  {errors.message && <p className="text-xs text-red-500">{errors.message}</p>}
                </div>

                {/* Submit Capsule Button matching Behance Image 3 */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="inline-flex items-center pl-7 pr-2 py-2 rounded-full bg-[#142d1f] hover:bg-[#0d1e14] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md group cursor-pointer"
                  >
                    <span>{t("Kirim Pesan", "Submit")}</span>
                    <span className="ml-4 w-8 h-8 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                      <ArrowRight size={15} />
                    </span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
