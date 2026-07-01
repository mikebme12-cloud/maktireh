import { ClipboardCheck, Boxes, Truck, PackageCheck } from "lucide-react";

const steps = [
  { icon: ClipboardCheck, n: "01", t: "Booking & Docs", d: "Send us your BL and commercial invoice — we prepare customs paperwork the same day." },
  { icon: Boxes, n: "02", t: "Port & Freezone", d: "We pick up the container from Djibouti Port and stage it inside our freezone yard." },
  { icon: Truck, n: "03", t: "Transit & Trucking", d: "Cleared cargo is loaded on our fleet and dispatched on the Djibouti–Ethiopia corridor." },
  { icon: PackageCheck, n: "04", t: "Delivered", d: "Proof of delivery, empty return coordination, and final reporting — all handled by our team." },
];

export function Process() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand">How it works</p>
          <h2 className="mt-3 font-[Sora] text-4xl font-bold text-foreground md:text-5xl">How we deliver your parcel</h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-4">
          {steps.map(({ icon: Icon, n, t, d }) => (
            <div key={n} className="relative rounded-2xl border border-border bg-card p-6">
              <div className="absolute -top-4 right-4 rounded-full bg-brand px-3 py-1 text-xs font-bold text-brand-foreground">{n}</div>
              <Icon className="h-8 w-8 text-brand" />
              <h3 className="mt-4 font-[Sora] font-semibold text-foreground">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}