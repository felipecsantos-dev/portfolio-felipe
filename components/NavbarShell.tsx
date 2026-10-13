"use client";

import { useMotionValueEvent, useScroll } from "motion/react";
import { type ReactNode, useRef, useState } from "react";

const TOP_ZONE = 120;
const JITTER = 4;

// Esconde a navbar ao rolar para baixo e mostra ao rolar para cima.
export function NavbarShell({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (current) => {
    const header = ref.current;
    const previous = scrollY.getPrevious() ?? 0;
    const inUse =
      header?.querySelector("[aria-expanded='true']") || header?.contains(document.activeElement);

    if (current < TOP_ZONE || inUse) setHidden(false);
    else if (current > previous + JITTER) setHidden(true);
    else if (current < previous - JITTER) setHidden(false);
  });

  return (
    <header
      ref={ref}
      onFocusCapture={() => setHidden(false)}
      className={`sticky top-4 z-40 px-4 sm:px-8 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none ${hidden ? "-translate-y-[150%]" : ""}`}
    >
      {children}
    </header>
  );
}
