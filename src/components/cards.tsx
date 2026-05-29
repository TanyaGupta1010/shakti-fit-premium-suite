import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Clock, Gauge, Star, Instagram, Twitter, Linkedin, Award, Check } from "lucide-react";
import { LazyImage } from "./lazy-image";
import { RevealItem } from "./reveal";

export function ProgramCard({
  program,
}: {
  program: { name: string; desc: string; img: string; level: string; duration: string };
}) {
  return (
    <RevealItem className="group relative overflow-hidden rounded-3xl bg-card shadow-soft ring-1 ring-border transition-all duration-500 hover:shadow-elegant">
      <div className="relative aspect-[4/3] overflow-hidden">
        <LazyImage
          src={program.img}
          alt={program.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/10 to-transparent" />
        <div className="absolute bottom-4 left-4 flex gap-2">
          <span className="flex items-center gap-1 rounded-full bg-background/85 px-3 py-1 text-xs font-medium text-foreground backdrop-blur">
            <Gauge className="h-3 w-3 text-accent" /> {program.level}
          </span>
          <span className="flex items-center gap-1 rounded-full bg-background/85 px-3 py-1 text-xs font-medium text-foreground backdrop-blur">
            <Clock className="h-3 w-3 text-accent" /> {program.duration}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="flex items-center justify-between text-xl font-bold">
          {program.name}
          <ArrowUpRight className="h-5 w-5 text-accent opacity-0 transition-opacity group-hover:opacity-100" />
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{program.desc}</p>
      </div>
    </RevealItem>
  );
}

export function FacilityCard({
  facility,
}: {
  facility: { name: string; desc: string; img: string };
}) {
  return (
    <RevealItem className="group relative overflow-hidden rounded-3xl shadow-soft ring-1 ring-border">
      <div className="relative aspect-[5/4] overflow-hidden">
        <LazyImage
          src={facility.img}
          alt={facility.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/30 to-transparent opacity-90" />
        <div className="absolute inset-x-0 bottom-0 p-6">
          <h3 className="text-xl font-bold text-primary-foreground">{facility.name}</h3>
          <p className="mt-1.5 max-h-0 overflow-hidden text-sm text-primary-foreground/80 opacity-0 transition-all duration-500 group-hover:max-h-24 group-hover:opacity-100">
            {facility.desc}
          </p>
        </div>
      </div>
    </RevealItem>
  );
}

export function TrainerCard({
  trainer,
}: {
  trainer: {
    name: string;
    role: string;
    img: string;
    experience: string;
    certs: string[];
    specialties: string[];
  };
}) {
  return (
    <RevealItem className="group overflow-hidden rounded-3xl bg-card shadow-soft ring-1 ring-border transition-shadow hover:shadow-elegant">
      <div className="relative aspect-[4/5] overflow-hidden">
        <LazyImage
          src={trainer.img}
          alt={trainer.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent" />
        <span className="absolute right-4 top-4 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
          {trainer.experience}
        </span>
        <div className="absolute inset-x-0 bottom-0 flex translate-y-2 gap-2 p-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          {[Instagram, Twitter, Linkedin].map((Icon, i) => (
            <span key={i} className="flex h-8 w-8 items-center justify-center rounded-full bg-background/90 text-foreground">
              <Icon className="h-4 w-4" />
            </span>
          ))}
        </div>
      </div>
      <div className="space-y-3 p-6">
        <div>
          <h3 className="text-lg font-bold">{trainer.name}</h3>
          <p className="text-sm font-medium text-accent">{trainer.role}</p>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {trainer.specialties.map((s) => (
            <span key={s} className="rounded-full bg-muted px-2.5 py-1 text-xs text-muted-foreground">
              {s}
            </span>
          ))}
        </div>
        <div className="space-y-1.5 border-t border-border pt-3">
          {trainer.certs.map((c) => (
            <p key={c} className="flex items-center gap-2 text-xs text-muted-foreground">
              <Award className="h-3.5 w-3.5 text-accent" /> {c}
            </p>
          ))}
        </div>
      </div>
    </RevealItem>
  );
}

