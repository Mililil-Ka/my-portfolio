import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B0F19] text-[#E5E9F0]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
      </main>
      <Footer />
    </div>
  )
}
