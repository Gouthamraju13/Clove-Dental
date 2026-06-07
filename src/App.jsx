import { useState } from 'react'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import TreatmentTypes from './components/TreatmentTypes/TreatmentTypes'
import Testimonials from './components/Testimonials/Testimonials'
import Features from './components/Features/Features'
import LocationMap from './components/LocationMap/LocationMap'
import Services from './components/Services/Services'
import FAQ from './components/FAQ/FAQ'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="app">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Hero />
      <TreatmentTypes />
      <Testimonials />
      <Features />
      <LocationMap />
      <Services />
      <FAQ />
      <Footer />
    </div>
  )
}

export default App
