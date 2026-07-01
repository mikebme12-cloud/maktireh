import { Truck, Warehouse, Ship, FileCheck2, Package, Container } from "lucide-react";

const services = [
  { icon: Ship, title: "Sea Freight & Port Ops", desc: "Vessel offloading, container reception and port clearance at Djibouti Port terminals." },
  { icon: Container, title: "Container Handling", desc: "Loading, unloading and stacking of 20ft/40ft containers inside our freezone yard." },
  { icon: Warehouse, title: "Freezone Warehousing", desc: "Secure covered and open storage inside the Djibouti Freezone — bonded and duty-suspended." },
  { icon: Truck, title: "Road Transport", desc: "Trucking on the Djibouti–Addis Ababa corridor with tracked fleet and experienced drivers." },
  { icon: FileCheck2, title: "Customs Clearance", desc: "Full documentation, HS coding and duty processing for import and export cargo." },
  { icon: Package, title: "Cargo Consolidation", desc: "LCL groupage, deconsolidation and last-mile delivery across Djibouti and Ethiopia." },
];

export function Services() {
  return (
    <section id="services" className="relative bg-background py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand">What we do</p>
          <h2 className="mt-3 font-[Sora] text-4xl font-bold text-foreground md:text-5xl">
            End-to-end logistics from <span className="text-brand">Djibouti to inland Africa</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Every shipment we handle passes through our freezone facility — the same yard, trucks and containers you see in these
            pictures. No sub-contracting, no guesswork.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:shadow-[var(--shadow-brand)]">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl text-brand-foreground" style={{ background: "var(--gradient-brand)" }}>
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="font-[Sora] text-lg font-semibold text-foreground">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
              <div className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-brand-glow transition group-hover:scale-x-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}