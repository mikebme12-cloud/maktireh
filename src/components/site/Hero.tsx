import { ArrowRight, ShieldCheck } from "lucide-react";
import { PortScene } from "./PortScene";

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      <PortScene />
      {/* soft green glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full opacity-30 blur-3xl" style={{ background: "var(--brand-glow)" }} />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-24 md:grid-cols-2 md:px-8 md:py-32">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-glow/40 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-brand-glow">
            <span className="h-2 w-2 animate-blink-glow rounded-full bg-brand-glow" /> Fastest &amp; Secured
          </div>
          <h1 className="mt-6 font-[Sora] text-5xl font-extrabold leading-[1.05] text-white md:text-6xl">
            Djibouti Freezone <br />
            <span className="text-brand-glow">Logistics Solutions</span>
          </h1>
          <p className="mt-6 max-w-lg text-base text-white/75 md:text-lg">
            Maktireh Transit moves your cargo through the Port of Djibouti and across the Horn of Africa corridor —
            container handling, customs clearance, and freezone warehousing under one roof.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-brand-glow px-6 py-3 font-semibold text-brand-deep shadow-[var(--shadow-glow)] transition hover:scale-105">
              Discover more <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 font-semibold text-white transition hover:bg-white/10">
              Get a Quote
            </a>
          </div>
          <div className="mt-10 flex items-center gap-6 text-sm text-white/60">
            <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-brand-glow" /> Licensed transit operator</div>
            <div className="hidden md:block">•</div>
            <div className="hidden md:block">Port of Djibouti gateway</div>
          </div>
        </div>
        {/* Right column intentionally empty — animated PortScene fills the section */}
        <div />
      </div>
    </section>
  );
}