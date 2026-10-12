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
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Brand />
          <p className="mt-3 text-muted">
            {site.name}, {site.role}
          </p>
        </div>

        <nav aria-label="Rodapé">
          <h2 className="font-medium">Navegação</h2>
          <ul className="mt-4 flex flex-col gap-3">
            {site.footerNav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className={linkClass}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-medium">Contato</h2>
          <ul className="mt-4 flex flex-col gap-3">
            {contacts.map(({ label, href, Icon, external }) => (
              <li key={href}>
                <a
                  href={href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className={`inline-flex items-center gap-2.5 break-all ${linkClass}`}
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
