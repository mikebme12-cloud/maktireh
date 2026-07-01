import { MessageCircle, Send } from "lucide-react";

const PHONE = "25377231283";
const WHATSAPP = `https://wa.me/${PHONE}?text=${encodeURIComponent(
  "Hello Maktireh Transit — I'd like to request a quote."
)}`;
const TELEGRAM = `https://t.me/+${PHONE}`;

export function FloatingContacts() {
  return (
    <div className="fixed bottom-24 right-6 z-40 flex flex-col items-end gap-3">
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-110"
      >
        <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-60 animate-pulse-ring" />
        <MessageCircle className="relative h-5 w-5" />
        <span className="pointer-events-none absolute right-14 whitespace-nowrap rounded-full bg-brand-deep px-3 py-1 text-xs font-medium text-white opacity-0 shadow transition group-hover:opacity-100">
          WhatsApp +253 77 231 283
        </span>
      </a>
      <a
        href={TELEGRAM}
        target="_blank"
        rel="noreferrer"
        aria-label="Message on Telegram"
        className="group relative inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#229ED9] text-white shadow-lg transition hover:scale-110"
      >
        <span className="absolute inline-flex h-full w-full rounded-full bg-[#229ED9] opacity-60 animate-pulse-ring" style={{ animationDelay: "0.4s" }} />
        <Send className="relative h-5 w-5" />
        <span className="pointer-events-none absolute right-14 whitespace-nowrap rounded-full bg-brand-deep px-3 py-1 text-xs font-medium text-white opacity-0 shadow transition group-hover:opacity-100">
          Telegram +253 77 231 283
        </span>
      </a>
    </div>
  );
}