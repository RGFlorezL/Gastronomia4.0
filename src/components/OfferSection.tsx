import { ArrowUpRight, Check, ShieldCheck } from 'lucide-react';
import { BONUSES } from '../data/manualContent';
import { SALES_CONFIG, getCheckoutUrl } from '../config/salesConfig';

interface OfferSectionProps {
  onBuyClick: () => void;
}

const CORE_DELIVERABLES = [
  'Manual digital Gastronomía 4.0 en PDF (50 páginas)',
  '9 módulos prácticos de aplicación directa en cocina, clase o negocio',
  'Banco de 48 prompts numerados listos para copiar y adaptar',
  'Ruta de implementación de 90 días sin abrumarte',
];

export function OfferSection({ onBuyClick }: OfferSectionProps) {
  const hasCustomPrice = SALES_CONFIG.priceLabel.trim().length > 0;
  const checkoutUrl = getCheckoutUrl();

  return (
    <section
      id="oferta"
      className="relative isolate overflow-hidden bg-[#0B0A08] text-[#F7F4EC] py-16 sm:py-24 border-b border-white/10"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left Emotional Decision Copy */}
        <div className="lg:col-span-6 space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D6B160]">
            Edición digital completa
          </p>

          <h2 className="font-display text-[clamp(2rem,4vw,3.3rem)] leading-[1.07] tracking-[-0.025em]">
            Tu cocina ya tiene el sabor.{' '}
            <em className="italic text-[#F1D58F] font-normal">
              Recupera el tiempo para pensar y crecer.
            </em>
          </h2>

          <p className="text-base sm:text-lg text-[#CFC9BA] leading-relaxed">
            Deja de postergar tus escandallos, la renovación de tu carta o tus contenidos porque el
            servicio te deja sin energía. Hoy puedes llevarte el manual completo junto con los 6
            bonos de trabajo en un solo paquete digital descargable.
          </p>

          <div className="pt-2 space-y-3 border-t border-white/10">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#D6B160]">
              ¿Cómo funciona tu acceso?
            </p>
            <p className="text-sm text-[#B8B2A2] leading-relaxed">
              Al hacer clic en el botón pasas al checkout seguro de Hotmart, donde puedes ver el
              valor exacto en tu moneda local, los medios de pago habilitados en tu país y acceder
              de inmediato al PDF y a los 6 bonos.
            </p>
          </div>
        </div>

        {/* Right Complete Stack & Checkout Card */}
        <div className="lg:col-span-6">
          <div className="rounded-2xl border border-[#D6B160]/50 bg-[#14120E] p-6 sm:p-8 shadow-2xl shadow-black/50 space-y-6">
            <div className="flex flex-wrap items-baseline justify-between gap-3 pb-5 border-b border-white/10">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#D6B160]">
                  Paquete completo
                </p>
                <h3 className="font-display text-2xl sm:text-3xl text-[#F7F4EC] mt-1">
                  Manual + 6 Bonos
                </h3>
              </div>

              <div className="text-left sm:text-right">
                <p className="text-xs uppercase tracking-[0.12em] text-[#B8B2A2]">Inversión única</p>
                <p className="font-display text-xl sm:text-2xl text-[#F1D58F] mt-0.5 tabular-nums">
                  {hasCustomPrice ? SALES_CONFIG.priceLabel : 'Ver precio en Hotmart'}
                </p>
              </div>
            </div>

            {/* Deliverables Stack */}
            <div className="space-y-4">
              <ul className="space-y-2.5">
                {CORE_DELIVERABLES.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-[#F7F4EC]">
                    <Check className="w-4 h-4 text-[#D6B160] shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-3 border-t border-white/10">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#D6B160] mb-2.5">
                  + 6 bonos digitales incluidos hoy:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                  {BONUSES.map((b) => (
                    <li key={b.num} className="flex items-start gap-2 text-xs sm:text-sm text-[#CFC9BA]">
                      <span className="text-[#D6B160] font-mono text-xs pt-0.5 tabular-nums">
                        {b.num}.
                      </span>
                      <span>{b.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Primary Checkout CTA */}
            <div className="pt-2 space-y-3">
              {checkoutUrl ? (
                <a
                  href={checkoutUrl.toString()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 min-h-[54px] px-6 py-4 rounded-xl bg-gradient-to-r from-[#C89B42] via-[#F1D58F] to-[#D6B160] text-[#17140B] text-base font-bold tracking-tight shadow-lg shadow-[#D6B160]/20 hover:brightness-105 transition-[filter,transform] active:scale-[0.99] cursor-pointer"
                >
                  <span>Obtener Gastronomía 4.0 ahora</span>
                  <ArrowUpRight className="w-5 h-5 shrink-0" aria-hidden="true" />
                </a>
              ) : (
                <button
                  type="button"
                  onClick={onBuyClick}
                  className="w-full inline-flex items-center justify-center gap-2 min-h-[54px] px-6 py-4 rounded-xl bg-gradient-to-r from-[#C89B42] via-[#F1D58F] to-[#D6B160] text-[#17140B] text-base font-bold tracking-tight shadow-lg shadow-[#D6B160]/20 hover:brightness-105 transition-[filter,transform] active:scale-[0.99] cursor-pointer"
                >
                  <span>Obtener Gastronomía 4.0 ahora</span>
                  <ArrowUpRight className="w-5 h-5 shrink-0" aria-hidden="true" />
                </button>
              )}

              <p className="flex items-center justify-center gap-2 text-xs text-[#B8B2A2] text-center">
                <ShieldCheck className="w-4 h-4 text-[#D6B160] shrink-0" aria-hidden="true" />
                <span>{SALES_CONFIG.checkoutNote}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
