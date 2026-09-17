import { useEffect } from 'react'
import { useTranslation } from '../hooks/useTranslation'
import { SITE } from '../config/site'
import { SERVICE_SLUGS, type ServiceKey } from '../content/serviceSlugs'

const SCRIPT_ID = 'inefable-jsonld'

/**
 * Injects Organization + FAQPage JSON-LD for the current language. No
 * PostalAddress is included — the legal entity's registered address hasn't
 * been provided yet (see src/config/site.ts), and fabricating one would be
 * worse than omitting it.
 */
export default function StructuredData() {
  const { t, lang } = useTranslation()

  useEffect(() => {
    const graph = [
      {
        '@type': 'ProfessionalService',
        '@id': `${SITE.url}/#organization`,
        name: SITE.name,
        url: SITE.url,
        email: SITE.contactEmail,
        image: `${SITE.url}/android-chrome-512x512.png`,
        logo: `${SITE.url}/android-chrome-512x512.png`,
        areaServed: ['Madrid', 'España', 'Estados Unidos', 'Latinoamérica'],
        sameAs: [SITE.instagram],
        contactPoint: [
          {
            '@type': 'ContactPoint',
            contactType: 'sales',
            email: SITE.contactEmail,
            telephone: `+${SITE.whatsapp.number}`,
            availableLanguage: ['es', 'en'],
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `${SITE.url}/#faq`,
        mainEntity: t.faq.items.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: { '@type': 'Answer', text: item.a },
        })),
      },
      // One Service entity per offering so each can independently match
      // service-specific queries ("chatbot IA para web", "gestión Google
      // Ads Madrid"...) instead of all 8 competing under one ProfessionalService.
      ...t.services.items.map((item) => ({
        '@type': 'Service',
        '@id': `${SITE.url}/#service-${item.key}`,
        name: item.title,
        description: item.description,
        provider: { '@id': `${SITE.url}/#organization` },
        areaServed: ['Madrid', 'España', 'Estados Unidos', 'Latinoamérica'],
        url: `${SITE.url}${SERVICE_SLUGS[item.key as ServiceKey]}`,
      })),
    ]

    const json = { '@context': 'https://schema.org', '@graph': graph }

    let script = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null
    if (!script) {
      script = document.createElement('script')
      script.id = SCRIPT_ID
      script.type = 'application/ld+json'
      document.head.appendChild(script)
    }
    script.textContent = JSON.stringify(json)

    return () => {
      document.getElementById(SCRIPT_ID)?.remove()
    }
  }, [t, lang])

  return null
}
