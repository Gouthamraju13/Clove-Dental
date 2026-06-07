import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-content">
        <div className="footer-section">
          <h4><span className="footer-logo">C</span> Clove Dental</h4>
          <p>India's largest dental network committed to painless, precise, and compassionate care.</p>
          <div className="social-links">
            <a href="#" aria-label="Facebook">
              f
            </a>
            <a href="#" aria-label="Twitter">
              X
            </a>
            <a href="#" aria-label="Instagram">
              IG
            </a>
            <a href="#" aria-label="LinkedIn">
              in
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="#treatments">Treatments</a>
            </li>
            <li>
              <a href="#locations">Locations</a>
            </li>
            <li>
              <a href="#testimonials">Testimonials</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Services</h4>
          <ul>
            <li>
              <a href="#">Root Canal Treatment</a>
            </li>
            <li>
              <a href="#">Crown & Bridge</a>
            </li>
            <li>
              <a href="#">Cosmetic Dentistry</a>
            </li>
            <li>
              <a href="#">Emergency Care</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <p><FaMapMarkerAlt className="contact-icon" /> Multiple locations across India</p>
          <p><FaPhoneAlt className="contact-icon" /> +91 999-999-9999</p>
          <p> <MdEmail className="contact-icon" /> info@clovedental.com</p>
        </div>
      </div>

    <div className="footer-bottom">
      <p>&copy; 2026 Clove Dental. All rights reserved.</p>
      <div className="footer-links">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
        <a href="#">Sitemap</a>
      </div>
    </div>
  </footer>
  )
}
