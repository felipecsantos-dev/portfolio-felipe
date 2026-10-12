"use client";

import { ListIcon, XIcon } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { site } from "@/lib/content";
import { QuoteButton } from "./QuoteButton";

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
        className="grid size-11 place-items-center rounded-full border border-line text-text transition-colors duration-200 hover:bg-text/5"
      >
        {open ? <XIcon size={20} aria-hidden /> : <ListIcon size={20} aria-hidden />}
      </button>

      {open && (
        <div
          id="menu-mobile"
          className="absolute inset-x-4 top-full mt-2 rounded-card border border-line bg-surface p-4"
        >
          <ul className="flex flex-col">
            {site.nav.map((item) => (
              <li key={item.href}>
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
          <div className="mt-3 grid">
            <QuoteButton size="lg" onClick={() => setOpen(false)} />
          </div>
        </div>
      )}
    </div>
  );
}
