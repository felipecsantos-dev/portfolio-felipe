// Todo o texto e os dados do site ficam aqui.

export type TechSlug = "html5" | "css" | "git" | "github" | "javascript" | "python";

export type Project = {
  title: string;
  description: string;
  url: string | null;
  // Caminho dentro de /public, ex.: "/projects/padaria.png" (proporção 16:10).
  image: string | null;
  // Montagem do site em notebook e celular, usada no hero (opcional).
  devices?: string;
};

const sections = {
  inicio: { label: "Início", href: "#inicio" },
  servicos: { label: "Serviços", href: "#servicos" },
  projetos: { label: "Projetos", href: "#projetos" },
  processo: { label: "Como funciona", href: "#processo" },
  sobre: { label: "Sobre", href: "#sobre" },
  competencias: { label: "Competências", href: "#competencias" },
  contato: { label: "Contato", href: "#contato" },
};

export const site = {
  brand: "Felipe.Dev",
  name: "Felipe Santos",
  role: "Desenvolvedor Web",
  // Frase da imagem de compartilhamento: é o termo que o cliente busca no Google.
  headline: "Criação de sites em Pirapora",
  tagline:
    "Seu cliente pesquisa no Google antes de comprar. Faço um site rápido, pronto para ser encontrado e para receber pedidos.",
  // Sem barra no final. O www e o endereço .vercel.app redirecionam para cá.
  url: "https://felipesan.com.br",

  seo: {
    title: "Criação de sites em Pirapora MG | Felipe.Dev",
    description:
      "Criação de sites em Pirapora, MG: landing page, site institucional e loja virtual, prontos para o celular e para o Google. Peça seu orçamento pelo WhatsApp.",
    city: "Pirapora",
    state: "MG",
    phone: "+55 38 99161-5519",
    serviceArea: "Atendo Pirapora e região.",
  },

  contact: {
    // Só números, com DDI e DDD.
    whatsapp: "5538991615519",
    whatsappMessage: "Olá, Felipe! Vi seu portfólio e quero um orçamento para um site.",
    email: "felipecsantos.dev@gmail.com",
    github: "https://github.com/felipecsantos-dev",
    linkedin: "https://www.linkedin.com/in/felipe-santos-9a5014443/",
    instagram: "https://www.instagram.com/felipesan.dev/",
  },

  nav: [
    sections.inicio,
    sections.servicos,
    sections.projetos,
    sections.sobre,
    sections.competencias,
  ],

  footerNav: Object.values(sections),

  servicesTitle: "Escolha o site que o seu negócio precisa",
  // Diferencial mostrado na seção Serviços, sem termos técnicos.
  seoPitch:
    "Entrego cada site preparado para o Google: ele entende o que você vende e onde você atende. Muitos sites da região saem sem esse cuidado, e o seu larga na frente deles.",

  services: [
    {
      icon: "landing",
      title: "Landing page",
      description:
        "Uma página com 5 seções, da apresentação ao contato, e um botão para o WhatsApp. Quem chega pelo anúncio ou pelo Instagram sabe o que fazer: chamar você.",
    },
    {
      icon: "institutional",
      title: "Site institucional",
      description:
        "Seu negócio com endereço próprio no Google, mostrando o que você vende e como falar com você.",
    },
    {
      icon: "store",
      title: "Loja virtual",
      description: "Seu catálogo aberto 24 horas, com produtos que você mesmo cadastra e atualiza.",
    },
  ],

  // O primeiro projeto aparece em destaque na seção Projetos e nos aparelhos do hero.
  projects: [
    {
      title: "Estúdio Tatuagem",
      description:
        "Site de estudo para um estúdio de tatuagem fictício, feito com HTML, CSS e JavaScript. Visual escuro com seções claras, portfólio com galeria ampliada, animações ao rolar e pedido de orçamento enviado direto pelo WhatsApp.",
      url: "https://estudiotatuagem-eight.vercel.app/",
      image: "/projects/estudio-tatuagem.webp",
      devices: "/projects/estudio-tatuagem-devices.webp",
    },
  ] as Project[],

  process: [
    {
      icon: "talk",
      title: "Conversa",
      description: "Você me conta sobre o negócio e o que espera do site.",
    },
    {
      icon: "proposal",
      title: "Proposta",
      description: "Envio escopo, prazo e valor, sem compromisso.",
    },
    {
      icon: "build",
      title: "Desenvolvimento",
      description: "Construo o site e você acompanha cada etapa.",
    },
    {
      icon: "delivery",
      title: "Entrega",
      description: "Site publicado, testado no celular e pronto para uso.",
    },
  ],

  about: {
    paragraphs: [
      "Sou de Pirapora e estudo Análise e Desenvolvimento de Sistemas na Unopar. Crio sites em HTML e CSS e cuido do acabamento em cada tela, do celular ao computador.",
      "Precisa de um site e não sabe por onde começar? Você me conta o que vende e eu cuido do resto, do layout à publicação.",
    ],
    education: {
      course: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
      institution: "Universidade Pitágoras Unopar Anhanguera, Pirapora/MG",
      status: "Cursando a 1ª série. Início em 08/2026, duração de 2 anos.",
    },
  },

  skills: [
    { group: "Domino", items: ["html5", "css", "git", "github"] },
    { group: "Estudando agora", items: ["javascript", "python"] },
  ] as { group: string; items: TechSlug[] }[],

  contactSection: {
    title: "Conte o que o seu negócio precisa",
    text: "Mande o tipo de site e o prazo que você tem. Respondo com o valor e a data de entrega.",
  },

  // Ícones que orbitam o mockup do hero
  orbit: {
    outer: ["html5", "css", "git", "github"],
    inner: ["javascript", "python"],
  } as { outer: TechSlug[]; inner: TechSlug[] },
};
