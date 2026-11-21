import { useState } from 'react';

export function MessageInput({
  onSend,
  disabled,
  primaryColor = '#3b82f6',
}) {
  const [text, setText] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed || disabled) return;
    onSend(trimmed);
    setText('');
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 p-3 border-t bg-white shrink-0">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Введите сообщение..."
        disabled={disabled}
        className="flex-1 px-3 py-2 border border-border text-text rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent disabled:opacity-50 placeholder:text-muted"
      />
      <button
        type="submit"
        disabled={disabled || !text.trim()}
        className="px-4 py-2 text-white rounded-lg text-sm disabled:opacity-50 disabled:cursor-not-allowed"
        style={{ backgroundColor: primaryColor }}
      >
        Отправить
      </button>
    </form>
  );
}