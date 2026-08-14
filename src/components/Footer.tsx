import { useTranslation } from '../hooks/useTranslation'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer
      style={{
        borderTop: '1px solid var(--color-border-soft)',
        padding: '48px 6vw',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: 24,
        alignItems: 'center',
      }}
    >
      <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 16, opacity: 0.85, color: '#fff' }}>
        Inefable
      </span>
      <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', fontSize: 13, color: '#9a92b3' }}>
        <span>Madrid, España</span>
        <a href="https://instagram.com/inefable.ia" target="_blank" rel="noreferrer">
          @inefable.ia
        </a>
      </div>
      <div style={{ fontSize: 12, color: 'var(--color-faint)' }}>{t.footer.rights}</div>
    </footer>
  )
}
