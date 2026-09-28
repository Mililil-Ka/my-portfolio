export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <p className="mb-4 text-sm uppercase tracking-widest text-[#06B6D4]">
        Frontend + AI
      </p>
      <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
        Делаю живые сайты с{' '}
        <span className="bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] bg-clip-text text-transparent">
          умными помощниками
        </span>
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-[#94A3B8]">
        React-разработчик. Собираю лендинги, визитки и встраиваю AI-ботов,
        которые работают на ваш бизнес.
      </p>
      <div className="mt-10 flex flex-wrap gap-4">
        <a
          href="#projects"
          className="rounded-lg bg-[#8B5CF6] px-6 py-3 font-medium hover:bg-[#7C4DEB] transition"
        >
          Смотреть работы
        </a>
        <button
          className="rounded-lg border border-[#2A3454] px-6 py-3 font-medium text-[#E5E9F0] hover:border-[#06B6D4] transition"
        >
          Поговорить с ботом
        </button>
      </div>
    </section>
  )
}