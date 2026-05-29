import { createFileRoute } from "@tanstack/react-router";
import { Dumbbell, HeartPulse, Activity, Waves, Flower2, Lock } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Reveal, RevealStagger } from "@/components/reveal";
import { FacilityCard } from "@/components/cards";
import { CtaSection } from "@/components/cta-section";
import { facilities, photo } from "@/data/site";

export const Route = createFileRoute("/facilities")({
  head: () => ({
    meta: [
      { title: "Facilities — ShaktiFit Arena" },
      { name: "description", content: "Strength zone, cardio zone, functional training, recovery area, yoga studio and premium locker rooms at ShaktiFit Arena, Noida." },
      { property: "og:title", content: "Facilities — ShaktiFit Arena" },
      { property: "og:description", content: "Premium zones for every kind of training." },
      { property: "og:image", content: photo(0, 1600) },
    ],
    links: [{ rel: "canonical", href: "/facilities" }],
  }),
  component: Facilities,
});

const iconMap = { Dumbbell, HeartPulse, Activity, Waves, Flower2, Lock } as const;

function Facilities() {
  return (
    <>
      <PageHeader
        eyebrow="Facilities"
        title="Spaces designed to perform"
        subtitle="Six premium zones engineered for serious training, recovery and wellbeing."
        image={photo(0, 1600)}
      />

      <section className="container-px py-20 lg:py-28">
        <RevealStagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((f) => (
            <FacilityCard key={f.name} facility={f} />
          ))}
        </RevealStagger>
      </section>

      <section className="bg-muted/40 py-20 lg:py-28">
        <div className="container-px grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((f) => {
            const Icon = iconMap[f.icon as keyof typeof iconMap];
            return (
              <Reveal key={f.name} className="flex items-start gap-4 rounded-2xl bg-card p-6 shadow-soft ring-1 ring-border">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/12 text-accent">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-bold">{f.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <CtaSection />
    </>
  );
}
