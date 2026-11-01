import { motion } from 'framer-motion'
import hero1 from '../assets/hero/hero1.png'
import hero2 from '../assets/hero/hero2.png'

export default function Hero() {
  function openChat() {
    window.dispatchEvent(new Event('open-chat'))
  }

  return (
    <section
      id="hero"
      className="relative mx-auto max-w-7xl overflow-hidden px-6 py-24 lg:py-32"
    >
      <div className="grid items-center gap-6 lg:grid-cols-[1fr_3.2fr_1fr]">
        {/* Картинка слева — hero2 */}
        <motion.div
          className="hidden lg:block"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.img
            src={hero2}
            alt=""
            className="w-full max-w-sm -ml-10"
            animate={{ y: [0, -35, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </motion.div>

        {/* Центр — текст и кнопки */}
        <motion.div
          className="flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <p className="mb-4 text-sm uppercase tracking-widest text-accent-2">
            Frontend + AI
          </p>

          <h1 className="mb-6 max-w-3xl text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Сайт,{' '}
            <span className="bg-gradient-to-r from-accent to-accent-2 bg-clip-text text-transparent">
              AI-помощник
            </span>{' '}
            и визуал —{' '}
            <span className="bg-gradient-to-r from-accent-2 to-accent bg-clip-text text-transparent">
              под ключ
            </span>
          </h1>

          <p className="mb-10 max-w-xl text-lg text-muted">
            Создаю сайты, которые отвечают клиентам 24/7, генерирую уникальный
            визуал и подключаю QR-коды. Всё — в одном месте, от концепта до
            деплоя.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#services"
              className="rounded-btn bg-accent px-6 py-3 font-medium text-text transition-colors hover:bg-accent-hover"
            >
              Смотреть услуги
            </a>
            <button
              type="button"
              onClick={openChat}
              className="rounded-btn border border-border px-6 py-3 font-medium text-text transition-colors hover:border-accent-2 hover:text-accent-2"
            >
              Поговорить с ботом
            </button>
          </div>
        </motion.div>

        <motion.div
          className="hidden lg:block"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.img
            src={hero1}
            alt=""
            className="w-full max-w-sm ml-auto -mr-8"
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1.5,
            }}
          />
        </motion.div>
      </div>
    </section>
  )
}