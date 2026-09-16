import { getStoredConsent, CONSENT_CHANGED_EVENT, type ConsentState } from './consent'

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
    fbq?: ((...args: unknown[]) => void) & { callMethod?: unknown; queue?: unknown[] }
    _fbq?: unknown
  }
}

const GA4_ID = import.meta.env.VITE_GA4_ID as string | undefined
const META_PIXEL_ID = import.meta.env.VITE_META_PIXEL_ID as string | undefined

let ga4Loaded = false
let metaPixelLoaded = false

function loadScript(src: string, id: string) {
  if (document.getElementById(id)) return
  const script = document.createElement('script')
  script.id = id
  script.async = true
  script.src = src
  document.head.appendChild(script)
}

function loadGA4() {
  if (ga4Loaded || !GA4_ID) return
  ga4Loaded = true
  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer!.push(args)
  }
  window.gtag('js', new Date())
  window.gtag('config', GA4_ID, { anonymize_ip: true })
  loadScript(`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`, 'ga4-script')
}

function loadMetaPixel() {
  if (metaPixelLoaded || !META_PIXEL_ID) return
  metaPixelLoaded = true
  // Standard Meta Pixel bootstrap snippet, without document.write.
  ;(function bootstrap(f: Window, b: Document) {
    if (f.fbq) return
    const n = function (...args: unknown[]) {
      n.queue = n.queue || []
      n.queue.push(args)
    } as NonNullable<Window['fbq']>
    n.queue = []
    f.fbq = n
    if (!f._fbq) f._fbq = n
    const t = b.createElement('script')
    t.async = true
    t.src = 'https://connect.facebook.net/en_US/fbevents.js'
    b.head.appendChild(t)
  })(window, document)
  window.fbq?.('init', META_PIXEL_ID)
  window.fbq?.('track', 'PageView')
}

/** Loads whichever trackers the visitor has consented to, if the matching env var is configured. */
export function applyConsent(consent: ConsentState) {
  if (consent.analytics) loadGA4()
  if (consent.marketing) loadMetaPixel()
}

export function initTrackingFromStoredConsent() {
  const consent = getStoredConsent()
  if (consent) applyConsent(consent)
  window.addEventListener(CONSENT_CHANGED_EVENT, (e) => {
    applyConsent((e as CustomEvent<ConsentState>).detail)
  })
}

function track(eventName: string, params?: Record<string, unknown>) {
  if (ga4Loaded) window.gtag?.('event', eventName, params)
  if (metaPixelLoaded) window.fbq?.('trackCustom', eventName, params)
}

export const trackCtaClick = (label: string) => track('cta_click', { label })
export const trackFormSubmit = (service: string) => track('form_submit', { service })
export const trackWhatsAppClick = () => track('whatsapp_click')

/** True once either tracker is actually configured — used to decide whether to show the analytics toggle at all. */
export const TRACKING_CONFIGURED = Boolean(GA4_ID || META_PIXEL_ID)
