import { projects } from "@/lib/data/projects";
import RetroWindow from "@/components/RetroWindow";

export default function ProjectsSection() {
  return (
    <RetroWindow id="projects" title="C:\PORTFOLIO\PROJECTS" objCount={projects.length}>
      <p className="text-sm text-win-text-dim mb-6">
        Live repositories, pulled straight from github.com/Abirh10
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {projects.map((project) => (
          <a
            key={project.code}
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="bevel-out p-4 flex flex-col gap-3 hover:brightness-95"
          >
            <div className="flex items-baseline justify-between gap-2">
              <span className="font-pixel-title text-[10px] text-win-accent">
                FILE {project.code}
              </span>
              <span className="font-pixel-body text-[11px] text-win-text-dim">↗ GITHUB</span>
            </div>
            <div>
              <h3 className="font-pixel-title text-sm mb-1">{project.title}</h3>
              <p className="text-sm text-win-accent">{project.tagline}</p>
            </div>
            <p className="text-base">{project.description}</p>
            <ul className="flex flex-col gap-1 text-sm text-win-text-dim">
              {project.features.map((feature) => (
                <li key={feature} className="flex gap-2">
                  <span className="text-win-accent shrink-0">▸</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 mt-auto pt-2">
              {project.tech.map((t) => (
                <span key={t} className="bevel-in text-xs px-2 py-1 font-pixel-body">
                  {t}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </RetroWindow>
  );
}
