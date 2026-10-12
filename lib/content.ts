// Todo o texto e os dados do site ficam aqui.
// Campos marcados com PENDENTE ainda precisam dos dados reais.

export type TechSlug = "html5" | "css" | "git" | "github" | "javascript" | "python";

export type Project = {
  title: string;
  description: string;
  url: string | null;
  // Caminho dentro de /public, ex.: "/projects/padaria.png" (proporção 16:10).
  image: string | null;
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
  tagline:
    "Crio sites rápidos e bem acabados para negócios que querem ser encontrados e receber mais contatos.",
  url: "https://example.com", // PENDENTE: endereço final do site

  contact: {
    // Só números, com DDI e DDD.
    whatsapp: "5538991067761",
    whatsappMessage: "Olá, Felipe! Vi seu portfólio e quero um orçamento para um site.",
    email: "felipecsantos.dev@gmail.com",
    github: "https://github.com/felipecsantos-dev",
    linkedin: "https://www.linkedin.com/in/felipe-santos-9a5014443/",
  },

  nav: [
    sections.inicio,
    sections.servicos,
    sections.projetos,
    sections.sobre,
    sections.competencias,
  ],

  footerNav: Object.values(sections),

  services: [
    {
      icon: "landing",
      title: "Landing page",
      description:
        "Uma página focada em um objetivo: apresentar sua oferta e levar o visitante a entrar em contato.",
    },
    {
      icon: "institutional",
      title: "Site institucional",
      description:
        "Seu negócio apresentado com clareza: quem você é, o que faz e como falar com você.",
    },
    {
      icon: "store",
      title: "Loja virtual",
      description:
        "Catálogo e vendas online, com uma estrutura que você consegue manter sozinho.",
    },
  ],

  // O primeiro projeto aparece em destaque e no mockup do hero.
  projects: [
    {
      title: "Estúdio Tatuagem",
      description:
        "Site de estudo para um estúdio de tatuagem fictício, feito com HTML e CSS. Visual escuro, tipografia marcante e chamada direta para orçamento.",
      url: "https://estudiotatuagem-eight.vercel.app/",
      image: "/projects/estudio-tatuagem.webp",
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
      "Sou estudante de Análise e Desenvolvimento de Sistemas e crio sites em HTML e CSS, com atenção ao acabamento e ao funcionamento em qualquer tela.",
      "Trabalho desde 2023 com atendimento e orçamentos no varejo. Aprendi a ouvir o que o cliente precisa e a transformar o pedido em uma entrega clara, no prazo combinado.",
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

  // Ícones que orbitam o mockup do hero
  orbit: {
    outer: ["html5", "css", "git", "github"],
    inner: ["javascript", "python"],
  } as { outer: TechSlug[]; inner: TechSlug[] },
};
