import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from 'react'
import { translations, type Lang, type Translations } from '../i18n/translations'

interface LanguageContextType {
  lang: Lang
  setLang: (lang: Lang) => void
  t: Translations
}

const LanguageContext = createContext<LanguageContextType | null>(null)

function getInitialLang(): Lang {
  try {
    const stored = localStorage.getItem('inefable-lang')
    if (stored === 'es' || stored === 'en') return stored
    const browser = navigator.language.slice(0, 2).toLowerCase()
    return browser === 'en' ? 'en' : 'es'
  } catch {
    return 'es'
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(getInitialLang)

  const setLang = useCallback((newLang: Lang) => {
    setLangState(newLang)
    try {
      localStorage.setItem('inefable-lang', newLang)
    } catch {
      // noop
    }
  }, [])

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useTranslation() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useTranslation must be used within LanguageProvider')
  return ctx
}
