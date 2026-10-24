import { Link, useRouterState } from "@tanstack/react-router";
import { Crown, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PHONE_DISPLAY, WA_LINK, onWhatsAppClick } from "@/lib/shop";

const links = [
  { to: "/", label: "Home" },
  { to: "/reviews", label: "Reviews" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <header className="shop-header sticky top-0 z-40 bg-signboard text-signboard-foreground">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-5 gap-y-4 px-5 py-5 sm:px-6">
        <Link to="/" aria-label="JS Kite Shop home" className="shop-brand flex items-center gap-3 rounded-sm focus-visible:outline-2 focus-visible:outline-signboard-accent">
          <svg className="brand-kite h-20 w-14 shrink-0" viewBox="0 0 70 100" aria-hidden="true">
            <path d="M32 3 65 32 36 67 4 34Z" className="brand-kite-outline" />
            <path d="M32 3 33 33 4 34Z" className="brand-kite-blue" />
            <path d="M32 3 65 32 33 33Z" className="brand-kite-yellow" />
            <path d="M4 34 33 33 36 67Z" className="brand-kite-pink" />
            <path d="M33 33 65 32 36 67Z" className="brand-kite-green" />
            <path d="M32 3 36 67M4 34 65 32" className="brand-kite-spar" />
            <path d="M36 67C43 80 11 77 18 96" className="brand-kite-ribbon brand-kite-ribbon-blue" />
            <path d="M36 67C35 80 25 84 32 97" className="brand-kite-ribbon brand-kite-ribbon-pink" />
          </svg>
          <div>
            <div className="flex items-center gap-2 font-display text-3xl font-extrabold leading-none sm:text-4xl">
              <span className="relative text-signboard-accent"><Crown className="absolute -top-4 left-1 h-4 w-6" aria-hidden="true" />JS</span>
              <span>Kite Shop</span>
            </div>
            <div className="mt-2 flex items-center gap-2 text-xs font-bold text-signboard-accent sm:text-sm">
              <span className="h-px w-6 bg-signboard-accent" aria-hidden="true" />
              Kites · Manja · Accessories
            </div>
          </div>
        </Link>
        <Button asChild variant="shopContact" className="shop-contact h-11 px-4">
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" onClick={onWhatsAppClick} aria-label={`WhatsApp JS Kite Shop at ${PHONE_DISPLAY}`}>
            <MessageCircle aria-hidden="true" />
            <span>{PHONE_DISPLAY}</span>
          </a>
        </Button>
      </div>
      <div className="border-t border-signboard-border">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 sm:px-6">
        <nav aria-label="Main navigation" className="flex items-center gap-5 text-sm sm:gap-8">
          {links.map((l) => {
            const isActive = pathname === l.to;
            const cls = isActive
              ? "border-b-2 border-signboard-accent py-3 font-bold text-signboard-accent"
              : "border-b-2 border-transparent py-3 font-medium text-signboard-muted transition-colors hover:text-signboard-accent";
            return <Link key={l.to} to={l.to} className={cls} aria-current={isActive ? "page" : undefined}>{l.label}</Link>;
          })}
        </nav>
        <span className="hidden items-center gap-1.5 text-xs text-signboard-muted sm:flex"><MapPin className="h-3.5 w-3.5" aria-hidden="true" /> Vanasthalipuram, Hyderabad</span>
        </div>
      </div>
    </header>
  );
}
