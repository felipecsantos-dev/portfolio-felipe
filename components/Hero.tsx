import { site } from "@/lib/content";
import { DeviceMockup } from "./DeviceMockup";
import { QuoteButton } from "./QuoteButton";
import { TechOrbit } from "./TechOrbit";

export function Hero() {
  return (
    <section id="inicio" className="px-4 pt-6 sm:px-8">
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 overflow-hidden rounded-card border border-line bg-surface px-6 py-10 sm:p-10 lg:min-h-[calc(100dvh-7.5rem)] lg:grid-cols-[1fr_1.05fr] lg:p-16">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_78%_45%,rgb(244_244_246/0.1),transparent_62%)]"
          aria-hidden
        />

        <div className="relative">
          <p className="animate-from-left text-lg text-muted sm:text-xl md:text-2xl">
            Olá, eu sou <span className="font-semibold text-text">{site.name}</span>
          </p>
          <h1
            className="mt-3 animate-from-left text-4xl leading-[1.05] font-medium tracking-tight sm:text-5xl md:text-6xl xl:text-7xl"
            style={{ animationDelay: "80ms" }}
          >
            {site.role}
          </h1>
          <p
            className="mt-5 max-w-[44ch] animate-from-left text-base leading-relaxed text-muted sm:mt-6 sm:text-lg"
            style={{ animationDelay: "160ms" }}
          >
            {site.tagline}
          </p>
          <div
            className="mt-8 flex animate-from-left flex-wrap items-center gap-3 sm:mt-9"
            style={{ animationDelay: "240ms" }}
          >
            <QuoteButton size="lg" />
            <a
              href="#projetos"
              className="inline-flex h-12 items-center rounded-full border border-text/25 px-6 font-medium whitespace-nowrap transition-[background-color,border-color,transform] duration-200 hover:border-text/60 hover:bg-text/5 active:scale-[0.98] sm:h-13 sm:px-7"
            >
              Ver projetos
            </a>
          </div>
        </div>

        <div className="relative animate-from-right" style={{ animationDelay: "200ms" }}>
          <TechOrbit>
            <DeviceMockup project={site.projects[0]} />
          </TechOrbit>
        </div>
      </div>
    </section>
  );
}
