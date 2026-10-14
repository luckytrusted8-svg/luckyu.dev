import { useState } from "react";
import { Plus, Minus, Download } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

interface FaqItem {
  questionId: string;
  questionEn: string;
  answerId: string;
  answerEn: string;
  hasDownload?: boolean;
}

const faqData: FaqItem[] = [
  {
    questionId: "Di industri dan bidang apa saja Anda berpengalaman mengembangkan solusi digital?",
    questionEn: "What industries have you worked in as a developer?",
    answerId:
      "Saya telah berpengalaman mengembangkan solusi web di berbagai sektor, termasuk e-commerce mini ritel, sistem manajemen acara terpadu, sistem absensi pintar berbasis geotagging untuk institusi pendidikan, hingga landing page interaktif untuk UMKM.",
    answerEn:
      "I have experience developing web solutions across various sectors, including retail mini e-commerce, integrated event registration systems, smart geotagging attendance platforms for schools, and high-converting landing pages for businesses.",
  },
  {
    questionId: "Apakah saya bisa mengunduh berkas Curriculum Vitae (CV) Anda?",
    questionEn: "Can I download your resume/CV for information?",
    answerId:
      "Tentu saja! Anda dapat mengunduh CV saya langsung dari situs web ini. CV mencakup riwayat pendidikan, pengalaman kerja, proyek utama, dan kompetensi rekayasa perangkat lunak.",
    answerEn:
      "Certainly! You can download my resume/CV directly from my website. It provides a comprehensive overview of my education, work experience, projects, and technical skills.",
    hasDownload: true,
  },
  {
    questionId: "Apakah Anda menerima pekerjaan proyek lepas (freelance) atau kontrak?",
    questionEn: "Are you available for freelance design & development work?",
    answerId:
      "Ya, saya terbuka untuk proyek freelance, perancangan web baru, pembuatan sistem manajemen backend, maupun kolaborasi jangka panjang. Silakan diskusikan kebutuhan proyek Anda langsung melalui WhatsApp atau formulir kontak.",
    answerEn:
      "Yes, I am available for freelance projects, new web applications, custom backend management systems, or long-term contract collaborations. Feel free to discuss your project via WhatsApp or the contact form.",
  },
  {
    questionId: "Teknologi dan tools apa saja yang biasa Anda gunakan dalam pengembangan?",
    questionEn: "What tools and technologies do you use for your work?",
    answerId:
      "Untuk rekayasa perangkat lunak saya menggunakan React, TypeScript, Tailwind CSS, Laravel, Express.js, Prisma, dan MySQL. Untuk perancangan antarmuka visual dan wireframing, saya menggunakan Figma.",
    answerEn:
      "For software engineering I use React, TypeScript, Tailwind CSS, Laravel, Express.js, Prisma, and MySQL. For visual interface design and wireframing, I use Figma.",
  },
  {
    questionId: "Bagaimana cara melihat detail dan hasil studi kasus proyek Anda?",
    questionEn: "How do I navigate through your portfolio projects?",
    answerId:
      "Anda dapat meninjau ringkasan studi kasus langsung di beranda pada bagian Studi Kasus & Proyek Nyata, atau menekan tombol Lihat Semua Proyek untuk membaca detail arsitektur, live demo, dan kode sumber GitHub.",
    answerEn:
      "You can explore case study summaries directly on the home page under Recent Projects, or click View All Projects to read architecture details, test live demos, and review GitHub source code.",
  },
];

const marqueeWordsId = [
  "Desain Web",
  "Aplikasi Web",
  "Dashboard Admin",
  "Full-Stack Web",
  "Laravel",
  "React",
  "RESTful API",
  "MySQL",
  "Tailwind CSS",
  "TypeScript",
];

const marqueeWordsEn = [
  "App Design",
  "Website Design",
  "Admin Dashboard",
  "Full-Stack Web",
  "Laravel",
  "React",
  "RESTful API",
  "MySQL",
  "Tailwind CSS",
  "TypeScript",
];

export function Faq() {
  const { language, t } = useLanguage();
  // Default to index 1 (Can I download your resume/CV...) to match Behance reference
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  function toggleIndex(idx: number) {
    setOpenIndex(openIndex === idx ? null : idx);
  }

  const marqueeWords = language === "id" ? marqueeWordsId : marqueeWordsEn;

  return (
    <section id="faq" className="relative bg-[#142d1f] text-white">
      {/* FAQ Container */}
      <div className="px-5 sm:px-8 lg:px-12 py-20 sm:py-28 max-w-5xl mx-auto space-y-12">
        {/* Centered Header matching Behance Image 4 */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 font-mono">
            <span className="w-5 h-[2px] bg-amber-400 inline-block"></span>
            <span>{t("Pertanyaan Umum", "FAQs")}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-[-0.03em] leading-tight">
            {t("Punya Pertanyaan?", "Questions?")}{" "}
            <span className="text-amber-400">
              {t("Temukan Jawabannya.", "Look here.")}
            </span>
          </h2>
        </div>

        {/* Accordion Cards Stack */}
        <div className="space-y-4 max-w-4xl mx-auto">
          {faqData.map((item, idx) => {
            const isOpen = openIndex === idx;
            const questionText = language === "id" ? item.questionId : item.questionEn;
            const answerText = language === "id" ? item.answerId : item.answerEn;

            return (
              <div
                key={idx}
                onClick={() => toggleIndex(idx)}
                className={`rounded-2xl transition-all duration-300 cursor-pointer overflow-hidden ${
                  isOpen
                    ? "bg-amber-500 text-slate-950 p-6 sm:p-7 shadow-lg"
                    : "bg-[#1c3a29] hover:bg-[#234733] border border-white/10 p-5 sm:p-6 text-white"
                }`}
              >
                {/* Header Row: Question & Toggle Icon */}
                <div className="flex items-center justify-between gap-4 select-none">
                  <h3
                    className={`font-black text-base sm:text-lg leading-snug ${
                      isOpen ? "text-slate-950" : "text-white"
                    }`}
                  >
                    {questionText}
                  </h3>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform ${
                      isOpen
                        ? "bg-slate-950 text-amber-400"
                        : "bg-white/10 text-white"
                    }`}
                  >
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </div>

                {/* Expanded Answer Content */}
                {isOpen && (
                  <div className="pt-4 border-t border-slate-950/15 mt-4 space-y-4">
                    <p className="text-xs sm:text-sm text-slate-950 font-medium leading-relaxed">
                      {answerText}
                    </p>

                    {item.hasDownload && (
                      <div className="pt-2">
                        <a
                          href="/cv.pdf"
                          download="CV_Lucky_Ubaidillah.pdf"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-950 hover:bg-slate-900 text-amber-400 font-bold text-xs uppercase tracking-wider transition-all shadow-md group"
                        >
                          <Download size={14} />
                          <span>{t("Unduh CV Sekarang", "Download CV Now")}</span>
                          <span className="ml-1 group-hover:translate-x-0.5 transition-transform">
                            →
                          </span>
                        </a>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Full-Width Amber Marquee Ribbon matching Behance Divider */}
      <div className="bg-amber-400 py-3.5 text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider border-y border-amber-500 overflow-hidden select-none whitespace-nowrap">
        <div className="flex items-center gap-8 animate-marquee">
          {[...marqueeWords, ...marqueeWords, ...marqueeWords, ...marqueeWords].map(
            (word, idx) => (
              <span key={idx} className="inline-flex items-center gap-8">
                <span>{word}</span>
                <span className="text-amber-800 text-sm">✱</span>
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
}
