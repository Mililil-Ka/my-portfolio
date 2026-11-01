import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaTelegramPlane, FaWhatsapp, FaEnvelope } from 'react-icons/fa'
import { FiMessageCircle } from 'react-icons/fi'
import ContactModal from './ContactModal'

const quickContacts = [
  {
    id: 'telegram',
    label: 'Telegram',
    Icon: FaTelegramPlane,
    color: '#229ED9',
    href: 'https://t.me/bug_bug97',
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    Icon: FaWhatsapp,
    color: '#25D366',
    href: 'https://wa.me/79964128534',
  },
  {
    id: 'max',
    label: 'MAX',
    Icon: FiMessageCircle,
    color: '#8B5CF6',
    href: null, // обрабатываем отдельно
  },
  {
    id: 'email',
    label: 'Email',
    Icon: FaEnvelope,
    color: '#06B6D4',
    href: 'mailto:irinaka307@gmail.com',
  },
]

export default function Cta() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  async function handleMaxClick() {
    const phone = '+79964128534'
    try {
      await navigator.clipboard.writeText(phone)
      alert(`Номер ${phone} скопирован. Откройте MAX и напишите мне.`)
    } catch {
      alert(`Откройте MAX и напишите на номер: ${phone}`)
    }
  }

  return (
    <section className="relative mx-auto max-w-6xl overflow-hidden px-6 py-24">
      <motion.div
        className="relative overflow-hidden rounded-card border border-border bg-gradient-to-br from-card to-bg p-10 md:p-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        {/* Декоративное свечение */}
        <div className="pointer-events-none absolute -right-32 -top-32 h-64 w-64 rounded-full bg-accent/20 blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-accent-2/20 blur-[100px]" />

        <div className="relative flex flex-col items-center text-center">
          <p className="mb-3 text-sm uppercase tracking-widest text-accent-2">
            Свяжитесь со мной
          </p>
          <h2 className="mb-4 max-w-2xl text-3xl font-bold md:text-4xl lg:text-5xl">
            Готовы обсудить{' '}
            <span className="bg-gradient-to-r from-accent to-accent-2 bg-clip-text text-transparent">
              проект?
            </span>
          </h2>
          <p className="mb-8 max-w-xl text-lg text-muted">
            Расскажите идею — я предложу решение, сроки и стоимость. Без
            обязательств и воды.
          </p>

          {/* Большая кнопка */}
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="rounded-btn bg-accent px-8 py-4 text-lg font-medium text-text transition-colors hover:bg-accent-hover"
          >
            Обсудить проект
          </button>

          {/* Иконки-ссылки */}
          <div className="mt-8 flex items-center gap-4">
            {quickContacts.map(({ id, label, Icon, color, href }) => {
              const sharedClass =
                'flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card transition-all duration-300 hover:scale-110'
              const iconElement = (
                <Icon
                  size={18}
                  style={{ color }}
                  className="transition-transform"
                />
              )

              if (href) {
                return (
                  <a
                    key={id}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={
                      href.startsWith('http') ? 'noopener noreferrer' : undefined
                    }
                    className={sharedClass}
                    title={label}
                    aria-label={label}
                  >
                    {iconElement}
                  </a>
                )
              }

              return (
                <button
                  key={id}
                  type="button"
                  onClick={handleMaxClick}
                  className={sharedClass}
                  title={label}
                  aria-label={label}
                >
                  {iconElement}
                </button>
              )
            })}
          </div>
        </div>
      </motion.div>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  )
}