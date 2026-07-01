// Animated port scene: SVG cargo vessel, container being lifted, forklift, blinking green lights.
export function PortScene({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      {/* Blinking green beacons */}
      <div className="absolute left-[8%] top-[18%] h-3 w-3 rounded-full bg-brand-glow animate-blink-glow shadow-[0_0_24px_var(--brand-glow)]" />
      <div className="absolute left-[42%] top-[10%] h-2 w-2 rounded-full bg-brand-glow animate-blink-glow shadow-[0_0_18px_var(--brand-glow)]" style={{ animationDelay: "0.4s" }} />
      <div className="absolute right-[10%] top-[22%] h-3 w-3 rounded-full bg-brand-glow animate-blink-glow shadow-[0_0_24px_var(--brand-glow)]" style={{ animationDelay: "0.9s" }} />
      <div className="absolute right-[28%] top-[8%] h-1.5 w-1.5 rounded-full bg-brand-glow animate-blink-glow" style={{ animationDelay: "1.2s" }} />

      {/* Vessel drifting slowly across the horizon */}
      <div className="absolute bottom-[28%] left-0 right-0 h-24 animate-drift-right">
        <svg viewBox="0 0 320 90" className="h-full w-64 animate-vessel-sway" fill="none">
          {/* hull */}
          <path d="M10 60 L300 60 L280 82 L30 82 Z" fill="#0d3b3b" />
          {/* container stack */}
          <rect x="40" y="30" width="40" height="18" fill="#2f8f7a" />
          <rect x="82" y="30" width="40" height="18" fill="#c9a84c" />
          <rect x="124" y="30" width="40" height="18" fill="#8a3a2a" />
          <rect x="166" y="30" width="40" height="18" fill="#2f8f7a" />
          <rect x="208" y="30" width="40" height="18" fill="#c9a84c" />
          <rect x="60" y="12" width="40" height="18" fill="#8a3a2a" />
          <rect x="150" y="12" width="40" height="18" fill="#2f8f7a" />
          {/* bridge */}
          <rect x="240" y="16" width="30" height="42" fill="#124a4a" />
          <rect x="245" y="22" width="6" height="6" fill="#8ef0c8" />
          <rect x="255" y="22" width="6" height="6" fill="#8ef0c8" />
        </svg>
      </div>

      {/* Slow moving container on a trailer */}
      <div className="absolute bottom-[10%] left-0 right-0 h-16 animate-drift-left">
        <svg viewBox="0 0 240 60" className="ml-auto h-full w-56" fill="none">
          <rect x="20" y="10" width="140" height="30" fill="#8a3a2a" />
          <rect x="24" y="14" width="132" height="22" fill="none" stroke="#5a2418" strokeWidth="1" />
          {/* trailer bed */}
          <rect x="10" y="40" width="200" height="6" fill="#0d3b3b" />
          {/* cab */}
          <path d="M160 20 L200 20 L212 32 L212 46 L160 46 Z" fill="#124a4a" />
          <rect x="182" y="24" width="20" height="10" fill="#8ef0c8" opacity="0.7" />
          {/* wheels */}
          <circle cx="40" cy="50" r="6" fill="#0a0a0a" />
          <circle cx="60" cy="50" r="6" fill="#0a0a0a" />
          <circle cx="130" cy="50" r="6" fill="#0a0a0a" />
          <circle cx="150" cy="50" r="6" fill="#0a0a0a" />
          <circle cx="196" cy="50" r="6" fill="#0a0a0a" />
        </svg>
      </div>

      {/* Forklift lifting a container in the foreground-left */}
      <div className="absolute bottom-6 left-6 md:left-12">
        <div className="animate-forklift-bob">
          <svg viewBox="0 0 140 110" className="h-28 w-28 md:h-36 md:w-36">
            {/* mast */}
            <rect x="52" y="10" width="6" height="80" fill="#0d3b3b" />
            {/* lifted container */}
            <g className="animate-container-lift" style={{ transformOrigin: "60px 60px" }}>
              <rect x="20" y="50" width="60" height="26" fill="#2f8f7a" />
              <rect x="24" y="54" width="52" height="18" fill="none" stroke="#0d3b3b" strokeWidth="1" />
            </g>
            {/* body */}
            <rect x="60" y="60" width="50" height="26" fill="#c9a84c" />
            {/* cabin */}
            <path d="M78 40 L104 40 L108 60 L74 60 Z" fill="#124a4a" />
            <rect x="82" y="44" width="18" height="12" fill="#8ef0c8" opacity="0.8" />
            {/* wheels */}
            <circle cx="72" cy="92" r="8" fill="#0a0a0a" />
            <circle cx="102" cy="92" r="8" fill="#0a0a0a" />
          </svg>
        </div>
      </div>
    </div>
  );
}