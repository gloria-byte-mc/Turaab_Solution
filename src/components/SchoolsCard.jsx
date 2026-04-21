import React from 'react'
import '../styles/schools-card.css'

const schools = [
  { name: 'Moi Airbase School', logo: '/images/moi.png' },
  { name: 'Nairobi South School', logo: '/images/nairobi2.png' },
  { name: 'Apex Girls Secondary', logo: '/images/apex.png' },
  { name: 'Rapani Group of Schools', logo: '/images/rapani.png' },
  { name: 'Garissa High School', logo: '/images/garissa.png' },
  { name: 'Manara School', logo: '/images/manara.png' },
]

const duplicated = [...schools, ...schools]

const SchoolsCard = () => {
  return (
    <section className="schools-section">
      <h2 className="schools-title">Trusted by Schools Across Kenya</h2>

      <div className="schools-carousel-wrap">
        <div className="schools-track">
          {duplicated.map((school, i) => (
            <div className="school-item" key={i}>
              <img
                src={school.logo}
                alt={school.name}
                className="school-logo-img"
              />
              <span className="school-name">{school.name}</span>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}

export default SchoolsCard