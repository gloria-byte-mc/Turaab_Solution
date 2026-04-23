import React, { useEffect, useRef } from 'react'
import '../styles/whoweare.css'

const WhoWeAre = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('whoweare-visible')
          } else {
            entry.target.classList.remove('whoweare-visible')
          }
        })
      },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="whoweare-section" ref={sectionRef}>
      <div className="whoweare-top">

        {/* ── LEFT ── */}
        <div className="whoweare-left whoweare-animate-left">
          <p className="whoweare-label">
            <span className="label-dot"></span>
            About Us
          </p>
          <h2 className="whoweare-title">
            Who We <span>Are</span>
          </h2>
          <p className="whoweare-desc">
            Turaab Solutions Limited is a trusted importer and distributor
            of high-quality scientific calculators in Kenya. Headquartered
            in Nairobi, we are dedicated to supporting academic excellence
            by providing reliable and approved learning tools to schools
            across the country.
          </p>
          <p className="whoweare-desc">
            We focus on delivering products that meet educational standards
            and enhance students' performance in mathematics and science
            subjects. We believe that the right learning tools shape the
            future — and we remain committed to making them accessible to
            every school in Kenya.
          </p>
        </div>

        {/* ── RIGHT IMAGE ── */}
        <div className="whoweare-right whoweare-animate-right">
          <div className="whoweare-img-main">
            <img src="/images/turaabBanner3.jpg" alt="Turaab Solutions" />
          </div>
          <div className="whoweare-img-small">
            <img src="/images/calculator3.jpeg" alt="Students learning" />
          </div>
          <div className="whoweare-badge">
            <span className="badge-number">6+</span>
            <span className="badge-text">Partner Schools</span>
          </div>
        </div>

      </div>
    </section>
  )
}

export default WhoWeAre