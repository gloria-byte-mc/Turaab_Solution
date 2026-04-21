import React from 'react'
import HeroSection from '../components/HeroSection'
import SchoolsCard from '../components/SchoolsCard'
import About from '../components/About'
import Products from '../components/Products'
import Why from '../components/Why'
import Purpose from '../components/Purpose'
import CTA from '../components/CTA'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import SEO from '../components/SEO'

const Home = () => {
  return (
    <>
     <SEO
        title="Turaab Solutions | KICD-Approved Scientific Calculators in Kenya"
        description="Kenya's trusted supplier of KICD-approved, non-programmable scientific calculators. Supporting schools with reliable exam-approved learning tools."
        keywords="KICD approved calculators, scientific calculators Kenya, CT PLUS SX-991MS, exam calculators Kenya, school calculators Nairobi"
        url=""
      />

    <HeroSection />
    <SchoolsCard />
    <About />
    <Products />
    <Why />
    <Purpose />
    <CTA />
    <Contact />
    <Footer />
    
    </>
  )
}

export default Home