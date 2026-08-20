import { useState } from 'react'
import { useTranslation } from '../hooks/useTranslation'
import { firePrefill } from '../lib/prefill'

const STORAGE_KEY = 'inefable-announcement-dismissed'

function readDismissed() {
  try {
    return localStorage.getItem(STORAGE_KEY) === '1'
  } catch {
    return false
  }
}

export default function AnnouncementBar() {
  const { t } = useTranslation()
  const a = t.announcement
  const [dismissed, setDismissed] = useState(readDismissed)

  if (!a.enabled || dismissed) return null

  const close = () => {
    setDismissed(true)
    try {
      localStorage.setItem(STORAGE_KEY, '1')
    } catch {
      /* localStorage unavailable, dismissal just won't persist */
    }
  }

  return (
    <div style={{ background: 'var(--color-accent-gradient-2)', position: 'relative' }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '9px 44px',
          minHeight: 15,
        }}
      >
        <a
          href="#contacto"
          onClick={() => firePrefill({ message: a.text })}
          style={{
            display: 'block',
            maxWidth: '100%',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            color: '#fff',
            fontSize: 'clamp(11.5px, 3vw, 13px)',
            fontWeight: 700,
            textDecoration: 'none',
          }}
        >
          {a.text}
          <span style={{ textDecoration: 'underline', textUnderlineOffset: 2, marginLeft: 8 }}>{a.ctaLabel} →</span>
        </a>
      </div>
      <button
        onClick={close}
        aria-label={a.closeLabel}
        style={{
          position: 'absolute',
          right: 12,
          top: '50%',
          transform: 'translateY(-50%)',
          width: 22,
          height: 22,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'rgba(255,255,255,.16)',
          border: 'none',
          borderRadius: '50%',
          color: '#fff',
          fontSize: 13,
          lineHeight: 1,
          cursor: 'pointer',
          flexShrink: 0,
        }}
      >
        ×
      </button>
    </div>
  )
}
