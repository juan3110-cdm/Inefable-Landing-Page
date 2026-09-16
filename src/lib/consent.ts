export interface ConsentState {
  analytics: boolean
  marketing: boolean
}

const STORAGE_KEY = 'inefable-consent'
export const CONSENT_CHANGED_EVENT = 'inefable:consent-changed'
export const OPEN_CONSENT_SETTINGS_EVENT = 'inefable:open-consent-settings'

export function getStoredConsent(): ConsentState | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw)
    if (typeof parsed.analytics === 'boolean' && typeof parsed.marketing === 'boolean') return parsed
    return null
  } catch {
    return null
  }
}

export function saveConsent(state: ConsentState) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  } catch {
    // localStorage unavailable (private mode / blocked) — consent just won't persist across visits.
  }
  window.dispatchEvent(new CustomEvent<ConsentState>(CONSENT_CHANGED_EVENT, { detail: state }))
}

export function openConsentSettings() {
  window.dispatchEvent(new Event(OPEN_CONSENT_SETTINGS_EVENT))
}
