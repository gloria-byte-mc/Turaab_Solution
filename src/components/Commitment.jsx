import React, { useEffect, useRef } from 'react'
import '../styles/commitment.css'
import { useNavigate } from 'react-router-dom'

const Commitment = () => {
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
            entry.target.classList.add('commit-visible')
          } else {
            entry.target.classList.remove('commit-visible')
          }
        })
      },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  

  return (
    <section className="commit-section" ref={sectionRef}>

      <div className="commit-content commit-animate-up">
        <p className="commit-label">OUR COMMITMENT</p>

        <blockquote className="commit-quote">
          "We believe that the right learning tools <span>shape the future.</span>"
        </blockquote>

        <p className="commit-desc">
          At Turaab Solutions Limited, we remain committed to supporting
          schools, teachers, and students with reliable products that
          enhance academic success — today and for generations to come.
        </p>

        <div className="commit-actions">
          <a  className="commit-btn-primary" onClick={()=> handleNavigation('/contact')}>Get In Touch ↗</a>
          <a  className="commit-btn-outline" onClick={()=> handleNavigation('/')}>Back to Home</a>
        </div>
      </div>

    </section>
  )
}

export default Commitment