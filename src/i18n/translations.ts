export type Lang = 'es' | 'en'

export interface ServiceItem {
  key: 'web' | 'ads' | 'ai'
  number: string
  title: string
  description: string
  bullets: string[]
  cta: string
  hasPlatformIcons?: boolean
}

export interface ProcessStep {
  n: string
  title: string
  description: string
}

export interface ProcessTrack {
  label: string
  steps: ProcessStep[]
}

export interface PricingPlan {
  key: 'web' | 'ads' | 'ai'
  name: string
  desc: string
  originalPrice?: string
  price: string
  period: string
  note?: string
  badge?: string
  features: string[]
  cta: string
}

export interface CatalogService {
  key: string
  name: string
  pitch: string
  bullets: string[]
  setup?: string
  monthly?: string
  recurring: boolean
  idealFor: string
}

export interface CatalogCategory {
  key: string
  title: string
  services: CatalogService[]
}

export interface CatalogPack {
  key: string
  name: string
  tagline: string
  includes: string[]
  setup: string
  monthly: string
  idealFor: string
  cta: string
}

export interface Catalog {
  eyebrow: string
  title: string
  subtitle: string
  recurringLabel: string
  setupLabel: string
  monthlyLabel: string
  idealForLabel: string
  ctaLabel: string
  categories: CatalogCategory[]
  packsEyebrow: string
  packsTitle: string
  packsSubtitle: string
  packs: CatalogPack[]
}

export interface Translations {
  metaDescription: string
  nav: {
    services: string
    why: string
    process: string
    pricing: string
    catalog: string
    contact: string
    cta: string
  }
  hero: {
    eyebrow: string
    titleA: string
    titleB: string
    subtitle: string
    ctaWeb: string
    ctaAds: string
    aiWidget: { status: string; title: string; line: string }
  }
  scroll: { titleA: string; titleB: string }
  services: { eyebrow: string; title: string; items: ServiceItem[] }
  why: {
    eyebrow: string
    title: string
    lead: string
    items: { n: string; title: string; description: string }[]
  }
  process: { eyebrow: string; title: string; tracks: ProcessTrack[] }
  logosLabel: string
  pricing: {
    eyebrow: string
    title: string
    plans: PricingPlan[]
    quote: { title: string; desc: string; cta: string }
  }
  catalog: Catalog
  contact: {
    eyebrow: string
    title: string
    subtitle: string
    serviceLabels: { web: string; ads: string; ai: string }
    fields: {
      name: string
      email: string
      phone: string
      country: string
      countryOther: string
      businessType: string
      hasWebsite: string
      yes: string
      no: string
      websiteUrl: string
      currentPlatform: string
      platformNone: string
      budget: string
      message: string
    }
    error: string
    success: { title: string; body: string }
    submit: string
    sending: string
  }
  footer: { rights: string }
}

