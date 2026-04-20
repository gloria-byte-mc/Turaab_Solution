import React from 'react'
import '../styles/schools-card.css'

const schools = [
  'Moi Airbase School',
  'Nairobi South School',
  'Apex Girls Secondary',
  'Rapani Group',
  'Garissa High School',
  'Manara School',
]

const SchoolsCard = () => {
  return (
    <section className="schools-section">
      <h2 className="schools-title">Trusted by Schools Across Kenya</h2>
      <div className="schools-list">
        {schools.map((school, index) => (
          <div className="school-item" key={index}>
            <span className="school-dot"></span>
            <span className="school-name">{school}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SchoolsCard