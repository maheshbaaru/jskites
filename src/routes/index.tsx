import { createFileRoute } from "@tanstack/react-router";
import { MapPin, MessageCircle, Navigation, Star, Clock, Phone } from "lucide-react";
import hero from "@/assets/hero.jpg";

const WHATSAPP = "919959651194";
const PHONE_DISPLAY = "+91 99596 51194";
const ADDRESS =
  "Ravindra Bharathi School Road, Kamala Nagar, Vanasthalipuram, Hyderabad, Telangana 500070";
const MAP_QUERY = encodeURIComponent(`JS Kite Shop, ${ADDRESS}`);
const WA_LINK = `https://api.whatsapp.com/send?phone=${WHATSAPP}&text=${encodeURIComponent("Hi JS Kite Shop! I'd like to know about your kites.")}`;
const DIRECTIONS = `https://www.google.com/maps/dir/?api=1&destination=${MAP_QUERY}`;

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
  { name: "Paper Kites", desc: "Classic patang in every colour and size." },
  { name: "Manja & Thread", desc: "Strong, durable thread for long flights." },
  { name: "Charkhi / Reels", desc: "Smooth wooden and plastic reels." },
  { name: "Kids' Kites", desc: "Cartoon & plastic kites for little flyers." },
  { name: "Festival Combos", desc: "Sankranti bundles at the best prices." },
  { name: "Bulk Orders", desc: "Wholesale rates for shops and events." },
];

function Btn({ href, children, variant }: { href: string; children: React.ReactNode; variant: "wa" | "primary" | "ghost" }) {
  const styles = {
    wa: "bg-whatsapp text-whatsapp-foreground",
    primary: "bg-festive text-primary-foreground",
    ghost: "bg-card/90 text-foreground",
  }[variant];
  return (
    <a href={href} target="_blank" rel="noreferrer"
      className={`inline-flex items-center gap-2 rounded-full px-6 py-3 font-bold shadow-lg transition-transform hover:-translate-y-0.5 ${styles}`}>
      {children}
    </a>
  );
}

function Index() {
  return (
    <main>
      <section className="relative min-h-[88vh] overflow-hidden">
        <img src={hero} alt="Colourful kites over Hyderabad" width={1600} height={1008}
          className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-end px-6 pb-16 text-primary-foreground">
          <span className="mb-4 inline-flex w-fit items-center gap-1 rounded-full bg-card/90 px-4 py-1 text-sm font-bold text-foreground">
            <Star className="h-4 w-4 fill-accent text-accent" /> 5.0 · 194 Google reviews
          </span>
          <h1 className="text-6xl font-extrabold leading-none md:text-8xl">JS Kite Shop</h1>
          <p className="mt-4 max-w-xl text-lg md:text-xl">
            Kites, manja and everything you need to rule the sky — at fair prices, in Vanasthalipuram.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Btn href={WA_LINK} variant="wa"><MessageCircle className="h-5 w-5" /> Order on WhatsApp</Btn>
            <Btn href={DIRECTIONS} variant="ghost"><Navigation className="h-5 w-5" /> Get Directions</Btn>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-4xl font-extrabold md:text-5xl">What we <span className="text-festive">sell</span></h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <div key={p.name} className="rounded-2xl border bg-card p-6 transition-shadow hover:shadow-xl">
              <div className={`mb-4 h-10 w-10 rotate-45 rounded-md ${["bg-primary", "bg-secondary", "bg-sky", "bg-accent"][i % 4]}`} />
              <h3 className="text-2xl font-bold">{p.name}</h3>
              <p className="mt-1 text-muted-foreground">{p.desc}</p>
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
            <li className="flex gap-3"><Phone className="mt-1 h-6 w-6 shrink-0 text-primary" /><a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="underline">Chat with us on WhatsApp</a></li>
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <Btn href={DIRECTIONS} variant="primary"><Navigation className="h-5 w-5" /> Navigate in Google Maps</Btn>
            <Btn href={WA_LINK} variant="wa"><MessageCircle className="h-5 w-5" /> WhatsApp</Btn>
          </div>
        </div>
        <iframe title="JS Kite Shop location" loading="lazy"
          src={`https://www.google.com/maps?q=${MAP_QUERY}&output=embed`}
          className="h-96 w-full rounded-2xl border shadow-lg" />
      </section>

      <footer className="bg-festive py-8 text-center text-primary-foreground">
        © {new Date().getFullYear()} JS Kite Shop · Vanasthalipuram, Hyderabad
      </footer>

      <a href={WA_LINK} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-2xl transition-transform hover:scale-110">
        <MessageCircle className="h-7 w-7" />
      </a>
    </main>
  );
}
