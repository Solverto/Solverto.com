import type { Project } from "@/data/projects";
import type { Language } from "@/lib/translations";
import { Icon } from "./Icons";

const categoryIcon = {
  architecture: "building",
  gamedev: "gamepad",
  metaverse: "vr",
  support: "nodes",
  analysis: "search",
  animation: "film"
} as const;

const descriptionKey = {
  pl: "descriptionPL",
  en: "descriptionEN",
  de: "descriptionDE",
  es: "descriptionES"
} as const;

export function ProjectCard({
  project,
  language,
  compact = false
}: {
  project: Project;
  language: Language;
  compact?: boolean;
}) {
  return (
    <article className="glass-panel reveal group overflow-hidden rounded-2xl transition duration-300 hover:-translate-y-1 hover:border-cyan/35 hover:shadow-cyan">
      <div className="relative grid aspect-[16/10] place-items-center overflow-hidden bg-[radial-gradient(circle_at_28%_18%,rgba(246,157,9,0.28),transparent_30%),linear-gradient(135deg,#1b2129,#090909)]">
        <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(45,191,232,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(45,191,232,0.15)_1px,transparent_1px)] [background-size:34px_34px]" />
        <Icon
          name={categoryIcon[project.category]}
          className="relative h-16 w-16 text-gold transition duration-300 group-hover:scale-110"
        />
        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          {project.isFeatured ? (
            <span className="rounded-full bg-gold px-3 py-1 text-xs font-black text-obsidian">
              Featured
            </span>
          ) : null}
          {project.isLargest ? (
            <span className="rounded-full bg-cyan px-3 py-1 text-xs font-black text-obsidian">
              Largest
            </span>
          ) : null}
        </div>
      </div>
      <div className="grid gap-3 p-5">
        <div className="flex flex-wrap items-center gap-2 text-xs font-black uppercase tracking-[0.14em] text-gold">
          <span>{project.category}</span>
          {project.country ? <span className="text-muted">· {project.country}</span> : null}
        </div>
        <h3 className="text-xl font-black leading-tight text-bone">{project.title}</h3>
        <p className="text-sm font-semibold text-muted">
          {[project.client, project.partner, project.serviceType].filter(Boolean).join(" · ")}
        </p>
        {!compact ? (
          <p className="line-clamp-4 text-sm leading-7 text-muted">
            {project[descriptionKey[language]]}
          </p>
        ) : null}
      </div>
    </article>
  );
}