export const translations: Record<Lang, Translations> = {
  es: {
    metaDescription:
      'Inefable — Agencia de desarrollo web y gestión de publicidad en Madrid, para España, EE.UU., Venezuela y El Salvador.',
    nav: {
      services: 'Servicios',
      why: 'Por qué Inefable',
      process: 'Proceso',
      pricing: 'Tarifas',
      catalog: 'Catálogo',
      contact: 'Contacto',
      cta: 'Empecemos',
    },
    hero: {
      eyebrow: 'Webs, ads y automatización con IA',
      titleA: 'Sitios que cargan rápido.',
      titleB: 'Anuncios que convierten.',
      subtitle:
        'Inefable combina desarrollo web moderno con gestión de publicidad basada en datos — sin vueltas, sin contratos eternos.',
      ctaWeb: 'Quiero mi web',
      ctaAds: 'Quiero gestionar mis ads',
      aiWidget: {
        status: 'En línea',
        title: 'Recepcionista IA',
        line: '¿En qué puedo ayudarte hoy?',
      },
    },
    scroll: { titleA: 'De clics', titleB: 'a clientes.' },
    services: {
      eyebrow: 'Servicios',
      title: 'Tres formas de crecer',
      items: [
        {
          key: 'web',
          number: '01',
          title: 'Desarrollo Web',
          description:
            'Sitios rápidos y modernos, construidos con React + Vite y desplegados en Vercel.',
          bullets: ['React + Vite + Tailwind', 'Deploy en Vercel', 'Mobile-first', 'SEO técnico'],
          cta: 'Hablemos de tu web',
        },
        {
          key: 'ads',
          number: '02',
          title: 'Gestión de Ads',
          description:
            'Campañas en Meta y Google Ads, optimizadas con datos reales cada semana.',
          bullets: ['Meta Ads', 'Google Ads', 'Reporte semanal', 'Optimización continua'],
          cta: 'Hablemos de tus ads',
          hasPlatformIcons: true,
        },
        {
          key: 'ai',
          number: '03',
          title: 'Recepcionista IA',
          description: 'Un agente de IA que atiende llamadas y mensajes de tu negocio, 24/7.',
          bullets: [
            'Disponible 24/7',
            'Agenda citas sola',
            'Responde preguntas frecuentes',
            'WhatsApp y teléfono',
          ],
          cta: 'Hablemos de tu recepcionista IA',
        },
      ],
    },
    why: {
      eyebrow: 'Diferenciales',
      title: 'Por qué Inefable',
      lead: 'No prometemos magia. Entregamos rapidez, atención y resultados que se pueden medir.',
      items: [
        { n: '01', title: 'Rapidez', description: 'Lanzamos en semanas, no en meses. Sin procesos infinitos.' },
        {
          n: '02',
          title: 'Atención directa',
          description: 'Hablas con quien construye tu proyecto, no con un account manager.',
        },
        {
          n: '03',
          title: 'Resultados medibles',
          description: 'Cada decisión se basa en datos, no en suposiciones.',
        },
      ],
    },
    process: {
      eyebrow: 'Cómo trabajamos',
      title: 'Un proceso claro, sin sorpresas',
      tracks: [
        {
          label: 'Desarrollo Web',
          steps: [
            { n: '01', title: 'Descubrimiento', description: 'Entendemos tu negocio y objetivos.' },
            { n: '02', title: 'Diseño & desarrollo', description: 'Construimos tu sitio a medida.' },
            { n: '03', title: 'Lanzamiento', description: 'Publicamos, todo probado.' },
            { n: '04', title: 'Soporte', description: 'Ajustes y mejoras post-lanzamiento.' },
          ],
        },
        {
          label: 'Gestión de Ads',
          steps: [
            { n: '01', title: 'Auditoría', description: 'Revisamos tus cuentas y objetivos.' },
            { n: '02', title: 'Estrategia', description: 'Definimos el enfoque y el presupuesto.' },
            {
              n: '03',
              title: 'Lanzamiento & optimización',
              description: 'Activamos campañas y ajustamos en vivo.',
            },
            { n: '04', title: 'Reporte mensual', description: 'Resultados claros.' },
          ],
        },
      ],
    },
    logosLabel: 'Marcas con las que trabajamos',
    pricing: {
      eyebrow: 'Tarifas',
      title: 'Precios claros, sin letra pequeña',
      plans: [
        {
          key: 'web',
          name: 'Desarrollo Web',
          desc: 'Sitio a medida, listo para producción.',
          originalPrice: '600€',
          price: '300€',
          period: 'pago único',
          badge: 'Oferta clientes fundadores',
          features: [
            'Sitio en React + Vite + Tailwind',
            'Hasta 3 rondas de correcciones',
            'Deploy en Vercel',
            'Mobile-first y SEO técnico',
          ],
          cta: 'Empezar mi web',
        },
        {
          key: 'ads',
          name: 'Gestión de Ads',
          desc: 'Gestión activa de tus campañas.',
          price: '150€',
          period: '/mes',
          badge: 'Más elegido',
          features: ['Meta Ads + Google Ads', 'Reporte semanal', 'Optimización continua', 'Sin permanencia'],
          cta: 'Empezar con ads',
        },
        {
          key: 'ai',
          name: 'Recepcionista IA',
          desc: 'Tu recepcionista, siempre disponible.',
          originalPrice: '500€',
          price: '300€',
          period: 'pago único',
          note: '+ 75€/mes de mantenimiento · Menos del 10% del costo de un recepcionista humano',
          badge: 'Ahorra vs. contratar',
          features: [
            'Configuración del agente',
            'Disponible 24/7',
            'Agenda citas automáticamente',
            'Mantenimiento incluido',
          ],
          cta: 'Activar mi recepcionista',
        },
      ],
      quote: {
        title: '¿Necesitas algo distinto?',
        desc: 'Proyectos a medida, combinaciones de servicios o volúmenes mayores.',
        cta: 'Pedir cotización',
      },
    },
    catalog: {
      eyebrow: 'Catálogo completo',
      title: 'Todo lo que podemos construir para tu negocio',
      subtitle:
        'Más allá de web, ads y recepcionista IA: automatizaciones, CRM, marketing y soluciones a medida por sector. Precios orientativos — el definitivo depende de tu caso.',
      recurringLabel: 'Ingreso recurrente',
      setupLabel: 'Setup',
      monthlyLabel: '/mes',
      idealForLabel: 'Ideal para',
      ctaLabel: 'Quiero esto',
      categories: [
        {
          key: 'restauracion',
          title: 'Restauración y hostelería',
          services: [
            {
              key: 'menu-qr',
              name: 'Menú Digital QR + TPV',
              pitch: 'Elimina la carta de papel y conecta el pedido directo con tu TPV, sin errores de comanda.',
              bullets: ['Carta digital con QR en mesa', 'Conexión con TPV existente', 'Edición de precios y platos en tiempo real', 'Multiidioma para turismo'],
              setup: '400€ – 800€',
              monthly: '40€ – 80€',
              recurring: true,
              idealFor: 'Restaurantes, bares y cafeterías con TPV',
            },
            {
              key: 'kds',
              name: 'Pedidos a Cocina (KDS)',
              pitch: 'Los pedidos llegan directos a cocina en pantalla, sin comandas perdidas ni gritos de sala a cocina.',
              bullets: ['Pantalla de cocina en tiempo real', 'Prioriza por tiempo de espera', 'Integrado con el menú QR y el TPV', 'Reduce errores de comanda'],
              setup: '500€ – 900€',
              monthly: '50€ – 90€',
              recurring: true,
              idealFor: 'Restaurantes con volumen medio-alto de comandas',
            },
            {
              key: 'reservas-wsp',
              name: 'Reservas por WhatsApp',
              pitch: 'Tu cliente reserva mesa escribiendo por WhatsApp, sin llamadas que interrumpen el servicio.',
              bullets: ['Agente IA que gestiona la reserva', 'Confirma y recuerda por WhatsApp', 'Sincronizado con tu calendario/turnos', 'Reduce el "no-show"'],
              setup: '350€ – 600€',
              monthly: '50€ – 90€',
              recurring: true,
              idealFor: 'Restaurantes con reserva previa',
            },
            {
              key: 'delivery',
              name: 'Delivery Propio sin Comisiones',
              pitch: 'Vende delivery desde tu propio canal y deja de regalar el 25-30% de margen a los agregadores.',
              bullets: ['Pedido directo por web o WhatsApp', 'Sin comisión por pedido', 'Notificaciones de estado al cliente', 'Panel de pedidos para el local'],
              setup: '600€ – 1.000€',
              monthly: '60€ – 100€',
              recurring: true,
              idealFor: 'Restaurantes que ya usan Glovo/Uber Eats y quieren margen',
            },
            {
              key: 'fidelizacion',
              name: 'Fidelización y Recompra',
              pitch: 'Convierte clientes de una vez en clientes recurrentes con puntos, cupones y recordatorios automáticos.',
              bullets: ['Programa de puntos o sellos digital', 'Cupones automáticos por WhatsApp/email', 'Segmentación de clientes frecuentes', 'Reporte de recompra'],
              setup: '300€ – 600€',
              monthly: '40€ – 80€',
              recurring: true,
              idealFor: 'Negocios con clientela recurrente (restaurantes, clínicas, retail)',
            },
          ],
        },
        {
          key: 'ia',
          title: 'Agentes de IA y automatización',
          services: [
            {
              key: 'chatbot-web',
              name: 'Chatbot Web IA',
              pitch: 'Atiende visitas a tu web 24/7, responde preguntas y capta el lead antes de que se vaya a la competencia.',
              bullets: ['Widget de chat en tu web', 'Responde FAQs y cualifica leads', 'Deriva a WhatsApp o agenda', 'Entrenado con tu información de negocio'],
              setup: '300€ – 600€',
              monthly: '60€ – 120€',
              recurring: true,
              idealFor: 'Cualquier negocio con web y tráfico de visitas',
            },
            {
              key: 'wsp-agente',
              name: 'WhatsApp Business API + Agente IA',
              pitch: 'Tu WhatsApp de negocio responde solo, agenda, cobra y escala a un humano solo cuando hace falta.',
              bullets: ['Alta de WhatsApp Business API', 'Agente IA con memoria de conversación', 'Automatiza agenda, FAQs y seguimiento', 'Traspaso a humano cuando lo pide el cliente'],
              setup: '600€ – 1.100€',
              monthly: '100€ – 180€',
              recurring: true,
              idealFor: 'Negocios con alto volumen de WhatsApp (clínicas, inmobiliarias, comercios)',
            },
            {
              key: 'recepcionista-voz',
              name: 'Recepcionista de Voz IA',
              pitch: 'Contesta el teléfono como una persona, agenda citas y no se toma vacaciones ni baja por enfermedad.',
              bullets: ['Atiende llamadas 24/7', 'Agenda citas en tu calendario', 'Responde preguntas frecuentes', 'Menos del 10% del coste de un recepcionista humano'],
              setup: '600€ – 900€',
              monthly: '90€ – 150€',
              recurring: true,
              idealFor: 'Clínicas, dentistas, despachos, negocios con centralita',
            },
            {
              key: 'sdr',
              name: 'Agente SDR / Ventas IA',
              pitch: 'Cualifica y da seguimiento a cada lead que entra, en minutos, antes de que lo haga tu competencia.',
              bullets: ['Responde y cualifica leads entrantes', 'Seguimiento automático multi-touch', 'Agenda reuniones/demos directo en tu calendario', 'Integrado con tu CRM'],
              setup: '900€ – 1.500€',
              monthly: '150€ – 300€',
              recurring: true,
              idealFor: 'Inmobiliarias, legal, B2B con ciclo de venta activo',
            },
            {
              key: 'soporte-ia',
              name: 'Agente de Soporte al Cliente IA',
              pitch: 'Resuelve las dudas repetitivas de tus clientes al instante y libera a tu equipo para lo que de verdad importa.',
              bullets: ['Responde tickets/mensajes frecuentes', 'Consulta pedidos, citas o estado de cuenta', 'Escala casos complejos a tu equipo', 'Disponible en web y WhatsApp'],
              setup: '700€ – 1.200€',
              monthly: '120€ – 220€',
              recurring: true,
              idealFor: 'Negocios con volumen de consultas post-venta',
            },
            {
              key: 'copiloto',
              name: 'Copiloto Interno de Equipo',
              pitch: 'Un asistente IA entrenado con los datos y procesos de tu empresa, para que tu equipo trabaje más rápido.',
              bullets: ['Entrenado con tus documentos/procesos internos', 'Responde preguntas de equipo al instante', 'Automatiza tareas repetitivas internas', 'Acceso controlado por permisos'],
              setup: '1.200€ – 2.500€',
              monthly: '200€ – 400€',
              recurring: true,
              idealFor: 'Empresas con equipo interno (10+ personas) y procesos repetitivos',
            },
            {
              key: 'automatizaciones',
              name: 'Automatizaciones a Medida (Make/n8n)',
              pitch: 'Conecta tus herramientas para que dejen de generar trabajo manual repetitivo.',
              bullets: ['Automatización de flujos entre apps (Make/n8n)', 'Conecta CRM, hojas de cálculo, email, WhatsApp', 'Alertas y reportes automáticos', 'Documentación del flujo entregada'],
              setup: 'Desde 400€ por flujo',
              recurring: false,
              idealFor: 'Cualquier negocio con procesos manuales repetitivos entre herramientas',
            },
          ],
        },
        {
          key: 'crm',
          title: 'CRM y operaciones',
          services: [
            {
              key: 'crm-implantacion',
              name: 'Implantación de CRM',
              pitch: 'Deja de perder leads en WhatsApp y notas sueltas: todo tu pipeline en un solo lugar.',
              bullets: ['Configuración de CRM (HubSpot, Pipedrive u otro)', 'Migración de datos existentes', 'Formación al equipo', 'Automatizaciones básicas de entrada'],
              setup: '800€ – 2.000€',
              recurring: false,
              idealFor: 'Negocios que gestionan leads manualmente hoy',
            },
            {
              key: 'pipeline-automation',
              name: 'Automatización de Pipeline de Ventas',
              pitch: 'Que el CRM avise, mueva y recuerde por ti — nada se cae por olvido.',
              bullets: ['Movimiento automático de etapas', 'Recordatorios y tareas automáticas', 'Alertas de leads fríos o sin seguimiento', 'Reportes de conversión por etapa'],
              setup: '500€ – 1.000€',
              monthly: '80€ – 150€',
              recurring: true,
              idealFor: 'Equipos de venta con CRM ya implantado',
            },
            {
              key: 'dashboard',
              name: 'Panel Interno a Medida',
              pitch: 'Toda la información clave de tu negocio en una pantalla, sin exportar Excel a mano cada semana.',
              bullets: ['Dashboard a medida con tus datos', 'Métricas de ventas, ads, operación', 'Acceso por roles', 'Actualización automática'],
              setup: '1.000€ – 2.500€',
              monthly: '100€ – 200€',
              recurring: true,
              idealFor: 'Negocios con varias fuentes de datos (ventas, ads, reservas)',
            },
            {
              key: 'portal-cliente',
              name: 'Portal de Cliente',
              pitch: 'Tus clientes consultan su estado, documentos o citas solos, sin llamarte a ti para preguntar.',
              bullets: ['Área privada para cada cliente', 'Consulta de estado, documentos o citas', 'Notificaciones automáticas', 'Login seguro'],
              setup: '1.200€ – 3.000€',
              monthly: '100€ – 250€',
              recurring: true,
              idealFor: 'Legal, clínicas, inmobiliarias con seguimiento de expedientes',
            },
          ],
        },
        {
          key: 'web',
          title: 'Web y presencia digital',
          services: [
            {
              key: 'ecommerce',
              name: 'E-commerce a Medida',
              pitch: 'Vende online sin depender de una plantilla genérica ni de comisiones por venta.',
              bullets: ['Tienda a medida (React + pasarela de pago)', 'Gestión de inventario y pedidos', 'Checkout optimizado para conversión', 'SEO técnico incluido'],
              setup: '900€ – 2.500€',
              monthly: '60€ – 150€',
              recurring: true,
              idealFor: 'Negocios con producto físico o catálogo para vender online',
            },
            {
              key: 'booking',
              name: 'Sistema de Reservas Online',
              pitch: 'Que agenden solos desde tu web, 24/7, sin llamadas ni idas y vueltas por WhatsApp.',
              bullets: ['Calendario de disponibilidad en tu web', 'Confirmación y recordatorio automático', 'Sincronizado con Google Calendar', 'Pago o depósito opcional al reservar'],
              setup: '500€ – 1.200€',
              monthly: '50€ – 100€',
              recurring: true,
              idealFor: 'Clínicas, salones, servicios con cita previa',
            },
            {
              key: 'funnel-ads',
              name: 'Landing/Funnel para Ads',
              pitch: 'Una página hecha para convertir el clic de tu campaña en lead, no una web genérica que lo pierde.',
              bullets: ['Landing enfocada en una sola acción', 'Copy y estructura orientados a conversión', 'Integrada con tu campaña de ads', 'Test A/B de versión opcional'],
              setup: '400€ – 900€',
              recurring: false,
              idealFor: 'Negocios que ya invierten en Meta/Google Ads',
            },
            {
              key: 'seo-local',
              name: 'SEO Local',
              pitch: 'Aparece cuando alguien busca tu servicio en tu ciudad, sin pagar por cada clic.',
              bullets: ['Optimización de Google Business Profile', 'SEO on-page de tu web', 'Gestión de reseñas y citas locales', 'Reporte mensual de posiciones'],
              setup: '200€',
              monthly: '150€ – 350€',
              recurring: true,
              idealFor: 'Negocios locales que dependen de búsquedas cercanas',
            },
            {
              key: 'web-multiidioma',
              name: 'Web Multiidioma',
              pitch: 'Vende en varios países desde una sola web, sin duplicar el trabajo de mantenimiento.',
              bullets: ['Web en 2-4 idiomas', 'Contenido adaptado por mercado (ES/US/LATAM)', 'SEO por idioma', 'Selector de idioma automático por ubicación'],
              setup: '600€ – 1.500€',
              recurring: false,
              idealFor: 'Negocios que venden en España, EE.UU. y LATAM a la vez',
            },
          ],
        },
        {
          key: 'marketing',
          title: 'Marketing más allá de ads',
          services: [
            {
              key: 'funnel-completo',
              name: 'Funnel de Ventas Completo',
              pitch: 'De la campaña al cierre: cada paso del camino del cliente diseñado para convertir, no solo para atraer.',
              bullets: ['Mapeo del funnel completo', 'Landing + secuencia de seguimiento', 'Automatización de nutrición de leads', 'Métricas de conversión por etapa'],
              setup: '600€ – 1.200€',
              monthly: '150€ – 300€',
              recurring: true,
              idealFor: 'Negocios que ya generan leads pero pierden conversión',
            },
            {
              key: 'email-sms',
              name: 'Email & SMS Marketing Automatizado',
              pitch: 'Que cada cliente reciba el mensaje correcto en el momento correcto, sin que nadie lo escriba a mano.',
              bullets: ['Secuencias automáticas de bienvenida/recompra', 'Segmentación de audiencia', 'Campañas puntuales y automatizadas', 'Reporte de apertura/conversión'],
              setup: '300€ – 600€',
              monthly: '90€ – 180€',
              recurring: true,
              idealFor: 'Negocios con base de clientes/lista de contactos activa',
            },
            {
              key: 'reputacion',
              name: 'Gestión de Reputación Online',
              pitch: 'Más reseñas buenas, respuestas rápidas a las malas, y una reputación que vende antes de que llames.',
              bullets: ['Solicitud automática de reseñas', 'Monitoreo de Google/Meta/TripAdvisor', 'Plantillas de respuesta a reseñas', 'Alertas de reseña negativa en tiempo real'],
              setup: '150€',
              monthly: '90€ – 180€',
              recurring: true,
              idealFor: 'Restauración, clínicas, cualquier negocio con reseñas públicas',
            },
            {
              key: 'redes-sociales',
              name: 'Gestión de Redes Sociales',
              pitch: 'Presencia activa en redes sin que te robe horas a la semana ni dependa de que tú publiques.',
              bullets: ['Calendario y creación de contenido', 'Publicación en Instagram/Facebook/TikTok', 'Diseño de piezas en línea con tu marca', 'Reporte mensual de alcance'],
              setup: '—',
              monthly: '250€ – 500€',
              recurring: true,
              idealFor: 'Negocios que quieren presencia constante sin gestionarla ellos',
            },
            {
              key: 'reporting-bi',
              name: 'Reporting e Inteligencia de Negocio',
              pitch: 'Sabe qué está funcionando de verdad, en un solo reporte, sin abrir cinco pestañas distintas.',
              bullets: ['Dashboard con ventas, ads y web unificados', 'Reporte periódico automático', 'Alertas de métricas fuera de rango', 'Recomendaciones de acción'],
              setup: '400€ – 900€',
              monthly: '80€ – 150€',
              recurring: true,
              idealFor: 'Negocios que invierten en varios canales y quieren verlo junto',
            },
          ],
        },
        {
          key: 'recurrentes',
          title: 'Recurrentes',
          services: [
            {
              key: 'mantenimiento-web',
              name: 'Mantenimiento Web',
              pitch: 'Tu web siempre actualizada, segura y sin caídas, sin que tengas que pensar en ello.',
              bullets: ['Actualizaciones de seguridad', 'Cambios de contenido menores incluidos', 'Monitoreo de caídas 24/7', 'Copias de seguridad automáticas'],
              monthly: '40€ – 90€',
              recurring: true,
              idealFor: 'Cualquier cliente con web activa',
            },
            {
              key: 'ai-care',
              name: 'AI Care — Mantenimiento de Agentes IA',
              pitch: 'Tu agente de IA mejora con el tiempo en vez de quedarse desactualizado y empezar a fallar.',
              bullets: ['Ajuste continuo de respuestas', 'Actualización de información del negocio', 'Revisión de conversaciones y errores', 'Reporte mensual de uso'],
              monthly: '60€ – 150€ por agente',
              recurring: true,
              idealFor: 'Todo cliente con un agente de IA activo (chatbot, WhatsApp, voz)',
            },
            {
              key: 'growth-retainer',
              name: 'Retainer de Growth',
              pitch: 'Un equipo pensando en crecer tu negocio cada mes, no solo ejecutando tareas sueltas.',
              bullets: ['Estrategia mensual de crecimiento', 'Prioriza y ejecuta entre web/ads/IA/CRM', 'Reunión mensual de resultados', 'Acceso directo al equipo'],
              monthly: '400€ – 1.200€',
              recurring: true,
              idealFor: 'Negocios que quieren un partner de crecimiento, no un proveedor puntual',
            },
          ],
        },
      ],
      packsEyebrow: 'Packs por vertical',
      packsTitle: 'Todo lo que necesitas, en un solo paquete',
      packsSubtitle: 'Combinamos los servicios que mejor funcionan juntos para tu sector, con un precio conjunto mejor que contratarlos por separado.',
      packs: [
        {
          key: 'pack-restaurante',
          name: 'Pack Restaurante IA',
          tagline: 'Del QR a la cocina, de la reserva a la recompra.',
          includes: ['Menú Digital QR + TPV', 'Pedidos a Cocina (KDS)', 'Reservas por WhatsApp', 'Recepcionista de Voz IA', 'Fidelización y Recompra'],
          setup: '1.800€ – 2.800€',
          monthly: '250€ – 400€',
          idealFor: 'Restaurantes y locales de hostelería con 1-3 sedes',
          cta: 'Quiero el pack Restaurante',
        },
        {
          key: 'pack-clinica',
          name: 'Pack Clínica / Dental IA',
          tagline: 'Agenda llena, reseñas cuidadas, cero llamadas perdidas.',
          includes: ['Chatbot Web IA', 'Recepcionista de Voz IA (agenda de citas)', 'CRM de pacientes', 'Gestión de Reputación Online'],
          setup: '1.500€ – 2.400€',
          monthly: '220€ – 380€',
          idealFor: 'Clínicas dentales, médicas y estéticas con agenda de citas',
          cta: 'Quiero el pack Clínica',
        },
        {
          key: 'pack-legal-inmobiliaria',
          name: 'Pack Legal / Inmobiliaria',
          tagline: 'Cada lead cualificado y seguido, ninguno se enfría.',
          includes: ['Agente SDR / Ventas IA (WhatsApp y web)', 'Implantación de CRM', 'Automatización de Pipeline de Ventas', 'Portal de Cliente', 'Landing/Funnel para Ads'],
          setup: '2.200€ – 3.800€',
          monthly: '300€ – 550€',
          idealFor: 'Despachos, gestorías e inmobiliarias con flujo constante de leads',
          cta: 'Quiero el pack Legal/Inmobiliaria',
        },
        {
          key: 'pack-pyme-digital',
          name: 'Pack PYME Presencia Digital',
          tagline: 'El primer paso antes de sumar IA: existir bien online.',
          includes: ['Web a medida', 'SEO Local', 'Gestión de Redes Sociales', 'Reporting mensual'],
          setup: '900€ – 1.600€',
          monthly: '350€ – 600€',
          idealFor: 'Negocios locales sin web decente ni presencia online activa',
          cta: 'Quiero el pack PYME',
        },
      ],
    },
    contact: {
      eyebrow: 'Contacto',
      title: 'Hablemos de tu proyecto',
      subtitle: 'Cuéntanos qué necesitas y te respondemos en menos de 24h.',
      serviceLabels: { web: 'Desarrollo Web', ads: 'Gestión de Ads', ai: 'Recepcionista IA' },
      fields: {
        name: 'Nombre',
        email: 'Email',
        phone: 'Teléfono',
        country: 'País',
        countryOther: 'Otro',
        businessType: 'Tipo de negocio',
        hasWebsite: '¿Tienes web actual?',
        yes: 'Sí',
        no: 'No',
        websiteUrl: 'URL de tu web actual',
        currentPlatform: 'Plataforma actual',
        platformNone: 'Ninguna',
        budget: 'Presupuesto mensual aprox.',
        message: 'Cuéntanos sobre tu proyecto',
      },
      error: 'Completa nombre, email y mensaje.',
      success: { title: '¡Recibido!', body: 'Gracias por escribirnos. Te contactamos muy pronto.' },
      submit: 'Enviar',
      sending: 'Enviando…',
    },
    footer: { rights: '© 2026 Inefable. Todos los derechos reservados.' },
  },

  en: {
    metaDescription:
      'Inefable — Web development and ad management agency based in Madrid, serving Spain, the US, Venezuela and El Salvador.',
    nav: {
      services: 'Services',
      why: 'Why Inefable',
      process: 'Process',
      pricing: 'Pricing',
      catalog: 'Catalog',
      contact: 'Contact',
      cta: "Let's start",
    },
    hero: {
      eyebrow: 'Websites, ads & AI automation',
      titleA: 'Sites that load fast.',
      titleB: 'Ads that convert.',
      subtitle:
        'Inefable pairs modern web development with data-driven ad management — no fluff, no endless contracts.',
      ctaWeb: 'I need a website',
      ctaAds: 'I need ad management',
      aiWidget: {
        status: 'Online',
        title: 'AI Receptionist',
        line: 'How can I help you today?',
      },
    },
    scroll: { titleA: 'From clicks', titleB: 'to customers.' },
    services: {
      eyebrow: 'Services',
      title: 'Three ways to grow',
      items: [
        {
          key: 'web',
          number: '01',
          title: 'Web Development',
          description: 'Fast, modern sites built with React + Vite and deployed on Vercel.',
          bullets: ['React + Vite + Tailwind', 'Deployed on Vercel', 'Mobile-first', 'Technical SEO'],
          cta: "Let's talk about your site",
        },
        {
          key: 'ads',
          number: '02',
          title: 'Ad Management',
          description: 'Meta and Google Ads campaigns, optimized weekly with real data.',
          bullets: ['Meta Ads', 'Google Ads', 'Weekly reporting', 'Continuous optimization'],
          cta: "Let's talk about your ads",
          hasPlatformIcons: true,
        },
        {
          key: 'ai',
          number: '03',
          title: 'AI Receptionist',
          description: 'An AI agent that answers your business calls and messages, 24/7.',
          bullets: ['Available 24/7', 'Books appointments', 'Answers FAQs', 'WhatsApp & phone'],
          cta: "Let's talk about your AI receptionist",
        },
      ],
    },
    why: {
      eyebrow: 'What sets us apart',
      title: 'Why Inefable',
      lead: 'No magic promises. Just speed, direct attention, and results you can measure.',
      items: [
        { n: '01', title: 'Speed', description: 'We launch in weeks, not months. No endless processes.' },
        {
          n: '02',
          title: 'Direct access',
          description: 'You talk to the person building your project, not an account manager.',
        },
        {
          n: '03',
          title: 'Measurable results',
          description: 'Every decision is based on data, not guesswork.',
        },
      ],
    },
    process: {
      eyebrow: 'How we work',
      title: 'A clear process, no surprises',
      tracks: [
        {
          label: 'Web Development',
          steps: [
            { n: '01', title: 'Discovery', description: 'We learn your business and goals.' },
            { n: '02', title: 'Design & development', description: 'We build your site, custom-made.' },
            { n: '03', title: 'Launch', description: 'We publish, fully tested.' },
            { n: '04', title: 'Support', description: 'Post-launch tweaks and improvements.' },
          ],
        },
        {
          label: 'Ad Management',
          steps: [
            { n: '01', title: 'Audit', description: 'We review your accounts and goals.' },
            { n: '02', title: 'Strategy', description: 'We define the approach and budget.' },
            {
              n: '03',
              title: 'Launch & optimize',
              description: 'Campaigns go live, adjusted in real time.',
            },
            { n: '04', title: 'Monthly report', description: 'Clear results.' },
          ],
        },
      ],
    },
    logosLabel: "Brands we've worked with",
    pricing: {
      eyebrow: 'Pricing',
      title: 'Clear pricing, no fine print',
      plans: [
        {
          key: 'web',
          name: 'Web Development',
          desc: 'A custom site, ready for production.',
          originalPrice: '€600',
          price: '€300',
          period: 'one-time',
          badge: 'Founding customer offer',
          features: [
            'React + Vite + Tailwind site',
            'Up to 3 rounds of revisions',
            'Deployed on Vercel',
            'Mobile-first & technical SEO',
          ],
          cta: 'Start my site',
        },
        {
          key: 'ads',
          name: 'Ad Management',
          desc: 'Active management of your campaigns.',
          price: '€150',
          period: '/mo',
          badge: 'Most picked',
          features: ['Meta Ads + Google Ads', 'Weekly reporting', 'Continuous optimization', 'No lock-in'],
          cta: 'Start with ads',
        },
        {
          key: 'ai',
          name: 'AI Receptionist',
          desc: 'Your receptionist, always on.',
          originalPrice: '€500',
          price: '€300',
          period: 'one-time',
          note: '+ €75/mo maintenance · Less than 10% of the cost of a human receptionist',
          badge: 'Save vs. hiring',
          features: [
            'Agent setup',
            'Available 24/7',
            'Books appointments automatically',
            'Maintenance included',
          ],
          cta: 'Activate my receptionist',
        },
      ],
      quote: {
        title: 'Need something different?',
        desc: 'Custom projects, combined services, or larger volumes.',
        cta: 'Get a quote',
      },
    },
    catalog: {
      eyebrow: 'Full catalog',
      title: 'Everything we can build for your business',
      subtitle:
        'Beyond web, ads and an AI receptionist: automation, CRM, marketing and industry-specific solutions. Prices are indicative — the final quote depends on your case.',
      recurringLabel: 'Recurring revenue',
      setupLabel: 'Setup',
      monthlyLabel: '/mo',
      idealForLabel: 'Best for',
      ctaLabel: 'I want this',
      categories: [
        {
          key: 'restauracion',
          title: 'Restaurants & Hospitality',
          services: [
            {
              key: 'menu-qr',
              name: 'Digital QR Menu + POS Integration',
              pitch: 'Drop the paper menu and connect orders straight to your POS, with zero ticket errors.',
              bullets: ['QR digital menu at the table', 'Connects to your existing POS', 'Real-time price/dish edits', 'Multilingual for tourism'],
              setup: '€400 – €800',
              monthly: '€40 – €80',
              recurring: true,
              idealFor: 'Restaurants, bars and cafés with a POS system',
            },
            {
              key: 'kds',
              name: 'Kitchen Display Orders (KDS)',
              pitch: 'Orders land straight in the kitchen on screen — no lost tickets, no shouting between floor and kitchen.',
              bullets: ['Real-time kitchen display screen', 'Prioritizes by wait time', 'Integrated with the QR menu and POS', 'Cuts order errors'],
              setup: '€500 – €900',
              monthly: '€50 – €90',
              recurring: true,
              idealFor: 'Restaurants with medium-high order volume',
            },
            {
              key: 'reservas-wsp',
              name: 'WhatsApp Reservations',
              pitch: 'Customers book a table by texting WhatsApp — no calls interrupting service.',
              bullets: ['AI agent handles the booking', 'Confirms and reminds via WhatsApp', 'Synced with your calendar/shifts', 'Reduces no-shows'],
              setup: '€350 – €600',
              monthly: '€50 – €90',
              recurring: true,
              idealFor: 'Restaurants that take reservations',
            },
            {
              key: 'delivery',
              name: 'Zero-Commission Direct Delivery',
              pitch: 'Sell delivery through your own channel and stop giving away 25-30% margin to aggregators.',
              bullets: ['Direct ordering via web or WhatsApp', 'No per-order commission', 'Order status notifications', 'Order management panel for staff'],
              setup: '€600 – €1,000',
              monthly: '€60 – €100',
              recurring: true,
              idealFor: 'Restaurants already on Glovo/Uber Eats who want their margin back',
            },
            {
              key: 'fidelizacion',
              name: 'Loyalty & Repeat Visits',
              pitch: 'Turn one-time customers into regulars with points, coupons and automatic reminders.',
              bullets: ['Digital points/stamp program', 'Automatic coupons via WhatsApp/email', 'Frequent-customer segmentation', 'Repeat-purchase reporting'],
              setup: '€300 – €600',
              monthly: '€40 – €80',
              recurring: true,
              idealFor: 'Businesses with repeat customers (restaurants, clinics, retail)',
            },
          ],
        },
        {
          key: 'ia',
          title: 'AI Agents & Automation',
          services: [
            {
              key: 'chatbot-web',
              name: 'AI Website Chatbot',
              pitch: 'Handles website visitors 24/7, answers questions and captures the lead before they leave for a competitor.',
              bullets: ['Chat widget on your website', 'Answers FAQs and qualifies leads', 'Hands off to WhatsApp or booking', 'Trained on your business info'],
              setup: '€300 – €600',
              monthly: '€60 – €120',
              recurring: true,
              idealFor: 'Any business with a website and visitor traffic',
            },
            {
              key: 'wsp-agente',
              name: 'WhatsApp Business API + AI Agent',
              pitch: 'Your business WhatsApp answers itself, books, charges, and only escalates to a human when it needs to.',
              bullets: ['WhatsApp Business API setup', 'AI agent with conversation memory', 'Automates booking, FAQs and follow-up', 'Hands off to a human on request'],
              setup: '€600 – €1,100',
              monthly: '€100 – €180',
              recurring: true,
              idealFor: 'High WhatsApp volume businesses (clinics, real estate, retail)',
            },
            {
              key: 'recepcionista-voz',
              name: 'AI Voice Receptionist',
              pitch: 'Answers the phone like a person, books appointments, and never takes a sick day.',
              bullets: ['Answers calls 24/7', 'Books appointments on your calendar', 'Answers frequently asked questions', 'Under 10% the cost of a human receptionist'],
              setup: '€600 – €900',
              monthly: '€90 – €150',
              recurring: true,
              idealFor: 'Clinics, dentists, law firms, businesses with a front desk line',
            },
            {
              key: 'sdr',
              name: 'AI Sales Agent (SDR)',
              pitch: 'Qualifies and follows up on every lead within minutes — before your competitor gets to it.',
              bullets: ['Responds to and qualifies inbound leads', 'Automatic multi-touch follow-up', 'Books meetings/demos straight into your calendar', 'Integrated with your CRM'],
              setup: '€900 – €1,500',
              monthly: '€150 – €300',
              recurring: true,
              idealFor: 'Real estate, legal, B2B with an active sales cycle',
            },
            {
              key: 'soporte-ia',
              name: 'AI Customer Support Agent',
              pitch: 'Resolves repetitive customer questions instantly and frees your team for what actually matters.',
              bullets: ['Handles frequent tickets/messages', 'Looks up orders, appointments or account status', 'Escalates complex cases to your team', 'Available on web and WhatsApp'],
              setup: '€700 – €1,200',
              monthly: '€120 – €220',
              recurring: true,
              idealFor: 'Businesses with high post-sale inquiry volume',
            },
            {
              key: 'copiloto',
              name: 'Internal Team Copilot',
              pitch: 'An AI assistant trained on your company’s own data and processes, so your team moves faster.',
              bullets: ['Trained on your internal docs/processes', 'Answers team questions instantly', 'Automates repetitive internal tasks', 'Permission-controlled access'],
              setup: '€1,200 – €2,500',
              monthly: '€200 – €400',
              recurring: true,
              idealFor: 'Companies with an internal team (10+) and repetitive processes',
            },
            {
              key: 'automatizaciones',
              name: 'Custom Workflow Automation (Make/n8n)',
              pitch: 'Connect your tools so they stop generating repetitive manual work.',
              bullets: ['Workflow automation between apps (Make/n8n)', 'Connects CRM, spreadsheets, email, WhatsApp', 'Automatic alerts and reports', 'Flow documentation delivered'],
              setup: 'From €400 per flow',
              recurring: false,
              idealFor: 'Any business with repetitive manual processes between tools',
            },
          ],
        },
        {
          key: 'crm',
          title: 'CRM & Operations',
          services: [
            {
              key: 'crm-implantacion',
              name: 'CRM Setup & Implementation',
              pitch: 'Stop losing leads in WhatsApp threads and loose notes — your whole pipeline in one place.',
              bullets: ['CRM setup (HubSpot, Pipedrive or other)', 'Migration of existing data', 'Team training', 'Basic intake automations'],
              setup: '€800 – €2,000',
              recurring: false,
              idealFor: 'Businesses currently managing leads manually',
            },
            {
              key: 'pipeline-automation',
              name: 'Sales Pipeline Automation',
              pitch: 'Let the CRM notify, move and remind for you — nothing falls through the cracks.',
              bullets: ['Automatic stage movement', 'Automatic reminders and tasks', 'Alerts for cold or unattended leads', 'Conversion reporting by stage'],
              setup: '€500 – €1,000',
              monthly: '€80 – €150',
              recurring: true,
              idealFor: 'Sales teams with a CRM already in place',
            },
            {
              key: 'dashboard',
              name: 'Custom Internal Dashboard',
              pitch: 'All your key business data on one screen, no more exporting spreadsheets by hand every week.',
              bullets: ['Custom dashboard built on your data', 'Sales, ads and operations metrics', 'Role-based access', 'Automatic data refresh'],
              setup: '€1,000 – €2,500',
              monthly: '€100 – €200',
              recurring: true,
              idealFor: 'Businesses with multiple data sources (sales, ads, bookings)',
            },
            {
              key: 'portal-cliente',
              name: 'Client Portal',
              pitch: 'Your clients check their status, documents or appointments themselves, without calling you to ask.',
              bullets: ['Private area for each client', 'Status, document or appointment lookup', 'Automatic notifications', 'Secure login'],
              setup: '€1,200 – €3,000',
              monthly: '€100 – €250',
              recurring: true,
              idealFor: 'Legal, clinics, real estate with case/file tracking',
            },
          ],
        },
        {
          key: 'web',
          title: 'Web & Digital Presence',
          services: [
            {
              key: 'ecommerce',
              name: 'Custom E-commerce',
              pitch: 'Sell online without relying on a generic template or per-sale commissions.',
              bullets: ['Custom store (React + payment gateway)', 'Inventory and order management', 'Checkout optimized for conversion', 'Technical SEO included'],
              setup: '€900 – €2,500',
              monthly: '€60 – €150',
              recurring: true,
              idealFor: 'Businesses with physical products or a catalog to sell online',
            },
            {
              key: 'booking',
              name: 'Online Booking System',
              pitch: 'Let customers book themselves from your site, 24/7, with no calls or WhatsApp back-and-forth.',
              bullets: ['Availability calendar on your site', 'Automatic confirmation and reminder', 'Synced with Google Calendar', 'Optional payment/deposit at booking'],
              setup: '€500 – €1,200',
              monthly: '€50 – €100',
              recurring: true,
              idealFor: 'Clinics, salons, appointment-based services',
            },
            {
              key: 'funnel-ads',
              name: 'Ad Funnel Landing Page',
              pitch: 'A page built to convert your campaign click into a lead, not a generic site that loses it.',
              bullets: ['Single-action-focused landing page', 'Copy and structure built for conversion', 'Integrated with your ad campaign', 'Optional A/B version testing'],
              setup: '€400 – €900',
              recurring: false,
              idealFor: 'Businesses already running Meta/Google Ads',
            },
            {
              key: 'seo-local',
              name: 'Local SEO',
              pitch: 'Show up when someone searches for your service in your city, without paying per click.',
              bullets: ['Google Business Profile optimization', 'On-page SEO for your site', 'Review and local citation management', 'Monthly ranking report'],
              setup: '€200',
              monthly: '€150 – €350',
              recurring: true,
              idealFor: 'Local businesses that depend on nearby search',
            },
            {
              key: 'web-multiidioma',
              name: 'Multilingual Website',
              pitch: 'Sell across countries from a single site, without duplicating your maintenance work.',
              bullets: ['Site in 2-4 languages', 'Content adapted per market (ES/US/LatAm)', 'SEO per language', 'Automatic language selector by location'],
              setup: '€600 – €1,500',
              recurring: false,
              idealFor: 'Businesses selling in Spain, the US and LatAm at once',
            },
          ],
        },
        {
          key: 'marketing',
          title: 'Marketing Beyond Ads',
          services: [
            {
              key: 'funnel-completo',
              name: 'Full Sales Funnel',
              pitch: 'From campaign to close: every step of the customer journey designed to convert, not just attract.',
              bullets: ['Full funnel mapping', 'Landing page + follow-up sequence', 'Lead nurturing automation', 'Conversion metrics by stage'],
              setup: '€600 – €1,200',
              monthly: '€150 – €300',
              recurring: true,
              idealFor: 'Businesses already generating leads but losing conversion',
            },
            {
              key: 'email-sms',
              name: 'Email & SMS Marketing Automation',
              pitch: 'Every customer gets the right message at the right time, without anyone writing it by hand.',
              bullets: ['Automatic welcome/win-back sequences', 'Audience segmentation', 'One-off and automated campaigns', 'Open/conversion reporting'],
              setup: '€300 – €600',
              monthly: '€90 – €180',
              recurring: true,
              idealFor: 'Businesses with an active customer/contact list',
            },
            {
              key: 'reputacion',
              name: 'Online Reputation Management',
              pitch: 'More good reviews, fast replies to the bad ones, and a reputation that sells before you even pick up the phone.',
              bullets: ['Automatic review requests', 'Google/Meta/TripAdvisor monitoring', 'Review response templates', 'Real-time negative review alerts'],
              setup: '€150',
              monthly: '€90 – €180',
              recurring: true,
              idealFor: 'Restaurants, clinics, any business with public reviews',
            },
            {
              key: 'redes-sociales',
              name: 'Social Media Management',
              pitch: 'An active social presence that doesn’t eat your week or depend on you remembering to post.',
              bullets: ['Content calendar and creation', 'Posting on Instagram/Facebook/TikTok', 'On-brand design of assets', 'Monthly reach report'],
              setup: '—',
              monthly: '€250 – €500',
              recurring: true,
              idealFor: 'Businesses that want a constant presence without managing it',
            },
            {
              key: 'reporting-bi',
              name: 'Reporting & Business Intelligence',
              pitch: 'Know what’s actually working, in one report, without opening five different tabs.',
              bullets: ['Unified dashboard for sales, ads and web', 'Automatic periodic reporting', 'Out-of-range metric alerts', 'Actionable recommendations'],
              setup: '€400 – €900',
              monthly: '€80 – €150',
              recurring: true,
              idealFor: 'Businesses investing across multiple channels who want it in one view',
            },
          ],
        },
        {
          key: 'recurrentes',
          title: 'Recurring Services',
          services: [
            {
              key: 'mantenimiento-web',
              name: 'Website Maintenance',
              pitch: 'Your site stays updated, secure and online, without you having to think about it.',
              bullets: ['Security updates', 'Minor content changes included', '24/7 uptime monitoring', 'Automatic backups'],
              monthly: '€40 – €90',
              recurring: true,
              idealFor: 'Any client with an active website',
            },
            {
              key: 'ai-care',
              name: 'AI Care — Agent Maintenance',
              pitch: 'Your AI agent gets better over time instead of going stale and starting to fail.',
              bullets: ['Continuous response tuning', 'Business info updates', 'Conversation and error review', 'Monthly usage report'],
              monthly: '€60 – €150 per agent',
              recurring: true,
              idealFor: 'Any client with an active AI agent (chatbot, WhatsApp, voice)',
            },
            {
              key: 'growth-retainer',
              name: 'Growth Retainer',
              pitch: 'A team thinking about growing your business every month, not just executing one-off tasks.',
              bullets: ['Monthly growth strategy', 'Prioritizes and executes across web/ads/AI/CRM', 'Monthly results review', 'Direct access to the team'],
              monthly: '€400 – €1,200',
              recurring: true,
              idealFor: 'Businesses that want a growth partner, not a one-off vendor',
            },
          ],
        },
      ],
      packsEyebrow: 'Packs by industry',
      packsTitle: 'Everything you need, in one package',
      packsSubtitle: 'We bundle the services that work best together for your industry, at a better combined price than buying them separately.',
      packs: [
        {
          key: 'pack-restaurante',
          name: 'AI Restaurant Pack',
          tagline: 'From QR to kitchen, from reservation to repeat visit.',
          includes: ['Digital QR Menu + POS Integration', 'Kitchen Display Orders (KDS)', 'WhatsApp Reservations', 'AI Voice Receptionist', 'Loyalty & Repeat Visits'],
          setup: '€1,800 – €2,800',
          monthly: '€250 – €400',
          idealFor: 'Restaurants and hospitality venues with 1-3 locations',
          cta: 'I want the Restaurant Pack',
        },
        {
          key: 'pack-clinica',
          name: 'AI Clinic / Dental Pack',
          tagline: 'A full calendar, a cared-for reputation, zero missed calls.',
          includes: ['AI Website Chatbot', 'AI Voice Receptionist (appointment booking)', 'Patient CRM', 'Online Reputation Management'],
          setup: '€1,500 – €2,400',
          monthly: '€220 – €380',
          idealFor: 'Dental, medical and aesthetic clinics with appointment scheduling',
          cta: 'I want the Clinic Pack',
        },
        {
          key: 'pack-legal-inmobiliaria',
          name: 'Legal / Real Estate Pack',
          tagline: 'Every lead qualified and followed up — none go cold.',
          includes: ['AI Sales Agent / SDR (WhatsApp and web)', 'CRM Setup & Implementation', 'Sales Pipeline Automation', 'Client Portal', 'Ad Funnel Landing Page'],
          setup: '€2,200 – €3,800',
          monthly: '€300 – €550',
          idealFor: 'Law firms, agencies and real estate brokers with a steady lead flow',
          cta: 'I want the Legal/Real Estate Pack',
        },
        {
          key: 'pack-pyme-digital',
          name: 'SMB Digital Presence Pack',
          tagline: 'The first step before adding AI: showing up well online.',
          includes: ['Custom website', 'Local SEO', 'Social Media Management', 'Monthly reporting'],
          setup: '€900 – €1,600',
          monthly: '€350 – €600',
          idealFor: 'Local businesses with no decent website or active online presence',
          cta: 'I want the SMB Pack',
        },
      ],
    },
    contact: {
      eyebrow: 'Contact',
      title: "Let's talk about your project",
      subtitle: "Tell us what you need and we'll get back to you within 24h.",
      serviceLabels: { web: 'Web Development', ads: 'Ad Management', ai: 'AI Receptionist' },
      fields: {
        name: 'Name',
        email: 'Email',
        phone: 'Phone',
        country: 'Country',
        countryOther: 'Other',
        businessType: 'Business type',
        hasWebsite: 'Do you have a website?',
        yes: 'Yes',
        no: 'No',
        websiteUrl: 'Current website URL',
        currentPlatform: 'Current platform',
        platformNone: 'None',
        budget: 'Approx. monthly budget',
        message: 'Tell us about your project',
      },
      error: 'Please fill in name, email and message.',
      success: { title: 'Got it!', body: "Thanks for reaching out. We'll be in touch shortly." },
      submit: 'Send',
      sending: 'Sending…',
    },
    footer: { rights: '© 2026 Inefable. All rights reserved.' },
  },
}
