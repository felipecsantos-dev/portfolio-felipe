import { ImageIcon } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import type { Project } from "@/lib/content";

export function ProjectShot({
  project,
  sizes,
  priority = false,
}: {
  project: Project;
  sizes: string;
  priority?: boolean;
}) {
  return (
    <div className="relative aspect-[16/10] bg-bg">
      {project.image ? (
        <Image
          src={project.image}
          alt={`Captura de tela do site ${project.title}`}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover object-top"
        />
      ) : (
        <div className="absolute inset-3 grid place-items-center rounded-2xl border border-dashed border-text/20 p-4 text-center text-sm text-muted">
          <div>
            <ImageIcon size={28} className="mx-auto mb-2" aria-hidden />
            Captura do projeto pendente
          </div>
        </div>
      )}
    </div>
  );
}
