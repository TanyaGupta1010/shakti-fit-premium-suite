import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { RevealStagger } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ProgramCard } from "@/components/cards";
import { CtaSection } from "@/components/cta-section";
import { programs, photo } from "@/data/site";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Programs — ShaktiFit Arena" },
      { name: "description", content: "Explore strength, HIIT, functional, yoga, cardio, group fitness and personal training programs at ShaktiFit Arena, Noida." },
      { property: "og:title", content: "Programs — ShaktiFit Arena" },
      { property: "og:description", content: "Specialised training tracks designed by certified coaches." },
      { property: "og:image", content: photo(3, 1600) },
    ],
    links: [{ rel: "canonical", href: "/programs" }],
  }),
  component: Programs,
});

const schedule = [
  { time: "06:00", mon: "Strength", wed: "HIIT", fri: "Functional" },
  { time: "08:00", mon: "Power Yoga", wed: "Cardio", fri: "Power Yoga" },
  { time: "18:00", mon: "Group Fitness", wed: "Strength", fri: "HIIT" },
  { time: "20:00", mon: "Functional", wed: "Group Fitness", fri: "Cardio" },
];

function Programs() {
  return (
    <>
      <PageHeader
        eyebrow="Programs"
        title="Training built around you"
        subtitle="From raw strength to mobility and mindfulness — find the track that fits your goals."
        image={photo(3, 1600)}
      />

      <section className="container-px py-20 lg:py-28">
        <RevealStagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((p) => (
            <ProgramCard key={p.name} program={p} />
          ))}
        </RevealStagger>
      </section>

      <section className="bg-muted/40 py-20 lg:py-28">
        <div className="container-px">
          <SectionHeading eyebrow="Weekly Schedule" title="Sample class timetable" subtitle="A snapshot of our weekly group classes. Full schedule available at reception." />
          <div className="mt-12 overflow-x-auto rounded-3xl bg-card shadow-soft ring-1 ring-border">
            <table className="w-full min-w-[560px] text-left text-sm">
              <thead>
                <tr className="border-b border-border text-muted-foreground">
                  <th className="px-6 py-4 font-semibold">Time</th>
                  <th className="px-6 py-4 font-semibold">Monday</th>
                  <th className="px-6 py-4 font-semibold">Wednesday</th>
                  <th className="px-6 py-4 font-semibold">Friday</th>
                </tr>
              </thead>
              <tbody>
                {schedule.map((row) => (
                  <tr key={row.time} className="border-b border-border last:border-0">
                    <td className="px-6 py-4 font-semibold text-accent">{row.time}</td>
                    <td className="px-6 py-4">{row.mon}</td>
                    <td className="px-6 py-4">{row.wed}</td>
                    <td className="px-6 py-4">{row.fri}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
