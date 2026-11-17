export interface MetricItem {
  value: string;
  label: string;
}

export interface PainPoint {
  num: string;
  title: string;
  detail: string;
}

export interface ProfileItem {
  id: string;
  tabLabel: string;
  kicker: string;
  headline: string;
  painMirror: string;
  outcome: string;
  route: string;
}

export interface PromptComparisonCase {
  id: string;
  label: string;
  contextTag: string;
  vaguePrompt: string;
  vagueProblem: string;
  formulaPrompt: string;
  realOutputTitle: string;
  realOutputItems: string[];
  humanCheckNote: string;
}

export interface ModuleItem {
  num: string;
  title: string;
  description: string;
  deliverable: string;
  featured?: boolean;
}

export interface PagePreviewItem {
  id: string;
  pageLabel: string;
  title: string;
  description: string;
  thumbSrc: string;
  fullSrc: string;
  alt: string;
}

export interface BonusItem {
  num: string;
  tag: string;
  type: string;
  title: string;
  description: string;
  complement: string;
  previewSections: string[];
}

export interface StepItem {
  num: string;
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const HERO_METRICS: MetricItem[] = [
  { value: '50', label: 'Páginas prácticas' },
  { value: '9', label: 'Módulos aplicables' },
  { value: '48', label: 'Prompts numerados' },
  { value: '90', label: 'Días de ruta' },
  { value: '6', label: 'Bonos incluidos' },
];

export const PAIN_POINTS: PainPoint[] = [
  {
    num: '01',
    title: 'Terminas la jornada agotado y sin cabeza para planear',
    detail:
      'Entre servicio, compras y producción, sentarte a redactar descripciones de carta, responder reseñas o estructurar costos queda siempre para después.',
  },
  {
    num: '02',
    title: 'Abres una IA, pides algo general y te responde algo sin alma',
    detail:
      'El problema no es tu cocina ni tu idea: es que sin rol, contexto, restricciones ni formato, cualquier asistente devuelve recetas genéricas que no sirven en operación real.',
  },
  {
    num: '03',
    title: 'Todo sobre inteligencia artificial suena hecho para programadores',
    detail:
      'Necesitas ejemplos pensados para cocina, panadería, pastelería, clases y emprendimientos gastronómicos — en español claro y sin código.',
  },
];

export const PROFILES: ProfileItem[] = [
  {
    id: 'cocineros',
    tabLabel: 'Auxiliares y cocineros',
    kicker: 'En partida y producción',
    headline: 'Convierte ingredientes disponibles en propuestas concretas.',
    painMirror:
      'Cuando te piden resolver una guarnición o aprovechar un excedente de cámara antes del servicio, no tienes una hora para improvisar.',
    outcome:
      'Aprende a darle contexto real a la IA con lo que tienes en inventario, ordenar fichas de preparación y proponer ideas listas para probar.',
    route: 'Punto de partida recomendado: módulos 1, 2 y 4',
  },
  {
    id: 'chefs',
    tabLabel: 'Chefs y responsables',
    kicker: 'Dirección de cocina',
    headline: 'Tu criterio al mando. La IA ordenando el trabajo pesado.',
    painMirror:
      'Estandarizar procesos, renovar descripciones de menú y documentar tareas para tu equipo consume horas fuera del pase.',
    outcome:
      'Usa estructuras probadas para redactar cartas más claras, comparar alternativas de emplatado y documentar procedimientos sin empezar de cero.',
    route: 'Punto de partida recomendado: módulos 5, 6 y 9',
  },
  {
    id: 'docentes',
    tabLabel: 'Instructores y docentes',
    kicker: 'Aulas y talleres',
    headline: 'Lleva ejemplos gastronómicos reales a tus clases.',
    painMirror:
      'Diseñar ejercicios actuales que enseñen criterio profesional —y no solo copiar respuestas de internet— lleva demasiado tiempo de preparación.',
    outcome:
      'Adapta prompts y casos del manual para crear rúbricas, comparar respuestas en clase y enseñar a tus estudiantes a verificar cada dato.',
    route: 'Punto de partida recomendado: módulos 1, 2 y proyecto de 90 días',
  },
  {
    id: 'estudiantes',
    tabLabel: 'Estudiantes',
    kicker: 'Formación gastronómica',
    headline: 'Pasa de una idea suelta a un proyecto bien sustentado.',
    painMirror:
      'Tienes buenas intuiciones culinarias, pero te cuesta bajar conceptos, escandallos y presentaciones escritas con orden profesional.',
    outcome:
      'Practica instrucciones claras, explora propuestas visuales de emplatado y estructura trabajos académicos con rigor gastronómico.',
    route: 'Punto de partida recomendado: módulos 1, 2 y 6',
  },
  {
    id: 'panaderia',
    tabLabel: 'Panadería y pastelería',
    kicker: 'Obrador y vitrina',
    headline: 'Organiza costos, vitrina y contenido sin descuidar el horno.',
    painMirror:
      'Entre horneados, tiempos de fermentación y pedidos, calcular márgenes por porción y publicar en redes queda olvidado.',
    outcome:
      'Aplica las plantillas de costeo, genera descripciones que despierten apetito y planifica un mes de contenido en minutos.',
    route: 'Punto de partida recomendado: módulos 3, 6 y 7',
  },
  {
    id: 'emprendedores',
    tabLabel: 'Emprendedores',
    kicker: 'Proyecto propio',
    headline: 'De buena sazón a negocio con números y canal propio.',
    painMirror:
      'Cocinar increíble no basta si pones precios al ojo, dependes solo de apps de entrega o no sabes cómo presentar tu proyecto.',
    outcome:
      'Ordena tus costos con precios reales de proveedores, estructura tus indicadores mensuales y prepara tu pitch con claridad.',
    route: 'Punto de partida recomendado: módulos 3, 7, 8 y 9',
  },
];

export const PROMPT_CASES: PromptComparisonCase[] = [
  {
    id: 'inventario',
    label: 'Ideas con inventario',
    contextTag: 'Ejemplo · Módulo 2 + Módulo 4',
    vaguePrompt: '«Dame 3 recetas con pollo y verduras que tengo en la nevera.»',
    vagueProblem:
      'Devuelve listas genéricas de blog casero, ignora mermas, no respeta tiempos de despacho ni te advierte qué falta revisar.',
    formulaPrompt:
      'Actúa como asistente creativo de cocina. Quiero desarrollar una propuesta con [INGREDIENTES DISPONIBLES] para [PRÁCTICA, CLASE O EMPRENDIMIENTO]. Sugiere tres ideas con nombre, concepto y preparación resumida. Pregunta qué información falta y señala qué debo verificar antes de probarlas. No inventes precios ni supongas ingredientes disponibles.',
    realOutputTitle: 'Lo que devuelve al aplicar la fórmula:',
    realOutputItems: [
      '3 propuestas con nombre comercial, concepto sensorial y método de cocción aplicable a tu turno.',
      'Preguntas de ajuste antes de ejecutar (equipo disponible, tiempo máximo de pase, público objetivo).',
      'Lista de verificación de alérgenos, rendimientos y puntos críticos sanitarios para tu criterio final.',
    ],
    humanCheckNote: 'Tú pruebas la sazón en cocina, verificas existencias y decides qué sale al plato.',
  },
  {
    id: 'costos',
    label: 'Escandallo y precios',
    contextTag: 'Ejemplo · Módulo 3 + Bono 05',
    vaguePrompt: '«¿Cuánto debo cobrar por una lasaña artesanal?»',
    vagueProblem:
      'Inventa precios promedio de otro país, omite merma de cocción, empaque y comisiones, y puede hacerte perder dinero en cada venta.',
    formulaPrompt:
      'Actúa como analista de costos gastronómicos. Con esta lista de ingredientes, pesos netos, porcentaje de merma y precios reales de mis proveedores [PEGAR TABLA], calcula el costo unitario por porción sin inventar valores. Señala qué insumos concentran mayor costo y sugiere tres rangos de precio según margen objetivo.',
    realOutputTitle: 'Lo que devuelve al aplicar la fórmula:',
    realOutputItems: [
      'Desglose claro de costo por gramo/porción usando exclusivamente tus precios reales de compra.',
      'Alerta inmediata sobre los 2 ingredientes que más presionan tu margen para optimizar rendimiento.',
      'Escenarios comparativos de precio sugerido antes de incluir empaque o impuestos.',
    ],
    humanCheckNote: 'Verificas facturas y peso real en báscula antes de fijar tu carta.',
  },
  {
    id: 'menu',
    label: 'Menús que venden',
    contextTag: 'Ejemplo · Módulo 5 + Bono 01',
    vaguePrompt: '«Escríbeme una descripción bonita para mi torta de chocolate.»',
    vagueProblem:
      'Genera textos llenos de clichés vacíos ("explosión de sabores") que suenan iguales a cualquier otro negocio.',
    formulaPrompt:
      'Actúa como redactor gastronómico. Reescribe la descripción de [PLATO O PRODUCTO] destacando origen del ingrediente principal, textura real y ocasión de consumo en máximo 24 palabras. Evita adjetivos vacíos. Entrega 3 opciones: una cercana, una sobria para carta impresa y una pensada para publicación en redes.',
    realOutputTitle: 'Lo que devuelve al aplicar la fórmula:',
    realOutputItems: [
      '3 versiones breves, directas y enfocadas en textura, aroma y origen real del producto.',
      'Cero palabras genéricas ni promesas exageradas que desentonen con tu marca.',
      'Textos listos para copiar a carta física, WhatsApp Business o calendario mensual.',
    ],
    humanCheckNote: 'Ajustas la voz exacta de tu cocina y confirmas ingredientes declarados.',
  },
];

export const MODULES: ModuleItem[] = [
  {
    num: '01',
    title: 'Tu asistente de IA sin rodeos',
    description: 'Entiende qué tareas conviene delegar a la IA y qué decisiones culinarias y operativas siguen siendo exclusivamente tuyas.',
    deliverable: 'Criterio de uso y límites claros',
    featured: true,
  },
  {
    num: '02',
    title: 'La fórmula del prompt gastronómico',
    description: 'Aprende a dar instrucciones con 5 piezas clave: rol, tarea, formato, contexto y restricciones para dejar de recibir respuestas genéricas.',
    deliverable: 'Estructura replicable + banco de prompts',
    featured: true,
  },
  {
    num: '03',
    title: 'Costos y precios con datos reales',
    description: 'Organiza costos de receta y trabaja con los precios reales de tus proveedores sin perder dinero por mermas ocultas.',
    deliverable: 'Flujo de costeo + comparativa',
  },
  {
    num: '04',
    title: 'Inventario, mermas y compras',
    description: 'Revisa existencias, registra mermas diarias y compara cotizaciones de proveedores con mayor orden.',
    deliverable: 'Prompts de control y aprovechamiento',
  },
  {
    num: '05',
    title: 'Menús y descripciones que venden',
    description: 'Mejora la redacción de tu carta, destaca platos clave y explora nuevas propuestas con coherencia de marca.',
    deliverable: 'Ingeniería narrativa de carta',
  },
  {
    num: '06',
    title: 'Emplatado e imagen como referencia',
    description: 'Convierte ideas visuales en bocetos de referencia para probar montaje, vajilla y contraste antes de producir.',
    deliverable: 'Guía visual de prompts para imagen',
  },
  {
    num: '07',
    title: 'Marketing, redes y reseñas',
    description: 'Planifica publicaciones semanales, responde reseñas difíciles con altura y organiza campañas sin improvisar cada noche.',
    deliverable: 'Sistema de comunicación constante',
  },
  {
    num: '08',
    title: 'Datos e indicadores para decidir',
    description: 'Ordena ventas, rotación y desempeño de tu carta para tomar decisiones basadas en hechos y no en corazonadas.',
    deliverable: 'Lectura práctica de números',
  },
  {
    num: '09',
    title: 'Documentación y automatización',
    description: 'Estandariza procesos repetitivos y explora la estructura de un canal propio de pedidos sin escribir código.',
    deliverable: 'Base operativa y proyecto integrador',
  },
];

export const PAGE_PREVIEWS: PagePreviewItem[] = [
  {
    id: 'p10',
    pageLabel: 'Página 10 · Vista real del PDF',
    title: 'Aprende a pedirle mejor a la IA',
    description: 'La fórmula exacta para pasar de respuestas vagas a propuestas aplicables en cocina.',
    thumbSrc: '/images/pagina-10-thumb.jpg',
    fullSrc: '/images/pagina-10-full.jpg',
    alt: 'Página 10 real del manual Gastronomía 4.0: Aprende a pedirle mejor a la IA',
  },
  {
    id: 'p15',
    pageLabel: 'Página 15 · Vista real del PDF',
    title: 'Lleva tus datos al costeo',
    description: 'Pasos claros, estructura de trabajo y un prompt aplicable con precios reales de compra.',
    thumbSrc: '/images/pagina-15-thumb.jpg',
    fullSrc: '/images/pagina-15-full.jpg',
    alt: 'Página 15 real del manual Gastronomía 4.0: Lleva tus datos al costeo',
  },
  {
    id: 'p43',
    pageLabel: 'Página 43 · Vista real del PDF',
    title: 'Avanza con una ruta de 90 días',
    description: 'Un plan gradual para implementar sin abrumarte, según tu disponibilidad y momento actual.',
    thumbSrc: '/images/pagina-43-thumb.jpg',
    fullSrc: '/images/pagina-43-full.jpg',
    alt: 'Página 43 real del manual Gastronomía 4.0: Avanza con una ruta de 90 días',
  },
];

export const BONUSES: BonusItem[] = [
  {
    num: '01',
    tag: 'Bono 01',
    type: 'Hoja de cálculo',
    title: 'Calendario de contenido 30 días',
    description: 'Organiza un mes completo de publicaciones para tu cocina, clase o emprendimiento sin quedarte frente a la pantalla en blanco.',
    complement: 'Complementa el módulo 7 · Marketing',
    previewSections: [
      'Bloques diarios por objetivo (producto, detrás de cocina, educación, oferta)',
      'Espacios para copy, formato sugerido y llamado a la acción',
      'Guía rápida de adaptación según tu ritmo de publicación',
    ],
  },
  {
    num: '02',
    tag: 'Bono 02',
    type: 'Hoja de cálculo',
    title: 'Dashboard financiero mensual',
    description: 'Registra ingresos, costos y movimientos del mes en un solo tablero visual para entender cómo va realmente tu operación.',
    complement: 'Complementa el módulo 8 · Datos',
    previewSections: [
      'Resumen mensual de ingresos vs. egresos por categoría',
      'Seguimiento de margen operativo y punto de equilibrio referencial',
      'Panel visual listo para revisar al cierre de cada semana',
    ],
  },
  {
    num: '03',
    tag: 'Bono 03',
    type: 'Documento',
    title: 'Diagnóstico inicial',
    description: 'Tu punto de partida para detectar en qué tareas concretas de tu trabajo o proyecto te conviene empezar a aplicar IA.',
    complement: 'Complementa el método · Diagnostica',
    previewSections: [
      'Checklist de fricciones diarias (costos, compras, carta, redes, docencia)',
      'Matriz rápida de prioridad según tiempo ahorrado vs. esfuerzo',
      'Selección directa del módulo por el cual empezar hoy',
    ],
  },
  {
    num: '04',
    tag: 'Bono 04',
    type: 'Documento',
    title: 'Estructura No-Code',
    description: 'Una arquitectura de referencia para organizar un proyecto digital propio —como un canal directo de pedidos— sin programar.',
    complement: 'Complementa el módulo 9 · Automatización',
    previewSections: [
      'Flujo paso a paso desde catálogo hasta confirmación de pedido',
      'Campos esenciales de ficha de producto, cobertura y horarios',
      'Recomendaciones de verificación humana antes de automatizar mensajes',
    ],
  },
  {
    num: '05',
    tag: 'Bono 05',
    type: 'Carpeta de plantillas',
    title: 'Plantilla de costeo de platos',
    description: 'Ordena los ingredientes de cada preparación y calcula su costo unitario usando los precios reales de tus proveedores.',
    complement: 'Complementa el módulo 3 · Costos',
    previewSections: [
      'Tabla por ingrediente con unidad de compra, peso bruto, merma y costo neto',
      'Cálculo por porción con margen objetivo y alertas de variación',
      'Lista para duplicar en menú salado, panadería o pastelería',
    ],
  },
  {
    num: '06',
    tag: 'Bono 06',
    type: 'Documento',
    title: 'Plantilla de pitch',
    description: 'Una estructura clara para presentar tu idea, carta o emprendimiento gastronómico ante clientes, aliados o inversionistas.',
    complement: 'Complementa el módulo 5 · Menús',
    previewSections: [
      'Guion de problema, propuesta culinaria y diferenciación real',
      'Bloque para presentar números clave sin tecnicismos confusos',
      'Cierre orientado a alianza, financiamiento o evento',
    ],
  },
];

export const STEPS: StepItem[] = [
  {
    num: '01',
    title: 'Diagnostica',
    description: 'Identifica una tarea concreta de tu cocina, clase o proyecto que hoy te esté quitando tiempo.',
  },
  {
    num: '02',
    title: 'Elige',
    description: 'Abre el módulo exacto para esa necesidad. No necesitas leer el manual en orden lineal.',
  },
  {
    num: '03',
    title: 'Aplica',
    description: 'Copia y adapta un prompt con tus ingredientes, precios o contexto y evalúa la propuesta.',
  },
  {
    num: '04',
    title: 'Mide y ajusta',
    description: 'Compara contra tu forma anterior de trabajar, quédate con lo que funciona y pasa al siguiente frente.',
  },
];

export const FIT_FOR_YOU: string[] = [
  'Cocinas, estudias, enseñas o emprendes en gastronomía, panadería o pastelería.',
  'Quieres aplicaciones prácticas de IA aterrizadas a tu oficio real, sin tecnicismos ni código.',
  'Buscas un manual visual con prompts y plantillas que puedas consultar y adaptar a tu ritmo.',
];

export const NOT_INCLUDED: string[] = [
  'No es un software de gestión ni una aplicación de pedidos ya programada.',
  'No incluye clases en vivo, videos ni asesoría individual personalizada.',
  'No promete ventas mágicas, ahorros automáticos ni rentabilidad garantizada.',
];

export const FAQS: FaqItem[] = [
  {
    question: '¿Me sirve si no tengo un restaurante?',
    answer:
      'Sí. Puedes aprovechar los métodos de prompts, creatividad, imagen y organización en tu trabajo, formación o proyecto gastronómico. Los ejemplos del manual incluyen restaurantes y gestión de negocios; adapta las actividades a tu contexto. No es un programa especializado para cada profesión.',
  },
  {
    question: '¿Necesito saber programar o haber usado IA antes?',
    answer:
      'No necesitas saber programar. El manual empieza desde el uso básico de un asistente y la estructura clara de una instrucción. Para practicar solo necesitarás acceso a internet y a la herramienta de IA que prefieras utilizar.',
  },
  {
    question: '¿Qué recibo exactamente al comprar?',
    answer:
      'Recibes el manual digital en PDF (50 páginas) con sus 9 módulos, banco de 48 prompts numerados y hoja de ruta de 90 días, más 6 bonos digitales: calendario de contenido 30 días, dashboard financiero mensual, diagnóstico inicial, estructura No-Code, plantilla de costeo de platos y plantilla de pitch.',
  },
  {
    question: '¿Cómo recibo el manual y los 6 bonos?',
    answer:
      'Son materiales 100% digitales incluidos con tu compra. Al completar el pago en Hotmart tendrás acceso inmediato al PDF y a los archivos descargables o editables según se indica en la página de pago.',
  },
  {
    question: '¿Es un curso con clases o acompañamiento?',
    answer:
      'No. Es un material de consulta y aplicación autónoma diseñado para ir directo al grano. Esta oferta no incluye clases en vivo, videos, tutorías ni asesoría personalizada.',
  },
  {
    question: '¿Debo seguir el plan completo de 90 días?',
    answer:
      'La hoja de ruta es una guía de organización sugerida. Puedes empezar hoy mismo por el módulo que resuelva tu necesidad más urgente y avanzar según tu disponibilidad.',
  },
  {
    question: '¿Los resultados de los ejemplos están garantizados?',
    answer:
      'No. Cada resultado depende de tus datos reales, tu ejecución y el contexto de tu negocio o formación. Verifica siempre cálculos, precios y datos críticos antes de tomar decisiones comerciales.',
  },
  {
    question: '¿Qué condiciones de pago y entrega aplican en Hotmart?',
    answer:
      'Antes de finalizar tu compra en Hotmart podrás revisar el precio exacto en tu moneda local, los medios de pago habilitados en tu país, el acceso de entrega y las condiciones de garantía configuradas para el producto.',
  },
  {
    question: '¿La IA sustituye la revisión profesional?',
    answer:
      'Nunca. Sus propuestas requieren criterio y revisión humana. Los aspectos financieros, sanitarios, de alérgenos y de protección de datos deben verificarse siempre con fuentes y criterio profesional competente. Las imágenes generadas son referencias creativas, no evidencia de un plato real.',
  },
];
