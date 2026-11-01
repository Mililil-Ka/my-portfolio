import { useState } from 'react'
import { motion } from 'framer-motion'
import { services } from '../data/services'
import ContactModal from './ContactModal'

export default function Services() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section
      id="services"
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
          Что я делаю
        </p>
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">
          Мои{' '}
          <span className="bg-gradient-to-r from-accent to-accent-2 bg-clip-text text-transparent">
            услуги
          </span>
        </h2>
        <p className="text-lg text-muted">
          От идеи до запуска. По отдельности или в комплексе — выбирай, что
          нужно именно тебе.
        </p>
      </motion.div>

      {/* Карточки зигзагом */}
      <div className="flex flex-col gap-12">
        {services.map(({ id, title, description, Icon, side }, index) => {
          const isLeft = side === 'left'
          return (
            <motion.article
              key={id}
              className={`grid items-center gap-8 md:grid-cols-2 ${
                isLeft ? '' : 'md:[&>*:first-child]:order-2'
              }`}
              initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.7,
                ease: 'easeOut',
                delay: index * 0.1,
              }}
            >
              {/* Иконка */}
              <div className="flex justify-center md:justify-start">
                <motion.div
                  className="flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-accent/20 to-accent-2/20 backdrop-blur-sm"
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: index * 0.3,
                  }}
                >
                  <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-2 text-text shadow-[0_0_40px_-8px_rgba(139,92,246,0.7)]">
                    <Icon size={40} />
                  </div>
                </motion.div>
              </div>

              {/* Текст + кнопка */}
              <div className="text-center md:text-left">
                <h3 className="mb-3 text-2xl font-bold">{title}</h3>
                <p className="mb-6 text-muted">{description}</p>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="rounded-btn bg-accent px-6 py-3 font-medium text-text transition-colors hover:bg-accent-hover"
                >
                  Заказать
                </button>
              </div>
            </motion.article>
          )
        })}
      </div>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  )
}