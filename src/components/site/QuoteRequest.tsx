import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export function QuoteRequest() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ route: "", weight: "", email: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const body = `Freight Quote Request%0A%0ARoute: ${form.route}%0AWeight: ${form.weight}%0AEmail: ${form.email}`;
    window.location.href = `mailto:Micky@maktireh.com?subject=Freight%20Quote%20Request&body=${body}`;
    setSent(true);
  }

  return (
    <section id="quote" className="bg-background py-24">
      <div className="mx-auto max-w-3xl px-4 md:px-8">
        <div className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-brand)] md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand">Instant Quote</p>
          <h2 className="mt-3 font-[Sora] text-3xl font-bold text-foreground md:text-4xl">
            Request a Freight Quote
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">Share a few details — our team responds within business hours with verified rates and transit time.</p>

          <form onSubmit={handleSubmit} className="mt-8 grid gap-4">
            <div>
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-foreground">Cargo Origin / Destination</label>
              <input
                required
                value={form.route}
                onChange={(e) => setForm({ ...form, route: e.target.value })}
                placeholder="e.g. Shanghai → Addis Ababa via Djibouti"
                className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-foreground">Weight / Container Size</label>
              <input
                required
                value={form.weight}
                onChange={(e) => setForm({ ...form, weight: e.target.value })}
                placeholder="e.g. 1x40ft HC, 22 tons"
                className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-foreground">Contact Email</label>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@company.com"
                className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
              />
            </div>
            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-3.5 font-semibold text-white shadow-lg transition hover:scale-[1.02] hover:bg-emerald-600"
            >
              {sent ? <CheckCircle2 className="h-4 w-4" /> : <Send className="h-4 w-4" />}
              {sent ? "Request sent — check your email" : "Submit Quote Request"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}