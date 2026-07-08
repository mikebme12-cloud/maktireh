import { useMemo } from "react";
import cmacgm from "@/assets/cmacgm.png.asset.json";
import maersk from "@/assets/maersk.png.asset.json";
import msc from "@/assets/msc.png.asset.json";
import sgs from "@/assets/sgs.png.asset.json";
import dpcs from "@/assets/dpcs.png.asset.json";
import edr from "@/assets/edr.png.asset.json";
import sgtd from "@/assets/sgtd.png.asset.json";

interface Partner {
  name: string;
  src: string;
}

const partners: Partner[] = [
  { name: "CMA CGM", src: cmacgm.url },
  { name: "Maersk", src: maersk.url },
  { name: "MSC", src: msc.url },
  { name: "SGS", src: sgs.url },
  { name: "DP World — Djibouti", src: dpcs.url },
  { name: "Ethio-Djibouti Railway", src: edr.url },
  { name: "SGTD Doraleh Terminal", src: sgtd.url },
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
  return (
    <img
      src={partner.src}
      alt={`${partner.name} logo`}
      className="h-full w-full object-contain p-4 grayscale transition duration-300 group-hover:grayscale-0"
      loading="lazy"
    />
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

        <div className="relative mt-12 overflow-hidden rounded-2xl border border-border bg-white py-4">
          {/* Fade masks */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent" />

          <div className="flex w-max animate-marquee items-center gap-8 px-4">
            {marqueePartners.map((p, i) => (
              <div
                key={`${p.name}-${i}`}
                className="group flex h-32 w-56 shrink-0 items-center justify-center rounded-2xl border border-border bg-white shadow-sm transition duration-300 hover:border-brand hover:shadow-md"
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
