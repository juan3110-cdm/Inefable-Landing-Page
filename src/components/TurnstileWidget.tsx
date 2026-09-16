import { useEffect, useRef } from 'react'

declare global {
  interface Window {
    turnstile?: {
      render: (container: HTMLElement, options: { sitekey: string; callback: (token: string) => void; theme?: string }) => string
      reset: (widgetId?: string) => void
    }
    onTurnstileLoad?: () => void
  }
}

const SITE_KEY = import.meta.env.VITE_TURNSTILE_SITE_KEY as string | undefined
const SCRIPT_ID = 'cf-turnstile-script'

/**
 * Renders a Cloudflare Turnstile challenge only when VITE_TURNSTILE_SITE_KEY
 * is configured — no key, no widget, no network request. Set the env var in
 * Vercel once you have a site key from https://dash.cloudflare.com/?to=/:account/turnstile
 * and set the matching TURNSTILE_SECRET_KEY for server-side verification in api/contact.ts.
 */
export default function TurnstileWidget({ onToken }: { onToken: (token: string) => void }) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!SITE_KEY || !containerRef.current) return

    const render = () => {
      if (window.turnstile && containerRef.current) {
        window.turnstile.render(containerRef.current, {
          sitekey: SITE_KEY,
          theme: 'dark',
          callback: onToken,
        })
      }
    }

    if (window.turnstile) {
      render()
      return
    }

    if (!document.getElementById(SCRIPT_ID)) {
      window.onTurnstileLoad = render
      const script = document.createElement('script')
      script.id = SCRIPT_ID
      script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onTurnstileLoad'
      script.async = true
      document.head.appendChild(script)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!SITE_KEY) return null
  return <div ref={containerRef} style={{ margin: '4px 0' }} />
}
