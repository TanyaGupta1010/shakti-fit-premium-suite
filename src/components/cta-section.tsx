import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./reveal";
import { business } from "@/data/site";

export function CtaSection() {
  return (
    <section className="container-px py-20 lg:py-28">
      <Reveal>
        <div
          className="relative overflow-hidden rounded-3xl px-8 py-16 text-center sm:px-16 lg:py-24"
          style={{ background: "var(--gradient-hero)" }}
        >
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold text-primary-foreground sm:text-4xl lg:text-5xl">
              Your transformation starts today.
            </h2>
            <p className="mt-4 text-base text-primary-foreground/70 sm:text-lg">
              Book a free trial session and experience {business.name} for yourself. No pressure, just results.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                to="/membership"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.03]"
              >
                Join Now <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                Book Free Trial
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
