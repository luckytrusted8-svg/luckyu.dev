import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { cn } from "../../utils/cn";

interface ProjectGalleryProps {
  title: string;
  images: string[];
  className?: string;
}

export function ProjectGallery({ title, images, className }: ProjectGalleryProps) {
  const [active, setActive] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const hasImages = images.length > 0;

  function next() {
    setActive((i) => (i + 1) % images.length);
  }
  function prev() {
    setActive((i) => (i - 1 + images.length) % images.length);
  }

  useEffect(() => {
    if (!lightboxOpen) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    }
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lightboxOpen, images.length]);

  if (!hasImages) {
    return (
      <div
        className={cn(
          "relative flex aspect-[16/9] w-full items-center justify-center overflow-hidden rounded-xl border border-border bg-bg-elevated",
          className
        )}
      >
        <p className="font-mono text-xs uppercase tracking-wider text-muted-dim">
          {title} — screenshots coming soon
        </p>
      </div>
    );
  }

  return (
    <div className={className}>
      {/* Main image */}
      <button
        type="button"
        onClick={() => setLightboxOpen(true)}
        className="group relative block w-full overflow-hidden rounded-xl border border-border bg-bg-elevated"
        aria-label={`View ${title} screenshot ${active + 1} full size`}
      >
        <img
          src={images[active]}
          alt={`${title} screenshot ${active + 1} of ${images.length}`}
          className="aspect-[16/9] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.015]"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/40">
          <span className="flex items-center gap-1.5 rounded-full bg-surface px-3 py-1.5 text-xs font-medium text-text opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
            <ZoomIn size={13} />
            View full size
          </span>
        </div>
        {images.length > 1 && (
          <span className="absolute bottom-3 right-3 rounded-full bg-bg/80 px-2.5 py-1 text-[11px] font-mono text-white">
            {active + 1} / {images.length}
          </span>
        )}
      </button>

      {/* Thumbnail strip */}
      {images.length > 1 && (
        <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Show screenshot ${i + 1}`}
              aria-current={i === active}
              className={cn(
                "relative h-16 w-24 shrink-0 overflow-hidden rounded-lg border transition-colors",
                i === active
                  ? "border-primary-soft"
                  : "border-border opacity-60 hover:opacity-100"
              )}
            >
              <img src={src} alt="" className="h-full w-full object-cover object-top" />
            </button>
          ))}
        </div>
      )}

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 sm:p-8"
            role="dialog"
            aria-modal="true"
            aria-label={`${title} screenshots`}
            onClick={() => setLightboxOpen(false)}
          >
            <button
              type="button"
              onClick={() => setLightboxOpen(false)}
              aria-label="Close"
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              <X size={18} />
            </button>

            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    prev();
                  }}
                  aria-label="Previous screenshot"
                  className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors sm:left-6"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    next();
                  }}
                  aria-label="Next screenshot"
                  className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors sm:right-6"
                >
                  <ChevronRight size={20} />
                </button>
              </>
            )}

            <motion.img
              key={images[active]}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              src={images[active]}
              alt={`${title} screenshot ${active + 1} of ${images.length}`}
              onClick={(e) => e.stopPropagation()}
              className="max-h-full max-w-full rounded-lg object-contain shadow-2xl"
            />

            {images.length > 1 && (
              <span className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-3 py-1 font-mono text-xs text-white">
                {active + 1} / {images.length}
              </span>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}