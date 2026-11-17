import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PAIN_POINTS, PROFILES } from '../data/manualContent';

export function RoleSelector() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [photoFailed, setPhotoFailed] = useState(false);
  const activeProfile = PROFILES[activeIndex];

  return (
    <section id="perfiles" className="bg-[#F7F4EC] text-[#171510] py-16 sm:py-24 border-b border-[#171510]/10">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20">
        {/* Part 1: Emotional Mirror + Real Pain */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative flex-1 min-h-[280px] sm:min-h-[360px] overflow-hidden rounded-2xl border border-[#171510]/12 bg-[#ECE6D8]">
              {!photoFailed ? (
                <img
                  src="/images/mesa-trabajo.jpg"
                  alt="Mesa de trabajo gastronómico con ingredientes organizados, cuaderno y tableta"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onError={() => setPhotoFailed(true)}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center p-6 text-sm text-[#555046]">
                  Tu oficio + herramientas prácticas
                </div>
              )}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#0B0A08]/85 via-[#0B0A08]/20 to-transparent"
              />
              <p className="absolute left-5 right-5 bottom-5 font-display text-lg sm:text-xl text-[#F7F4EC] leading-snug">
                Tu experiencia es el ingrediente. La IA ordena y acelera el resto.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8A6824]">
              Lo que pasa cada semana en cocina y clase
            </p>
            <h2 className="mt-3 font-display text-[clamp(1.85rem,3.4vw,2.9rem)] leading-[1.1] tracking-[-0.02em] text-[#171510]">
              No te falta talento.{' '}
              <em className="italic text-[#8A6824] font-normal">
                Te faltan herramientas pensadas para tu oficio.
              </em>
            </h2>

            <div className="mt-8 divide-y divide-[#171510]/12 border-t border-b border-[#171510]/12">
              {PAIN_POINTS.map((point) => (
                <article key={point.num} className="py-5 flex gap-4 sm:gap-5 items-start">
                  <span className="font-display text-xl sm:text-2xl text-[#8A6824] tabular-nums shrink-0 leading-none pt-0.5">
                    {point.num}.
                  </span>
                  <div className="space-y-1.5">
                    <h3 className="text-base sm:text-lg font-semibold text-[#171510] leading-snug">
                      {point.title}
                    </h3>
                    <p className="text-sm sm:text-[15px] text-[#555046] leading-relaxed">
                      {point.detail}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* Part 2: Interactive Role Selector */}
        <div className="space-y-8">
          <div className="max-w-2xl space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8A6824]">
              No necesitas tener un restaurante
            </p>
            <h2 className="font-display text-[clamp(1.85rem,3.4vw,2.9rem)] leading-[1.1] tracking-[-0.02em] text-[#171510]">
              Si la cocina es parte de tu vida,{' '}
              <em className="italic text-[#8A6824] font-normal">elige tu punto de partida.</em>
            </h2>
            <p className="text-base text-[#555046]">
              Selecciona tu perfil para ver qué te resuelve el manual desde el primer día.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            <div
              role="tablist"
              aria-label="Elige tu perfil gastronómico"
              className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5 content-start"
            >
              {PROFILES.map((profile, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <button
                    key={profile.id}
                    type="button"
                    role="tab"
                    id={`tab-${profile.id}`}
                    aria-selected={isActive}
                    aria-controls="profile-panel"
                    onClick={() => setActiveIndex(idx)}
                    className={`min-h-[48px] px-4 py-3.5 rounded-xl border text-left text-sm font-semibold transition-colors cursor-pointer flex items-center justify-between gap-3 ${
                      isActive
                        ? 'bg-[#14120E] text-[#F1D58F] border-[#8A6824]'
                        : 'bg-[#FBF9F3] text-[#171510] border-[#171510]/12 hover:border-[#8A6824]/60'
                    }`}
                  >
                    <span>{profile.tabLabel}</span>
                    <span
                      aria-hidden="true"
                      className={`text-xs ${isActive ? 'text-[#D6B160]' : 'text-[#8A6824]'}`}
                    >
                      →
                    </span>
                  </button>
                );
              })}
            </div>

            <article
              id="profile-panel"
              role="tabpanel"
              aria-labelledby={`tab-${activeProfile.id}`}
              className="lg:col-span-7 rounded-2xl bg-[#14120E] text-[#F7F4EC] border border-[#D6B160]/35 p-6 sm:p-8 lg:p-10 flex flex-col justify-between gap-6"
            >
              <div className="space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D6B160]">
                  {activeProfile.kicker}
                </p>
                <h3 className="font-display text-2xl sm:text-3xl leading-tight text-[#F7F4EC]">
                  {activeProfile.headline}
                </h3>
                <p className="text-sm sm:text-base text-[#CFC9BA] leading-relaxed">
                  {activeProfile.painMirror}
                </p>
                <p className="text-sm sm:text-base text-[#F7F4EC] leading-relaxed">
                  {activeProfile.outcome}
                </p>
              </div>

              <div className="pt-5 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <p className="text-xs sm:text-sm font-medium text-[#F1D58F]">
                  {activeProfile.route}
                </p>
                <a
                  href="#oferta"
                  className="inline-flex items-center justify-center gap-1.5 min-h-[46px] px-5 py-2.5 rounded-xl bg-[#D6B160] hover:bg-[#E4C276] text-[#17140B] text-sm font-bold transition-colors whitespace-nowrap shrink-0"
                >
                  <span>Empezar con este plan</span>
                  <ArrowUpRight className="w-4 h-4 shrink-0" aria-hidden="true" />
                </a>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
