import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Solverto — Gry, 3D, architektura realtime i interaktywne światy",
  description:
    "Solverto tworzy gry, assety 3D, modele inwestycji, levele, środowiska realtime, metaverse i interaktywne doświadczenia dla biznesu oraz gamedevu.",
  metadataBase: new URL("https://solverto.com"),
  openGraph: {
    title: "Solverto — Games, 3D and realtime interactive worlds",
    description:
      "Production-ready 3D assets, game levels, realtime architecture, metaverse spaces and interactive experiences.",
    url: "https://solverto.com",
    siteName: "Solverto",
    images: [
      {
        url: "/graphics/hero-world.svg",
        width: 1200,
        height: 630,
        alt: "Abstract Solverto realtime 3D world"
      }
    ],
    locale: "pl_PL",
    type: "website"
  },
  icons: {
    icon: "/brand/favicon.svg"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="pl">
      <body>
        <div className="noise" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
