import { useTranslation } from '../hooks/useTranslation'
import { CLIENTS } from '../config/clients'

const LOOP = [...CLIENTS, ...CLIENTS]

export default function ClientLogos() {
  const { t } = useTranslation()

  return (
    <section style={{ padding: '20px 0 100px', position: 'relative', zIndex: 1, overflow: 'hidden' }}>
      <div
        style={{
          textAlign: 'center',
          fontSize: 13,
          fontWeight: 700,
          letterSpacing: '.08em',
          color: 'var(--color-faint)',
          textTransform: 'uppercase',
          marginBottom: 32,
        }}
      >
        {t.logosLabel}
      </div>

      <div className="marquee-mask relative">
        <div className="marquee-track flex w-max items-center gap-16">
          {LOOP.map((client, i) =>
            client.shape === 'circle' ? (
              <img
                key={`${client.name}-${i}`}
                src={client.src}
                alt={client.name}
                className="h-[90px] w-[90px] shrink-0 grayscale opacity-50 transition-all duration-500 hover:grayscale-0 hover:opacity-100"
                style={{ borderRadius: '50%', objectFit: 'cover', border: '1px solid var(--color-border-soft)' }}
              />
            ) : (
              <div
                key={`${client.name}-${i}`}
                className="flex h-[90px] w-[180px] shrink-0 items-center justify-center grayscale opacity-50 transition-all duration-500 hover:grayscale-0 hover:opacity-100"
                style={{ background: '#fff', border: '1px solid var(--color-border-soft)', borderRadius: 14, padding: 16 }}
              >
                <img src={client.src} alt={client.name} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  )
}
