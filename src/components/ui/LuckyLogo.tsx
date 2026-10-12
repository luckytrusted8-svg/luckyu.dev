interface LuckyLogoProps {
  className?: string;
  size?: number;
}

export function LuckyLogo({ className = "w-8 h-8", size }: LuckyLogoProps) {
  const style = size ? { width: size, height: size } : undefined;

  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      aria-label="luckyu logo"
    >
      <defs>
        {/* Top Petal Gradient: Amber Sun */}
        <linearGradient id="lu-top" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#FDE047" />
          <stop offset="100%" stopColor="#F59E0B" />
        </linearGradient>

        {/* Right Petal Gradient: Electric Coral */}
        <linearGradient id="lu-right" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="0%" stopColor="#FB923C" />
          <stop offset="100%" stopColor="#EA580C" />
        </linearGradient>

        {/* Bottom Petal Gradient: Emerald Mint */}
        <linearGradient id="lu-bottom" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#34D399" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>

        {/* Left Petal Gradient: Cyber Cyan */}
        <linearGradient id="lu-left" x1="100%" y1="50%" x2="0%" y2="50%">
          <stop offset="0%" stopColor="#38BDF8" />
          <stop offset="100%" stopColor="#0284C7" />
        </linearGradient>

        {/* Glow filter */}
        <filter id="lu-spark-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Background Badge Squircle (Deep Pine) */}
      <rect
        x="6"
        y="6"
        width="88"
        height="88"
        rx="26"
        fill="#142D1F"
        stroke="#234E35"
        strokeWidth="2.5"
      />

      {/* 4 Geometric Clover Petals (Forming the Lucky clover + code bracket aesthetic) */}
      {/* Top Petal */}
      <path
        d="M50 43 C42 43 36 37 36 29 C36 17 50 10 50 10 C50 10 64 17 64 29 C64 37 58 43 50 43 Z"
        fill="url(#lu-top)"
      />

      {/* Right Petal */}
      <path
        d="M57 50 C57 42 63 36 71 36 C83 36 90 50 90 50 C90 50 83 64 71 64 C63 64 57 58 57 50 Z"
        fill="url(#lu-right)"
      />

      {/* Bottom Petal */}
      <path
        d="M50 57 C58 57 64 63 64 71 C64 83 50 90 50 90 C50 90 36 83 36 71 C36 63 42 57 50 57 Z"
        fill="url(#lu-bottom)"
      />

      {/* Left Petal */}
      <path
        d="M43 50 C43 58 37 64 29 64 C17 64 10 50 10 50 C10 50 17 36 29 36 C37 36 43 42 43 50 Z"
        fill="url(#lu-left)"
      />

      {/* Center 4-Point Radiant Spark (Lucky Star) */}
      <path
        d="M50 41 Q50 50 59 50 Q50 50 50 59 Q50 50 41 50 Q50 50 50 41 Z"
        fill="#FFFFFF"
        filter="url(#lu-spark-glow)"
      />
    </svg>
  );
}
