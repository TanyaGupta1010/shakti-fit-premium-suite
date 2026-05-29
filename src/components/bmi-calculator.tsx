import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Activity } from "lucide-react";

function category(bmi: number) {
  if (bmi < 18.5)
    return { label: "Underweight", color: "oklch(0.7 0.13 240)", rec: "Focus on strength training and a calorie-surplus, protein-rich diet. Our coaches can build a lean-mass program for you." };
  if (bmi < 25)
    return { label: "Healthy", color: "oklch(0.7 0.16 150)", rec: "Great work! Maintain with consistent training and balanced nutrition. Try our strength programs to level up." };
  if (bmi < 30)
    return { label: "Overweight", color: "oklch(0.78 0.15 80)", rec: "A mix of HIIT, cardio and strength will help. Our trainers can design a sustainable fat-loss plan with nutrition support." };
  return { label: "Obese", color: "oklch(0.63 0.2 27)", rec: "Start with guided, low-impact training and a structured nutrition plan. Book a free consultation with our coaches today." };
}

export function BmiCalculator() {
  const [height, setHeight] = useState(170);
  const [weight, setWeight] = useState(70);
  const [age, setAge] = useState(28);
  const [gender, setGender] = useState<"male" | "female">("male");

  const bmi = useMemo(() => {
    const h = height / 100;
    return h > 0 ? weight / (h * h) : 0;
  }, [height, weight]);

  const cat = category(bmi);
  const pct = Math.min(Math.max(((bmi - 12) / (40 - 12)) * 100, 0), 100);

  return (
    <div className="mx-auto mt-12 grid max-w-5xl gap-8 lg:grid-cols-2">
      <div className="rounded-3xl bg-card p-8 shadow-soft ring-1 ring-border">
        <h3 className="text-xl font-bold">Your details</h3>
        <div className="mt-6 space-y-7">
          {[
            { label: "Height", value: height, set: setHeight, min: 120, max: 220, unit: "cm" },
            { label: "Weight", value: weight, set: setWeight, min: 30, max: 160, unit: "kg" },
            { label: "Age", value: age, set: setAge, min: 12, max: 90, unit: "yrs" },
          ].map((f) => (
            <div key={f.label}>
              <div className="flex justify-between text-sm font-medium">
                <label>{f.label}</label>
                <span className="text-accent">{f.value} {f.unit}</span>
              </div>
              <input
                type="range"
                min={f.min}
                max={f.max}
                value={f.value}
                onChange={(e) => f.set(+e.target.value)}
                className="mt-3 w-full accent-[oklch(0.702_0.187_41.1)]"
              />
            </div>
          ))}
          <div>
            <label className="text-sm font-medium">Gender</label>
            <div className="mt-3 grid grid-cols-2 gap-3">
              {(["male", "female"] as const).map((g) => (
                <button
                  key={g}
                  onClick={() => setGender(g)}
                  className={`rounded-xl border px-4 py-3 text-sm font-medium capitalize transition-colors ${
                    gender === g ? "border-accent bg-accent/12 text-accent" : "border-border text-muted-foreground hover:bg-muted"
                  }`}
                >
                  {g}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col rounded-3xl p-8 text-primary-foreground shadow-elegant" style={{ background: "var(--gradient-hero)" }}>
        <span className="flex w-fit items-center gap-2 rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold text-accent">
          <Activity className="h-3.5 w-3.5" /> Your Result
        </span>
        <p className="mt-6 font-display text-6xl font-bold">{bmi.toFixed(1)}</p>
        <p className="mt-1 text-primary-foreground/70">Body Mass Index</p>
        <div className="mt-6">
          <div className="relative h-2.5 w-full overflow-hidden rounded-full bg-primary-foreground/15">
            <motion.div className="h-full rounded-full" style={{ background: cat.color }} animate={{ width: `${pct}%` }} transition={{ duration: 0.5 }} />
          </div>
          <div className="mt-2 flex justify-between text-[10px] text-primary-foreground/50">
            <span>Under</span><span>Healthy</span><span>Over</span><span>Obese</span>
          </div>
        </div>
        <p className="mt-6 inline-flex w-fit rounded-full px-4 py-1.5 text-sm font-bold" style={{ background: cat.color, color: "#0B1120" }}>
          {cat.label}
        </p>
        <p className="mt-4 text-sm leading-relaxed text-primary-foreground/75">{cat.rec}</p>
      </div>
    </div>
  );
}
