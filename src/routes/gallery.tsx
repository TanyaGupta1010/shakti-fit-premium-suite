import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { PageHeader } from "@/components/page-header";
import { LazyImage } from "@/components/lazy-image";
import { galleryImages, photo } from "@/data/site";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — ShaktiFit Arena" },
      { name: "description", content: "A look inside ShaktiFit Arena, Noida — strength training, classes, yoga, athletes and our premium facilities." },
      { property: "og:title", content: "Gallery — ShaktiFit Arena" },
      { property: "og:description", content: "A look inside India's premium fitness destination." },
      { property: "og:image", content: photo(9, 1600) },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: Gallery,
});

function Gallery() {
  const [active, setActive] = useState<string | null>(null);
  const [cat, setCat] = useState<(typeof galleryCategories)[number]>("All");

  const shown = cat === "All" ? galleryImages : galleryImages.filter((g) => g.category === cat);

  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="Inside the Arena"
        subtitle="Real members, real training, real results — captured at ShaktiFit Arena."
        image={photo(9, 1600)}
      />

      <section className="container-px py-16 lg:py-24">
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {galleryCategories.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                cat === c ? "bg-accent text-accent-foreground" : "border border-border text-muted-foreground hover:bg-muted"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="columns-2 gap-4 sm:columns-3 lg:columns-4 [&>*]:mb-4">
          {shown.map((g, i) => (
            <motion.button
              key={g.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: (i % 8) * 0.04 }}
              onClick={() => setActive(g.src)}
              className="group block w-full overflow-hidden rounded-2xl ring-1 ring-border"
            >
              <LazyImage
                src={g.src}
                alt={g.alt}
                className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${g.tall ? "aspect-[3/4]" : "aspect-square"}`}
              />
            </motion.button>
          ))}
        </div>
      </section>


      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-primary/90 p-4 backdrop-blur"
          >
            <button aria-label="Close" className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-background/15 text-primary-foreground">
              <X className="h-5 w-5" />
            </button>
            <motion.img
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              src={active.replace("w=900", "w=1400")}
              alt="ShaktiFit Arena gallery"
              className="max-h-[85vh] max-w-full rounded-2xl object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
