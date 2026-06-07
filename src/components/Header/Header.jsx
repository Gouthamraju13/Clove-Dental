import { FaTooth } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import './Header.css'

export default function Header({ menuOpen, setMenuOpen }) {
  return (
    <header className="header">
      <div className="header-container">
        <a href="#home" className="logo" onClick={() => setMenuOpen(false)}>
          <div className="logo-icon"><FaTooth /></div>
          <span>Clove Dental</span>
        </a>

        <button
          className={`hamburger ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav ${menuOpen ? 'active' : ''}`}>
          <a href="#treatments" onClick={() => setMenuOpen(false)}>
            Treatments
          </a>
          <a href="#locations" onClick={() => setMenuOpen(false)}>
            Locations
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
          <a href="tel:+919999999999" className="phone"> <FaPhoneAlt className="phone-icon" /> +91 999 999 9999</a>
          <a href="#contact" className="btn btn-primary" onClick={() => setMenuOpen(false)}>
            Book Appointment
          </a>
        </nav>
      </div>

      {menuOpen && <div className="menu-overlay" onClick={() => setMenuOpen(false)}></div>}
    </header>
  )
}
