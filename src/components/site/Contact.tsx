import { Mail, Phone, Calendar, MapPin } from "lucide-react";

const WHATSAPP_URL = `https://wa.me/25377231283?text=${encodeURIComponent(
  "Hi Fanuel, I'd like to book a call."
)}`;

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-24 text-white" style={{ background: "var(--gradient-hero)" }}>
      <div className="pointer-events-none absolute left-10 top-10 h-3 w-3 animate-blink-glow rounded-full bg-brand-glow shadow-[0_0_24px_var(--brand-glow)]" />
      <div className="pointer-events-none absolute right-10 bottom-10 h-3 w-3 animate-blink-glow rounded-full bg-brand-glow shadow-[0_0_24px_var(--brand-glow)]" style={{ animationDelay: "0.6s" }} />

      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-glow">Get in touch</p>
          <h2 className="mt-3 font-[Sora] text-4xl font-bold md:text-5xl">Ready to move your cargo?</h2>
          <p className="mt-4 text-white/70">
            Talk to Fanuel Teklu directly — book a call on WhatsApp or reach us by email or phone.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          <a href="mailto:Micky@maktireh.com" className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-brand-glow/60">
            <Mail className="h-6 w-6 text-brand-glow" />
            <div className="mt-4 text-xs uppercase tracking-widest text-white/50">Email</div>
            <div className="mt-1 font-[Sora] text-lg font-semibold">Micky@maktireh.com</div>
          </a>
          <a href="tel:+25377231283" className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-brand-glow/60">
            <Phone className="h-6 w-6 text-brand-glow" />
            <div className="mt-4 text-xs uppercase tracking-widest text-white/50">Phone</div>
            <div className="mt-1 font-[Sora] text-lg font-semibold">+253 77 231 283</div>
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-brand-glow/60">
            <Calendar className="h-6 w-6 text-brand-glow" />
            <div className="mt-4 text-xs uppercase tracking-widest text-white/50">Book a call</div>
            <div className="mt-1 font-[Sora] text-lg font-semibold">Fanuel Teklu · WhatsApp</div>
          </a>
        </div>

        <div className="mt-10 flex items-center justify-center gap-2 text-sm text-white/60">
          <MapPin className="h-4 w-4 text-brand-glow" /> Djibouti Freezone, Republic of Djibouti
        </div>
      </div>
    </section>
  );
}