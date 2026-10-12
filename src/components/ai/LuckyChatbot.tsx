import { useState, useRef, useEffect } from "react";
import {
  X,
  Send,
  Sparkles,
  RotateCcw,
  Bot,
  ChevronDown,
} from "lucide-react";
import { cn } from "../../utils/cn";

interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
  time: string;
}

const popularQuestions = [
  "Siapa itu Lucky?",
  "Proyek apa saja yang sudah dibuat?",
  "Teknologi apa yang dikuasai?",
  "Bagaimana alur kerja sama & estimasi biaya?",
  "Bagaimana cara menghubungi Lucky?",
];

const knowledgeBase: Record<string, string> = {
  "siapa":
    "Lucky adalah Full-Stack Developer asal Indonesia yang berfokus pada pembangunan aplikasi web modern berkinerja tinggi, berestetika bersih, dan user-friendly. Memiliki spesialisasi dalam arsitektur frontend (React/Next.js) dan backend tangguh (Laravel, Node.js).",
  "proyek":
    "Lucky telah mengerjakan berbagai proyek web berskala nyata, di antaranya:\n• Event Registration: Platform absensi & check-in berbasis QR code.\n• POS Skillage Mart: Panel kasir & manajemen inventaris berbasis Laravel.\n• Sistem Absensi Geotagging: Verifikasi kehadiran GPS terintegrasi Google Maps.\n• Skillage Edupark: Platform edukasi & tiket wisata.",
  "teknologi":
    "Stack teknologi andalan Lucky meliputi:\n• Frontend: React, Next.js, TypeScript, Tailwind CSS, Framer Motion\n• Backend: Laravel, Node.js, Express, RESTful APIs\n• Database & Tools: MySQL, PostgreSQL, Prisma, Git, Docker, Vite",
  "kerja sama":
    "Alur kerja sama dengan Lucky biasanya meliputi:\n1. Diskusi kebutuhan fitur & estimasi lingkup kerja\n2. Desain UI/UX & arsitektur sistem\n3. Development modular & review berkala\n4. Testing, deployment, serta garansi pemeliharaan.\nEstimasi biaya disesuaikan dengan kompleksitas proyek.",
  "biaya":
    "Biaya pembuatan website sangat fleksibel tergantung skala aplikasi, mulai dari landing page interaktif hingga aplikasi enterprise terintegrasi database & payment gateway. Anda bisa langsung berdiskusi via email atau WhatsApp!",
  "hubungi":
    "Anda dapat menghubungi Lucky secara langsung melalui:\n• Email: luckyubaidillah28@gmail.com\n• WhatsApp: +62 895 6292 44156\n• Form kontak pada halaman ini\n• LinkedIn: linkedin.com/in/lucky-ubaidillah",
};

