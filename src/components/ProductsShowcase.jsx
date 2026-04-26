import React, { useEffect, useRef, useState } from 'react'
import '../styles/productshowcase.css'
import { useNavigate } from 'react-router-dom'

const tags = [
  { label: '✓ KICD Approved', style: 'tag-green' },
  { label: 'Non-Programmable', style: 'tag-outline2' },
  { label: 'Solar + Battery', style: 'tag-green' },
  { label: 'Exam Ready', style: 'tag-outline2' },
]

const specs = [
  { label: 'Brand', value: 'C.T. PLUS' },
  { label: 'Model', value: 'SX-991MS' },
  { label: 'Power', value: 'Solar + Battery' },
  { label: 'Approval', value: 'KICD Certified' },
]

const images = [
  '/images/calculator1.jpeg',
  '/images/calculator2.jpeg',
  '/images/calculator3.jpeg',
]

const ProductShowcase = () => {
  const sectionRef = useRef(null)
  const [current, setCurrent] = useState(0)
  const [animating, setAnimating] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      goNext()
    }, 2000)
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('showcase-visible')
          } else {
            entry.target.classList.remove('showcase-visible')
          }
        })
      },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()

  }, [])

   const navigate = useNavigate()
  
    const handleNavigation = (path) => {
      navigate(path)
    }
  

  return (
    <section className="showcase-section" ref={sectionRef} id="product">

      {/* ── HEADER ── */}
      <div className="showcase-header showcase-animate-up">
        <p className="showcase-label">
          <span className="label-dot"></span>
          Featured Product
        </p>
        <h2 className="showcase-title">
          Our <span>Flagship</span> Calculator
        </h2>
        <p className="showcase-subtitle">
          Designed for Kenyan students — accurate, durable and fully
          exam compliant.
        </p>
      </div>

      {/* ── MAIN LAYOUT ── */}
      <div className="showcase-layout">

        {/* ── LEFT: Image ── */}
        <div className="showcase-left showcase-animate-left">

          <div className="showcase-img-inner">
            {images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Product view ${i + 1}`}
                className={`showcase-carousel-img ${i === current ? 'active' : ''}`}
              />
            ))}

            {/* Floating badge */}
            <div className="showcase-float-badge">
              <span className="badge-icon">🏆</span>
              <div>
                <p className="badge-title">Best Seller</p>
                <p className="badge-sub">Trusted by 6+ Schools</p>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="showcase-dots">
            {images.map((_, i) => (
              <button
                key={i}
                className={`showcase-dot ${i === current ? 'dot-active' : ''}`}
                onClick={() => setCurrent(i)}
              />
            ))}
          </div>

        </div>

        {/* ── RIGHT: Info ── */}
        <div className="showcase-right">

          {/* Product name */}
          <div className="showcase-animate-up delay-1">
            <p className="showcase-brand">C.T. PLUS</p>
            <h3 className="showcase-product-title">
              SX-991MS Scientific <span>Calculator</span>
            </h3>
          </div>

          {/* Description */}
          <p className="showcase-desc showcase-animate-up delay-2">
            A feature-rich scientific calculator designed for accuracy
            and durability. Ideal for mathematics and science subjects
            in both classrooms and national examinations. Dual-powered
            with solar and battery backup.
          </p>

          {/* Specs */}
          <div className="showcase-specs showcase-animate-up delay-3">
            {specs.map((s, i) => (
              <div className="showcase-spec-item" key={i}>
                <p className="spec-label">{s.label}</p>
                <p className="spec-value">{s.value}</p>
              </div>
            ))}
          </div>

          {/* Tags */}
          <div className="showcase-tags showcase-animate-up delay-4">
            {tags.map((tag, i) => (
              <span key={i} className={`showcase-tag ${tag.style}`}>
                {tag.label}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="showcase-cta showcase-animate-up delay-5">
            <a  className="showcase-btn-primary" onClick={()=> handleNavigation('/contact')}>
              Request a Quote ↗
            </a>
            <a href="#howtoorder" className="showcase-btn-outline">
              How to Order
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}

export default ProductShowcase