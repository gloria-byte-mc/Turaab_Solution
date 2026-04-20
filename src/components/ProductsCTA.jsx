import React from 'react'
import '../styles/productscta.css'
import { useNavigate } from 'react-router-dom'

const ProductsCTA = () => {

   const navigate = useNavigate()
  
    const handleNavigation = (path) => {
      navigate(path)
    }
  return (
    <section className="pcta-section">

      <div className="pcta-content">
        <p className="pcta-label">GET STARTED</p>
        <h2 className="pcta-title">
          Ready to Equip Your <span>School?</span>
        </h2>
        <p className="pcta-desc">
          Join schools across Kenya that trust Turaab Solutions for
          KICD-approved scientific calculators. Request a quote today
          and get the best deal for your institution.
        </p>

        <div className="pcta-buttons">
          <a  className="pcta-btn-primary" onClick={()=> handleNavigation('/contact')}>Request a Quote ↗</a>
          <a  className="pcta-btn-outline" onClick={()=> handleNavigation('/')}>Back to Home</a>
        </div>
      </div>

    </section>
  )
}

export default ProductsCTA