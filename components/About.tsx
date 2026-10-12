import { GraduationCapIcon } from "@phosphor-icons/react/dist/ssr";
import { site } from "@/lib/content";
import { Bezel } from "./Bezel";
import { Reveal } from "./Reveal";

export function About() {
  const { paragraphs, education } = site.about;

  return (
    <section id="sobre" className="mx-auto max-w-7xl px-4 py-20 md:py-28">
      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1.25fr_1fr] lg:gap-20">
        <Reveal from="left">
          <h2 className="text-3xl font-medium tracking-tight text-balance md:text-5xl">Sobre mim</h2>
          <div className="mt-8 flex max-w-[60ch] flex-col gap-5 text-lg leading-relaxed text-muted">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Reveal>

        <Reveal from="right" delay={0.1}>
          <Bezel>
            <aside className="p-8 md:p-10">
              <GraduationCapIcon size={36} weight="light" className="text-accent" aria-hidden />
              <p className="mt-8 text-sm text-muted">Formação</p>
              <h3 className="mt-1 text-2xl font-medium tracking-tight text-balance">{education.course}</h3>
              <p className="mt-3 text-lg">{education.institution}</p>
              <p className="mt-6 border-t border-line pt-6 text-muted">{education.status}</p>
            </aside>
          </Bezel>
        </Reveal>
      </div>
    </section>
  );
}
