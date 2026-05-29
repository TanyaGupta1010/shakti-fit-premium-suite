import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, CheckCircle2 } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { business, photo } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — ShaktiFit Arena" },
      { name: "description", content: "Visit ShaktiFit Arena in Sector 62, Noida. Call +91 98765 43210, email us or message on WhatsApp to book your free trial." },
      { property: "og:title", content: "Contact — ShaktiFit Arena" },
      { property: "og:description", content: "Get in touch to book your free trial at ShaktiFit Arena, Noida." },
      { property: "og:image", content: photo(40, 1600) },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  email: z.string().trim().email("Enter a valid email").max(120),
  phone: z.string().trim().min(8, "Enter a valid phone").max(20),
  message: z.string().trim().min(5, "Tell us a bit more").max(800),
});

function Contact() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd) as Record<string, string>;
    const result = schema.safeParse(data);
    if (!result.success) {
      const errs: Record<string, string> = {};
      result.error.issues.forEach((i) => (errs[i.path[0] as string] = i.message));
      setErrors(errs);
      return;
    }
    setErrors({});
    const text = `New enquiry from ${result.data.name} (${result.data.phone}, ${result.data.email}): ${result.data.message}`;
    window.open(`https://wa.me/${business.phoneRaw}?text=${encodeURIComponent(text)}`, "_blank");
    setSent(true);
    e.currentTarget.reset();
  };

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's get you started"
        subtitle="Book a free trial, ask a question or just drop by. We'd love to meet you."
        image={photo(40, 1600)}
      />

      <section className="container-px py-20 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          {/* Info */}
          <Reveal className="space-y-4">
            {[
              { icon: MapPin, label: "Visit", value: business.location },
              { icon: Phone, label: "Call", value: business.phone, href: `tel:${business.phoneRaw}` },
              { icon: Mail, label: "Email", value: business.email, href: `mailto:${business.email}` },
              { icon: Clock, label: "Hours", value: "Mon–Sun · 5:00 AM – 11:00 PM" },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href ?? "#"}
                className="flex items-start gap-4 rounded-2xl bg-card p-5 shadow-soft ring-1 ring-border transition-shadow hover:shadow-elegant"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/12 text-accent">
                  <c.icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{c.label}</p>
                  <p className="mt-0.5 font-medium">{c.value}</p>
                </div>
              </a>
            ))}
            <a
              href={`https://wa.me/${business.phoneRaw}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-5 py-4 font-semibold text-white transition-transform hover:scale-[1.02]"
            >
              <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
            </a>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.1} className="rounded-3xl bg-card p-8 shadow-soft ring-1 ring-border">
            {sent ? (
              <div className="flex h-full flex-col items-center justify-center gap-3 py-12 text-center">
                <CheckCircle2 className="h-14 w-14 text-accent" />
                <h3 className="text-xl font-bold">Message ready to send!</h3>
                <p className="max-w-sm text-sm text-muted-foreground">
                  We've opened WhatsApp with your details. Our team will reply shortly. You can also call us directly.
                </p>
                <button onClick={() => setSent(false)} className="mt-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground">
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5" noValidate>
                <h3 className="text-xl font-bold">Send us a message</h3>
                {([
                  { name: "name", label: "Full name", type: "text", placeholder: "Your name" },
                  { name: "email", label: "Email", type: "email", placeholder: "you@email.com" },
                  { name: "phone", label: "Phone", type: "tel", placeholder: "+91 ..." },
                ] as const).map((f) => (
                  <div key={f.name}>
                    <label className="text-sm font-medium">{f.label}</label>
                    <input
                      name={f.name}
                      type={f.type}
                      placeholder={f.placeholder}
                      className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
                    />
                    {errors[f.name] && <p className="mt-1 text-xs text-destructive">{errors[f.name]}</p>}
                  </div>
                ))}
                <div>
                  <label className="text-sm font-medium">Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="I'd like to book a free trial..."
                    className="mt-2 w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
                  />
                  {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
                </div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
                >
                  Send Message <Send className="h-4 w-4" />
                </button>
              </form>
            )}
          </Reveal>
        </div>

        <Reveal className="mt-12 overflow-hidden rounded-3xl shadow-soft ring-1 ring-border">
          <iframe
            title="ShaktiFit Arena location"
            src={business.mapEmbed}
            className="h-[400px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Reveal>
      </section>
    </>
  );
}
