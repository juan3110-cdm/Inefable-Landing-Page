import { useTranslation } from '../hooks/useTranslation'
import { SITE } from '../config/site'
import { trackWhatsAppClick } from '../lib/analytics'

const PREFILL = {
  es: 'Hola Inefable, quiero información sobre vuestros servicios.',
  en: "Hi Inefable, I'd like information about your services.",
}

const LABEL = {
  es: 'Escríbenos por WhatsApp',
  en: 'Message us on WhatsApp',
}

export default function WhatsAppButton() {
  const { lang } = useTranslation()
  const href = `https://wa.me/${SITE.whatsapp.number}?text=${encodeURIComponent(PREFILL[lang])}`

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={LABEL[lang]}
      onClick={trackWhatsAppClick}
      style={{
        position: 'fixed',
        bottom: 24,
        left: 24,
        width: 56,
        height: 56,
        borderRadius: '50%',
        background: '#25D366',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 12px 32px rgba(0,0,0,.45)',
        zIndex: 100,
      }}
    >
      <svg width="30" height="30" viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12.004 2C6.486 2 2 6.486 2 12.004c0 1.86.5 3.665 1.447 5.248L2 22l4.86-1.417a9.94 9.94 0 0 0 5.144 1.417c5.518 0 10.004-4.486 10.004-10.004S17.522 2 12.004 2zm0 18.09a8.06 8.06 0 0 1-4.29-1.223l-.308-.183-3.03.883.9-2.978-.2-.311a8.086 8.086 0 1 1 6.928 3.812z" />
      </svg>
    </a>
  )
}
