import {
  FiLayout,
  FiMessageSquare,
  FiImage,
  FiGrid,
  FiPackage,
} from 'react-icons/fi'

export const services = [
  {
    id: 'site',
    title: 'Сайт под ключ',
    description:
      'Лендинг, визитка или портфолио. Адаптивный дизайн, анимации, деплой всё под ключ.',
    Icon: FiLayout,
    side: 'left',
  },
  {
    id: 'bot',
    title: 'AI-бот для сайта',
    description:
      'Встраиваемый чат-помощник, который отвечает клиентам 24/7. Работает на OpenAI/Claude/Gemini.',
    Icon: FiMessageSquare,
    side: 'right',
  },
  {
    id: 'visual',
    title: 'Генерация визуала',
    description:
      'Уникальные AI-картинки для сайта, соцсетей и брендинга. Любой стиль от реализма до абстракции.',
    Icon: FiImage,
    side: 'left',
  },
  {
    id: 'qr',
    title: 'QR-коды',
    description:
      'Генерация QR-кодов с логотипом и интеграция в сайт, визитки и офлайн-материалы.',
    Icon: FiGrid,
    side: 'right',
  },
  {
    id: 'combo',
    title: 'Комбо-пакет',
    description:
      'Сайт + AI-бот + визуал + QR. Всё, что нужно для запуска в одном пакете, со скидкой.',
    Icon: FiPackage,
    side: 'left',
  },
]