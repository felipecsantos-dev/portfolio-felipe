import Image from "next/image";
import type { Project } from "@/lib/content";

// Notebook e celular com o site do projeto na tela (imagem já montada, com fundo transparente).
export function DeviceMockup({ project }: { project: Project }) {
  if (!project.devices) return null;
  return (
    <Image
      src={project.devices}
      alt={`Site ${project.title} aberto em um notebook e em um celular`}
      width={1600}
      height={946}
      priority
      sizes="(min-width: 1024px) 620px, 92vw"
      className="h-auto w-[116%] max-w-none drop-shadow-[0_0_1px_rgb(244_244_246/0.4)]"
    />
  );
}
