import { motion } from 'framer-motion'
import { processSteps } from '../data/process'

export default function Process() {
  return (
    <section
      id="process"
      className="relative mx-auto max-w-6xl overflow-hidden border-t border-border px-6 py-24"
    >
      {/* Заголовок */}
      <motion.div
        className="mx-auto mb-16 max-w-3xl text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <p className="mb-3 text-sm uppercase tracking-widest text-accent-2">
          Понятный процесс
        </p>
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">
          Как я{' '}
          <span className="bg-gradient-to-r from-accent to-accent-2 bg-clip-text text-transparent">
            работаю
          </span>
        </h2>
        <p className="text-lg text-muted">
          От первого сообщения до запуска, четыре прозрачных шага.
        </p>
      </motion.div>

      {/* Таймлайн */}
      <div className="relative">
        {/* Горизонтальная линия на десктопе */}
        <div className="pointer-events-none absolute left-0 right-0 top-10 hidden h-0.5 md:block">
          <div className="relative h-full w-full bg-border/40">
            <motion.div
              className="absolute left-0 top-0 h-full bg-gradient-to-r from-accent to-accent-2"
              initial={{ width: '0%' }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1.6, ease: 'easeInOut' }}
            />
          </div>
        </div>

        {/* Вертикальная линия на мобилке */}
        <div className="pointer-events-none absolute bottom-0 left-5 top-0 w-0.5 md:hidden">
          <div className="relative h-full w-full bg-border/40">
            <motion.div
              className="absolute left-0 top-0 w-full bg-gradient-to-b from-accent to-accent-2"
              initial={{ height: '0%' }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.6, ease: 'easeInOut' }}
            />
          </div>
        </div>

        {/* Шаги */}
        <div className="grid gap-10 md:grid-cols-4 md:gap-6">
          {processSteps.map(({ id, title, description, Icon }, index) => (
            <motion.div
              key={id}
              className="relative flex flex-row gap-4 md:flex-col md:items-center md:gap-0 md:text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                ease: 'easeOut',
                delay: 0.3 + index * 0.2,
              }}
            >
              {/* Кружок с иконкой */}
              <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-2 text-text shadow-[0_0_30px_-8px_rgba(139,92,246,0.8)] md:h-20 md:w-20">
                <Icon className="text-base md:text-3xl" />
              </div>

              {/* Текст */}
              <div className="md:mt-6">
                <p className="mb-1 text-xs uppercase tracking-widest text-accent-2">
                  Шаг {id}
                </p>
                <h3 className="mb-2 text-lg font-bold md:text-xl">{title}</h3>
                <p className="text-sm text-muted">{description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}