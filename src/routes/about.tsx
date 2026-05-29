import { createFileRoute } from "@tanstack/react-router";
import { Target, Eye, Heart, ShieldCheck } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Reveal, RevealStagger } from "@/components/reveal";
import { Counter } from "@/components/counter";
import { SectionHeading } from "@/components/section-heading";
import { LazyImage } from "@/components/lazy-image";
import { CtaSection } from "@/components/cta-section";
import { business, photo, stats, timeline } from "@/data/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — ShaktiFit Arena" },
      { name: "description", content: `Founded in ${business.founded} by ${business.owner}, ShaktiFit Arena is Noida's premium fitness destination built on science, community and real results.` },
      { property: "og:title", content: "About — ShaktiFit Arena" },
      { property: "og:description", content: "Our story, mission and the people behind ShaktiFit Arena." },
      { property: "og:image", content: photo(4, 1600) },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const values = [
  { icon: Target, title: "Results First", desc: "Every program is built around measurable progress, not guesswork." },
  { icon: Heart, title: "Community", desc: "A supportive culture that keeps members motivated and consistent." },
  { icon: ShieldCheck, title: "Safety & Form", desc: "Coaches obsess over technique so you train hard and stay injury-free." },
  { icon: Eye, title: "Premium Experience", desc: "Spotless spaces, modern equipment and genuine hospitality." },
];

function About() {
  return (
    <>
      <PageHeader
        eyebrow="Our Story"
        title="More than a gym. A movement."
        subtitle={`Since ${business.founded}, we've helped thousands of people in Noida discover their strongest selves.`}
        image={photo(4, 1600)}
      />

      <section className="container-px grid items-center gap-12 py-20 lg:grid-cols-2 lg:py-28">
        <Reveal>
          <LazyImage src={photo(8, 1100)} alt="Inside ShaktiFit Arena" className="aspect-[4/3] w-full rounded-3xl object-cover shadow-elegant" />
        </Reveal>
        <Reveal delay={0.1}>
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Est. {business.founded}</span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Built in Noida, made for India</h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            ShaktiFit Arena began with a simple belief: world-class fitness shouldn't be a luxury reserved for a few. Founder {business.owner} set out to create a space where serious training meets genuine care — where members are coached, tracked and celebrated.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Today we're one of Sector 62's most loved fitness destinations, blending premium equipment, certified coaching and a recovery-first philosophy to deliver results that last.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-6">
            {stats.slice(0, 2).map((s) => (
              <div key={s.label}>
                <p className="font-display text-3xl font-bold text-accent"><Counter value={s.value} suffix={s.suffix} /></p>
                <p className="text-sm text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="bg-muted/40 py-20 lg:py-28">
        <div className="container-px">
          <SectionHeading eyebrow="What we stand for" title="Our core values" subtitle="The principles that shape every session at ShaktiFit Arena." />
          <RevealStagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <Reveal key={v.title} className="rounded-3xl bg-card p-7 shadow-soft ring-1 ring-border">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/12 text-accent">
                  <v.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-bold">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
              </Reveal>
            ))}
          </RevealStagger>
        </div>
      </section>

      <section className="container-px py-16 lg:py-24">
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal className="rounded-3xl bg-card p-8 shadow-soft ring-1 ring-border">
            <Target className="h-8 w-8 text-accent" />
            <h3 className="mt-4 text-xl font-bold">Our Mission</h3>
            <p className="mt-2 leading-relaxed text-muted-foreground">
              To make world-class, science-backed fitness accessible to every Indian — with coaching, accountability and care that delivers lasting results.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="rounded-3xl bg-card p-8 shadow-soft ring-1 ring-border">
            <Eye className="h-8 w-8 text-accent" />
            <h3 className="mt-4 text-xl font-bold">Our Vision</h3>
            <p className="mt-2 leading-relaxed text-muted-foreground">
              To build India's most trusted premium fitness chain — a community where strength, health and confidence are within everyone's reach.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-secondary/40 py-16 lg:py-24">
        <div className="container-px">
          <SectionHeading eyebrow="Our Journey" title="Milestones that built us" subtitle="From a single floor in Noida to India's premium fitness destination." />
          <div className="relative mx-auto mt-14 max-w-3xl">
            <div className="absolute left-4 top-0 h-full w-px bg-border sm:left-1/2" />
            <div className="space-y-8">
              {timeline.map((t, i) => (
                <Reveal key={t.year} className={`relative pl-12 sm:w-1/2 sm:pl-0 ${i % 2 === 0 ? "sm:pr-12 sm:text-right" : "sm:ml-auto sm:pl-12"}`}>
                  <span className={`absolute left-2.5 top-1.5 h-4 w-4 rounded-full bg-accent ring-4 ring-background sm:left-auto ${i % 2 === 0 ? "sm:-right-2" : "sm:-left-2"}`} />
                  <div className="rounded-2xl bg-card p-6 shadow-soft ring-1 ring-border">
                    <span className="font-display text-2xl font-bold text-accent">{t.year}</span>
                    <h3 className="mt-1 text-lg font-bold">{t.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{t.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container-px py-20 lg:py-28">

        <Reveal className="mx-auto grid max-w-5xl items-center gap-10 rounded-3xl bg-card p-8 shadow-soft ring-1 ring-border md:grid-cols-[260px_1fr] md:p-12">
          <LazyImage src={photo(24, 700)} alt={business.owner} className="aspect-square w-full rounded-3xl object-cover" />
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Founder & Owner</span>
            <h3 className="mt-2 text-2xl font-bold">{business.owner}</h3>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              "I built ShaktiFit Arena to be the gym I always wished existed in India — premium, honest and obsessed with your results. Every member here is family, and your goals become ours."
            </p>
            <p className="mt-4 text-sm font-medium text-foreground">— {business.owner}, Founder</p>
          </div>
        </Reveal>
      </section>

      <CtaSection />
    </>
  );
}
