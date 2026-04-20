import React, { useEffect, useRef } from 'react'
import '../styles/keyfeatures.css'
import { MdVerified } from 'react-icons/md'
import { FaBolt, FaBan, FaGraduationCap, FaClock, FaShieldAlt } from 'react-icons/fa'

const features = [
  {
    icon: <MdVerified />,
    title: 'KICD Approved',
    desc: 'Officially recognized by the Kenya Institute of Curriculum Development — fully cleared for use in all Kenyan schools.',
    color: 'icon-green',
  },
  {
    icon: <FaBan />,
    title: 'Non-Programmable',
    desc: 'Fully compliant with national exam regulations. Students can use it confidently in KCSE and all national exams.',
    color: 'icon-blue',
  },
  {
    icon: <FaBolt />,
    title: 'Solar + Battery',
    desc: 'Dual-powered for maximum reliability — works in bright classrooms and dim exam halls alike.',
    color: 'icon-yellow',
  },
  {
    icon: <FaGraduationCap />,
    title: 'Exam Ready',
    desc: 'Designed specifically for mathematics and science subjects in both classroom learning and national examinations.',
    color: 'icon-navy',
  },
  {
    icon: <FaClock />,
    title: 'Built to Last',
    desc: 'Durable and accurate — built to withstand years of daily classroom use without compromising performance.',
    color: 'icon-green',
  },
  {
    icon: <FaShieldAlt />,
    title: 'Quality Assured',
    desc: 'Every calculator we supply meets strict quality standards — reliable tools your students can always count on.',
    color: 'icon-blue',
  },
]

const KeyFeatures = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('features-visible')
          } else {
            entry.target.classList.remove('features-visible')
          }
        })
      },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="features-section" ref={sectionRef}>

      <div className="features-header features-animate-up">
        <p className="features-label">
          <span className="label-dot"></span>
          Key Features
        </p>
        <h2 className="features-title">
          What Makes Our Calculator <span>Stand Out</span>
        </h2>
        <p className="features-subtitle">
          Every feature is designed with Kenyan students and schools in mind.
        </p>
      </div>

      <div className="features-grid">
        {features.map((f, i) => (
          <div
            className="feature-card features-animate-up"
            key={i}
            style={{ transitionDelay: `${0.1 + i * 0.1}s` }}
          >
            <div className={`feature-icon-wrap ${f.color}`}>
              <span className="feature-icon">{f.icon}</span>
            </div>
            <h3 className="feature-title">{f.title}</h3>
            <p className="feature-desc">{f.desc}</p>
          </div>
        ))}
      </div>

    </section>
  )
}

export default KeyFeatures