import type { ReactNode } from "react";
import type { TechSlug } from "@/lib/content";
import { site } from "@/lib/content";
import { TechIcon } from "./TechIcon";

function Ring({
  size,
  icons,
  offset = 0,
  reverse = false,
}: {
  size: string;
  icons: TechSlug[];
  offset?: number;
  reverse?: boolean;
}) {
  return (
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-text/12"
      style={{ width: size, height: size }}
    >
      <div className={`absolute inset-0 ${reverse ? "animate-orbit-reverse" : "animate-orbit"}`}>
        {icons.map((slug, index) => {
          const angle = (360 / icons.length) * index + offset;
          return (
            <div key={slug} className="absolute inset-0" style={{ transform: `rotate(${angle}deg)` }}>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div style={{ transform: `rotate(${-angle}deg)` }}>
                  <div
                    className={`grid size-11 place-items-center rounded-full border border-text/15 bg-surface text-accent md:size-13 ${reverse ? "animate-orbit" : "animate-orbit-reverse"}`}
                  >
                    <TechIcon slug={slug} decorative className="size-5 md:size-6" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function TechOrbit({ children }: { children: ReactNode }) {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[540px]">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <Ring size="100%" icons={site.orbit.outer} offset={35} />
        <Ring size="68%" icons={site.orbit.inner} offset={10} reverse />
      </div>
      <div className="absolute inset-0 grid place-items-center">
        <div className="w-[76%]">{children}</div>
      </div>
    </div>
  );
}
