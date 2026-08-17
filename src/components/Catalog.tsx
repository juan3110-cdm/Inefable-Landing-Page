import { useState } from 'react'
import { useTranslation } from '../hooks/useTranslation'
import type { CatalogService, CatalogPack } from '../i18n/translations'
import { firePrefill } from '../lib/prefill'

function ServiceCard({ svc }: { svc: CatalogService }) {
  const { t } = useTranslation()
  const c = t.catalog

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 14,
        background: 'linear-gradient(160deg,rgba(255,255,255,.05),rgba(255,255,255,.015))',
        border: '1px solid rgba(255,255,255,.09)',
        borderRadius: 18,
        padding: '24px 22px',
      }}
    >
      <div>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 10, marginBottom: 8 }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 700, margin: 0 }}>{svc.name}</h3>
          {svc.recurring && (
            <span
              style={{
                flexShrink: 0,
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: '.03em',
                textTransform: 'uppercase',
                color: 'var(--color-accent-purple-light)',
                border: '1px solid rgba(168,133,255,.4)',
                borderRadius: 100,
                padding: '3px 9px',
                whiteSpace: 'nowrap',
              }}
            >
              {c.recurringLabel}
            </span>
          )}
        </div>
        <p style={{ color: 'var(--color-muted)', fontSize: 13.5, lineHeight: 1.55, margin: 0 }}>{svc.pitch}</p>
      </div>

      <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
        {svc.bullets.map((b) => (
          <li key={b} style={{ display: 'flex', gap: 8, alignItems: 'baseline', fontSize: 12.5, color: '#c8c2d9' }}>
            <span style={{ color: 'var(--color-accent-purple)', fontWeight: 800, flexShrink: 0 }}>✓</span>
            {b}
          </li>
        ))}
      </ul>

      <div style={{ marginTop: 'auto', paddingTop: 12, borderTop: '1px solid rgba(255,255,255,.08)', display: 'flex', flexDirection: 'column', gap: 6 }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 14px', fontSize: 13 }}>
          {svc.setup && (
            <span>
              <span style={{ color: 'var(--color-subtle)' }}>{c.setupLabel} </span>
              <strong style={{ color: '#fff' }}>{svc.setup}</strong>
            </span>
          )}
          {svc.monthly && (
            <span>
              <strong style={{ color: '#fff' }}>{svc.monthly}</strong>
              <span style={{ color: 'var(--color-subtle)' }}>{c.monthlyLabel}</span>
            </span>
          )}
        </div>
        <div style={{ fontSize: 11.5, color: 'var(--color-subtle)' }}>
          {c.idealForLabel}: {svc.idealFor}
        </div>
        <a
          href="#contacto"
          onClick={() => firePrefill({ message: `${c.ctaLabel}: ${svc.name}` })}
          style={{
            marginTop: 8,
            fontSize: 13,
            fontWeight: 700,
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            gap: 6,
          }}
        >
          {c.ctaLabel} <span>→</span>
        </a>
      </div>
    </div>
  )
}

