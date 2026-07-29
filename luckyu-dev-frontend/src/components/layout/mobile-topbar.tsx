"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { LogoMark } from "@/components/shared/logo-mark";
import { mainNav } from "@/config/nav";

export function MobileTopbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-40 flex items-center justify-between border-b border-border bg-background/85 px-5 py-4 backdrop-blur-md lg:hidden">
        <div className="flex items-center gap-2">
          <LogoMark className="h-6 w-6" />
          <span className="font-display text-sm font-semibold">Luckyu.dev</span>
        </div>
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-border"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-[18px] w-[18px]" /> : <Menu className="h-[18px] w-[18px]" />}
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-30 bg-background/95 pt-20 backdrop-blur-md lg:hidden">
          <nav className="flex flex-col gap-1 px-6">
            {mainNav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-3 text-base font-medium text-text-secondary hover:bg-card hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
