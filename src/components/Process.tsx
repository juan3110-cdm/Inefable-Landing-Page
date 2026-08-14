import { useTranslation } from '../hooks/useTranslation'

export default function Process() {
  const { t } = useTranslation()

  return (
    <section id="proceso" style={{ padding: '40px 6vw 120px', position: 'relative', zIndex: 1 }}>
      <div style={{ textAlign: 'center', marginBottom: 56 }}>
        <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '.08em', color: 'var(--color-subtle)', textTransform: 'uppercase', marginBottom: 14 }}>
          {t.process.eyebrow}
        </div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px,4vw,42px)', fontWeight: 800, margin: 0, letterSpacing: '-.01em' }}>
          {t.process.title}
        </h2>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(340px,1fr))',
          gap: 28,
          maxWidth: 1080,
          margin: '0 auto',
        }}
      >
        {t.process.tracks.map((track) => (
          <div
            key={track.label}
            style={{
              background: 'var(--color-surface)',
              border: '1px solid var(--color-border-soft)',
              borderRadius: 22,
              padding: 34,
            }}
          >
            <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--color-accent-purple-light)', letterSpacing: '.04em', marginBottom: 22, textTransform: 'uppercase' }}>
              {track.label}
            </div>
            {track.steps.map((step) => (
              <div
                key={step.n}
                style={{ display: 'flex', gap: 16, padding: '14px 0', borderTop: '1px solid var(--color-border-soft)' }}
              >
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 15, color: '#5c73c7', minWidth: 28 }}>
                  {step.n}
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 4 }}>{step.title}</div>
                  <div style={{ fontSize: 13, color: 'var(--color-muted)', lineHeight: 1.5 }}>{step.description}</div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