function PackCard({ pack }: { pack: CatalogPack }) {
  const { t } = useTranslation()
  const c = t.catalog

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        background: 'linear-gradient(160deg,rgba(108,138,255,.14),rgba(108,138,255,.02))',
        border: '1px solid rgba(168,133,255,.35)',
        borderRadius: 20,
        padding: '26px 24px',
      }}
    >
      <div>
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 19, fontWeight: 800, margin: '0 0 6px' }}>{pack.name}</h3>
        <p style={{ color: 'var(--color-accent-purple-light)', fontSize: 13, fontWeight: 600, margin: 0 }}>{pack.tagline}</p>
      </div>

      <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
        {pack.includes.map((i) => (
          <li key={i} style={{ display: 'flex', gap: 8, alignItems: 'baseline', fontSize: 13, color: '#d8d3e6' }}>
            <span style={{ color: 'var(--color-accent-purple)', fontWeight: 800, flexShrink: 0 }}>✓</span>
            {i}
          </li>
        ))}
      </ul>

      <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, flexWrap: 'wrap' }}>
        <div>
          <div style={{ fontSize: 11, color: 'var(--color-subtle)', textTransform: 'uppercase', letterSpacing: '.04em' }}>{c.setupLabel}</div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 800 }}>{pack.setup}</div>
        </div>
        <div>
          <div style={{ fontSize: 11, color: 'var(--color-subtle)', textTransform: 'uppercase', letterSpacing: '.04em' }}>
            {c.monthlyLabel.replace('/', '')}
          </div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 800 }}>{pack.monthly}</div>
        </div>
      </div>

      <div style={{ fontSize: 12, color: 'var(--color-subtle)' }}>
        {c.idealForLabel}: {pack.idealFor}
      </div>

      <a
        href="#contacto"
        onClick={() => firePrefill({ message: pack.cta })}
        style={{
          background: 'var(--color-accent-gradient)',
          color: '#fff',
          fontWeight: 700,
          fontSize: 14,
          padding: 13,
          borderRadius: 100,
          textAlign: 'center',
        }}
      >
        {pack.cta}
      </a>
    </div>
  )
}

export default function Catalog() {
  const { t } = useTranslation()
  const c = t.catalog
  const [activeCat, setActiveCat] = useState(0)

  return (
    <section id="catalogo" style={{ padding: '40px 6vw 120px', position: 'relative', zIndex: 1 }}>
      <div style={{ textAlign: 'center', marginBottom: 40, maxWidth: 640, marginLeft: 'auto', marginRight: 'auto' }}>
        <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '.08em', color: 'var(--color-subtle)', textTransform: 'uppercase', marginBottom: 14 }}>
          {c.eyebrow}
        </div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px,4vw,42px)', fontWeight: 800, margin: '0 0 14px', letterSpacing: '-.01em' }}>
          {c.title}
        </h2>
        <p style={{ color: 'var(--color-muted)', fontSize: 14.5, lineHeight: 1.6, margin: 0 }}>{c.subtitle}</p>
      </div>

      {/* Category tabs */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 8,
          maxWidth: 1080,
          margin: '0 auto 36px',
        }}
      >
        {c.categories.map((cat, i) => (
          <button
            key={cat.key}
            onClick={() => setActiveCat(i)}
            style={{
              border: `1px solid ${activeCat === i ? 'transparent' : 'rgba(255,255,255,.14)'}`,
              background: activeCat === i ? 'var(--color-accent-gradient)' : 'rgba(255,255,255,.04)',
              color: activeCat === i ? '#fff' : '#cfc9dd',
              fontWeight: 700,
              fontSize: 12.5,
              padding: '10px 16px',
              borderRadius: 100,
              cursor: 'pointer',
              whiteSpace: 'nowrap',
            }}
          >
            {cat.title}
          </button>
        ))}
      </div>

      {/* Services grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
          gap: 20,
          maxWidth: 1080,
          margin: '0 auto',
        }}
      >
        {c.categories[activeCat].services.map((svc) => (
          <ServiceCard key={svc.key} svc={svc} />
        ))}
      </div>

      {/* Packs */}
      <div style={{ textAlign: 'center', margin: '90px auto 40px', maxWidth: 640 }}>
        <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '.08em', color: 'var(--color-subtle)', textTransform: 'uppercase', marginBottom: 14 }}>
          {c.packsEyebrow}
        </div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px,3.4vw,34px)', fontWeight: 800, margin: '0 0 14px', letterSpacing: '-.01em' }}>
          {c.packsTitle}
        </h2>
        <p style={{ color: 'var(--color-muted)', fontSize: 14.5, lineHeight: 1.6, margin: 0 }}>{c.packsSubtitle}</p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
          gap: 20,
          maxWidth: 1080,
          margin: '0 auto',
        }}
      >
        {c.packs.map((pack) => (
          <PackCard key={pack.key} pack={pack} />
        ))}
      </div>
    </section>
  )
}
