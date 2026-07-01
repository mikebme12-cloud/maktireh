import freezone1 from "@/assets/freezone1.jpg.asset.json";
import freezone2 from "@/assets/freezone2.jpg.asset.json";
import freezone3 from "@/assets/freezone3.jpg.asset.json";

export function Freezone() {
  return (
    <section id="freezone" className="relative overflow-hidden py-24 text-white" style={{ background: "var(--gradient-hero)" }}>
      <div className="pointer-events-none absolute right-0 top-10 h-72 w-72 rounded-full opacity-20 blur-3xl" style={{ background: "var(--brand-glow)" }} />
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid gap-10 md:grid-cols-2 md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-glow">Our Facility</p>
            <h2 className="mt-3 font-[Sora] text-4xl font-bold md:text-5xl">
              Inside the <span className="text-brand-glow">Djibouti Freezone</span>
            </h2>
          </div>
          <p className="text-white/70">
            These are real photos from our operating yard in the Djibouti Freezone — containers stacked, trailers loaded, trucks
            moving cargo between the port and inland destinations every day.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          <figure className="group overflow-hidden rounded-2xl border border-white/10">
            <img src={freezone1.url} alt="Container yard at Maktireh Transit Djibouti Freezone" className="h-72 w-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" />
          </figure>
          <figure className="group overflow-hidden rounded-2xl border border-white/10 md:mt-10">
            <img src={freezone2.url} alt="Warehouse and trailer bay at the freezone" className="h-72 w-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" />
          </figure>
          <figure className="group overflow-hidden rounded-2xl border border-white/10">
            <img src={freezone3.url} alt="Heavy truck and stacked containers in the yard" className="h-72 w-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" />
          </figure>
        </div>

        <div className="mt-12 grid gap-6 rounded-2xl border border-white/10 bg-white/5 p-8 md:grid-cols-4">
          {[
            { k: "1800+", v: "Successful deliveries" },
            { k: "24/7", v: "Yard operations" },
            { k: "20/40ft", v: "Containers handled" },
            { k: "DJ ↔ ET", v: "Corridor coverage" },
          ].map((s) => (
            <div key={s.v}>
              <div className="font-[Sora] text-3xl font-bold text-brand-glow">{s.k}</div>
              <div className="mt-1 text-sm text-white/70">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}