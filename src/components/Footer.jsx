import React from 'react'
import '../styles/footer.css'
import { FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const Footer = () => {


   const navigate = useNavigate()
  
    const handleNavigation = (path) => {
      navigate(path)
    }

  return (
    <footer className="footer">

      <div className="footer-top">

        {/* ── BRAND ── */}
        <div className="footer-brand">
          <h3 className="footer-logo">Turaab Solutions</h3>
          <p className="footer-tagline">
            Kenya's trusted supplier of KICD-approved scientific calculators.
            Supporting schools with reliable exam-approved learning tools.
          </p>
          <div className="footer-socials">
            <a href="https://wa.me/254712598888" className="social-link" target="_blank" rel="noreferrer">
              <FaWhatsapp />
            </a>
            <a href="mailto:turaabsolutions@gmail.com" className="social-link">
              <FaEnvelope />
            </a>
            <a href="tel:+254712598888" className="social-link">
              <FaPhone />
            </a>
          </div>
        </div>

        {/* ── QUICK LINKS ── */}
        <div className="footer-col">
          <h4 className="footer-col-title">Quick Links</h4>
          <ul className="footer-links">
            <li><a onClick={()=> handleNavigation('/')}>Home</a></li>
            <li><a onClick={()=> handleNavigation('/about')}>About</a></li>
            <li><a onClick={()=> handleNavigation('/products')}>Products</a></li>
            <li><a onClick={()=> handleNavigation('/contact')}>Contact</a></li>
          </ul>
        </div>

        {/* ── PRODUCTS ── */}
        <div className="footer-col">
          <h4 className="footer-col-title">Products</h4>
          <ul className="footer-links">
            <li><a href="#product">C.T. PLUS SX-991MS</a></li>
            <li><a href="#product">KICD Approved</a></li>
            <li><a href="#product">Non-Programmable</a></li>
            <li><a href="#product">Solar + Battery</a></li>
          </ul>
        </div>

        {/* ── CONTACT ── */}
        <div className="footer-col">
          <h4 className="footer-col-title">Contact Us</h4>
          <ul className="footer-contact-list">
            <li>
              <FaMapMarkerAlt className="contact-icon" />
              <span>Nairobi, Kenya</span>
            </li>
            <li>
              <FaPhone className="contact-icon" />
              <span>+254 712 598 888</span>
            </li>
            <li>
              <FaEnvelope className="contact-icon" />
              <span>turaabsolutions@gmail.com</span>
            </li>
            <li>
              <FaWhatsapp className="contact-icon" />
              <span>WhatsApp Us</span>
            </li>
          </ul>
        </div>

      </div>

      {/* ── BOTTOM BAR ── */}
      <div className="footer-bottom">
        <p className="footer-copy">
          © {new Date().getFullYear()} Turaab Solutions. All rights reserved.
        </p>
        <p className="footer-credit">
          KICD Approved · Non-Programmable · Kenya
        </p>
      </div>

    </footer>
  )
}

export default Footer