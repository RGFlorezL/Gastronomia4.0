import { useState } from 'react';
import { ArrowUpRight, BookOpen } from 'lucide-react';
import { HERO_METRICS } from '../data/manualContent';

export function Hero() {
  const [sceneFailed, setSceneFailed] = useState(false);
  const [bookFailed, setBookFailed] = useState(false);

  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden bg-[#0B0A08] border-b border-white/10"
    >
      {/* Subtle photographic atmosphere */}
      <img
        src="/images/hero-backdrop.jpg"
        alt=""
        aria-hidden="true"
        referrerPolicy="no-referrer"
        className="absolute inset-0 w-full h-full object-cover opacity-20 -z-20 pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-[#0B0A08] via-[#0B0A08]/92 to-[#0B0A08]/65 -z-10"
      />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-12 sm:pt-14 sm:pb-16 lg:pt-20 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Copy Column */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#D6B160]">
              Para quienes cocinan, enseñan y emprenden
            </p>

            <h1 className="font-display text-[clamp(2.35rem,5vw,4.35rem)] leading-[1.04] tracking-[-0.025em] text-[#F7F4EC]">
              Tu talento. Tu cocina.{' '}
              <em className="italic text-[#F1D58F] font-normal">Ahora, con IA.</em>
            </h1>

            <p className="text-base sm:text-lg leading-relaxed text-[#CFC9BA] max-w-[60ch]">
              No te faltan ganas ni oficio: te falta tiempo después de cada servicio.{' '}
              <strong className="text-[#F7F4EC] font-semibold">Gastronomía 4.0</strong> es el
              manual práctico en español para convertir la inteligencia artificial en tu copiloto
              diario de ideas, costos, cartas y contenido — sin saber programar.
            </p>

            {/* Primary & Secondary Actions */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3.5 pt-1">
              <a
                href="#oferta"
                className="inline-flex items-center justify-center gap-2 min-h-[52px] px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#C89B42] via-[#F1D58F] to-[#D6B160] text-[#17140B] text-sm sm:text-base font-bold tracking-tight shadow-lg shadow-[#D6B160]/15 hover:brightness-105 transition-[filter,transform] active:scale-[0.99] whitespace-nowrap"
              >
                <span>Quiero el manual + 6 bonos</span>
                <ArrowUpRight className="w-4 h-4 shrink-0" aria-hidden="true" />
              </a>

              <a
                href="#interior"
                className="inline-flex items-center justify-center gap-2 min-h-[52px] px-6 py-3.5 rounded-xl border border-white/20 bg-white/[0.04] hover:bg-white/[0.09] hover:border-[#D6B160]/60 text-[#F7F4EC] text-sm sm:text-base font-medium transition-colors whitespace-nowrap"
              >
                <BookOpen className="w-4 h-4 text-[#D6B160] shrink-0" aria-hidden="true" />
                <span>Ver páginas por dentro</span>
              </a>
            </div>

            {/* Unboxed Metadata Line (Zero-Pill Discipline) */}
            <div className="pt-2 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs sm:text-sm text-[#B8B2A2]">
              <span>PDF en español · 50 páginas</span>
              <span aria-hidden="true" className="text-[#D6B160]">·</span>
              <span>9 módulos y 48 prompts</span>
              <span aria-hidden="true" className="text-[#D6B160]">·</span>
              <span>6 plantillas editables incluidas</span>
            </div>
          </div>

          {/* Right Product Stage */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl border border-[#D6B160]/35 bg-[#14120E] p-3 sm:p-4">
              <div className="relative overflow-hidden rounded-xl aspect-[4/3] bg-[#1A1711]">
                {!sceneFailed ? (
                  <img
                    src="/images/chef-ia-scene.jpg"
                    alt="Chef gastronómica emplatando mientras su copiloto de inteligencia artificial la acompaña; imagen ilustrativa"
                    referrerPolicy="no-referrer"
                    onError={() => setSceneFailed(true)}
                    className="w-full h-full object-cover object-center"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-sm text-[#B8B2A2] p-6 text-center">
                    Chef + IA · Manual Práctico Gastronomía 4.0
                  </div>
                )}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#0B0A08]/85 via-transparent to-transparent"
                />
                <div className="absolute left-3.5 bottom-3.5 right-3.5 flex items-end justify-between gap-3">
                  <div className="text-left">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#F1D58F]">
                      Manual digital · Edición completa
                    </p>
                    <p className="font-display text-lg sm:text-xl text-[#F7F4EC] leading-snug">
                      La próxima idea empieza aquí.
                    </p>
                  </div>
                </div>
              </div>

              {/* Paired Real Cover + Bundle Summary */}
              <div className="mt-3.5 flex items-center gap-4 rounded-xl border border-white/10 bg-[#0B0A08]/80 p-3">
                <div className="w-20 sm:w-24 shrink-0 overflow-hidden rounded-md border border-[#D6B160]/40 bg-[#1A1711] aspect-[3/4]">
                  {!bookFailed ? (
                    <img
                      src="/images/portada-manual.jpg"
                      alt="Portada original de Gastronomía 4.0, de Giovanny Florez"
                      referrerPolicy="no-referrer"
                      onError={() => setBookFailed(true)}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-[11px] text-[#D6B160] p-2 text-center">
                      Portada Gastronomía 4.0
                    </div>
                  )}
                </div>

                <div className="min-w-0 space-y-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#D6B160]">
                    Incluye el paquete completo
                  </p>
                  <p className="font-display text-base sm:text-lg text-[#F7F4EC] leading-snug">
                    Manual Gastronomía 4.0 + 6 Bonos
                  </p>
                  <p className="text-xs text-[#B8B2A2] leading-relaxed">
                    Cocina · Panadería · Pastelería · Docencia · Emprendimiento
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full-Width Quantitative Strip */}
      <div className="border-t border-white/10 bg-[#12100C]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {HERO_METRICS.map((item, idx) => (
            <div
              key={item.label}
              className={`py-5 px-4 sm:px-5 ${
                idx === HERO_METRICS.length - 1 ? 'col-span-2 sm:col-span-1 text-center sm:text-left' : ''
              }`}
            >
              <strong className="block font-display text-3xl sm:text-4xl font-medium text-[#F1D58F] tabular-nums leading-none">
                {item.value}
              </strong>
              <span className="block mt-2 text-xs font-medium uppercase tracking-[0.12em] text-[#B8B2A2]">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
