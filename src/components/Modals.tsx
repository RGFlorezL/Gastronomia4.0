import { useEffect, useState } from 'react';
import { X, ArrowUpRight, CheckCircle2, Info } from 'lucide-react';
import type { BonusItem, PagePreviewItem } from '../data/manualContent';

interface ModalsProps {
  selectedPage: PagePreviewItem | null;
  onClosePage: () => void;
  selectedBonus: BonusItem | null;
  onCloseBonus: () => void;
  checkoutModalOpen: boolean;
  onCloseCheckoutModal: () => void;
}

export function Modals({
  selectedPage,
  onClosePage,
  selectedBonus,
  onCloseBonus,
  checkoutModalOpen,
  onCloseCheckoutModal,
}: ModalsProps) {
  const [fullImgFailed, setFullImgFailed] = useState(false);

  const anyOpen = Boolean(selectedPage || selectedBonus || checkoutModalOpen);

  useEffect(() => {
    setFullImgFailed(false);
  }, [selectedPage?.id]);

  useEffect(() => {
    if (!anyOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (selectedPage) onClosePage();
        else if (selectedBonus) onCloseBonus();
        else if (checkoutModalOpen) onCloseCheckoutModal();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [anyOpen, selectedPage, selectedBonus, checkoutModalOpen, onClosePage, onCloseBonus, onCloseCheckoutModal]);

  return (
    <>
      {/* 1. Enlarged Real PDF Page Modal */}
      {selectedPage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="page-dialog-title"
          onClick={onClosePage}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm p-3 sm:p-6 flex items-center justify-center overflow-y-auto"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-3xl rounded-2xl bg-[#14120E] border border-[#D6B160]/40 text-[#F7F4EC] overflow-hidden shadow-2xl my-auto"
          >
            <div className="px-4 sm:px-6 py-4 border-b border-white/10 flex items-center justify-between gap-4">
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#D6B160]">
                  {selectedPage.pageLabel}
                </p>
                <h3 id="page-dialog-title" className="font-display text-lg sm:text-xl text-[#F7F4EC] truncate">
                  {selectedPage.title}
                </h3>
              </div>
              <button
                type="button"
                aria-label="Cerrar vista ampliada"
                onClick={onClosePage}
                className="w-11 h-11 rounded-lg border border-white/15 hover:border-[#D6B160] flex items-center justify-center text-[#F7F4EC] shrink-0 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 sm:p-6 bg-[#0B0A08] max-h-[75vh] overflow-y-auto flex justify-center">
              {!fullImgFailed ? (
                <img
                  src={selectedPage.fullSrc}
                  alt={selectedPage.alt}
                  referrerPolicy="no-referrer"
                  onError={() => setFullImgFailed(true)}
                  className="w-full max-w-2xl h-auto rounded-lg border border-white/10"
                />
              ) : (
                <div className="py-12 px-6 text-center text-sm text-[#B8B2A2]">
                  {selectedPage.alt}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* 2. Bonus Structure Preview Modal */}
      {selectedBonus && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="bonus-dialog-title"
          onClick={onCloseBonus}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm p-4 flex items-center justify-center overflow-y-auto"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-xl rounded-2xl bg-[#14120E] border border-[#D6B160]/45 text-[#F7F4EC] overflow-hidden shadow-2xl my-auto"
          >
            <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#D6B160]">
                  {selectedBonus.tag} · {selectedBonus.type}
                </p>
                <h3 id="bonus-dialog-title" className="font-display text-xl sm:text-2xl text-[#F7F4EC]">
                  {selectedBonus.title}
                </h3>
              </div>
              <button
                type="button"
                aria-label="Cerrar detalle del bono"
                onClick={onCloseBonus}
                className="w-11 h-11 rounded-lg border border-white/15 hover:border-[#D6B160] flex items-center justify-center text-[#F7F4EC] shrink-0 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-5">
              <p className="text-sm sm:text-base text-[#CFC9BA] leading-relaxed">
                {selectedBonus.description}
              </p>

              <div className="rounded-xl border border-white/10 bg-[#0B0A08] p-4 sm:p-5 space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#D6B160]">
                  Qué incluye por dentro
                </p>
                <ul className="space-y-2.5">
                  {selectedBonus.previewSections.map((line, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-[#F7F4EC] leading-relaxed">
                      <CheckCircle2
                        className="w-4 h-4 text-[#D6B160] shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <p className="text-xs text-[#B8B2A2]">{selectedBonus.complement}</p>
                <a
                  href="#oferta"
                  onClick={onCloseBonus}
                  className="inline-flex items-center justify-center gap-1.5 min-h-[44px] px-5 py-2.5 rounded-xl bg-[#D6B160] hover:bg-[#E4C276] text-[#17140B] text-sm font-bold transition-colors whitespace-nowrap"
                >
                  <span>Incluido en el paquete</span>
                  <ArrowUpRight className="w-4 h-4 shrink-0" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 3. Checkout Activation Modal (Shown while Hotmart URL is pending configuration) */}
      {checkoutModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="checkout-dialog-title"
          onClick={onCloseCheckoutModal}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm p-4 flex items-center justify-center"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md rounded-2xl bg-[#14120E] border border-[#D6B160]/45 text-[#F7F4EC] p-6 space-y-5 shadow-2xl"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="inline-flex items-center gap-2 text-[#D6B160]">
                <Info className="w-5 h-5 shrink-0" aria-hidden="true" />
                <span className="text-xs font-semibold uppercase tracking-[0.14em]">
                  Enlace de pago Hotmart
                </span>
              </div>
              <button
                type="button"
                aria-label="Cerrar aviso de checkout"
                onClick={onCloseCheckoutModal}
                className="w-11 h-11 -mt-2 -mr-2 rounded-lg border border-white/15 hover:border-[#D6B160] flex items-center justify-center text-[#F7F4EC] shrink-0 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-2.5">
              <h3 id="checkout-dialog-title" className="font-display text-2xl text-[#F7F4EC]">
                Checkout listo para conectar
              </h3>
              <p className="text-sm text-[#CFC9BA] leading-relaxed">
                El botón de compra está configurado para redirigir de forma segura a Hotmart en
                cuanto agregues tu URL oficial del producto y su precio visible en la configuración
                de ventas.
              </p>
            </div>

            <button
              type="button"
              onClick={onCloseCheckoutModal}
              className="w-full min-h-[46px] rounded-xl bg-[#D6B160] hover:bg-[#E4C276] text-[#17140B] text-sm font-bold transition-colors cursor-pointer"
            >
              Entendido
            </button>
          </div>
        </div>
      )}
    </>
  );
}
