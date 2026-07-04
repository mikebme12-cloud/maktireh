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

const ongoingTalks = [
  { label: "Panel: Modern Logistics in Djibouti", href: "#about" },
  { label: "Talk: Horn of Africa Trade Dynamics", href: "#about" },
  { label: "Briefing: Corridor Digitalization 2026", href: "#about" },
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
              Company
              <ChevronDown className="h-3.5 w-3.5 transition-transform duration-300 ease-out group-hover:rotate-180" />
            </button>
            <div className="invisible absolute left-1/2 top-full z-50 w-[880px] max-w-[92vw] -translate-x-1/2 translate-y-1 pt-3 opacity-0 transition-all duration-300 ease-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              <div className="grid grid-cols-4 gap-5 rounded-2xl border border-slate-700/50 bg-slate-900/90 p-6 shadow-2xl backdrop-blur-md">
                {/* Zone A — Our Purpose */}
                <div>
                  <div className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-400">Our Purpose</div>
                  <div className="space-y-3">
                    <div>
                      <div className="text-xs font-semibold text-white">Mission</div>
                      <p className="text-xs leading-snug text-slate-400">To deliver seamless, reliable multimodal logistics across East Africa.</p>
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white">Vision</div>
                      <p className="text-xs leading-snug text-slate-400">To be the premier digital gateway for regional trade.</p>
                    </div>
                  </div>
                </div>

                {/* Zone B — Leadership Insights */}
                <div>
                  <div className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-400">Leadership Insights</div>
                  <div className="space-y-3">
                    <div>
                      <div className="text-xs font-semibold text-white">CEO Message</div>
                      <p className="text-xs leading-snug text-slate-400">"Driving regional growth through structural innovation."</p>
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white">Managing Director</div>
                      <p className="text-xs leading-snug text-slate-400">"Ensuring operational excellence across every transit corridor."</p>
                    </div>
                  </div>
                </div>

                {/* Zone C — Ongoing Talks */}
                <div>
                  <div className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-400">Ongoing Talks</div>
                  <ul className="space-y-2">
                    {ongoingTalks.map((t) => (
                      <li key={t.label}>
                        <a href={t.href} className="group/link flex gap-2 text-xs leading-snug text-slate-300 transition hover:text-emerald-400">
                          <span className="text-emerald-400">•</span>
                          <span className="group-hover/link:underline">{t.label}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Isolated AI guide */}
                <div
                  className="pointer-events-none select-text rounded-xl border border-emerald-500/30 bg-slate-950/60 p-4"
                  aria-label="Maktireh AI Guide"
                >
                  <div className="mb-3 flex items-center gap-2">
                    <Sparkles className="h-3.5 w-3.5 text-emerald-400" />
                    <div className="font-[Sora] text-xs font-semibold tracking-wide text-white">Maktireh AI Guide</div>
                  </div>
                  <ol className="space-y-2">
                    {[
                      { t: "Select Transit Route", d: "Choose origin port and inland destination." },
                      { t: "Input Load Dimensions", d: "Container size, weight, material class." },
                      { t: "Generate Instant Quote", d: "Verified rates and clearance estimates." },
                    ].map((s, i) => (
                      <li key={s.t} className="flex gap-2">
                        <span className="font-[Sora] text-sm font-bold leading-5 text-emerald-400">{i + 1}.</span>
                        <div className="leading-tight">
                          <div className="text-[11px] font-semibold text-white">{s.t}</div>
                          <div className="text-[10px] text-slate-400">{s.d}</div>
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