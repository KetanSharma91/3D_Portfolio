import Hero from './section/Hero'
import ShowCaseSection from './section/ShowCaseSection'
import NavBar from './components/NavBar'
import LogoSection from './section/LogoSection'
import FeatureCards from './section/FeatureCards'
import ExperienceSection from './section/ExperienceSection'
import TechStack from './section/TechStack'
import Testimonials from './section/Testimonials'
import Contact from './section/Contact'
import Footer from './section/Footer'

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <ShowCaseSection />
      <LogoSection />
      <FeatureCards />
      <ExperienceSection />
      <TechStack />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default App