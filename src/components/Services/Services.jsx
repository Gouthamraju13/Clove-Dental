import './Services.css'

export default function Services() {
  const services = [
    {
      name: 'Consultation',
      detail: 'Initial diagnosis and X-ray if needed',
      price: 'Rs. 500'
    },
    {
      name: 'Standard Root Canal',
      detail: 'Single visit, precision endodontics',
      price: 'Rs. 4,500'
    },
    {
      name: 'Laser Root Canal',
      detail: 'Advanced infection control care',
      price: 'Rs. 7,000'
    },
    {
      name: 'Crown (Cap)',
      detail: 'Ceramic / zirconia options',
      price: 'Rs. 3,500'
    }
  ]

  return (
    <section className="services-section" id="services">
      <div className="container">
        <div className="section-header center">
          <h2>Expert Guidance for Healthy Smiles</h2>
          <p>Transparent pricing for our most popular root canal services.</p>
        </div>

        <div className="services-list">
          <div className="services-header">
            <div>Treatment</div>
            <div>Starting From</div>
          </div>
          {services.map((service, index) => (
            <div key={index} className="service-row">
              <div className="service-name">
                <strong>{service.name}</strong>
                <span>{service.detail}</span>
              </div>
              <div className="service-price">{service.price}</div>
            </div>
          ))}
          <p className="services-note">
            *Prices may vary based on complexity of treatment or insurance benefits
          </p>
        </div>
      </div>
    </section>
  )
}
