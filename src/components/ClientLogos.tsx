import { useTranslation } from '../hooks/useTranslation'

const CLIENTS = ['Proyecto Martí', 'VCR']

export default function ClientLogos() {
  const { t } = useTranslation()

  return (
    <section style={{ padding: '20px 6vw 100px', position: 'relative', zIndex: 1 }}>
      <div
        style={{
          textAlign: 'center',
          fontSize: 13,
          fontWeight: 700,
          letterSpacing: '.08em',
          color: 'var(--color-faint)',
          textTransform: 'uppercase',
          marginBottom: 32,
        }}
      >
        {t.logosLabel}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 32, flexWrap: 'wrap', maxWidth: 900, margin: '0 auto' }}>
        {CLIENTS.map((name) => (
          <div
            key={name}
            style={{
              width: 180,
              height: 90,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'var(--color-surface)',
              border: '1px solid var(--color-border-soft)',
              borderRadius: 14,
              padding: 14,
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: 15,
                color: 'rgba(255,255,255,.5)',
                textAlign: 'center',
              }}
            >
              {name}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
