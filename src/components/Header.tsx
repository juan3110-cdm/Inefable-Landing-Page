import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { useTranslation } from '../hooks/useTranslation'
import type { Lang } from '../i18n/translations'
import Logo from './ui/Logo'

const NAV_LINKS = [
  { key: 'services' as const, href: '#servicios' },
  { key: 'why' as const, href: '#porque' },
  { key: 'process' as const, href: '#proceso' },
  { key: 'pricing' as const, href: '#tarifas' },
  { key: 'contact' as const, href: '#contacto' },
]

export default function Header() {
  const { t, lang, setLang } = useTranslation()
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const toggleLang = () => setLang(lang === 'es' ? 'en' : 'es')

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        display: 'grid',
        gridTemplateColumns: '1fr auto 1fr',
        alignItems: 'center',
        gap: 8,
        padding: '12px 6vw',
        backdropFilter: 'blur(16px)',
        background: 'rgba(7,7,11,.85)',
        borderBottom: '1px solid var(--color-border-soft)',
      }}
    >
      {/* Desktop nav */}
      <nav className="hidden md:flex items-center gap-3 flex-wrap justify-self-start">
        {NAV_LINKS.map(({ key, href }) => (
          <a
            key={key}
            href={href}
            style={{ fontSize: 12, color: '#cfc9dd', fontWeight: 600, whiteSpace: 'nowrap' }}
          >
            {t.nav[key]}
          </a>
        ))}
      </nav>

      {/* Logo */}
      <a href="#" className="justify-self-center">
        <Logo size={19} />
      </a>

      {/* Right: lang selector + CTA */}
      <div className="hidden md:flex items-center gap-3 justify-self-end flex-wrap">
        <LangToggle lang={lang} onToggle={toggleLang} />
        <a
          href="#contacto"
          style={{
            background: 'var(--color-accent-gradient)',
            color: '#fff',
            fontSize: 13,
            fontWeight: 700,
            padding: '9px 18px',
            borderRadius: 100,
            whiteSpace: 'nowrap',
          }}
        >
          {t.nav.cta}
        </a>
      </div>

      {/* Mobile: lang + hamburger */}
      <div className="flex md:hidden items-center gap-3 justify-self-end col-start-3">
        <LangToggle lang={lang} onToggle={toggleLang} />
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="w-9 h-9 flex flex-col items-center justify-center gap-[6px]"
          style={{ borderRadius: 8 }}
          aria-label="Menú"
        >
          <span
            className="block w-5 h-px transition-all duration-300"
            style={{
              backgroundColor: '#fff',
              transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none',
            }}
          />
          <span
            className="block w-5 h-px transition-all duration-300"
            style={{ backgroundColor: '#fff', opacity: menuOpen ? 0 : 1 }}
          />
          <span
            className="block w-5 h-px transition-all duration-300"
            style={{
              backgroundColor: '#fff',
              transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none',
            }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            style={{
              gridColumn: '1 / -1',
              backgroundColor: 'rgba(7,7,11,.98)',
              borderTop: '1px solid var(--color-border-soft)',
              overflow: 'hidden',
            }}
          >
            <nav className="px-2 pb-6 pt-4 flex flex-col gap-1">
              {NAV_LINKS.map(({ key, href }) => (
                <a
                  key={key}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="py-3 text-base border-b last:border-0"
                  style={{ color: '#cfc9dd', borderColor: 'var(--color-border-soft)' }}
                >
                  {t.nav[key]}
                </a>
              ))}
              <a
                href="#contacto"
                onClick={() => setMenuOpen(false)}
                className="mt-3 text-center text-sm font-bold px-4 py-3"
                style={{ background: 'var(--color-accent-gradient)', color: '#fff', borderRadius: 100 }}
              >
                {t.nav.cta}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

function LangToggle({ lang, onToggle }: { lang: Lang; onToggle: () => void }) {
  return (
    <div
      style={{
        display: 'flex',
        background: 'rgba(255,255,255,.06)',
        border: '1px solid rgba(255,255,255,.1)',
        borderRadius: 100,
        padding: 3,
      }}
    >
      <button
        onClick={() => lang !== 'es' && onToggle()}
        style={{
          border: 'none',
          background: lang === 'es' ? '#fff' : 'transparent',
          color: lang === 'es' ? '#0b0b12' : '#cfc9dd',
          fontSize: 12,
          fontWeight: 700,
          padding: '6px 12px',
          borderRadius: 100,
          cursor: 'pointer',
          letterSpacing: '.03em',
        }}
      >
        ES
      </button>
      <button
        onClick={() => lang !== 'en' && onToggle()}
        style={{
          border: 'none',
          background: lang === 'en' ? '#fff' : 'transparent',
          color: lang === 'en' ? '#0b0b12' : '#cfc9dd',
          fontSize: 12,
          fontWeight: 700,
          padding: '6px 12px',
          borderRadius: 100,
          cursor: 'pointer',
          letterSpacing: '.03em',
        }}
      >
        EN
      </button>
    </div>
  )
}
