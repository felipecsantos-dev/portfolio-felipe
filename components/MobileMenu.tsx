"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/content";
import { QuoteButton } from "./QuoteButton";

const line =
  "absolute inset-x-0 h-px bg-current transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="menu-mobile"
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        onClick={() => setOpen((value) => !value)}
        className="grid size-11 place-items-center rounded-full border border-line text-text transition-colors duration-200 hover:border-text/40 hover:bg-text/5"
      >
        <span className="relative block h-[13px] w-5" aria-hidden>
          <span className={`${line} top-0 ${open ? "translate-y-[6px] rotate-45" : ""}`} />
          <span className={`${line} bottom-0 ${open ? "-translate-y-[6px] -rotate-45" : ""}`} />
        </span>
      </button>

      {open && (
        <div
          id="menu-mobile"
          className="absolute inset-x-4 top-full mt-2 rounded-card border border-line bg-surface p-4"
        >
          <ul className="flex flex-col">
            {site.nav.map((item, index) => (
              <li key={item.href} className="animate-rise" style={{ animationDelay: `${index * 50}ms` }}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-full px-4 py-3 text-base text-text hover:bg-text/5"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div
            className="mt-3 grid animate-rise"
            style={{ animationDelay: `${site.nav.length * 50}ms` }}
          >
            <QuoteButton size="lg" onClick={() => setOpen(false)} />
          </div>
        </div>
      )}
    </div>
  );
}
