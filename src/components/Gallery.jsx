import { useState, useRef, useEffect } from 'react'
import { motion, useAnimationFrame, useMotionValue } from 'framer-motion'
import { galleryCategories } from '../data/gallery'

export default function Gallery() {
  const [activeId, setActiveId] = useState(galleryCategories[0].id)
  const activeCategory = galleryCategories.find((c) => c.id === activeId)

  return (
    <section
      id="gallery"
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
          Сгенерировано AI
        </p>
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">
          ИИ{' '}
          <span className="bg-gradient-to-r from-accent to-accent-2 bg-clip-text text-transparent">
            Галерея
          </span>
        </h2>
        <p className="text-lg text-muted">
          Cгенерированные нейросетями картинки. Наведи и картинки оживут.
        </p>
      </motion.div>

      {/* Основной блок */}
      <div className="flex flex-col gap-4 md:flex-row md:gap-0">
        {/* Категории */}
        <nav className="flex shrink-0 gap-3 overflow-x-auto pb-2 md:flex-col md:overflow-visible md:pb-0 md:pr-4">
          {galleryCategories.map((cat) => {
            const isActive = cat.id === activeId
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveId(cat.id)}
                className={`shrink-0 rounded-card border-2 px-5 py-3 text-sm font-medium transition-all duration-300 md:w-[180px] md:text-left ${
                  isActive
                    ? 'border-accent bg-accent/10 text-text shadow-[0_0_20px_-8px_rgba(139,92,246,0.8)]'
                    : 'border-border bg-card text-muted hover:border-accent-2 hover:text-text'
                }`}
              >
                {cat.label}
              </button>
            )
          })}
        </nav>

        {/* Область с картинками — рамка */}
        <div className="flex-1 rounded-card border-2 border-accent bg-card p-4 shadow-[0_0_30px_-12px_rgba(139,92,246,0.5)]">
          <GalleryStrip key={activeId} images={activeCategory.images} />
        </div>
      </div>
    </section>
  )
}

function GalleryStrip({ images }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const y = useMotionValue(0)
  const containerRef = useRef(null)
  const contentRef = useRef(null)
  const speed = 0.6

  const loopImages = [...images, ...images]

  useAnimationFrame(() => {
    if (!isPlaying) return
    const content = contentRef.current
    if (!content) return

    const contentHeight = content.scrollHeight / 2
    let next = y.get() - speed

    if (Math.abs(next) >= contentHeight) {
      next = 0
    }
    y.set(next)
  })

  useEffect(() => {
    y.set(0)
    setIsPlaying(false)
  }, [images, y])

  return (
    <div
      ref={containerRef}
      className="relative h-[500px] overflow-hidden rounded-btn md:h-[600px]"
      onMouseEnter={() => setIsPlaying(true)}
      onMouseLeave={() => setIsPlaying(false)}
      onTouchStart={(e) => {
        e.preventDefault()
        setIsPlaying((prev) => !prev)
      }}
    >
      <motion.div ref={contentRef} className="flex flex-col gap-4" style={{ y }}>
        {loopImages.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            className="w-full shrink-0 rounded-btn object-cover"
            loading="lazy"
          />
        ))}
      </motion.div>
    </div>
  )
}