import { GithubLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react/dist/ssr";
import { site } from "@/lib/content";

export function Footer() {
  const { github, linkedin } = site.contact;
  const links = [
    { label: "GitHub", href: github, Icon: GithubLogoIcon },
    { label: "LinkedIn", href: linkedin, Icon: LinkedinLogoIcon },
  ].filter((link) => link.href);

  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-10 sm:flex-row sm:items-center">
        <p className="text-muted">
          <span className="font-semibold text-text">{site.name}</span>, {site.role}
        </p>
        {links.length > 0 && (
          <ul className="flex items-center gap-2">
            {links.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid size-11 place-items-center rounded-full border border-line text-muted transition-colors duration-200 hover:bg-text/5 hover:text-text"
                >
                  <Icon size={20} aria-hidden />
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </footer>
  );
}
