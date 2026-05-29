import { createFileRoute } from "@tanstack/react-router";
import { Check, Minus } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { MembershipPlans } from "@/components/membership-plans";
import { CtaSection } from "@/components/cta-section";
import { comparison, photo } from "@/data/site";

export const Route = createFileRoute("/membership")({
  head: () => ({
    meta: [
      { title: "Memberships — ShaktiFit Arena" },
      { name: "description", content: "Choose from Basic, Pro and Elite memberships at ShaktiFit Arena, Noida. Flexible monthly, quarterly and annual plans with no hidden fees." },
      { property: "og:title", content: "Memberships — ShaktiFit Arena" },
      { property: "og:description", content: "Flexible memberships with no hidden fees." },
      { property: "og:image", content: photo(1, 1600) },
    ],
    links: [{ rel: "canonical", href: "/membership" }],
  }),
  component: Membership,
});

function Cell({ value }: { value: boolean | string }) {
  if (value === true) return <Check className="mx-auto h-5 w-5 text-accent" />;
  if (value === false) return <Minus className="mx-auto h-4 w-4 text-muted-foreground/40" />;
  return <span className="text-sm font-medium">{value}</span>;
}

function Membership() {
  return (
    <>
      <PageHeader
        eyebrow="Memberships"
        title="Find your perfect plan"
        subtitle="Premium training, expert coaching and recovery — at a price that fits your goals."
        image={photo(1, 1600)}
      />

      <section className="container-px py-16 lg:py-24">
        <MembershipPlans />
      </section>

      <section className="bg-secondary/40 py-16 lg:py-24">
        <div className="container-px">
          <SectionHeading eyebrow="Compare" title="Plan comparison" subtitle="See exactly what's included in each membership." />
          <Reveal className="mt-12 overflow-x-auto rounded-3xl bg-card shadow-soft ring-1 ring-border">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="px-6 py-5 font-semibold text-muted-foreground">Features</th>
                  <th className="px-6 py-5 text-center font-bold">Basic</th>
                  <th className="px-6 py-5 text-center font-bold">Pro</th>
                  <th className="bg-accent/8 px-6 py-5 text-center font-bold text-accent">Elite</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr key={row.feature} className="border-b border-border last:border-0">
                    <td className="px-6 py-4 text-foreground/80">{row.feature}</td>
                    <td className="px-6 py-4 text-center"><Cell value={row.basic} /></td>
                    <td className="px-6 py-4 text-center"><Cell value={row.pro} /></td>
                    <td className="bg-accent/8 px-6 py-4 text-center"><Cell value={row.elite} /></td>
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
