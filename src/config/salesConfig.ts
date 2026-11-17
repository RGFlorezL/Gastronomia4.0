export interface Testimonial {
  text: string;
  name: string;
  role: string;
}

export interface SalesConfig {
  /** Pega aquí tu enlace real de pago de Hotmart cuando lo publiques (ej. "https://pay.hotmart.com/TU_CODIGO") */
  hotmartUrl: string;
  /** Precio visible en la oferta (ej. "$29 USD" o "$79.900 COP"). Si queda vacío muestra "Consulta el precio en Hotmart". */
  priceLabel: string;
  /** Etiqueta de garantía o nota corta debajo del botón de pago */
  checkoutNote: string;
  /** Correo real de soporte (opcional, aparece en el pie de página) */
  supportEmail: string;
  /** Testimonios reales con permiso (se muestran automáticamente al agregar al menos uno) */
  testimonials: Testimonial[];
}

export const SALES_CONFIG: SalesConfig = {
  hotmartUrl: 'https://pay.hotmart.com/X108514723G',
  priceLabel: '',
  checkoutNote: 'Acceso inmediato en Hotmart · Entrega digital en PDF + 6 bonos',
  supportEmail: '',
  testimonials: [],
};

export function getCheckoutUrl(): URL | null {
  if (!SALES_CONFIG.hotmartUrl.trim()) return null;
  try {
    const parsed = new URL(SALES_CONFIG.hotmartUrl.trim());
    const validHost =
      parsed.hostname === 'hotmart.com' || parsed.hostname.endsWith('.hotmart.com');
    if (parsed.protocol === 'https:' && validHost) {
      return parsed;
    }
    return null;
  } catch {
    return null;
  }
}
