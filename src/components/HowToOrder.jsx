import React, { useEffect, useRef } from 'react'
import '../styles/howtoorder.css'
import { FaPhoneAlt, FaClipboardCheck, FaTruck } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const steps = [
  {
    icon: <FaPhoneAlt />,
    step: '01',
    title: 'Request a Quote',
    desc: 'Contact us via phone, email or the form on our website. Tell us how many calculators you need and we will get back to you promptly.',
  },
  {
    icon: <FaClipboardCheck />,
    step: '02',
    title: 'We Confirm Your Order',
    desc: 'Our team reviews your request, confirms availability, and sends you a detailed quote with pricing and delivery timelines.',
  },
  {
    icon: <FaTruck />,
    step: '03',
    title: 'Fast Delivery to Your School',
    desc: 'Once the order is confirmed, we deliver directly to your school anywhere across Kenya — fast and reliably.',
  },
]

const HowToOrder = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('order-visible')
          } else {
            entry.target.classList.remove('order-visible')
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
    <section className="order-section" id="howtoorder" ref={sectionRef}>

      <div className="order-header order-animate-up">
        <p className="order-label">
          <span className="label-dot"></span>
          Simple Process
        </p>
        <h2 className="order-title">
          How to <span>Order</span>
        </h2>
        <p className="order-subtitle">
          Getting calculators for your school is simple —
          just three easy steps.
        </p>
      </div>

      <div className="order-steps">
        {steps.map((s, i) => (
          <div
            className="order-step order-animate-up"
            key={i}
            style={{ transitionDelay: `${0.1 + i * 0.15}s` }}
          >
            {/* connector line */}
            {i < steps.length - 1 && (
              <div className="order-connector"></div>
            )}

            <div className="order-step-top">
              <div className="order-icon-wrap">
                <span className="order-icon">{s.icon}</span>
              </div>
              <span className="order-step-num">{s.step}</span>
            </div>

            <h3 className="order-step-title">{s.title}</h3>
            <p className="order-step-desc">{s.desc}</p>

          </div>
        ))}
      </div>

      <div className="order-cta order-animate-up">
        <a className="order-btn" onClick={()=> handleNavigation('/contact')}>
          Request a Quote Now ↗
        </a>
      </div>

    </section>
  )
}

export default HowToOrder