import { LanguageProvider } from './hooks/useTranslation'
import Header from './components/Header'
import Hero from './components/Hero'
import ScrollShowcase from './components/ScrollShowcase'
import Services from './components/Services'
import RevealText from './components/RevealText'
import ServiceFlow from './components/ServiceFlow'
import StatCard from './components/StatCard'
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

          <section style={{ padding: '40px 6vw 100px', position: 'relative', zIndex: 1 }}>
            <div style={{ maxWidth: 1080, margin: '0 auto' }}>
              <RevealText size={38}>Web, ads e IA trabajando juntos por tu negocio</RevealText>
              <div style={{ height: 32 }} />
              <ServiceFlow items={['Web', 'Ads', 'IA']} target="Tu negocio" />

              <div style={{ height: 64 }} />

              <RevealText size={32}>Compromisos que sí cumplimos</RevealText>
              <div style={{ height: 28 }} />
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <StatCard value={24} suffix="h" label="tiempo de respuesta" desc="Te contactamos en menos de 24 horas laborables." />
                <StatCard value={3} label="rondas de ajuste" desc="Incluidas en cada proyecto, sin coste extra." />
                <StatCard value={100} suffix="%" label="remoto, cualquier país" desc="Trabajamos con clientes de cualquier parte del mundo, sin excepciones." />
              </div>
            </div>
          </section>

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
