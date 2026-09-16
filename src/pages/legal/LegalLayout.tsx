import type { ReactNode } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import WhatsAppButton from '../../components/WhatsAppButton'

export default function LegalLayout({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div style={{ background: 'var(--color-bg)', color: 'var(--color-text)', minHeight: '100vh', position: 'relative' }}>
      <Header />
      <main style={{ padding: '40px 6vw 100px', maxWidth: 820, margin: '0 auto' }}>
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(28px,4vw,40px)',
            fontWeight: 800,
            marginBottom: 32,
            letterSpacing: '-.01em',
          }}
        >
          {title}
        </h1>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24, color: 'var(--color-muted)', fontSize: 15, lineHeight: 1.7 }}>
          {children}
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export function LegalSection({ heading, children }: { heading: string; children: ReactNode }) {
  return (
    <section>
      <h2 style={{ color: 'var(--color-text)', fontSize: 18, fontWeight: 700, marginBottom: 10 }}>{heading}</h2>
      {children}
    </section>
  )
}

export function PlaceholderNotice({ text }: { text: string }) {
  return (
    <div
      style={{
        background: 'rgba(255,180,60,.1)',
        border: '1px solid rgba(255,180,60,.35)',
        borderRadius: 12,
        padding: '14px 16px',
        color: '#ffcf8a',
        fontSize: 13.5,
        fontWeight: 600,
      }}
    >
      ⚠️ {text}
    </div>
  )
}
