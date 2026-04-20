import React from 'react'
import Navbar from './Navbar'
import '../styles/abouthero.css'

const stats = [
  { number: '6+', label: 'Partner Schools' },
  { number: '100%', label: 'KICD Approved' },
  { number: '100%', label: 'Non-Programmable' },
]

const AboutHero = () => {
  return (
    <div className="about-hero-wrapper">
      <Navbar />

      <section className="about-hero">
        <div className="about-hero-overlay"></div>

        <div className="about-hero-content">

          {/* ── LEFT ── */}
          <div className="about-hero-left">

            <p className="about-hero-label animate-slide-up delay-1">
              Who We Are
            </p>

            <h2 className="about-hero-title animate-slide-up delay-2">
              Empowering Students with <span>Trusted</span> Learning Tools
            </h2>

            <p className="about-hero-subtitle animate-slide-up delay-3">
              A Nairobi-based company dedicated to delivering KICD-approved
              scientific calculators to schools across Kenya.
            </p>

            {/* ── STATS ROW ── */}
            <div className="about-hero-stats animate-slide-up delay-4">
              {stats.map((s, i) => (
                <div className="about-hero-stat" key={i}>
                  <h3>{s.number}</h3>
                  <p>{s.label}</p>
                </div>
              ))}
            </div>

          </div>

          {/* ── RIGHT: Card ── */}
          <div className="about-hero-card animate-slide-up delay-4">
            <div className="about-hero-card-img">
              <img src="/images/students-using-calculator.png" alt="Turaab Solutions" />
            </div>
            <div className="about-hero-card-body">
              <h3>Empowering Kenyan Education</h3>
              <p>
                Delivering KICD-approved tools that give every student
                the right foundation for academic success.
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}

export default AboutHero