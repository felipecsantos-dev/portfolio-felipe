import { site } from "@/lib/content";
import { tech } from "@/lib/tech";
import { Reveal } from "./Reveal";
import { TechIcon } from "./TechIcon";

export function Skills() {
  return (
    <section id="competencias" className="mx-auto max-w-7xl px-4 py-20 md:py-28">
      <Reveal>
        <h2 className="text-balance max-w-[20ch] text-3xl font-medium tracking-tight md:text-5xl">
          Tecnologias que uso no dia a dia
        </h2>
      </Reveal>

      <div className="mt-10 divide-y divide-line">
        {site.skills.map((group, index) => (
          <Reveal key={group.group} delay={index * 0.08}>
            <div className="grid grid-cols-1 gap-4 py-8 md:grid-cols-[220px_1fr] md:items-center md:gap-8">
              <h3 className="text-xl font-medium">{group.group}</h3>
              <ul className="flex flex-wrap gap-3">
                {group.items.map((slug) => (
                  <li
                    key={slug}
                    className="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface px-4 py-2.5"
                  >
                    <TechIcon slug={slug} decorative className="size-5 text-accent-soft" />
                    {tech[slug].title}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
