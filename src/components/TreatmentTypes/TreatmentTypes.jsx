import img1 from '../../assets/9.png'
import img2 from '../../assets/7.png'
import img3 from '../../assets/8.png'
import './TreatmentTypes.css'

export default function TreatmentTypes() {
  const treatments = [
    {
      id: 1,
      title: 'Standard RCT',
      description:
        'Effective treatment for infected pulp using traditional, proven methods and durable cleaning tools.',
      image: img1,
      link: 'Learn More'
    },
    {
      id: 2,
      title: 'Laser RCT',
      description:
        'Advanced precision with laser technology designed to reduce bacteria and accelerate healing time.',
      image: img2,
      link: 'Learn More'
    },
    {
      id: 3,
      title: 'Re-treatment RCT',
      description:
        'Expert care for previously treated teeth that have not healed properly or have developed new issues.',
      image: img3,
      link: 'Learn More'
    }
  ]

  return (
    <section id="treatments" className="treatments-section">
      <div className="container">
        <div className="treatment-top">
          <div className="section-header">
            <h2>Types of Root Canal Treatments</h2>
            <p>
              We offer specialized root canal treatments tailored to your specific
              needs, using the latest technology for painless procedures.
            </p>
          </div>
          <a href="#services" className="view-all">
            View all services &gt;
          </a>
        </div>

        <div className="treatments-grid">
          {treatments.map((treatment) => (
            <div key={treatment.id} className="treatment-card">
              <img src={treatment.image} alt={treatment.title} />
              <h3><span>o</span>{treatment.title}</h3>
              <p>{treatment.description}</p>
              <a href="#" className="card-link">
                {treatment.link}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
