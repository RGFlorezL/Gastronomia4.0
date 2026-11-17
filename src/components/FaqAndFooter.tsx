import { useEffect, useState } from 'react';
import { ChevronDown, ArrowUpRight } from 'lucide-react';
import { FAQS } from '../data/manualContent';
import { SALES_CONFIG, getCheckoutUrl } from '../config/salesConfig';
import { BrandMark } from './BrandMark';

interface FaqAndFooterProps {
  onBuyClick: () => void;
}

export function FaqAndFooter({ onBuyClick }: FaqAndFooterProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [showMobileBar, setShowMobileBar] = useState(false);
  const checkoutUrl = getCheckoutUrl();

  useEffect(() => {
    const heroEl = document.getElementById('inicio');
    const offerEl = document.getElementById('oferta');
    if (!heroEl || !offerEl) return;

    let heroVisible = true;
    let offerVisible = false;

    const updateVisibility = () => {
      setShowMobileBar(!heroVisible && !offerVisible);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.target === heroEl) heroVisible = entry.isIntersecting;
          if (entry.target === offerEl) offerVisible = entry.isIntersecting;
        }
        updateVisibility();
      },
      { threshold: 0.1 }
    );

    observer.observe(heroEl);
    observer.observe(offerEl);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* FAQ Section */}
      <section
        id="preguntas"
        className="bg-[#F7F4EC] text-[#171510] py-16 sm:py-24 border-b border-[#171510]/10"
      >
        <div className="max-w-[920px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="space-y-3 text-left sm:text-center max-w-2xl sm:mx-auto">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8A6824]">
              Preguntas frecuentes
            </p>
            <h2 className="font-display text-[clamp(1.85rem,3.4vw,2.75rem)] leading-[1.1] tracking-[-0.02em]">
              Resuelve tus dudas antes de entrar.
            </h2>
          </div>

          <div className="divide-y divide-[#171510]/12 border-t border-b border-[#171510]/12">
            {FAQS.map((faq, idx) => {
              const isOpen = openIndex === idx;
              const panelId = `faq-panel-${idx}`;
              return (
                <div key={faq.question}>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full min-h-[56px] py-4 sm:py-5 flex items-center justify-between gap-4 text-left cursor-pointer group"
                  >
                    <span className="text-base sm:text-lg font-semibold text-[#171510] group-hover:text-[#8A6824] transition-colors">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#8A6824] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                  {isOpen && (
                    <div id={panelId} className="pb-5 pr-2 sm:pr-8">
                      <p className="text-sm sm:text-base text-[#555046] leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quiet Footer */}
      <footer className="bg-[#0B0A08] text-[#B8B2A2] py-12 pb-24 lg:pb-12">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <a
              href="#inicio"
              className="inline-flex items-center gap-2.5 text-[#F7F4EC] font-display text-lg tracking-wide self-start"
            >
              <BrandMark className="w-7 h-7" />
              <span>
                GASTRONOMÍA <strong className="text-[#D6B160] font-semibold">4.0</strong>
              </span>
            </a>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs sm:text-sm">
              <a href="#modulos" className="hover:text-[#F1D58F] transition-colors">
                Módulos
              </a>
              <a href="#bonos" className="hover:text-[#F1D58F] transition-colors">
                Bonos
              </a>
              <a href="#oferta" className="hover:text-[#F1D58F] transition-colors">
                Oferta
              </a>
              {SALES_CONFIG.supportEmail.trim() && (
                <a
                  href={`mailto:${SALES_CONFIG.supportEmail.trim()}`}
                  className="hover:text-[#F1D58F] transition-colors"
                >
                  Soporte
                </a>
              )}
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs leading-relaxed text-[#8E887A]">
            <p className="max-w-2xl">
              Gastronomía 4.0 es un manual digital práctico de Giovanny Florez. Las propuestas
              generadas con IA deben verificarse siempre con criterio humano en costos, alérgenos,
              seguridad alimentaria y normativa vigente.
            </p>
            <p className="shrink-0">© {new Date().getFullYear()} Gastronomía 4.0</p>
          </div>
        </div>
      </footer>

      {/* Compact Mobile-Only Sticky Checkout Bar (Hidden when Hero or Offer is in view) */}
      {showMobileBar && (
        <div className="lg:hidden fixed inset-x-0 bottom-0 z-30 bg-[#0B0A08]/95 border-t border-[#D6B160]/30 backdrop-blur-md px-4 py-2">
          <div className="max-w-[1200px] mx-auto flex items-center justify-between gap-3">
            <div className="min-w-0">
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#D6B160] truncate">
                Manual + 6 bonos
              </p>
              <p className="text-xs text-[#F7F4EC] font-medium truncate">
                {SALES_CONFIG.priceLabel.trim() || 'Acceso inmediato en Hotmart'}
              </p>
            </div>
            {checkoutUrl ? (
              <a
                href={checkoutUrl.toString()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 min-h-[40px] px-4 py-2 rounded-lg bg-[#D6B160] hover:bg-[#E4C276] text-[#17140B] text-xs font-bold whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>Obtener manual</span>
                <ArrowUpRight className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              </a>
            ) : (
              <button
                type="button"
                onClick={onBuyClick}
                className="inline-flex items-center justify-center gap-1.5 min-h-[40px] px-4 py-2 rounded-lg bg-[#D6B160] hover:bg-[#E4C276] text-[#17140B] text-xs font-bold whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>Obtener manual</span>
                <ArrowUpRight className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
}
