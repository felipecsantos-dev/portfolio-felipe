import { GraduationCapIcon } from "@phosphor-icons/react/dist/ssr";
import { site } from "@/lib/content";
import { Bezel } from "./Bezel";
import { Reveal } from "./Reveal";

export function About() {
  const { paragraphs, education } = site.about;

  return (
    <section id="sobre" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-28">
      <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1.25fr_1fr] lg:gap-20">
        <Reveal from="left">
          <h2 className="text-[1.75rem] leading-tight font-medium tracking-tight text-balance md:text-5xl md:leading-none">Sobre mim</h2>
          <div className="mt-6 flex max-w-[60ch] flex-col gap-4 text-base leading-relaxed text-muted sm:mt-8 sm:gap-5 sm:text-lg">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Reveal>

        <Reveal from="right" delay={0.1}>
          <Bezel>
            <aside className="p-6 md:p-10">
              <GraduationCapIcon weight="light" className="size-8 text-accent md:size-9" aria-hidden />
              <p className="mt-6 text-sm text-muted md:mt-8">Formação</p>
              <h3 className="mt-1 text-xl font-medium tracking-tight text-balance md:text-2xl">{education.course}</h3>
              <p className="mt-3 text-base md:text-lg">{education.institution}</p>
              <p className="mt-5 border-t border-line pt-5 text-muted md:mt-6 md:pt-6">{education.status}</p>
            </aside>
          </Bezel>
        </Reveal>
      </div>
    </section>
  );
}
