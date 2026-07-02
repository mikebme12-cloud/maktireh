import { useState } from "react";
import { Search, Ship } from "lucide-react";

export function TrackShipment() {
  const [value, setValue] = useState("");
  const [status, setStatus] = useState<null | { code: string; stage: string; eta: string; location: string }>(null);
  const [loading, setLoading] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!value.trim()) return;
    setLoading(true);
    setStatus(null);
    setTimeout(() => {
      // Simulated realistic tracking response
      const stages = [
        { stage: "Vessel arrived — Port of Djibouti", location: "Djibouti Container Terminal", eta: "Clearance in 24–48h" },
        { stage: "Customs clearance in progress", location: "Djibouti Customs", eta: "Release expected today" },
        { stage: "On transit — Djibouti → Ethiopia corridor", location: "Galafi border crossing", eta: "Arriving Addis in 36h" },
        { stage: "Delivered to consignee", location: "Addis Ababa dry port", eta: "Completed" },
      ];
      const pick = stages[Math.floor(Math.random() * stages.length)];
      setStatus({ code: value.toUpperCase(), ...pick });
      setLoading(false);
    }, 900);
  }

  return (
    <section id="track" className="relative z-10 -mt-14 px-4 pb-4 md:-mt-20 md:px-8">
      <div className="mx-auto max-w-4xl rounded-3xl border border-brand-glow/30 bg-white p-6 shadow-[var(--shadow-brand)] md:p-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand/10 text-brand">
            <Ship className="h-5 w-5" />
          </div>
          <div>
            <h2 className="font-[Sora] text-xl font-bold text-foreground md:text-2xl">Track Your Shipment</h2>
            <p className="text-xs text-muted-foreground">Real-time status on your container, B/L or booking</p>
          </div>
        </div>
        <form onSubmit={onSubmit} className="mt-5 flex flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Enter Container, B/L, or Booking Number..."
              className="h-12 w-full rounded-full border border-border bg-secondary/50 pl-10 pr-4 text-sm text-foreground outline-none transition focus:border-brand focus:bg-white"
              aria-label="Tracking number"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="group relative inline-flex h-12 items-center justify-center gap-2 overflow-hidden rounded-full bg-brand px-8 font-semibold text-brand-foreground shadow-[var(--shadow-brand)] transition hover:scale-[1.02] disabled:opacity-70"
          >
            <span className="pointer-events-none absolute inset-0 -translate-x-full bg-white/30 blur-md transition-transform duration-700 group-hover:translate-x-full" />
            <span className="relative">{loading ? "Tracking..." : "Track Cargo"}</span>
          </button>
        </form>

        {status && (
          <div className="mt-5 rounded-2xl border border-brand/20 bg-secondary/60 p-5 animate-fade-in">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="font-[Sora] text-sm font-semibold text-brand-deep">Ref: {status.code}</div>
              <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-3 py-1 text-xs font-medium text-brand">
                <span className="h-2 w-2 animate-blink-glow rounded-full bg-brand-glow" /> Live
              </span>
            </div>
            <div className="mt-2 font-[Sora] text-lg font-bold text-foreground">{status.stage}</div>
            <div className="mt-1 text-sm text-muted-foreground">{status.location} • {status.eta}</div>
          </div>
        )}
      </div>
    </section>
  );
}