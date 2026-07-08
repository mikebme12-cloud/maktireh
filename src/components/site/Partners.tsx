import { useMemo, useState } from "react";

interface Partner {
  name: string;
  domain?: string;
  initials: string;
}

const partners: Partner[] = [
  { name: "MSC", domain: "msc.com", initials: "MSC" },
  { name: "CMA CGM", domain: "cma-cgm.com", initials: "CMA" },
  { name: "EDR", initials: "EDR" },
  { name: "Ethiopian Shipping Line", domain: "ethiopianshippinglines.com", initials: "ESL" },
  { name: "Djibouti Customs", domain: "douane.dj", initials: "DJC" },
  { name: "SGS", domain: "sgs.com", initials: "SGS" },
  { name: "Maersk", domain: "maersk.com", initials: "MSK" },
  { name: "Port of Djibouti", domain: "portdedjibouti.com", initials: "POD" },
];

const clients = [
  "Addis Manufacturing",
  "Horn Coffee Exports",
  "East Africa Trading",
  "Blue Nile Textiles",
  "Awash Steel",
  "Rift Valley Foods",
];

function PartnerLogo({ partner }: { partner: Partner }) {
  const [failed, setFailed] = useState(false);

  const src = useMemo(() => {
    if (!partner.domain) return null;
    const token = import.meta.env.VITE_LOVABLE_CONNECTOR_LOGO_DEV_API_KEY;
    if (token) {
      return `https://img.logo.dev/${partner.domain}?token=${token}&format=png&size=200&fallback=initials`;
    }
    // Free fallback logo API (no key required)
    return `https://logo.clearbit.com/${partner.domain}?size=200`;
  }, [partner.domain]);

  if (src && !failed) {
    return (
      <img
        src={src}
        alt={`${partner.name} logo`}
        className="h-full w-full object-contain p-3 grayscale transition duration-300 group-hover:grayscale-0"
        loading="lazy"
        onError={() => setFailed(true)}
      />
    );
  }

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-1 text-center">
      <span className="font-[Sora] text-lg font-bold text-brand">{partner.initials}</span>
      <span className="max-w-[90%] truncate px-1 text-[10px] font-medium text-muted-foreground">
        {partner.name}
      </span>
    </div>
  );
}

export function Partners() {
  // Duplicate the list for a seamless infinite marquee loop
  const marqueePartners = useMemo(() => [...partners, ...partners], []);

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

        <div className="relative mt-12 overflow-hidden rounded-2xl border border-border bg-card/50 py-2">
          {/* Fade masks */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent" />

          <div className="flex w-max animate-marquee items-center gap-8 px-4">
            {marqueePartners.map((p, i) => (
              <div
                key={`${p.name}-${i}`}
                className="group flex h-24 w-40 shrink-0 items-center justify-center rounded-xl border border-border bg-card shadow-sm transition duration-300 hover:border-brand hover:shadow-md"
                title={p.name}
              >
                <PartnerLogo partner={p} />
              </div>
            ))}
          </div>
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
