export type Lang = "pt" | "en";
export type L = Record<Lang, string>; // texto nos dois idiomas

export const profile = {
  name: "Rafael Utiyama",
  email: "rafaelhu763@gmail.com",
  github: "https://github.com/utiyamaRafael",
  linkedin: "https://www.linkedin.com/in/rafaelutiyama/",
  cv: "/CurriculoRafaelUtiyama.pdf",
};

export const ui = {
  role: { pt: "Desenvolvedor Backend", en: "Backend Developer" },
  tagline: {
    pt: "Estudante de Ciência da Computação e estagiário de TI, construindo APIs e sistemas backend com experiência real em suporte a usuários.",
    en: "Computer Science student and IT intern, building APIs and backend systems with real-world experience supporting users.",
  },
    about1: {
    pt: "Formado em técnico de informática pelo IFPR e atualmente cursando Ciência da Computação pela Unifil, estagio desde julho de 2025 no suporte de TI da Prefeitura de Londrina, onde resolvo problemas de hardware e software e padronizo sistemas nas estações de trabalho.",
    en: "I hold a technical degree in IT from IFPR and I'm currently studying Computer Science at Unifil. Since July 2025 I've been interning in IT support at the Londrina city government, where I fix hardware and software issues and standardize systems on workstations.",
  },
  about2: {
    pt: "Meu foco atual é backend com Spring. Fora do estágio, construo projetos próprios, como um sistema para controle de treino para academia(PR_Tracker), sistema de controle de estoque, um app de caixinha de investimento e um jogo em Godot. Busco um estágio ou vaga júnior em backend para aplicar isso em equipe.",
    en: "My current focus is backend with Spring. Outside the internship, I build my own projects, like a gym workout tracking system(PR_Tracker), an inventory control system, an investment savings app and a game in Godot. I'm looking for a backend internship or junior role to apply this in a team.",
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
  eduTitle: { pt: "Formação", en: "Education" },
  expTitle: { pt: "Experiência profissional", en: "Professional experience" },
  skillsTitle: { pt: "Habilidades e stack", en: "Skills and stack" },
};

export const nav: { id: string; label: L }[] = [
  { id: "sobre", label: { pt: "Sobre", en: "About" } },
  { id: "formacao", label: { pt: "Formação", en: "Education" } },
  { id: "experiencia", label: { pt: "Experiência", en: "Experience" } },
  { id: "stack", label: { pt: "Stack", en: "Stack" } },
  { id: "projetos", label: { pt: "Projetos", en: "Projects" } },
  { id: "contato", label: { pt: "Contato", en: "Contact" } },
];

export type EducationItem = { year: string; title: L; place: L };

export const education: EducationItem[] = [
  {
    year: "2025 - 2028",
    title: { pt: "Bacharelado em Ciência da Computação", en: "B.Sc. in Computer Science" },
    place: { pt: "Centro Universitário Filadélfia - UniFil", en: "Philadelphia University Center - UniFil" },
  },
  {
    year: "2021 - 2024",
    title: { pt: "Técnico em Informática Integrado ao Ensino Médio", en: "IT Technician Program Integrated with High School Education" },
    place: { pt: "IFPR", en: "IFPR" },
  },
];

export type ExperienceItem = { period: L; role: L; company: L; bullets: L[]; tags: string[] };

// TODO: troque pelos seus dados reais (pode adicionar quantos itens quiser, do mais recente ao mais antigo)
export const experience: ExperienceItem[] = [
  {
    period: { pt: "07/2025 – Atual", en: "07/2025 – Present" },
    role: { pt: "Estagiário em Técnico em Informática", en: "Information Technology Intern" },
    company: { pt: "Prefeitura Municipal de Londrina", en: "Municipal Government of Londrina" },
    bullets: [
      {
        pt: "Diagnóstico e resolução de problemas de hardware e software, agilizando o atendimento aos usuários.",
        en: "Diagnosing and resolving hardware and software issues to improve user support efficiency.",
      },
      {
        pt: "Instalação, configuração e padronização de sistemas operacionais e softwares corporativos.",
        en: "Installing, configuring, and standardizing operating systems and business software.",
      },
      {
        pt: "Manutenção preventiva e corretiva para garantir a disponibilidade e o desempenho dos equipamentos.",
        en: "Performing preventive and corrective maintenance to ensure equipment availability and performance.",
      },
      {
        pt: "Organização e acompanhamento de chamados para garantir a resolução dentro dos prazos.",
        en: "Organizing and tracking support tickets to ensure timely resolution.",
      }
    ],
    tags: ["Help Desk", "Redes", "Hardware", "Resolução de problemas", "Comunicação com usuários"],
  },
];

export const skills: { group: L; items: string[] }[] = [
  { group: { pt: "Linguagens", en: "Languages" }, items: ["Java", "JavaScript", "Python", "C++", "SQL"] },
  { group: { pt: "Backend / APIs", en: "Backend / APIs" }, items: ["Springboot", "Node.js", "Express", "FastAPI", "PyTorch"] },
  { group: { pt: "Banco de Dados", en: "Databases" }, items: ["PostgreSQL", "MySQL", "MongoDB", "SQLite"] },
  { group: { pt: "DevOps", en: "DevOps" }, items: ["Git", "Docker", "Linux"] },
  { group: { pt: "Metodologias", en: "Methodologies" }, items: ["Scrum", "Kanban", "TDD", "Clean Code"] },
];

export type Project = { title: L; description: L; tags: string[]; github?: string; demo?: string };

export const projects: Project[] = [
  {
    title: { pt: "PR_Tracker", en: "PR_Tracker" },
    description: {
      pt: "Aplicativo para registro e acompanhamento de carga para academia, com histórico, gráficos de evolução.",
      en: "A  pp for logging and tracking gym workout loads, featuring a history log and progress charts.",
    },
    tags: ["Java", "Springboot", "PostgreSQL"],
    github: "https://github.com/UtiyamaRafael/PR-Tracker",
  },
  {
    title: { pt: "EcoRunner", en: "EcoRunner" },
    description: {
      pt: "Jogo 2D com coleta de itens e sistema de inventário, feito em Godot 4.",
      en: "2D game with item pickup and an inventory system, built in Godot 4.",
    },
    tags: ["Godot 4", "GDScript"],
    github: "https://github.com/WitorDev/EcoRunner",
  },
  {
    title: { pt: "Estoque_sistema", en: "Inventory System" },
    description: {
      pt: "Cadastro de produtos, entradas e saídas, com histórico de movimentações e alertas de estoque baixo.",
      en: "Product registry, stock in and out, with movement history and low-stock alerts.",
    },
    tags: ["Python", "FastAPI", "MySQL"],
    github: "https://github.com/UtiyamaRafael/ESTOQUE_SISTEMA.git",
  },
  {
    title: { pt: "MVC_desenvolvimento_web", en: "MVC_desenvolvimento_web" },
    description: {
      pt: "Aplicação da arquitetura MVC para construção de API",
      en: "Application of the MVC architecture for building an API",
    },
    tags: ["TypeScript", "API", "Mobile"],
    github: "https://github.com/UtiyamaRafael/MVC_desenvolvimento_web",
    demo: "#",
  },
];
