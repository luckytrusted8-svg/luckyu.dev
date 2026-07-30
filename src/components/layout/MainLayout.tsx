import type { ReactNode } from "react";
import { Sidebar } from "./Sidebar";
import { MobileNav } from "./MobileNav";

export function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen bg-bg">
      <Sidebar />
      <MobileNav />
      <main className="lg:pl-[268px]">{children}</main>
    </div>
  );
}
