import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useTranslation } from '../hooks/useTranslation'
import { useDocumentHead } from '../hooks/useDocumentHead'
import Header from '../components/Header'
import Hero from '../components/Hero'
import LiveDemo from '../components/LiveDemo'
import ScrollShowcase from '../components/ScrollShowcase'
import Services from '../components/Services'
import GrowthSection from '../components/GrowthSection'
import Sectors from '../components/Sectors'
import WhyInefable from '../components/WhyInefable'
import Process from '../components/Process'
import Testimonials from '../components/Testimonials'
import ClientLogos from '../components/ClientLogos'
import Pricing from '../components/Pricing'
import TechStack from '../components/TechStack'
import FAQ from '../components/FAQ'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import ChatWidget from '../components/ChatWidget'
import WhatsAppButton from '../components/WhatsAppButton'
import StructuredData from '../components/StructuredData'

export default function LandingPage() {
  const { hash } = useLocation()
  const { t } = useTranslation()

  useDocumentHead(t.pageTitle, t.metaDescription, '/')

  useEffect(() => {
    if (!hash) return
    // React Router's client-side navigation (e.g. a <Link> from another
    // page) never triggers the browser's native hash scroll, and on a fresh
    // load the target can still shift as images/video above it finish
    // laying out — so retry on the next couple of frames instead of once.
    let frame = 0
    const tryScroll = () => {
      const el = document.querySelector(hash)
      if (el) {
        el.scrollIntoView({ block: 'start' })
      } else if (frame < 10) {
        frame += 1
        requestAnimationFrame(tryScroll)
      }
    }
    requestAnimationFrame(tryScroll)
  }, [hash])

  return (
    <div style={{ background: 'var(--color-bg)', color: 'var(--color-text)', minHeight: '100vh', overflowX: 'hidden', position: 'relative' }}>
      <StructuredData />
      <Header />
      <main>
        <Hero />
        <LiveDemo />
        <ScrollShowcase />
        <Services />
        <GrowthSection />
        <Sectors />
        <WhyInefable />
        <Process />
        <Testimonials />
        <ClientLogos />
        <Pricing />
        <TechStack />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <ChatWidget />
      <WhatsAppButton />
    </div>
  )
}
