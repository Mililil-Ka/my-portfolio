import { useState, useEffect } from 'react';
import { useChat } from '../hooks/useChat';
import { MessageList } from './MessageList';
import { MessageInput } from './MessageInput';
import { FallbackForm } from './FallbackForm';

export function ChatWidget({ theme = {} }) {
  const [isOpen, setIsOpen] = useState(false);
  const { messages, isStreaming, error, sendMessage, reset } = useChat();

  useEffect(() => {
    function handleOpenChat() {
      setIsOpen(true);
    }
    window.addEventListener('open-chat', handleOpenChat);
    return () => window.removeEventListener('open-chat', handleOpenChat);
  }, []);

  const {
    greeting = 'Привет! Я AI-помощник Ирины. Расскажу об услугах, покажу примеры работ и помогу связаться. С чего начнем? 😊',
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
        <div className="mb-4 w-80 h-96 bg-bg rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-border">
          {/* Шапка */}
          <div className="bg-card px-4 py-3 flex justify-between items-center shrink-0 border-b border-border">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-sm text-text">{title}</span>
            </div>
            <div className="flex items-center gap-3">
              {messages.length > 0 && (
                <button
                  onClick={reset}
                  className="text-muted hover:text-text text-xs transition-colors"
                  title="Очистить историю"
                >
                  Очистить
                </button>
              )}
              <button
                onClick={() => setIsOpen(false)}
                className="text-muted hover:text-text text-lg leading-none transition-colors"
                aria-label="Закрыть чат"
              >
                ×
              </button>
            </div>
          </div>

          {/* Кнопки быстрых контактов */}
          <div className="flex gap-2 p-3 border-b border-border bg-card overflow-x-auto shrink-0">
            <a href="https://t.me/bug_bug97" target="_blank" rel="noreferrer" className="shrink-0 px-3 py-1.5 bg-bg border border-border text-accent rounded-full text-xs font-medium hover:border-accent transition">Telegram</a>
            <a href="https://wa.me/79964128534" target="_blank" rel="noreferrer" className="shrink-0 px-3 py-1.5 bg-bg border border-border text-accent rounded-full text-xs font-medium hover:border-accent transition">WhatsApp</a>
            <a href="mailto:irinaka307@gmail.com" className="shrink-0 px-3 py-1.5 bg-bg border border-border text-accent rounded-full text-xs font-medium hover:border-accent transition">Email</a>
          </div>

          {/* Основная область */}
          <div className="flex-1 min-h-0 flex flex-col relative bg-bg">
            {error ? (
              <FallbackForm onSubmit={handleFallbackSubmit} />
            ) : (
              <MessageList
                messages={messages}
                greeting={greeting}
              />
            )}
          </div>

          {/* Поле ввода */}
          {!error && (
            <MessageInput
              onSend={sendMessage}
              disabled={isStreaming}
            />
          )}
        </div>
      )}

      {/* Кнопка открытия/закрытия */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-14 h-14 rounded-full text-white shadow-lg flex items-center justify-center text-2xl transition-all bg-gradient-to-br from-accent to-accent-2 hover:opacity-90"
        aria-label="Открыть чат"
      >
        {isOpen ? '×' : '💬'}
      </button>
    </div>
  );
}