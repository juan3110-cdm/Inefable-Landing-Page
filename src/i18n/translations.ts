export type Lang = 'es' | 'en'

export interface ServiceItem {
  key: 'web' | 'ads' | 'ai' | 'crm' | 'marketing' | 'restaurant'
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

export interface Translations {
  metaDescription: string
  nav: {
    services: string
    why: string
    process: string
    pricing: string
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
    ctaCrm: string
    ctaMarketing: string
    ctaRestaurant: string
    aiWidget: { status: string; title: string; line: string }
  }
  scroll: { titleA: string; titleB: string }
  growth: {
    titleA: string
    titleB: string
    flowItems: [string, string, string]
    flowTarget: string
    stats: { value: number; suffix?: string; label: string; desc: string }[]
  }
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
    success: { title: string; body: string }
    submit: string
    sending: string
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
    metaDescription:
      'Inefable — Agencia de desarrollo web, publicidad y automatización con IA en Madrid, para clientes en cualquier país.',
    nav: {
      services: 'Servicios',
      why: 'Por qué Inefable',
      process: 'Proceso',
      pricing: 'Tarifas',
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
      ctaCrm: 'Quiero mi CRM',
      ctaMarketing: 'Quiero automatizar mi marketing',
      ctaRestaurant: 'Quiero automatizar mi restaurante',
      aiWidget: {
        status: 'En línea',
        title: 'Recepcionista IA',
        line: '¿En qué puedo ayudarte hoy?',
      },
    },
    scroll: { titleA: 'De clics', titleB: 'a clientes.' },
    growth: {
      titleA: 'Web, ads e IA trabajando juntos por tu negocio',
      titleB: 'Compromisos que sí cumplimos',
      flowItems: ['Web', 'Ads', 'IA'],
      flowTarget: 'Tu negocio',
      stats: [
        { value: 24, suffix: 'h', label: 'tiempo de respuesta', desc: 'Te contactamos en menos de 24 horas laborables.' },
        { value: 3, label: 'rondas de ajuste', desc: 'Incluidas en cada proyecto, sin coste extra.' },
        { value: 100, suffix: '%', label: 'remoto, cualquier país', desc: 'Trabajamos con clientes de cualquier parte del mundo, sin excepciones.' },
      ],
    },
    services: {
      eyebrow: 'Servicios',
      title: 'Seis formas de crecer',
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
        {
          key: 'crm',
          number: '04',
          title: 'Automatización de CRM',
          description:
            'Todo tu pipeline de ventas organizado y automático, sin leads perdidos en WhatsApp o notas sueltas.',
          bullets: ['Implantación de CRM', 'Automatización de pipeline', 'Recordatorios automáticos', 'Reportes de conversión'],
          cta: 'Hablemos de tu CRM',
        },
        {
          key: 'marketing',
          number: '05',
          title: 'Marketing Automatizado',
          description:
            'Email, SMS y reputación funcionando solos, para que cada cliente reciba el mensaje correcto a tiempo.',
          bullets: ['Email & SMS automatizado', 'Gestión de reputación online', 'Funnels de conversión', 'Reporte mensual'],
          cta: 'Hablemos de tu marketing',
        },
        {
          key: 'restaurant',
          number: '06',
          title: 'Automatización para Restaurantes',
          description:
            'Menú QR conectado al TPV, pedidos directos a cocina y reservas por WhatsApp, todo en un mismo sistema.',
          bullets: ['Menú QR + conexión a TPV', 'Pedidos directos a cocina', 'Reservas por WhatsApp', 'Delivery propio sin comisiones'],
          cta: 'Hablemos de tu restaurante',
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
          badge: 'Oferta clientes fundadores',
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
          note: '+ 49.79€/mes de mantenimiento · Menos del 10% del costo de un recepcionista humano',
          badge: 'Oferta clientes fundadores',
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
          badge: 'Oferta clientes fundadores',
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
          badge: 'Oferta clientes fundadores',
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
      success: { title: '¡Recibido!', body: 'Gracias por escribirnos. Te contactamos muy pronto.' },
      submit: 'Enviar',
      sending: 'Enviando…',
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
    metaDescription:
      'Inefable — Web development, ad management and AI automation agency based in Madrid, serving clients in any country.',
    nav: {
      services: 'Services',
      why: 'Why Inefable',
      process: 'Process',
      pricing: 'Pricing',
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
      ctaCrm: 'I need a CRM',
      ctaMarketing: 'I need marketing automation',
      ctaRestaurant: 'I need restaurant automation',
      aiWidget: {
        status: 'Online',
        title: 'AI Receptionist',
        line: 'How can I help you today?',
      },
    },
    scroll: { titleA: 'From clicks', titleB: 'to customers.' },
    growth: {
      titleA: 'Web, ads and AI working together for your business',
      titleB: 'Commitments we actually keep',
      flowItems: ['Web', 'Ads', 'AI'],
      flowTarget: 'Your business',
      stats: [
        { value: 24, suffix: 'h', label: 'response time', desc: "We'll get back to you within 24 business hours." },
        { value: 3, label: 'revision rounds', desc: 'Included in every project, at no extra cost.' },
        { value: 100, suffix: '%', label: 'remote, any country', desc: 'We work with clients anywhere in the world, no exceptions.' },
      ],
    },
    services: {
      eyebrow: 'Services',
      title: 'Six ways to grow',
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
        {
          key: 'crm',
          number: '04',
          title: 'CRM Automation',
          description:
            'Your whole sales pipeline organized and automatic, no leads lost in WhatsApp threads or loose notes.',
          bullets: ['CRM implementation', 'Pipeline automation', 'Automatic reminders', 'Conversion reporting'],
          cta: "Let's talk about your CRM",
        },
        {
          key: 'marketing',
          number: '05',
          title: 'Marketing Automation',
          description:
            'Email, SMS and reputation running on their own, so every customer gets the right message on time.',
          bullets: ['Automated email & SMS', 'Online reputation management', 'Conversion funnels', 'Monthly reporting'],
          cta: "Let's talk about your marketing",
        },
        {
          key: 'restaurant',
          number: '06',
          title: 'Restaurant Automation',
          description:
            'QR menu connected to your POS, orders straight to the kitchen, and WhatsApp reservations — all in one system.',
          bullets: ['QR menu + POS integration', 'Direct-to-kitchen orders', 'WhatsApp reservations', 'Zero-commission delivery'],
          cta: "Let's talk about your restaurant",
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
          badge: 'Founding customer offer',
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
          note: '+ €49.79/mo maintenance · Less than 10% of the cost of a human receptionist',
          badge: 'Founding customer offer',
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
          badge: 'Founding customer offer',
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
          badge: 'Founding customer offer',
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
      success: { title: 'Got it!', body: "Thanks for reaching out. We'll be in touch shortly." },
      submit: 'Send',
      sending: 'Sending…',
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
