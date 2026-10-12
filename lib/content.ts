// Todo o texto e os dados do site ficam aqui.
// Campos marcados com PENDENTE ainda precisam dos dados reais.

export type TechSlug =
  | "html5"
  | "css"
  | "javascript"
  | "typescript"
  | "react"
  | "nextdotjs"
  | "tailwindcss"
  | "nodedotjs"
  | "git"
  | "github"
  | "figma";

export type Project = {
  title: string;
  description: string;
  url: string | null;
  // Caminho dentro de /public, ex.: "/projects/padaria.png" (proporção 16:10).
  image: string | null;
};

export const site = {
  name: "Felipe",
  role: "Desenvolvedor Web",
  tagline:
    "Crio sites rápidos e bem acabados para negócios que querem ser encontrados e receber mais contatos.",
  url: "https://example.com", // PENDENTE: endereço final do site

  contact: {
    // PENDENTE: só números, com DDI e DDD. Ex.: "5511999999999"
    whatsapp: "",
    whatsappMessage: "Olá, Felipe! Vi seu portfólio e quero um orçamento para um site.",
    email: "", // PENDENTE
    github: "", // PENDENTE: URL completa
    linkedin: "", // PENDENTE: URL completa
  },

  nav: [
    { label: "Início", href: "#inicio" },
    { label: "Serviços", href: "#servicos" },
    { label: "Projetos", href: "#projetos" },
    { label: "Sobre", href: "#sobre" },
    { label: "Competências", href: "#competencias" },
  ],

  // PENDENTE: confirmar os tipos de site oferecidos
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

  // PENDENTE: projetos reais (nome, descrição, link e captura de tela)
  projects: [
    {
      title: "Nome do projeto em destaque",
      description:
        "Descrição curta do projeto: para quem foi feito e qual problema resolveu.",
      url: null,
      image: null,
    },
    {
      title: "Nome do segundo projeto",
      description: "Descrição curta do projeto.",
      url: null,
      image: null,
    },
    {
      title: "Nome do terceiro projeto",
      description: "Descrição curta do projeto.",
      url: null,
      image: null,
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
    // PENDENTE: revisar com a sua história
    paragraphs: [
      "Sou desenvolvedor web e estudante de tecnologia. Gosto de transformar uma ideia em um site que funciona bem em qualquer tela e é simples de usar.",
      "Cuido do projeto do início ao fim: estrutura, visual, desempenho e publicação. Você fala direto comigo, sem intermediários.",
    ],
    education: {
      institution: "Nome da faculdade", // PENDENTE
      course: "Nome do curso", // PENDENTE
      status: "Período atual e previsão de formatura", // PENDENTE
    },
  },

  // PENDENTE: confirmar as tecnologias que você domina
  skills: [
    {
      group: "Front-end",
      items: ["html5", "css", "javascript", "typescript", "react", "nextdotjs", "tailwindcss"],
    },
    { group: "Back-end", items: ["nodedotjs"] },
    { group: "Ferramentas", items: ["git", "github", "figma"] },
  ] as { group: string; items: TechSlug[] }[],

  // Ícones que orbitam o mockup do hero
  orbit: {
    outer: ["react", "typescript", "nodedotjs", "figma"],
    inner: ["html5", "css", "javascript"],
  } as { outer: TechSlug[]; inner: TechSlug[] },
};
