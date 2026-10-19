import type { Metadata } from "next";
import { CartaoRedirect } from "./redirect";

// Destino do QR code do cartão de visita: conta a visita como "/cartao" e leva para os projetos.
export const metadata: Metadata = {
  title: "Abrindo meus projetos",
  robots: { index: false, follow: false },
  alternates: { canonical: "/" },
};

export default function CartaoPage() {
  return <CartaoRedirect />;
}
