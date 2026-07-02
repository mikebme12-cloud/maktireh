import { Calendar, MessageCircle, Phone, Mail, Clock } from "lucide-react";
import fanuel from "@/assets/fanuel.jpg.asset.json";

const WHATSAPP = `https://wa.me/25377231283?text=${encodeURIComponent(
  "Hi Fanuel, I'd like to book a call about my cargo."
)}`;

export function BookCall() {
  return (
    <section id="book" className="relative overflow-hidden bg-background py-24">
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full opacity-20 blur-3xl" style={{ background: "var(--brand)" }} />
      <div className="mx-auto grid max-w-7xl gap-12 px-4 md:grid-cols-2 md:items-center md:px-8">
        <div className="relative">
          <div className="relative overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-brand)]">
            <img src={fanuel.url} alt="Fanuel Teklu — Maktireh Transit" className="h-[520px] w-full object-cover" loading="lazy" width={800} height={800} />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-deep/90 via-brand-deep/40 to-transparent p-6 text-white">
              <div className="font-[Sora] text-2xl font-bold">Fanuel Teklu</div>
              <div className="text-sm text-brand-glow">Operations Lead • Maktireh Transit</div>
            </div>
          </div>
          <div className="pointer-events-none absolute -right-4 top-6 rounded-full bg-brand-glow px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-deep shadow-[var(--shadow-glow)]">
            <span className="mr-1 inline-block h-2 w-2 animate-blink-glow rounded-full bg-brand-deep" /> Available now
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand">Book a call</p>
          <h2 className="mt-3 font-[Sora] text-4xl font-bold text-foreground md:text-5xl">
            Talk directly to <span className="text-brand">Fanuel Teklu</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            Get straight answers on rates, transit time and clearance. Book a slot via WhatsApp — Fanuel replies
            personally and confirms your call within minutes during business hours.
          </p>

          <ul className="mt-6 grid gap-3 text-sm text-foreground">
            <li className="flex items-center gap-3"><Clock className="h-4 w-4 text-brand" /> Sun–Thu, 8:00 – 18:00 (Djibouti time)</li>
            <li className="flex items-center gap-3"><Phone className="h-4 w-4 text-brand" /> +253 77 231 283</li>
            <li className="flex items-center gap-3"><Mail className="h-4 w-4 text-brand" /> Micky@maktireh.com</li>
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-[#25D366] px-6 py-3 font-semibold text-white shadow-lg transition hover:scale-105"
            >
              <span className="pointer-events-none absolute inset-0 -translate-x-full bg-white/30 blur-md transition-transform duration-700 group-hover:translate-x-full" />
              <MessageCircle className="relative h-4 w-4" />
              <span className="relative">Book via WhatsApp</span>
            </a>
            <a href="tel:+25377231283" className="inline-flex items-center gap-2 rounded-full border border-brand px-6 py-3 font-semibold text-brand transition hover:bg-brand hover:text-brand-foreground">
              <Calendar className="h-4 w-4" /> Call now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}