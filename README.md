# Inefable — Landing Page

## Environment variables (Vercel)

Set these in the Vercel project settings (Settings → Environment Variables):

- `ANTHROPIC_API_KEY` — required by `api/chat.ts` for the Inefable Assistant chat widget.
- `RESEND_API_KEY` — required by `api/contact.ts` to send contact-form leads by email.
- `CONTACT_EMAIL` — optional, destination inbox for contact-form leads (defaults to `hola@inefable.es`).
