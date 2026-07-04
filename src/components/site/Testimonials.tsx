import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Dawit Bekele",
    role: "Import Manager · East Africa Trading",
    quote: "Maktireh cleared our 40ft container in under 48 hours. Fanuel's team kept us informed at every stage.",
  },
  {
    name: "Sara Mohammed",
    role: "Logistics Head · Addis Manufacturing",
    quote: "Reliable corridor transit and honest pricing. They handle our weekly shipments without a single delay.",
  },
  {
    name: "Yonas Alemu",
    role: "Owner · Horn Coffee Exports",
    quote: "Freezone warehousing plus multimodal transit made our export operation dramatically simpler.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-secondary/40 py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand">Testimonials</p>
          <h2 className="mt-3 font-[Sora] text-4xl font-bold text-foreground md:text-5xl">
            Trusted by shippers across <span className="text-brand">the corridor</span>
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <article key={r.name} className="relative rounded-2xl border border-border bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-[var(--shadow-brand)]">
              <Quote className="absolute right-5 top-5 h-6 w-6 text-brand/20" />
              <div className="flex gap-0.5 text-emerald-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-foreground">"{r.quote}"</p>
              <div className="mt-5 border-t border-border pt-4">
                <div className="font-[Sora] text-sm font-semibold text-foreground">{r.name}</div>
                <div className="text-xs text-muted-foreground">{r.role}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}