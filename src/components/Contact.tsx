import { useState, useEffect, type FormEvent } from 'react'
import { useTranslation } from '../hooks/useTranslation'

type ServiceType = 'web' | 'ads' | 'ai'
type FormStatus = 'idle' | 'sending' | 'success' | 'error'

interface FormData {
  name: string
  email: string
  phone: string
  country: string
  businessType: string
  hasWebsite: '' | 'yes' | 'no'
  websiteUrl: string
  currentPlatform: string
  budget: string
  message: string
}

const INITIAL: FormData = {
  name: '',
  email: '',
  phone: '',
  country: '',
  businessType: '',
  hasWebsite: '',
  websiteUrl: '',
  currentPlatform: '',
  budget: '',
  message: '',
}

const inputStyle: React.CSSProperties = {
  background: 'rgba(255,255,255,.05)',
  border: '1px solid rgba(255,255,255,.12)',
  borderRadius: 12,
  padding: '14px 16px',
  color: '#fff',
  fontSize: 14,
  fontFamily: 'inherit',
  width: '100%',
}

export default function Contact() {
  const { t } = useTranslation()
  const f = t.contact.fields
  const [service, setService] = useState<ServiceType>('web')
  const [form, setForm] = useState<FormData>(INITIAL)
  const [status, setStatus] = useState<FormStatus>('idle')

  useEffect(() => {
    const prefill = sessionStorage.getItem('prefill-service')
    if (prefill === 'web' || prefill === 'ads' || prefill === 'ai') {
      setService(prefill)
      sessionStorage.removeItem('prefill-service')
    }
  }, [])

  const set = <K extends keyof FormData>(key: K, val: FormData[K]) =>
    setForm((prev) => ({ ...prev, [key]: val }))

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus('error')
      return
    }
    setStatus('sending')
    try {
      const payload: Record<string, string> = {
        service,
        name: form.name,
        email: form.email,
        phone: form.phone,
        country: form.country,
        message: form.message,
      }
      if (service === 'web') {
        payload.businessType = form.businessType
        payload.hasWebsite = form.hasWebsite
        if (form.hasWebsite === 'yes') payload.websiteUrl = form.websiteUrl
      } else if (service === 'ads') {
        payload.currentPlatform = form.currentPlatform
        payload.budget = form.budget
      }

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!res.ok) throw new Error('Server error')
      setStatus('success')
      setForm(INITIAL)
    } catch {
      setStatus('error')
    }
  }

  const tabs: { key: ServiceType; label: string }[] = [
    { key: 'web', label: t.contact.serviceLabels.web },
    { key: 'ads', label: t.contact.serviceLabels.ads },
    { key: 'ai', label: t.contact.serviceLabels.ai },
  ]

  return (
    <section id="contacto" style={{ padding: '40px 6vw 140px', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: 640, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 44 }}>
          <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '.08em', color: 'var(--color-subtle)', textTransform: 'uppercase', marginBottom: 14 }}>
            {t.contact.eyebrow}
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px,4vw,42px)', fontWeight: 800, margin: '0 0 16px', letterSpacing: '-.01em' }}>
            {t.contact.title}
          </h2>
          <p style={{ color: 'var(--color-muted)', fontSize: 15, margin: 0 }}>{t.contact.subtitle}</p>
        </div>

        {status === 'success' ? (
          <div
            style={{
              background: 'rgba(58,196,120,.12)',
              border: '1px solid rgba(58,196,120,.4)',
              borderRadius: 18,
              padding: 36,
              textAlign: 'center',
            }}
          >
            <div style={{ fontSize: 32, marginBottom: 12 }}>✓</div>
            <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 8 }}>{t.contact.success.title}</div>
            <div style={{ color: 'var(--color-muted)', fontSize: 14 }}>{t.contact.success.body}</div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            <div
              style={{
                display: 'flex',
                background: 'rgba(255,255,255,.05)',
                border: '1px solid rgba(255,255,255,.1)',
                borderRadius: 100,
                padding: 4,
                flexWrap: 'wrap',
              }}
            >
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setService(tab.key)}
                  style={{
                    flex: 1,
                    minWidth: 110,
                    border: 'none',
                    background: service === tab.key ? 'var(--color-accent-gradient)' : 'transparent',
                    color: service === tab.key ? '#fff' : '#cfc9dd',
                    fontWeight: 700,
                    fontSize: 13,
                    padding: 11,
                    borderRadius: 100,
                    cursor: 'pointer',
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
              <input required value={form.name} onChange={(e) => set('name', e.target.value)} placeholder={f.name} style={inputStyle} />
              <input required type="email" value={form.email} onChange={(e) => set('email', e.target.value)} placeholder={f.email} style={inputStyle} />
              <input value={form.phone} onChange={(e) => set('phone', e.target.value)} placeholder={f.phone} style={inputStyle} />
              <select value={form.country} onChange={(e) => set('country', e.target.value)} style={inputStyle}>
                <option value="">{f.country}</option>
                <option value="ES">España</option>
                <option value="US">Estados Unidos</option>
                <option value="VE">Venezuela</option>
                <option value="SV">El Salvador</option>
                <option value="other">{f.countryOther}</option>
              </select>
            </div>

            {service === 'web' && (
              <>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                  <input
                    value={form.businessType}
                    onChange={(e) => set('businessType', e.target.value)}
                    placeholder={f.businessType}
                    style={inputStyle}
                  />
                  <select value={form.hasWebsite} onChange={(e) => set('hasWebsite', e.target.value as FormData['hasWebsite'])} style={inputStyle}>
                    <option value="">{f.hasWebsite}</option>
                    <option value="yes">{f.yes}</option>
                    <option value="no">{f.no}</option>
                  </select>
                </div>
                {form.hasWebsite === 'yes' && (
                  <input
                    value={form.websiteUrl}
                    onChange={(e) => set('websiteUrl', e.target.value)}
                    placeholder={f.websiteUrl}
                    style={inputStyle}
                  />
                )}
              </>
            )}

            {service === 'ads' && (
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                <select value={form.currentPlatform} onChange={(e) => set('currentPlatform', e.target.value)} style={inputStyle}>
                  <option value="">{f.currentPlatform}</option>
                  <option value="meta">Meta Ads</option>
                  <option value="google">Google Ads</option>
                  <option value="none">{f.platformNone}</option>
                </select>
                <input value={form.budget} onChange={(e) => set('budget', e.target.value)} placeholder={f.budget} style={inputStyle} />
              </div>
            )}

            <textarea
              required
              rows={4}
              value={form.message}
              onChange={(e) => set('message', e.target.value)}
              placeholder={f.message}
              style={{ ...inputStyle, resize: 'vertical' }}
            />

            {status === 'error' && (
              <div style={{ color: '#ff8a8a', fontSize: 13 }}>{t.contact.error}</div>
            )}

            <button
              type="submit"
              disabled={status === 'sending'}
              style={{
                background: 'var(--color-accent-gradient)',
                color: '#fff',
                fontWeight: 700,
                fontSize: 15,
                padding: 16,
                borderRadius: 100,
                border: 'none',
                cursor: 'pointer',
                marginTop: 6,
                opacity: status === 'sending' ? 0.6 : 1,
              }}
            >
              {status === 'sending' ? t.contact.sending : t.contact.submit}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
