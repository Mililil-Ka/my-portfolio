const aiImages = import.meta.glob(
  '../assets/gallery/ai/*.{png,jpg,jpeg,webp}',
  { eager: true, import: 'default' }
)
const logoImages = import.meta.glob(
  '../assets/gallery/logo/*.{png,jpg,jpeg,webp}',
  { eager: true, import: 'default' }
)
const natureImages = import.meta.glob(
  '../assets/gallery/nature/*.{png,jpg,jpeg,webp}',
  { eager: true, import: 'default' }
)
const peopleImages = import.meta.glob(
  '../assets/gallery/people/*.{png,jpg,jpeg,webp}',
  { eager: true, import: 'default' }
)

export const galleryCategories = [
  { id: 'ai', label: 'AI', images: Object.values(aiImages) },
  { id: 'logo', label: 'Логотипы', images: Object.values(logoImages) },
  { id: 'nature', label: 'Природа', images: Object.values(natureImages) },
  { id: 'people', label: 'Люди', images: Object.values(peopleImages) },
]