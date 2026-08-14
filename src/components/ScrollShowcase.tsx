import { useTranslation } from '../hooks/useTranslation'
import { ContainerScroll } from './ui/container-scroll-animation'

export default function ScrollShowcase() {
  const { t } = useTranslation()

  return (
    <section style={{ position: 'relative', zIndex: 1, overflow: 'hidden' }}>
      <ContainerScroll
        titleComponent={
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
        }
      >
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          <div style={{ display: 'flex', gap: 8, padding: '14px 18px', background: '#1c1c28', flexShrink: 0 }}>
            <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#ff5f57', display: 'inline-block' }} />
            <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#febc2e', display: 'inline-block' }} />
            <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#28c840', display: 'inline-block' }} />
          </div>
          <video
            src="/video/hero-scroll.mp4"
            autoPlay
            muted
            loop
            playsInline
            style={{ width: '100%', flex: 1, objectFit: 'cover', display: 'block' }}
          />
        </div>
      </ContainerScroll>
    </section>
  )
}
