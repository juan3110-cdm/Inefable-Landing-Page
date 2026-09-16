import { useTranslation } from '../../hooks/useTranslation'
import { useDocumentHead } from '../../hooks/useDocumentHead'
import { SITE } from '../../config/site'
import { openConsentSettings } from '../../lib/consent'
import LegalLayout, { LegalSection } from './LegalLayout'

const COPY = {
  es: {
    title: 'Política de Cookies',
    metaDesc: 'Qué cookies usa Inefable, para qué sirven y cómo puedes gestionarlas o retirar tu consentimiento.',
    what: '¿Qué son las cookies?',
    whatBody:
      'Son pequeños archivos que un sitio web guarda en tu navegador para recordar información, como tus preferencias de idioma o si has aceptado esta misma política.',
    manage: 'Gestionar mis preferencias',
    manageBody: 'Puedes cambiar tu elección en cualquier momento.',
    manageButton: 'Abrir preferencias de cookies',
    table: 'Cookies que usamos',
    cols: ['Categoría', 'Finalidad', 'Proveedor', 'Duración'],
    rows: [
      ['Necesarias', 'Recordar tu idioma y tu elección de cookies', SITE.name, 'Persistente (localStorage)'],
      ['Analítica (opcional)', 'Medir visitas y uso agregado del sitio', 'Google Analytics', 'Hasta 14 meses'],
      ['Marketing (opcional)', 'Medir el rendimiento de campañas de publicidad', 'Meta (Facebook/Instagram)', 'Hasta 90 días'],
    ],
  },
  en: {
    title: 'Cookie Policy',
    metaDesc: 'Which cookies Inefable uses, what they do, and how to manage or withdraw your consent.',
    what: 'What are cookies?',
    whatBody:
      "They're small files a website stores in your browser to remember information, like your language preference or whether you've accepted this policy.",
    manage: 'Manage my preferences',
    manageBody: 'You can change your choice at any time.',
    manageButton: 'Open cookie preferences',
    table: 'Cookies we use',
    cols: ['Category', 'Purpose', 'Provider', 'Duration'],
    rows: [
      ['Necessary', 'Remember your language and cookie choice', SITE.name, 'Persistent (localStorage)'],
      ['Analytics (optional)', 'Measure visits and aggregate site usage', 'Google Analytics', 'Up to 14 months'],
      ['Marketing (optional)', 'Measure ad campaign performance', 'Meta (Facebook/Instagram)', 'Up to 90 days'],
    ],
  },
}

export default function CookiePolicy() {
  const { lang } = useTranslation()
  const c = COPY[lang]
  useDocumentHead(`${c.title} | ${SITE.name}`, c.metaDesc, '/cookies')

  return (
    <LegalLayout title={c.title}>
      <LegalSection heading={c.what}>
        <p style={{ margin: 0 }}>{c.whatBody}</p>
      </LegalSection>
      <LegalSection heading={c.table}>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13.5 }}>
            <thead>
              <tr>
                {c.cols.map((col) => (
                  <th
                    key={col}
                    style={{ textAlign: 'left', padding: '10px 12px', borderBottom: '1px solid var(--color-border)', color: 'var(--color-text)' }}
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {c.rows.map((row) => (
                <tr key={row[0]}>
                  {row.map((cell, i) => (
                    <td key={i} style={{ padding: '10px 12px', borderBottom: '1px solid var(--color-border-soft)' }}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </LegalSection>
      <LegalSection heading={c.manage}>
        <p style={{ margin: '0 0 14px' }}>{c.manageBody}</p>
        <button
          type="button"
          onClick={openConsentSettings}
          style={{
            background: 'var(--color-accent-gradient)',
            color: '#fff',
            fontWeight: 700,
            fontSize: 13.5,
            padding: '12px 22px',
            borderRadius: 100,
            border: 'none',
            cursor: 'pointer',
          }}
        >
          {c.manageButton}
        </button>
      </LegalSection>
    </LegalLayout>
  )
}
