import { useTranslation } from '../hooks/useTranslation'

export default function WhyInefable() {
  const { t } = useTranslation()

  return (
    <section id="porque" style={{ padding: '60px 6vw 130px', position: 'relative', zIndex: 1 }}>
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'minmax(260px,1fr) minmax(0,1.6fr)',
          gap: 60,
        }}
        className="why-grid"
      >
        <div>
          <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '.08em', color: 'var(--color-subtle)', textTransform: 'uppercase', marginBottom: 18 }}>
            {t.why.eyebrow}
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(30px,4.5vw,48px)',
              fontWeight: 800,
              margin: 0,
              letterSpacing: '-.02em',
              lineHeight: 1.08,
            }}
          >
            {t.why.title}
          </h2>
          <p style={{ color: 'var(--color-muted)', fontSize: 16, lineHeight: 1.6, margin: '22px 0 0', maxWidth: 340 }}>
            {t.why.lead}
          </p>
        </div>
        <div>
          {t.why.items.map((item) => (
            <div
              key={item.n}
              style={{
                display: 'grid',
                gridTemplateColumns: '70px 1fr',
                gap: 20,
                padding: '30px 0',
                borderTop: '1px solid var(--color-border)',
              }}
            >
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 800, color: 'var(--color-accent-purple)' }}>
                {item.n}
              </div>
              <div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 23, fontWeight: 700, margin: '0 0 10px', letterSpacing: '-.01em' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: 15, color: 'var(--color-muted)', lineHeight: 1.65, margin: 0, maxWidth: 520 }}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
          <div style={{ borderTop: '1px solid var(--color-border)' }} />
        </div>
      </div>
    </section>
  )
}