export function LuckyChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showPopular, setShowPopular] = useState(true);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      sender: "bot",
      text: "Halo! Ada yang bisa saya bantu terkait profil Lucky, portofolio proyek, tech stack, atau kerja sama website?",
      time: "Sekarang",
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const getBotResponse = (query: string): string => {
    const q = query.toLowerCase();
    if (q.includes("siapa") || q.includes("profil") || q.includes("about") || q.includes("tentang")) {
      return knowledgeBase["siapa"];
    }
    if (q.includes("proyek") || q.includes("project") || q.includes("portfolio") || q.includes("karya")) {
      return knowledgeBase["proyek"];
    }
    if (q.includes("teknologi") || q.includes("tech") || q.includes("stack") || q.includes("skill") || q.includes("bahasa")) {
      return knowledgeBase["teknologi"];
    }
    if (q.includes("kerja sama") || q.includes("alur") || q.includes("jasa") || q.includes("bikin")) {
      return knowledgeBase["kerja sama"];
    }
    if (q.includes("biaya") || q.includes("harga") || q.includes("tarif") || q.includes("rate")) {
      return knowledgeBase["biaya"];
    }
    if (q.includes("kontak") || q.includes("hubungi") || q.includes("email") || q.includes("wa") || q.includes("whatsapp")) {
      return knowledgeBase["hubungi"];
    }
    return `Terima kasih atas pertanyaannya! Untuk pertanyaan spesifik terkait "${query}", Anda bisa langsung mendiskusikannya dengan Lucky via form kontak atau email luckyubaidillah28@gmail.com.`;
  };

  const handleSend = (textToSend?: string) => {
    const query = textToSend || input.trim();
    if (!query) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: query,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const reply = getBotResponse(query);
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: "bot",
        text: reply,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 600);
  };

  const resetChat = () => {
    setMessages([
      {
        id: "welcome-" + Date.now(),
        sender: "bot",
        text: "Sesi obrolan di-reset. Ada yang ingin Anda tanyakan seputar Lucky dan proyeknya?",
        time: "Sekarang",
      },
    ]);
  };

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50">
      {/* Trigger Floating Button */}
      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-slate-950 text-[#FFD33B] shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-[#FFD33B]/50 cursor-pointer"
          aria-label="Buka Chatbot AI"
        >
          <div className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 ring-2 ring-white">
            <span className="h-1.5 w-1.5 rounded-full bg-white animate-ping" />
          </div>
          <Sparkles className="h-6 w-6 text-[#FFD33B] group-hover:rotate-12 transition-transform" />
        </button>
      )}

      {/* Chatbot Window (Sesuai Referensi Catpeer AI CationGate) */}
      {isOpen && (
        <div className="relative w-[92vw] sm:w-95 h-135 max-h-[85vh] rounded-[28px] overflow-hidden shadow-2xl flex flex-col border border-border bg-[#FFD33B] animate-in fade-in slide-in-from-bottom-6 duration-300">
          {/* Header Bar */}
          <div className="bg-slate-950 text-white px-5 py-3.5 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-[#FFD33B] text-slate-950 font-black shadow-inner">
                <Bot size={22} />
                <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-slate-950" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-sm text-white">Lucky AI</span>
                  <span className="rounded bg-[#FFD33B]/20 px-1.5 py-0.2 text-[9px] font-black uppercase text-[#FFD33B]">
                    AI
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 leading-none mt-0.5">
                  Asisten Cerdas Portofolio
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1.5 text-slate-400">
              <button
                type="button"
                onClick={resetChat}
                title="Reset Obrolan"
                className="p-1.5 rounded-lg hover:bg-white/10 hover:text-white transition-colors cursor-pointer"
              >
                <RotateCcw size={16} />
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                title="Tutup"
                className="p-1.5 rounded-lg hover:bg-white/10 hover:text-white transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Chat Messages Body (Amber Theme ala Catpeer AI) */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#FFD33B]/95 no-scrollbar">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={cn(
                  "flex flex-col max-w-[85%]",
                  msg.sender === "user" ? "ml-auto items-end" : "mr-auto items-start"
                )}
              >
                <div
                  className={cn(
                    "p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed whitespace-pre-line shadow-sm",
                    msg.sender === "user"
                      ? "bg-slate-950 text-white rounded-br-none"
                      : "bg-white text-slate-900 rounded-bl-none font-medium"
                  )}
                >
                  {msg.text}
                </div>
                <span className="text-[10px] text-slate-800 font-semibold px-1 mt-1 opacity-70">
                  {msg.time}
                </span>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-1.5 bg-white px-3.5 py-2 rounded-2xl w-fit shadow-sm">
                <span className="h-2 w-2 rounded-full bg-slate-400 animate-bounce" />
                <span className="h-2 w-2 rounded-full bg-slate-400 animate-bounce [animation-delay:0.2s]" />
                <span className="h-2 w-2 rounded-full bg-slate-400 animate-bounce [animation-delay:0.4s]" />
              </div>
            )}

            <div ref={messagesEndRef} />

            {/* Pertanyaan Populer Pills */}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => setShowPopular(!showPopular)}
                className="flex items-center justify-between w-full text-[11px] font-black uppercase tracking-wider text-slate-900 mb-2 px-1 cursor-pointer"
              >
                <span>Pertanyaan Populer</span>
                <ChevronDown
                  size={14}
                  className={cn("transition-transform duration-200", !showPopular && "-rotate-90")}
                />
              </button>

              {showPopular && (
                <div className="flex flex-wrap gap-1.5">
                  {popularQuestions.map((q) => (
                    <button
                      key={q}
                      type="button"
                      onClick={() => handleSend(q)}
                      className="text-left text-xs font-bold bg-slate-950 text-white hover:bg-slate-900 active:scale-95 px-3 py-1.5 rounded-full transition-all shadow-sm cursor-pointer"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Input Field Bottom Bar */}
          <div className="p-3 bg-[#FFD33B] border-t border-amber-400/60 shrink-0">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-2"
            >
              <div className="relative flex-1">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ketik pertanyaan seputar Lucky..."
                  className="w-full h-11 pl-4 pr-3 rounded-xl bg-slate-950 chatbot-input text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 shadow-inner"
                />
              </div>
              <button
                type="submit"
                disabled={!input.trim()}
                className="h-11 w-11 flex items-center justify-center rounded-xl bg-slate-950 hover:bg-black disabled:opacity-50 text-[#FFD33B] font-bold transition-all active:scale-95 shadow-md cursor-pointer shrink-0"
              >
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
