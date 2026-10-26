import type { L } from "./content";

// Dados extras usados pela versão 4. Os valores marcados com TODO são exemplos: edite antes de publicar.

export const extra = {
  avatar: "https://github.com/utiyamaRafael.png",
  location: { pt: "Brasil", en: "Brazil" } as L,
  skip: { pt: "Pular para o conteúdo", en: "Skip to content" } as L,
  rotating: {
    pt: ["APIs REST", "Bancos de dados", "Regras de negócio"],
    en: ["REST APIs", "Databases", "Business rules"],
  },
  // TODO: ajuste os números para a sua realidade
  stats: [
    { value: "2º", label: { pt: "ano de graduação", en: "year of degree" } as L },
    { value: "3", label: { pt: "projetos em destaque", en: "featured projects" } as L },
    { value: "10+", label: { pt: "repositórios públicos", en: "public repositories" } as L },
  ],
  educationTitle: { pt: "Formação", en: "Education" } as L,
  languagesTitle: { pt: "Idiomas", en: "Languages" } as L,
  languages: [
    { pt: "Português (nativo)", en: "Portuguese (native)" }, // TODO
    { pt: "Inglês (leitura técnica)", en: "English (technical reading)" }, // TODO
  ] as L[],
  // Detalhes de cada item da timeline (mesma ordem de `timeline` em content.ts)
  timelineDetails: [
    {
      bullets: [
        { pt: "Foco em algoritmos, estruturas de dados e bancos de dados.", en: "Focus on algorithms, data structures and databases." },
        { pt: "Projetos acadêmicos em equipe com Git e metodologias ágeis.", en: "Team academic projects using Git and agile methods." },
      ] as L[],
      tags: ["SQL", "Java", "Git"],
    },
    {
      bullets: [
        { pt: "Modelagem de dados e criação de APIs REST.", en: "Data modeling and REST API design." },
        { pt: "Versionamento e documentação de cada projeto no GitHub.", en: "Versioning and documenting every project on GitHub." },
      ] as L[],
      tags: ["Node.js", "PostgreSQL", "REST"],
    },
    {
      bullets: [{ pt: "Descreva aqui o que você aprendeu e entregou.", en: "Describe here what you learned and delivered." }] as L[],
      tags: ["TODO"],
    },
  ],
  projectsFilters: [
    { id: "all", label: { pt: "Todos", en: "All" } as L },
    { id: "api", label: { pt: "APIs", en: "APIs" } as L },
    { id: "game", label: { pt: "Jogos", en: "Games" } as L },
    { id: "mobile", label: { pt: "Mobile", en: "Mobile" } as L },
  ],
  // Categorias de cada projeto (mesma ordem de `projects` em content.ts)
  projectCats: [["api"], ["game"], ["mobile", "api"]],
  seeAll: { pt: "Ver todos no GitHub", en: "See all on GitHub" } as L,
  certsTitle: { pt: "Certificações", en: "Certifications" } as L,
  // TODO: troque pelos seus certificados
  certs: [
    { name: "Nome do curso ou certificado", org: "Plataforma", url: "#" },
    { name: "Outro certificado", org: "Instituição", url: "#" },
  ],
  cta: {
    next: { pt: "Próximo passo", en: "Next step" } as L,
    title: { pt: "Vamos construir algo juntos?", en: "Shall we build something together?" } as L,
    text: {
      pt: "Aberto a estágio, vaga júnior, colaborações ou só uma boa conversa sobre backend.",
      en: "Open to internships, junior roles, collaborations or just a good chat about backend.",
    } as L,
    copy: { pt: "Copiar e-mail", en: "Copy email" } as L,
    copied: { pt: "E-mail copiado!", en: "Email copied!" } as L,
  },
};
