import { site } from "@/lib/content";
import { QuoteButton } from "./QuoteButton";
import { Reveal } from "./Reveal";

export function Contact() {
  const { email } = site.contact;
  const { title, text } = site.contactSection;

  return (
    <section id="contato" className="px-5 py-16 sm:px-8 md:py-28">
      <Reveal className="mx-auto max-w-7xl">
        <div className="rounded-card bg-[linear-gradient(135deg,#f4f4f6_30%,#b4b7be)] px-6 py-10 text-bg sm:p-12 lg:p-20">
          <h2 className="max-w-[18ch] text-3xl leading-[1.1] font-medium tracking-tight text-balance md:text-6xl md:leading-[1.05]">
            {title}
          </h2>
          <p className="mt-5 max-w-[48ch] text-base leading-relaxed sm:mt-6 sm:text-lg">{text}</p>
          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4 sm:mt-10">
            <QuoteButton size="lg" variant="inverse" />
            {email && (
              <a
                href={`mailto:${email}`}
                className="inline-flex min-h-11 items-center font-medium [overflow-wrap:anywhere] underline underline-offset-4 focus-visible:outline-bg"
              >
                {email}
              </a>
            )}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
