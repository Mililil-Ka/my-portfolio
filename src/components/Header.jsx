import { useEffect, useState } from 'react';

const navItems = [
  { id: 'hero', label: 'Главная' },
  { id: 'about', label: 'Обо мне' },
  { id: 'qr', label: 'QR-коды' },
  { id: 'gallery', label: 'ИИ Галерея' },
  { id: 'services', label: 'Услуги' },
  { id: 'contact', label: 'Контакты' },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > 20);
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible[0]) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: '-80px 0px -60% 0px',
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  function handleNavClick() {
    setIsMenuOpen(false);
  }

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        isScrolled
          ? 'border-border bg-bg/80 backdrop-blur-md'
          : 'border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#hero"
          onClick={handleNavClick}
          className="text-lg font-bold tracking-tight transition-opacity hover:opacity-80"
        >
          <span className="bg-gradient-to-r from-accent to-accent-2 bg-clip-text text-transparent">
            Irina_Ka
          </span>
        </a>

        <ul className="hidden items-center gap-6 text-sm md:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`transition-colors ${
                  activeSection === item.id
                    ? 'text-accent-2'
                    : 'text-muted hover:text-text'
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label="Меню"
          aria-expanded={isMenuOpen}
        >
          <span
            className={`h-0.5 w-6 bg-text transition-transform duration-300 ${
              isMenuOpen ? 'translate-y-2 rotate-45' : ''
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-text transition-opacity duration-300 ${
              isMenuOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-text transition-transform duration-300 ${
              isMenuOpen ? '-translate-y-2 -rotate-45' : ''
            }`}
          />
        </button>
      </nav>

      <div
        className={`overflow-hidden border-t border-border bg-bg/95 backdrop-blur-md transition-[max-height] duration-300 md:hidden ${
          isMenuOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col gap-1 px-6 py-4 text-sm">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={handleNavClick}
                className={`block rounded-btn px-3 py-2 transition-colors ${
                  activeSection === item.id
                    ? 'bg-card text-accent-2'
                    : 'text-muted hover:bg-card hover:text-text'
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}