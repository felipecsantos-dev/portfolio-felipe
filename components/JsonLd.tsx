import { site } from "@/lib/content";

// Dados estruturados para o Google. Só entram informações reais do negócio.
const data = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${site.url}/#servico`,
      name: site.brand,
      description: site.seo.description,
      url: site.url,
      image: `${site.url}/opengraph-image`,
      telephone: site.seo.phone,
      email: site.contact.email,
      address: {
        "@type": "PostalAddress",
        addressLocality: site.seo.city,
        addressRegion: site.seo.state,
        addressCountry: "BR",
      },
      areaServed: { "@type": "City", name: site.seo.city },
      founder: { "@id": `${site.url}/#pessoa` },
      sameAs: [site.contact.instagram],
      makesOffer: site.services.map((service) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: service.title, description: service.description },
      })),
    },
    {
      "@type": "Person",
      "@id": `${site.url}/#pessoa`,
      name: site.name,
      jobTitle: site.role,
      url: site.url,
      sameAs: [site.contact.instagram, site.contact.github, site.contact.linkedin],
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#site`,
      name: site.brand,
      url: site.url,
      inLanguage: "pt-BR",
    },
  ],
};

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
