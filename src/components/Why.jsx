import React from 'react'
import '../styles/why.css'
import { MdVerified } from 'react-icons/md'
import { FaSchool, FaBolt, FaMoneyBillWave, FaTruck } from 'react-icons/fa'

const reasons = [
  {
    icon: <MdVerified />,
    number: '01',
    title: 'KICD Certified',
    desc: "All products meet Kenya's national curriculum standards ensuring every calculator is exam-ready and fully compliant.",
    accent: 'blue',
  },
  {
    icon: <FaSchool />,
    number: '02',
    title: 'School Trusted',
    desc: 'Accredited by reputable institutions across Kenya. Hundreds of students rely on our products every exam season.',
    accent: 'green',
  },
  {
    icon: <FaBolt />,
    number: '03',
    title: 'High Quality',
    desc: 'Durable, accurate, and built to last through years of use in both classroom and high-pressure exam environments.',
    accent: 'blue',
  },
  {
    icon: <FaMoneyBillWave />,
    number: '04',
    title: 'Competitive Pricing',
    desc: 'Affordable for schools of all sizes and budgets. We offer bulk pricing and flexible payment options for institutions.',
    accent: 'green',
  },
  {
    icon: <FaTruck />,
    number: '05',
    title: 'Reliable Distribution',
    desc: 'Strong logistics network ensuring timely delivery to your school anywhere across Kenya.',
    accent: 'blue',
  },
]

const Why = () => {
  return (
    <section className="why-section" id="why">

      {/* ── HEADER ── */}
      <div className="why-header">
        <div className="why-header-left">
          <p className="why-label">WHY US</p>
          <h2 className="why-title">Why Choose <span>Turaab?</span></h2>
        </div>
        <p className="why-subtitle">
          Schools and institutions across Kenya trust us for our commitment
          to quality, compliance, and service.
        </p>
      </div>

      {/* ── REASONS LIST ── */}
      <div className="why-list">
        {reasons.map((r, i) => (
          <div className={`why-row ${r.accent === 'green' ? 'why-row-green' : ''}`} key={i}>

            <span className="why-row-number">{r.number}</span>

            <div className={`why-row-icon-wrap ${r.accent === 'green' ? 'icon-green' : 'icon-blue'}`}>
              <span className="why-row-icon">{r.icon}</span>
            </div>

            <div className="why-row-content">
              <h3 className="why-row-title">{r.title}</h3>
              <p className="why-row-desc">{r.desc}</p>
            </div>

            <div className={`why-row-bar ${r.accent === 'green' ? 'bar-green' : 'bar-blue'}`}></div>

          </div>
        ))}
      </div>

    </section>
  )
}

export default Why