import visitkaPreview from '../assets/qr/visitka-preview.png'
import buhankaPreview from '../assets/qr/buhanka-preview.png'
import photographerPreview from '../assets/qr/photographer.png' // <-- НОВОЕ

export const qrProjects = [
  {
    id: 'visitka',
    title: 'Онлайн визитка программиста',
    description: 'Личная страница-визитка с адаптивом и анимациями. React + Vite.',
    preview: visitkaPreview,
    qr: '/qr/visitka.jpg',
    link: 'https://irina-lol.github.io/qrvizitka/',
    stack: ['React', 'Vite'],
  },
  {
    id: 'buhanka',
    title: 'Онлайн визитка буханки',
    description: 'Лендинг для поездок на природу со сплавом — с формой заявки. React + Vite.',
    preview: buhankaPreview,
    qr: '/qr/buhanka.jpg',
    link: 'https://irina-lol.github.io/vizitka/',
    stack: ['React', 'Vite'],
  },
  // --- НОВАЯ КАРТОЧКА ---
  {
    id: 'photographer',
    title: 'Онлайн визитка фотографа',
    description: 'Стильная онлайн визитка для фотографа с анимацией.',
    preview: photographerPreview,
    qr: '/qr/photographer.png',
    link: 'https://mililil-ka.github.io/fotograf/',
    stack: ['HTML5', 'CSS3'],
  },
]