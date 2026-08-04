import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";

const contactDetails = [
  { icon: Mail, label: "Email", value: "luckyubidillah5@gmail.com" },
  { icon: Phone, label: "Telepon", value: "+62 895 6292 44156" },
  { icon: MapPin, label: "Lokasi", value: "Ciledug, Tangerang, Banten, Indonesia 15155" },
];

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Project inquiry from ${form.name || "your site"}`);
    const body = encodeURIComponent(`${form.message}\n\n- ${form.name} (${form.email})`);
    window.location.href = `mailto:hello@luckyu.web.id?subject=${subject}&body=${body}`;
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
              index="07"
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
                      <p className="text-sm text-text">{c.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-border bg-surface p-6 sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <label htmlFor="name" className="text-xs text-muted">
                    Nama Anda
                  </label>
                  <input
                    id="name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="mt-2 w-full rounded-lg border border-border bg-bg-elevated px-4 py-3 text-sm text-text outline-none transition-colors focus:border-primary"
                    placeholder="Jane Doe"
                  />
                </div>
                <div className="sm:col-span-1">
                  <label htmlFor="email" className="text-xs text-muted">
                    Email Anda
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="mt-2 w-full rounded-lg border border-border bg-bg-elevated px-4 py-3 text-sm text-text outline-none transition-colors focus:border-primary"
                    placeholder="jane@email.com"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="text-xs text-muted">
                    Pesan Anda
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="mt-2 w-full resize-none rounded-lg border border-border bg-bg-elevated px-4 py-3 text-sm text-text outline-none transition-colors focus:border-primary"
                    placeholder="Ceritakan secara singkat tentang proyek Anda..."
                  />
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
                {sent ? "Membuka aplikasi email..." : "Kirim pesan"}
              </motion.button>
              
              <p className="mt-3 text-[11px] text-muted-dim">
                Formulir ini akan membuka aplikasi email Anda dengan pesan yang sudah terisi. Tidak ada data yang disimpan.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
