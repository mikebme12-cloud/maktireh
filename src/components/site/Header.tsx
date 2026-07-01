import { Menu, Phone } from "lucide-react";
import { useState } from "react";
import logoAsset from "@/assets/logo.png.asset.json";

const nav = [
  { label: "Home", href: "#top" },
  { label: "Services", href: "#services" },
  { label: "Freezone", href: "#freezone" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
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
            <div className="text-[10px] uppercase tracking-widest text-brand-glow">Djibouti Freezone</div>
          </div>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="text-sm font-medium text-white/80 transition hover:text-brand-glow">
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href="tel:+25377231283"
          className="hidden items-center gap-2 rounded-full bg-brand-glow px-5 py-2 text-sm font-semibold text-brand-deep shadow-[var(--shadow-glow)] transition hover:scale-105 md:inline-flex"
        >
          <Phone className="h-4 w-4" /> Get a Quote
        </a>
        <button aria-label="Menu" onClick={() => setOpen((v) => !v)} className="rounded p-2 text-white md:hidden">
          <Menu />
        </button>
      </div>
      {open && (
        <div className="border-t border-white/10 bg-brand-deep md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4">
            {nav.map((n) => (
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