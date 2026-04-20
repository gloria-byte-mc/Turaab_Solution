import React from 'react'
import '../styles/cta.css'
import { useNavigate } from 'react-router-dom'

const CTA = () => {

  const navigate = useNavigate()
  
    const handleNavigation = (path) => {
      navigate(path)
    }
  
  return (
    <section className="cta-section">

      <div className="cta-content">
        <p className="cta-label">GET STARTED</p>
        <h2 className="cta-title">
          Ready to Equip Your <span>School?</span>
        </h2>
        <p className="cta-desc">
          Join schools across Kenya that trust Turaab Solutions for
          KICD-approved scientific calculators. Request a quote today
          and get the best deal for your institution.
        </p>

        <div className="cta-buttons">
          <a href="#contact" className="cta-btn-primary">Request a Quote ↗</a>
          <a  className="cta-btn-outline" onClick={()=> handleNavigation('/products')}>View Products</a>
        </div>
      </div>

    </section>
  )
}

export default CTA