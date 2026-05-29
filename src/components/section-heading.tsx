import { Reveal } from "./reveal";

interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
}

export function SectionHeading({ eyebrow, title, subtitle, align = "center", light }: Props) {
  return (
    <Reveal
      className={`flex max-w-2xl flex-col gap-4 ${align === "center" ? "mx-auto text-center items-center" : "items-start"}`}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          {eyebrow}
        </span>
      )}
      <h2 className={`text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl ${light ? "text-primary-foreground" : "text-foreground"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base leading-relaxed sm:text-lg ${light ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
