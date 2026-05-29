import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { RevealStagger } from "@/components/reveal";
import { TrainerCard } from "@/components/cards";
import { CtaSection } from "@/components/cta-section";
import { trainers, photo } from "@/data/site";

export const Route = createFileRoute("/trainers")({
  head: () => ({
    meta: [
      { title: "Trainers — ShaktiFit Arena" },
      { name: "description", content: "Meet ShaktiFit Arena's internationally certified trainers — strength, functional, yoga and performance coaches dedicated to your results." },
      { property: "og:title", content: "Trainers — ShaktiFit Arena" },
      { property: "og:description", content: "Certified experts invested in your progress." },
      { property: "og:image", content: photo(13, 1600) },
    ],
    links: [{ rel: "canonical", href: "/trainers" }],
  }),
  component: Trainers,
});

function Trainers() {
  return (
    <>
      <PageHeader
        eyebrow="Our Coaches"
        title="Train with the best"
        subtitle="Every coach at ShaktiFit Arena is certified, experienced and personally invested in your transformation."
        image={photo(13, 1600)}
      />
      <section className="container-px py-20 lg:py-28">
        <RevealStagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {trainers.map((t) => (
            <TrainerCard key={t.name} trainer={t} />
          ))}
        </RevealStagger>
      </section>
      <CtaSection />
    </>
  );
}
