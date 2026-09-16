import { useTranslation } from '../../hooks/useTranslation'
import { useDocumentHead } from '../../hooks/useDocumentHead'
import { SITE } from '../../config/site'
import LegalLayout, { LegalSection, PlaceholderNotice } from './LegalLayout'

const COPY = {
  es: {
    title: 'Aviso Legal',
    metaDesc: 'Aviso legal de Inefable: información sobre el responsable del sitio web, condiciones de uso y propiedad intelectual.',
    placeholder:
      'Esta página es una plantilla pendiente de completar con los datos reales de la entidad titular (razón social, NIF/CIF y domicilio). No cumple LSSI-CE hasta que se rellenen esos campos — no publicar así en producción.',
    identification: 'Datos identificativos',
    identificationBody: (
      <ul style={{ paddingLeft: 20, margin: 0, display: 'flex', flexDirection: 'column', gap: 6 }}>
        <li>Nombre comercial: {SITE.name}</li>
        <li>Titular / razón social: [PENDIENTE — nombre legal o autónomo]</li>
        <li>NIF/CIF: [PENDIENTE]</li>
        <li>Domicilio social: [PENDIENTE]</li>
        <li>Correo de contacto: {SITE.contactEmail}</li>
        <li>Inscripción registral (si aplica): [PENDIENTE]</li>
      </ul>
    ),
    purpose: 'Objeto',
    purposeBody:
      `Este sitio web (${SITE.url}) tiene como finalidad informar sobre los servicios de desarrollo web, publicidad y automatización con IA prestados por ${SITE.name}, así como facilitar el contacto comercial con clientes potenciales.`,
    ip: 'Propiedad intelectual e industrial',
    ipBody:
      'Los contenidos del sitio (textos, diseño, código, logotipos e imágenes) son propiedad de su titular o se usan con la debida autorización, y están protegidos por la normativa de propiedad intelectual e industrial. Queda prohibida su reproducción total o parcial sin autorización expresa.',
    liability: 'Condiciones de uso y responsabilidad',
    liabilityBody:
      'El acceso a este sitio atribuye la condición de usuario e implica la aceptación de las condiciones aquí recogidas. El titular no se hace responsable de los daños derivados de un uso inadecuado del sitio ni de la información contenida en sitios de terceros enlazados.',
    law: 'Legislación aplicable',
    lawBody:
      'Este aviso legal se rige por la legislación española, en particular la Ley 34/2002 de Servicios de la Sociedad de la Información y Comercio Electrónico (LSSI-CE) y el Reglamento (UE) 2016/679 (RGPD).',
  },
  en: {
    title: 'Legal Notice',
    metaDesc: "Legal notice for Inefable: information about the site's owner, terms of use, and intellectual property.",
    placeholder:
      "This page is a template pending completion with the owning entity's real details (legal name, tax ID, and registered address). It does not meet Spanish LSSI-CE requirements until those fields are filled in — do not publish as-is.",
    identification: 'Identification details',
    identificationBody: (
      <ul style={{ paddingLeft: 20, margin: 0, display: 'flex', flexDirection: 'column', gap: 6 }}>
        <li>Trade name: {SITE.name}</li>
        <li>Legal owner: [PENDING — legal entity or sole trader name]</li>
        <li>Tax ID (NIF/CIF): [PENDING]</li>
        <li>Registered address: [PENDING]</li>
        <li>Contact email: {SITE.contactEmail}</li>
        <li>Commercial registry entry (if applicable): [PENDING]</li>
      </ul>
    ),
    purpose: 'Purpose',
    purposeBody: `This website (${SITE.url}) informs visitors about the web development, advertising, and AI automation services provided by ${SITE.name}, and facilitates commercial contact with prospective clients.`,
    ip: 'Intellectual and industrial property',
    ipBody:
      "The site's content (text, design, code, logos, and images) is owned by its rightful owner or used under proper authorization, and is protected by intellectual and industrial property law. Reproduction, in whole or in part, without express authorization is prohibited.",
    liability: 'Terms of use and liability',
    liabilityBody:
      'Accessing this site grants user status and implies acceptance of the terms herein. The owner is not liable for damages arising from improper use of the site or from information found on linked third-party sites.',
    law: 'Governing law',
    lawBody:
      'This legal notice is governed by Spanish law, in particular Law 34/2002 on Information Society Services and Electronic Commerce (LSSI-CE) and Regulation (EU) 2016/679 (GDPR).',
  },
}

export default function AvisoLegal() {
  const { lang } = useTranslation()
  const c = COPY[lang]
  useDocumentHead(`${c.title} | ${SITE.name}`, c.metaDesc, '/aviso-legal')

  return (
    <LegalLayout title={c.title}>
      <PlaceholderNotice text={c.placeholder} />
      <LegalSection heading={c.identification}>{c.identificationBody}</LegalSection>
      <LegalSection heading={c.purpose}>
        <p style={{ margin: 0 }}>{c.purposeBody}</p>
      </LegalSection>
      <LegalSection heading={c.ip}>
        <p style={{ margin: 0 }}>{c.ipBody}</p>
      </LegalSection>
      <LegalSection heading={c.liability}>
        <p style={{ margin: 0 }}>{c.liabilityBody}</p>
      </LegalSection>
      <LegalSection heading={c.law}>
        <p style={{ margin: 0 }}>{c.lawBody}</p>
      </LegalSection>
    </LegalLayout>
  )
}
