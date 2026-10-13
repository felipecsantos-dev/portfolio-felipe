import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr";
import { quoteHref } from "@/lib/whatsapp";

const sizes = {
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base sm:h-13 sm:px-7",
};

// O brilho do hover fica em uma camada própria para a troca de cor ser suave.
const variants = {
  accent: {
    base: "bg-accent text-bg",
    sheen: "bg-[linear-gradient(135deg,#ffffff_25%,#d4d4d8)]",
  },
  inverse: {
    base: "bg-bg text-text",
    sheen: "bg-[#2a2a30]",
  },
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
  const { base, sheen } = variants[variant];
  return (
    <a
      href={href}
      onClick={onClick}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`group relative inline-flex items-center justify-center overflow-hidden rounded-full font-semibold whitespace-nowrap transition-transform duration-200 active:scale-[0.98] ${sizes[size]} ${base}`}
    >
      <span
        className={`absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 ${sheen}`}
        aria-hidden
      />
      <span className="relative inline-flex items-center gap-2">
        <WhatsappLogoIcon size={20} weight="fill" aria-hidden />
        Solicitar orçamento
      </span>
    </a>
  );
}
