import { LanguageProvider } from './hooks/useTranslation'
import Header from './components/Header'
import Hero from './components/Hero'
import LiveDemo from './components/LiveDemo'
import ScrollShowcase from './components/ScrollShowcase'
import Services from './components/Services'
import GrowthSection from './components/GrowthSection'
import Sectors from './components/Sectors'
import WhyInefable from './components/WhyInefable'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import ClientLogos from './components/ClientLogos'
import Pricing from './components/Pricing'
import TechStack from './components/TechStack'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ChatWidget from './components/ChatWidget'

function App() {
  return (
    <LanguageProvider>
      <div style={{ background: 'var(--color-bg)', color: 'var(--color-text)', minHeight: '100vh', overflowX: 'hidden', position: 'relative' }}>
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
      </div>
    </LanguageProvider>
  )
}

export default App
