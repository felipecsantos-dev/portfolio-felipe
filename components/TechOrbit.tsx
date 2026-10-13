import type { ReactNode } from "react";
import { site } from "@/lib/content";
import { TechIcon } from "./TechIcon";

// Ângulos escolhidos para os ícones ficarem acima e abaixo dos aparelhos, sem serem cobertos.
const ANGLES = [325, 0, 35, 145, 180, 215];

function Ring({ size, children }: { size: string; children?: ReactNode }) {
  return (
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-text/12"
      style={{ width: size, height: size }}
    >
      {children}
    </div>
  );
}

export function TechOrbit({ children }: { children: ReactNode }) {
  const icons = [...site.orbit.outer, ...site.orbit.inner];

  return (
    <div className="relative mx-auto aspect-square w-[88%] max-w-[540px] sm:w-full lg:max-w-[min(540px,calc(100dvh-17rem))]">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <Ring size="100%">
          <div className="absolute inset-0 animate-orbit">
            {icons.map((slug, index) => {
              const angle = ANGLES[index % ANGLES.length];
              return (
                <div key={slug} className="absolute inset-0" style={{ transform: `rotate(${angle}deg)` }}>
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div style={{ transform: `rotate(${-angle}deg)` }}>
                      <div className="grid size-10 animate-orbit-reverse place-items-center rounded-full border border-text/15 bg-surface text-accent md:size-13">
                        <TechIcon slug={slug} decorative className="size-5 md:size-6" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Ring>
        <Ring size="68%" />
      </div>
      <div className="absolute inset-0 grid place-items-center">{children}</div>
    </div>
  );
}
