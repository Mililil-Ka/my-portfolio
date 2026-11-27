import { useState } from 'react';

export function FallbackForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const trimmedName = name.trim();
    const trimmedPhone = phone.trim();
    if (!trimmedName || !trimmedPhone) return;

    onSubmit({ name: trimmedName, phone: trimmedPhone });
    setSent(true);
  }

  if (sent) {
    return (
      <div className="p-4 text-center h-full flex flex-col justify-center">
        <p className="text-sm text-text mb-1">Спасибо!</p>
        <p className="text-xs text-muted">
          Мы свяжемся с вами в ближайшее время.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="p-4 flex flex-col gap-2 bg-bg h-full justify-center">
      <p className="text-xs text-muted mb-1 text-center">
        AI временно недоступен. Оставьте контакт — мы ответим вручную.
      </p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Ваше имя"
        className="px-3 py-2 border border-border bg-card text-text rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent placeholder:text-muted"
      />
      <input
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Телефон"
        className="px-3 py-2 border border-border bg-card text-text rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent placeholder:text-muted"
      />
      <button
        type="submit"
        disabled={!name.trim() || !phone.trim()}
        className="px-4 py-2 bg-accent text-white rounded-lg text-sm hover:bg-accent-hover disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        Отправить
      </button>
    </form>
  );
}