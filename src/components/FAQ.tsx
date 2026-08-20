import { useState } from 'react'
import { useTranslation } from '../hooks/useTranslation'
import { useReveal } from '../hooks/useReveal'
import { firePrefill } from '../lib/prefill'

export default function FAQ() {
  const { t } = useTranslation()
  const s = t.faq
  const [openIndex, setOpenIndex] = useState(0)
  const heading = useReveal<HTMLDivElement>()
  const cta = useReveal<HTMLDivElement>()

  return (
    <section id="faq" style={{ padding: '20px 6vw 110px', position: 'relative', zIndex: 1 }}>
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

      <div style={{ maxWidth: 760, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 12 }}>
        {s.items.map((item, i) => {
          const open = i === openIndex
          return (
            <div
              key={item.q}
              style={{
                background: 'var(--color-surface)',
                border: `1px solid ${open ? 'rgba(168,133,255,.4)' : 'var(--color-border-soft)'}`,
                borderRadius: 16,
                overflow: 'hidden',
                transition: 'border-color .25s',
              }}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(open ? -1 : i)}
                aria-expanded={open}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 16,
                  padding: '20px 22px',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                }}
              >
                <span style={{ fontSize: 15.5, fontWeight: 700, color: 'var(--color-text)' }}>{item.q}</span>
                <span
                  style={{
                    flexShrink: 0,
                    width: 22,
                    height: 22,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform .3s',
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent-purple-light)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </span>
              </button>
              <div style={{ maxHeight: open ? 400 : 0, overflow: 'hidden', transition: 'max-height .35s cubic-bezier(.16,1,.3,1)' }}>
                <p style={{ margin: 0, padding: '0 22px 22px', fontSize: 14.5, color: 'var(--color-muted)', lineHeight: 1.6 }}>{item.a}</p>
              </div>
            </div>
          )
        })}
      </div>

      <div ref={cta.ref} className={cta.className} style={{ textAlign: 'center', marginTop: 40, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
        <p style={{ color: 'var(--color-muted)', fontSize: 14.5, margin: 0 }}>{s.ctaText}</p>
        <a
          href="#contacto"
          onClick={() => firePrefill({ message: s.ctaText })}
          style={{ background: 'var(--color-accent-gradient)', color: '#fff', fontSize: 14, fontWeight: 700, padding: '12px 24px', borderRadius: 100 }}
        >
          {s.ctaLink}
        </a>
      </div>
    </section>
  )
}
