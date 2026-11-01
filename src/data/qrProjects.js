import visitkaPreview from '../assets/qr/visitka-preview.png'
import buhankaPreview from '../assets/qr/buhanka-preview.png'

export const qrProjects = [
  {
    id: 'visitka',
    title: 'Сайт-визитка для разработчика',
    description: 'Личная визитка с адаптивом и анимациями.',
    preview: visitkaPreview,
    qr: '/qr/visitka.jpg',
    link: 'https://irina-lol.github.io/qrvizitka/',
    stack: ['React', 'Vite'],
  },
  {
    id: 'buhanka',
    title: 'Сайт-визитка для УАЗ-буханки',
    description: 'Визитка для доставки пассажиров и интвентаря с прицепом в любые места.',
    preview: buhankaPreview,
    qr: '/qr/buhanka.jpg',
    link: 'https://irina-lol.github.io/vizitka/',
    stack: ['React', 'Vite'],
  },
]