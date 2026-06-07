import heroImage from '../../assets/4.png'
import avatar1 from '../../assets/10.png'
import avatar2 from '../../assets/11.png'
import avatar3 from '../../assets/12.png'
import { HiShieldCheck } from 'react-icons/hi2'
import './Hero.css'

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <span className="hero-badge">DIGITAL DENTISTRY 2025</span>
          <h1 className="hero-title">
            Your Smile,
            <span>Our Passion.</span>
          </h1>
          <p className="hero-description">
            Advanced dental care with safety, precision, and compassion.
            Experience world class dentistry with state of the art technology.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">Book Consultation</a>
            <a href="#features" className="btn btn-secondary">
              <span className="play-dot">i</span>
              How we work
            </a>
          </div>
          <div className="hero-trust">
            <div className="hero-avatars">
              <img src={avatar1} alt="Smiling patient" />
              <img src={avatar2} alt="Smiling patient" />
              <img src={avatar3} alt="Smiling patient" />
            </div>
            <p>Trusted by <strong>40,000+</strong> happy patients</p>
          </div>
        </div>
        <div className="hero-visual">
          <img src={heroImage} alt="Clove Dental doctor" />
          <div className="hero-card">
            <span className="hero-card-icon"><HiShieldCheck /></span>
            <div>
              <strong>Certified Safe</strong>
              <p>100% sterilized equipment</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
