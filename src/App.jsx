import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Qr from './components/Qr'
import Gallery from './components/Gallery'
import Services from './components/Services'
import Process from './components/Process'
import Cta from './components/Cta'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import { ChatWidget } from './components/ChatWidget' // Импортируем виджет

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-text">
      <Header />
      <main>
        <Hero />
        <About />
        <Qr />
        <Gallery />
        <Services />
        <Process />
        <Cta />
      </main>
      <Footer />
      <ScrollToTop />
      
      {/* Наш AI-помощник */}
      <ChatWidget
        theme={{
          primaryColor: '#8B5CF6',
          greeting: 'Привет! Я AI-помощник Ирины. Расскажу об услугах, покажу примеры работ и помогу связаться. С чего начнем? 😊',
          title: 'AI-помощник Ирины',
        }}
      />
    </div>
  )
}