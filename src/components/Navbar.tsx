import { useEffect, useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { BrandMark } from './BrandMark';

const NAV_LINKS = [
  { href: '#perfiles', label: 'Para quién' },
  { href: '#prueba-prompt', label: 'Cómo funciona' },
  { href: '#modulos', label: 'Módulos' },
  { href: '#bonos', label: 'Bonos' },
  { href: '#preguntas', label: 'Preguntas' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-200 border-b ${
        scrolled
          ? 'bg-[#0B0A08]/95 border-white/10 backdrop-blur-md'
          : 'bg-[#0B0A08]/80 border-white/8 backdrop-blur-md'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-3 sm:px-6 lg:px-8 h-14 md:h-16 flex items-center justify-between gap-2 sm:gap-4 lg:gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#inicio"
          aria-label="Gastronomía 4.0, inicio"
          className="inline-flex items-center gap-1.5 min-[375px]:gap-2 sm:gap-2.5 text-[#F7F4EC] font-display text-[13px] min-[375px]:text-sm sm:text-lg tracking-wide whitespace-nowrap shrink-0"
        >
          <BrandMark className="w-6 h-6 sm:w-8 sm:h-8 shrink-0" />
          <span>
            GASTRONOMÍA <strong className="text-[#D6B160] font-semibold">4.0</strong>
          </span>
        </a>

        {/* Zone 2: Clean typographic nav links (desktop) */}
        <nav
          aria-label="Navegación principal"
          className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#CEC9BA]"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap shrink-0 py-2 hover:text-[#F1D58F] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary CTA + Mobile drawer toggle */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          <a
            href="#oferta"
            className="inline-flex items-center justify-center gap-1 sm:gap-1.5 min-h-[40px] px-2.5 sm:px-4 py-2 rounded-lg bg-[#D6B160] hover:bg-[#E4C276] text-[#14120E] text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap shrink-0"
          >
            <span className="min-[375px]:hidden">Oferta</span>
            <span className="hidden min-[375px]:inline sm:hidden">Ver oferta</span>
            <span className="hidden sm:inline">Obtener manual</span>
            <ArrowUpRight className="hidden min-[375px]:inline w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" aria-hidden="true" />
          </a>

          <button
            type="button"
            aria-label={menuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-drawer"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg border border-white/15 text-[#F7F4EC] hover:border-[#D6B160]/60 transition-colors shrink-0"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Panel */}
      {menuOpen && (
        <nav
          id="mobile-nav-drawer"
          aria-label="Menú móvil"
          className="lg:hidden bg-[#11100C] border-t border-white/10 px-4 py-3"
        >
          <div className="max-w-[1200px] mx-auto flex flex-col divide-y divide-white/8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="min-h-[44px] flex items-center justify-between text-sm font-medium text-[#E5E0D4] hover:text-[#F1D58F] py-2"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4 text-[#D6B160]" aria-hidden="true" />
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
