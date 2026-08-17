import { useTranslation } from '../hooks/useTranslation'

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section
      style={{
        position: 'relative',
        padding: '120px 6vw 100px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: -120,
          left: '8%',
          width: 420,
          height: 420,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(47,95,224,.45), transparent 70%)',
          filter: 'blur(30px)',
          animation: 'floatA 14s ease-in-out infinite',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: -160,
          right: '6%',
          width: 460,
          height: 460,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(168,85,247,.4), transparent 70%)',
          filter: 'blur(30px)',
          animation: 'floatB 16s ease-in-out infinite',
          pointerEvents: 'none',
        }}
      />

      <div
        className="relative z-[1] flex flex-col items-center"
        style={{ maxWidth: 820 }}
      >
        <div
          className="fadeup"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            background: 'rgba(168,133,255,.12)',
            border: '1px solid rgba(168,133,255,.3)',
            color: '#c9a9ff',
            fontSize: 13,
            fontWeight: 600,
            padding: '7px 16px',
            borderRadius: 100,
            marginBottom: 28,
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: '50%',
              background: '#c9a9ff',
              animation: 'pulseDot 2s ease-in-out infinite',
            }}
          />
          {t.hero.eyebrow}
        </div>

        <h1
          className="fadeup"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(38px,6vw,68px)',
            lineHeight: 1.05,
            fontWeight: 800,
            margin: '0 0 26px',
            letterSpacing: '-.02em',
          }}
        >
          {t.hero.titleA} <span className="gradient-text">{t.hero.titleB}</span>
        </h1>

        <p
          className="fadeup"
          style={{ fontSize: 19, color: 'var(--color-muted)', lineHeight: 1.6, maxWidth: 600, margin: '0 0 40px' }}
        >
          {t.hero.subtitle}
        </p>

        <div
          className="fadeup"
          style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}
        >
          <a
            href="#contacto"
            style={{
              background: '#fff',
              color: '#0b0b12',
              fontSize: 15,
              fontWeight: 700,
              padding: '14px 26px',
              borderRadius: 100,
              transition: 'transform .2s',
            }}
          >
            {t.hero.ctaPrimary}
          </a>
          <a
            href="#servicios"
            style={{
              background: 'rgba(255,255,255,.06)',
              color: '#fff',
              fontSize: 15,
              fontWeight: 700,
              padding: '14px 26px',
              borderRadius: 100,
              border: '1px solid rgba(255,255,255,.18)',
            }}
          >
            {t.hero.ctaSecondary}
          </a>
        </div>
      </div>
    </section>
  )
}
