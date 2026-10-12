import { site } from "./content";

// Enquanto o número não estiver preenchido, o botão leva à seção de contato.
export function quoteHref(): string {
  const { whatsapp, whatsappMessage } = site.contact;
  if (!whatsapp) return "#contato";
  return `https://wa.me/${whatsapp}?text=${encodeURIComponent(whatsappMessage)}`;
}
