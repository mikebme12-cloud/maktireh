import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { About } from "@/components/site/About";
import { Freezone } from "@/components/site/Freezone";
import { Process } from "@/components/site/Process";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { ChatWidget } from "@/components/site/ChatWidget";
import { FloatingContacts } from "@/components/site/FloatingContacts";
import { BookCall } from "@/components/site/BookCall";
import { Testimonials } from "@/components/site/Testimonials";
import { Partners } from "@/components/site/Partners";
import { QuoteRequest } from "@/components/site/QuoteRequest";
import { Faq } from "@/components/site/Faq";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Maktireh Transit — Djibouti Freezone Logistics" },
      { name: "description", content: "Freight forwarding, container handling and warehousing at the Djibouti Freezone. Serving the Djibouti–Ethiopia corridor." },
      { property: "og:title", content: "Maktireh Transit — Djibouti Freezone Logistics" },
      { property: "og:description", content: "Container handling, customs and freezone warehousing at the Port of Djibouti." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Freezone />
        <BookCall />
        <Testimonials />
        <Partners />
        <QuoteRequest />
        <Faq />
        <Process />
        <Contact />
      </main>
      <Footer />
      <FloatingContacts />
      <ChatWidget />
    </div>
  );
}
