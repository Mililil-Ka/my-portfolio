import { useState, useEffect } from 'react';
import { useChat } from '../hooks/useChat';
import { MessageList } from './MessageList';
import { MessageInput } from './MessageInput';
import { FallbackForm } from './FallbackForm';

export function ChatWidget({ theme = {} }) {
  const [isOpen, setIsOpen] = useState(false);
  const { messages, isStreaming, error, sendMessage, reset } = useChat();

  // Слушаем событие открытия чата с сайта
  useEffect(() => {
    function handleOpenChat() {
      setIsOpen(true);
    }
    window.addEventListener('open-chat', handleOpenChat);
    return () => window.removeEventListener('open-chat', handleOpenChat);
  }, []);

  const {
    primaryColor = '#3b82f6',
    avatarUrl,
    greeting = 'Здравствуйте! Чем могу помочь?',
    title = 'AI-помощник',
    position = 'bottom-right',
  } = theme;

  const positionClass =
    position === 'bottom-left' ? 'bottom-6 left-6' : 'bottom-6 right-6';

  function handleFallbackSubmit(data) {
    console.log('Заявка из fallback:', data);
  }

  return (
    <div className={`fixed ${positionClass} z-50`} translate="no">
      {isOpen && (
        <div className="mb-4 w-80 h-96 bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border">
          {/* Шапка */}
          <div
            className="text-white px-4 py-3 flex justify-between items-center shrink-0"
            style={{ backgroundColor: primaryColor }}
          >
            <div className="flex items-center gap-2">
              {avatarUrl && (
                <img
                  src={avatarUrl}
                  alt=""
                  className="w-6 h-6 rounded-full object-cover"
                />
              )}
              <span className="font-semibold text-sm">{title}</span>
            </div>
            <div className="flex items-center gap-3">
              {messages.length > 0 && (
                <button
                  onClick={reset}
                  className="text-white hover:opacity-75 text-xs"
                  title="Очистить историю"
                >
                  Очистить
                </button>
              )}
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:opacity-75 text-lg leading-none"
                aria-label="Закрыть чат"
              >
                ×
              </button>
            </div>
          </div>

          {/* Кнопки быстрых контактов */}
          <div className="flex gap-2 p-3 border-b bg-gray-50 overflow-x-auto shrink-0">
            <a href="https://t.me/bug_bug97" target="_blank" rel="noreferrer" className="shrink-0 px-3 py-1.5 bg-blue-100 text-blue-600 rounded-full text-xs font-medium hover:bg-blue-200 transition">Telegram</a>
            <a href="https://wa.me/79964128534" target="_blank" rel="noreferrer" className="shrink-0 px-3 py-1.5 bg-green-100 text-green-600 rounded-full text-xs font-medium hover:bg-green-200 transition">WhatsApp</a>
            <a href="mailto:irinaka307@gmail.com" className="shrink-0 px-3 py-1.5 bg-cyan-100 text-cyan-600 rounded-full text-xs font-medium hover:bg-cyan-200 transition">Email</a>
          </div>

          {/* Основная область */}
          <div className="flex-1 min-h-0 flex flex-col relative">
            {error ? (
              <FallbackForm onSubmit={handleFallbackSubmit} />
            ) : (
              <MessageList
                messages={messages}
                greeting={greeting}
                primaryColor={primaryColor}
              />
            )}
          </div>

          {/* Поле ввода */}
          {!error && (
            <MessageInput
              onSend={sendMessage}
              disabled={isStreaming}
              primaryColor={primaryColor}
            />
          )}
        </div>
      )}

      {/* Кнопка открытия/закрытия */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-14 h-14 rounded-full text-white shadow-lg flex items-center justify-center text-2xl transition-colors"
        style={{ backgroundColor: primaryColor }}
        aria-label="Открыть чат"
      >
        {isOpen ? '×' : '💬'}
      </button>
    </div>
  );
}