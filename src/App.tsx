import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturesGrid from './components/FeaturesGrid'
import Showcase from './components/Showcase'
import HowWeHelp from './components/HowWeHelp'
import GettingStarted from './components/GettingStarted'
import Partnerships from './components/Partnerships'
import WhyChoose from './components/WhyChoose'
import Resources from './components/Resources'
import CtaSection from './components/CtaSection'
import Footer from './components/Footer'
import LogoMarquee from './components/LogoMarquee'

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="noise-overlay" aria-hidden="true" />
      <Navbar />
      <main>
        <Hero />
        <LogoMarquee />
        <FeaturesGrid />
        <Showcase />
        <HowWeHelp />
        <GettingStarted />
        <Partnerships />
        <WhyChoose />
        <Resources />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
