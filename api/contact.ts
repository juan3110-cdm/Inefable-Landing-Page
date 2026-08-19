import type { VercelRequest, VercelResponse } from '@vercel/node'
import { Resend } from 'resend'
import { getClientIp, isRateLimited } from './_lib/rateLimit'

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000
const RATE_LIMIT_MAX = 5

// Real origins this endpoint should ever be called from. inefable.es is
// deliberately not here — it currently serves an unrelated business.
const ALLOWED_ORIGINS = ['https://inefable-landing-page.vercel.app']

function applyCors(req: VercelRequest, res: VercelResponse) {
  const origin = req.headers.origin
  if (origin && ALLOWED_ORIGINS.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin)
  }
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
}

const SERVICE_LABELS: Record<string, { emoji: string; label: string }> = {
  web: { emoji: '🌐', label: 'Desarrollo Web' },
  ads: { emoji: '📣', label: 'Gestión de Publicidad' },
  chatbot: { emoji: '🤖', label: 'Chatbot IA' },
  ai: { emoji: '📞', label: 'Recepcionista IA' },
  crm: { emoji: '📇', label: 'CRM y Automatización' },
  marketing: { emoji: '📈', label: 'Marketing Automatizado' },
  restaurant: { emoji: '🍽️', label: 'Automatización para Restaurantes' },
}
const UNKNOWN_SERVICE = { emoji: '📩', label: 'Consulta general' }

function getServiceLabel(service: string | undefined) {
  return (service && SERVICE_LABELS[service]) || UNKNOWN_SERVICE
}

function buildHtml(data: Record<string, string>): string {
  const { emoji, label } = getServiceLabel(data.service)
  const serviceLabel = `${emoji} ${label}`

  const rows = Object.entries(data)
    .filter(([k, v]) => k !== 'service' && v)
    .map(
      ([k, v]) => `
      <tr>
        <td style="padding:8px 12px;color:#888;font-size:13px;text-transform:capitalize;white-space:nowrap;border-bottom:1px solid #222">
          ${k.replace(/([A-Z])/g, ' $1').trim()}
        </td>
        <td style="padding:8px 12px;font-size:13px;border-bottom:1px solid #222">${v}</td>
      </tr>`,
    )
    .join('')

  return `
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;background:#0a0a0a;color:#fafafa;font-family:system-ui,sans-serif">
  <div style="max-width:520px;margin:40px auto;padding:0 20px">
    <p style="font-size:22px;font-weight:700;margin-bottom:4px">Nuevo lead · Inefable</p>
    <p style="font-size:14px;color:#737373;margin-bottom:24px">${serviceLabel}</p>
    <table style="width:100%;border-collapse:collapse;background:#141414;border-radius:12px;overflow:hidden;border:1px solid #232323">
      ${rows}
    </table>
    <p style="font-size:12px;color:#404040;margin-top:24px">
      Enviado desde inefable.es
    </p>
  </div>
</body>
</html>`
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  applyCors(req, res)

  if (req.method === 'OPTIONS') return res.status(200).end()
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const ip = getClientIp(req)
  if (isRateLimited(`contact:${ip}`, { windowMs: RATE_LIMIT_WINDOW_MS, max: RATE_LIMIT_MAX })) {
    return res.status(429).json({ error: 'Too many requests. Please try again in a few minutes.' })
  }

  const { name, email, service } = req.body as Record<string, string>

  if (!name?.trim() || !email?.trim() || !service) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  const { label: serviceLabel } = getServiceLabel(service)

  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    await resend.emails.send({
      from: 'Inefable <leads@inefable.es>',
      to: [process.env.CONTACT_EMAIL ?? 'hola@inefable.es'],
      replyTo: email.trim(),
      subject: `[${serviceLabel}] Nuevo lead — ${name.trim()}`,
      html: buildHtml(req.body as Record<string, string>),
    })

    return res.status(200).json({ success: true })
  } catch (err) {
    console.error('[contact] Resend error:', err)
    return res.status(500).json({ error: 'Failed to send email' })
  }
}
