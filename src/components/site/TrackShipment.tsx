import { useState } from "react";
import { Search, Ship, ExternalLink } from "lucide-react";

type TrackMode = "container" | "bl";

const CARRIERS: Record<string, { name: string; container: (n: string) => string; bl: (n: string) => string }> = {
  MSC: {
    name: "MSC",
    container: (n) => `https://www.msc.com/en/track-a-shipment?agencyPath=mscu&trackingNumber=${n}`,
    bl: (n) => `https://www.msc.com/en/track-a-shipment?agencyPath=mscu&trackingNumber=${n}`,
  },
  MAEU: {
    name: "Maersk",
    container: (n) => `https://www.maersk.com/tracking/${n}`,
    bl: (n) => `https://www.maersk.com/tracking/${n}`,
  },
  CMAU: {
    name: "CMA CGM",
    container: (n) => `https://www.cma-cgm.com/ebusiness/tracking/search?SearchBy=Container&Reference=${n}`,
    bl: (n) => `https://www.cma-cgm.com/ebusiness/tracking/search?SearchBy=BL&Reference=${n}`,
  },
};

function detectCarrier(input: string): { name: string; url: string } {
  const v = input.toUpperCase().trim();
  const prefix4 = v.slice(0, 4);
  const map: Record<string, keyof typeof CARRIERS> = {
    MSCU: "MSC", MEDU: "MSC", MSDU: "MSC",
    MAEU: "MAEU", MRKU: "MAEU", MSKU: "MAEU", MRSU: "MAEU",
    CMAU: "CMAU", CXDU: "CMAU", APHU: "CMAU",
  };
  const key = map[prefix4];
  if (key) {
    const c = CARRIERS[key];
    return { name: c.name, url: c.container(v) };
  }
  // Fallback: track-trace aggregator
  return {
    name: "Track-Trace",
    url: `https://www.track-trace.com/container?number=${encodeURIComponent(v)}`,
  };
}

export function TrackShipment() {
  const [mode, setMode] = useState<TrackMode>("container");
  const [value, setValue] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [redirect, setRedirect] = useState<{ name: string; url: string } | null>(null);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setRedirect(null);
    const v = value.trim().toUpperCase();
    if (!v) return setError("Please enter a tracking number.");
    if (mode === "container") {
      if (!/^[A-Z]{4}\d{7}$/.test(v))
        return setError("Container number must be 4 letters + 7 digits (e.g. MSCU1234567).");
    } else {
      if (v.length < 6 || v.length > 20)
        return setError("B/L number must be 6–20 characters.");
    }
    const target = detectCarrier(v);
    setRedirect(target);
    window.open(target.url, "_blank", "noopener,noreferrer");
  }

  const placeholder =
    mode === "container"
      ? "Enter 11-digit Container Number (e.g., MSCU1234567)"
      : "Enter Bill of Lading Number (e.g., MEDUAB123456)";

  return (
    <section id="track" className="relative z-10 -mt-14 px-4 pb-4 md:-mt-20 md:px-8">
      <div className="mx-auto max-w-4xl rounded-3xl border border-brand-glow/30 bg-white p-6 shadow-[var(--shadow-brand)] md:p-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand/10 text-brand">
              <Ship className="h-5 w-5" />
            </div>
            <div>
              <h2 className="font-[Sora] text-xl font-bold text-foreground md:text-2xl">Track Your Shipment</h2>
              <p className="text-xs text-muted-foreground">Redirects to the carrier's official tracking page</p>
            </div>
          </div>
          <div className="inline-flex rounded-full border border-border bg-secondary/60 p-1 text-xs font-semibold">
            {(["container", "bl"] as TrackMode[]).map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => { setMode(m); setError(null); setRedirect(null); }}
                className={`rounded-full px-4 py-1.5 transition ${mode === m ? "bg-brand text-brand-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`}
              >
                {m === "container" ? "Container No." : "B/L No."}
              </button>
            ))}
          </div>
        </div>
        <form onSubmit={onSubmit} className="mt-5 flex flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder={placeholder}
              className="h-12 w-full rounded-full border border-border bg-secondary/50 pl-10 pr-4 text-sm text-foreground outline-none transition focus:border-brand focus:bg-white"
              aria-label="Tracking number"
            />
          </div>
          <button
            type="submit"
            className="group relative inline-flex h-12 items-center justify-center gap-2 overflow-hidden rounded-full bg-brand px-8 font-semibold text-brand-foreground shadow-[var(--shadow-brand)] transition hover:scale-[1.02] disabled:opacity-70"
          >
            <span className="pointer-events-none absolute inset-0 -translate-x-full bg-white/30 blur-md transition-transform duration-700 group-hover:translate-x-full" />
            <span className="relative">Track Shipment</span>
          </button>
        </form>

        {error && (
          <div className="mt-4 rounded-xl border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive">
            {error}
          </div>
        )}
        {redirect && !error && (
          <div className="mt-5 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-brand/20 bg-secondary/60 p-5 animate-fade-in">
            <div>
              <div className="font-[Sora] text-sm font-semibold text-brand-deep">
                Opened {redirect.name} tracking in a new tab
              </div>
              <div className="mt-1 text-xs text-muted-foreground">If nothing happened, click the link below.</div>
            </div>
            <a
              href={redirect.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-4 py-2 text-xs font-semibold text-brand-foreground hover:opacity-90"
            >
              Open <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        )}
      </div>
    </section>
  );
}