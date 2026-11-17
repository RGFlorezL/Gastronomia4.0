import { Check, Minus } from 'lucide-react';
import { STEPS, FIT_FOR_YOU, NOT_INCLUDED } from '../data/manualContent';
import { SALES_CONFIG } from '../config/salesConfig';
import { BrandMark } from './BrandMark';

export function AuthorAndHonesty() {
  return (
    <section
      id="metodo"
      className="bg-[#F7F4EC] text-[#171510] py-16 sm:py-24 border-b border-[#171510]/10"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20">
        {/* Part 1: 4-Step Method & 90-Day Route */}
        <div className="space-y-10">
          <div className="max-w-2xl space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8A6824]">
              Ruta de 90 días · Sin abrumarte
            </p>
            <h2 className="font-display text-[clamp(1.85rem,3.4vw,2.9rem)] leading-[1.1] tracking-[-0.02em]">
              Empieza por lo que hoy te urge.{' '}
              <em className="italic text-[#8A6824] font-normal">En cuatro pasos claros.</em>
            </h2>
            <p className="text-base text-[#555046]">
              No necesitas leer las 50 páginas de corrido para ver utilidad. Abres el frente que hoy
              te quita tiempo y lo aplicas con tus propios datos.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {STEPS.map((step) => (
              <article
                key={step.num}
                className="rounded-2xl border border-[#171510]/12 bg-[#FBF9F3] p-6 space-y-3"
              >
                <span className="block font-display text-2xl text-[#8A6824] tabular-nums leading-none">
                  {step.num}.
                </span>
                <h3 className="text-lg font-semibold text-[#171510]">{step.title}</h3>
                <p className="text-sm text-[#555046] leading-relaxed">{step.description}</p>
              </article>
            ))}
          </div>
        </div>

        {/* Part 2: Honest Fit Comparison (Zero-hype transparency) */}
        <div className="space-y-8">
          <div className="max-w-2xl space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8A6824]">
              Claridad total antes de comprar
            </p>
            <h2 className="font-display text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.12] tracking-[-0.02em]">
              Promesas honestas para que decidas sin dudas.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-[#2F7A5A]/30 bg-[#FBF9F3] p-6 sm:p-8 space-y-5">
              <h3 className="font-display text-xl sm:text-2xl text-[#171510]">
                Este manual sí es para ti si…
              </h3>
              <ul className="space-y-3.5">
                {FIT_FOR_YOU.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-[#35322B] leading-relaxed">
                    <span className="w-6 h-6 rounded-full bg-[#2F7A5A]/12 text-[#2F7A5A] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" aria-hidden="true" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-[#171510]/15 bg-[#ECE6D8] p-6 sm:p-8 space-y-5">
              <h3 className="font-display text-xl sm:text-2xl text-[#171510]">
                Lo que NO estás comprando
              </h3>
              <ul className="space-y-3.5">
                {NOT_INCLUDED.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-[#4A453B] leading-relaxed">
                    <span className="w-6 h-6 rounded-full bg-[#171510]/10 text-[#555046] flex items-center justify-center shrink-0 mt-0.5">
                      <Minus className="w-3.5 h-3.5" aria-hidden="true" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Optional Testimonials (Rendered only when real entries are added in salesConfig.ts) */}
        {SALES_CONFIG.testimonials.length > 0 && (
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8A6824]">
              Voces de lectores
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {SALES_CONFIG.testimonials.map((t, idx) => (
                <blockquote
                  key={idx}
                  className="rounded-2xl border border-[#171510]/12 bg-[#FBF9F3] p-6 flex flex-col justify-between gap-4"
                >
                  <p className="text-sm sm:text-base text-[#35322B] leading-relaxed">«{t.text}»</p>
                  <footer className="pt-3 border-t border-[#171510]/10">
                    <p className="text-sm font-semibold text-[#171510]">{t.name}</p>
                    <p className="text-xs text-[#555046]">{t.role}</p>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        )}

        {/* Part 3: Author Block */}
        <div
          id="autor"
          className="rounded-2xl border border-[#171510]/15 bg-[#14120E] text-[#F7F4EC] p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          <div className="lg:col-span-4 flex flex-col items-start gap-4 border-b lg:border-b-0 lg:border-r border-white/10 pb-6 lg:pb-0 lg:pr-8">
            <div className="inline-flex items-center gap-3">
              <div className="w-14 h-14 rounded-xl border border-[#D6B160]/45 bg-[#1C1913] flex items-center justify-center">
                <BrandMark className="w-9 h-9" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#D6B160]">
                  Autor del manual
                </p>
                <p className="font-display text-2xl text-[#F7F4EC] leading-tight">
                  Giovanny Florez
                </p>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-[#B8B2A2] leading-relaxed">
              Cocinero · Desarrollador · Creador de Gastronomía 4.0
            </p>
          </div>

          <div className="lg:col-span-8 space-y-3">
            <h3 className="font-display text-2xl sm:text-3xl text-[#F7F4EC] leading-snug">
              Escrito desde la cocina y el código,{' '}
              <em className="italic text-[#F1D58F] font-normal">para que no pierdas horas.</em>
            </h3>
            <p className="text-sm sm:text-base text-[#CFC9BA] leading-relaxed">
              Gastronomía 4.0 nació de ver a cocineros, panaderos, docentes y emprendedores con
              oficio real quedarse atrás frente a tutoriales de inteligencia artificial llenos de
              tecnicismos. Este manual reúne en 50 páginas la estructura práctica para usar la IA
              con criterio profesional sin dejar de lado lo más importante: tu sazón y tus decisiones.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
