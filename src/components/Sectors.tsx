import { useState } from 'react'
import { useTranslation } from '../hooks/useTranslation'
import { useReveal } from '../hooks/useReveal'

export default function Sectors() {
  const { t } = useTranslation()
  const s = t.sectors
  const [activeKey, setActiveKey] = useState(s.items[0]?.key)
  const heading = useReveal<HTMLDivElement>()
  const tabs = useReveal<HTMLDivElement>()

  const active = s.items.find((item) => item.key === activeKey) ?? s.items[0]

  return (
    <section id="sectores" style={{ padding: '20px 6vw 100px', position: 'relative', zIndex: 1 }}>
      <div ref={heading.ref} className={heading.className} style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 44px' }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            background: 'rgba(168,133,255,.12)',
            border: '1px solid rgba(168,133,255,.3)',
            color: 'var(--color-accent-purple-light)',
            fontSize: 12.5,
            fontWeight: 700,
            padding: '6px 15px',
            borderRadius: 100,
            marginBottom: 22,
          }}
        >
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--color-accent-purple-light)', animation: 'pulseDot 2s ease-in-out infinite' }} />
          {s.eyebrow}
        </div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(26px,4.5vw,42px)', fontWeight: 800, lineHeight: 1.15, letterSpacing: '-.01em', margin: '0 0 14px' }}>
          {s.titleA}
          <br />
          <span style={{ background: 'var(--color-accent-gradient-2)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>{s.titleB}</span>
        </h2>
        <p style={{ color: 'var(--color-muted)', fontSize: 15, margin: 0 }}>{s.subtitle}</p>
      </div>

      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        <div ref={tabs.ref} className={tabs.className} style={{ display: 'flex', gap: 10, overflowX: 'auto', paddingBottom: 14, marginBottom: 28 }}>
          {s.items.map((item) => {
            const isActive = item.key === activeKey
            return (
              <button
                key={item.key}
                type="button"
                onClick={() => setActiveKey(item.key)}
                style={{
                  flexShrink: 0,
                  whiteSpace: 'nowrap',
                  fontSize: 14,
                  fontWeight: 700,
                  padding: '11px 20px',
                  borderRadius: 100,
                  cursor: 'pointer',
                  background: isActive ? 'var(--color-accent-gradient)' : 'transparent',
                  color: isActive ? '#fff' : '#cfc9dd',
                  border: `1px solid ${isActive ? 'transparent' : 'rgba(255,255,255,.15)'}`,
                }}
              >
                {item.label}
              </button>
            )
          })}
        </div>

        <div style={{ background: 'linear-gradient(160deg,rgba(255,255,255,.05),rgba(255,255,255,.02))', border: '1px solid rgba(255,255,255,.09)', borderRadius: 22, padding: 36 }}>
          <div style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '.05em', color: 'var(--color-accent-purple-light)', textTransform: 'uppercase', marginBottom: 10 }}>
            {s.problemLabel}
          </div>
          <p style={{ fontSize: 17, color: 'var(--color-text)', lineHeight: 1.5, margin: '0 0 26px', maxWidth: 640 }}>{active.problem}</p>

          <div style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '.05em', color: 'var(--color-accent-purple-light)', textTransform: 'uppercase', marginBottom: 14 }}>
            {s.solutionLabel}
          </div>
          <ul style={{ listStyle: 'none', margin: '0 0 30px', padding: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
            {active.bullets.map((b) => (
              <li key={b} style={{ display: 'flex', gap: 10, alignItems: 'baseline', fontSize: 14.5, color: '#d8d3e6' }}>
                <span style={{ color: 'var(--color-accent-purple)', fontWeight: 800, flexShrink: 0 }}>✓</span>
                {b}
              </li>
            ))}
          </ul>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, borderTop: '1px solid var(--color-border-soft)', paddingTop: 26 }}>
            {active.highlights.map((h) => (
              <span
                key={h}
                style={{
                  fontSize: 12.5,
                  fontWeight: 600,
                  color: 'var(--color-accent-purple-light)',
                  background: 'rgba(168,133,255,.1)',
                  border: '1px solid rgba(168,133,255,.25)',
                  padding: '6px 14px',
                  borderRadius: 100,
                }}
              >
                {h}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
