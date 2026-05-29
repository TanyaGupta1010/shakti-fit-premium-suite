import { useState } from "react";
import { PlanCard } from "./cards";
import { RevealStagger } from "./reveal";
import { plans, type BillingCycle } from "@/data/site";

const cycles: { id: BillingCycle; label: string; note?: string }[] = [
  { id: "monthly", label: "Monthly" },
  { id: "quarterly", label: "Quarterly", note: "Save 10%" },
  { id: "annual", label: "Annual", note: "Save 20%" },
];

export function MembershipPlans() {
  const [cycle, setCycle] = useState<BillingCycle>("monthly");

  return (
    <div>
      <div className="flex justify-center">
        <div className="inline-flex items-center gap-1 rounded-full border border-border bg-card p-1.5 shadow-soft">
          {cycles.map((c) => (
            <button
              key={c.id}
              onClick={() => setCycle(c.id)}
              className={`relative rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                cycle === c.id ? "bg-accent text-accent-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {c.label}
              {c.note && (
                <span className={`ml-1.5 hidden text-[10px] font-bold sm:inline ${cycle === c.id ? "text-accent-foreground/80" : "text-accent"}`}>
                  {c.note}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      <RevealStagger className="mt-12 grid items-start gap-6 lg:grid-cols-3">
        {plans.map((p) => (
          <PlanCard key={p.name} plan={p} cycle={cycle} />
        ))}
      </RevealStagger>
    </div>
  );
}
