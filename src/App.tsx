import { useEffect, Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './hooks/useTranslation'
import LandingPage from './pages/LandingPage'
import CookieConsent from './components/CookieConsent'
import { initTrackingFromStoredConsent } from './lib/analytics'

// Code-split the low-traffic pages so the landing page — what nearly every
// visitor hits — doesn't ship their weight in its initial bundle.
const AvisoLegal = lazy(() => import('./pages/legal/AvisoLegal'))
const PrivacyPolicy = lazy(() => import('./pages/legal/PrivacyPolicy'))
const CookiePolicy = lazy(() => import('./pages/legal/CookiePolicy'))
const NotFound = lazy(() => import('./pages/NotFound'))

function App() {
  useEffect(() => {
    initTrackingFromStoredConsent()
  }, [])

  return (
    <LanguageProvider>
      <BrowserRouter>
        <Suspense fallback={<div style={{ minHeight: '100vh', background: 'var(--color-bg)' }} />}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/aviso-legal" element={<AvisoLegal />} />
            <Route path="/privacidad" element={<PrivacyPolicy />} />
            <Route path="/cookies" element={<CookiePolicy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <CookieConsent />
      </BrowserRouter>
    </LanguageProvider>
  )
}

export default App
