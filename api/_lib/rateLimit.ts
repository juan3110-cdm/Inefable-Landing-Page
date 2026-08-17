import type { VercelRequest } from '@vercel/node'

interface RateLimitOptions {
  windowMs: number
  max: number
}

// Best-effort in-memory limiter, shared by every endpoint that imports it.
// Resets on cold start / across instances, but caps abuse from a single
// warm-lambda IP within the window. Keyed by "<limiterName>:<ip>" so
// different endpoints don't share a counter.
const hits = new Map<string, { count: number; resetAt: number }>()

export function isRateLimited(key: string, options: RateLimitOptions): boolean {
  const now = Date.now()
  const entry = hits.get(key)
  if (!entry || now > entry.resetAt) {
    hits.set(key, { count: 1, resetAt: now + options.windowMs })
    return false
  }
  if (entry.count >= options.max) return true
  entry.count += 1
  return false
}

export function getClientIp(req: VercelRequest): string {
  const forwarded = req.headers['x-forwarded-for']
  if (typeof forwarded === 'string' && forwarded.length > 0) return forwarded.split(',')[0].trim()
  return req.socket?.remoteAddress ?? 'unknown'
}
