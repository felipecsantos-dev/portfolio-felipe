import { site } from "@/lib/content";
import { QuoteButton } from "./QuoteButton";
import { Reveal } from "./Reveal";

export function Contact() {
  const { email } = site.contact;

  return (
    <section id="contato" className="px-4 py-20 md:py-28">
      <Reveal className="mx-auto max-w-7xl">
        <div className="rounded-card bg-accent p-8 text-bg sm:p-12 lg:p-20">
          <h2 className="text-balance max-w-[16ch] text-4xl leading-[1.05] font-medium tracking-tight md:text-6xl">
            Vamos tirar seu site do papel?
          </h2>
          <p className="mt-6 max-w-[48ch] text-lg leading-relaxed">
            Conte o que você precisa. Respondo com uma proposta de escopo, prazo e valor.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <QuoteButton size="lg" variant="inverse" />
            {email && (
              <a href={`mailto:${email}`} className="font-medium underline underline-offset-4">
                {email}
              </a>
            )}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
