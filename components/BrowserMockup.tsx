import type { Project } from "@/lib/content";
import { ProjectShot } from "./ProjectShot";

export function BrowserMockup({ project }: { project: Project }) {
  return (
    <div className="overflow-hidden rounded-card border border-text/15 bg-surface shadow-[0_30px_80px_-20px_rgb(4_8_20/0.9)]">
      <div className="flex h-9 items-center gap-1.5 border-b border-line px-4" aria-hidden>
        <span className="size-2.5 rounded-full bg-text/20" />
        <span className="size-2.5 rounded-full bg-text/20" />
        <span className="size-2.5 rounded-full bg-text/20" />
      </div>
      <ProjectShot project={project} sizes="(min-width: 1024px) 420px, 80vw" priority />
    </div>
  );
}
