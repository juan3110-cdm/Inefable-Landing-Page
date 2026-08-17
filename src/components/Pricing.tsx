import { useTranslation } from '../hooks/useTranslation'
import { firePrefill } from '../lib/prefill'

export default function Pricing() {
  const { t } = useTranslation()

  return (
    <section id="tarifas" style={{ padding: '40px 6vw 120px', position: 'relative', zIndex: 1 }}>
      <div style={{ textAlign: 'center', marginBottom: 56 }}>
        <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '.08em', color: 'var(--color-subtle)', textTransform: 'uppercase', marginBottom: 14 }}>
          {t.pricing.eyebrow}
        </div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px,4vw,42px)', fontWeight: 800, margin: 0, letterSpacing: '-.01em' }}>
          {t.pricing.title}
        </h2>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(270px,1fr))',
          gap: 22,
          maxWidth: 1200,
          margin: '0 auto',
          alignItems: 'stretch',
        }}
      >
        {t.pricing.plans.map((plan) => (
          <div
            key={plan.key}
            style={{
              position: 'relative',
              background: 'linear-gradient(160deg,rgba(255,255,255,.06),rgba(255,255,255,.02))',
              border: `1px solid ${plan.badge ? 'rgba(168,133,255,.5)' : 'rgba(255,255,255,.1)'}`,
              borderRadius: 22,
              padding: '30px 26px',
              display: 'flex',
              flexDirection: 'column',
              gap: 18,
            }}
          >
            {plan.badge && (
              <div
                style={{
                  position: 'absolute',
                  top: -13,
                  left: 26,
                  background: 'var(--color-accent-gradient)',
                  color: '#fff',
                  fontSize: 11,
                  fontWeight: 700,
                  padding: '5px 14px',
                  borderRadius: 100,
                  letterSpacing: '.03em',
                }}
              >
                {plan.badge}
              </div>
            )}
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 19, marginBottom: 6 }}>
                {plan.name}
              </div>
              <div style={{ color: 'var(--color-muted)', fontSize: 13 }}>{plan.desc}</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
              {plan.originalPrice && (
                <span style={{ fontSize: 20, color: '#75708a', textDecoration: 'line-through' }}>
                  {plan.originalPrice}
                </span>
              )}
              <span style={{ fontFamily: 'var(--font-display)', fontSize: 38, fontWeight: 800 }}>{plan.price}</span>
              <span style={{ color: 'var(--color-muted)', fontSize: 14 }}>{plan.period}</span>
            </div>
            {plan.note && (
              <div style={{ fontSize: 12, color: 'var(--color-accent-purple-light)', marginTop: -12 }}>{plan.note}</div>
            )}
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 12, flex: 1 }}>
              {plan.features.map((f) => (
                <li key={f} style={{ display: 'flex', gap: 10, alignItems: 'baseline', fontSize: 14, color: '#d8d3e6' }}>
                  <span style={{ color: 'var(--color-accent-purple)', fontWeight: 800, flexShrink: 0 }}>✓</span>
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="#contacto"
              onClick={() => firePrefill({ service: plan.key })}
              style={{
                background: 'var(--color-accent-gradient)',
                color: '#fff',
                fontWeight: 700,
                fontSize: 14,
                padding: 13,
                borderRadius: 100,
                textAlign: 'center',
              }}
            >
              {plan.cta}
            </a>
          </div>
        ))}

        <div
          style={{
            background: 'rgba(255,255,255,.02)',
            border: '1.5px dashed rgba(255,255,255,.18)',
            borderRadius: 22,
            padding: '30px 26px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: 14,
            textAlign: 'center',
          }}
        >
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 19 }}>{t.pricing.quote.title}</div>
          <div style={{ color: 'var(--color-muted)', fontSize: 13, lineHeight: 1.5 }}>{t.pricing.quote.desc}</div>
          <a
            href="#contacto"
            onClick={() => firePrefill({ service: 'web' })}
            style={{
              background: 'transparent',
              border: '1.5px solid rgba(255,255,255,.25)',
              color: '#fff',
              fontWeight: 700,
              fontSize: 14,
              padding: 13,
              borderRadius: 100,
              textAlign: 'center',
            }}
          >
            {t.pricing.quote.cta}
          </a>
        </div>
      </div>
    </section>
  )
}
