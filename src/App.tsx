import { useState } from 'react'
import { services, type Service } from './data'
import { AboutSection } from './components/AboutSection'
import { AnnouncementBar } from './components/AnnouncementBar'
import { BookingModal } from './components/BookingModal'
import { ContactSection } from './components/ContactSection'
import { GallerySection } from './components/GallerySection'
import { HeroSection } from './components/HeroSection'
import { QuoteSection } from './components/QuoteSection'
import { ServicesSection } from './components/ServicesSection'
import { SiteFooter } from './components/SiteFooter'
import { SiteHeader } from './components/SiteHeader'
import { TrustStrip } from './components/TrustStrip'
import './App.css'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [bookingOpen, setBookingOpen] = useState(false)
  const [selectedService, setSelectedService] = useState<Service>(services[0])
  const [bookingStep, setBookingStep] = useState(1)
  const [bookingConfirmed, setBookingConfirmed] = useState(false)

  const openBooking = (service = services[0]) => {
    setSelectedService(service)
    setBookingStep(1)
    setBookingConfirmed(false)
    setBookingOpen(true)
  }

  return (
    <div className="site-shell">
      <AnnouncementBar />
      <SiteHeader menuOpen={menuOpen} onMenuToggle={() => setMenuOpen(!menuOpen)} onCloseMenu={() => setMenuOpen(false)} onBook={() => openBooking()} />
      <main id="top">
        <HeroSection onBook={() => openBooking()} />
        <TrustStrip />
        <AboutSection />
        <ServicesSection onBook={openBooking} />
        <GallerySection onBook={() => openBooking()} />
        <QuoteSection onBook={() => openBooking()} />
        <ContactSection onBook={() => openBooking()} />
      </main>
      <SiteFooter />
      {bookingOpen && <BookingModal service={selectedService} setService={setSelectedService} step={bookingStep} setStep={setBookingStep} confirmed={bookingConfirmed} setConfirmed={setBookingConfirmed} onClose={() => setBookingOpen(false)} />}
    </div>
  )
}

export default App