declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (opts: { url: string }) => void;
    };
  }
}

export const CALENDLY_URL = "https://calendly.com/mikebme12";

export function openCalendly(e?: { preventDefault?: () => void }) {
  e?.preventDefault?.();
  if (typeof window !== "undefined" && window.Calendly) {
    window.Calendly.initPopupWidget({ url: CALENDLY_URL });
  } else if (typeof window !== "undefined") {
    window.open(CALENDLY_URL, "_blank", "noopener,noreferrer");
  }
  return false;
}