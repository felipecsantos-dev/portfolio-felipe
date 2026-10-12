import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr";
import type { Project } from "@/lib/content";
import { site } from "@/lib/content";
import { ProjectShot } from "./ProjectShot";
import { Reveal } from "./Reveal";

function VisitLink({ project }: { project: Project }) {
  if (!project.url) return null;
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-5 inline-flex items-center gap-1.5 font-medium text-accent-soft underline-offset-4 hover:underline"
    >
      Visitar site
      <ArrowUpRightIcon size={18} aria-hidden />
      <span className="sr-only">: {project.title}</span>
    </a>
  );
}

export function Projects() {
  const [featured, ...others] = site.projects;

  return (
    <section id="projetos" className="mx-auto max-w-7xl px-4 py-20 md:py-28">
      <Reveal>
        <h2 className="text-balance text-3xl font-medium tracking-tight md:text-5xl">Projetos recentes</h2>
      </Reveal>

      <Reveal className="mt-12">
        <article className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.5fr_1fr] lg:gap-12">
          <div className="overflow-hidden rounded-card border border-line">
            <ProjectShot project={featured} sizes="(min-width: 1024px) 720px, 100vw" />
          </div>
          <div>
            <h3 className="text-2xl font-medium tracking-tight md:text-4xl">{featured.title}</h3>
            <p className="mt-4 max-w-[46ch] text-lg leading-relaxed text-muted">{featured.description}</p>
            <VisitLink project={featured} />
          </div>
        </article>
      </Reveal>

      {others.length > 0 && (
        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2">
          {others.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.08}>
              <article>
                <div className="overflow-hidden rounded-card border border-line">
                  <ProjectShot project={project} sizes="(min-width: 768px) 600px, 100vw" />
                </div>
                <h3 className="mt-6 text-2xl font-medium tracking-tight">{project.title}</h3>
                <p className="mt-2 max-w-[52ch] leading-relaxed text-muted">{project.description}</p>
                <VisitLink project={project} />
              </article>
            </Reveal>
          ))}
        </div>
      )}
    </section>
  );
}
