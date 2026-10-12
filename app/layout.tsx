import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { site } from "@/lib/content";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const title = `${site.name} | ${site.role}`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description: site.tagline,
  openGraph: {
    title,
    description: site.tagline,
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${outfit.variable} antialiased`}>
      <head>
        <meta name="theme-color" content="#0b0b0d" />
      </head>
      <body className="min-h-[100dvh] font-sans">{children}</body>
    </html>
  );
}
