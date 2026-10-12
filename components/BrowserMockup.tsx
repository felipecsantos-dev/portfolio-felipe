import type { Project } from "@/lib/content";
import { Bezel } from "./Bezel";
import { ProjectShot } from "./ProjectShot";

export function BrowserMockup({ project }: { project: Project }) {
  return (
    <Bezel className="shadow-[0_30px_80px_-20px_rgb(0_0_0/0.8)]">
      <div className="flex h-9 items-center gap-1.5 border-b border-line px-4" aria-hidden>
        <span className="size-2.5 rounded-full bg-text/20" />
        <span className="size-2.5 rounded-full bg-text/20" />
        <span className="size-2.5 rounded-full bg-text/20" />
      </div>
      <ProjectShot project={project} sizes="(min-width: 1024px) 420px, 80vw" priority />
    </Bezel>
  );
}
