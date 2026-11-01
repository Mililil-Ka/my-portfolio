import { FaTelegramPlane, FaWhatsapp, FaEnvelope, FaGithub } from 'react-icons/fa'
import { FiMessageCircle } from 'react-icons/fi'

const links = [
  {
    id: 'telegram',
    label: 'Telegram',
    Icon: FaTelegramPlane,
    href: 'https://t.me/bug_bug97',
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    Icon: FaWhatsapp,
    href: 'https://wa.me/79964128534',
  },
  {
    id: 'max',
    label: 'MAX',
    Icon: FiMessageCircle,
    href: null,
  },
  {
    id: 'email',
    label: 'Email',
    Icon: FaEnvelope,
    href: 'mailto:irinaka307@gmail.com',
  },
  {
    id: 'github',
    label: 'GitHub',
    Icon: FaGithub,
    href: 'https://github.com/Mililil-Ka',
  },
]

export default function Footer() {
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
    <footer id="contact" className="relative mt-20">
      {/* Градиентная полоска сверху */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-accent to-transparent" />

      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col items-center gap-6 text-sm text-muted md:flex-row md:justify-between">
          {/* Левая часть — копирайт */}
          <div className="text-center md:text-left">
            <p className="font-semibold text-text">
              <span className="bg-gradient-to-r from-accent to-accent-2 bg-clip-text text-transparent">
                Irina_Ka
              </span>{' '}
              © {new Date().getFullYear()}
            </p>
            <p className="mt-1 text-xs">
              Сделано с ♥ на React + Vite
            </p>
          </div>

          {/* Правая часть — контакты */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            {links.map(({ id, label, Icon, href }) => {
              const sharedClass =
                'flex items-center gap-2 transition-colors hover:text-text'

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
                  >
                    <Icon size={14} />
                    <span className="hidden sm:inline">{label}</span>
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
                >
                  <Icon size={14} />
                  <span className="hidden sm:inline">{label}</span>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}