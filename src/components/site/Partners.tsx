const partners = [
  "Port of Djibouti",
  "DP World",
  "Ethiopian Shipping Lines",
  "Djibouti Customs",
  "Ethio Customs",
  "SGS",
  "Maersk",
  "CMA CGM",
];

const clients = [
  "Addis Manufacturing",
  "Horn Coffee Exports",
  "East Africa Trading",
  "Blue Nile Textiles",
  "Awash Steel",
  "Rift Valley Foods",
];

export function Partners() {
  return (
    <section id="partners" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* Partners */}
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand">Partners</p>
          <h2 className="mt-3 font-[Sora] text-3xl font-bold text-foreground md:text-4xl">
            Regional partners &amp; port authorities
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-8">
          {partners.map((p) => (
            <div
              key={p}
              className="flex h-14 items-center justify-center rounded-lg border border-border bg-card px-3 text-center font-[Sora] text-xs font-semibold text-muted-foreground grayscale transition hover:text-brand hover:grayscale-0"
            >
              {p}
            </div>
          ))}
        </div>

        {/* Our Clients */}
        <div className="mt-24 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand">Our Clients</p>
          <h2 className="mt-3 font-[Sora] text-3xl font-bold text-foreground md:text-4xl">
            Manufacturers, traders &amp; exporters we serve
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {clients.map((c) => (
            <div
              key={c}
              className="flex h-16 items-center justify-center rounded-xl border border-border bg-secondary/40 px-3 text-center font-[Sora] text-xs font-semibold text-foreground/70 transition hover:border-brand hover:text-brand"
            >
              {c}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}