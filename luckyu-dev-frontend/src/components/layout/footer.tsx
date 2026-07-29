import { LogoMark } from "@/components/shared/logo-mark";
import { mainNav } from "@/config/nav";

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10 lg:px-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 lg:flex-row">
        <div className="flex items-center gap-2">
          <LogoMark className="h-6 w-6" />
          <span className="font-display text-sm font-semibold">Luckyu.dev</span>
        </div>
        <div className="flex flex-wrap justify-center gap-6 text-[13px] text-text-secondary">
          {mainNav
            .filter((item) => item.href !== "#skills")
            .map((item) => (
              <a key={item.href} href={item.href} className="hover:text-foreground">
                {item.label}
              </a>
            ))}
        </div>
        <div className="text-[12px] text-text-muted">
          © {new Date().getFullYear()} Luckyu.dev. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
