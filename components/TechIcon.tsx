import type { TechSlug } from "@/lib/content";
import { tech } from "@/lib/tech";

export function TechIcon({
  slug,
  className,
  decorative = false,
}: {
  slug: TechSlug;
  className?: string;
  decorative?: boolean;
}) {
  const { title, path } = tech[slug];
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      {...(decorative ? { "aria-hidden": true } : { role: "img", "aria-label": title })}
    >
      <path d={path} />
    </svg>
  );
}
