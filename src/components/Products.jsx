import React, { useEffect, useRef, useState } from 'react'
import '../styles/products.css'
import { useNavigate } from 'react-router-dom'

const tags = [
  { label: '✓ KICD Approved', style: 'tag-green' },
  { label: 'Non-Programmable', style: 'tag-outline' },
  { label: 'Solar + Battery', style: 'tag-green' },
  { label: 'Exam Ready', style: 'tag-outline' },
]

const images = [
  '/images/calculator1.jpeg',
  '/images/calculator2.jpeg', // ← add your actual image paths here
  '/images/calculator3.jpeg',
]

const Products = () => {
  const sectionRef = useRef(null)
  const [current, setCurrent] = useState(0)
  const [animating, setAnimating] = useState(false)

   const navigate = useNavigate()
  
    const handleNavigation = (path) => {
      navigate(path)
    }

  // Auto rotate every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      goNext()
    }, 5000)
    return () => clearInterval(timer)
  }, [current])

  const goNext = () => {
    if (animating) return
    setAnimating(true)
    setTimeout(() => {
      setCurrent(prev => (prev + 1) % images.length)
      setAnimating(false)
    }, 400)
  }

  const goPrev = () => {
    if (animating) return
    setAnimating(true)
    setTimeout(() => {
      setCurrent(prev => (prev - 1 + images.length) % images.length)
      setAnimating(false)
    }, 400)
  }

  // Scroll observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('products-visible')
          } else {
            entry.target.classList.remove('products-visible')
          }
        })
      },
      { threshold: 0.15 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="products-section" id="product" ref={sectionRef}>

      <h2 className="products-heading product-animate-up">Our Products</h2>

      <div className="product-card">

        {/* ── LEFT: Image Carousel ── */}
        <div className="product-img-wrap product-animate-left">

          {/* Images */}
          <div className="product-img-inner">
            {images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Product view ${i + 1}`}
                className={`carousel-img ${i === current ? 'active' : ''}`}
              />
            ))}
          </div>

          {/* Arrows 
          <button className="carousel-arrow arrow-left" onClick={goPrev}>‹</button>
          <button className="carousel-arrow arrow-right" onClick={goNext}>›</button>
          */}

          {/* Dots */}
          <div className="carousel-dots">
            {images.map((_, i) => (
              <button
                key={i}
                className={`carousel-dot ${i === current ? 'dot-active' : ''}`}
                onClick={() => setCurrent(i)}
              />
            ))}
          </div>

        </div>

        {/* ── RIGHT: Info ── */}
        <div className="product-info">
          <h3 className="product-title product-animate-up delay-1">
            C.T. PLUS SX-991MS Scientific Calculator
          </h3>
          <p className="product-desc product-animate-up delay-2">
            Our flagship product — a feature-rich scientific calculator designed for
            accuracy and durability. Ideal for mathematics and science subjects in
            both classrooms and national examinations. Dual-powered with solar
            and battery backup, it keeps students working in any environment.
          </p>

          <div className="product-tags product-animate-up delay-3">
            {tags.map((tag, i) => (
              <span key={i} className={`product-tag ${tag.style}`}>
                {tag.label}
              </span>
            ))}
          </div>


          {/* ── ADD THIS ── */}
<div className="product-cta product-animate-up delay-4">
 
  <a  className="product-btn-outline" onClick={()=> handleNavigation('/products')}>Learn More</a>
</div>
        </div>

      </div>
    </section>
  )
}

export default Products