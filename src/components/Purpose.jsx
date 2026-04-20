import React, { useEffect, useRef } from 'react'
import '../styles/purpose.css'

const Purpose = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('purpose-visible')
          } else {
            entry.target.classList.remove('purpose-visible')
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
    <section className="purpose-section" id="purpose" ref={sectionRef}>
      <div className="purpose-overlay"></div>

      {/* Giant background text */}
      <span className="purpose-bg-text">PURPOSE</span>

      <div className="purpose-content">

        {/* ── HEADER ── */}
        <div className="purpose-header purpose-animate-up">
          <span className="purpose-label">OUR PURPOSE</span>
          <h2 className="purpose-title">Mission <span>&</span> Vision</h2>
          <p className="purpose-subtitle">
            The principles that drive every calculator we deliver.
          </p>
        </div>

        {/* ── SPLIT LAYOUT ── */}
        <div className="purpose-split">

          {/* ── MISSION ── */}
          <div className="purpose-side mission-side purpose-animate-up delay-1">
            <div className="side-number">01</div>
            <div className="side-accent blue-accent"></div>
            <p className="side-tag">Mission</p>
            <h3 className="side-title">Quality Tools for Every Student</h3>
            <p className="side-desc">
              To provide high-quality, affordable, and KICD-approved scientific
              calculators that empower students and support quality education
              across Kenya.
            </p>
            <ul className="side-list">
              <li><span className="list-dot blue-dot"></span>KICD Approved products</li>
              <li><span className="list-dot blue-dot"></span>Affordable for all schools</li>
              <li><span className="list-dot blue-dot"></span>Nationwide availability</li>
            </ul>
          </div>

          {/* ── CENTER DIVIDER ── */}
          <div className="purpose-center purpose-animate-up delay-2">
            <div className="center-line"></div>
            <div className="center-circle">
              <span>T</span>
            </div>
            <div className="center-line"></div>
          </div>

          {/* ── VISION ── */}
          <div className="purpose-side vision-side purpose-animate-up delay-3">
            <div className="side-number">02</div>
            <div className="side-accent green-accent"></div>
            <p className="side-tag">Vision</p>
            <h3 className="side-title">East Africa's Leading Supplier</h3>
            <p className="side-desc">
              To become the leading supplier of scientific calculators and
              educational tools in Kenya and the wider East African region.
            </p>
            <ul className="side-list">
              <li><span className="list-dot green-dot"></span>Regional market leader</li>
              <li><span className="list-dot green-dot"></span>Trusted by institutions</li>
              <li><span className="list-dot green-dot"></span>East Africa expansion</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Purpose