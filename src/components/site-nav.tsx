import { Link } from "@tanstack/react-router";

const base = "rounded-full px-4 py-1.5 font-bold transition-colors text-primary-foreground hover:bg-white/15";
const active = "rounded-full px-4 py-1.5 font-bold transition-colors bg-card text-foreground";

export function SiteNav() {
  return (
    <header className="sticky top-0 z-40 bg-festive shadow-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3">
        <Link to="/" className="text-2xl font-extrabold text-primary-foreground" style={{ fontFamily: "var(--font-display)" }}>
          JS Kite Shop
        </Link>
        <nav className="flex items-center gap-1 text-sm">
          <Link to="/" className={base} activeProps={{ className: active }}>Home</Link>
          <Link to="/reviews" className={base} activeProps={{ className: active }}>Reviews</Link>
          <Link to="/contact" className={base} activeProps={{ className: active }}>Contact</Link>
        </nav>
      </div>
    </header>
  );
}
