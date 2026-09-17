import type { Lang } from '../i18n/translations'
import type { ServiceKey } from './serviceSlugs'

export type { ServiceKey } from './serviceSlugs'

interface Feature {
  title: string
  desc: string
}

interface ProcessStep {
  title: string
  desc: string
}

interface Faq {
  q: string
  a: string
}

export interface ServicePageContent {
  metaTitle: string
  metaDescription: string
  eyebrow: string
  h1: string
  heroSubtitle: string
  problem: string
  featuresTitle: string
  features: Feature[]
  processTitle: string
  process: ProcessStep[]
  faqTitle: string
  faq: Faq[]
  relatedTitle: string
  related: ServiceKey[]
}

type ContentByLang = Record<Lang, Record<ServiceKey, ServicePageContent>>

export const servicePages: ContentByLang = {
  es: {
    web: {
      metaTitle: 'Diseño y Desarrollo Web en Madrid | Inefable',
      metaDescription:
        'Sitios web rápidos y a medida con React + Vite, SEO técnico incluido y deploy en Vercel. Desde 5-7 días. Agencia en Madrid.',
      eyebrow: 'Desarrollo Web',
      h1: 'Diseño y desarrollo web en Madrid, sin vueltas',
      heroSubtitle:
        'Sitios rápidos, modernos y construidos para convertir — sin plantillas genéricas ni WordPress con 40 plugins.',
      problem:
        'La mayoría de webs de empresa se ven bien pero no venden: cargan lento, no tienen una llamada a la acción clara y no aparecen en Google. Si tu web actual no te trae clientes, el problema casi nunca es el diseño — es la base técnica.',
      featuresTitle: 'Qué incluye',
      features: [
        { title: 'React + Vite + Tailwind', desc: 'El mismo stack que usan startups tecnológicas: carga rápida, sin hinchazón de plugins ni actualizaciones que rompen el sitio.' },
        { title: 'SEO técnico desde el día uno', desc: 'Metadatos, sitemap, datos estructurados y velocidad de carga optimizada — no como un añadido de última hora.' },
        { title: 'Mobile-first real', desc: 'Más del 60% del tráfico llega desde el móvil; diseñamos primero para esa pantalla, no la ajustamos después.' },
        { title: 'Hasta 3 rondas de correcciones', desc: 'Ajustamos el diseño contigo hasta que quede como lo necesitas, sin cargos ocultos por cambios razonables.' },
        { title: 'Deploy en Vercel', desc: 'Hosting rápido, HTTPS automático y despliegues sin downtime.' },
      ],
      processTitle: 'Cómo trabajamos',
      process: [
        { title: 'Descubrimiento', desc: 'Entendemos tu negocio y objetivos.' },
        { title: 'Diseño & desarrollo', desc: 'Construimos tu sitio a medida.' },
        { title: 'Lanzamiento', desc: 'Publicamos, todo probado.' },
        { title: 'Soporte', desc: 'Ajustes y mejoras post-lanzamiento.' },
      ],
      faqTitle: 'Preguntas frecuentes',
      faq: [
        { q: '¿Cuánto tarda en estar lista mi web?', a: 'Entre 5 y 7 días desde que aprobamos el alcance, dependiendo del número de páginas y funcionalidades.' },
        { q: '¿Necesito escribir yo los textos?', a: 'No es obligatorio — podemos partir de tus textos actuales o ayudarte a estructurarlos; el copywriting completo se cotiza aparte si lo necesitas.' },
        { q: '¿Qué pasa si ya tengo una web?', a: 'La migramos: mantenemos lo que funciona (dominio, contenido, SEO acumulado) y reconstruimos la base técnica.' },
      ],
      relatedTitle: 'Servicios relacionados',
      related: ['ads', 'chatbot'],
    },
    ads: {
      metaTitle: 'Gestión de Google Ads y Meta Ads en Madrid | Inefable',
      metaDescription:
        'Campañas de Google Ads y Meta Ads gestionadas y optimizadas semana a semana, con reporte claro. Desde 200€/mes, sin permanencia.',
      eyebrow: 'Gestión de Ads',
      h1: 'Gestión de Google Ads y Meta Ads en Madrid',
      heroSubtitle: 'Campañas gestionadas semana a semana con datos reales — no un informe genérico al mes.',
      problem:
        'La mayoría de cuentas de ads gastan dinero en clics que no convierten porque nadie las revisa después de configurarlas. Sin optimización constante, el coste por lead sube y el retorno baja.',
      featuresTitle: 'Qué incluye',
      features: [
        { title: 'Meta Ads + Google Ads', desc: 'Una sola gestión para ambas plataformas, con presupuesto repartido según lo que realmente convierte.' },
        { title: 'Optimización semanal', desc: 'Revisamos pujas, audiencias y creatividades cada semana, no una vez al trimestre.' },
        { title: 'Reporte semanal claro', desc: 'Coste por lead, gasto y resultados — sin jerga que solo entiende un especialista en marketing.' },
        { title: 'Sin permanencia', desc: 'Cancela el servicio de gestión cuando quieras, sin penalización.' },
      ],
      processTitle: 'Cómo trabajamos',
      process: [
        { title: 'Auditoría', desc: 'Revisamos tus cuentas y objetivos.' },
        { title: 'Estrategia', desc: 'Definimos el enfoque y el presupuesto.' },
        { title: 'Lanzamiento & optimización', desc: 'Activamos campañas y ajustamos en vivo.' },
        { title: 'Reporte mensual', desc: 'Resultados claros.' },
      ],
      faqTitle: 'Preguntas frecuentes',
      faq: [
        { q: '¿Necesito tener ya cuentas de Meta y Google Ads?', a: 'No, las creamos si no las tienes. Si ya tienes histórico, lo aprovechamos para no empezar de cero.' },
        { q: '¿Cuál es la inversión mínima en publicidad?', a: 'Depende del sector, pero recomendamos un mínimo de 300-500€/mes en presupuesto de anuncios, aparte de la gestión.' },
        { q: '¿Qué pasa si quiero cancelar?', a: 'No hay permanencia — puedes cancelar el servicio de gestión cuando lo necesites.' },
      ],
      relatedTitle: 'Servicios relacionados',
      related: ['web', 'marketing'],
    },
    chatbot: {
      metaTitle: 'Chatbot con Inteligencia Artificial para tu Web | Inefable',
      metaDescription:
        'Chatbot IA entrenado con el contenido de tu negocio: responde preguntas y capta leads 24/7. Pruébalo en vivo. Desde 124,79€.',
      eyebrow: 'Chatbot IA',
      h1: 'Chatbot con inteligencia artificial para tu web',
      heroSubtitle:
        'Un chat de texto que responde preguntas y capta leads 24/7 — para cuando el contacto no necesita ser una llamada.',
      problem:
        'Muchos visitantes de tu web se van sin contactar porque no encuentran una respuesta rápida a su pregunta, y no todos quieren llamar. Un chatbot bien entrenado captura esa duda en el momento, antes de que se vaya a la competencia.',
      featuresTitle: 'Qué incluye',
      features: [
        { title: 'Entrenado con el contenido de tu negocio', desc: 'Responde con la información real de tus servicios, precios y horarios — no respuestas genéricas.' },
        { title: 'Disponible 24/7', desc: 'Responde también fuera de horario comercial, fines de semana incluidos.' },
        { title: 'Deriva a tu equipo cuando hace falta', desc: 'Si la consulta es compleja, pasa la conversación a una persona en vez de inventar una respuesta.' },
        { title: 'Reporte mensual de conversaciones', desc: 'Ves qué preguntan realmente tus clientes potenciales.' },
      ],
      processTitle: 'Cómo trabajamos',
      process: [
        { title: 'Configuración', desc: 'Recopilamos el contenido y las preguntas frecuentes de tu negocio.' },
        { title: 'Entrenamiento', desc: 'Configuramos el chatbot con ese contenido y probamos las respuestas.' },
        { title: 'Integración', desc: 'Lo embebemos en tu web, listo para producción.' },
        { title: 'Ajuste continuo', desc: 'Revisamos las conversaciones reales y mejoramos las respuestas.' },
      ],
      faqTitle: 'Preguntas frecuentes',
      faq: [
        { q: '¿Qué pasa si el chatbot no sabe responder algo?', a: 'Se define un protocolo claro: deriva la conversación a un humano o toma el dato de contacto para que alguien de tu equipo siga después.' },
        { q: '¿Puedo probarlo antes de contratarlo?', a: 'Sí — el chat de esta misma web es una demo en vivo del mismo sistema.' },
        { q: '¿Los datos de las conversaciones están seguros?', a: 'Sí. Trabajamos con proveedores que cumplen estándares de seguridad reconocidos y no compartimos tus datos con terceros.' },
      ],
      relatedTitle: 'Servicios relacionados',
      related: ['ai', 'crm'],
    },
    ai: {
      metaTitle: 'Recepcionista Virtual con IA para tu Negocio | Inefable',
      metaDescription:
        'Agente de voz con IA que contesta llamadas y agenda citas 24/7. 97% más barato que un recepcionista humano. Desde 199,79€.',
      eyebrow: 'Recepcionista IA',
      h1: 'Recepcionista virtual con IA para tu negocio',
      heroSubtitle: 'Un agente de voz con IA que contesta y dirige las llamadas de tu negocio, 24/7.',
      problem:
        'Cada llamada perdida es un cliente potencial que probablemente llame a la competencia. Contratar un recepcionista a tiempo completo cuesta de media unos 2.246€/mes en España — la mayoría de negocios no pueden justificar ese coste solo para no perder llamadas.',
      featuresTitle: 'Qué incluye',
      features: [
        { title: 'Contesta llamadas de tu negocio', desc: 'Con voz natural, no un menú de tonos frustrante.' },
        { title: 'Disponible 24/7', desc: 'Fuera de horario, festivos y fines de semana también contesta.' },
        { title: 'Agenda citas automáticamente', desc: 'Se conecta a tu calendario y reserva directamente.' },
        { title: 'Deriva a tu equipo si hace falta', desc: 'Las llamadas urgentes o complejas pasan a una persona real.' },
        { title: '97% más barato que un recepcionista humano', desc: '49,79€/mes frente a ~2.246€/mes de coste medio de un recepcionista en España.' },
      ],
      processTitle: 'Cómo trabajamos',
      process: [
        { title: 'Configuración', desc: 'Definimos guion, tono de voz y casos que debe derivar a tu equipo.' },
        { title: 'Conexión', desc: 'Lo conectamos a tu número, calendario y CRM si lo tienes.' },
        { title: 'Pruebas', desc: 'Hacemos llamadas de prueba antes de activarlo en producción.' },
        { title: 'Mantenimiento incluido', desc: 'Ajustamos el sistema según las llamadas reales.' },
      ],
      faqTitle: 'Preguntas frecuentes',
      faq: [
        { q: '¿Suena como un robot?', a: "No — usa voz natural con IA conversacional, no un árbol de tonos tipo 'pulse 1 para...'." },
        { q: '¿Puede agendar citas directamente?', a: 'Sí, se conecta a tu calendario y reserva sin que nadie tenga que descolgar.' },
        { q: '¿Qué pasa si una llamada es urgente?', a: 'Se define un protocolo de derivación: la IA pasa la llamada a una persona de tu equipo cuando corresponde.' },
      ],
      relatedTitle: 'Servicios relacionados',
      related: ['chatbot', 'restaurant'],
    },
    crm: {
      metaTitle: 'Automatización de CRM para Pymes en Madrid | Inefable',
      metaDescription:
        'Implantación y automatización de CRM: migración de datos, pipeline automático y formación al equipo. Desde 249,79€.',
      eyebrow: 'CRM y Automatización',
      h1: 'Automatización de CRM para pymes',
      heroSubtitle: 'Tu pipeline de ventas organizado y automático, sin leads perdidos en WhatsApp o notas sueltas.',
      problem:
        'Sin un CRM, los leads se pierden entre chats de WhatsApp, notas en el móvil y hojas de cálculo desactualizadas. Cada lead que se olvida es una venta que no se cierra.',
      featuresTitle: 'Qué incluye',
      features: [
        { title: 'Implantación de CRM', desc: 'Configuramos la herramienta según cómo vendes realmente, no una plantilla genérica.' },
        { title: 'Migración de datos existentes', desc: 'Tus contactos y oportunidades actuales pasan al nuevo sistema sin perder histórico.' },
        { title: 'Automatización de pipeline', desc: 'Recordatorios, tareas y cambios de etapa automáticos según lo que hace cada lead.' },
        { title: 'Formación al equipo', desc: 'Tu equipo aprende a usarlo de verdad, no solo a abrirlo el primer día.' },
      ],
      processTitle: 'Cómo trabajamos',
      process: [
        { title: 'Diagnóstico', desc: 'Revisamos cómo gestionas hoy tus leads y ventas.' },
        { title: 'Configuración', desc: 'Montamos el CRM y las automatizaciones que necesitas.' },
        { title: 'Migración', desc: 'Pasamos tus datos actuales sin perder histórico.' },
        { title: 'Formación y soporte', desc: 'Formamos a tu equipo y ajustamos según el uso real.' },
      ],
      faqTitle: 'Preguntas frecuentes',
      faq: [
        { q: '¿Se integra con las herramientas que ya uso?', a: 'En la mayoría de los casos sí — calendarios, WhatsApp Business y plataformas de pago son integraciones habituales.' },
        { q: '¿Tengo que migrar todos mis datos de golpe?', a: 'No, podemos hacerlo por fases para no interrumpir tu operación diaria.' },
        { q: '¿Qué pasa si mi equipo no es muy técnico?', a: 'Incluye formación práctica — no hace falta experiencia previa con CRMs.' },
      ],
      relatedTitle: 'Servicios relacionados',
      related: ['marketing', 'chatbot'],
    },
    marketing: {
      metaTitle: 'Marketing Automatizado: Email, SMS y Reputación | Inefable',
      metaDescription:
        'Email, SMS y gestión de reputación funcionando en automático. Funnels de conversión y reporte mensual. Desde 89,79€/mes.',
      eyebrow: 'Marketing Automatizado',
      h1: 'Automatización de marketing: email, SMS y reputación',
      heroSubtitle:
        'Email, SMS y gestión de reputación funcionando solos, para que cada cliente reciba el mensaje correcto a tiempo.',
      problem:
        'Sin automatización, el marketing depende de que alguien se acuerde de mandar el email o pedir la reseña. En la práctica, eso significa que no se hace, o se hace tarde y mal.',
      featuresTitle: 'Qué incluye',
      features: [
        { title: 'Email & SMS automatizado', desc: 'Secuencias que se disparan solas según lo que hace cada cliente (compra, abandono, aniversario).' },
        { title: 'Gestión de reputación online', desc: 'Solicita reseñas automáticamente después de cada compra o servicio.' },
        { title: 'Funnels de conversión', desc: 'Flujos diseñados para convertir un contacto frío en cliente, paso a paso.' },
        { title: 'Reporte mensual', desc: 'Ves qué campañas funcionan y cuáles no, sin adivinar.' },
      ],
      processTitle: 'Cómo trabajamos',
      process: [
        { title: 'Auditoría', desc: 'Revisamos tu base de clientes y canales actuales.' },
        { title: 'Configuración de flujos', desc: 'Montamos las secuencias de email, SMS y solicitud de reseñas.' },
        { title: 'Lanzamiento', desc: 'Activamos las automatizaciones y las probamos con casos reales.' },
        { title: 'Reporte mensual', desc: 'Optimizamos según los resultados.' },
      ],
      faqTitle: 'Preguntas frecuentes',
      faq: [
        { q: '¿Necesito una base de datos grande de clientes?', a: 'No, funciona incluso con bases pequeñas — lo importante es automatizar bien el flujo, no el volumen.' },
        { q: '¿Puedo cancelar cuando quiera?', a: 'Sí, es un servicio mensual sin permanencia forzosa.' },
        { q: '¿Se integra con mi tienda online o CRM?', a: 'En la mayoría de los casos sí, lo revisamos en la consulta inicial.' },
      ],
      relatedTitle: 'Servicios relacionados',
      related: ['ads', 'crm'],
    },
    restaurant: {
      metaTitle: 'Automatización para Restaurantes: Menú QR y TPV | Inefable',
      metaDescription:
        'Menú QR conectado al TPV, pedidos directos a cocina y reservas por WhatsApp en un solo sistema. Desde 269,79€.',
      eyebrow: 'Automatización para Restaurantes',
      h1: 'Automatización para restaurantes: menú QR, TPV y reservas',
      heroSubtitle:
        'Menú QR conectado al TPV, pedidos directos a cocina y reservas por WhatsApp, todo en un mismo sistema.',
      problem:
        'En un restaurante con mucho movimiento, cada pedido que se apunta a mano o cada reserva que se gestiona por teléfono es una oportunidad de error — y de perder tiempo que el equipo necesita en sala.',
      featuresTitle: 'Qué incluye',
      features: [
        { title: 'Menú QR + conexión al TPV', desc: 'El cliente pide desde la mesa y el pedido entra directo al sistema de cobro.' },
        { title: 'Pedidos directos a cocina (KDS)', desc: 'Sin comandas en papel perdidas ni gritos entre sala y cocina.' },
        { title: 'Reservas por WhatsApp', desc: 'Los clientes reservan por el canal que ya usan, sin llamadas que interrumpen el servicio.' },
        { title: 'Delivery propio sin comisiones', desc: 'Gestiona tus propios pedidos a domicilio sin pagar comisión a plataformas de terceros.' },
      ],
      processTitle: 'Cómo trabajamos',
      process: [
        { title: 'Diagnóstico', desc: 'Revisamos tu flujo actual de pedidos, TPV y reservas.' },
        { title: 'Configuración', desc: 'Montamos el menú QR, la conexión a cocina y el sistema de reservas.' },
        { title: 'Prueba en sala', desc: 'Probamos el sistema completo antes de abrir al público.' },
        { title: 'Soporte y mantenimiento', desc: 'Ajustamos según el uso real del servicio.' },
      ],
      faqTitle: 'Preguntas frecuentes',
      faq: [
        { q: '¿Necesito cambiar mi TPV actual?', a: 'No siempre — en la mayoría de los casos conectamos con el sistema que ya tienes.' },
        { q: '¿Cuánto cuesta?', a: 'Depende del tamaño y alcance del proyecto — desde 269,79€ pago único más mantenimiento mensual; te lo confirmamos en la consulta.' },
        { q: '¿El delivery propio reemplaza a apps como Glovo o Uber Eats?', a: 'Puede complementarlas o reemplazarlas — la diferencia es que aquí no pagas comisión por pedido.' },
      ],
      relatedTitle: 'Servicios relacionados',
      related: ['ai', 'crm'],
    },
    appdev: {
      metaTitle: 'Desarrollo de Apps Móviles iOS y Android | Inefable',
      metaDescription:
        'Apps móviles a medida para iOS y Android, del diseño a la publicación en las tiendas. Integración con tu backend o CRM.',
      eyebrow: 'Desarrollo de Apps',
      h1: 'Desarrollo de apps móviles a medida (iOS y Android)',
      heroSubtitle: 'Apps móviles a medida, del diseño a la publicación en las tiendas.',
      problem:
        'Muchas ideas de apps se quedan paradas porque el proceso de diseño, desarrollo y publicación en las tiendas parece más complicado de lo que es. Con el equipo adecuado, es un proceso claro con hitos definidos.',
      featuresTitle: 'Qué incluye',
      features: [
        { title: 'iOS y Android', desc: 'Una sola base de desarrollo para ambas plataformas cuando el proyecto lo permite, o nativo cuando lo requiere.' },
        { title: 'Diseño e implementación a medida', desc: 'Sin plantillas genéricas — la app se diseña según tu producto y tus usuarios.' },
        { title: 'Integración con tu backend o CRM', desc: 'Se conecta con los sistemas que ya usas, no vive aislada.' },
        { title: 'Publicación en App Store y Google Play', desc: 'Nos encargamos de todo el proceso de publicación, incluida la revisión de las tiendas.' },
      ],
      processTitle: 'Cómo trabajamos',
      process: [
        { title: 'Descubrimiento', desc: 'Definimos el alcance, las funcionalidades clave y la plataforma.' },
        { title: 'Diseño', desc: 'Prototipamos la experiencia antes de escribir una línea de código.' },
        { title: 'Desarrollo', desc: 'Construimos la app en sprints, con entregas visibles.' },
        { title: 'Publicación y soporte', desc: 'Publicamos en las tiendas y damos soporte post-lanzamiento.' },
      ],
      faqTitle: 'Preguntas frecuentes',
      faq: [
        { q: '¿Cuánto cuesta desarrollar una app?', a: 'Depende totalmente del alcance — te damos un presupuesto cerrado después de la consulta inicial.' },
        { q: '¿Necesito una app nativa o sirve con una app híbrida?', a: 'Depende de lo que necesite tu producto — lo evaluamos juntos en la fase de descubrimiento.' },
        { q: '¿Se puede integrar con mi web o CRM actual?', a: 'Sí, es habitual conectar la app con sistemas ya existentes.' },
      ],
      relatedTitle: 'Servicios relacionados',
      related: ['web', 'crm'],
    },
  },
  en: {
    web: {
      metaTitle: 'Web Design & Development in Madrid | Inefable',
      metaDescription:
        'Fast, custom websites built with React + Vite, technical SEO included, deployed on Vercel. Ready in 5-7 days. Madrid agency.',
      eyebrow: 'Web Development',
      h1: 'Web design and development in Madrid, no runaround',
      heroSubtitle: 'Fast, modern sites built to convert — no generic templates or WordPress with 40 plugins.',
      problem:
        "Most business websites look fine but don't sell: they load slowly, have no clear call to action, and don't show up on Google. If your current site isn't bringing you clients, the problem is almost never the design — it's the technical foundation.",
      featuresTitle: "What's included",
      features: [
        { title: 'React + Vite + Tailwind', desc: 'The same stack tech startups use: fast loading, no plugin bloat, no updates that break the site.' },
        { title: 'Technical SEO from day one', desc: 'Metadata, sitemap, structured data, and optimized load speed — not an afterthought.' },
        { title: 'Real mobile-first design', desc: 'Over 60% of traffic comes from mobile; we design for that screen first, not adjust for it later.' },
        { title: 'Up to 3 rounds of revisions', desc: "We refine the design with you until it's right, no hidden charges for reasonable changes." },
        { title: 'Deployed on Vercel', desc: 'Fast hosting, automatic HTTPS, and zero-downtime deploys.' },
      ],
      processTitle: 'How we work',
      process: [
        { title: 'Discovery', desc: 'We learn about your business and goals.' },
        { title: 'Design & development', desc: 'We build your custom site.' },
        { title: 'Launch', desc: 'We publish it, fully tested.' },
        { title: 'Support', desc: 'Adjustments and improvements after launch.' },
      ],
      faqTitle: 'Frequently asked questions',
      faq: [
        { q: 'How long until my site is ready?', a: 'Between 5 and 7 days once we approve the scope, depending on the number of pages and features.' },
        { q: 'Do I need to write the copy myself?', a: "Not necessarily — we can work from your existing copy or help structure it; full copywriting is quoted separately if you need it." },
        { q: 'What if I already have a website?', a: 'We migrate it: keep what works (domain, content, accumulated SEO) and rebuild the technical foundation.' },
      ],
      relatedTitle: 'Related services',
      related: ['ads', 'chatbot'],
    },
    ads: {
      metaTitle: 'Google Ads & Meta Ads Management in Madrid | Inefable',
      metaDescription:
        'Google Ads and Meta Ads campaigns managed and optimized weekly, with clear reporting. From €200/mo, no lock-in.',
      eyebrow: 'Ad Management',
      h1: 'Google Ads & Meta Ads management in Madrid',
      heroSubtitle: 'Campaigns managed week by week with real data — not a generic monthly report.',
      problem:
        "Most ad accounts burn money on clicks that don't convert because nobody reviews them after setup. Without constant optimization, cost per lead climbs and return drops.",
      featuresTitle: "What's included",
      features: [
        { title: 'Meta Ads + Google Ads', desc: 'One team managing both platforms, with budget split toward whatever actually converts.' },
        { title: 'Weekly optimization', desc: 'We review bids, audiences, and creatives every week, not once a quarter.' },
        { title: 'Clear weekly reporting', desc: 'Cost per lead, spend, and results — no jargon only a marketing specialist understands.' },
        { title: 'No lock-in', desc: 'Cancel the management service whenever you want, no penalty.' },
      ],
      processTitle: 'How we work',
      process: [
        { title: 'Audit', desc: 'We review your accounts and goals.' },
        { title: 'Strategy', desc: 'We define the approach and budget.' },
        { title: 'Launch & optimize', desc: 'We activate campaigns and adjust live.' },
        { title: 'Monthly report', desc: 'Clear results.' },
      ],
      faqTitle: 'Frequently asked questions',
      faq: [
        { q: 'Do I need existing Meta and Google Ads accounts?', a: "No, we set them up if you don't have them. If you have history, we build on it instead of starting from zero." },
        { q: "What's the minimum ad spend?", a: 'It depends on your industry, but we recommend a minimum of €300-500/mo in ad budget, separate from management fees.' },
        { q: 'What if I want to cancel?', a: "There's no lock-in — you can cancel the management service whenever you need to." },
      ],
      relatedTitle: 'Related services',
      related: ['web', 'marketing'],
    },
    chatbot: {
      metaTitle: 'AI Chatbot for Your Website | Inefable',
      metaDescription:
        "AI chatbot trained on your business content: answers questions and captures leads 24/7. Try it live. From €124.79.",
      eyebrow: 'AI Chatbot',
      h1: 'AI chatbot for your website',
      heroSubtitle: "A text chat that answers questions and captures leads 24/7 — for when contact doesn't need to be a phone call.",
      problem:
        "Many visitors leave your site without reaching out because they can't find a quick answer to their question, and not everyone wants to call. A well-trained chatbot captures that moment before they go to a competitor.",
      featuresTitle: "What's included",
      features: [
        { title: 'Trained on your business content', desc: 'Answers with real information about your services, pricing, and hours — not generic replies.' },
        { title: 'Available 24/7', desc: 'Responds outside business hours too, weekends included.' },
        { title: 'Hands off to your team when needed', desc: "If the question is complex, it passes the conversation to a person instead of making up an answer." },
        { title: 'Monthly conversation report', desc: "See what your prospective customers are actually asking." },
      ],
      processTitle: 'How we work',
      process: [
        { title: 'Setup', desc: "We gather your business's content and frequently asked questions." },
        { title: 'Training', desc: 'We configure the chatbot with that content and test the answers.' },
        { title: 'Integration', desc: 'We embed it in your site, production-ready.' },
        { title: 'Ongoing tuning', desc: 'We review real conversations and improve the answers.' },
      ],
      faqTitle: 'Frequently asked questions',
      faq: [
        { q: "What if the chatbot can't answer something?", a: "There's a clear protocol: it hands the conversation to a human, or captures contact details for your team to follow up." },
        { q: 'Can I try it before hiring it?', a: "Yes — the chat on this very site is a live demo of the same system." },
        { q: 'Is conversation data secure?', a: "Yes. We work with providers that meet recognized security standards and never share your data with third parties." },
      ],
      relatedTitle: 'Related services',
      related: ['ai', 'crm'],
    },
    ai: {
      metaTitle: 'AI Virtual Receptionist for Your Business | Inefable',
      metaDescription:
        'AI voice agent that answers calls and books appointments 24/7. 97% cheaper than a human receptionist. From €199.79.',
      eyebrow: 'AI Receptionist',
      h1: 'AI virtual receptionist for your business',
      heroSubtitle: 'An AI voice agent that answers and directs your business calls, 24/7.',
      problem:
        "Every missed call is a prospective customer who probably calls a competitor next. A full-time receptionist costs around €2,246/mo on average in Spain — most businesses can't justify that cost just to stop missing calls.",
      featuresTitle: "What's included",
      features: [
        { title: 'Answers your business calls', desc: 'With a natural voice, not a frustrating tone menu.' },
        { title: 'Available 24/7', desc: 'It answers outside hours, holidays, and weekends too.' },
        { title: 'Books appointments automatically', desc: 'Connects to your calendar and books directly.' },
        { title: 'Hands off to your team when needed', desc: 'Urgent or complex calls get passed to a real person.' },
        { title: '97% cheaper than a human receptionist', desc: '€49.79/mo vs. ~€2,246/mo average cost of a receptionist in Spain.' },
      ],
      processTitle: 'How we work',
      process: [
        { title: 'Setup', desc: 'We define the script, voice tone, and cases that should hand off to your team.' },
        { title: 'Connection', desc: 'We connect it to your number, calendar, and CRM if you have one.' },
        { title: 'Testing', desc: 'We run test calls before going live.' },
        { title: 'Maintenance included', desc: 'We tune the system based on real calls.' },
      ],
      faqTitle: 'Frequently asked questions',
      faq: [
        { q: 'Does it sound like a robot?', a: "No — it uses natural conversational AI voice, not a 'press 1 for...' tone tree." },
        { q: 'Can it book appointments directly?', a: 'Yes, it connects to your calendar and books without anyone having to pick up.' },
        { q: 'What happens with an urgent call?', a: 'A hand-off protocol is defined: the AI passes the call to a person on your team when appropriate.' },
      ],
      relatedTitle: 'Related services',
      related: ['chatbot', 'restaurant'],
    },
    crm: {
      metaTitle: 'CRM Automation for Small Businesses | Inefable',
      metaDescription: 'CRM implementation and automation: data migration, automatic pipeline, and team training. From €249.79.',
      eyebrow: 'CRM Automation',
      h1: 'CRM automation for small businesses',
      heroSubtitle: "Your sales pipeline organized and automatic, no leads lost in WhatsApp threads or loose notes.",
      problem:
        'Without a CRM, leads get lost between WhatsApp chats, notes on your phone, and outdated spreadsheets. Every forgotten lead is a sale that never closes.',
      featuresTitle: "What's included",
      features: [
        { title: 'CRM implementation', desc: 'We configure the tool around how you actually sell, not a generic template.' },
        { title: 'Existing data migration', desc: 'Your current contacts and deals move to the new system without losing history.' },
        { title: 'Pipeline automation', desc: 'Automatic reminders, tasks, and stage changes based on what each lead does.' },
        { title: 'Team training', desc: "Your team actually learns to use it, not just open it on day one." },
      ],
      processTitle: 'How we work',
      process: [
        { title: 'Diagnosis', desc: 'We review how you currently manage leads and sales.' },
        { title: 'Setup', desc: 'We build the CRM and the automations you need.' },
        { title: 'Migration', desc: 'We move your current data without losing history.' },
        { title: 'Training & support', desc: 'We train your team and adjust based on real usage.' },
      ],
      faqTitle: 'Frequently asked questions',
      faq: [
        { q: 'Does it integrate with the tools I already use?', a: 'In most cases yes — calendars, WhatsApp Business, and payment platforms are common integrations.' },
        { q: 'Do I have to migrate all my data at once?', a: 'No, we can do it in phases so it doesn’t interrupt your daily operations.' },
        { q: "What if my team isn't very technical?", a: 'Practical training is included — no prior CRM experience needed.' },
      ],
      relatedTitle: 'Related services',
      related: ['marketing', 'chatbot'],
    },
    marketing: {
      metaTitle: 'Marketing Automation: Email, SMS & Reputation | Inefable',
      metaDescription:
        'Email, SMS, and reputation management running on autopilot. Conversion funnels and monthly reporting. From €89.79/mo.',
      eyebrow: 'Marketing Automation',
      h1: 'Marketing automation: email, SMS, and reputation',
      heroSubtitle: 'Email, SMS, and reputation running on their own, so every customer gets the right message on time.',
      problem:
        "Without automation, marketing depends on someone remembering to send the email or ask for the review. In practice, that means it doesn't happen, or happens late and poorly.",
      featuresTitle: "What's included",
      features: [
        { title: 'Automated email & SMS', desc: 'Sequences that trigger themselves based on what each customer does (purchase, abandonment, anniversary).' },
        { title: 'Online reputation management', desc: 'Automatically requests reviews after every purchase or service.' },
        { title: 'Conversion funnels', desc: 'Flows designed to turn a cold contact into a customer, step by step.' },
        { title: 'Monthly reporting', desc: "See which campaigns work and which don't, without guessing." },
      ],
      processTitle: 'How we work',
      process: [
        { title: 'Audit', desc: 'We review your customer base and current channels.' },
        { title: 'Flow setup', desc: 'We build the email, SMS, and review-request sequences.' },
        { title: 'Launch', desc: 'We activate the automations and test them with real cases.' },
        { title: 'Monthly report', desc: 'We optimize based on results.' },
      ],
      faqTitle: 'Frequently asked questions',
      faq: [
        { q: 'Do I need a large customer database?', a: "No, it works even with small lists — what matters is automating the flow well, not the volume." },
        { q: 'Can I cancel whenever I want?', a: "Yes, it's a monthly service with no forced commitment." },
        { q: 'Does it integrate with my online store or CRM?', a: 'In most cases yes, we review it in the initial consultation.' },
      ],
      relatedTitle: 'Related services',
      related: ['ads', 'crm'],
    },
    restaurant: {
      metaTitle: 'Restaurant Automation: QR Menu & POS | Inefable',
      metaDescription:
        'QR menu connected to your POS, orders sent straight to the kitchen, and WhatsApp reservations in one system. From €269.79.',
      eyebrow: 'Restaurant Automation',
      h1: 'Restaurant automation: QR menu, POS, and reservations',
      heroSubtitle: 'QR menu connected to your POS, orders straight to the kitchen, and WhatsApp reservations — all in one system.',
      problem:
        "In a busy restaurant, every order jotted down by hand or reservation handled by phone is a chance for error — and time your floor staff needs elsewhere.",
      featuresTitle: "What's included",
      features: [
        { title: 'QR menu + POS connection', desc: 'Customers order from the table and it goes straight into the payment system.' },
        { title: 'Orders straight to the kitchen (KDS)', desc: 'No lost paper tickets or shouting between floor and kitchen.' },
        { title: 'WhatsApp reservations', desc: "Customers book through the channel they already use, without calls interrupting service." },
        { title: 'Your own delivery, no commissions', desc: 'Manage your own delivery orders without paying a cut to third-party platforms.' },
      ],
      processTitle: 'How we work',
      process: [
        { title: 'Diagnosis', desc: 'We review your current order, POS, and reservation flow.' },
        { title: 'Setup', desc: 'We build the QR menu, kitchen connection, and reservation system.' },
        { title: 'Floor testing', desc: 'We test the full system before opening to the public.' },
        { title: 'Support & maintenance', desc: 'We adjust based on real service use.' },
      ],
      faqTitle: 'Frequently asked questions',
      faq: [
        { q: 'Do I need to change my current POS?', a: 'Not always — in most cases we connect with the system you already have.' },
        { q: 'How much does it cost?', a: "It depends on the size and scope of the project — from €269.79 one-time plus monthly maintenance; we confirm it in the consultation." },
        { q: 'Does self-delivery replace apps like Glovo or Uber Eats?', a: 'It can complement or replace them — the difference is you don’t pay a per-order commission here.' },
      ],
      relatedTitle: 'Related services',
      related: ['ai', 'crm'],
    },
    appdev: {
      metaTitle: 'Custom Mobile App Development (iOS & Android) | Inefable',
      metaDescription: 'Custom mobile apps for iOS and Android, from design to publishing on the stores. Integrates with your backend or CRM.',
      eyebrow: 'App Development',
      h1: 'Custom mobile app development (iOS & Android)',
      heroSubtitle: 'Custom mobile apps, from design to publishing on the stores.',
      problem:
        "Many app ideas stall because the design, development, and store-publishing process seems more complicated than it is. With the right team, it's a clear process with defined milestones.",
      featuresTitle: "What's included",
      features: [
        { title: 'iOS and Android', desc: 'One shared codebase for both platforms when the project allows it, or native when it requires it.' },
        { title: 'Custom design and build', desc: "No generic templates — the app is designed around your product and your users." },
        { title: 'Integration with your backend or CRM', desc: "Connects with the systems you already use, doesn't live in isolation." },
        { title: 'App Store & Google Play publishing', desc: 'We handle the entire publishing process, including store review.' },
      ],
      processTitle: 'How we work',
      process: [
        { title: 'Discovery', desc: 'We define scope, key features, and platform.' },
        { title: 'Design', desc: 'We prototype the experience before writing a line of code.' },
        { title: 'Development', desc: 'We build the app in sprints, with visible deliveries.' },
        { title: 'Publishing & support', desc: 'We publish to the stores and provide post-launch support.' },
      ],
      faqTitle: 'Frequently asked questions',
      faq: [
        { q: 'How much does it cost to build an app?', a: 'It depends entirely on scope — we give you a fixed quote after the initial consultation.' },
        { q: 'Do I need a native app, or is a hybrid app enough?', a: 'It depends on what your product needs — we assess that together during discovery.' },
        { q: 'Can it integrate with my existing website or CRM?', a: 'Yes, connecting the app to existing systems is common.' },
      ],
      relatedTitle: 'Related services',
      related: ['web', 'crm'],
    },
  },
}
