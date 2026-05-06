import { Navbar } from './components/Navbar'
import { HeroSection } from './components/HeroSection'
import { ServicesSection } from './components/ServicesSection'
import { PortfolioSection } from './components/PortfolioSection'
import { AboutSection } from './components/AboutSection'
import { ContactSection } from './components/ContactSection'
import { Footer } from './components/Footer'
import { LanguageProvider, useLanguage } from './contexts/LanguageContext'

function AppContent() {
  const { language } = useLanguage()
  
  return (
    <div 
      className="min-h-screen bg-background text-foreground" 
      style={{ 
        fontFamily: language === 'ar' ? "'Cairo', sans-serif" : "'DM Sans', sans-serif",
        direction: language === 'ar' ? 'rtl' : 'ltr'
      }}
    >
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <PortfolioSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  )
}
