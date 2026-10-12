import type { ReactNode } from "react";

// Moldura dupla: casca translúcida por fora e núcleo com raio concêntrico por dentro.
export function Bezel({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`rounded-card border border-line bg-text/[0.04] p-1.5 ${className}`}>
      <div className="overflow-hidden rounded-core bg-surface shadow-[inset_0_1px_0_rgb(244_244_246/0.12)] ring-1 ring-text/10">
        {children}
      </div>
    </div>
  );
}
