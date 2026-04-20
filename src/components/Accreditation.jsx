import React, { useEffect, useRef } from 'react'
import '../styles/accreditation.css'
import { MdVerified } from 'react-icons/md'
import { FaBan, FaBolt, FaGraduationCap } from 'react-icons/fa'

const badges = [
  {
    icon: <MdVerified />,
    title: 'KICD Approved',
    desc: 'Recognized by the Kenya Institute of Curriculum Development as an approved learning gadget.',
    color: 'icon-green',
  },
  {
    icon: <FaBan />,
    title: 'Non-Programmable',
    desc: 'Fully compliant with national exam rules — students can use it confidently in any exam.',
    color: 'icon-red',
  },
  {
    icon: <FaBolt />,
    title: 'Solar + Battery',
    desc: 'Dual-powered for reliability in any environment — classroom or exam hall.',
    color: 'icon-yellow',
  },
  {
    icon: <FaGraduationCap />,
    title: 'Exam Ready',
    desc: 'Designed and approved for use in KCSE and other national examinations across Kenya.',
    color: 'icon-blue',
  },
]

const Accreditation = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('accred-visible')
          } else {
            entry.target.classList.remove('accred-visible')
          }
        })
      },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="accred-section" ref={sectionRef}>
      <div className="accred-overlay"></div>

      <div className="accred-content">

        <div className="accred-header accred-animate-up">
          <p className="accred-label">ACCREDITATION & COMPLIANCE</p>
          <h2 className="accred-title">
            Products You Can <span>Trust</span>
          </h2>
          <p className="accred-subtitle">
            Every calculator we supply meets Kenya's national education
            standards — fully approved, fully compliant, fully reliable.
          </p>
        </div>

        <div className="accred-grid">
          {badges.map((b, i) => (
            <div
              className="accred-card accred-animate-up"
              key={i}
              style={{ transitionDelay: `${0.1 + i * 0.15}s` }}
            >
              <div className={`accred-icon-wrap ${b.color}`}>
                <span className="accred-icon">{b.icon}</span>
              </div>
              <h3 className="accred-card-title">{b.title}</h3>
              <p className="accred-card-desc">{b.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Accreditation