import featureImg from '../../assets/5.png'
import './Features.css'

export default function Features() {
  const features = [
    {
      icon: 'OK',
      title: 'Advanced Sterilization',
      description: 'Hospital-grade hygiene standards'
    },
    {
      icon: 'OK',
      title: '3D Imaging Technology',
      description: 'Complete view for accurate diagnosis'
    },
    {
      icon: 'OK',
      title: 'Painless Procedures',
      description: 'State-of-the-art anesthesia delivery'
    }
  ]

  return (
    <section className="features-section" id="features">
      <div className="container">
        <div className="features-content">
          <div className="feature-media">
            <img src={featureImg} alt="Dental technology scanner" className="features-image" />
            <button className="media-play" aria-label="Play technology video"></button>
            <div className="feature-stats">
              <strong>10x<span>Safer</span></strong>
              <strong>45<span>min avg time</span></strong>
            </div>
          </div>
          <div className="features-text">
            <h2>Safety, Precision, and Innovation</h2>
            <p>
              We employ 4-step sterilization protocols and use AI-assisted
              diagnostics to ensure 100% precision in every treatment.
            </p>
            <div className="features-list">
              {features.map((feature, index) => (
                <div key={index} className="feature-item">
                  <span className="feature-icon">{feature.icon}</span>
                  <div>
                    <h4>{feature.title}</h4>
                    <p>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
