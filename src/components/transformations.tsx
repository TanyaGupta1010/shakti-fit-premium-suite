import { LazyImage } from "./lazy-image";
import { RevealItem } from "./reveal";
import { transformations } from "@/data/site";

export function TransformationCard({
  t,
}: {
  t: { name: string; result: string; goal: string; before: string; after: string; quote: string };
}) {
  return (
    <RevealItem className="overflow-hidden rounded-3xl bg-card shadow-soft ring-1 ring-border">
      <div className="relative grid grid-cols-2">
        <div className="relative aspect-[3/4] overflow-hidden">
          <LazyImage src={t.before} alt={`${t.name} before`} className="h-full w-full object-cover grayscale" />
          <span className="absolute left-3 top-3 rounded-full bg-background/85 px-2.5 py-1 text-[11px] font-semibold text-foreground backdrop-blur">
            Before
          </span>
        </div>
        <div className="relative aspect-[3/4] overflow-hidden">
          <LazyImage src={t.after} alt={`${t.name} after`} className="h-full w-full object-cover" />
          <span className="absolute right-3 top-3 rounded-full bg-accent px-2.5 py-1 text-[11px] font-semibold text-accent-foreground">
            After
          </span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-lg font-bold">{t.name}</h3>
          <span className="rounded-full bg-accent/12 px-3 py-1 text-xs font-semibold text-accent">{t.goal}</span>
        </div>
        <p className="mt-1 text-sm font-bold text-accent">{t.result}</p>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">"{t.quote}"</p>
      </div>
    </RevealItem>
  );
}

export function Transformations() {
  return (
    <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
      {transformations.map((t) => (
        <TransformationCard key={t.name} t={t} />
      ))}
    </div>
  );
}
