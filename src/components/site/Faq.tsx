import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How long does transit from Djibouti Port to Addis Ababa take?",
    a: "Standard road transit takes 3–5 days depending on customs processing, corridor conditions and cargo type. Priority lanes can complete in 48–72 hours.",
  },
  {
    q: "What documents do I need for customs clearance in Djibouti?",
    a: "Commercial invoice, packing list, bill of lading, certificate of origin, and any regulatory permits for restricted goods. Our team handles the full filing on your behalf.",
  },
  {
    q: "Do you handle both FCL and LCL container shipments?",
    a: "Yes — Maktireh Transit manages Full Container Load (FCL), Less-than-Container Load (LCL) consolidation, and break-bulk cargo across the Djibouti–Ethiopia corridor.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="bg-secondary/40 py-24">
      <div className="mx-auto max-w-3xl px-4 md:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand">FAQ</p>
          <h2 className="mt-3 font-[Sora] text-4xl font-bold text-foreground md:text-5xl">
            Freight questions, <span className="text-brand">answered</span>
          </h2>
        </div>
        <div className="mt-10 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-[Sora] text-base font-semibold text-foreground">{f.q}</span>
                  <ChevronDown className={`h-5 w-5 shrink-0 text-brand transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                </button>
                <div className={`grid transition-all duration-300 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}