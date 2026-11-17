import { Maximize2 } from 'lucide-react';
import { MODULES, PAGE_PREVIEWS, type PagePreviewItem } from '../data/manualContent';

interface ModulesAndPagesProps {
  onSelectPage: (page: PagePreviewItem) => void;
}

export function ModulesAndPages({ onSelectPage }: ModulesAndPagesProps) {
  return (
    <>
      {/* 9 Modules in Asymmetric Bento Grid */}
      <section id="modulos" className="bg-[#0B0A08] text-[#F7F4EC] py-16 sm:py-24 border-b border-white/10">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
            <div className="lg:col-span-7 space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D6B160]">
                Un manual · Nueve frentes de trabajo
              </p>
              <h2 className="font-display text-[clamp(1.85rem,3.4vw,2.9rem)] leading-[1.1] tracking-[-0.02em]">
                Deja de preguntarte{' '}
                <em className="italic text-[#F1D58F] font-normal">«¿y esto cómo lo aplico?»</em>
              </h2>
            </div>
            <p className="lg:col-span-5 text-sm sm:text-base text-[#B8B2A2] leading-relaxed">
              Ve directo al módulo que hoy te duele más: costos, inventario, carta, imagen o
              redes. Cada módulo combina criterio gastronómico, pasos claros y prompts listos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {MODULES.map((mod) => (
              <article
                key={mod.num}
                className={`rounded-2xl border p-6 flex flex-col justify-between gap-5 transition-colors ${
                  mod.featured
                    ? 'lg:col-span-1 bg-[#18150F] border-[#D6B160]/45'
                    : 'bg-[#13110D] border-white/10 hover:border-[#D6B160]/35'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2 text-xs text-[#D6B160]">
                    <span className="font-display text-2xl font-medium tabular-nums leading-none">
                      {mod.num}.
                    </span>
                    <span className="font-medium text-[#B8B2A2]">{mod.deliverable}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-[#F7F4EC] leading-snug">
                    {mod.title}
                  </h3>
                  <p className="text-sm text-[#B8B2A2] leading-relaxed">{mod.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Real PDF Pages Preview */}
      <section id="interior" className="bg-[#F7F4EC] text-[#171510] py-16 sm:py-24 border-b border-[#171510]/10">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="max-w-2xl space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8A6824]">
              Mira antes de decidir
            </p>
            <h2 className="font-display text-[clamp(1.85rem,3.4vw,2.9rem)] leading-[1.1] tracking-[-0.02em]">
              Así se ve por dentro.{' '}
              <em className="italic text-[#8A6824] font-normal">Sin relleno.</em>
            </h2>
            <p className="text-base text-[#555046]">
              Estas son capturas reales del PDF de Gastronomía 4.0. Toca cualquiera para ampliarla
              y revisar su diseño, claridad y estructura.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PAGE_PREVIEWS.map((page) => (
              <button
                key={page.id}
                type="button"
                onClick={() => onSelectPage(page)}
                className="group text-left rounded-2xl border border-[#171510]/12 bg-[#FBF9F3] p-4 sm:p-5 hover:border-[#8A6824] transition-colors cursor-pointer flex flex-col justify-between gap-4"
              >
                <div className="space-y-4">
                  <div className="relative overflow-hidden rounded-xl bg-[#ECE6D8] p-4 border border-[#171510]/8">
                    <img
                      src={page.thumbSrc}
                      alt={page.alt}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="w-full aspect-[3/4] object-cover object-top rounded shadow-sm group-hover:scale-[1.02] transition-transform duration-300"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#8A6824]">
                      {page.pageLabel}
                    </p>
                    <h3 className="text-lg font-semibold text-[#171510] leading-snug">
                      {page.title}
                    </h3>
                    <p className="text-sm text-[#555046] leading-relaxed">{page.description}</p>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#171510] group-hover:text-[#8A6824] pt-2 border-t border-[#171510]/10">
                  <Maximize2 className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Ampliar página real</span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
