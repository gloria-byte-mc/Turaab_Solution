import React, { useEffect, useRef } from 'react'
import Navbar from './Navbar'
import '../styles/herosection.css'
import { useNavigate  } from 'react-router-dom'

const HeroSection = () => {
  const countUpRef = useRef(null)

   const navigate = useNavigate()
  
    const handleNavigation = (path) => {
      navigate(path)
    }

  useEffect(() => {
    const counters = document.querySelectorAll('.count-up')
    counters.forEach(counter => {
      const target = counter.getAttribute('data-target')
      if (!target) return
      let count = 0
      const increment = Math.ceil(parseInt(target) / 40)
      const timer = setInterval(() => {
        count += increment
        if (count >= parseInt(target)) {
          counter.textContent = target + '+'
          clearInterval(timer)
        } else {
          counter.textContent = count
        }
      }, 40)
    })
  }, [])

  return (
    <div className="hero-wrapper">
      <Navbar />

      <section className="hero">
        <div className="hero-overlay"></div>

        <div className="hero-content">

          {/* ── Heading + subtitle stay top left ── */}
          <h1 className="animate-slide-up delay-1">
            Kenya's Trusted Supplier of <span>KICD-Approved</span> Scientific Calculators
          </h1>

          <p className="animate-slide-up delay-2">
            Supporting schools with reliable exam-approved learning tools.
          </p>

          {/* ── Bottom row: buttons+stats LEFT, card RIGHT ── */}
          <div className="hero-bottom-row">

            {/* Left side */}
            <div className="hero-left animate-slide-up delay-3">
              <div className="hero-buttons">
                <a className="btn btn-primary" onClick={()=> handleNavigation('/contact')}>Request Quote</a>
                <a className="btn btn-outline" onClick={()=> handleNavigation('/products')}>View Products</a>
              </div>

              <div className="hero-stats">
                <div className="hero-stat">
                  <h3 className="count-up" data-target="6">6+</h3>
                  <p>Partner Schools</p>
                </div>
                <div className="hero-stat">
                  <h3>KICD</h3>
                  <p>Approved</p>
                </div>
                <div className="hero-stat">
                  <h3>100%</h3>
                  <p>Non-Programmable</p>
                </div>
              </div>
            </div>

            {/* Right side — insight card */}
            <div className="hero-insight-card animate-slide-up delay-4">
              <div className="insight-thumbnail"></div>
              <div className="insight-first-text">
                <h4> Empowering Kenyan Education</h4>
                <p>Delivering KICD-approved tools that give every student the right foundation for academic success.</p>
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  )
}

export default HeroSection