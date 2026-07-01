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
            <span className="h-2 w-2 animate-blink-glow rounded-full bg-brand-glow" /> Port Operations &amp; Multimodal Transit
          </div>
          <h1 className="mt-6 font-[Sora] text-5xl font-extrabold leading-[1.05] text-white md:text-6xl">
            Djibouti to Ethiopia <br />
            <span className="text-brand-glow">Logistics &amp; Clearance</span>
          </h1>
          <p className="mt-6 max-w-lg text-base text-white/75 md:text-lg">
            Maktireh Transit handles your cargo end-to-end — port operations at Djibouti, customs clearance,
            and multimodal transit inland through our trusted network of Ethiopian local forwarders.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-brand-glow px-6 py-3 font-semibold text-brand-deep shadow-[var(--shadow-glow)] transition hover:scale-105">
              Discover more <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-brand-glow bg-brand-glow/10 px-6 py-3 font-semibold text-brand-glow transition hover:bg-brand-glow hover:text-brand-deep"
            >
              <span className="pointer-events-none absolute inset-0 -translate-x-full skew-x-[-20deg] bg-white/30 blur-sm animate-shine" />
              <span className="relative flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-brand-glow animate-pulse-ring" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand-glow" />
                </span>
                Get a Quote
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
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