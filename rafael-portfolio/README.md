# Portfólio · Rafael Utiyama

Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion.
Tema claro/escuro, PT/EN, scroll-spy no menu, filtros de projetos e brilho que segue o mouse.

## Rodar

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de produção
```

## O que editar

| Arquivo | Conteúdo |
| --- | --- |
| `src/data/content.ts` | Nome, email, links, textos PT/EN, timeline, stack e projetos |
| `src/data/extra.ts` | Estatísticas, idiomas, detalhes da experiência, filtros, certificados e CTA |
| `public/cv-rafael-utiyama.pdf` | Seu currículo (o botão "Baixar CV" aponta para ele) |

Procure por `TODO` nesses arquivos: são valores de exemplo (email, LinkedIn, universidade, certificados, números).

## Estrutura

```
src/
├── app/            layout.tsx, globals.css, page.tsx (página principal)
├── components/     Controls (idioma e tema), Reveal (animação de entrada)
├── data/           content.ts, extra.ts
└── hooks/          usePrefs.ts (tema e idioma salvos no localStorage)
```

## Publicar

Na Vercel: importe o repositório do GitHub e clique em Deploy, sem configurar nada.
