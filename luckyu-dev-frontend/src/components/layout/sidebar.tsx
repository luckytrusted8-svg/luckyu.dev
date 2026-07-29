import { Download } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/shared/social-icons";
import { LogoMark } from "@/components/shared/logo-mark";
import { Button } from "@/components/ui/button";
import { mainNav } from "@/config/nav";
import { siteConfig } from "@/config/site";

export function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 z-50 hidden w-[280px] flex-col border-r border-border bg-background-secondary p-6 lg:flex">
      <div>
        <div className="mb-1 flex items-center gap-3">
          <LogoMark />
          <div>
            <div className="font-display text-[15px] font-semibold leading-tight">Luckyu.dev</div>
            <div className="text-[11px] text-text-muted">Lucky Ubaidillah</div>
          </div>
        </div>
        <div className="mb-8 text-[12px] text-text-secondary">Full Stack Web Developer</div>

        <nav className="flex flex-col gap-1">
          {mainNav.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              className={
                i === 0
                  ? "flex items-center gap-3 rounded-[10px] border border-primary/30 bg-gradient-to-r from-primary/15 to-brand-secondary/10 px-3.5 py-2.5 text-sm font-medium text-foreground transition-colors"
                  : "flex items-center gap-3 rounded-[10px] px-3.5 py-2.5 text-sm font-medium text-text-secondary transition-colors hover:bg-card hover:text-foreground"
              }
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="mt-8 rounded-2xl border border-primary/30 bg-card p-4">
        <div className="mb-2 flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
          </span>
          <span className="text-[12px] font-semibold">Available for Freelance</span>
        </div>
        <p className="mb-3 text-[12px] text-text-secondary">Siap membantu proyek Anda berikutnya.</p>
        <Button asChild size="sm" className="w-full justify-center">
          <a href="#contact">Hire Me</a>
        </Button>
      </div>

      <div className="mt-auto pt-6">
        <a
          href="/cv.pdf"
          className="mb-5 flex items-center gap-2 text-[13px] font-semibold text-text-secondary hover:text-foreground"
        >
          <Download className="h-[15px] w-[15px]" />
          Download CV
        </a>
        <div className="flex items-center gap-3">
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card text-text-secondary hover:text-foreground"
            aria-label="GitHub"
          >
            <GithubIcon className="h-4 w-4" />
          </a>
          <a
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card text-text-secondary hover:text-foreground"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="h-4 w-4" />
          </a>
          <a
            href={siteConfig.links.instagram}
            target="_blank"
            rel="noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card text-text-secondary hover:text-foreground"
            aria-label="Instagram"
          >
            <InstagramIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </aside>
  );
}
