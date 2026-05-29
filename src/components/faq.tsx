import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { Reveal } from "./reveal";
import { faqs } from "@/data/site";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mx-auto mt-12 max-w-3xl space-y-3">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <Reveal key={f.q}>
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                aria-expanded={isOpen}
              >
                <span className="text-base font-semibold">{f.q}</span>
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/12 text-accent transition-transform duration-300 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                >
                  <Plus className="h-4 w-4" />
                </span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <p className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
