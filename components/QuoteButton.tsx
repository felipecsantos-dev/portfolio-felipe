import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr";
import { quoteHref } from "@/lib/whatsapp";

const sizes = {
  md: "h-11 px-5 text-sm",
  lg: "h-13 px-7 text-base",
};

const variants = {
  accent: "bg-accent text-bg hover:bg-accent-soft",
  inverse: "bg-bg text-text hover:bg-surface",
};

export function QuoteButton({
  size = "md",
  variant = "accent",
  onClick,
}: {
  size?: keyof typeof sizes;
  variant?: keyof typeof variants;
  onClick?: () => void;
}) {
  const href = quoteHref();
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      onClick={onClick}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`inline-flex items-center justify-center gap-2 rounded-full font-semibold whitespace-nowrap transition-[background-color,transform] duration-200 active:scale-[0.98] ${sizes[size]} ${variants[variant]}`}
    >
      <WhatsappLogoIcon size={20} weight="fill" aria-hidden />
      Solicitar orçamento
    </a>
  );
}
