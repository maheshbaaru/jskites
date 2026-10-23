import { createFileRoute } from "@tanstack/react-router";
import { Clock, MapPin, MessageCircle, Navigation, Phone } from "lucide-react";
import { SiteNav } from "@/components/site-nav";
import {
  ADDRESS,
  DIRECTIONS,
  MAP_QUERY,
  PHONE_DISPLAY,
  WA_LINK,
  WHATSAPP,
  onWhatsAppClick,
} from "@/lib/shop";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us – JS Kite Shop, Vanasthalipuram, Hyderabad" },
      { name: "description", content: "Call +91 99897 14335, chat on WhatsApp or get directions to JS Kite Shop on Ravindra Bharathi School Road, Vanasthalipuram, Hyderabad." },
      { property: "og:title", content: "Contact Us – JS Kite Shop" },
      { property: "og:description", content: "Call, WhatsApp or get directions to JS Kite Shop in Vanasthalipuram, Hyderabad." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <main>
      <SiteNav />
      <section className="bg-festive py-16 text-center text-primary-foreground">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="text-5xl font-extrabold md:text-6xl">Contact Us</h1>
          <p className="mt-4 text-lg">Call, WhatsApp or just drop by — we're happy to help you pick the right kite.</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <ul className="space-y-5 text-lg">
              <li className="flex gap-3"><MapPin className="mt-1 h-6 w-6 shrink-0 text-primary" />{ADDRESS}</li>
              <li className="flex gap-3"><Clock className="mt-1 h-6 w-6 shrink-0 text-primary" />Open daily · late hours in festival season</li>
              <li className="flex gap-3"><Phone className="mt-1 h-6 w-6 shrink-0 text-primary" /><a href={`tel:+${WHATSAPP}`} className="font-bold underline">{PHONE_DISPLAY}</a></li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" onClick={onWhatsAppClick}
                className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3 font-bold text-whatsapp-foreground shadow-lg transition-transform hover:-translate-y-0.5">
                <MessageCircle className="h-5 w-5" /> WhatsApp us
              </a>
              <a href={DIRECTIONS} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-bold text-primary-foreground shadow-lg transition-transform hover:-translate-y-0.5">
                <Navigation className="h-5 w-5" /> Get Directions
              </a>
            </div>
          </div>
          <iframe title="JS Kite Shop location" loading="lazy"
            src={`https://www.google.com/maps?q=${MAP_QUERY}&output=embed`}
            className="h-96 w-full rounded-2xl border shadow-lg" />
        </div>
      </section>

      <a href={WA_LINK} target="_blank" rel="noopener noreferrer" onClick={onWhatsAppClick} aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-2xl transition-transform hover:scale-110">
        <MessageCircle className="h-7 w-7" />
      </a>

      <footer className="bg-festive py-8 text-center text-primary-foreground">
        © {new Date().getFullYear()} JS Kite Shop · Vanasthalipuram, Hyderabad
      </footer>
    </main>
  );
}
