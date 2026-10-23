import { Link, useRouterState } from "@tanstack/react-router";

const links = [
  { to: "/", label: "Home" },
  { to: "/reviews", label: "Reviews" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <header className="sticky top-0 z-40 bg-festive shadow-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3">
        <Link to="/" className="text-2xl font-extrabold text-primary-foreground" style={{ fontFamily: "var(--font-display)" }}>
          JS Kite Shop
        </Link>
        <nav className="flex items-center gap-1 text-sm">
          {links.map((l) => {
            const isActive = pathname === l.to;
            const cls = isActive
              ? "rounded-full bg-card px-4 py-1.5 font-bold text-foreground"
              : "rounded-full px-4 py-1.5 font-bold text-primary-foreground hover:bg-white/15";
            return <Link key={l.to} to={l.to} className={cls}>{l.label}</Link>;
          })}
        </nav>
      </div>
    </header>
  );
}
