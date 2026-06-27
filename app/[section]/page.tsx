import type { Metadata } from "next";
import { SitePage } from "@/components/SitePage";

const sectionMeta = {
  services: {
    title: "Solverto Services — 3D, games, realtime and interactive production",
    description:
      "Game Art & 3D Production, Architecture & Real Estate 3D, Game Development, Realtime, VR, AR, Metaverse and interactive content."
  },
  architecture: {
    title: "Solverto Architecture — realtime real estate 3D references",
    description:
      "Architecture and real estate 3D references including investment modeling, PZT/PTT preparation, production fixes and analysis."
  },
  games: {
    title: "Solverto Games — levels, prototypes and game production work",
    description:
      "Selected game production work, level design, environments, prototypes and Solverto Games original IP development."
  },
  metaverse: {
    title: "Solverto Metaverse — rooms, mazes, avatars and interactive worlds",
    description:
      "Metaverse spaces, event rooms, mazes, Pulse Guys levels, Wild Rush avatars, animations and interactive 3D experiences."
  },
  portfolio: {
    title: "Solverto Portfolio — project references and production experience",
    description:
      "Filtered portfolio of Solverto architecture, gamedev, metaverse, analysis and production support references."
  },
  about: {
    title: "About Solverto — Solverto Studio, Solverto Games and Solverto Group",
    description:
      "About Solverto Group and its production ecosystem across 3D, games, realtime architecture, metaverse and interactive technologies."
  },
  cooperation: {
    title: "Solverto Cooperation — brief, NDA, estimate, pilot, production and delivery",
    description:
      "How cooperation with Solverto works, from brief and NDA through scope, pilot, production, review, delivery and support."
  },
  contact: {
    title: "Contact Solverto — start cooperation",
    description:
      "Contact Solverto for 3D production, architecture, game development, realtime, VR, AR, metaverse, animation, publishing or investment."
  }
} as const;

type SectionSlug = keyof typeof sectionMeta;

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(sectionMeta).map((section) => ({ section }));
}

export function generateMetadata({
  params
}: {
  params: { section: SectionSlug };
}): Metadata {
  const meta = sectionMeta[params.section];

  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://solverto.com/${params.section}`,
      images: [
        {
          url: "/graphics/hero-world.svg",
          width: 1200,
          height: 630,
          alt: "Solverto realtime 3D visual"
        }
      ]
    }
  };
}

export default function SectionPage({
  params
}: {
  params: { section: SectionSlug };
}) {
  return <SitePage initialSection={params.section} />;
}
