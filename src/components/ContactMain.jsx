import React, { useState, useEffect, useRef } from 'react'
import '../styles/contactmain.css'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa'

const contactInfo = [
  {
    icon: <FaMapMarkerAlt />,
    label: 'Head Office',
    value: 'Nairobi, Kenya',
    color: 'info-blue',
  },
  {
    icon: <FaPhone />,
    label: 'Phone',
    value: '+254 712 598 888',
    color: 'info-green',
  },
  {
    icon: <FaEnvelope />,
    label: 'Email',
    value: 'turaabsolutions@gmail.com',
    color: 'info-blue',
  },
  {
    icon: <FaClock />,
    label: 'Business Hours',
    value: 'Mon - Fri: 8am - 6pm',
    color: 'info-green',
  },
]

const ContactMain = () => {
  const sectionRef = useRef(null)
  const [form, setForm] = useState({
    school: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', form)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('cmain-visible')
          } else {
            entry.target.classList.remove('cmain-visible')
          }
        })
      },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="cmain-section" ref={sectionRef} id="contact">

      <div className="cmain-layout">

        {/* ── LEFT: Info ── */}
        <div className="cmain-left cmain-animate-left">

          <p className="cmain-label">
            <span className="label-dot"></span>
            Contact Information
          </p>
          <h2 className="cmain-title">
            We'd Love to <span>Hear</span> From You
          </h2>
          <p className="cmain-desc">
            Reach out to us through any of the channels below and
            our team will get back to you as soon as possible.
          </p>

          <div className="cmain-info-list">
            {contactInfo.map((item, i) => (
              <div className="cmain-info-item" key={i}>
                <div className={`cmain-info-icon ${item.color}`}>
                  {item.icon}
                </div>
                <div>
                  <p className="cmain-info-label">{item.label}</p>
                  <p className="cmain-info-value">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* ── RIGHT: Form ── */}
        <div className="cmain-right cmain-animate-right">
          <div className="cmain-form-wrap">
            <h3 className="cmain-form-title">Send Us a Message</h3>

            <form className="cmain-form" onSubmit={handleSubmit}>

              <div className="cmain-form-row">
                <div className="cmain-form-group">
                  <label className="cmain-form-label">School Name</label>
                  <input
                    type="text"
                    name="school"
                    placeholder="e.g. Nairobi South School"
                    className="cmain-form-input"
                    value={form.school}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="cmain-form-group">
                  <label className="cmain-form-label">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="e.g. admin@school.ac.ke"
                    className="cmain-form-input"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="cmain-form-group">
                <label className="cmain-form-label">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="e.g. +254 700 000 000"
                  className="cmain-form-input"
                  value={form.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="cmain-form-group">
                <label className="cmain-form-label">Message</label>
                <textarea
                  name="message"
                  placeholder="Tell us how many calculators you need, your budget, or any other details..."
                  className="cmain-form-textarea"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="cmain-form-submit">
                Send Message ↗
              </button>

            </form>
          </div>
        </div>

      </div>
    </section>
  )
}

export default ContactMain