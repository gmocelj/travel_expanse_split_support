import type { Dictionary } from '../types'

// Spanish (neutral, for Spain and Latin America). Informal "tú", as in the app.
export const es: Dictionary = {
  meta: {
    title: 'App para dividir gastos de viaje con amigos | Trevvy',
    description:
      '¿Te vas de viaje en grupo? Trevvy registra quién pagó qué, divide los gastos y muestra quién debe cuánto a quién. Gratis para iOS y Android, funciona sin conexión.',
    keywords: [
      'app para dividir gastos de viaje',
      'dividir gastos con amigos',
      'gastos compartidos viaje',
      'repartir gastos en grupo',
      'quién debe a quién',
      'dividir la cuenta',
      'presupuesto de viaje',
      'mejor app para dividir gastos',
    ],
    ogTitle: 'Trevvy – divide los gastos de viaje con amigos',
    ogDescription:
      'Registra gastos compartidos, divídelos con amigos y mira quién debe cuánto a quién. Sin cuenta, funciona sin conexión.',
  },
  nav: {
    features: 'Funciones',
    howItWorks: 'Cómo funciona',
    faq: 'Preguntas',
    support: 'Soporte',
    privacy: 'Privacidad',
    language: 'Idioma',
    toggleMenu: 'Abrir menú',
  },
  hero: {
    badge: 'Ya disponible en App Store y Google Play',
    titleStart: 'Divide los gastos de viaje',
    titleHighlight: 'sin hacer cuentas',
    subtitle:
      '¿Viajas en grupo? Añade a los participantes, registra los gastos por categoría y mira al instante quién debe cuánto a quién — o comparte el viaje para que tus amigos añadan gastos contigo.',
    appStore: 'Descargar en App Store',
    googlePlay: 'Disponible en Google Play',
    howItWorks: 'Ver cómo funciona',
    screenshotAlt: 'App Trevvy – lista de gastos del viaje',
  },
  features: {
    eyebrow: 'Funciones',
    title: 'Todo lo que necesitas para dividir gastos de viaje',
    subtitle:
      'Disfruta del viaje y deja que Trevvy haga las cuentas. Compartir viajes, escaneo QR/OCR, tipos de cambio en vivo y estadísticas son parte de Premium.',
    items: {
      split: {
        title: 'Divide gastos fácilmente',
        description: 'Añade un gasto compartido y Trevvy calcula automáticamente quién debe cuánto a quién.',
      },
      groups: {
        title: 'Hecho para viajes en grupo',
        description: 'Alojamiento, comida, transporte, gasolina y excursiones: todos los gastos del viaje en un solo lugar.',
      },
      share: {
        title: 'Comparte viajes con amigos',
        description:
          'Invita a tus amigos con un enlace. Todos añaden gastos al mismo viaje y ven los cambios al momento. Tus amigos se unen gratis.',
      },
      backup: {
        title: 'Copia de seguridad en tu cuenta',
        description:
          'Inicia sesión y tus viajes se guardan en tu cuenta, así los recuperas en un teléfono nuevo. Para empezar no necesitas cuenta.',
      },
      settle: {
        title: 'Liquida con menos pagos',
        description: 'Mira exactamente quién tiene que pagar a quién, con el menor número de pagos.',
      },
      scan: {
        title: 'Escaneo de tickets',
        description:
          "Escanea QR de recibos fiscales compatibles o usa OCR para recibos impresos de cualquier país. Revisa el importe, la moneda y la fecha antes de guardar.",
      },
      currency: {
        title: 'Varias monedas',
        description: 'Registra gastos en cualquier moneda con tu propio tipo de cambio o usa tipos de cambio en vivo.',
      },
      analytics: {
        title: 'Estadísticas de gastos',
        description:
          'Gasto por categoría y presupuesto frente a gasto real en cada viaje, además de tus gastos de todos los viajes del año.',
      },
    },
  },
  countries: {
    eyebrow: 'Escaneo de tickets QR',
    title: "Formatos de recibos fiscales QR",
    subtitle:
      "Los formatos compatibles incluyen recibos fiscales de Serbia y Croacia. Los datos disponibles dependen del formato del recibo.",
    footnote: "Puedes usar OCR para recibos impresos de cualquier país. Los resultados dependen de la calidad de imagen, el idioma y el diseño del recibo. Algunos QR necesitan internet.",
    names: {
      AR: 'Argentina',
      AT: 'Austria',
      BO: 'Bolivia',
      BR: 'Brasil',
      CN: 'China',
      CO: 'Colombia',
      HR: 'Croacia',
      CZ: 'Chequia',
      EC: 'Ecuador',
      EG: 'Egipto',
      HU: 'Hungría',
      IN: 'India',
      IT: 'Italia',
      KE: 'Kenia',
      KR: 'Corea del Sur',
      MX: 'México',
      PT: 'Portugal',
      RO: 'Rumania',
      RU: 'Rusia',
      SA: 'Arabia Saudita',
      RS: 'Serbia',
      SK: 'Eslovaquia',
      SI: 'Eslovenia',
      ES: 'España',
      TW: 'Taiwán',
      TH: 'Tailandia',
      UA: 'Ucrania',
    },
  },
  howItWorks: {
    eyebrow: 'Cómo funciona',
    title: 'Empieza en minutos',
    subtitle: 'Unos pasos sencillos para dividir gastos sin estrés.',
    steps: {
      create: {
        title: 'Crea un viaje',
        description: 'Crea un viaje nuevo y ponle un nombre para recordar.',
      },
      participants: {
        title: 'Añade participantes',
        description: 'Añade a tus compañeros de viaje por nombre o invítalos con un enlace para añadir gastos juntos.',
      },
      record: {
        title: 'Registra gastos',
        description: 'Anota los gastos en el momento. Trevvy lo recuerda todo.',
      },
      calculate: {
        title: 'Trevvy calcula',
        description: 'El saldo se actualiza al instante y siempre ves quién debe cuánto a quién.',
      },
    },
  },
  preview: {
    eyebrow: 'Vista previa',
    title: 'Claro e intuitivo',
    subtitle: 'Pensado para situaciones reales de viaje: rápido y claro.',
    screens: {
      travels: {
        alt: 'Lista de viajes con presupuestos',
        title: 'Tus viajes',
        description: 'Crea viajes, fija un presupuesto y sigue el gasto de todos tus viajes en un solo lugar.',
      },
      expenses: {
        alt: 'Lista de gastos por categoría',
        title: 'Registro de gastos',
        description: 'Cada gasto con su categoría, quién pagó y entre quiénes se divide.',
      },
      analytics: {
        alt: 'Estadísticas – gasto por categoría',
        title: 'Estadísticas de gastos',
        description: 'Gráficos por categoría y presupuesto frente a gasto real de un vistazo.',
      },
      settlement: {
        alt: 'Liquidación – pagos registrados',
        title: 'Liquidación sencilla',
        description: 'Mira las deudas pendientes, registra pagos y márcalos como liquidados.',
      },
    },
  },
  faq: {
    eyebrow: 'Preguntas',
    title: 'Preguntas frecuentes',
    subtitle: 'Todo lo que necesitas saber sobre Trevvy.',
    items: [
      {
        question: '¿Qué es Trevvy?',
        answer:
          'Trevvy es una app para dividir gastos de viaje para iOS y Android. Crea un viaje, añade amigos, registra los gastos compartidos y Trevvy calcula quién debe cuánto a quién, con una liquidación que usa el menor número de pagos.',
      },
      {
        question: '¿Cuál es la mejor app para dividir gastos de viaje con amigos?',
        answer:
          "Trevvy está hecho para viajar: divide gastos del grupo, controla presupuestos en más de 150 monedas y escanea recibos. El registro básico de gastos funciona sin conexión y sin cuenta. Los QR admiten formatos seleccionados; puedes usar OCR para recibos impresos de cualquier país. Gratis hasta 7 viajes activos.",
      },
      {
        question: '¿Trevvy es gratis?',
        answer:
          'Sí. Crear viajes, añadir participantes, registrar gastos y ver saldos es totalmente gratis hasta 7 viajes activos. Premium desbloquea compartir viajes, escaneo de tickets QR/OCR, tipos de cambio en vivo, estadísticas y viajes ilimitados.',
      },
      {
        question: '¿En qué idiomas está disponible Trevvy?',
        answer:
          'Trevvy está disponible en español, inglés, alemán, ruso, serbio, croata y bosnio. La app usa el idioma de tu teléfono; también puedes elegir un idioma en Ajustes y se mantendrá.',
      },
      {
        question: '¿Puedo compartir un viaje con amigos?',
        answer:
          'Sí. Comparte un viaje y envía el enlace de invitación; los amigos que se unan pueden añadir y editar gastos contigo y todos ven los cambios al momento. Solo el dueño del viaje necesita Premium: los amigos invitados se unen gratis.',
      },
      {
        question: '¿Cómo funciona el escaneo QR de tickets?',
        answer:
          "Escanea un QR compatible para rellenar el gasto con los datos disponibles. Algunos códigos contienen los datos directamente; otros necesitan internet para obtenerlos. Revisa el importe, la moneda y la fecha antes de guardar.",
      },
      {
        question: '¿De qué países puedo escanear tickets?',
        answer:
          "Los formatos compatibles incluyen recibos fiscales de Serbia y Croacia. Los datos disponibles dependen del formato del recibo. Puedes usar OCR para recibos impresos de cualquier país. Los resultados dependen de la calidad de imagen, el idioma y el diseño del recibo. Algunos QR necesitan internet.",
      },
      {
        question: '¿Trevvy admite varias monedas?',
        answer:
          'Sí. Puedes registrar cada gasto en cualquier moneda e introducir tu propio tipo de cambio; cada viaje tiene su moneda base. Premium obtiene tipos de cambio en vivo automáticamente.',
      },
      {
        question: '¿Necesito una cuenta?',
        answer:
          'No. Trevvy funciona sin registro: descárgala y empieza a crear viajes. Inicia sesión con Apple, Google o tu correo solo si quieres una copia de seguridad de tus viajes o compartirlos con amigos.',
      },
      {
        question: '¿Mis datos se guardan en internet?',
        answer:
          'Solo si inicias sesión. Sin cuenta, todo se queda en tu dispositivo. Con cuenta, tus viajes también se guardan en nuestros servidores para tener copia de seguridad y poder compartirlos; las fotos de los tickets siempre se quedan en tu dispositivo. Más detalles en la Política de privacidad.',
      },
      {
        question: '¿Cómo elimino mi cuenta?',
        answer:
          'En la app, ve a Ajustes → Cuenta → Eliminar cuenta. Se eliminan tu cuenta y los viajes guardados en ella; los viajes que compartiste quedan para sus miembros en modo solo lectura. También puedes solicitar la eliminación en trevvy.app/delete-account.',
      },
      {
        question: '¿Qué es un Trip Pass?',
        answer:
          'Un Trip Pass es una compra única que desbloquea Premium para un solo viaje durante 17 días: escaneo de tickets, tipos de cambio en vivo y estadísticas. Ideal si solo necesitas Premium para un viaje sin suscribirte. Para compartir viajes se necesita una suscripción.',
      },
      {
        question: '¿Cómo optimiza Trevvy las liquidaciones?',
        answer:
          'Trevvy usa un algoritmo de simplificación de deudas que busca el menor número de pagos para que todos queden a cero. En lugar de que todos paguen a todos, obtienes la lista de pagos más corta.',
      },
      {
        question: '¿Puedo exportar los datos del viaje?',
        answer: 'Sí. Puedes compartir un resumen de los gastos y saldos del viaje directamente desde la app.',
      },
    ],
  },
  cta: {
    title: 'Tu próximo viaje, sin líos de dinero',
    subtitle: 'Descarga Trevvy y céntrate en crear recuerdos, no en hojas de cálculo.',
    note: 'Descarga gratuita • No necesitas cuenta',
  },
  support: {
    eyebrow: 'Soporte',
    title: 'Estamos para ayudarte',
    subtitle: 'Si tienes algún problema o pregunta sobre Trevvy, escríbenos.',
    emailTitle: 'Soporte por correo',
    emailText: 'Escríbenos y te responderemos.',
    inAppTitle: 'Ayuda en la app',
    inAppText: 'Accede a la ayuda desde la app.',
    inAppPath: 'Ajustes → Ayuda y soporte',
    privacyTitle: 'Política de privacidad',
    privacyText: 'Cómo protegemos tus datos (en inglés).',
    privacyLink: 'Leer la política de privacidad',
  },
  footer: {
    tagline: 'La forma sencilla, rápida y sin estrés de dividir gastos de viaje con amigos.',
    product: 'Producto',
    support: 'Soporte',
    helpCenter: 'Centro de ayuda',
    contact: 'Contacto',
    legal: 'Legal',
    privacy: 'Política de privacidad',
    deleteAccount: 'Eliminar cuenta',
    languages: 'Idiomas',
    rights: 'Todos los derechos reservados.',
  },
  schema: {
    description:
      'App para dividir gastos de viaje con amigos: registra quién pagó qué, divide los gastos y muestra quién debe cuánto a quién.',
    featureList: [
      'División de gastos con liquidación en el menor número de pagos',
      'Viajes compartidos con cambios en vivo',
      "Formatos fiscales QR compatibles y OCR para recibos impresos de cualquier país",
      'Varias monedas y tipos de cambio en vivo',
      'Estadísticas y gráficos de gastos',
      'Funciona sin conexión; cuenta solo para copia de seguridad y compartir',
      'Trip Pass para Premium en un solo viaje',
      'En español, inglés, alemán, ruso, serbio, croata y bosnio',
    ],
  },
}
