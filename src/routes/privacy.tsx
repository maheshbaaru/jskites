import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { SiteNav, SiteFooter } from "@/components/site-nav";
import { PHONE_DISPLAY, WA_LINK, onWhatsAppClick } from "@/lib/shop";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy – JS Kite Shop, Vanasthalipuram, Hyderabad" },
      { name: "description", content: "How JS Kite Shop handles your information when you visit our website or contact us on WhatsApp." },
      { property: "og:title", content: "Privacy Policy – JS Kite Shop" },
      { property: "og:description", content: "How JS Kite Shop handles your information." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <main>
      <SiteNav />
      <section className="bg-festive py-16 text-center text-primary-foreground">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="text-5xl font-extrabold md:text-6xl">Privacy Policy</h1>
          <p className="mt-4 text-lg">Last updated: November 2026</p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl space-y-8 px-6 py-16 text-lg leading-relaxed">
        <div>
          <h2 className="text-3xl font-extrabold">What we collect</h2>
          <p className="mt-3">
            JS Kite Shop's website does not ask you to create an account or fill in forms. If you contact us
            on WhatsApp or by phone, we receive whatever you share with us there — usually your name, phone
            number and message — and we use it only to answer you and complete your order.
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-extrabold">Analytics</h2>
          <p className="mt-3">
            We may use Google Analytics to understand how visitors use this website — for example which pages
            are visited and for how long. This information is collected in an aggregated, anonymous form and
            is used only to improve the website. Google Analytics may set cookies in your browser for this
            purpose; you can block or delete cookies in your browser settings at any time.
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-extrabold">Third-party services</h2>
          <p className="mt-3">
            This website links to WhatsApp and Google Maps. When you use those services, their own privacy
            policies apply.
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-extrabold">What we never do</h2>
          <p className="mt-3">
            We never sell or rent your personal information to anyone, and we never send you marketing
            messages you didn't ask for.
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-extrabold">Questions?</h2>
          <p className="mt-3">
            Message us on WhatsApp at {PHONE_DISPLAY} and we'll be happy to explain anything.
          </p>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" onClick={onWhatsAppClick}
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3 font-bold text-whatsapp-foreground shadow-lg transition-transform hover:-translate-y-0.5">
            <MessageCircle className="h-5 w-5" /> WhatsApp us
          </a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
