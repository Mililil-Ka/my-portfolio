import { useEffect, useRef } from 'react';

export function MessageList({ messages, greeting }) {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  if (messages.length === 0) {
    return (
      <div className="p-4">
        {greeting ? (
          <div className="self-start max-w-[80%] bg-card text-text px-4 py-2 rounded-2xl text-sm border border-border">
            {greeting}
          </div>
        ) : (
          <div className="text-center text-muted text-sm py-8">
            Начните диалог — задайте вопрос
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3 p-4 overflow-y-auto h-full">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`max-w-[80%] px-4 py-2 rounded-2xl text-sm ${
            message.role === 'user'
              ? 'self-end text-white bg-accent'
              : 'self-start bg-card text-text border border-border'
          }`}
        >
          {message.content}
        </div>
      ))}
      <div ref={bottomRef} />
    </div>
  );
}