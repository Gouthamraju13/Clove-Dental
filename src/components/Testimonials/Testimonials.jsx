import avatar1 from '../../assets/10.png'
import avatar2 from '../../assets/11.png'
import avatar3 from '../../assets/12.png'
import './Testimonials.css'

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      quote:
        'Was terrified of the dentist, but Clove Dental changed everything. I was pain free and calm.',
      author: 'Priya Sharma',
      avatar: avatar1,
      rating: 5
    },
    {
      id: 2,
      quote:
        'The precision and care during my implant procedure were outstanding. Highly recommended.',
      author: 'Rohit Verma',
      avatar: avatar2,
      rating: 5
    },
    {
      id: 3,
      quote:
        'My smile makeover is incredible. The doctors explained every step and made me feel comfortable.',
      author: 'Anjali Gupta',
      avatar: avatar3,
      rating: 5
    }
  ]

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <div className="section-header center">
          <span className="section-badge">SUCCESS STORIES</span>
          <h2>Real Smiles, Real Transformations</h2>
          <p>See the results our patients experienced every day.</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="quote-bubble">99</div>
              <div className="stars">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i}>*</span>
                ))}
              </div>
              <p className="quote">"{testimonial.quote}"</p>
              <div className="testimonial-author">
                <img src={testimonial.avatar} alt={testimonial.author} />
                <div>
                  <h4>{testimonial.author}</h4>
                  <p>Patient</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
