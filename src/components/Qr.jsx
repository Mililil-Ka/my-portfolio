import { motion } from 'framer-motion'
import { qrProjects } from '../data/qrProjects'

export default function Qr() {
  return (
    <section
      id="qr"
      className="relative mx-auto max-w-6xl overflow-hidden border-t border-border px-6 py-24"
    >
      {/* Заголовок */}
      <motion.div
        className="mx-auto mb-14 max-w-3xl text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <p className="mb-3 text-sm uppercase tracking-widest text-accent-2">
          Живые проекты
        </p>
        <h2 className="mb-4 text-3xl font-bold md:text-6xl">
          <span className="bg-gradient-to-r from-accent to-accent-2 bg-clip-text text-transparent">
            QR-коды
          </span>
        </h2>
        <p className="text-lg text-muted">
          Наведи камеру телефона или кликни, чтобы открыть сайт. Каждый QR
          ведёт на проект.
        </p>
      </motion.div>

      {/* Карточки проектов */}
      <div className="grid gap-8 md:grid-cols-2">
        {qrProjects.map((project, i) => (
          <motion.article
            key={project.id}
            className="group flex flex-col overflow-hidden rounded-card border border-border bg-card transition-all duration-300 hover:border-accent hover:shadow-[0_0_40px_-10px_rgba(139,92,246,0.5)]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: i * 0.15 }}
          >
            {/* Превью (скриншот сайта) */}
            <div className="relative aspect-video overflow-hidden border-b border-border">
              <img
                src={project.preview}
                alt={project.title}
                className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Текст + QR + кнопка */}
            <div className="flex flex-col gap-4 p-6">
              <div>
                <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
                <p className="text-sm text-muted">{project.description}</p>
              </div>

              {/* Технологии */}
              <ul className="flex flex-wrap gap-2 text-xs">
                {project.stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-border px-3 py-1 text-muted"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              {/* QR + кнопка */}
              <div className="mt-2 flex items-center gap-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 rounded-btn bg-white p-2 transition-transform duration-300 hover:scale-105"
                  title="Отсканируй или кликни"
                >
                  <img
                    src={project.qr}
                    alt={`QR-код: ${project.title}`}
                    className="h-24 w-24"
                  />
                </a>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-accent-2 transition-colors hover:text-accent"
                >
                  Открыть сайт →
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}