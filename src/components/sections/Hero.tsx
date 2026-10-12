import { ArrowRight, ArrowUpRight } from "lucide-react";

export function Hero() {
  const tickerItems = [
    "Aplikasi Web Full-Stack",
    "React & Next.js",
    "Laravel Backend",
    "REST API & MySQL",
    "Sistem Kasir (POS)",
    "Sistem Absensi Geotagging",
    "Tailwind CSS",
    "Desain Database Terstruktur",
    "Performa Cepat & Rapi",
  ];

  return (
    <>
      <section
        id="home"
        className="relative min-h-[90vh] flex items-center px-5 sm:px-8 lg:px-12 pt-32 pb-16 sm:pt-40 sm:pb-24 bg-white overflow-hidden"
      >
        {/* Subtle background texture */}
        <div className="absolute inset-0 light-dots opacity-40 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column (Cols 1-7): Display Headline & Introduction */}
            <div className="lg:col-span-7 space-y-7">
              {/* Retro Tag Badge */}
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-md border border-amber-400 bg-amber-50 text-amber-900 font-mono text-xs font-semibold tracking-wide shadow-2xs">
                <span className="text-amber-500">✦</span>
                <span>Hello There!</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-6xl lg:text-[4.2rem] font-black text-slate-900 tracking-[-0.035em] leading-[1.08]">
                I'm <span className="text-amber-500">Lucky Ubaidillah</span>,<br />
                Web Developer<br />
                Based in Indonesia.
              </h1>

              {/* Natural, Grounded Human Copy */}
              <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
                Saya membangun aplikasi web yang cepat, rapi, dan nyaman dipakai.
                Terbiasa merancang frontend interaktif dengan <strong className="text-slate-900 font-semibold">React</strong> dan{" "}
                <strong className="text-slate-900 font-semibold">Next.js</strong>, serta backend terstruktur memakai{" "}
                <strong className="text-slate-900 font-semibold">Laravel</strong> atau <strong className="text-slate-900 font-semibold">Express</strong>.
              </p>

              {/* CTA Action Row */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                {/* Primary Pill Button with Circle Arrow */}
                <a
                  href="#projects"
                  className="inline-flex items-center pl-6 pr-2 py-2 rounded-full bg-[#142d1f] hover:bg-[#0d1e14] text-white font-semibold text-xs uppercase tracking-wider transition-all shadow-md group cursor-pointer"
                >
                  <span>Lihat Portofolio</span>
                  <span className="ml-3.5 w-8 h-8 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                    <ArrowRight size={15} />
                  </span>
                </a>

                {/* Secondary Pill Button */}
                <a
                  href="#contact"
                  className="inline-flex items-center px-6 py-3.5 rounded-full border border-slate-300 hover:border-slate-900 hover:bg-slate-50 text-slate-800 font-semibold text-xs uppercase tracking-wider transition-all cursor-pointer"
                >
                  <span>Hubungi Saya</span>
                </a>
              </div>

              {/* Quick Status Pill */}
              <div className="pt-4 flex items-center gap-3 text-xs text-slate-500 font-medium">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span>Sedang magang di PT Spero &bull; Terbuka untuk freelance dan kolaborasi web</span>
              </div>
            </div>

            {/* Right Column (Cols 8-12): Visual Portrait & Graphic Elements */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
              <div className="relative w-full max-w-md">
                {/* Organic Warm Yellow Backdrop Arch */}
                <div className="absolute inset-x-8 top-6 bottom-0 bg-gradient-to-br from-amber-400 to-amber-500 rounded-t-[140px] rounded-b-[40px] shadow-xl" />

                {/* Photo Container */}
                <div className="relative z-10 pt-4 px-6 flex justify-center">
                  <div className="w-72 sm:w-80 h-[380px] sm:h-[420px] rounded-t-[130px] rounded-b-[30px] overflow-hidden border-4 border-white shadow-2xl bg-amber-200">
                    <img
                      src="/image.png"
                      alt="Lucky Ubaidillah"
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Circular Rotating Stamp Badge: Available for Hire */}
                <div className="absolute top-2 right-2 sm:right-0 z-20 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#142d1f] text-white p-2 shadow-xl flex items-center justify-center">
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
                <div className="absolute top-36 -right-2 sm:-right-4 z-20 px-3.5 py-1.5 rounded-full bg-amber-500 text-slate-950 font-bold text-xs shadow-lg border border-amber-300">
                  Full-Stack Dev
                </div>

                {/* Floating Tag Pill: Bottom Left */}
                <div className="absolute bottom-6 -left-2 sm:-left-4 z-20 px-4 py-1.5 rounded-full bg-[#142d1f] text-white font-semibold text-xs shadow-lg border border-[#1c3d2a] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Web Engineer</span>
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
            <div key={idx} className="flex items-center gap-8">
              <span>{item}</span>
              <span className="text-amber-700 text-base">✦</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
