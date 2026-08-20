import type { VercelRequest, VercelResponse } from '@vercel/node'
import Anthropic, { APIError } from '@anthropic-ai/sdk'
import { getClientIp, isRateLimited } from './_lib/rateLimit.js'

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

// Rule-based fallback used while ANTHROPIC_API_KEY isn't configured yet, so the
// widget still answers common questions instead of showing an error.
const EN_HINTS = /\b(the|hi|hello|services|price|cost|how|what|process|work|contact|quote|proposal)\b/i

function isEnglish(text: string): boolean {
  return EN_HINTS.test(text) && !/[áéíóúñ¿¡]/i.test(text)
}

function basicReply(messages: ChatMessage[]): string {
  const last = messages[messages.length - 1]?.content.toLowerCase() ?? ''
  const en = isEnglish(last)

  if (/servici|ofrec|hac[eé]n|que? hac|service|offer/.test(last)) {
    return en
      ? 'We build custom websites, manage Meta/Google Ads, and set up AI automations to help your business grow. Want details on any of these?'
      : 'Hacemos webs a medida, gestionamos publicidad en Meta y Google Ads, y montamos automatizaciones con IA para hacer crecer tu negocio. ¿Sobre cuál quieres más detalle?'
  }
  if (/proces|como trabaj|pasos|steps|process|how.*work/.test(last)) {
    return en
      ? 'Our process: confirm payment → research your business → build the site → show you a live draft → refine with your feedback (up to 3 rounds included) → launch. The site is yours.'
      : 'Nuestro proceso: confirmamos el pago → investigamos tu negocio → construimos la web → te enseñamos un borrador en vivo → afinamos con tu feedback (hasta 3 rondas incluidas) → publicamos. La web es tuya.'
  }
  if (/precio|cuesta|coste|tarifa|price|cost|budget|presupuesto/.test(last)) {
    return en
      ? "Pricing depends on your project's scope, so I can't quote an exact number here — but our team will confirm it with you right away. Want to leave your info in the contact form below?"
      : 'El precio depende del alcance de tu proyecto, así que no puedo darte un número exacto aquí — pero el equipo te lo confirma al momento. ¿Nos dejas tus datos en el formulario de contacto de abajo?'
  }
  if (/pago|pagar|transfer|payment|pay\b/.test(last)) {
    return en
      ? 'Payment is by bank transfer only.'
      : 'El pago se hace únicamente por transferencia bancaria.'
  }
  if (/contact|hablar|propuesta|presupuesto|email|correo|proposal|quote/.test(last)) {
    return en
      ? 'You can reach the team at hola@inefable.agency, or fill out the contact form below and we\'ll get back to you within 24h.'
      : 'Puedes escribir al equipo a hola@inefable.agency, o dejar tus datos en el formulario de contacto de abajo y te respondemos en menos de 24h.'
  }
  return en
    ? "Thanks for reaching out! I'm running in basic mode right now, but I can point you to hola@inefable.agency or the contact form below for anything specific."
    : '¡Gracias por escribir! Ahora mismo estoy en modo básico, pero puedes escribir a hola@inefable.agency o dejar tus datos en el formulario de contacto de abajo para lo que necesites.'
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
  if (isRateLimited(`chat:${ip}`, { windowMs: RATE_LIMIT_WINDOW_MS, max: RATE_LIMIT_MAX })) {
    return res.status(429).json({ error: 'Too many requests. Please try again in a few minutes.' })
  }

  const { messages } = req.body as { messages?: unknown }
  if (!isValidMessages(messages)) {
    return res.status(400).json({ error: 'Invalid messages payload' })
  }

  if (!process.env.ANTHROPIC_API_KEY) {
    return res.status(200).json({ reply: basicReply(messages) })
  }

  try {
    const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })
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
    if (err instanceof APIError) {
      console.error(`[chat] Anthropic API error — status=${err.status} type=${err.type}:`, err.message, err.error)

      if (err.status === 401 || err.status === 403) {
        return res.status(500).json({ error: 'Chat service is misconfigured. Please email us at hola@inefable.agency.' })
      }
      if (err.status === 404) {
        return res.status(500).json({ error: 'Chat model is unavailable right now. Please email us at hola@inefable.agency.' })
      }
      if (err.status === 429) {
        return res.status(429).json({ error: 'The assistant is receiving too many requests. Please try again in a moment.' })
      }
      return res.status(502).json({ error: 'Chat service is temporarily unavailable. Please try again or email us at hola@inefable.agency.' })
    }

    console.error('[chat] Unexpected error:', err)
    return res.status(500).json({ error: 'Something went wrong. Please try again or email us at hola@inefable.agency.' })
  }
}
