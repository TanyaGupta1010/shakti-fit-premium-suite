import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Play, Dumbbell, Users, HeartPulse, Sparkles, Activity, Waves, Flower2, Lock } from "lucide-react";
import { LazyImage } from "@/components/lazy-image";
import { Reveal, RevealStagger } from "@/components/reveal";
import { Counter } from "@/components/counter";
import { SectionHeading } from "@/components/section-heading";
import { ProgramCard, FacilityCard, TrainerCard, TestimonialCard, PlanCard } from "@/components/cards";
import { CtaSection } from "@/components/cta-section";
import {
  business,
  heroImage,
  whyChooseUs,
  programs,
  facilities,
  trainers,
  testimonials,
  plans,
  stats,
} from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ShaktiFit Arena — Premium Fitness Gym in Noida" },
      {
        name: "description",
        content:
          "Build strength and transform your life at ShaktiFit Arena, Noida's premium fitness destination. Expert trainers, world-class equipment and real results.",
      },
      { property: "og:title", content: "ShaktiFit Arena — Premium Fitness Gym in Noida" },
      { property: "og:description", content: "India's premium fitness destination helping members achieve real results." },
      { property: "og:image", content: heroImage },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const iconMap = { Dumbbell, Users, HeartPulse, Sparkles, Activity, Waves, Flower2, Lock } as const;

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate flex min-h-screen items-center overflow-hidden">
        <LazyImage
          src={heroImage}
          alt="Athlete training at ShaktiFit Arena"
          loading="eager"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)", opacity: 0.82 }} />
        <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent" />

        <div className="container-px relative pt-24">
          <Reveal className="max-w-3xl">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              <Sparkles className="h-3.5 w-3.5" /> Noida · Est. {business.founded}
            </span>
            <h1 className="text-4xl font-bold leading-[1.03] text-primary-foreground sm:text-6xl lg:text-7xl">
              Build Strength.
              <br />
              <span className="text-gradient">Transform Your Life.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base text-primary-foreground/75 sm:text-lg">
              India's premium fitness destination helping members achieve real, measurable results — with world-class coaching, equipment and recovery.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/membership"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.03]"
              >
                Join Now <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-primary-foreground/30 px-7 py-3.5 text-sm font-semibold text-primary-foreground backdrop-blur transition-colors hover:bg-primary-foreground/10"
              >
                <Play className="h-4 w-4" /> Book Free Trial
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* STATS */}
      <section className="border-b border-border bg-card">
        <div className="container-px grid grid-cols-2 gap-8 py-12 lg:grid-cols-4">
          {stats.map((s) => (
            <Reveal key={s.label} className="text-center">
              <p className="font-display text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
                <Counter value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-1.5 text-sm text-muted-foreground">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="container-px py-20 lg:py-28">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="A smarter way to train"
          subtitle="Everything under one roof to help you train harder, recover better and stay consistent."
        />
        <RevealStagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((w) => {
            const Icon = iconMap[w.icon as keyof typeof iconMap];
            return (
              <Reveal key={w.title} className="rounded-3xl bg-card p-7 shadow-soft ring-1 ring-border transition-shadow hover:shadow-elegant">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/12 text-accent">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-bold">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.desc}</p>
              </Reveal>
            );
          })}
        </RevealStagger>
      </section>

      {/* FEATURED PROGRAMS */}
      <section className="bg-muted/40 py-20 lg:py-28">
        <div className="container-px">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              align="left"
              eyebrow="Programs"
              title="Featured programs"
              subtitle="Specialised training tracks designed by certified coaches."
            />
            <Link to="/programs" className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline">
              View all programs <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <RevealStagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {programs.slice(0, 3).map((p) => (
              <ProgramCard key={p.name} program={p} />
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* MEMBERSHIP PREVIEW */}
      <section className="container-px py-20 lg:py-28">
        <SectionHeading
          eyebrow="Membership"
          title="Plans for every goal"
          subtitle="Flexible monthly memberships with no hidden fees. Cancel anytime."
        />
        <RevealStagger className="mt-14 grid items-start gap-6 lg:grid-cols-3">
          {plans.map((p) => (
            <PlanCard key={p.name} plan={p} />
          ))}
        </RevealStagger>
      </section>

      {/* TRAINER HIGHLIGHTS */}
      <section className="bg-muted/40 py-20 lg:py-28">
        <div className="container-px">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading align="left" eyebrow="Coaches" title="Meet your trainers" subtitle="Certified experts invested in your progress." />
            <Link to="/trainers" className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline">
              All trainers <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <RevealStagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {trainers.slice(0, 3).map((t) => (
              <TrainerCard key={t.name} trainer={t} />
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* FACILITIES PREVIEW */}
      <section className="container-px py-20 lg:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading align="left" eyebrow="Facilities" title="World-class spaces" subtitle="Premium zones for every kind of training." />
          <Link to="/facilities" className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline">
            Explore facilities <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <RevealStagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.slice(0, 3).map((f) => (
            <FacilityCard key={f.name} facility={f} />
          ))}
        </RevealStagger>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-muted/40 py-20 lg:py-28">
        <div className="container-px">
          <SectionHeading eyebrow="Success Stories" title="Loved by our members" subtitle="Real reviews from the ShaktiFit community." />
          <RevealStagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.slice(0, 3).map((t) => (
              <TestimonialCard key={t.name} t={t} />
            ))}
          </RevealStagger>
          <div className="mt-10 text-center">
            <Link to="/testimonials" className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline">
              Read more stories <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
