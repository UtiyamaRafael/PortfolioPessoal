export type Lang = "pt" | "en";
export type L = Record<Lang, string>; // texto nos dois idiomas

export const profile = {
  name: "Rafael Utiyama",
  email: "rafaelhu763@email.com", // TODO
  github: "https://github.com/utiyamaRafael",
  linkedin: "https://linkedin.com/in/rafaelutiyama", // TODO
  cv: "/CurriculoRafaelUtiyama.pdf",
};

export const ui = {
  role: { pt: "Desenvolvedor Backend", en: "Backend Developer" },
  tagline: {
    pt: "Estudante de Ciência da Computação construindo APIs, bancos de dados e sistemas que funcionam de verdade.",
    en: "Computer Science student building APIs, databases and systems that actually work.",
  },
  about1: {
    pt: "Estou no segundo ano de Ciência da Computação e meu foco é desenvolvimento backend: modelagem de dados, APIs REST e regras de negócio bem testadas.",
    en: "I'm in my second year of Computer Science, focused on backend development: data modeling, REST APIs and well-tested business rules.",
  },
  about2: {
    pt: "Aprendo construindo. Meus projetos pessoais vão de sistemas de controle de estoque a jogos, e estou buscando um estágio ou vaga júnior para aplicar isso em equipe.",
    en: "I learn by building. My personal projects range from inventory systems to games, and I'm looking for an internship or junior role to apply this in a team.",
  },
  cv: { pt: "Baixar CV", en: "Download CV" },
  email: { pt: "Email", en: "Email" },
  contactText: {
    pt: "Estou buscando estágio ou vaga júnior em backend. Me mande uma mensagem e respondo em até 2 dias úteis.",
    en: "I'm looking for a backend internship or junior role. Send me a message and I'll reply within 2 business days.",
  },
  namePh: { pt: "Seu nome", en: "Your name" },
  emailPh: { pt: "Seu email", en: "Your email" },
  messagePh: { pt: "Mensagem", en: "Message" },
  send: { pt: "Enviar mensagem", en: "Send message" },
  subject: { pt: "Contato pelo portfólio", en: "Portfolio contact" },
  code: { pt: "Código", en: "Code" },
  themeLabel: { pt: "Alternar tema", en: "Toggle theme" },
  langLabel: { pt: "Mudar idioma", en: "Change language" },
  expTitle: { pt: "Experiência e formação", en: "Experience and education" },
  skillsTitle: { pt: "Habilidades e stack", en: "Skills and stack" },
};

export const nav: { id: string; label: L }[] = [
  { id: "sobre", label: { pt: "Sobre", en: "About" } },
  { id: "trajetoria", label: { pt: "Trajetória", en: "Experience" } },
  { id: "stack", label: { pt: "Stack", en: "Stack" } },
  { id: "projetos", label: { pt: "Projetos", en: "Projects" } },
  { id: "contato", label: { pt: "Contato", en: "Contact" } },
];

export type TimelineItem = { period: L; title: L; place: L; description: L; type: "formacao" | "experiencia" };

export const timeline: TimelineItem[] = [
  {
    period: { pt: "2025 – 2028", en: "2025 – 2028" },
    title: { pt: "Bacharelado em Ciência da Computação", en: "B.Sc. in Computer Science" },
    place: { pt: "Unifil", en: "Unifil" },
    description: {
      pt: "Algoritmos, estruturas de dados, bancos de dados e engenharia de software.",
      en: "Algorithms, data structures, databases and software engineering.",
    },
    type: "formacao",
  },
  {
    period: { pt: "2021 – 2024", en: "2021 – 2024" },
    title: { pt: "Curso técnico de TI", en: "Technical course in IT" },
    place: { pt: "IFPR", en: "IFPR" },
    description: {
      pt: "Desenvolvimento de sistemas completos, do modelo de dados à interface.",
      en: "Building complete systems, from the data model to the interface.",
    },
    type: "formacao",
  },
];

export const skills: { group: L; items: string[] }[] = [
  { group: { pt: "Linguagens", en: "Languages" }, items: ["Java", "JavaScript", "Python", "C++", "SQL"] },
  { group: { pt: "Backend / APIs", en: "Backend / APIs" }, items: ["Springboot", "Node.js", "Express", "NestJS", "REST", "JWT"] },
  { group: { pt: "Banco de Dados", en: "Databases" }, items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"] },
  { group: { pt: "DevOps", en: "DevOps" }, items: ["Git", "Docker", "Linux"] },
  { group: { pt: "Metodologias", en: "Methodologies" }, items: ["Scrum", "Kanban", "TDD", "Clean Code"] },
];

export type Project = { title: L; description: L; tags: string[]; github?: string; demo?: string };

export const projects: Project[] = [
  {
    title: { pt: "Sistema de Controle de Estoque", en: "Inventory Control System" },
    description: {
      pt: "Cadastro de produtos, entradas e saídas, com histórico de movimentações e alertas de estoque baixo.",
      en: "Product registry, stock in and out, with movement history and low-stock alerts.",
    },
    tags: ["Node.js", "PostgreSQL", "REST"],
    github: "https://github.com/utiyamaRafael",
  },
  {
    title: { pt: "Jogo top-down com inventário", en: "Top-down game with inventory" },
    description: {
      pt: "Jogo 2D com coleta de itens e sistema de inventário, feito em Godot 4.",
      en: "2D game with item pickup and an inventory system, built in Godot 4.",
    },
    tags: ["Godot 4", "GDScript"],
    github: "https://github.com/utiyamaRafael",
  },
  {
    title: { pt: "App de Caixinha de Investimento", en: "Investment Savings Box App" },
    description: {
      pt: "Aplicativo para registrar aportes e acompanhar a evolução de metas financeiras.",
      en: "App to log contributions and track progress toward financial goals.",
    },
    tags: ["TypeScript", "API", "Mobile"],
    github: "https://github.com/utiyamaRafael",
    demo: "#",
  },
];
