import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { LuckyChatbot } from "../ai/LuckyChatbot";

export function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen bg-[#080b12] text-slate-100 overflow-x-hidden selection:bg-amber-400 selection:text-slate-950">
      <Navbar />
      <main className="w-full">{children}</main>
      <LuckyChatbot />
    </div>
  );
}