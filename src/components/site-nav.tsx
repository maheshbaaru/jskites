import { Link } from "@tanstack/react-router";

export function SiteNav() {
  const linkCls = ({ isActive }: { isActive: boolean }) =>
    `rounded-full px-4 py-1.5 font-bold transition-colors ${
      isActive ? "bg-card text-foreground" : "text-primary-foreground hover:bg-white/15"
    }`;
  return (
    <header className="sticky top-0 z-40 bg-festive shadow-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3">
        <Link to="/" className="text-2xl font-extrabold text-primary-foreground" style={{ fontFamily: "var(--font-display)" }}>
          JS Kite Shop
        </Link>
        <nav className="flex items-center gap-1 text-sm">
          <Link to="/" className={linkCls}>Home</Link>
          <Link to="/reviews" className={linkCls}>Reviews</Link>
          <Link to="/contact" className={linkCls}>Contact</Link>
        </nav>
      </div>
    </header>
  );
}
