export function firePrefill(detail: { service?: 'web' | 'ads' | 'ai'; message?: string }) {
  if (detail.service) sessionStorage.setItem('prefill-service', detail.service)
  if (detail.message) sessionStorage.setItem('prefill-message', detail.message)
  window.dispatchEvent(new CustomEvent('inefable:prefill', { detail }))
}
