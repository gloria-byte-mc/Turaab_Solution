import React, { useState } from 'react'
import '../styles/contact.css'

const Contact = () => {
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
    // hook up your backend or email service here
  }

  return (
    <section className="contact-section" id="contact">

      <div className="contact-header">
        <p className="contact-label">GET IN TOUCH</p>
        <h2 className="contact-title">Contact Us</h2>
        <p className="contact-subtitle">
          Fill in the form below and we'll get back to you with a quote
          tailored to your school's needs.
        </p>
      </div>

      <div className="contact-form-wrap">
        <form className="contact-form" onSubmit={handleSubmit}>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label">School Name</label>
              <input
                type="text"
                name="school"
                placeholder="e.g. Nairobi South School"
                className="form-input"
                value={form.school}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="e.g. admin@school.ac.ke"
                className="form-input"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="e.g. +254 700 000 000"
              className="form-input"
              value={form.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Message</label>
            <textarea
              name="message"
              placeholder="Tell us how many calculators you need, your budget, or any other details..."
              className="form-textarea"
              rows={6}
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="form-submit">
            Send Message ↗
          </button>

        </form>
      </div>

    </section>
  )
}

export default Contact