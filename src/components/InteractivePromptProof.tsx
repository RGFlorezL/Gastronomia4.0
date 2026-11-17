import { useState } from 'react';
import { Copy, Check, ArrowRight } from 'lucide-react';
import { PROMPT_CASES } from '../data/manualContent';

export function InteractivePromptProof() {
  const [selectedId, setSelectedId] = useState(PROMPT_CASES[0].id);
  const [copied, setCopied] = useState(false);

  const activeCase = PROMPT_CASES.find((c) => c.id === selectedId) ?? PROMPT_CASES[0];

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(activeCase.formulaPrompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section
      id="prueba-prompt"
      className="bg-[#ECE6D8] text-[#171510] py-16 sm:py-24 border-b border-[#171510]/10"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8A6824]">
              De la duda al resultado útil
            </p>
            <h2 className="font-display text-[clamp(1.85rem,3.4vw,2.9rem)] leading-[1.1] tracking-[-0.02em]">
              ¿Por qué la IA te da respuestas flojas?{' '}
              <em className="italic text-[#8A6824] font-normal">Mira la diferencia en vivo.</em>
            </h2>
            <p className="text-base text-[#555046]">
              Cambia el escenario y compara cómo responde una petición improvisada frente a la
              fórmula de 5 piezas que aplicas en Gastronomía 4.0.
            </p>
          </div>

          {/* Interactive Case Switcher */}
          <div
            role="tablist"
            aria-label="Escenarios de ejemplo"
            className="inline-flex flex-wrap gap-1.5 p-1.5 rounded-xl bg-[#E1DAC8] border border-[#171510]/10 self-start"
          >
            {PROMPT_CASES.map((item) => {
              const active = item.id === activeCase.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => {
                    setSelectedId(item.id);
                    setCopied(false);
                  }}
                  className={`min-h-[42px] px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                    active
                      ? 'bg-[#14120E] text-[#F1D58F]'
                      : 'text-[#3F3B33] hover:text-[#171510]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Comparison Grid: Vague vs Formula + Real Output */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left: Before vs Prompt Formula */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            {/* Before: Vague Request */}
            <div className="rounded-xl border border-[#171510]/12 bg-[#FBF9F3] p-5 sm:p-6 space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#7D4335]">
                Sin método · Lo que suele pedir todo el mundo
              </p>
              <p className="font-mono text-sm text-[#171510]">{activeCase.vaguePrompt}</p>
              <p className="text-sm text-[#555046] leading-relaxed">{activeCase.vagueProblem}</p>
            </div>

            {/* After: Formula Prompt */}
            <div className="flex-1 rounded-2xl border border-[#8A6824]/50 bg-[#14120E] text-[#F7F4EC] overflow-hidden flex flex-col">
              <div className="px-5 py-3.5 bg-[#1C1913] border-b border-white/10 flex items-center justify-between gap-3 flex-wrap">
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#D6B160]">
                  {activeCase.contextTag}
                </span>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="inline-flex items-center gap-1.5 min-h-[38px] px-3.5 py-1.5 rounded-lg border border-[#D6B160]/45 bg-white/[0.04] hover:bg-[#D6B160]/15 text-xs font-semibold text-[#F1D58F] transition-colors cursor-pointer whitespace-nowrap"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Copiado</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Copiar prompt</span>
                    </>
                  )}
                </button>
              </div>

              <div className="p-5 sm:p-6 font-mono text-sm leading-relaxed text-[#EBE5D5] flex-1">
                {activeCase.formulaPrompt}
              </div>
            </div>
          </div>

          {/* Right: Concrete Outcome Preview */}
          <div className="lg:col-span-5 rounded-2xl border border-[#171510]/15 bg-[#FBF9F3] p-6 sm:p-7 flex flex-col justify-between gap-6">
            <div className="space-y-5">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#2F7A5A]">
                <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>Resultado práctico en segundos</span>
              </div>

              <h3 className="font-display text-xl sm:text-2xl text-[#171510] leading-snug">
                {activeCase.realOutputTitle}
              </h3>

              <ul className="space-y-3.5">
                {activeCase.realOutputItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm sm:text-[15px] text-[#35322B] leading-relaxed">
                    <span className="w-6 h-6 rounded-full bg-[#2F7A5A] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 tabular-nums">
                      {i + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-[#171510]/10">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#8A6824]">
                Tu criterio siempre manda
              </p>
              <p className="mt-1 text-sm text-[#555046]">{activeCase.humanCheckNote}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
