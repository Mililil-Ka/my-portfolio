import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20 border-t border-[#2A3454]">
      <h2 className="mb-10 text-3xl font-bold">Проекты</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  )
}