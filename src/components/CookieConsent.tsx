import { useEffect, useState } from 'react'
import { useTranslation } from '../hooks/useTranslation'
import {
  getStoredConsent,
  saveConsent,
  OPEN_CONSENT_SETTINGS_EVENT,
  type ConsentState,
} from '../lib/consent'

const COPY = {
  es: {
    message:
      'Usamos cookies propias y de terceros para analítica y, si las aceptas, para medir campañas de publicidad. Puedes aceptarlas, rechazarlas o configurarlas.',
    acceptAll: 'Aceptar todas',
    rejectAll: 'Rechazar todas',
    configure: 'Configurar',
    save: 'Guardar preferencias',
    necessary: 'Necesarias',
    necessaryDesc: 'Imprescindibles para que la web funcione. Siempre activas.',
    analytics: 'Analítica',
    analyticsDesc: 'Nos ayuda a entender cómo se usa la web (Google Analytics).',
    marketing: 'Marketing',
    marketingDesc: 'Mide el rendimiento de anuncios (Meta Ads).',
    policyLink: 'Política de cookies',
  },
  en: {
    message:
      'We use our own and third-party cookies for analytics and, if you accept them, to measure ad campaigns. You can accept, reject, or configure them.',
    acceptAll: 'Accept all',
    rejectAll: 'Reject all',
    configure: 'Configure',
    save: 'Save preferences',
    necessary: 'Necessary',
    necessaryDesc: 'Required for the site to work. Always on.',
    analytics: 'Analytics',
    analyticsDesc: 'Helps us understand how the site is used (Google Analytics).',
    marketing: 'Marketing',
    marketingDesc: 'Measures ad performance (Meta Ads).',
    policyLink: 'Cookie policy',
  },
}

const buttonBase: React.CSSProperties = {
  flex: 1,
  minWidth: 130,
  padding: '12px 18px',
  borderRadius: 100,
  fontSize: 13.5,
  fontWeight: 700,
  cursor: 'pointer',
  border: '1px solid var(--color-border)',
}

export default function CookieConsent() {
  const { lang } = useTranslation()
  const c = COPY[lang]
  const [visible, setVisible] = useState(false)
  const [configuring, setConfiguring] = useState(false)
  const [draft, setDraft] = useState<ConsentState>({ analytics: false, marketing: false })

  useEffect(() => {
    if (!getStoredConsent()) setVisible(true)
    const onOpenSettings = () => {
      const stored = getStoredConsent()
      setDraft(stored ?? { analytics: false, marketing: false })
      setConfiguring(true)
      setVisible(true)
    }
    window.addEventListener(OPEN_CONSENT_SETTINGS_EVENT, onOpenSettings)
    return () => window.removeEventListener(OPEN_CONSENT_SETTINGS_EVENT, onOpenSettings)
  }, [])

  if (!visible) return null

  const accept = (state: ConsentState) => {
    saveConsent(state)
    setVisible(false)
    setConfiguring(false)
  }

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label={c.policyLink}
      style={{
        position: 'fixed',
        left: 16,
        right: 16,
        bottom: 16,
        zIndex: 200,
        maxWidth: 640,
        margin: '0 auto',
        background: '#111018',
        border: '1px solid var(--color-border)',
        borderRadius: 18,
        padding: 20,
        boxShadow: '0 24px 60px rgba(0,0,0,.55)',
      }}
    >
      {!configuring ? (
        <>
          <p style={{ margin: '0 0 16px', fontSize: 13.5, lineHeight: 1.6, color: 'var(--color-muted)' }}>
            {c.message}{' '}
            <a href="/cookies" style={{ textDecoration: 'underline' }}>
              {c.policyLink}
            </a>
          </p>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <button
              type="button"
              onClick={() => accept({ analytics: false, marketing: false })}
              style={{ ...buttonBase, background: 'transparent', color: 'var(--color-text)' }}
            >
              {c.rejectAll}
            </button>
            <button
              type="button"
              onClick={() => {
                setDraft({ analytics: false, marketing: false })
                setConfiguring(true)
              }}
              style={{ ...buttonBase, background: 'transparent', color: 'var(--color-text)' }}
            >
              {c.configure}
            </button>
            <button
              type="button"
              onClick={() => accept({ analytics: true, marketing: true })}
              style={{ ...buttonBase, background: 'var(--color-accent-gradient)', color: '#fff', border: 'none' }}
            >
              {c.acceptAll}
            </button>
          </div>
        </>
      ) : (
        <>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 16 }}>
            <ConsentRow label={c.necessary} desc={c.necessaryDesc} checked disabled />
            <ConsentRow
              label={c.analytics}
              desc={c.analyticsDesc}
              checked={draft.analytics}
              onChange={(v) => setDraft((d) => ({ ...d, analytics: v }))}
            />
            <ConsentRow
              label={c.marketing}
              desc={c.marketingDesc}
              checked={draft.marketing}
              onChange={(v) => setDraft((d) => ({ ...d, marketing: v }))}
            />
          </div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <button
              type="button"
              onClick={() => accept({ analytics: false, marketing: false })}
              style={{ ...buttonBase, background: 'transparent', color: 'var(--color-text)' }}
            >
              {c.rejectAll}
            </button>
            <button
              type="button"
              onClick={() => accept(draft)}
              style={{ ...buttonBase, background: 'var(--color-accent-gradient)', color: '#fff', border: 'none' }}
            >
              {c.save}
            </button>
          </div>
        </>
      )}
    </div>
  )
}

function ConsentRow({
  label,
  desc,
  checked,
  disabled,
  onChange,
}: {
  label: string
  desc: string
  checked: boolean
  disabled?: boolean
  onChange?: (v: boolean) => void
}) {
  return (
    <label
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: 12,
        cursor: disabled ? 'default' : 'pointer',
        opacity: disabled ? 0.6 : 1,
      }}
    >
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.checked)}
        style={{ marginTop: 3, width: 18, height: 18, flexShrink: 0 }}
      />
      <span>
        <span style={{ display: 'block', fontWeight: 700, fontSize: 13.5 }}>{label}</span>
        <span style={{ display: 'block', fontSize: 12.5, color: 'var(--color-muted)' }}>{desc}</span>
      </span>
    </label>
  )
}
