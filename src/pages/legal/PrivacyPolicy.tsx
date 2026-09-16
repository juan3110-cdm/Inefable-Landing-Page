import { useTranslation } from '../../hooks/useTranslation'
import { useDocumentHead } from '../../hooks/useDocumentHead'
import { SITE } from '../../config/site'
import LegalLayout, { LegalSection, PlaceholderNotice } from './LegalLayout'

const COPY = {
  es: {
    title: 'Política de Privacidad',
    metaDesc: 'Cómo Inefable trata tus datos personales: formulario de contacto, analítica web y contacto por WhatsApp.',
    placeholder:
      'Plantilla pendiente de completar con los datos identificativos del responsable del tratamiento (razón social, NIF y domicilio) antes de publicarse como política definitiva.',
    controller: 'Responsable del tratamiento',
    controllerBody: (
      <ul style={{ paddingLeft: 20, margin: 0, display: 'flex', flexDirection: 'column', gap: 6 }}>
        <li>Titular: [PENDIENTE — razón social o autónomo]</li>
        <li>NIF/CIF: [PENDIENTE]</li>
        <li>Domicilio: [PENDIENTE]</li>
        <li>Email de contacto: {SITE.contactEmail}</li>
      </ul>
    ),
    dataCollected: 'Qué datos tratamos y con qué finalidad',
    dataCollectedBody: (
      <ul style={{ paddingLeft: 20, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
        <li>
          <strong>Formulario de contacto:</strong> nombre, email, teléfono, país y los detalles que escribas sobre tu
          proyecto. Se usan únicamente para responder a tu consulta comercial. Se envían por email a través de{' '}
          <a href="https://resend.com" target="_blank" rel="noreferrer">Resend</a> (encargado del tratamiento) y no se
          ceden a terceros con fines distintos.
        </li>
        <li>
          <strong>Analítica web:</strong> si aceptas cookies de analítica en el banner, usamos Google Analytics para
          entender el uso agregado del sitio (páginas vistas, origen del tráfico). Ver la{' '}
          <a href="/cookies">política de cookies</a> para más detalle.
        </li>
        <li>
          <strong>Contacto por WhatsApp:</strong> si nos escribes por WhatsApp, tratamos tu número de teléfono y el
          contenido de la conversación para responder a tu consulta, conforme a las condiciones de WhatsApp/Meta.
        </li>
        <li>
          <strong>Asistente de chat del sitio:</strong> los mensajes que escribes en el chat se envían a nuestro
          servidor y a la API de Anthropic (Claude) para generar una respuesta automática. No se usan para entrenar
          modelos de terceros más allá de lo necesario para responder.
        </li>
      </ul>
    ),
    legalBasis: 'Base jurídica',
    legalBasisBody:
      'El tratamiento se basa en tu consentimiento (al enviar el formulario, escribirnos por WhatsApp, o aceptar cookies) y en nuestro interés legítimo en responder a solicitudes comerciales.',
    retention: 'Conservación',
    retentionBody:
      'Los datos del formulario de contacto se conservan mientras dure la relación comercial o hasta que solicites su supresión. Los datos analíticos se conservan según la configuración por defecto de Google Analytics.',
    rights: 'Tus derechos',
    rightsBody: `Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad escribiendo a ${SITE.contactEmail}. También puedes reclamar ante la Agencia Española de Protección de Datos (aepd.es).`,
    thirdParties: 'Encargados y proveedores',
    thirdPartiesBody:
      'Resend (envío de emails), Vercel (alojamiento), Anthropic (chat de IA) y, si aceptas cookies, Google Analytics y Meta. Cada uno trata los datos según sus propias políticas de privacidad.',
  },
  en: {
    title: 'Privacy Policy',
    metaDesc: 'How Inefable handles your personal data: contact form, web analytics, and WhatsApp contact.',
    placeholder:
      "Template pending completion with the data controller's identification details (legal name, tax ID, and address) before this is published as the final policy.",
    controller: 'Data controller',
    controllerBody: (
      <ul style={{ paddingLeft: 20, margin: 0, display: 'flex', flexDirection: 'column', gap: 6 }}>
        <li>Owner: [PENDING — legal entity or sole trader]</li>
        <li>Tax ID: [PENDING]</li>
        <li>Address: [PENDING]</li>
        <li>Contact email: {SITE.contactEmail}</li>
      </ul>
    ),
    dataCollected: 'What data we process and why',
    dataCollectedBody: (
      <ul style={{ paddingLeft: 20, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
        <li>
          <strong>Contact form:</strong> name, email, phone, country, and whatever project details you write. Used
          solely to respond to your inquiry. Sent by email via{' '}
          <a href="https://resend.com" target="_blank" rel="noreferrer">Resend</a> (data processor) and never shared
          with third parties for unrelated purposes.
        </li>
        <li>
          <strong>Web analytics:</strong> if you accept analytics cookies in the banner, we use Google Analytics to
          understand aggregate site usage (page views, traffic sources). See the{' '}
          <a href="/cookies">cookie policy</a> for details.
        </li>
        <li>
          <strong>WhatsApp contact:</strong> if you message us on WhatsApp, we process your phone number and the
          conversation content to respond, subject to WhatsApp/Meta's own terms.
        </li>
        <li>
          <strong>Site chat assistant:</strong> messages you type into the chat widget are sent to our server and to
          Anthropic's Claude API to generate a reply. They are not used to train third-party models beyond what's
          needed to respond.
        </li>
      </ul>
    ),
    legalBasis: 'Legal basis',
    legalBasisBody:
      'Processing is based on your consent (submitting the form, messaging us on WhatsApp, or accepting cookies) and our legitimate interest in responding to business inquiries.',
    retention: 'Retention',
    retentionBody:
      'Contact form data is kept for as long as the business relationship lasts, or until you request deletion. Analytics data follows Google Analytics default retention settings.',
    rights: 'Your rights',
    rightsBody: `You can exercise your rights of access, rectification, erasure, objection, restriction, and portability by writing to ${SITE.contactEmail}. You can also file a complaint with the Spanish Data Protection Agency (aepd.es).`,
    thirdParties: 'Processors and providers',
    thirdPartiesBody:
      'Resend (email delivery), Vercel (hosting), Anthropic (AI chat) and, if you accept cookies, Google Analytics and Meta. Each processes data under its own privacy policy.',
  },
}

export default function PrivacyPolicy() {
  const { lang } = useTranslation()
  const c = COPY[lang]
  useDocumentHead(`${c.title} | ${SITE.name}`, c.metaDesc, '/privacidad')

  return (
    <LegalLayout title={c.title}>
      <PlaceholderNotice text={c.placeholder} />
      <LegalSection heading={c.controller}>{c.controllerBody}</LegalSection>
      <LegalSection heading={c.dataCollected}>{c.dataCollectedBody}</LegalSection>
      <LegalSection heading={c.legalBasis}>
        <p style={{ margin: 0 }}>{c.legalBasisBody}</p>
      </LegalSection>
      <LegalSection heading={c.retention}>
        <p style={{ margin: 0 }}>{c.retentionBody}</p>
      </LegalSection>
      <LegalSection heading={c.rights}>
        <p style={{ margin: 0 }}>{c.rightsBody}</p>
      </LegalSection>
      <LegalSection heading={c.thirdParties}>
        <p style={{ margin: 0 }}>{c.thirdPartiesBody}</p>
      </LegalSection>
    </LegalLayout>
  )
}
