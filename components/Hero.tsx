import { site } from "@/lib/content";
import { BrowserMockup } from "./BrowserMockup";
import { QuoteButton } from "./QuoteButton";
import { TechOrbit } from "./TechOrbit";

export function Hero() {
  return (
    <section id="inicio" className="px-4 pt-6">
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 overflow-hidden rounded-card border border-line bg-surface p-6 sm:p-10 lg:min-h-[calc(100dvh-7.5rem)] lg:grid-cols-[1fr_1.05fr] lg:gap-12 lg:p-16">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_78%_45%,rgb(59_130_246/0.3),transparent_62%)]"
          aria-hidden
        />

        <div className="relative">
          <p className="animate-rise text-xl text-text md:text-2xl">
            Olá, eu sou <span className="font-semibold text-accent-soft">{site.name}</span>
          </p>
          <h1
            className="mt-3 animate-rise text-[2.6rem] leading-[1.05] font-medium tracking-tight sm:text-5xl md:text-6xl xl:text-7xl"
            style={{ animationDelay: "80ms" }}
          >
            {site.role}
          </h1>
          <p
            className="mt-6 max-w-[44ch] animate-rise text-lg leading-relaxed text-muted"
            style={{ animationDelay: "160ms" }}
          >
            {site.tagline}
          </p>
          <div
            className="mt-9 flex animate-rise flex-wrap items-center gap-3"
            style={{ animationDelay: "240ms" }}
          >
            <QuoteButton size="lg" />
            <a
              href="#projetos"
              className="inline-flex h-13 items-center rounded-full border border-text/25 px-7 font-medium whitespace-nowrap transition-[background-color,transform] duration-200 hover:bg-text/5 active:scale-[0.98]"
            >
              Ver projetos
            </a>
          </div>
        </div>

        <div className="relative animate-rise" style={{ animationDelay: "200ms" }}>
          <TechOrbit>
            <BrowserMockup project={site.projects[0]} />
          </TechOrbit>
        </div>
      </div>
    </section>
  );
}
