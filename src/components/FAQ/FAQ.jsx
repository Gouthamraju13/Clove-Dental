import { useState } from 'react'
import './FAQ.css'

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null)

  const faqs = [
    {
      question: 'Is Root Canal treatment painful?',
      answer:
        'No, modern root canal treatment is painless. We use advanced anesthesia and techniques to ensure complete comfort during the procedure.'
    },
    {
      question: 'How many visits are required?',
      answer:
        'Most treatments can be completed in 1-3 visits, depending on the complexity. We use efficient techniques to minimize your time in the clinic.'
    },
    {
      question: 'Do you accept insurance?',
      answer:
        'Yes, we accept most dental insurance plans. Please contact us with your insurance details for specific coverage information.'
    },
    {
      question: 'What is the success rate?',
      answer:
        'Our success rate exceeds 95% with modern techniques and equipment. We follow all international standards for endodontic treatment.'
    }
  ]

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <div className="section-header center">
          <h2>Frequently Asked Questions</h2>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            >
              <button
                className="faq-question"
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <span>{faq.question}</span>
                <span className="faq-icon">
                  {activeIndex === index ? '-' : '+'}
                </span>
              </button>
              {activeIndex === index && (
                <div className="faq-answer">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
