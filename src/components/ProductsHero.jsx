import React from 'react'
import Navbar from './Navbar'
import '../styles/productshero.css'

const ProductsHero = () => {
  return (
    <div className="products-hero-wrapper">
      <Navbar />

      <section className="products-hero">
        <div className="products-hero-overlay"></div>

        <div className="products-hero-content">

          <div className="products-hero-left">
            <p className="products-hero-label animate-slide-up delay-1">
              Our Products
            </p>
            <h1 className="products-hero-title animate-slide-up delay-2">
              Built for Kenya's <span>Classrooms</span> & Exam Halls
            </h1>
            <p className="products-hero-subtitle animate-slide-up delay-3">
              KICD-approved, non-programmable scientific calculators
              trusted by schools across Kenya.
            </p>

            <div className="products-hero-tags animate-slide-up delay-4">
              <span className="hero-tag">✓ KICD Approved</span>
              <span className="hero-tag">✓ Non-Programmable</span>
              <span className="hero-tag">✓ Solar + Battery</span>
            </div>
          </div>

          {/* ── CARD ── */}
          <div className="products-hero-card animate-slide-up delay-4">
            <div className="products-hero-card-img">
              <img src="/images/calculator1.jpeg" alt="CT PLUS SX-991MS" />
            </div>
            <div className="products-hero-card-body">
              <h3>CT PLUS SX-991MS</h3>
              <p>Our flagship scientific calculator — exam ready and school approved.</p>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}

export default ProductsHero