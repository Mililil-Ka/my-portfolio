export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#2A3454] bg-[#0B0F19]/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <span className="font-semibold tracking-tight">mililil-ka</span>
        <ul className="hidden gap-6 text-sm text-[#94A3B8] md:flex">
          <li><a href="#about" className="hover:text-[#E5E9F0]">Обо мне</a></li>
          <li><a href="#projects" className="hover:text-[#E5E9F0]">Проекты</a></li>
          <li><a href="#contact" className="hover:text-[#E5E9F0]">Контакты</a></li>
        </ul>
      </nav>
    </header>
  )
}