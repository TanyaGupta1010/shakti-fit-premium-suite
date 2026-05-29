import { LazyImage } from "./lazy-image";

interface Props {
  eyebrow: string;
  title: string;
  subtitle: string;
  image: string;
}

export function PageHeader({ eyebrow, title, subtitle, image }: Props) {
  return (
    <section className="relative isolate overflow-hidden">
      <LazyImage
        src={image}
        alt={title}
        loading="eager"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)", opacity: 0.86 }} />
      <div className="container-px relative flex min-h-[44vh] flex-col justify-center pb-14 pt-28 lg:min-h-[52vh] lg:pt-36">
        <span className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-accent/40 bg-accent/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          {eyebrow}
        </span>
        <h1 className="max-w-3xl text-4xl font-bold leading-[1.05] text-primary-foreground sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-xl text-base text-primary-foreground/75 sm:text-lg">{subtitle}</p>
      </div>
    </section>
  );
}
