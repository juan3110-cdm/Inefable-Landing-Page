// Single source of truth for facts referenced across SEO tags, structured
// data, the cookie/legal pages, and the WhatsApp button. Update here once
// the pending items below are resolved instead of hunting through pages.

export const SITE = {
  name: 'Inefable',
  domain: 'inefableia.com',
  url: 'https://inefableia.com',
  contactEmail: 'inefableia.help@gmail.com',
  instagram: 'https://instagram.com/inefable.ia',
  instagramHandle: '@inefable.ia',
  city: 'Madrid',
  country: 'España',
  whatsapp: {
    // E.164, no spaces or symbols, for wa.me links.
    number: '34607587396',
    display: '+34 607 58 73 96',
  },
} as const

// Legal entity details were not provided when this site was built out — the
// Aviso Legal / Privacidad pages below render clearly-flagged placeholders
// instead of fabricated NIF/address data. Fill these in and re-check the
// TODOs in src/pages/legal/* before taking the site live.
export const LEGAL_ENTITY_CONFIGURED = false
