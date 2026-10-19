"use client";

import { useEffect } from "react";

const DESTINO = "/#projetos";

export function CartaoRedirect() {
  useEffect(() => {
    const t = window.setTimeout(() => window.location.replace(DESTINO), 500);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <main className="flex min-h-[100dvh] items-center justify-center bg-[#0b0b0d] px-5 text-center text-[#f4f4f6]">
      <p className="text-lg">
        Abrindo meus projetos…{" "}
        <a href={DESTINO} className="underline underline-offset-4">
          Toque aqui se não abrir
        </a>
      </p>
    </main>
  );
}
