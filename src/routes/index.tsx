import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, Play, Dumbbell, Users, HeartPulse, Sparkles, Activity, Waves, Flower2, Lock,
  Award, UserCog, Apple, CalendarCheck, Zap, Droplets, Target, ShieldCheck, Star,
} from "lucide-react";
import { LazyImage } from "@/components/lazy-image";
import { Reveal, RevealStagger } from "@/components/reveal";
import { Counter } from "@/components/counter";
import { SectionHeading } from "@/components/section-heading";
import { ProgramCard, FacilityCard, TrainerCard } from "@/components/cards";
import { MembershipPlans } from "@/components/membership-plans";
import { TestimonialsCarousel } from "@/components/testimonials-carousel";
import { Transformations } from "@/components/transformations";
import { BmiCalculator } from "@/components/bmi-calculator";
import { Faq } from "@/components/faq";
import { CtaSection } from "@/components/cta-section";
import {
  business, heroImage, whyChooseUs, programs, facilities, trainers, stats, coreValues, photo,
} from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ShaktiFit Arena — Premium Fitness Gym in Noida" },
      {
        name: "description",
        content:
          "ShaktiFit Arena is India's premium fitness destination. Elite trainers, world-class equipment, personalized coaching and proven transformation programs in Noida.",
      },
      { property: "og:title", content: "ShaktiFit Arena — Premium Fitness Gym in Noida" },
      { property: "og:description", content: "Train smarter, get stronger, become unstoppable at India's premium fitness destination." },
      { property: "og:image", content: heroImage },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const iconMap = {
  Dumbbell, Users, HeartPulse, Sparkles, Activity, Waves, Flower2, Lock,
  Award, UserCog, Apple, CalendarCheck, Zap, Droplets, Target, ShieldCheck,
} as const;

