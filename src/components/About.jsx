import React, { useEffect, useRef } from 'react'
import '../styles/about.css'
import { useNavigate } from 'react-router-dom'

const features = [
  'KICD-Approved Calculators',
  'Bulk School Supply Orders',
  'Fast & Reliable Delivery',
  'Dedicated School Support',
]

const About = () => {
  const sectionRef = useRef(null)

   const navigate = useNavigate()

  const handleNavigation = (path) => {
    navigate(path)
  }

useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('about-visible')
          } else {
            entry.target.classList.remove('about-visible')  
          }
        })
      },
      { threshold: 0.15 }  
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="about-section" id="about" ref={sectionRef}>
      <div className="about-container">

        {/* ── LEFT: Image collage ── */}
        <div className="about-images about-animate-left">
          <div className="about-img-main">
            <img src="/images/turaab-company.png" alt="Students using calculators" />
          </div>
          <div className="about-img-small">
            <img src="/images/calculator-brand-name.jpeg" alt="School supplies" />
          </div>
          <div className="about-badge">
            <span className="badge-number">6+</span>
            <span className="badge-text">Partner Schools</span>
          </div>
        </div>

        {/* ── RIGHT: Content ── */}
        <div className="about-content about-animate-right">
          <p className="about-label">
            <span className="label-dot"></span>
            About Company
          </p>

          <h2 className="about-title">
            Kenya's Trusted Scientific Calculator Supplier
          </h2>

          <p className="about-desc">
            We are a trusted Nairobi-based company dedicated to delivering reliable,
            approved learning tools to schools across Kenya. Our focus is simple —
            quality products that enhance student performance.
          </p>

          <ul className="about-features">
            {features.map((f, i) => (
              <li key={i} className="about-feature-item" style={{ animationDelay: `${0.4 + i * 0.1}s` }}>
                <span className="feature-icon">✔</span>
                {f}
              </li>
            ))}
          </ul>

          <div className="about-actions">
            <a  className="btn-read-more" onClick={()=> handleNavigation('/about')}>
              Learn More <span>↗</span>
            </a>
            <a
        href="https://youtu.be/axcMjWPiD2E"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-play"
        >
        ▶
       </a>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About