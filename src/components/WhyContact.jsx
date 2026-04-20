import React, { useEffect, useRef } from 'react'
import '../styles/whycontact.css'
import { FaBolt, FaBoxOpen, FaTruck } from 'react-icons/fa'

const reasons = [
  {
    icon: <FaBolt />,
    title: 'Fast Response',
    desc: 'We respond to all enquiries within 24 hours — no long waits.',
    color: 'wc-yellow',
  },
  {
    icon: <FaBoxOpen />,
    title: 'Bulk Orders Welcome',
    desc: 'We cater to schools of all sizes — from small classes to entire institutions.',
    color: 'wc-green',
  },
  {
    icon: <FaTruck />,
    title: 'Nationwide Delivery',
    desc: 'We deliver to any school across Kenya — fast and reliably.',
    color: 'wc-blue',
  },
]

const WhyContact = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('wc-visible')
          } else {
            entry.target.classList.remove('wc-visible')
          }
        })
      },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="wc-section" ref={sectionRef}>

      <div className="wc-header wc-animate-up">
        <p className="wc-label">
          <span className="label-dot"></span>
          Why Reach Out
        </p>
        <h2 className="wc-title">
          Here's Why Schools <span>Choose</span> To Work With Us
        </h2>
      </div>

      <div className="wc-grid">
        {reasons.map((r, i) => (
          <div
            className="wc-card wc-animate-up"
            key={i}
            style={{ transitionDelay: `${0.1 + i * 0.15}s` }}
          >
            <div className={`wc-icon-wrap ${r.color}`}>
              <span className="wc-icon">{r.icon}</span>
            </div>
            <h3 className="wc-card-title">{r.title}</h3>
            <p className="wc-card-desc">{r.desc}</p>
          </div>
        ))}
      </div>

    </section>
  )
}

export default WhyContact