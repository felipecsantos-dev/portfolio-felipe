import {
  EnvelopeSimpleIcon,
  GithubLogoIcon,
  LinkedinLogoIcon,
} from "@phosphor-icons/react/dist/ssr";
import { site } from "@/lib/content";
import { Brand } from "./Navbar";

const linkClass =
  "text-muted underline-offset-4 transition-colors duration-200 hover:text-accent-soft hover:underline";

export function Footer() {
  const { email, github, linkedin } = site.contact;
  const contacts = [
    { label: email, href: email && `mailto:${email}`, Icon: EnvelopeSimpleIcon, external: false },
    { label: "GitHub", href: github, Icon: GithubLogoIcon, external: true },
    { label: "LinkedIn", href: linkedin, Icon: LinkedinLogoIcon, external: true },
  ].filter((contact) => contact.href);

  return (
    <footer className="border-t border-line">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-5 py-12 sm:grid-cols-2 sm:px-8 md:gap-12 md:py-14 lg:grid-cols-[1.4fr_1fr_1.2fr]">
        <div className="sm:col-span-2 lg:col-span-1">
          <Brand />
          <p className="mt-1 text-muted md:mt-3">
            {site.name}, {site.role}
          </p>
          <p className="mt-2 max-w-[32ch] text-muted">{site.seo.serviceArea}</p>
        </div>

        <nav aria-label="Rodapé">
          <h2 className="font-medium">Navegação</h2>
          <ul className="mt-2 flex flex-col lg:mt-4 lg:gap-3">
            {site.footerNav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className={`inline-flex min-h-11 items-center lg:min-h-0 ${linkClass}`}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-medium">Contato</h2>
          <ul className="mt-2 flex flex-col lg:mt-4 lg:gap-3">
            {contacts.map(({ label, href, Icon, external }) => (
              <li key={href}>
                <a
                  href={href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className={`inline-flex min-h-11 items-center gap-2.5 [overflow-wrap:anywhere] lg:min-h-0 ${linkClass}`}
                >
                  <Icon size={20} weight="light" className="shrink-0" aria-hidden />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
