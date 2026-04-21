import React from 'react'
import ProductsHero from '../components/ProductsHero'
import ProductShowcase from '../components/ProductsShowcase'
import KeyFeatures from '../components/KeyFeatures'
import HowToOrder from '../components/HowToOrder'
import CTA from '../components/CTA'
import Footer from '../components/Footer'
import ProductsCTA from '../components/ProductsCTA'
import SEO from '../components/SEO'


const ProductsPage = () => {
  return (
    

    <>

     <SEO
        title="Products | CT PLUS SX-991MS Scientific Calculator - Turaab Solutions"
        description="Shop the CT PLUS SX-991MS scientific calculator — KICD-approved, non-programmable, solar and battery powered. Ideal for Kenyan classrooms and national exams."
        keywords="CT PLUS SX-991MS, scientific calculator Kenya, KICD approved calculator, non-programmable calculator, exam calculator Kenya"
        url=""
      />

    <ProductsHero />
    <ProductShowcase />
    <KeyFeatures/>
    <HowToOrder />
    <ProductsCTA />
    <Footer />
    
    </>
  )
}

export default ProductsPage 