import { useTranslation } from '../hooks/useTranslation'
import { firePrefill } from '../lib/prefill'

const GRADIENTS: Record<string, string> = {
  web: 'linear-gradient(160deg, rgba(47,95,224,.35), rgba(47,95,224,.05))',
  ads: 'linear-gradient(160deg, rgba(168,85,247,.35), rgba(168,85,247,.05))',
  chatbot: 'linear-gradient(160deg, rgba(34,211,238,.35), rgba(34,211,238,.05))',
  ai: 'linear-gradient(160deg, rgba(108,138,255,.35), rgba(108,138,255,.05))',
  crm: 'linear-gradient(160deg, rgba(45,212,191,.35), rgba(45,212,191,.05))',
  marketing: 'linear-gradient(160deg, rgba(251,146,60,.35), rgba(251,146,60,.05))',
  restaurant: 'linear-gradient(160deg, rgba(244,63,94,.35), rgba(244,63,94,.05))',
}

function ServiceIcon({ svcKey }: { svcKey: string }) {
  if (svcKey === 'web') {
    return (
      <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    )
  }
  if (svcKey === 'ads') {
    return (
      <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="m3 11 18-5v12L3 14v-3z" />
        <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
      </svg>
    )
  }
  if (svcKey === 'crm') {
    return (
      <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="7" cy="7" r="3" />
        <circle cx="17" cy="17" r="3" />
        <path d="M9.5 8.5 14.5 15.5" />
      </svg>
    )
  }
  if (svcKey === 'marketing') {
    return (
      <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 11v2a2 2 0 0 0 2 2h1l2 5h2l-1.5-5H10l9 4V5l-9 4H5a2 2 0 0 0-2 2z" />
      </svg>
    )
  }
  if (svcKey === 'restaurant') {
    return (
      <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 3v7a2 2 0 0 0 4 0V3" />
        <path d="M8 10v11" />
        <path d="M17 3c-1.5 0-2.5 1.5-2.5 3.5S16 12 17 12v9" />
      </svg>
    )
  }
  if (svcKey === 'chatbot') {
    return (
      <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5c-1.35 0-2.62-.32-3.73-.9L4 21l1.9-4.77A8.5 8.5 0 1 1 21 11.5z" />
      </svg>
    )
  }
  // ai (voice receptionist)
  return (
    <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H3z" />
      <path d="M21 11h-3a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3z" />
      <path d="M3 11a9 9 0 1 1 18 0" />
      <path d="M21 16v2a2 2 0 0 1-2 2h-2" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{ borderRadius: 5 }}>
      <rect width="24" height="24" rx="6" fill="url(#ig-grad)" />
      <defs>
        <linearGradient id="ig-grad" x1="0" y1="24" x2="24" y2="0">
          <stop offset="0" stopColor="#feda75" />
          <stop offset="0.3" stopColor="#d62976" />
          <stop offset="0.6" stopColor="#962fbf" />
          <stop offset="1" stopColor="#4f5bd5" />
        </linearGradient>
      </defs>
      <rect x="6" y="6" width="12" height="12" rx="3.5" stroke="#fff" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="3" stroke="#fff" strokeWidth="1.5" />
      <circle cx="16" cy="8" r="0.9" fill="#fff" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" style={{ borderRadius: 5 }}>
      <rect width="24" height="24" rx="6" fill="#1877F2" />
      <path
        d="M15.5 12.5h-2v7h-3v-7H9v-2.5h1.5V8.5c0-1.5.9-2.7 3-2.7h2v2.5h-1.3c-.5 0-.7.2-.7.7v1.5h2.3l-.3 2.5z"
        fill="#fff"
      />
    </svg>
  )
}

export default function Services() {
  const { t } = useTranslation()

  return (
    <section id="servicios" style={{ padding: '40px 6vw 120px', position: 'relative', zIndex: 1 }}>
      <div style={{ textAlign: 'center', marginBottom: 56 }}>
        <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '.08em', color: 'var(--color-subtle)', textTransform: 'uppercase', marginBottom: 14 }}>
          {t.services.eyebrow}
        </div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px,4vw,42px)', fontWeight: 800, margin: 0, letterSpacing: '-.01em' }}>
          {t.services.title}
        </h2>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
          gap: 24,
          maxWidth: 1080,
          margin: '0 auto',
        }}
      >
        {t.services.items.map((svc) => (
          <div
            key={svc.key}
            className="group"
            style={{
              position: 'relative',
              overflow: 'hidden',
              minHeight: 420,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              borderRadius: 24,
              padding: 32,
              background: GRADIENTS[svc.key],
              border: '1px solid rgba(255,255,255,.1)',
              transition: 'transform .25s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-6px)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
          >
            <div>
              <div style={{ fontFamily: 'monospace', fontSize: 13, color: 'rgba(255,255,255,.4)', marginBottom: 26 }}>
                ( {svc.number} )
              </div>
              <ServiceIcon svcKey={svc.key} />
            </div>
            <div>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 18,
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '.04em',
                  margin: '0 0 10px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                }}
              >
                {svc.title}
                {svc.hasPlatformIcons && (
                  <>
                    <InstagramIcon />
                    <FacebookIcon />
                  </>
                )}
              </h3>
              <p style={{ color: 'rgba(255,255,255,.65)', fontSize: 14, lineHeight: 1.6, margin: '0 0 18px' }}>
                {svc.description}
              </p>
              <a
                href="#contacto"
                onClick={() => firePrefill({ service: svc.key })}
                style={{
                  background: 'transparent',
                  color: '#fff',
                  fontSize: 14,
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                }}
              >
                {svc.cta} <span>→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
