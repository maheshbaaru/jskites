import { createFileRoute } from "@tanstack/react-router";
import { MapPin, MessageCircle, Navigation, Star } from "lucide-react";
import { SiteNav } from "@/components/site-nav";
import { ADDRESS, DIRECTIONS, WA_LINK, onWhatsAppClick } from "@/lib/shop";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Customer Reviews – JS Kite Shop, Vanasthalipuram" },
      { name: "description", content: "Rated 5.0 by 194 customers on Google. Read what kite lovers say about JS Kite Shop in Vanasthalipuram, Hyderabad." },
      { property: "og:title", content: "Customer Reviews – JS Kite Shop" },
      { property: "og:description", content: "Rated 5.0 ★ by 194 customers on Google." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Reviews,
});

function Stars({ n = 5, size = "h-5 w-5" }: { n?: number; size?: string }) {
  return <div className="flex gap-1">{Array.from({ length: n }).map((_, i) => <Star key={i} className={`${size} fill-accent text-accent`} />)}</div>;
}

function Reviews() {
  return (
    <main>
      <SiteNav />
      <section className="bg-festive py-16 text-center text-primary-foreground">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="text-5xl font-extrabold md:text-6xl">Customer Reviews</h1>
          <div className="mt-6 flex flex-col items-center gap-2">
            <span className="text-7xl font-extrabold">5.0</span>
            <Stars size="h-7 w-7" />
            <p className="mt-1 text-lg font-bold">194 reviews on Google</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16">
        <blockquote className="rounded-2xl border bg-card p-8 shadow-lg">
          <Stars />
          <p className="mt-4 text-lg leading-relaxed">
            "Excellent experience at JS Kite Shop! They have a wide variety of kites, manja, and accessories with great quality and reasonable prices. The staff is friendly."
          </p>
          <footer className="mt-4 text-sm font-bold text-muted-foreground">— Srr Fireworks, Google review</footer>
        </blockquote>
        <p className="mt-6 text-sm text-muted-foreground">
          More reviews coming soon — we only show real ones from our Google listing.
        </p>

        <div className="mt-10 rounded-2xl bg-muted p-8 text-center">
          <h2 className="text-3xl font-extrabold">Flown a kite from us?</h2>
          <p className="mt-2 text-muted-foreground">Tell us how it went — we love hearing from our customers.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" onClick={onWhatsAppClick}
              className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3 font-bold text-whatsapp-foreground shadow-lg transition-transform hover:-translate-y-0.5">
              <MessageCircle className="h-5 w-5" /> Share feedback on WhatsApp
            </a>
            <a href={DIRECTIONS} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-bold text-primary-foreground shadow-lg transition-transform hover:-translate-y-0.5">
              <Navigation className="h-5 w-5" /> Visit the shop
            </a>
          </div>
          <p className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" /> {ADDRESS}
          </p>
        </div>
      </section>
    </main>
  );
}
