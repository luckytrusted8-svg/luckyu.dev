import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { LuckyChatbot } from "../ai/LuckyChatbot";

export function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen bg-[var(--color-paper)] text-[var(--color-ink)]">
      <Navbar />
      <main className="w-full pt-16 sm:pt-20">{children}</main>
      <LuckyChatbot />
    </div>
  );
}