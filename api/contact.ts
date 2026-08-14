import type { VercelRequest, VercelResponse } from '@vercel/node'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

function buildHtml(data: Record<string, string>): string {
  const serviceLabel =
    data.service === 'web'
      ? '🌐 Desarrollo Web'
      : data.service === 'ads'
        ? '📣 Gestión de Publicidad'
        : '🤖 Recepcionista IA'

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
  // CORS for local dev
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') return res.status(200).end()
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const { name, email, service } = req.body as Record<string, string>

  if (!name?.trim() || !email?.trim() || !service) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  const serviceLabel =
    service === 'web' ? 'Desarrollo Web' : service === 'ads' ? 'Gestión de Publicidad' : 'Recepcionista IA'

  try {
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
