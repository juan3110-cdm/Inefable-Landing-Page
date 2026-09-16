# Inefable — Landing Page

## Environment variables (Vercel)

Set these in the Vercel project settings (Settings → Environment Variables):

- `ANTHROPIC_API_KEY` — required by `api/chat.ts` for the Inefable Assistant chat widget.
- `RESEND_API_KEY` — required by `api/contact.ts` to send contact-form leads by email.
- `CONTACT_EMAIL` — optional, destination inbox for contact-form leads (defaults to `inefableia.help@gmail.com`).
- `VITE_GA4_ID` — optional, Google Analytics 4 Measurement ID. Only loads after the visitor accepts analytics cookies.
- `VITE_META_PIXEL_ID` — optional, Meta Pixel ID. Only loads after the visitor accepts marketing cookies.
- `VITE_TURNSTILE_SITE_KEY` / `TURNSTILE_SECRET_KEY` — optional, Cloudflare Turnstile keys for the contact form. Without them, spam protection falls back to the honeypot field + IP rate limit already in `api/contact.ts`.

See `.env.example` for the full list with placeholder values.

## Known launch gaps

- **Legal pages are placeholders.** `/aviso-legal` and `/privacidad` render clearly-flagged `[PENDIENTE]` fields instead of a fabricated NIF/CIF and registered address — fill in `src/config/site.ts` and both pages once the legal entity is defined, then remove the `PlaceholderNotice` banners.
- **Custom domain not yet pointed.** Code assumes `inefableia.com` as canonical (see `src/config/site.ts`); add and verify that domain in the Vercel dashboard before relying on the sitemap, canonical tags, or the `www` redirect in `vercel.json`.
- **Google Business Profile** has not been created — see the launch checklist for NAP details and setup steps.
