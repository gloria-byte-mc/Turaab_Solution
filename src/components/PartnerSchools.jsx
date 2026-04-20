import React, { useEffect, useRef } from 'react'
import '../styles/partnerschools.css'
import { FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa'

const schools = [
  { name: 'Moi Airbase School', location: 'Nairobi', type: 'Primary & Secondary' },
  { name: 'Nairobi South School', location: 'Nairobi', type: 'Secondary School' },
  { name: 'Apex Girls Secondary School', location: 'Nairobi', type: 'Girls Secondary' },
  { name: 'Rapani Group of Schools', location: 'Nairobi', type: 'Group of Schools' },
  { name: 'Garissa High School', location: 'Garissa', type: 'Secondary School' },
  { name: 'Manara School', location: 'Garissa', type: 'Secondary School' },
]

const PartnerSchools = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('partners-visible')
          } else {
            entry.target.classList.remove('partners-visible')
          }
        })
      },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="partners-section" ref={sectionRef}>

      <div className="partners-header partners-animate-up">
        <p className="partners-label">
          <span className="label-dot"></span>
          Our Market Presence
        </p>
        <h2 className="partners-title">
          Schools That <span>Trust</span> Us
        </h2>
        <p className="partners-subtitle">
          A growing network of reputable schools across Kenya rely on
          our KICD-approved calculators every term.
        </p>
      </div>

      <div className="partners-grid">
        {schools.map((school, i) => (
          <div
            className="partner-card partners-animate-up"
            key={i}
            style={{ transitionDelay: `${0.1 + i * 0.1}s` }}
          >
            <div className="partner-initial">{school.name.charAt(0)}</div>
            <div className="partner-info">
              <h3 className="partner-name">{school.name}</h3>
              <div className="partner-meta">
                <span className="partner-location">
                  <FaMapMarkerAlt className="meta-icon" />
                  {school.location}
                </span>
                <span className="partner-dot">·</span>
                <span className="partner-type">{school.type}</span>
              </div>
            </div>
            <FaCheckCircle className="partner-check" />
          </div>
        ))}
      </div>

    </section>
  )
}

export default PartnerSchools