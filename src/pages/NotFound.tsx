import { Link } from 'react-router-dom'
import { useTranslation } from '../hooks/useTranslation'
import { useDocumentHead } from '../hooks/useDocumentHead'
import { SITE } from '../config/site'
import Header from '../components/Header'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'

const COPY = {
  es: {
    title: 'Página no encontrada',
    metaDesc: 'La página que buscas no existe o se ha movido.',
    eyebrow: 'Error 404',
    heading: 'Esta página no existe',
    body: 'Puede que el enlace esté roto o que la página se haya movido. Vuelve al inicio o cuéntanos qué necesitas.',
    home: 'Volver al inicio',
    cta: 'Hablemos de tu negocio',
  },
  en: {
    title: 'Page not found',
    metaDesc: "The page you're looking for doesn't exist or has moved.",
    eyebrow: 'Error 404',
    heading: "This page doesn't exist",
    body: "The link might be broken, or the page may have moved. Head back home or tell us what you need.",
    home: 'Back to home',
    cta: "Let's talk about your business",
  },
}

export default function NotFound() {
  const { lang } = useTranslation()
  const c = COPY[lang]
  useDocumentHead(`${c.title} | ${SITE.name}`, c.metaDesc, '/404')

  return (
    <div style={{ background: 'var(--color-bg)', color: 'var(--color-text)', minHeight: '100vh' }}>
      <Header />
      <main
        style={{
          minHeight: '70vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '60px 6vw',
        }}
      >
        <div
          style={{
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: '.08em',
            color: 'var(--color-subtle)',
            textTransform: 'uppercase',
            marginBottom: 14,
          }}
        >
          {c.eyebrow}
        </div>
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(32px,6vw,56px)',
            fontWeight: 800,
            margin: '0 0 16px',
            letterSpacing: '-.01em',
          }}
        >
          {c.heading}
        </h1>
        <p style={{ color: 'var(--color-muted)', fontSize: 16, maxWidth: 480, margin: '0 0 32px' }}>{c.body}</p>
        <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link
            to="/"
            style={{
              background: 'var(--color-accent-gradient)',
              color: '#fff',
              fontWeight: 700,
              fontSize: 14,
              padding: '14px 26px',
              borderRadius: 100,
            }}
          >
            {c.home}
          </Link>
          <Link
            to="/#contacto"
            style={{
              border: '1px solid var(--color-border)',
              color: 'var(--color-text)',
              fontWeight: 700,
              fontSize: 14,
              padding: '14px 26px',
              borderRadius: 100,
            }}
          >
            {c.cta}
          </Link>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
