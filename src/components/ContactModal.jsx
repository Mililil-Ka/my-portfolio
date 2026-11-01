import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTelegramPlane, FaWhatsapp, FaEnvelope } from 'react-icons/fa'
import { FiMessageCircle, FiX } from 'react-icons/fi'

const MAX_PHONE = '+79964128534'

const contacts = [
  {
    id: 'telegram',
    label: 'Telegram',
    sublabel: '@bug_bug97',
    Icon: FaTelegramPlane,
    color: '#229ED9',
    href: 'https://t.me/bug_bug97',
    external: true,
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    sublabel: '+7 996 412-85-34',
    Icon: FaWhatsapp,
    color: '#25D366',
    href: 'https://wa.me/79964128534',
    external: true,
  },
  {
    id: 'max',
    label: 'MAX',
    sublabel: MAX_PHONE,
    Icon: FiMessageCircle,
    color: '#8B5CF6',
    // У MAX пока нет публичных deeplink — копируем номер в буфер
    action: 'copy',
    phone: MAX_PHONE,
  },
  {
    id: 'email',
    label: 'Email',
    sublabel: 'irinaka307@gmail.com',
    Icon: FaEnvelope,
    color: '#06B6D4',
    href: 'mailto:irinaka307@gmail.com',
    external: false,
  },
]

export default function ContactModal({ isOpen, onClose }) {
  // Блокируем скролл body когда модалка открыта
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // Закрытие по Escape
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen, onClose])

  async function handleMaxClick(phone) {
    try {
      await navigator.clipboard.writeText(phone)
      alert(`Номер ${phone} скопирован. Откройте MAX и вставьте его в поиске.`)
    } catch {
      alert(`Откройте MAX и напишите на номер: ${phone}`)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-bg/70 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
        >
          <motion.div
            className="relative w-full max-w-md rounded-card border border-border bg-card p-6 shadow-2xl"
            initial={{ scale: 0.95, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 20, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Кнопка закрытия */}
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 text-muted transition-colors hover:text-text"
              aria-label="Закрыть"
            >
              <FiX size={20} />
            </button>

            <h3 className="mb-1 text-xl font-bold">Связаться со мной</h3>
            <p className="mb-6 text-sm text-muted">
              Выберите удобный способ — отвечу быстро.
            </p>

            <div className="flex flex-col gap-3">
              {contacts.map(({ id, label, sublabel, Icon, color, href, action, phone, external }) => {
                const content = (
                  <>
                    <span
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
                      style={{ backgroundColor: `${color}20`, color }}
                    >
                      <Icon size={18} />
                    </span>
                    <span className="flex flex-col text-left">
                      <span className="font-medium">{label}</span>
                      <span className="text-xs text-muted">{sublabel}</span>
                    </span>
                  </>
                )

                if (action === 'copy') {
                  return (
                    <button
                      key={id}
                      type="button"
                      onClick={() => handleMaxClick(phone)}
                      className="flex items-center gap-3 rounded-btn border border-border bg-bg px-4 py-3 transition-colors hover:border-accent hover:bg-card"
                    >
                      {content}
                    </button>
                  )
                }

                return (
                  <a
                    key={id}
                    href={href}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-3 rounded-btn border border-border bg-bg px-4 py-3 transition-colors hover:border-accent hover:bg-card"
                  >
                    {content}
                  </a>
                )
              })}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}