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
