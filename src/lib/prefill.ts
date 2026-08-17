export function firePrefill(detail: {
  service?: 'web' | 'ads' | 'chatbot' | 'ai' | 'crm' | 'marketing' | 'restaurant'
  message?: string
}) {
  if (detail.service) sessionStorage.setItem('prefill-service', detail.service)
  if (detail.message) sessionStorage.setItem('prefill-message', detail.message)
  window.dispatchEvent(new CustomEvent('inefable:prefill', { detail }))
}
