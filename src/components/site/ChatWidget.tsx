import { useState, useRef, useEffect } from "react";
import { useServerFn } from "@tanstack/react-start";
import { MessageCircle, Send, X, Loader2 } from "lucide-react";
import { chatWithAssistant } from "@/lib/chat.functions";

type Msg = { role: "user" | "assistant"; content: string };

const INITIAL: Msg = {
  role: "assistant",
  content:
    "Hi — I'm the Maktireh Transit assistant. Ask me about container handling, transit to Ethiopia, freezone storage, or how to get a quote.",
};

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([INITIAL]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const send = useServerFn(chatWithAssistant);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed || loading) return;
    const next: Msg[] = [...messages, { role: "user", content: trimmed }];
    setMessages(next);
    setInput("");
    setLoading(true);
    try {
      const res = await send({ data: { messages: next } });
      setMessages((m) => [...m, { role: "assistant", content: res.reply }]);
    } catch {
      setMessages((m) => [...m, { role: "assistant", content: "Sorry, something went wrong. Please email Micky@maktireh.com." }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-brand px-5 py-3 font-semibold text-brand-foreground shadow-[var(--shadow-brand)] transition hover:scale-105"
          aria-label="Open chat"
        >
          <MessageCircle className="h-5 w-5" /> Chat with us
        </button>
      )}
      {open && (
        <div className="fixed bottom-6 right-6 z-50 flex h-[560px] w-[92vw] max-w-sm flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-brand)]">
          <div className="flex items-center justify-between border-b border-border bg-brand-deep px-4 py-3 text-white">
            <div>
              <div className="font-[Sora] text-sm font-semibold">Maktireh Assistant</div>
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-brand-glow">
                <span className="h-1.5 w-1.5 animate-blink-glow rounded-full bg-brand-glow" /> Online
              </div>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Close" className="rounded p-1 hover:bg-white/10">
              <X className="h-4 w-4" />
            </button>
          </div>
          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto bg-secondary/40 p-4">
            {messages.map((m, i) => (
              <div key={i} className={m.role === "user" ? "flex justify-end" : "flex justify-start"}>
                <div
                  className={
                    m.role === "user"
                      ? "max-w-[85%] rounded-2xl rounded-br-sm bg-brand px-3 py-2 text-sm text-brand-foreground"
                      : "max-w-[85%] rounded-2xl rounded-bl-sm bg-card px-3 py-2 text-sm text-foreground shadow-sm"
                  }
                >
                  {m.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="rounded-2xl rounded-bl-sm bg-card px-3 py-2 text-sm text-muted-foreground shadow-sm">
                  <Loader2 className="h-4 w-4 animate-spin" />
                </div>
              </div>
            )}
          </div>
          <form onSubmit={handleSubmit} className="flex gap-2 border-t border-border bg-card p-3">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about services, transit, rates…"
              className="flex-1 rounded-full border border-input bg-background px-4 py-2 text-sm outline-none focus:border-brand"
            />
            <button
              type="submit"
              disabled={loading}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand text-brand-foreground disabled:opacity-50"
              aria-label="Send"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}