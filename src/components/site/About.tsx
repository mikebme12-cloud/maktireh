import logoAsset from "@/assets/logo.png.asset.json";
import { CheckCircle2 } from "lucide-react";

const points = [
  "Port operations at Djibouti terminals",
  "Customs clearance & full documentation",
  "Multimodal transit — sea, road & inland rail",
  "Trusted network of Ethiopian local forwarders",
];

export function About() {
  return (
    <section id="about" className="bg-secondary py-24">
      <div className="mx-auto grid max-w-7xl gap-14 px-4 md:grid-cols-2 md:items-center md:px-8">
        <div className="relative">
          <div className="rounded-3xl border border-border bg-card p-10 shadow-[var(--shadow-brand)]">
            <img src={logoAsset.url} alt="Maktireh Transit logo" className="mx-auto h-56 w-56 object-contain" />
            <div className="mt-6 text-center">
              <div className="font-[Sora] text-2xl font-bold text-foreground">Maktireh Transit</div>
              <div className="mt-1 text-sm text-muted-foreground">Djibouti Freezone • Since inception</div>
            </div>
          </div>
          <div className="pointer-events-none absolute -bottom-6 -right-6 -z-10 h-40 w-40 rounded-full blur-3xl" style={{ background: "color-mix(in oklab, var(--brand) 40%, transparent)" }} />
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand">About us</p>
          <h2 className="mt-3 font-[Sora] text-4xl font-bold text-foreground md:text-5xl">
            Djibouti operations, <span className="text-brand">Ethiopia delivery</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            Maktireh Transit is a Djibouti-registered operations and logistics clearance company. We handle port operations,
            customs and container movement at the Port of Djibouti, and partner with reliable Ethiopian local forwarders to
            move cargo inland to Addis Ababa and beyond. One accountable partner from vessel arrival to final delivery.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-2 text-sm text-foreground">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="rounded-full bg-brand px-6 py-3 font-semibold text-brand-foreground shadow-[var(--shadow-brand)] transition hover:opacity-90">
              Get started now
            </a>
            <a href="#services" className="rounded-full border border-brand px-6 py-3 font-semibold text-brand transition hover:bg-brand hover:text-brand-foreground">
              Read more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}