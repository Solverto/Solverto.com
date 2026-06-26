import type { Project } from "@/data/projects";
import type { Language } from "@/lib/translations";
import { ProjectCard } from "./ProjectCard";

export function FeaturedProjects({
  projects,
  language
}: {
  projects: Project[];
  language: Language;
}) {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
      {projects.map((project) => (
        <ProjectCard compact key={project.id} language={language} project={project} />
      ))}
    </div>
  );
}
