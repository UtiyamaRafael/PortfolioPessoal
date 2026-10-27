import type { L } from "./content";

// Dados extras usados pela versão 4. Os valores marcados com TODO são exemplos: edite antes de publicar.

export const extra = {
  avatar: "https://github.com/utiyamaRafael.png",
  location: { pt: "Londrina, PR · Brasil", en: "Londrina, PR · Brazil" } as L,
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
    { pt: "Português (nativo)", en: "Portuguese (native)" },
    { pt: "Inglês (avançado)", en: "English (advanced)" },
  ] as L[],
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
