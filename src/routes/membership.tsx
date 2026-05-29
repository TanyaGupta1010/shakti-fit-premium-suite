import { createFileRoute } from "@tanstack/react-router";
import { Check, Minus } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { RevealStagger, Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { PlanCard } from "@/components/cards";
import { CtaSection } from "@/components/cta-section";
import { plans, photo } from "@/data/site";

export const Route = createFileRoute("/membership")({
  head: () => ({
    meta: [
      { title: "Membership Plans — ShaktiFit Arena" },
      { name: "description", content: "Choose from Basic, Pro and Elite memberships at ShaktiFit Arena, Noida. Flexible monthly plans with no hidden fees." },
      { property: "og:title", content: "Membership Plans — ShaktiFit Arena" },
      { property: "og:description", content: "Flexible monthly memberships with no hidden fees." },
      { property: "og:image", content: photo(1, 1600) },
    ],
    links: [{ rel: "canonical", href: "/membership" }],
  }),
  component: Membership,
});

const allFeatures = plans[2].features.map((f) => f.label);

function Membership() {
  return (
    <>
      <PageHeader
        eyebrow="Membership"
        title="Find your perfect plan"
        subtitle="Premium training, expert coaching and recovery — at a price that fits your goals."
        image={photo(1, 1600)}
      />

      <section className="container-px py-20 lg:py-28">
        <RevealStagger className="grid items-start gap-6 lg:grid-cols-3">
          {plans.map((p) => (
            <PlanCard key={p.name} plan={p} />
          ))}
        </RevealStagger>
      </section>

      <section className="bg-muted/40 py-20 lg:py-28">
        <div className="container-px">
          <SectionHeading eyebrow="Compare" title="Plan comparison" subtitle="See exactly what's included in each membership." />
          <Reveal className="mt-12 overflow-x-auto rounded-3xl bg-card shadow-soft ring-1 ring-border">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="px-6 py-5 font-semibold text-muted-foreground">Features</th>
                  {plans.map((p) => (
                    <th key={p.name} className="px-6 py-5 text-center font-bold">{p.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {allFeatures.map((label) => (
                  <tr key={label} className="border-b border-border last:border-0">
                    <td className="px-6 py-4 text-foreground/80">{label}</td>
                    {plans.map((p) => {
                      const on = p.features.find((f) => f.label === label)?.on;
                      return (
                        <td key={p.name} className="px-6 py-4 text-center">
                          {on ? (
                            <Check className="mx-auto h-5 w-5 text-accent" />
                          ) : (
                            <Minus className="mx-auto h-4 w-4 text-muted-foreground/40" />
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
