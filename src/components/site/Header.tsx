import { Menu, Phone, ChevronDown, Sparkles } from "lucide-react";
import { useState } from "react";
import logoAsset from "@/assets/logo.png.asset.json";

// Hover-to-open menu items (primary nav)
const hoverNav = [
  { label: "Services", href: "#services" },
  { label: "Operations", href: "#freezone" },
  { label: "About", href: "#about" },
];

// Click-only items (stable, no hover-dropdown)
const clickNav = [
  { label: "Home", href: "#top" },
  { label: "Track", href: "#track" },
  { label: "Book a Call", href: "#book" },
  { label: "Contact", href: "#contact" },
];

const companyLinks = [
  { label: "About Maktireh", href: "#about", desc: "Djibouti–Ethiopia corridor specialists" },
  { label: "Port Operations", href: "#freezone", desc: "Freezone handling & storage" },
  { label: "Our Services", href: "#services", desc: "Freight, clearance, transit" },
  { label: "Track Shipment", href: "#track", desc: "Live container tracking" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-brand-deep/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        <a href="#top" className="flex items-center gap-3">
          <img src={logoAsset.url} alt="Maktireh Transit" className="h-10 w-10 rounded bg-white/5 p-0.5" />
          <div className="leading-tight">
            <div className="font-[Sora] text-lg font-bold text-white">Maktireh Transit</div>
            <div className="text-[10px] uppercase tracking-widest text-brand-glow">Port Operations &amp; Multimodal Transit</div>
          </div>
        </a>
        <nav className="hidden items-center gap-7 md:flex">
          <a href="#top" className="text-sm font-medium text-white/80 transition hover:text-brand-glow">Home</a>
          <a href="#track" className="text-sm font-medium text-white/80 transition hover:text-brand-glow">Track</a>

          {/* Company mega-menu — hover-to-open */}
          <div className="group relative">
            <button
              type="button"
              className="inline-flex items-center gap-1 text-sm font-medium text-white/80 transition hover:text-brand-glow"
            >
              Company <ChevronDown className="h-3.5 w-3.5 transition group-hover:rotate-180" />
            </button>
            <div className="invisible absolute left-1/2 top-full z-50 w-[640px] -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
              <div className="grid grid-cols-2 gap-4 rounded-2xl border border-white/10 bg-brand-deep/95 p-5 shadow-[var(--shadow-brand)] backdrop-blur-xl">
                <div className="space-y-1">
                  {companyLinks.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      className="block rounded-lg px-3 py-2 transition hover:bg-white/5"
                    >
                      <div className="text-sm font-semibold text-white">{l.label}</div>
                      <div className="text-xs text-white/60">{l.desc}</div>
                    </a>
                  ))}
                </div>
                {/* Isolated AI guide — pointer-events-none so hover cannot disturb it */}
                <div
                  className="pointer-events-none select-text rounded-xl border border-brand-glow/30 bg-white/[0.03] p-4"
                  aria-label="Maktireh AI Guide"
                >
                  <div className="mb-3 flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-brand-glow" />
                    <div className="font-[Sora] text-sm font-semibold tracking-wide text-white">Maktireh AI Guide</div>
                  </div>
                  <ol className="space-y-2.5">
                    {[
                      { t: "Select Transit Route", d: "Choose origin port and final inland destination." },
                      { t: "Input Load Dimensions", d: "Enter container size, cargo weight, and material class." },
                      { t: "Generate Instant Quote", d: "Receive verified freight rates and clearance estimates." },
                    ].map((s, i) => (
                      <li key={s.t} className="flex gap-3">
                        <span className="font-[Sora] text-base font-bold leading-6 text-brand-glow">{i + 1}.</span>
                        <div className="leading-tight">
                          <div className="text-xs font-semibold text-white">{s.t}</div>
                          <div className="text-[11px] text-white/60">{s.d}</div>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <a href="#services" className="text-sm font-medium text-white/80 transition hover:text-brand-glow">Services</a>
          <a href="#freezone" className="text-sm font-medium text-white/80 transition hover:text-brand-glow">Operations</a>
          <a href="#about" className="text-sm font-medium text-white/80 transition hover:text-brand-glow">About</a>

          {/* Transactional — click only, no hover dropdown */}
          <a href="#book" className="text-sm font-medium text-white/80 transition hover:text-brand-glow">Book a Call</a>
          <a href="#contact" className="text-sm font-medium text-white/80 transition hover:text-brand-glow">Contact</a>
        </nav>
        <a
          href="tel:+25377231283"
          className="group relative hidden items-center gap-2 overflow-hidden rounded-full bg-brand-glow px-5 py-2 text-sm font-semibold text-brand-deep shadow-[var(--shadow-glow)] transition hover:scale-105 md:inline-flex"
        >
          <span className="absolute inset-0 -translate-x-full bg-white/40 blur-md transition-transform duration-700 group-hover:translate-x-full" />
          <Phone className="h-4 w-4 animate-bounce-soft relative" /> <span className="relative">Get a Quote</span>
        </a>
        <button aria-label="Menu" onClick={() => setOpen((v) => !v)} className="rounded p-2 text-white md:hidden">
          <Menu />
        </button>
      </div>
      {open && (
        <div className="border-t border-white/10 bg-brand-deep md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4">
            {[...clickNav, ...hoverNav].map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="text-white/80">
                {n.label}
              </a>
            ))}
            <a href="tel:+25377231283" className="mt-2 rounded-full bg-brand-glow px-4 py-2 text-center font-semibold text-brand-deep">
              Call +253 77 231 283
            </a>
          </div>
        </div>
      )}
    </header>
  );
}