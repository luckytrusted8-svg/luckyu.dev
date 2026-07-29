"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

export function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setShow(window.scrollY > 500);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className={cn(
        "fixed bottom-7 right-7 z-[60] flex h-11 w-11 items-center justify-center rounded-full bg-[image:var(--gradient-brand)] shadow-[0_8px_24px_-4px_rgba(57,130,241,0.5)] transition-all duration-300",
        show ? "opacity-100" : "pointer-events-none opacity-0"
      )}
    >
      <ArrowUp className="h-[18px] w-[18px] text-white" />
    </button>
  );
}
