import { LanguageProvider } from './hooks/useTranslation'
import Header from './components/Header'
import Hero from './components/Hero'
import ScrollShowcase from './components/ScrollShowcase'
import Services from './components/Services'
import WhyInefable from './components/WhyInefable'
import Process from './components/Process'
import ClientLogos from './components/ClientLogos'
import Pricing from './components/Pricing'
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
          <ScrollShowcase />
          <Services />
          <WhyInefable />
          <Process />
          <ClientLogos />
          <Pricing />
          <Contact />
        </main>
        <Footer />
        <ChatWidget />
      </div>
    </LanguageProvider>
  )
}

export default App
