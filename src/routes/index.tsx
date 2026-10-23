import { createFileRoute } from "@tanstack/react-router";
import { Clock, MapPin, MessageCircle, Navigation, Phone, Star } from "lucide-react";
import hero from "@/assets/hero.jpg";
import imgPaper from "@/assets/p-paper.jpg";
import imgManja from "@/assets/p-manja.jpg";
import imgReels from "@/assets/p-reels.jpg";
import imgKids from "@/assets/p-kids.jpg";
import imgCombos from "@/assets/p-combos.jpg";
import imgBulk from "@/assets/p-bulk.jpg";
import { SiteNav } from "@/components/site-nav";
import { FlyingKites } from "@/components/flying-kites";
import {
  ADDRESS,
  DIRECTIONS,
  MAP_QUERY,
  PHONE_DISPLAY,
  WA_LINK,
  WHATSAPP,
  onWhatsAppClick,
} from "@/lib/shop";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "JS Kite Shop – Kites & Manja in Vanasthalipuram, Hyderabad" },
      { name: "description", content: "Wide variety of kites, manja and accessories at fair prices. Rated 5.0 by 194 customers. Chat on WhatsApp or get directions." },
      { property: "og:title", content: "JS Kite Shop – Vanasthalipuram, Hyderabad" },
      { property: "og:description", content: "Kites, manja & accessories. Rated 5.0 ★ by 194 customers." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const products = [
  { name: "Paper Kites", desc: "Classic patang in every colour and size.", img: imgPaper },
  { name: "Manja & Thread", desc: "Strong, durable thread for long flights.", img: imgManja },
  { name: "Charkhi / Reels", desc: "Smooth wooden and plastic reels.", img: imgReels },
  { name: "Kids' Kites", desc: "Cartoon & plastic kites for little flyers.", img: imgKids },
  { name: "Festival Combos", desc: "Sankranti bundles at the best prices.", img: imgCombos },
  { name: "Bulk Orders", desc: "Wholesale rates for shops and events.", img: imgBulk },
];

function Index() {
  return (
    <main>
      <SiteNav />
      <section className="relative min-h-[85vh] overflow-hidden">
        <img src={hero} alt="Colourful kites over Hyderabad" width={1600} height={1008}
          className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-hero-overlay" />
        <FlyingKites />
        <div className="hero-content relative mx-auto flex min-h-[85vh] max-w-6xl flex-col justify-end px-6 pb-16 text-primary-foreground">
          <span className="mb-4 inline-flex w-fit items-center gap-1 rounded-full bg-card/90 px-4 py-1 text-sm font-bold text-foreground">
            <Star className="h-4 w-4 fill-accent text-accent" /> 5.0 · 194 Google reviews
          </span>
          <h1 className="text-6xl font-extrabold leading-none md:text-8xl">JS Kite Shop</h1>
          <p className="mt-4 max-w-xl text-lg md:text-xl">
            Kites, manja and everything you need to rule the sky — at fair prices, in Vanasthalipuram.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" onClick={onWhatsAppClick}
              className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3 font-bold text-whatsapp-foreground shadow-lg transition-transform hover:-translate-y-0.5">
              <MessageCircle className="h-5 w-5" /> Order on WhatsApp
            </a>
            <a href={DIRECTIONS} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-card/90 px-6 py-3 font-bold text-foreground shadow-lg transition-transform hover:-translate-y-0.5">
              <Navigation className="h-5 w-5" /> Get Directions
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-4xl font-extrabold md:text-5xl">What we <span className="text-festive">sell</span></h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <div key={p.name} className="product-card overflow-hidden rounded-2xl border bg-card shadow-sm">
              <img src={p.img} alt={p.name} loading="lazy" width={1024} height={1024}
                className="aspect-square w-full object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold">{p.name}</h3>
                <p className="mt-1 text-muted-foreground">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-muted py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-4xl font-extrabold md:text-5xl">Customers love us</h2>
          <blockquote className="mt-8 max-w-3xl rounded-2xl bg-card p-8 text-lg shadow">
            <div className="mb-3 flex gap-1">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-5 w-5 fill-accent text-accent" />)}</div>
            "Excellent experience at JS Kite Shop! They have a wide variety of kites, manja, and accessories with great quality and reasonable prices. The staff is friendly."
            <footer className="mt-4 text-sm font-bold text-muted-foreground">— Srr Fireworks, Google review</footer>
          </blockquote>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2">
        <div>
          <h2 className="text-4xl font-extrabold md:text-5xl">Visit the shop</h2>
          <ul className="mt-8 space-y-5 text-lg">
            <li className="flex gap-3"><MapPin className="mt-1 h-6 w-6 shrink-0 text-primary" />{ADDRESS}</li>
            <li className="flex gap-3"><Clock className="mt-1 h-6 w-6 shrink-0 text-primary" />Open daily · late hours in festival season</li>
            <li className="flex gap-3"><Phone className="mt-1 h-6 w-6 shrink-0 text-primary" /><span><a href={`tel:+${WHATSAPP}`} className="font-bold underline">{PHONE_DISPLAY}</a><br /><a href={WA_LINK} target="_blank" rel="noopener noreferrer" onClick={onWhatsAppClick} className="underline">Chat with us on WhatsApp</a></span></li>
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={DIRECTIONS} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-bold text-primary-foreground shadow-lg transition-transform hover:-translate-y-0.5">
              <Navigation className="h-5 w-5" /> Navigate in Google Maps
            </a>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" onClick={onWhatsAppClick}
              className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3 font-bold text-whatsapp-foreground shadow-lg transition-transform hover:-translate-y-0.5">
              <MessageCircle className="h-5 w-5" /> WhatsApp
            </a>
          </div>
        </div>
        <iframe title="JS Kite Shop location" loading="lazy"
          src={`https://www.google.com/maps?q=${MAP_QUERY}&output=embed`}
          className="h-96 w-full rounded-2xl border shadow-lg" />
      </section>

      <footer className="bg-festive py-8 text-center text-primary-foreground">
        © {new Date().getFullYear()} JS Kite Shop · Vanasthalipuram, Hyderabad
      </footer>

      <a href={WA_LINK} target="_blank" rel="noopener noreferrer" onClick={onWhatsAppClick} aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-2xl transition-transform hover:scale-110">
        <MessageCircle className="h-7 w-7" />
      </a>
    </main>
  );
}
