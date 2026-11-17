import { useState } from 'react';
import { Eye, ArrowUpRight } from 'lucide-react';
import { BONUSES, type BonusItem } from '../data/manualContent';

interface BonusesShowcaseProps {
  onSelectBonus: (bonus: BonusItem) => void;
}

export function BonusesShowcase({ onSelectBonus }: BonusesShowcaseProps) {
  const [bakeryFailed, setBakeryFailed] = useState(false);
  const [duoFailed, setDuoFailed] = useState(false);

  return (
    <section
      id="bonos"
      className="bg-[#0B0A08] text-[#F7F4EC] py-16 sm:py-24 border-b border-white/10"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
          <div className="lg:col-span-7 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D6B160]">
              6 herramientas incluidas · Sin costo extra
            </p>
            <h2 className="font-display text-[clamp(1.85rem,3.4vw,2.9rem)] leading-[1.1] tracking-[-0.02em]">
              Además del manual, te llevas{' '}
              <em className="italic text-[#F1D58F] font-normal">
                las plantillas listas para trabajar hoy.
              </em>
            </h2>
          </div>
          <p className="lg:col-span-5 text-sm sm:text-base text-[#B8B2A2] leading-relaxed">
            Cada bono aterriza un módulo clave en hojas de cálculo y documentos prácticos para que
            no tengas que construir formatos desde cero después de un turno largo.
          </p>
        </div>

        {/* 6 Bonus Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {BONUSES.map((bonus) => (
            <article
              key={bonus.num}
              className="rounded-2xl border border-white/12 bg-[#14120E] p-6 flex flex-col justify-between gap-6 hover:border-[#D6B160]/45 transition-colors"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-3 text-xs uppercase tracking-[0.14em]">
                  <span className="font-semibold text-[#D6B160]">{bonus.tag}</span>
                  <span className="text-[#B8B2A2]">{bonus.type}</span>
                </div>

                <h3 className="font-display text-xl sm:text-[22px] text-[#F7F4EC] leading-snug">
                  {bonus.title}
                </h3>

                <p className="text-sm text-[#CFC9BA] leading-relaxed">{bonus.description}</p>
              </div>

              <div className="pt-4 border-t border-white/10 space-y-3">
                <p className="text-xs font-medium text-[#B8B2A2]">{bonus.complement}</p>
                <button
                  type="button"
                  onClick={() => onSelectBonus(bonus)}
                  className="inline-flex items-center gap-2 min-h-[44px] px-4 py-2 rounded-lg border border-[#D6B160]/35 bg-white/[0.03] hover:bg-[#D6B160]/12 hover:border-[#D6B160]/70 text-xs sm:text-sm font-semibold text-[#F1D58F] transition-colors cursor-pointer"
                >
                  <Eye className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>Ver contenido incluido</span>
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Emotional Culinary Conviction Band */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch rounded-2xl border border-[#D6B160]/25 bg-[#12100C] p-5 sm:p-7">
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="relative overflow-hidden rounded-xl aspect-[4/3] bg-[#1A1711] border border-white/10">
              {!bakeryFailed ? (
                <img
                  src="/images/panaderia-artesanal.jpg"
                  alt="Panadería artesanal con masa madre y piezas recién horneadas listas para vitrina"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onError={() => setBakeryFailed(true)}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center p-4 text-xs text-[#B8B2A2]">
                  Panadería, pastelería y vitrina organizada
                </div>
              )}
            </div>

            <div className="relative overflow-hidden rounded-xl aspect-[4/3] bg-[#1A1711] border border-white/10">
              {!duoFailed ? (
                <img
                  src="/images/chef-ia-duo.jpg"
                  alt="Cocinero trabajando con criterio profesional apoyado por herramientas digitales en cocina"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onError={() => setDuoFailed(true)}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center p-4 text-xs text-[#B8B2A2]">
                  Criterio humano al mando de tu cocina
                </div>
              )}
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-center gap-4 lg:pl-2">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#D6B160]">
              El propósito real del manual
            </p>
            <h3 className="font-display text-2xl sm:text-3xl leading-tight text-[#F7F4EC]">
              Que la tecnología trabaje para tu oficio —{' '}
              <em className="italic text-[#F1D58F] font-normal">no al revés.</em>
            </h3>
            <p className="text-sm sm:text-base text-[#CFC9BA] leading-relaxed">
              Cada hora que recuperas ordenando escandallos, descripciones de menú o planeación de
              contenido es una hora que vuelve a tu cocina, a tus alumnos o a tu vida fuera del
              turno.
            </p>
            <div className="pt-1">
              <a
                href="#oferta"
                className="inline-flex items-center justify-center gap-2 min-h-[48px] px-5 py-3 rounded-xl bg-[#D6B160] hover:bg-[#E4C276] text-[#17140B] text-sm font-bold transition-colors whitespace-nowrap"
              >
                <span>Ver paquete completo</span>
                <ArrowUpRight className="w-4 h-4 shrink-0" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
