import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rafael Utiyama · Desenvolvedor Backend",
  description:
    "Portfólio de Rafael Utiyama, estudante de Ciência da Computação com foco em backend: APIs, bancos de dados e regras de negócio.",
  openGraph: {
    title: "Rafael Utiyama · Desenvolvedor Backend",
    description: "APIs, bancos de dados e sistemas que funcionam de verdade.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#09090b",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
