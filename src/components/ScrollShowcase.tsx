import { useEffect, useRef, useState } from 'react'
import { useTranslation } from '../hooks/useTranslation'

export default function ScrollShowcase() {
  const { t } = useTranslation()
  const sectionRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight
      const start = vh
      const end = vh * 0.25
      let p = (start - rect.top) / (start - end)
      p = Math.max(0, Math.min(1, p))
      setProgress((prev) => (Math.abs(p - prev) > 0.005 ? p : prev))
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section
      ref={sectionRef}
      style={{
        padding: '20px 6vw 100px',
        position: 'relative',
        zIndex: 1,
        perspective: 1200,
        textAlign: 'center',
      }}
    >
      <div
        style={{
          maxWidth: 760,
          margin: '0 auto 8px',
          transform: `translateY(${-40 * progress}px)`,
        }}
      >
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(26px,4vw,40px)',
            fontWeight: 800,
            margin: 0,
            letterSpacing: '-.01em',
          }}
        >
          {t.scroll.titleA}
          <br />
          <span className="gradient-text">{t.scroll.titleB}</span>
        </h2>
      </div>

      <div
        style={{
          maxWidth: 980,
          margin: '-10px auto 0',
          position: 'relative',
          transform: `rotateX(${20 - 20 * progress}deg) scale(${1.05 - 0.05 * progress}) translateY(${-30 * progress}px)`,
          transformStyle: 'preserve-3d',
          border: '4px solid #3a3a46',
          borderRadius: 28,
          padding: 10,
          background: '#1a1a24',
          boxShadow: '0 50px 90px rgba(0,0,0,.55)',
        }}
      >
        <div style={{ borderRadius: 18, overflow: 'hidden', background: '#0c0c14', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', gap: 8, padding: '14px 18px', background: '#1c1c28', flexShrink: 0 }}>
            <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#ff5f57', display: 'inline-block' }} />
            <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#febc2e', display: 'inline-block' }} />
            <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#28c840', display: 'inline-block' }} />
          </div>
          <div
            style={{
              width: '100%',
              height: 420,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background:
                'radial-gradient(ellipse 80% 60% at 50% 30%, rgba(168,85,247,.18), transparent 70%), #0c0c14',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: 15,
                color: 'rgba(255,255,255,.35)',
                letterSpacing: '.02em',
              }}
            >
              inefable.es
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
