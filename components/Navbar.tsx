import { site } from "@/lib/content";
import { MobileMenu } from "./MobileMenu";
import { QuoteButton } from "./QuoteButton";

export function Brand() {
  const [first, ...rest] = site.brand.split(".");
  return (
    <a href="#inicio" className="text-xl font-semibold tracking-tight" translate="no">
      {first}
      <span className="text-muted">.{rest.join(".")}</span>
    </a>
  );
}

export function Navbar() {
  return (
    <header className="sticky top-4 z-40 px-4">
      <div className="glass mx-auto flex h-16 max-w-7xl items-center justify-between rounded-full pr-3 pl-6">
        <Brand />

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {site.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-full px-4 py-2 text-sm text-muted transition-colors duration-200 hover:bg-text/5 hover:text-text"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <QuoteButton />
          </div>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
