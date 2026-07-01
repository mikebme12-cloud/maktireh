import { createServerFn } from "@tanstack/react-start";
import { generateText } from "ai";
import { z } from "zod";
import { createLovableAiGatewayProvider } from "./ai-gateway.server";

const MessageSchema = z.object({
  role: z.enum(["user", "assistant"]),
  content: z.string(),
});

const InputSchema = z.object({
  messages: z.array(MessageSchema).min(1).max(30),
});

const SYSTEM_PROMPT = `You are Maktireh Assistant, the AI concierge for Maktireh Transit — a logistics and freight-forwarding company operating at the Djibouti Freezone.

Company facts:
- Name: Maktireh Transit
- Location: Djibouti Freezone, Republic of Djibouti (Port of Djibouti gateway to the Horn of Africa and Ethiopia).
- Services: freight forwarding, container storage & handling, customs clearance, warehousing in the free zone, road transport (Djibouti–Ethiopia corridor), import/export documentation.
- Contact: Micky@maktireh.com, +253 77 231 283
- Book a call: Fanuel Sebsibe on Calendly.

Style: be concise, warm, and professional. Answer questions about services, transit times, corridor logistics, containers, freezone benefits, and next steps. If asked something outside logistics, gently steer back and offer to connect them with Fanuel Sebsibe. Never invent prices — say a quote will be provided after contact. Reply in the user's language (English, French, or Amharic) when possible.`;

export const chatWithAssistant = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => InputSchema.parse(input))
  .handler(async ({ data }) => {
    const key = process.env.LOVABLE_API_KEY;
    if (!key) {
      return { reply: "AI service is not configured yet. Please email Micky@maktireh.com." };
    }

    const gateway = createLovableAiGatewayProvider(key);

    try {
      const { text } = await generateText({
        model: gateway("google/gemini-2.5-flash"),
        system: SYSTEM_PROMPT,
        messages: data.messages,
        maxRetries: 1,
      });
      return { reply: text };
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Unknown error";
      if (message.includes("429")) {
        return { reply: "We're getting a lot of requests right now — please try again in a moment." };
      }
      if (message.includes("402")) {
        return { reply: "AI credits are exhausted. Please email Micky@maktireh.com to reach us directly." };
      }
      return { reply: "Sorry, I couldn't respond right now. Please email Micky@maktireh.com or call +253 77 231 283." };
    }
  });