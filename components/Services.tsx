import { BuildingsIcon, CursorClickIcon, StorefrontIcon } from "@phosphor-icons/react/dist/ssr";
import { site } from "@/lib/content";
import { Reveal } from "./Reveal";

const icons = {
  landing: CursorClickIcon,
  institutional: BuildingsIcon,
  store: StorefrontIcon,
} as const;

const cells = [
  "bg-[linear-gradient(150deg,rgb(244_244_246/0.16),rgb(20_20_23)_62%)]",
  "bg-surface",
  "bg-[radial-gradient(rgb(244_244_246/0.14)_1px,transparent_1px)] [background-size:18px_18px] bg-surface",
];

export function Services() {
  return (
    <section id="servicos" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-28">
      <Reveal from="left">
        <h2 className="max-w-[18ch] text-[1.75rem] leading-tight font-medium tracking-tight text-balance md:text-5xl md:leading-none">
          {site.servicesTitle}
        </h2>
        <p className="mt-5 max-w-[62ch] text-base leading-relaxed text-muted sm:text-lg">{site.seoPitch}</p>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:gap-5 md:mt-12 md:grid-cols-2 lg:grid-cols-[1.25fr_1fr] lg:grid-rows-2">
        {site.services.map((service, index) => {
          const Icon = icons[service.icon as keyof typeof icons];
          const featured = index === 0;
          return (
            <Reveal
              key={service.title}
              from={featured ? "left" : "right"}
              delay={index * 0.08}
              className={featured ? "md:col-span-2 lg:col-span-1 lg:row-span-2" : undefined}
            >
              <article
                className={`flex h-full flex-col justify-between gap-8 rounded-card border border-line p-6 md:gap-10 md:p-10 ${cells[index % cells.length]} ${featured ? "lg:min-h-[420px]" : ""}`}
              >
                <Icon
                  weight="light"
                  className={`text-accent ${featured ? "size-10 md:size-14" : "size-9"}`}
                  aria-hidden
                />
                <div>
                  <h3
                    className={`font-medium tracking-tight ${featured ? "text-2xl md:text-4xl" : "text-xl md:text-2xl"}`}
                  >
                    {service.title}
                  </h3>
                  <p className="mt-3 max-w-[48ch] leading-relaxed text-muted">{service.description}</p>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
