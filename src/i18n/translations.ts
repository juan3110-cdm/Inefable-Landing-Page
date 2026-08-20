export type Lang = 'es' | 'en'

export interface ServiceItem {
  key: 'web' | 'ads' | 'chatbot' | 'ai' | 'crm' | 'marketing' | 'restaurant'
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
  key: 'web' | 'ads' | 'chatbot' | 'ai' | 'crm' | 'marketing' | 'restaurant'
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

export interface SectorItem {
  key: string
  label: string
  problem: string
  bullets: string[]
  highlights: string[]
}

export interface Testimonial {
  quote: string
  name: string
  role: string
  initials: string
}

export interface FaqItem {
  q: string
  a: string
}

export interface LiveDemoTab {
  key: 'call' | 'lead' | 'campaign'
  icon: string
  label: string
  sublabel: string
}

export interface LiveDemoBubble {
  speaker: string
  text: string
}

export interface LiveDemoColumn {
  label: string
  status: string
}

export interface Translations {
  pageTitle: string
  metaDescription: string
  nav: {
    services: string
    why: string
    process: string
    sectors: string
    pricing: string
    faq: string
    contact: string
    cta: string
  }
  hero: {
    eyebrow: string
    titleA: string
    titleB: string
    subtitle: string
    ctaPrimary: string
    ctaSecondary: string
  }
  scroll: { titleA: string; titleB: string }
  live: {
    eyebrow: string
    titleA: string
    titleB: string
    subtitle: string
    idleHint: string
    tabs: LiveDemoTab[]
    call: {
      liveLabel: string
      bubbles: LiveDemoBubble[]
      calendarLabel: string
      bookedDay: string
      bookedConfirm: string
      missedCalls: string
      waiting: string
    }
    lead: {
      intro: string
      leadName: string
      columns: LiveDemoColumn[]
    }
    campaign: {
      cpaLabel: string
      leadsLabel: string
      spendLabel: string
      cpaBefore: string
      cpaAfter: string
      leadsBefore: string
      leadsAfter: string
      spendBefore: string
      spendAfter: string
      chartCaption: string
    }
  }
  growth: {
    titleA: string
    titleB: string
    flowItems: string[]
    flowTarget: string
    stats: { value: number; suffix?: string; label: string; desc: string }[]
  }
  services: { eyebrow: string; title: string; items: ServiceItem[] }
  sectors: {
    eyebrow: string
    titleA: string
    titleB: string
    subtitle: string
    problemLabel: string
    solutionLabel: string
    items: SectorItem[]
  }
  testimonials: {
    eyebrow: string
    titleA: string
    titleB: string
    subtitle: string
    items: Testimonial[]
  }
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
  contact: {
    eyebrow: string
    title: string
    subtitle: string
    serviceLabels: {
      web: string
      ads: string
      chatbot: string
      ai: string
      crm: string
      marketing: string
      restaurant: string
    }
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
    serverError: string
    success: { title: string; body: string }
    submit: string
    sending: string
  }
  stack: {
    eyebrow: string
    titleA: string
    titleB: string
    subtitle: string
    categories: Record<import('../config/stack').StackCategoryKey, string>
  }
  faq: {
    eyebrow: string
    titleA: string
    titleB: string
    subtitle: string
    ctaText: string
    ctaLink: string
    items: FaqItem[]
  }
  announcement: {
    enabled: boolean
    text: string
    ctaLabel: string
    closeLabel: string
  }
  footer: { rights: string }
  chat: {
    title: string
    status: string
    placeholder: string
    send: string
    starters: string[]
    openLabel: string
    closeLabel: string
    errorMessage: string
  }
}

export const translations: Record<Lang, Translations> = {
  es: {
    pageTitle: 'Inefable | Agencia Digital · Madrid',
    metaDescription:
      'Inefable — Agencia de desarrollo web, publicidad y automatización con IA en Madrid, para clientes en cualquier país.',
    nav: {
      services: 'Servicios',
      why: 'Por qué Inefable',
      process: 'Proceso',
      sectors: 'Sectores',
      pricing: 'Tarifas',
      faq: 'FAQ',
      contact: 'Contacto',
      cta: 'Empecemos',
    },
    hero: {
      eyebrow: 'Webs, ads y automatización con IA',
      titleA: 'Tu negocio,',
      titleB: 'automatizado de principio a fin.',
      subtitle:
        'Inefable combina desarrollo web, publicidad y automatización con IA — sin vueltas, sin contratos eternos.',
      ctaPrimary: 'Hablemos de tu negocio',
      ctaSecondary: 'Ver todos los servicios',
    },
    scroll: { titleA: 'De clics', titleB: 'a clientes.' },
    live: {
      eyebrow: 'Pruébalo',
      titleA: 'Toca y verás',
      titleB: 'nada es una maqueta.',
      subtitle: 'Tres piezas reales del sistema. Pulsa un botón y mira cómo responde.',
      idleHint: 'Pulsa un botón arriba para ver el sistema en acción.',
      tabs: [
        { key: 'call', icon: '☎', label: 'Llamada entrante', sublabel: 'Recepcionista IA por voz' },
        { key: 'lead', icon: '◎', label: 'Nuevo lead', sublabel: 'CRM y automatización' },
        { key: 'campaign', icon: '↗', label: 'Campaña', sublabel: 'Gestión de Meta / Google Ads' },
      ],
      call: {
        liveLabel: 'Llamada en curso',
        bubbles: [
          { speaker: 'IA', text: 'Buenas tardes, gracias por llamar. ¿En qué puedo ayudarte?' },
          { speaker: 'Cliente', text: 'Hola, quisiera pedir una cita para el jueves.' },
          { speaker: 'IA', text: 'Claro. Tengo un hueco el jueves a las 11:30, ¿te viene bien?' },
        ],
        calendarLabel: 'Calendario',
        bookedDay: 'Jueves · 11:30',
        bookedConfirm: 'Cita agendada ✓',
        missedCalls: '0 llamadas perdidas hoy',
        waiting: 'Esperando a que la IA confirme el hueco…',
      },
      lead: {
        intro: 'Lead entrante desde el formulario de la web → se mueve solo por el pipeline.',
        leadName: 'María G.',
        columns: [
          { label: 'Nuevo', status: 'Formulario recibido' },
          { label: 'Contactado', status: 'WhatsApp enviado ✓' },
          { label: 'Agendado', status: 'Cita confirmada ✓' },
        ],
      },
      campaign: {
        cpaLabel: 'CPA',
        leadsLabel: 'Leads / semana',
        spendLabel: 'Gasto optimizado',
        cpaBefore: '24,50€',
        cpaAfter: '9,20€',
        leadsBefore: '19',
        leadsAfter: '38',
        spendBefore: '0€',
        spendAfter: '620€',
        chartCaption: 'CPA por semana, últimas 8 semanas gestionadas',
      },
    },
    growth: {
      titleA: 'Web, ads e IA trabajando juntos por tu negocio',
      titleB: 'Automatizar cuesta menos de lo que crees',
      flowItems: ['Web', 'Ads', 'Chatbot', 'Voz'],
      flowTarget: 'Tu negocio',
      stats: [
        {
          value: 97,
          suffix: '%',
          label: 'menos que un recepcionista',
          desc: 'Recepcionista IA: 49,79€/mes frente a ~2.246€/mes de coste medio de un recepcionista en España.',
        },
        {
          value: 98,
          suffix: '%',
          label: 'menos que atención al cliente',
          desc: 'Chatbot IA: 24,79€/mes frente a ~2.100€/mes de coste medio de un puesto de atención al cliente en España.',
        },
        {
          value: 96,
          suffix: '%',
          label: 'menos que un community manager',
          desc: 'Marketing Automatizado: 89,79€/mes frente a ~2.600€/mes de coste medio de un community manager en España.',
        },
      ],
    },
    services: {
      eyebrow: 'Servicios',
      title: 'Siete formas de crecer',
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
          key: 'chatbot',
          number: '03',
          title: 'Chatbot IA',
          description: 'Un chat de texto en tu web que responde y capta leads — para cuando el contacto no necesita ser una llamada.',
          bullets: [
            'Chat de texto, no llamadas',
            'Responde en tu web 24/7',
            'Deriva a tu equipo cuando hace falta',
            'Pruébalo abajo a la derecha',
          ],
          cta: 'Hablemos de tu chatbot',
        },
        {
          key: 'ai',
          number: '04',
          title: 'Recepcionista IA',
          description: 'Un agente de IA que contesta y dirige las llamadas de tu negocio, 24/7.',
          bullets: [
            'Contesta llamadas de tu negocio',
            'Disponible 24/7',
            'Agenda citas automáticamente',
            'Deriva a tu equipo si hace falta',
          ],
          cta: 'Hablemos de tu recepcionista IA',
        },
        {
          key: 'crm',
          number: '05',
          title: 'Automatización de CRM',
          description:
            'Todo tu pipeline de ventas organizado y automático, sin leads perdidos en WhatsApp o notas sueltas.',
          bullets: ['Implantación de CRM', 'Automatización de pipeline', 'Recordatorios automáticos', 'Reportes de conversión'],
          cta: 'Hablemos de tu CRM',
        },
        {
          key: 'marketing',
          number: '06',
          title: 'Marketing Automatizado',
          description:
            'Email, SMS y reputación funcionando solos, para que cada cliente reciba el mensaje correcto a tiempo.',
          bullets: ['Email & SMS automatizado', 'Gestión de reputación online', 'Funnels de conversión', 'Reporte mensual'],
          cta: 'Hablemos de tu marketing',
        },
        {
          key: 'restaurant',
          number: '07',
          title: 'Automatización para Restaurantes',
          description:
            'Menú QR conectado al TPV, pedidos directos a cocina y reservas por WhatsApp, todo en un mismo sistema.',
          bullets: ['Menú QR + conexión a TPV', 'Pedidos directos a cocina', 'Reservas por WhatsApp', 'Delivery propio sin comisiones'],
          cta: 'Hablemos de tu restaurante',
        },
      ],
    },
    sectors: {
      eyebrow: 'Ejemplos por sector',
      titleA: 'Lo que cambia',
      titleB: 'según tu tipo de negocio',
      subtitle: 'Cada sector tiene sus propios cuellos de botella. Así los resolvemos.',
      problemLabel: 'El problema típico',
      solutionLabel: 'Qué implementamos',
      items: [
        {
          key: 'dental',
          label: 'Clínicas Dentales',
          problem: 'Recepción saturada de llamadas mientras atiende pacientes en silla, y citas que se pierden por no contestar a tiempo.',
          bullets: ['Recepcionista IA que contesta y agenda 24/7', 'Recordatorios automáticos por WhatsApp', 'Filtro de urgencias vs. citas de rutina'],
          highlights: ['Disponibilidad 24/7', 'Menos llamadas perdidas', 'Más citas agendadas'],
        },
        {
          key: 'estetica',
          label: 'Estética',
          problem: 'Alto volumen de consultas por Instagram y WhatsApp que nadie responde fuera de horario.',
          bullets: ['Chatbot que responde precios y disponibilidad al instante', 'Agenda de citas sin intervención humana', 'Seguimiento automático a quienes no reservan'],
          highlights: ['Respuesta inmediata a consultas', 'Agenda sin intervención manual', 'Mejor conversión a cita'],
        },
        {
          key: 'legal',
          label: 'Legal',
          problem: 'Consultas iniciales que consumen horas del abogado antes de saber si el caso vale la pena.',
          bullets: ['Filtro automático de consultas por tipo de caso', 'Recepcionista IA que agenda primeras consultas', 'Resumen del caso listo antes de la llamada'],
          highlights: ['Captación de leads 24/7', 'Consultas mejor filtradas', 'Más reuniones calificadas'],
        },
        {
          key: 'restaurantes',
          label: 'Restaurantes',
          problem: 'Reservas por teléfono que se pierden en horas pico y reseñas negativas que nadie gestiona a tiempo.',
          bullets: ['Reservas automáticas por WhatsApp y voz', 'Confirmación y recordatorio de mesas', 'Solicitud automática de reseñas post-visita'],
          highlights: ['Reservas 24/7', 'Menos llamadas perdidas en hora pico', 'Más reseñas positivas'],
        },
        {
          key: 'inmobiliarias',
          label: 'Inmobiliarias',
          problem: 'Leads que llegan a toda hora y se enfrían porque nadie responde en los primeros minutos.',
          bullets: ['Chatbot que califica interés y presupuesto al instante', 'Agenda automática de visitas a propiedades', 'Seguimiento programado a leads fríos'],
          highlights: ['Respuesta inmediata a cada lead', 'Menos leads que se enfrían', 'Más visitas agendadas'],
        },
        {
          key: 'ecommerce',
          label: 'E-commerce',
          problem: 'Preguntas repetitivas sobre pedidos y envíos que saturan soporte y retrasan ventas.',
          bullets: ['Chatbot que resuelve dudas de pedidos al instante', 'Recuperación automática de carritos abandonados', 'Integración con tu plataforma de pagos'],
          highlights: ['Soporte 24/7 automatizado', 'Menos tickets manuales', 'Recupera carritos abandonados'],
        },
      ],
    },
    testimonials: {
      eyebrow: 'Clientes',
      titleA: 'Lo que dicen',
      titleB: 'quienes ya trabajan con nosotros',
      subtitle: 'Resultados reales, en sus propias palabras.',
      items: [
        {
          quote: 'Las campañas de Meta y Google las llevan ellos; nosotros solo vemos el reporte semanal y los resultados.',
          name: 'Vital Club',
          role: 'Cliente',
          initials: 'VC',
        },
        {
          quote: 'La web quedó lista rápido y sin vueltas. Cada ronda de cambios se aplicó tal como la pedimos.',
          name: 'Proyecto Martí',
          role: 'Cliente',
          initials: 'PM',
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
          price: '299.79€',
          period: 'pago único',
          badge: 'Oferta primeros 20 clientes fundadores',
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
          originalPrice: '150€',
          price: '89.79€',
          period: '/mes',
          badge: 'Precio de lanzamiento',
          features: ['Meta Ads + Google Ads', 'Reporte semanal', 'Optimización continua', 'Sin permanencia'],
          cta: 'Empezar con ads',
        },
        {
          key: 'chatbot',
          name: 'Chatbot IA',
          desc: 'Chat de texto en tu web: responde preguntas y capta leads sin necesidad de una llamada.',
          originalPrice: '300€',
          price: '124.79€',
          period: 'pago único',
          note: 'Pruébalo ahora mismo: es el chat de abajo a la derecha · + 24.79€/mes de mantenimiento',
          badge: 'Oferta primeros 20 clientes fundadores',
          features: [
            'Chat embebido en tu propia web',
            'Entrenado con el contenido de tu negocio',
            'Capta y cualifica leads automáticamente',
            'Reporte mensual de conversaciones',
          ],
          cta: 'Activar mi chatbot',
        },
        {
          key: 'ai',
          name: 'Recepcionista IA',
          desc: 'Contesta y dirige las llamadas de tu negocio, agenda citas sin que nadie tenga que descolgar.',
          originalPrice: '500€',
          price: '199.79€',
          period: 'pago único',
          note: '+ 49.79€/mes de mantenimiento · Menos del 3% del costo de un recepcionista humano',
          features: [
            'Contesta llamadas de tu negocio',
            'Disponible 24/7',
            'Agenda citas automáticamente',
            'Mantenimiento incluido',
          ],
          cta: 'Activar mi recepcionista',
        },
        {
          key: 'crm',
          name: 'CRM y Automatización',
          desc: 'Tu pipeline de ventas, organizado y automático.',
          originalPrice: '900€',
          price: '249.79€',
          period: 'pago único',
          note: '+ 49.79€/mes de automatización y soporte',
          features: [
            'Implantación de CRM',
            'Migración de datos existentes',
            'Automatización de pipeline',
            'Formación al equipo',
          ],
          cta: 'Activar mi CRM',
        },
        {
          key: 'marketing',
          name: 'Marketing Automatizado',
          desc: 'Email, SMS y reputación, funcionando solos.',
          originalPrice: '200€',
          price: '89.79€',
          period: '/mes',
          features: ['Email & SMS automatizado', 'Gestión de reputación online', 'Funnel de conversión', 'Reporte mensual'],
          cta: 'Activar mi marketing',
        },
        {
          key: 'restaurant',
          name: 'Automatización para Restaurantes',
          desc: 'Menú QR, TPV, cocina y reservas en un solo sistema.',
          price: 'Desde 269.79€',
          period: 'pago único',
          note: 'El precio final depende del tamaño y alcance del proyecto · + mantenimiento mensual',
          features: [
            'Menú QR + conexión a TPV',
            'Pedidos a cocina (KDS)',
            'Reservas por WhatsApp',
            'Delivery propio sin comisiones',
          ],
          cta: 'Pedir cotización',
        },
      ],
      quote: {
        title: '¿Necesitas algo distinto?',
        desc: 'Proyectos a medida, combinaciones de servicios o volúmenes mayores.',
        cta: 'Pedir cotización',
      },
    },
    contact: {
      eyebrow: 'Contacto',
      title: 'Hablemos de tu proyecto',
      subtitle: 'Cuéntanos qué necesitas y te respondemos en menos de 24h.',
      serviceLabels: {
        web: 'Desarrollo Web',
        ads: 'Gestión de Ads',
        chatbot: 'Chatbot IA',
        ai: 'Recepcionista IA',
        crm: 'CRM',
        marketing: 'Marketing',
        restaurant: 'Restaurantes',
      },
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
      serverError: 'Algo falló por nuestra parte — inténtalo de nuevo o escríbenos directamente a hola@inefable.agency.',
      success: { title: '¡Recibido!', body: 'Gracias por escribirnos. Te contactamos muy pronto.' },
      submit: 'Enviar',
      sending: 'Enviando…',
    },
    stack: {
      eyebrow: 'El stack',
      titleA: 'Construimos con las mismas herramientas',
      titleB: 'que usan las empresas grandes',
      subtitle: 'Tecnología probada, no experimentos.',
      categories: {
        ai: 'IA',
        automation: 'Automatización',
        frontend: 'Frontend',
        backend: 'Backend',
        deploy: 'Deploy',
        voice: 'Voz',
        ads: 'Ads',
        payments: 'Pagos',
      },
    },
    faq: {
      eyebrow: 'Preguntas frecuentes',
      titleA: 'Lo que nos preguntan',
      titleB: 'antes de empezar',
      subtitle: 'Respuestas directas, sin rodeos.',
      ctaText: '¿Otra pregunta? Escríbenos.',
      ctaLink: 'Ir a contacto',
      items: [
        { q: '¿Cuánto tarda en estar funcionando?', a: 'Depende del servicio: un chatbot o recepcionista IA puede estar activo en 1-2 semanas. Un sitio web, en 2-3 semanas según el alcance.' },
        { q: '¿Necesito tener conocimientos técnicos?', a: 'No. Nosotros configuramos, integramos y probamos todo. Tú solo apruebas el resultado antes de que salga en vivo.' },
        { q: '¿Qué pasa si la IA no sabe responder algo?', a: 'Se define un protocolo claro: deriva la conversación a un humano o toma el dato de contacto para que alguien de tu equipo siga después.' },
        { q: '¿Se integra con las herramientas que ya uso?', a: 'En la mayoría de los casos sí — calendarios, CRMs, WhatsApp Business y plataformas de pago son integraciones habituales.' },
        { q: '¿Cómo se cobra: pago único o mensualidad?', a: 'Depende del servicio. El desarrollo web es pago único con rondas de corrección incluidas; ads e IA llevan una cuota mensual de gestión o mantenimiento.' },
        { q: '¿Puedo empezar con un solo servicio y ampliar después?', a: 'Sí, de hecho es lo más común. Muchos clientes empiezan con un recepcionista IA o su web, y añaden ads o automatización más adelante.' },
        { q: '¿Los datos de mis clientes están seguros?', a: 'Sí. Trabajamos con proveedores que cumplen estándares de seguridad reconocidos y no compartimos tus datos con terceros.' },
        { q: '¿Qué pasa si quiero cancelar?', a: 'Los servicios mensuales no tienen permanencia forzosa. Puedes cancelar el mantenimiento o la gestión cuando lo necesites.' },
      ],
    },
    announcement: {
      enabled: true,
      text: 'Oferta clientes fundadores — primeros 20, plazas limitadas',
      ctaLabel: 'Ver oferta',
      closeLabel: 'Cerrar aviso',
    },
    footer: { rights: '© 2026 Inefable. Todos los derechos reservados.' },
    chat: {
      title: 'Asistente Inefable',
      status: 'En línea',
      placeholder: 'Escribe tu mensaje...',
      send: 'Enviar',
      starters: ['¿Qué servicios ofrecéis?', '¿Cómo es el proceso?', 'Quiero una propuesta'],
      openLabel: 'Abrir chat',
      closeLabel: 'Cerrar chat',
      errorMessage: 'Ha habido un error. Inténtalo de nuevo o escríbenos a hola@inefable.agency.',
    },
  },

  en: {
    pageTitle: 'Inefable | Digital Agency · Madrid',
    metaDescription:
      'Inefable — Web development, ad management and AI automation agency based in Madrid, serving clients in any country.',
    nav: {
      services: 'Services',
      why: 'Why Inefable',
      process: 'Process',
      sectors: 'Sectors',
      pricing: 'Pricing',
      faq: 'FAQ',
      contact: 'Contact',
      cta: "Let's start",
    },
    hero: {
      eyebrow: 'Websites, ads & AI automation',
      titleA: 'Your business,',
      titleB: 'automated end to end.',
      subtitle:
        'Inefable pairs web development, ad management and AI automation — no fluff, no endless contracts.',
      ctaPrimary: "Let's talk about your business",
      ctaSecondary: 'See all services',
    },
    scroll: { titleA: 'From clicks', titleB: 'to customers.' },
    live: {
      eyebrow: 'Try it',
      titleA: 'Touch and see —',
      titleB: 'nothing here is a mockup.',
      subtitle: 'Three real pieces of the system. Press a button and watch it respond.',
      idleHint: 'Press a button above to see the system in action.',
      tabs: [
        { key: 'call', icon: '☎', label: 'Incoming call', sublabel: 'AI voice receptionist' },
        { key: 'lead', icon: '◎', label: 'New lead', sublabel: 'CRM and automation' },
        { key: 'campaign', icon: '↗', label: 'Campaign', sublabel: 'Meta / Google Ads management' },
      ],
      call: {
        liveLabel: 'Call in progress',
        bubbles: [
          { speaker: 'AI', text: 'Good afternoon, thanks for calling. How can I help you?' },
          { speaker: 'Client', text: "Hi, I'd like to book an appointment for Thursday." },
          { speaker: 'AI', text: 'Sure. I have an opening Thursday at 11:30, does that work?' },
        ],
        calendarLabel: 'Calendar',
        bookedDay: 'Thursday · 11:30',
        bookedConfirm: 'Appointment booked ✓',
        missedCalls: '0 missed calls today',
        waiting: 'Waiting for the AI to confirm the slot…',
      },
      lead: {
        intro: 'Lead coming in from the website form → moves through the pipeline on its own.',
        leadName: 'Maria G.',
        columns: [
          { label: 'New', status: 'Form received' },
          { label: 'Contacted', status: 'WhatsApp sent ✓' },
          { label: 'Booked', status: 'Appointment confirmed ✓' },
        ],
      },
      campaign: {
        cpaLabel: 'CPA',
        leadsLabel: 'Leads / week',
        spendLabel: 'Optimized spend',
        cpaBefore: '€24.50',
        cpaAfter: '€9.20',
        leadsBefore: '19',
        leadsAfter: '38',
        spendBefore: '€0',
        spendAfter: '€620',
        chartCaption: 'CPA per week, last 8 managed weeks',
      },
    },
    growth: {
      titleA: 'Web, ads and AI working together for your business',
      titleB: 'Automating costs less than you think',
      flowItems: ['Web', 'Ads', 'Chatbot', 'Voice'],
      flowTarget: 'Your business',
      stats: [
        {
          value: 97,
          suffix: '%',
          label: 'less than a receptionist',
          desc: 'AI Receptionist: €49.79/mo vs. ~€2,246/mo average cost of a receptionist in Spain.',
        },
        {
          value: 98,
          suffix: '%',
          label: 'less than customer support',
          desc: 'AI Chatbot: €24.79/mo vs. ~€2,100/mo average cost of a customer support role in Spain.',
        },
        {
          value: 96,
          suffix: '%',
          label: 'less than a community manager',
          desc: 'Marketing Automation: €89.79/mo vs. ~€2,600/mo average cost of a community manager in Spain.',
        },
      ],
    },
    services: {
      eyebrow: 'Services',
      title: 'Seven ways to grow',
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
          key: 'chatbot',
          number: '03',
          title: 'AI Chatbot',
          description: 'A text chat on your website that answers questions and captures leads — for when contact doesn\'t need to be a phone call.',
          bullets: [
            'Text chat, not calls',
            'Answers on your site 24/7',
            'Hands off to your team when needed',
            'Try it in the bottom-right corner',
          ],
          cta: "Let's talk about your chatbot",
        },
        {
          key: 'ai',
          number: '04',
          title: 'AI Receptionist',
          description: 'An AI agent that answers and directs your business calls, 24/7.',
          bullets: [
            'Answers your business calls',
            'Available 24/7',
            'Books appointments automatically',
            'Hands off to your team when needed',
          ],
          cta: "Let's talk about your AI receptionist",
        },
        {
          key: 'crm',
          number: '05',
          title: 'CRM Automation',
          description:
            'Your whole sales pipeline organized and automatic, no leads lost in WhatsApp threads or loose notes.',
          bullets: ['CRM implementation', 'Pipeline automation', 'Automatic reminders', 'Conversion reporting'],
          cta: "Let's talk about your CRM",
        },
        {
          key: 'marketing',
          number: '06',
          title: 'Marketing Automation',
          description:
            'Email, SMS and reputation running on their own, so every customer gets the right message on time.',
          bullets: ['Automated email & SMS', 'Online reputation management', 'Conversion funnels', 'Monthly reporting'],
          cta: "Let's talk about your marketing",
        },
        {
          key: 'restaurant',
          number: '07',
          title: 'Restaurant Automation',
          description:
            'QR menu connected to your POS, orders straight to the kitchen, and WhatsApp reservations — all in one system.',
          bullets: ['QR menu + POS integration', 'Direct-to-kitchen orders', 'WhatsApp reservations', 'Zero-commission delivery'],
          cta: "Let's talk about your restaurant",
        },
      ],
    },
    sectors: {
      eyebrow: 'Examples by sector',
      titleA: 'What changes',
      titleB: 'depending on your type of business',
      subtitle: 'Every sector has its own bottlenecks. Here\'s how we solve them.',
      problemLabel: 'The typical problem',
      solutionLabel: "What we implement",
      items: [
        {
          key: 'dental',
          label: 'Dental Clinics',
          problem: 'Front desk swamped with calls while attending chairside patients, and appointments lost because no one answered in time.',
          bullets: ['AI receptionist that answers and books 24/7', 'Automatic WhatsApp reminders', 'Filters urgent cases from routine appointments'],
          highlights: ['24/7 availability', 'Fewer missed calls', 'More appointments booked'],
        },
        {
          key: 'estetica',
          label: 'Aesthetics',
          problem: 'High volume of Instagram and WhatsApp inquiries that no one answers outside business hours.',
          bullets: ['Chatbot that answers pricing and availability instantly', 'Appointment booking with no human involved', 'Automatic follow-up with people who don\'t book'],
          highlights: ['Instant response to inquiries', 'Booking with no manual work', 'Better inquiry-to-booking rate'],
        },
        {
          key: 'legal',
          label: 'Legal',
          problem: 'Initial consultations that eat hours of a lawyer\'s time before knowing if the case is even worth taking.',
          bullets: ['Automatic filtering of inquiries by case type', 'AI receptionist that books first consultations', 'Case summary ready before the call'],
          highlights: ['24/7 lead capture', 'Better-filtered inquiries', 'More qualified meetings'],
        },
        {
          key: 'restaurantes',
          label: 'Restaurants',
          problem: 'Phone reservations lost during peak hours, and negative reviews nobody manages in time.',
          bullets: ['Automatic reservations via WhatsApp and voice', 'Table confirmation and reminders', 'Automatic review requests after the visit'],
          highlights: ['24/7 reservations', 'Fewer missed calls at peak hours', 'More positive reviews'],
        },
        {
          key: 'inmobiliarias',
          label: 'Real Estate',
          problem: 'Leads arriving around the clock that go cold because no one responds in the first few minutes.',
          bullets: ['Chatbot that qualifies interest and budget instantly', 'Automatic booking of property viewings', 'Scheduled follow-up with cold leads'],
          highlights: ['Instant response to every lead', 'Fewer leads going cold', 'More viewings booked'],
        },
        {
          key: 'ecommerce',
          label: 'E-commerce',
          problem: 'Repetitive order and shipping questions that overwhelm support and slow down sales.',
          bullets: ['Chatbot that resolves order questions instantly', 'Automatic abandoned-cart recovery', 'Integration with your payment platform'],
          highlights: ['24/7 automated support', 'Fewer manual tickets', 'Recovers abandoned carts'],
        },
      ],
    },
    testimonials: {
      eyebrow: 'Clients',
      titleA: 'What the people',
      titleB: 'already working with us say',
      subtitle: 'Real results, in their own words.',
      items: [
        {
          quote: 'They run the Meta and Google campaigns; we just see the weekly report and the results.',
          name: 'Vital Club',
          role: 'Client',
          initials: 'VC',
        },
        {
          quote: 'The site was ready fast, no back-and-forth. Every round of changes was applied exactly as we asked.',
          name: 'Proyecto Martí',
          role: 'Client',
          initials: 'PM',
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
          price: '€299.79',
          period: 'one-time',
          badge: 'First 20 founding customers',
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
          originalPrice: '€150',
          price: '€89.79',
          period: '/mo',
          badge: 'Launch pricing',
          features: ['Meta Ads + Google Ads', 'Weekly reporting', 'Continuous optimization', 'No lock-in'],
          cta: 'Start with ads',
        },
        {
          key: 'chatbot',
          name: 'AI Chatbot',
          desc: "Text chat on your website: answers questions and captures leads without a single phone call.",
          originalPrice: '€300',
          price: '€124.79',
          period: 'one-time',
          note: "Try it right now: it's the chat in the bottom-right corner · + €24.79/mo maintenance",
          badge: 'First 20 founding customers',
          features: [
            'Chat embedded on your own website',
            'Trained on your business content',
            'Captures and qualifies leads automatically',
            'Monthly conversation report',
          ],
          cta: 'Activate my chatbot',
        },
        {
          key: 'ai',
          name: 'AI Receptionist',
          desc: "Answers and directs your business calls, books appointments so no one has to pick up the phone.",
          originalPrice: '€500',
          price: '€199.79',
          period: 'one-time',
          note: '+ €49.79/mo maintenance · Less than 3% of the cost of a human receptionist',
          features: [
            'Answers your business calls',
            'Available 24/7',
            'Books appointments automatically',
            'Maintenance included',
          ],
          cta: 'Activate my receptionist',
        },
        {
          key: 'crm',
          name: 'CRM & Automation',
          desc: 'Your sales pipeline, organized and automatic.',
          originalPrice: '€900',
          price: '€249.79',
          period: 'one-time',
          note: '+ €49.79/mo automation and support',
          features: [
            'CRM implementation',
            'Migration of existing data',
            'Pipeline automation',
            'Team training',
          ],
          cta: 'Activate my CRM',
        },
        {
          key: 'marketing',
          name: 'Marketing Automation',
          desc: 'Email, SMS and reputation, running on their own.',
          originalPrice: '€200',
          price: '€89.79',
          period: '/mo',
          features: ['Automated email & SMS', 'Online reputation management', 'Conversion funnel', 'Monthly reporting'],
          cta: 'Activate my marketing',
        },
        {
          key: 'restaurant',
          name: 'Restaurant Automation',
          desc: 'QR menu, POS, kitchen and reservations in one system.',
          price: 'From €269.79',
          period: 'one-time',
          note: 'Final price depends on the size and scope of the project · plus monthly maintenance',
          features: [
            'QR menu + POS integration',
            'Kitchen display orders (KDS)',
            'WhatsApp reservations',
            'Zero-commission delivery',
          ],
          cta: 'Get a quote',
        },
      ],
      quote: {
        title: 'Need something different?',
        desc: 'Custom projects, combined services, or larger volumes.',
        cta: 'Get a quote',
      },
    },
    contact: {
      eyebrow: 'Contact',
      title: "Let's talk about your project",
      subtitle: "Tell us what you need and we'll get back to you within 24h.",
      serviceLabels: {
        web: 'Web Development',
        ads: 'Ad Management',
        chatbot: 'AI Chatbot',
        ai: 'AI Receptionist',
        crm: 'CRM',
        marketing: 'Marketing',
        restaurant: 'Restaurants',
      },
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
      serverError: 'Something went wrong on our end — please try again, or email us directly at hola@inefable.agency.',
      success: { title: 'Got it!', body: "Thanks for reaching out. We'll be in touch shortly." },
      submit: 'Send',
      sending: 'Sending…',
    },
    stack: {
      eyebrow: 'The stack',
      titleA: 'We build with the same tools',
      titleB: 'that large companies use',
      subtitle: 'Proven technology, not experiments.',
      categories: {
        ai: 'AI',
        automation: 'Automation',
        frontend: 'Frontend',
        backend: 'Backend',
        deploy: 'Deploy',
        voice: 'Voice',
        ads: 'Ads',
        payments: 'Payments',
      },
    },
    faq: {
      eyebrow: 'Frequently asked questions',
      titleA: 'What people ask us',
      titleB: 'before getting started',
      subtitle: 'Direct answers, no runaround.',
      ctaText: 'Another question? Reach out.',
      ctaLink: 'Go to contact',
      items: [
        { q: 'How long until it\'s up and running?', a: 'Depends on the service: a chatbot or AI receptionist can be live in 1-2 weeks. A website, in 2-3 weeks depending on scope.' },
        { q: 'Do I need technical knowledge?', a: 'No. We configure, integrate and test everything. You just approve the result before it goes live.' },
        { q: "What happens if the AI can't answer something?", a: 'A clear protocol is set up: it hands the conversation off to a human, or takes contact details so someone on your team can follow up.' },
        { q: 'Does it integrate with the tools I already use?', a: 'In most cases, yes — calendars, CRMs, WhatsApp Business and payment platforms are common integrations.' },
        { q: 'How does billing work: one-time or monthly?', a: 'Depends on the service. Web development is one-time with revision rounds included; ads and AI carry a monthly management or maintenance fee.' },
        { q: 'Can I start with one service and add more later?', a: "Yes, it's actually the most common path. Many clients start with an AI receptionist or their website, and add ads or automation later." },
        { q: "Is my customers' data safe?", a: "Yes. We work with providers that meet recognized security standards and don't share your data with third parties." },
        { q: 'What if I want to cancel?', a: "Monthly services have no forced commitment. You can cancel maintenance or management whenever you need to." },
      ],
    },
    announcement: {
      enabled: true,
      text: 'Founding customer offer — first 20, limited spots',
      ctaLabel: 'See offer',
      closeLabel: 'Close announcement',
    },
    footer: { rights: '© 2026 Inefable. All rights reserved.' },
    chat: {
      title: 'Inefable Assistant',
      status: 'Online',
      placeholder: 'Type your message...',
      send: 'Send',
      starters: ['What services do you offer?', 'How does the process work?', 'I want a proposal'],
      openLabel: 'Open chat',
      closeLabel: 'Close chat',
      errorMessage: 'Something went wrong. Please try again or email us at hola@inefable.agency.',
    },
  },
}
