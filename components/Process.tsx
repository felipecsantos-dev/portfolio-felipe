import {
  ChatsCircleIcon,
  CheckCircleIcon,
  CodeIcon,
  FileTextIcon,
} from "@phosphor-icons/react/dist/ssr";
import { site } from "@/lib/content";
import { Reveal } from "./Reveal";

const icons = {
  talk: ChatsCircleIcon,
  proposal: FileTextIcon,
  build: CodeIcon,
  delivery: CheckCircleIcon,
} as const;

export function Process() {
  const half = site.process.length / 2;

  return (
    <section id="processo" className="mx-auto max-w-7xl px-4 py-20 md:py-28">
      <Reveal from="left">
        <h2 className="max-w-[20ch] text-3xl font-medium tracking-tight text-balance md:text-5xl">
          Do primeiro contato ao site no ar
        </h2>
      </Reveal>

      <ol className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
        {site.process.map((step, index) => {
          const Icon = icons[step.icon as keyof typeof icons];
          const last = index === site.process.length - 1;
          return (
            <li key={step.title}>
              <Reveal from={index < half ? "left" : "right"} delay={(index % half) * 0.1}>
                <div className="flex items-center">
                  <span className="grid size-13 shrink-0 place-items-center rounded-full border border-accent/40 text-accent">
                    <Icon size={24} weight="light" aria-hidden />
                  </span>
                  {!last && <span className="hidden h-px flex-1 bg-line lg:block" aria-hidden />}
                </div>
                <h3 className="mt-6 text-xl font-medium">{step.title}</h3>
                <p className="mt-2 max-w-[30ch] leading-relaxed text-muted lg:pr-8">{step.description}</p>
              </Reveal>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
