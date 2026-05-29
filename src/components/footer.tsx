import { Link } from "@tanstack/react-router";
import { Dumbbell, MapPin, Phone, Mail, Instagram, Facebook, Twitter, Youtube } from "lucide-react";
import { business } from "@/data/site";

const quickLinks = [
  { to: "/about", label: "About" },
  { to: "/programs", label: "Programs" },
  { to: "/trainers", label: "Trainers" },
  { to: "/membership", label: "Membership" },
] as const;

const moreLinks = [
  { to: "/facilities", label: "Facilities" },
  { to: "/gallery", label: "Gallery" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/bmi", label: "BMI Calculator" },
] as const;

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-px grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <Link to="/" className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent text-accent-foreground">
              <Dumbbell className="h-5 w-5" />
            </span>
            <span className="font-display text-lg font-bold">
              Shakti<span className="text-accent">Fit</span> Arena
            </span>
          </Link>
          <p className="max-w-xs text-sm leading-relaxed text-primary-foreground/65">
            India's premium fitness destination. Strength, science and a community that helps you achieve real results.
          </p>
          <div className="flex gap-3 pt-1">
            {[
              { icon: Instagram, href: business.socials.instagram },
              { icon: Facebook, href: business.socials.facebook },
              { icon: Twitter, href: business.socials.twitter },
              { icon: Youtube, href: business.socials.youtube },
            ].map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Social link"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-primary-foreground/15 transition-colors hover:border-accent hover:text-accent"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground/90">Explore</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/65">
            {quickLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-accent">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground/90">More</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/65">
            {moreLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-accent">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground/90">Visit Us</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/65">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span>{business.location}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <a href={`tel:${business.phoneRaw}`} className="hover:text-accent">{business.phone}</a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <a href={`mailto:${business.email}`} className="hover:text-accent">{business.email}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="container-px flex flex-col items-center justify-between gap-2 py-6 text-xs text-primary-foreground/50 sm:flex-row">
          <p>© {new Date().getFullYear()} {business.name}. All rights reserved.</p>
          <p>Founded {business.founded} · Owner {business.owner}</p>
        </div>
      </div>
    </footer>
  );
}
