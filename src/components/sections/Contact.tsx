import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";

const WHATSAPP_BASE_URL = "https://wa.me/62895629244156";
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const contactDetails = [
  { icon: Mail, label: "Email", value: "luckyubidillah5@gmail.com" },
  { icon: Phone, label: "Telepon", value: "+62 895 6292 44156", href: WHATSAPP_BASE_URL },
  { icon: MapPin, label: "Lokasi", value: "Ciledug, Tangerang, Banten, Indonesia 15155" },
];

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [sent, setSent] = useState(false);

  const inputClass = (hasError?: string) =>
    `mt-2 w-full rounded-lg border bg-bg-elevated px-4 py-3 text-sm text-text outline-none transition-colors focus:border-primary ${
      hasError ? "border-red-500" : "border-border"
    }`;

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();

    const nextErrors: { name?: string; email?: string; message?: string } = {};
    if (!name) nextErrors.name = "Nama wajib diisi.";
    if (!email) nextErrors.email = "Email wajib diisi.";
    else if (!EMAIL_REGEX.test(email)) nextErrors.email = "Format email tidak valid.";
    if (!message) nextErrors.message = "Pesan wajib diisi.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const waMessage =
      `Halo Lucky,\n\nSaya ingin menghubungi Anda melalui website.\n\n` +
      `Nama: ${name}\nEmail: ${email}\n\n` +
      `Pesan:\n${message}\n\nTerima kasih.`;

    window.open(`${WHATSAPP_BASE_URL}?text=${encodeURIComponent(waMessage)}`, "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <section id="contact" className="px-5 py-24 sm:px-10 lg:py-32 border-t border-border/60">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="Mari Terhubung"
              heading="Punya rencana proyek? Mari wujudkan bersama."
              description="Baik produk lengkap maupun satu fitur khusus, ceritakan kebutuhan yang ingin Anda bangun."
              index="08"
            />

            <Reveal delay={0.15}>
              <div className="mt-10 space-y-5">
                {contactDetails.map((c) => (
                  <div key={c.label} className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-primary">
                      <c.icon size={16} />
                    </span>
                    <div>
                      <p className="text-xs text-muted-dim">{c.label}</p>
                      {"href" in c ? (
                        <a
                          href={c.href}
                          target="_blank"
                          rel="noreferrer"
                          className="text-sm text-text transition-colors hover:text-primary"
                        >
                          {c.value}
                        </a>
                      ) : (
                        <p className="text-sm text-text">{c.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-2xl border border-border bg-surface p-6 sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <label htmlFor="name" className="text-xs text-muted">
                    Nama Anda
                  </label>
                  <input
                    id="name"
                    value={form.name}
                    onChange={(e) => {
                      setForm({ ...form, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: undefined });
                    }}
                    className={inputClass(errors.name)}
                    placeholder="Jane Doe"
                    aria-invalid={!!errors.name}
                  />
                  {errors.name && <p className="mt-1 text-[11px] text-red-500">{errors.name}</p>}
                </div>
                <div className="sm:col-span-1">
                  <label htmlFor="email" className="text-xs text-muted">
                    Email Anda
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => {
                      setForm({ ...form, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: undefined });
                    }}
                    className={inputClass(errors.email)}
                    placeholder="jane@email.com"
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && <p className="mt-1 text-[11px] text-red-500">{errors.email}</p>}
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="text-xs text-muted">
                    Pesan Anda
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={form.message}
                    onChange={(e) => {
                      setForm({ ...form, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: undefined });
                    }}
                    className={`${inputClass(errors.message)} resize-none`}
                    placeholder="Ceritakan secara singkat tentang proyek Anda..."
                    aria-invalid={!!errors.message}
                  />
                  {errors.message && <p className="mt-1 text-[11px] text-red-500">{errors.message}</p>}
                </div>
              </div>

              {/* Tombol Submit Solid & Clean */}
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary/90"
              >
                {sent ? <CheckCircle2 size={16} /> : <Send size={16} />}
                {sent ? "Membuka WhatsApp..." : "Kirim pesan"}
              </motion.button>

              <p className="mt-3 text-[11px] text-muted-dim">
                Tombol ini akan membuka WhatsApp dengan pesan Anda. Tidak ada data yang disimpan.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

