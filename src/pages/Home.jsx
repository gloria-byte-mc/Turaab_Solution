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

const Home = () => {
  return (
    <>

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