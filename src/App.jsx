import './App.css'
import ArchitectureSection from './components/ArchitectureSection.jsx'
import ContactSection from './components/ContactSection.jsx'
import ExperienceSection from './components/ExperienceSection.jsx'
import ExpertiseSection from './components/ExpertiseSection.jsx'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import HeroSection from './components/HeroSection.jsx'
import ProjectsSection from './components/ProjectsSection.jsx'
import StatsSection from './components/StatsSection.jsx'
import TestimonialsSection from './components/TestimonialsSection.jsx'

function App() {
  return (
    <div className="site-shell">
      <Header />

      <main>
        <HeroSection />
        <StatsSection />
        <ExpertiseSection />
        <ExperienceSection />
        <ProjectsSection />
        <ArchitectureSection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}

export default App
