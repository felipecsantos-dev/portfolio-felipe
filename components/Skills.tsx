import { site } from "@/lib/content";
import { tech } from "@/lib/tech";
import { Reveal } from "./Reveal";
import { TechIcon } from "./TechIcon";

export function Skills() {
  return (
    <section id="competencias" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-28">
      <Reveal from="left">
        <h2 className="max-w-[22ch] text-[1.75rem] leading-tight font-medium tracking-tight text-balance md:text-5xl md:leading-none">
          O que eu domino e o que estou estudando
        </h2>
      </Reveal>

      <div className="mt-6 divide-y divide-line md:mt-10">
        {site.skills.map((group) => (
          <div
            key={group.group}
            className="grid grid-cols-1 gap-4 py-6 md:py-8 md:grid-cols-[220px_1fr] md:items-center md:gap-8"
          >
            <Reveal from="left">
              <h3 className="text-lg font-medium md:text-xl">{group.group}</h3>
            </Reveal>
            <Reveal from="right" delay={0.08}>
              <ul className="flex flex-wrap gap-2.5 md:gap-3">
                {group.items.map((slug) => (
                  <li
                    key={slug}
                    className="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface px-3.5 py-2 text-[0.95rem] md:px-4 md:py-2.5 md:text-base"
                  >
                    <TechIcon slug={slug} decorative className="size-5 text-accent" />
                    {tech[slug].title}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  );
}
