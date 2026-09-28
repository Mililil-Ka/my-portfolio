export default function ProjectCard({ project }) {
  return (
    <article className="rounded-2xl border border-[#2A3454] bg-[#1E2640] p-6 flex flex-col">
      <h3 className="text-xl font-semibold">{project.title}</h3>
      <p className="mt-2 text-sm text-[#94A3B8]">{project.tagline}</p>
      <ul className="mt-4 flex flex-wrap gap-2 text-xs">
        {project.stack.map((s) => (
          <li key={s} className="rounded-full border border-[#2A3454] px-3 py-1 text-[#94A3B8]">
            {s}
          </li>
        ))}
      </ul>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-block text-sm text-[#06B6D4] hover:text-[#8B5CF6] transition"
      >
        Открыть →
      </a>
    </article>
  )
}