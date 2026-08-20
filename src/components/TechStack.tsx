import { useTranslation } from '../hooks/useTranslation'
import { useReveal } from '../hooks/useReveal'
import { STACK_TOOLS } from '../config/stack'

const LOOP = [...STACK_TOOLS, ...STACK_TOOLS]

export default function TechStack() {
  const { t } = useTranslation()
  const s = t.stack
  const heading = useReveal<HTMLDivElement>()
  const grid = useReveal<HTMLDivElement>()

  return (
    <section id="stack" style={{ padding: '20px 6vw 100px', position: 'relative', zIndex: 1 }}>
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

      {/* mobile: marquee */}
      <div className="marquee-mask relative md:hidden">
        <div className="marquee-track flex w-max items-center gap-4">
          {LOOP.map((tool, i) => (
            <div
              key={`${tool.key}-${i}`}
              style={{
                flexShrink: 0,
                width: 120,
                height: 76,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border-soft)',
                borderRadius: 14,
              }}
            >
              <div style={{ width: 30, height: 30, borderRadius: 9, background: tool.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 6 }}>
                <img src={tool.logo} alt={tool.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
              <span style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 11 }}>{tool.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* desktop: grid */}
      <div ref={grid.ref} className={`${grid.className} hidden md:grid`} style={{ maxWidth: 1080, margin: '0 auto', gridTemplateColumns: 'repeat(6,1fr)', gap: 14 }}>
        {STACK_TOOLS.map((tool) => (
          <div
            key={tool.key}
            className="group"
            style={{
              aspectRatio: '1',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 10,
              background: 'rgba(255,255,255,.035)',
              border: '1px solid var(--color-border-soft)',
              borderRadius: 16,
              transition: 'border-color .3s, box-shadow .3s, transform .3s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,.3)'
              e.currentTarget.style.boxShadow = `0 0 30px ${tool.glow}`
              e.currentTarget.style.transform = 'translateY(-3px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-border-soft)'
              e.currentTarget.style.boxShadow = 'none'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            <div style={{ width: 42, height: 42, borderRadius: 11, background: tool.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 9 }}>
              <img src={tool.logo} alt={tool.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13, color: 'var(--color-muted)' }}>{tool.name}</span>
            <span style={{ position: 'absolute', top: 10, right: 12, fontFamily: 'monospace', fontSize: 10, color: 'var(--color-faint)' }}>
              {s.categories[tool.categoryKey]}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
