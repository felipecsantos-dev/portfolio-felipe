import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr";
import type { Project } from "@/lib/content";
import { site } from "@/lib/content";
import { Bezel } from "./Bezel";
import { ProjectShot } from "./ProjectShot";
import { Reveal } from "./Reveal";

function VisitLink({ project }: { project: Project }) {
  if (!project.url) return null;
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group mt-6 inline-flex h-12 items-center gap-3 rounded-full border border-text/25 pr-1.5 pl-5 font-medium transition-[background-color,border-color,transform] duration-200 hover:border-text/60 hover:bg-text/5 active:scale-[0.98]"
    >
      Visitar site
      <span className="sr-only">: {project.title}</span>
      <span className="grid size-9 place-items-center rounded-full bg-text/10 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
        <ArrowUpRightIcon size={16} weight="light" aria-hidden />
      </span>
    </a>
  );
}

export function Projects() {
  const [featured, ...others] = site.projects;

  return (
    <section id="projetos" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-28">
      <Reveal from="left">
        <h2 className="text-[1.75rem] leading-tight font-medium tracking-tight text-balance md:text-5xl md:leading-none">Projetos</h2>
      </Reveal>

      <article className="mt-10 grid grid-cols-1 items-center gap-6 md:mt-12 lg:grid-cols-[1.5fr_1fr] lg:gap-12">
        <Reveal from="left">
          <Bezel>
            <ProjectShot project={featured} sizes="(min-width: 1024px) 720px, 100vw" />
          </Bezel>
        </Reveal>
        <Reveal from="right" delay={0.1}>
          <h3 className="text-xl font-medium tracking-tight md:text-4xl">{featured.title}</h3>
          <p className="mt-3 max-w-[46ch] text-base leading-relaxed text-muted sm:mt-4 sm:text-lg">{featured.description}</p>
          <VisitLink project={featured} />
        </Reveal>
      </article>

      {others.length > 0 && (
        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2">
          {others.map((project, index) => (
            <Reveal key={project.title} from={index % 2 === 0 ? "left" : "right"}>
              <article>
                <Bezel>
                  <ProjectShot project={project} sizes="(min-width: 768px) 600px, 100vw" />
                </Bezel>
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
