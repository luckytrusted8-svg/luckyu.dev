import type { ReactNode } from "react";
import { Navbar } from "./Navbar";

export function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen bg-white text-slate-900 overflow-x-hidden selection:bg-amber-400 selection:text-slate-950">
      <Navbar />
      <main className="w-full">{children}</main>
    </div>
  );
}