function Icon({ name, className }: { name: string; className?: string }) {
  const C = iconMap[name as keyof typeof iconMap] ?? Dumbbell;
  return <C className={className} />;
}

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate flex min-h-screen items-center overflow-hidden">
        <LazyImage
          src={heroImage}
          alt="Athletes training at ShaktiFit Arena"
          loading="eager"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)", opacity: 0.9 }} />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />

        <div className="container-px relative pt-24">
          <Reveal className="max-w-3xl">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              <Sparkles className="h-3.5 w-3.5" /> Noida · Est. {business.founded}
            </span>
            <h1 className="text-4xl font-bold leading-[1.02] text-primary-foreground sm:text-6xl lg:text-7xl">
              Train Smarter.
              <br />
              Get Stronger.
              <br />
              <span className="text-gradient">Become Unstoppable.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base text-primary-foreground/80 sm:text-lg">
              India's premium fitness destination with elite trainers, world-class equipment,
              personalized coaching, and proven transformation programs.
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
      <section className="border-b border-border bg-secondary">
        <div className="container-px grid grid-cols-2 gap-8 py-12 lg:grid-cols-4">
          {stats.map((s) => (
            <Reveal key={s.label} className="text-center">
              <p className="font-display text-3xl font-bold text-primary-foreground sm:text-4xl lg:text-5xl">
                <Counter value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-1.5 text-sm text-primary-foreground/60">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="container-px py-16 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <LazyImage src={photo(1, 1000)} alt="Inside ShaktiFit Arena" className="aspect-[4/3] w-full rounded-3xl object-cover shadow-elegant" />
              <div className="absolute -bottom-6 -right-4 hidden rounded-2xl bg-accent p-5 text-accent-foreground shadow-elegant sm:block">
                <p className="font-display text-3xl font-bold">6+</p>
                <p className="text-xs font-medium">Years of Excellence</p>
              </div>
            </div>
          </Reveal>
          <div>
            <SectionHeading
              align="left"
              eyebrow="Our Story"
              title="More than a gym — a performance institution"
              subtitle="Founded in 2018 by Raj Malhotra, ShaktiFit Arena set out to bring world-class training to India. Today we're home to 5000+ members and a team of elite coaches obsessed with your results."
            />
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {coreValues.map((v) => (
                <Reveal key={v.title} className="rounded-2xl border border-border bg-card p-5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/12 text-accent">
                    <Icon name={v.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-3 font-bold">{v.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{v.desc}</p>
                </Reveal>
              ))}
            </div>
            <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline">
              Read our full story <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-secondary/40 py-16 lg:py-24">
        <div className="container-px">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Everything you need to win"
            subtitle="Premium coaching, equipment and support — all under one roof."
          />
          <RevealStagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((w) => (
              <Reveal key={w.title} className="rounded-3xl bg-card p-7 shadow-soft ring-1 ring-border transition-all hover:-translate-y-1 hover:shadow-elegant">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/12 text-accent">
                  <Icon name={w.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-bold">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.desc}</p>
              </Reveal>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="container-px py-16 lg:py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading align="left" eyebrow="Programs" title="Train with purpose" subtitle="Specialised tracks designed by certified coaches for every goal." />
          <Link to="/programs" className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline">
            View all programs <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <RevealStagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((p) => (
            <ProgramCard key={p.name} program={p} />
          ))}
        </RevealStagger>
      </section>

      {/* MEMBERSHIPS */}
      <section className="bg-secondary/40 py-16 lg:py-24">
        <div className="container-px">
          <SectionHeading eyebrow="Memberships" title="Choose your plan" subtitle="Flexible monthly, quarterly and annual plans with no hidden fees." />
          <div className="mt-10">
            <MembershipPlans />
          </div>
          <p className="mt-8 text-center text-sm text-muted-foreground">
            Need a full comparison?{" "}
            <Link to="/membership" className="font-semibold text-accent hover:underline">See the detailed table</Link>
          </p>
        </div>
      </section>

      {/* TRAINERS */}
      <section className="container-px py-16 lg:py-24">
        <SectionHeading eyebrow="Elite Coaches" title="Meet your trainers" subtitle="Certified experts personally invested in your transformation." />
        <RevealStagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {trainers.map((t) => (
            <TrainerCard key={t.name} trainer={t} />
          ))}
        </RevealStagger>
      </section>

      {/* TRANSFORMATIONS */}
      <section className="bg-secondary/40 py-16 lg:py-24">
        <div className="container-px">
          <SectionHeading eyebrow="Transformation Stories" title="Real members, real results" subtitle="Hundreds of transformations powered by coaching, consistency and community." />
          <Transformations />
          <div className="mt-12 grid grid-cols-2 gap-6 lg:grid-cols-4">
            {[
              { v: 1200, s: "+", l: "Transformations" },
              { v: 18, s: "k+", l: "Kgs Lost" },
              { v: 95, s: "%", l: "Hit Their Goal" },
              { v: 4900, s: "+", l: "5-Star Reviews" },
            ].map((m) => (
              <Reveal key={m.l} className="rounded-2xl border border-border bg-card p-6 text-center">
                <p className="font-display text-3xl font-bold text-accent"><Counter value={m.v} suffix={m.s} /></p>
                <p className="mt-1 text-sm text-muted-foreground">{m.l}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FACILITIES */}
      <section className="container-px py-16 lg:py-24">
        <SectionHeading eyebrow="Facilities" title="World-class spaces" subtitle="Premium, spotless zones engineered for every kind of training." />
        <RevealStagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((f) => (
            <FacilityCard key={f.name} facility={f} />
          ))}
        </RevealStagger>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-secondary/40 py-16 lg:py-24">
        <div className="container-px">
          <SectionHeading eyebrow="Reviews" title="Loved by our community" subtitle="Verified reviews from members across Noida & Delhi NCR." />
          <TestimonialsCarousel />
        </div>
      </section>

      {/* BMI */}
      <section className="container-px py-16 lg:py-24">
        <SectionHeading eyebrow="BMI Calculator" title="Know your numbers" subtitle="Calculate your Body Mass Index and get a personalised coaching recommendation." />
        <BmiCalculator />
      </section>

      {/* FAQ */}
      <section className="bg-secondary/40 py-16 lg:py-24">
        <div className="container-px">
          <SectionHeading eyebrow="FAQ" title="Questions, answered" subtitle="Everything you need to know before you join ShaktiFit Arena." />
          <Faq />
        </div>
      </section>

      <CtaSection />
    </>
  );
}
