import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

export function Hero() {
  const { language, t } = useLanguage();

  const tickerItems =
    language === "id"
      ? [
          "Aplikasi Web Full-Stack",
          "React & Next.js",
          "Backend Laravel",
          "REST API & MySQL",
          "Sistem Kasir (POS)",
          "Sistem Absensi Geotagging",
          "Tailwind CSS",
          "Desain Database Terstruktur",
          "Performa Cepat & Rapi",
        ]
      : [
          "Full-Stack Web Apps",
          "React & Next.js",
          "Laravel Backend",
          "REST API & MySQL",
          "Point of Sale (POS)",
          "Geotagging Attendance",
          "Tailwind CSS",
          "Structured Database",
          "High Performance & Clean Code",
        ];

  return (
    <>
      <section
        id="home"
        className="relative min-h-[92vh] lg:min-h-screen flex items-center px-5 sm:px-8 lg:px-12 pt-24 sm:pt-28 lg:pt-24 pb-8 sm:pb-10 lg:pb-8 bg-white overflow-hidden"
      >
        {/* Subtle background texture */}
        <div className="absolute inset-0 light-dots opacity-40 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
            {/* Left Column (Cols 1-7): Display Headline & Introduction */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5">
              {/* Retro Viewfinder Tag Badge */}
              <div className="relative inline-flex items-center px-3.5 py-1 sm:px-4 sm:py-1.5 border border-amber-500/80 bg-amber-50/70 text-amber-800 font-mono text-xs font-semibold tracking-wide">
                <span className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-amber-500" />
                <span className="absolute -top-1 -right-1 w-2 h-2 border-t-2 border-r-2 border-amber-500" />
                <span className="absolute -bottom-1 -left-1 w-2 h-2 border-b-2 border-l-2 border-amber-500" />
                <span className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-amber-500" />
                <span>{t("Halo Semuanya!", "Hello There!")}</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-[3.6rem] xl:text-[4rem] font-black text-slate-900 tracking-[-0.035em] leading-[1.08]">
                {language === "id" ? (
                  <>
                    Saya <span className="text-amber-500 underline decoration-amber-400 decoration-3 underline-offset-8">Lucky Ubaidillah,</span><br />
                    Full-Stack Web Developer<br />
                    Berbasis di Indonesia.
                  </>
                ) : (
                  <>
                    I'm <span className="text-amber-500 underline decoration-amber-400 decoration-3 underline-offset-8">Lucky Ubaidillah,</span><br />
                    Full-Stack Web Developer<br />
                    Based in Indonesia.
                  </>
                )}
              </h1>

              {/* Natural Human Copy */}
              <p className="text-sm sm:text-base lg:text-[1.05rem] text-slate-600 max-w-xl leading-relaxed">
                {language === "id" ? (
                  <>
                    Saya membangun aplikasi web yang cepat, rapi, dan nyaman dipakai. Terbiasa merancang frontend interaktif dengan <strong className="text-slate-900 font-semibold">React</strong> dan <strong className="text-slate-900 font-semibold">Next.js</strong>, serta backend terstruktur memakai <strong className="text-slate-900 font-semibold">Laravel</strong> atau <strong className="text-slate-900 font-semibold">Express</strong>.
                  </>
                ) : (
                  <>
                    I build fast, clean, and intuitive web applications. Experienced in designing interactive frontends with <strong className="text-slate-900 font-semibold">React</strong> and <strong className="text-slate-900 font-semibold">Next.js</strong>, as well as robust backends using <strong className="text-slate-900 font-semibold">Laravel</strong> or <strong className="text-slate-900 font-semibold">Express</strong>.
                  </>
                )}
              </p>

              {/* CTA Action Row */}
              <div className="flex flex-wrap items-center gap-3.5 pt-1">
                {/* Primary Pill Button with Circle Arrow */}
                <a
                  href="#projects"
                  className="inline-flex items-center pl-5 sm:pl-6 pr-2 py-2 rounded-full bg-[#142d1f] hover:bg-[#0d1e14] text-white font-semibold text-xs uppercase tracking-wider transition-all shadow-md group cursor-pointer"
                >
                  <span>{t("Lihat Portofolio", "View Portfolio")}</span>
                  <span className="ml-3.5 w-8 h-8 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                    <ArrowRight size={15} />
                  </span>
                </a>

                {/* Secondary Pill Button */}
                <a
                  href="#contact"
                  className="inline-flex items-center px-6 sm:px-7 py-2.5 sm:py-3 rounded-full border-2 border-slate-900 hover:bg-slate-900 hover:text-white text-slate-900 font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
                >
                  <span>{t("Hubungi Saya", "Contact Me")}</span>
                </a>
              </div>

              {/* Quick Status Pill */}
              <div className="pt-2 flex items-center gap-2.5 text-xs text-slate-500 font-medium">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span>
                  {t(
                    "Sedang magang di PT Spero • Terbuka untuk freelance dan kolaborasi web",
                    "Intern at PT Spero • Available for freelance & web collaboration"
                  )}
                </span>
              </div>
            </div>

            {/* Right Column (Cols 8-12): Visual Portrait & Graphic Elements */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
              <div className="relative w-full max-w-sm lg:max-w-md">
                {/* Organic Warm Yellow Backdrop Arch */}
                <div className="absolute inset-x-4 sm:inset-x-6 top-6 sm:top-8 bottom-0 bg-[#f59e0b] rounded-t-full rounded-b-[40px] shadow-2xl" />

                {/* Photo Container */}
                <div className="relative z-10 pt-3 sm:pt-4 px-4 sm:px-6 flex justify-center">
                  <div className="w-64 sm:w-72 lg:w-[310px] xl:w-[330px] h-[340px] sm:h-[380px] lg:h-[400px] rounded-t-full rounded-b-[32px] overflow-hidden border-4 border-white shadow-2xl bg-amber-200">
                    <img
                      src="/image.png"
                      alt="Lucky Ubaidillah"
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Circular Rotating Stamp Badge: Available for Hire */}
                <div className="absolute top-1 sm:top-2 right-1 sm:right-0 z-20 w-20 h-20 sm:w-24 sm:h-24 lg:w-26 lg:h-26 rounded-full bg-[#142d1f] text-white p-2 shadow-xl flex items-center justify-center">
                  <svg
                    viewBox="0 0 100 100"
                    className="w-full h-full animate-spin-badge"
                  >
                    <path
                      id="stampCirclePath"
                      d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                      fill="none"
                    />
                    <text className="text-[10.5px] font-bold tracking-[0.18em] fill-amber-400 uppercase">
                      <textPath href="#stampCirclePath">
                        • AVAILABLE FOR HIRE • LET'S TALK
                      </textPath>
                    </text>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <ArrowUpRight size={18} className="text-amber-400" />
                  </div>
                </div>

                {/* Floating Tag Pill: Top Right */}
                <div className="absolute top-28 sm:top-32 -right-2 sm:-right-4 z-20 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-amber-400 text-slate-950 font-bold text-xs shadow-lg border border-amber-300 flex items-center gap-1.5">
                  <span>{t("Pengembang Web", "Web Engineer")}</span>
                </div>

                {/* Floating Tag Pill: Bottom Left */}
                <div className="absolute bottom-4 sm:bottom-6 -left-2 sm:-left-4 z-20 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#142d1f] text-white font-semibold text-xs shadow-lg border border-[#1c3d2a] flex items-center gap-2">
                  <span className="text-amber-400 text-xs">▶</span>
                  <span>Full-Stack Developer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vibrant Yellow Marquee Ticker Ribbon */}
      <div className="w-full bg-amber-400 py-3.5 sm:py-4 overflow-hidden border-y border-amber-500/40 text-slate-950 font-display font-black text-xs sm:text-sm tracking-wider uppercase select-none shadow-xs">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-8">
          {[...tickerItems, ...tickerItems].map((item, idx) => (
            <div key={idx} className="flex items-center gap-8 shrink-0">
              <span>{item}</span>
              <span className="text-amber-900 font-normal">✱</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
