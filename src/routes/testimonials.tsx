import { createFileRoute } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Reveal, RevealStagger } from "@/components/reveal";
import { TestimonialCard } from "@/components/cards";
import { Counter } from "@/components/counter";
import { CtaSection } from "@/components/cta-section";
import { testimonials, photo } from "@/data/site";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials — ShaktiFit Arena" },
      { name: "description", content: "Read real reviews from ShaktiFit Arena members in Noida and discover how they transformed their fitness." },
      { property: "og:title", content: "Testimonials — ShaktiFit Arena" },
      { property: "og:description", content: "Real reviews from the ShaktiFit community." },
      { property: "og:image", content: photo(6, 1600) },
    ],
    links: [{ rel: "canonical", href: "/testimonials" }],
  }),
  component: Testimonials,
});

function Testimonials() {
  return (
    <>
      <PageHeader
        eyebrow="Testimonials"
        title="Stories that inspire"
        subtitle="Thousands of members trust ShaktiFit Arena with their fitness journey."
        image={photo(6, 1600)}
      />

      <section className="container-px py-16 lg:py-20">
        <Reveal className="mx-auto flex max-w-md flex-col items-center gap-3 rounded-3xl bg-card p-8 text-center shadow-soft ring-1 ring-border">
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-6 w-6 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <p className="font-display text-4xl font-bold">4.9 / 5</p>
          <p className="text-sm text-muted-foreground">
            Based on <Counter value={1200} suffix="+" /> verified Google reviews
          </p>
        </Reveal>
      </section>

      <section className="container-px pb-20 lg:pb-28">
        <RevealStagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} t={t} />
          ))}
        </RevealStagger>
      </section>

      <CtaSection />
    </>
  );
}
