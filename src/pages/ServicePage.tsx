import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from '../hooks/useTranslation'
import { useDocumentHead } from '../hooks/useDocumentHead'
import { SITE } from '../config/site'
import { servicePages } from '../content/servicePages'
import { SERVICE_SLUGS, type ServiceKey } from '../content/serviceSlugs'
import { firePrefill } from '../lib/prefill'
import Header from '../components/Header'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'
import ChatWidget from '../components/ChatWidget'

const SCRIPT_ID_PREFIX = 'inefable-service-jsonld-'

const CONTACT_CTA = {
  es: 'Hablar de este servicio',
  en: 'Talk about this service',
}
const BACK_TO_SERVICES = {
  es: '← Todos los servicios',
  en: '← All services',
}

export default function ServicePage({ serviceKey }: { serviceKey: ServiceKey }) {
  const { t, lang } = useTranslation()
  const content = servicePages[lang][serviceKey]
  const plan = t.pricing.plans.find((p) => p.key === serviceKey)
  const scriptId = `${SCRIPT_ID_PREFIX}${serviceKey}`

  useDocumentHead(content.metaTitle, content.metaDescription, SERVICE_SLUGS[serviceKey])

  useEffect(() => {
    const graph = [
      {
        '@type': 'Service',
        name: content.h1,
        description: content.metaDescription,
        provider: { '@type': 'ProfessionalService', name: SITE.name, url: SITE.url },
        areaServed: ['Madrid', 'España', 'Estados Unidos', 'Latinoamérica'],
        url: `${SITE.url}${SERVICE_SLUGS[serviceKey]}`,
      },
      {
        '@type': 'FAQPage',
        mainEntity: content.faq.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: { '@type': 'Answer', text: item.a },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: SITE.name, item: SITE.url },
          { '@type': 'ListItem', position: 2, name: content.eyebrow, item: `${SITE.url}${SERVICE_SLUGS[serviceKey]}` },
        ],
      },
    ]
    const json = { '@context': 'https://schema.org', '@graph': graph }

    let script = document.getElementById(scriptId) as HTMLScriptElement | null
    if (!script) {
      script = document.createElement('script')
      script.id = scriptId
      script.type = 'application/ld+json'
      document.head.appendChild(script)
    }
    script.textContent = JSON.stringify(json)

    return () => {
      document.getElementById(scriptId)?.remove()
    }
  }, [content, scriptId, serviceKey])

  return (
    <div style={{ background: 'var(--color-bg)', color: 'var(--color-text)', minHeight: '100vh' }}>
      <Header />
      <main style={{ padding: '40px 6vw 0', maxWidth: 880, margin: '0 auto' }}>
        <Link to="/#servicios" style={{ fontSize: 13, color: 'var(--color-subtle)', fontWeight: 600 }}>
          {BACK_TO_SERVICES[lang]}
        </Link>

        <div style={{ marginTop: 24, marginBottom: 40 }}>
          <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '.08em', color: 'var(--color-subtle)', textTransform: 'uppercase', marginBottom: 14 }}>
            {content.eyebrow}
          </div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(30px,5vw,48px)', fontWeight: 800, margin: '0 0 16px', letterSpacing: '-.01em', lineHeight: 1.1 }}>
            {content.h1}
          </h1>
          <p style={{ color: 'var(--color-muted)', fontSize: 17, lineHeight: 1.6, maxWidth: 640, margin: '0 0 28px' }}>
            {content.heroSubtitle}
          </p>
          <Link
            to="/#contacto"
            onClick={() => firePrefill({ service: serviceKey })}
            style={{
              display: 'inline-block',
              background: 'var(--color-accent-gradient)',
              color: '#fff',
              fontWeight: 700,
              fontSize: 15,
              padding: '14px 26px',
              borderRadius: 100,
            }}
          >
            {CONTACT_CTA[lang]}
          </Link>
        </div>

        <section style={{ marginBottom: 48 }}>
          <p style={{ color: 'var(--color-muted)', fontSize: 16, lineHeight: 1.7, margin: 0 }}>{content.problem}</p>
        </section>

        <section style={{ marginBottom: 56 }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 800, marginBottom: 24 }}>{content.featuresTitle}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 20 }}>
            {content.features.map((f) => (
              <div key={f.title} style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border-soft)', borderRadius: 16, padding: 22 }}>
                <h3 style={{ fontSize: 15, fontWeight: 700, margin: '0 0 8px' }}>{f.title}</h3>
                <p style={{ color: 'var(--color-muted)', fontSize: 13.5, lineHeight: 1.6, margin: 0 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 56 }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 800, marginBottom: 24 }}>{content.processTitle}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: 20 }}>
            {content.process.map((step, i) => (
              <div key={step.title}>
                <div style={{ fontFamily: 'monospace', fontSize: 13, color: 'var(--color-faint)', marginBottom: 8 }}>0{i + 1}</div>
                <h3 style={{ fontSize: 15, fontWeight: 700, margin: '0 0 6px' }}>{step.title}</h3>
                <p style={{ color: 'var(--color-muted)', fontSize: 13.5, lineHeight: 1.6, margin: 0 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {plan && (
          <section style={{ marginBottom: 56 }}>
            <div style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 20, padding: 28 }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--color-subtle)', textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: 10 }}>
                {plan.name}
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 14 }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: 32, fontWeight: 800 }}>{plan.price}</span>
                {plan.period && <span style={{ color: 'var(--color-muted)', fontSize: 14 }}>{plan.period}</span>}
              </div>
              {plan.note && <p style={{ color: 'var(--color-muted)', fontSize: 13, marginBottom: 16 }}>{plan.note}</p>}
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                {plan.features.map((f) => (
                  <li key={f} style={{ fontSize: 13.5, color: 'var(--color-muted)', display: 'flex', gap: 8 }}>
                    <span style={{ color: 'var(--color-accent-purple-light)' }}>✓</span> {f}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        <section style={{ marginBottom: 56 }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 800, marginBottom: 24 }}>{content.faqTitle}</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {content.faq.map((item) => (
              <div key={item.q}>
                <h3 style={{ fontSize: 15, fontWeight: 700, margin: '0 0 6px' }}>{item.q}</h3>
                <p style={{ color: 'var(--color-muted)', fontSize: 14, lineHeight: 1.6, margin: 0 }}>{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 56 }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 700, marginBottom: 16 }}>{content.relatedTitle}</h2>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            {content.related.map((key) => (
              <Link
                key={key}
                to={SERVICE_SLUGS[key]}
                style={{
                  border: '1px solid var(--color-border)',
                  borderRadius: 100,
                  padding: '10px 18px',
                  fontSize: 13.5,
                  fontWeight: 600,
                  color: 'var(--color-text)',
                }}
              >
                {servicePages[lang][key].eyebrow}
              </Link>
            ))}
          </div>
        </section>

        <section style={{ textAlign: 'center', padding: '48px 0 80px' }}>
          <Link
            to="/#contacto"
            onClick={() => firePrefill({ service: serviceKey })}
            style={{
              display: 'inline-block',
              background: 'var(--color-accent-gradient)',
              color: '#fff',
              fontWeight: 700,
              fontSize: 15,
              padding: '16px 32px',
              borderRadius: 100,
            }}
          >
            {CONTACT_CTA[lang]}
          </Link>
        </section>
      </main>
      <Footer />
      <ChatWidget />
      <WhatsAppButton />
    </div>
  )
}
