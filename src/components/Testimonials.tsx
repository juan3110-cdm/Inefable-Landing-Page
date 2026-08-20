import { useTranslation } from '../hooks/useTranslation'
import { useReveal } from '../hooks/useReveal'
import type { Testimonial } from '../i18n/translations'

const BORDER_GRADIENTS = [
  'linear-gradient(135deg,#2f5fe0,#a855f7)',
  'linear-gradient(135deg,#a855f7,#e879f9)',
  'linear-gradient(135deg,#6c8aff,#a855f7)',
]

function TestimonialCard({ tm, gradient }: { tm: Testimonial; gradient: string }) {
  const reveal = useReveal<HTMLDivElement>()
  return (
    <div ref={reveal.ref} className={reveal.className} style={{ position: 'relative', padding: 2, borderRadius: 20, background: gradient }}>
      <div style={{ background: '#0c0a12', borderRadius: 19, padding: 28, height: '100%', display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div style={{ display: 'flex', gap: 3 }}>
          {[0, 1, 2, 3, 4].map((i) => (
            <svg key={i} width="15" height="15" viewBox="0 0 24 24" fill="var(--color-accent-purple-light)">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          ))}
        </div>
        <p style={{ fontSize: 15, color: '#e6ddff', lineHeight: 1.6, margin: 0, flex: 1 }}>{tm.quote}</p>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, paddingTop: 10, borderTop: '1px solid var(--color-border-soft)' }}>
          <div
            style={{
              width: 38,
              height: 38,
              borderRadius: '50%',
              background: 'var(--color-accent-gradient)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 14,
              color: '#fff',
              flexShrink: 0,
            }}
          >
            {tm.initials}
          </div>
          <div>
            <div style={{ fontSize: 13.5, fontWeight: 700, color: 'var(--color-text)' }}>{tm.name}</div>
            <div style={{ fontSize: 12, color: 'var(--color-faint)' }}>{tm.role}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const { t } = useTranslation()
  const s = t.testimonials
  const heading = useReveal<HTMLDivElement>()

  return (
    <section style={{ padding: '20px 6vw 100px', position: 'relative', zIndex: 1 }}>
      <div ref={heading.ref} className={heading.className} style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 48px' }}>
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

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 22, maxWidth: 1100, margin: '0 auto' }}>
        {s.items.map((tm, i) => (
          <TestimonialCard key={tm.name} tm={tm} gradient={BORDER_GRADIENTS[i % BORDER_GRADIENTS.length]} />
        ))}
      </div>
    </section>
  )
}
