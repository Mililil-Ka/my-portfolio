import { FiSend, FiPenTool, FiCode } from 'react-icons/fi'
import { FaRocket } from 'react-icons/fa'

export const processSteps = [
  {
    id: 1,
    title: 'Заявка',
    description:
      'Пишешь мне в Telegram, MAX или WhatsApp. Обсуждаем задачу, сроки и бюджет без воды.',
    Icon: FiSend,
  },
  {
    id: 2,
    title: 'Концепт',
    description:
      'Предлагаю структуру, стиль и референсы. Согласовываем и я приступаю к работе.',
    Icon: FiPenTool,
  },
  {
    id: 3,
    title: 'Разработка',
    description:
      'Собираю проект, показываю промежуточные версии. Правки на каждом этапе.',
    Icon: FiCode,
  },
  {
    id: 4,
    title: 'Запуск',
    description:
      'Деплой, тесты, передача проекта. Остаюсь на связи, поддержка и мелкие доработки после сдачи.',
    Icon: FaRocket,
  },
]