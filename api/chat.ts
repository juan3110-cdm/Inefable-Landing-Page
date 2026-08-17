import type { VercelRequest, VercelResponse } from '@vercel/node'
import Anthropic from '@anthropic-ai/sdk'

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

// Fast + cheap by default; swap to 'claude-sonnet-5' for higher quality replies.
const MODEL = 'claude-haiku-4-5-20251001'

const MAX_MESSAGES = 20
const MAX_MESSAGE_LENGTH = 4000
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000
const RATE_LIMIT_MAX = 20

const SYSTEM_PROMPT = `Eres el asistente virtual de Inefable, una agencia de IA, diseño y desarrollo web con sede
en Madrid. Atendéis clientes en España, EE. UU., Venezuela y El Salvador.

SERVICIOS:
- Diseño y desarrollo de webs a medida: rápidas, modernas y responsive, optimizadas para
  convertir visitas en clientes.
- Gestión de publicidad en Meta (Facebook/Instagram) y Google Ads.
- Automatizaciones e integraciones con inteligencia artificial para hacer crecer el negocio.

CÓMO TRABAJAMOS (6 etapas): 1) Confirmamos el pago. 2) Investigamos tu negocio y competencia.
3) Construimos la web. 4) Te enseñamos un borrador avanzado con enlace en vivo. 5) Afinamos
con tu feedback (hasta 3 rondas incluidas). 6) Publicamos y entregamos: la web es tuya.

PAGO: únicamente por transferencia bancaria.
CONTACTO: hola@inefable.agency

ESTILO:
- Responde en el idioma del usuario (por defecto, español).
- Tono cercano, claro y profesional, sin tecnicismos innecesarios.
- Respuestas breves (2-4 frases) salvo que pidan más detalle.
- Cuando encaje, invita con naturalidad a dar el siguiente paso (pedir una propuesta o
  escribir al equipo).

CRITERIO:
- Puedes ayudar con dudas generales, pero tu prioridad es Inefable: cuando sea relevante,
  reconduce hacia cómo Inefable puede ayudar.
- No inventes datos que no conozcas (precios exactos, plazos, disponibilidad). Si te los
  piden, di que el equipo se lo confirma al momento y ofrece ponerles en contacto.
- No prometas resultados garantizados ni condiciones fuera de lo descrito.`

interface ChatMessage {
  role: 'user' | 'assistant'
  content: string
}

// Best-effort in-memory limiter. Resets on cold start / across instances,
// but caps abuse from a single warm-lambda IP within the window.
const hits = new Map<string, { count: number; resetAt: number }>()

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const entry = hits.get(ip)
  if (!entry || now > entry.resetAt) {
    hits.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS })
    return false
  }
  if (entry.count >= RATE_LIMIT_MAX) return true
  entry.count += 1
  return false
}

function getClientIp(req: VercelRequest): string {
  const forwarded = req.headers['x-forwarded-for']
  if (typeof forwarded === 'string' && forwarded.length > 0) return forwarded.split(',')[0].trim()
  return req.socket?.remoteAddress ?? 'unknown'
}

function isValidMessages(value: unknown): value is ChatMessage[] {
  if (!Array.isArray(value) || value.length === 0 || value.length > MAX_MESSAGES) return false
  return value.every(
    (m) =>
      m &&
      typeof m === 'object' &&
      (m.role === 'user' || m.role === 'assistant') &&
      typeof m.content === 'string' &&
      m.content.length > 0 &&
      m.content.length <= MAX_MESSAGE_LENGTH,
  )
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') return res.status(200).end()
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const ip = getClientIp(req)
  if (isRateLimited(ip)) {
    return res.status(429).json({ error: 'Too many requests. Please try again in a few minutes.' })
  }

  const { messages } = req.body as { messages?: unknown }
  if (!isValidMessages(messages)) {
    return res.status(400).json({ error: 'Invalid messages payload' })
  }

  try {
    const response = await anthropic.messages.create({
      model: MODEL,
      max_tokens: 1000,
      system: SYSTEM_PROMPT,
      messages,
    })

    const reply = response.content
      .filter((block): block is Anthropic.TextBlock => block.type === 'text')
      .map((block) => block.text)
      .join('\n')
      .trim()

    return res.status(200).json({ reply })
  } catch (err) {
    console.error('[chat] Anthropic error:', err)
    return res.status(500).json({ error: 'Something went wrong. Please try again.' })
  }
}