export function TestimonialCard({
  t,
}: {
  t: { name: string; role: string; rating: number; text: string; img: string };
}) {
  return (
    <RevealItem className="flex h-full flex-col gap-4 rounded-3xl bg-card p-7 shadow-soft ring-1 ring-border">
      <div className="flex items-center gap-1">
        {Array.from({ length: t.rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
        ))}
      </div>
      <p className="flex-1 text-sm leading-relaxed text-foreground/85">"{t.text}"</p>
      <div className="flex items-center gap-3 border-t border-border pt-4">
        <LazyImage src={t.img} alt={t.name} className="h-11 w-11 rounded-full object-cover" />
        <div>
          <p className="text-sm font-semibold">{t.name}</p>
          <p className="text-xs text-muted-foreground">{t.role}</p>
        </div>
        <svg className="ml-auto h-6 w-6" viewBox="0 0 48 48" aria-hidden>
          <path fill="#4285F4" d="M24 9.5c3.5 0 6.6 1.2 9 3.6l6.7-6.7C35.6 2.7 30.2 0 24 0 14.6 0 6.4 5.4 2.6 13.2l7.8 6.1C12.2 13.3 17.6 9.5 24 9.5z" opacity="0" />
          <circle cx="24" cy="24" r="22" fill="#fff" />
          <path fill="#4285F4" d="M33.5 24.2c0-.7-.1-1.4-.2-2H24v3.8h5.4c-.2 1.3-.9 2.4-2 3.1v2.6h3.2c1.9-1.7 2.9-4.3 2.9-7.5z" />
          <path fill="#34A853" d="M24 34c2.7 0 4.9-.9 6.6-2.4l-3.2-2.6c-.9.6-2 1-3.4 1-2.6 0-4.8-1.8-5.6-4.2h-3.3v2.6C16.8 31.8 20.1 34 24 34z" />
          <path fill="#FBBC05" d="M18.4 25.8c-.2-.6-.3-1.2-.3-1.8s.1-1.2.3-1.8v-2.6h-3.3c-.6 1.3-1 2.8-1 4.4s.4 3.1 1 4.4l3.3-2.6z" />
          <path fill="#EA4335" d="M24 18c1.5 0 2.8.5 3.8 1.5l2.8-2.8C28.9 15.1 26.7 14 24 14c-3.9 0-7.2 2.2-8.9 5.6l3.3 2.6c.8-2.4 3-4.2 5.6-4.2z" />
        </svg>
      </div>
    </RevealItem>
  );
}

export function PlanCard({
  plan,
}: {
  plan: {
    name: string;
    price: number;
    tagline: string;
    popular: boolean;
    features: { label: string; on: boolean }[];
  };
}) {
  return (
    <RevealItem
      className={`relative flex flex-col rounded-3xl p-8 ring-1 transition-transform duration-500 ${
        plan.popular
          ? "scale-[1.02] bg-primary text-primary-foreground ring-primary shadow-elegant lg:scale-105"
          : "bg-card text-foreground ring-border shadow-soft hover:-translate-y-1"
      }`}
    >
      {plan.popular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-xs font-semibold text-accent-foreground">
          Most Popular
        </span>
      )}
      <h3 className="text-2xl font-bold">{plan.name}</h3>
      <p className={`mt-1 text-sm ${plan.popular ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
        {plan.tagline}
      </p>
      <div className="mt-6 flex items-end gap-1">
        <span className="text-4xl font-bold">₹{plan.price.toLocaleString("en-IN")}</span>
        <span className={`pb-1.5 text-sm ${plan.popular ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
          /month
        </span>
      </div>
      <ul className="mt-7 flex-1 space-y-3">
        {plan.features.map((f) => (
          <li
            key={f.label}
            className={`flex items-center gap-3 text-sm ${
              f.on ? "" : plan.popular ? "text-primary-foreground/40 line-through" : "text-muted-foreground/50 line-through"
            }`}
          >
            <span
              className={`flex h-5 w-5 items-center justify-center rounded-full ${
                f.on ? "bg-accent text-accent-foreground" : "bg-muted text-muted-foreground"
              }`}
            >
              <Check className="h-3 w-3" />
            </span>
            {f.label}
          </li>
        ))}
      </ul>
      <Link
        to="/contact"
        className={`mt-8 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-transform hover:scale-[1.03] ${
          plan.popular ? "bg-accent text-accent-foreground" : "bg-primary text-primary-foreground"
        }`}
      >
        Choose {plan.name}
      </Link>
    </RevealItem>
  );
}
