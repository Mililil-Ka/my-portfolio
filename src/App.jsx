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
    </div>
  )
}