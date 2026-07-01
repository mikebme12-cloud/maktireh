import logoAsset from "@/assets/logo.png.asset.json";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-brand-deep text-white/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-4 md:px-8">
        <div>
          <div className="flex items-center gap-3">
            <img src={logoAsset.url} alt="Maktireh Transit" className="h-12 w-12 rounded bg-white/5 p-0.5" />
            <div className="font-[Sora] text-lg font-bold text-white">Maktireh Transit</div>
          </div>
          <p className="mt-4 text-sm text-white/60">
            Freight forwarding and freezone logistics based at the Port of Djibouti — serving Djibouti, Ethiopia and the wider Horn of Africa.
          </p>
        </div>

        <div>
          <div className="text-xs font-semibold uppercase tracking-widest text-brand-glow">Explore</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#services" className="hover:text-brand-glow">Services</a></li>
            <li><a href="#freezone" className="hover:text-brand-glow">Freezone</a></li>
            <li><a href="#about" className="hover:text-brand-glow">About us</a></li>
            <li><a href="#contact" className="hover:text-brand-glow">Contact</a></li>
          </ul>
        </div>

        <div>
          <div className="text-xs font-semibold uppercase tracking-widest text-brand-glow">Contact</div>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4 text-brand-glow" /> Micky@maktireh.com</li>
            <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 text-brand-glow" /> +253 77 231 283</li>
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-brand-glow" /> Djibouti Freezone</li>
          </ul>
        </div>

        <div>
          <div className="text-xs font-semibold uppercase tracking-widest text-brand-glow">Book a call</div>
          <p className="mt-4 text-sm text-white/60">Talk to Fanuel Sebsibe about your shipment.</p>
          <a href="https://calendly.com/fanuel-sebsibe" target="_blank" rel="noreferrer" className="mt-4 inline-flex rounded-full bg-brand-glow px-5 py-2 text-sm font-semibold text-brand-deep">
            Open Calendly
          </a>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-white/50 md:flex-row md:px-8">
          <div>© {new Date().getFullYear()} Maktireh Transit. All rights reserved.</div>
          <div>Djibouti Freezone — Republic of Djibouti</div>
        </div>
      </div>
    </footer>
  );
}