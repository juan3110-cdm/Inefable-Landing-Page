import { useTranslation } from '../hooks/useTranslation'
import martiLogo from '../assets/clients/proyecto-marti.png'
import vcrLogo from '../assets/clients/vcr.png'

const CLIENTS = [
  { name: 'Proyecto Martí', src: martiLogo, shape: 'circle' as const },
  { name: 'VCR', src: vcrLogo, shape: 'card' as const },
]

export default function ClientLogos() {
  const { t } = useTranslation()

  return (
    <section style={{ padding: '20px 6vw 100px', position: 'relative', zIndex: 1 }}>
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
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 32, flexWrap: 'wrap', maxWidth: 900, margin: '0 auto' }}>
        {CLIENTS.map((client) =>
          client.shape === 'circle' ? (
            <img
              key={client.name}
              src={client.src}
              alt={client.name}
              style={{
                width: 90,
                height: 90,
                borderRadius: '50%',
                objectFit: 'cover',
                border: '1px solid var(--color-border-soft)',
              }}
            />
          ) : (
            <div
              key={client.name}
              style={{
                width: 180,
                height: 90,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#fff',
                border: '1px solid var(--color-border-soft)',
                borderRadius: 14,
                padding: 16,
              }}
            >
              <img src={client.src} alt={client.name} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
            </div>
          )
        )}
      </div>
    </section>
  )
}
