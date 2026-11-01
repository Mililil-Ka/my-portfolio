import { motion } from 'framer-motion'
import {
  SiReact,
  SiVite,
  SiTailwindcss,
  SiFramer,
  SiTypescript,
  SiJavascript,
  SiProbot,
  SiNodedotjs,
  SiGithub,
  SiVercel,
} from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'
import avatar from '../assets/about/avatar.png'

const stack = [
  { name: 'React', Icon: SiReact, color: '#61DAFB' },
  { name: 'Vite', Icon: SiVite, color: '#646CFF' },
  { name: 'Tailwind CSS', Icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Framer Motion', Icon: SiFramer, color: '#E64CE5' },
  { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6' },
  { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
  { name: 'ProxyAPI', Icon: SiProbot, color: '#10A37F' },
  { name: 'Node.js', Icon: SiNodedotjs, color: '#5FA04E' },
  { name: 'GitHub', Icon: SiGithub, color: '#E5E9F0' },
  { name: 'Vercel', Icon: SiVercel, color: '#E5E9F0' },
  { name: 'VS Code', Icon: VscVscode, color: '#007ACC' },
]

export default function About() {
  return (
    <section
      id="about"
      className="relative mx-auto max-w-6xl overflow-hidden border-t border-border px-6 py-24"
    >
      <motion.div
        className="mb-8 flex justify-center"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="relative">
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-accent to-accent-2 opacity-60 blur-md" />
          <img
            src={avatar}
            alt="Ирина"
            className="relative h-40 w-40 rounded-full border-4 border-bg object-cover md:h-48 md:w-48"
          />
        </div>
      </motion.div>

      <motion.div
        className="mx-auto max-w-3xl text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
      >
        <h2 className="mb-6 text-3xl font-bold md:text-4xl">
          Обо{' '}
          <span className="bg-gradient-to-r from-accent to-accent-2 bg-clip-text text-transparent">
            мне
          </span>
        </h2>
        <p className="text-lg leading-relaxed text-muted">
          Меня зовут Ирина. Я frontend-разработчик и AI-энтузиаст.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          Делаю сайты, которые не просто выглядят хорошо — они работают на
          бизнес: отвечают клиентам, продают, экономят время. А ещё генерирую
          визуал и подключаю AI-помощников.
        </p>
      </motion.div>

      <motion.div
        className="mt-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
      >
        <p className="mb-6 text-center text-sm uppercase tracking-widest text-muted">
          Мой стек
        </p>

        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-bg to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-bg to-transparent" />

          <motion.div
            className="flex gap-12 py-4"
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {[...stack, ...stack].map(({ name, Icon, color }, i) => (
              <div
                key={`${name}-${i}`}
                className="flex shrink-0 flex-col items-center gap-2"
                title={name}
              >
                <Icon className="text-4xl" style={{ color }} />
                <span className="text-xs text-muted">{name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}