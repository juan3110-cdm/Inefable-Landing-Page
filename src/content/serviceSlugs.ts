// Kept separate from servicePages.ts (the actual page copy) so components
// that only need to build a URL — routes, homepage cards, structured data —
// don't pull ~8 pages of bilingual copy into the main bundle. Only
// ServicePage.tsx, which is already lazy-loaded, imports the full content.
export type ServiceKey = 'web' | 'ads' | 'chatbot' | 'ai' | 'crm' | 'marketing' | 'restaurant' | 'appdev'

export const SERVICE_SLUGS: Record<ServiceKey, string> = {
  web: '/desarrollo-web',
  ads: '/gestion-ads',
  chatbot: '/chatbot-ia',
  ai: '/recepcionista-ia',
  crm: '/automatizacion-crm',
  marketing: '/marketing-automatizado',
  restaurant: '/automatizacion-restaurantes',
  appdev: '/desarrollo-apps',
}
