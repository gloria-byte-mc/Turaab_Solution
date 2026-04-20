import React from 'react'
import Navbar from './Navbar'
import '../styles/contacthero.css'

const ContactHero = () => {
  return (
    <div className="contact-hero-wrapper">
      <Navbar />

      <section className="contact-hero">
        <div className="contact-hero-overlay"></div>

        <div className="contact-hero-content">
          <p className="contact-hero-label animate-slide-up delay-1">
            Contact Us
          </p>
          <h1 className="contact-hero-title animate-slide-up delay-2">
            Let's Talk About <br /> Your School's <span>Needs</span>
          </h1>
          <p className="contact-hero-subtitle animate-slide-up delay-3">
            Whether you need a bulk order or just have a question —
            we're here to help. Reach out and we'll get back to
            you promptly.
          </p>
        </div>

      </section>
    </div>
  )
}

export default ContactHero