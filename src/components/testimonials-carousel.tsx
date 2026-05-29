import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, BadgeCheck, ChevronLeft, ChevronRight } from "lucide-react";
import { LazyImage } from "./lazy-image";
import { testimonials } from "@/data/site";

const PER = 3;

export function TestimonialsCarousel() {
  const pages = Math.ceil(testimonials.length / PER);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setPage((p) => (p + 1) % pages), 6000);
    return () => clearInterval(t);
  }, [pages]);

  const start = page * PER;
  const visible = testimonials.slice(start, start + PER);

  return (
    <div className="mt-12">
      <div className="relative min-h-[320px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {visible.map((t) => (
              <div key={t.name} className="flex h-full flex-col gap-4 rounded-3xl bg-card p-7 shadow-soft ring-1 ring-border">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full bg-accent/12 px-2.5 py-1 text-[11px] font-semibold text-accent">
                    <BadgeCheck className="h-3.5 w-3.5" /> Verified
                  </span>
                </div>
                <p className="flex-1 text-sm leading-relaxed text-foreground/85">"{t.text}"</p>
                <div className="flex items-center gap-3 border-t border-border pt-4">
                  <LazyImage src={t.img} alt={t.name} className="h-11 w-11 rounded-full object-cover" />
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          onClick={() => setPage((p) => (p - 1 + pages) % pages)}
          aria-label="Previous reviews"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground/80 transition-colors hover:bg-muted"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <div className="flex gap-2">
          {Array.from({ length: pages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              aria-label={`Go to page ${i + 1}`}
              className={`h-2 rounded-full transition-all ${i === page ? "w-6 bg-accent" : "w-2 bg-border"}`}
            />
          ))}
        </div>
        <button
          onClick={() => setPage((p) => (p + 1) % pages)}
          aria-label="Next reviews"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground/80 transition-colors hover:bg-muted"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
